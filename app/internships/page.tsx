'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  DollarSign, 
  Briefcase,
  Bookmark,
  ExternalLink,
  Star,
  ArrowRight,
  Building,
  Clock
} from 'lucide-react';
import { getInternships } from '@/lib/database';
import { formatCurrency, formatDate } from '@/lib/utils';
import { Internship } from '@/lib/types';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';

const InternshipsPage = () => {
  const [internships, setInternships] = useState<Internship[]>([]);
  const [filteredInternships, setFilteredInternships] = useState<Internship[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [minStipend, setMinStipend] = useState('');

  const locations = [
    { value: '', label: 'All Locations' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Hyderabad', label: 'Hyderabad' },
    { value: 'Chennai', label: 'Chennai' },
    { value: 'Pune', label: 'Pune' },
    { value: 'Remote', label: 'Remote' }
  ];

  useEffect(() => {
    const loadInternships = async () => {
      try {
        const data = await getInternships();
        setInternships(data);
        setFilteredInternships(data);
      } catch (error) {
        console.error('Error loading internships:', error);
      } finally {
        setLoading(false);
      }
    };

    loadInternships();
  }, []);

  useEffect(() => {
    let filtered = internships;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(internship =>
        internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        internship.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Location filter
    if (selectedLocation) {
      filtered = filtered.filter(internship => internship.location === selectedLocation);
    }

    // Stipend filter
    if (minStipend) {
      const stipend = parseInt(minStipend);
      filtered = filtered.filter(internship => internship.stipend >= stipend);
    }

    setFilteredInternships(filtered);
  }, [internships, searchTerm, selectedLocation, minStipend]);

  const handleApply = (internship: Internship) => {
    window.open(internship.applicationUrl, '_blank');
  };

  const handleBookmark = (internshipId: string) => {
    // In a real app, this would save to user's bookmarks
    console.log('Bookmarked internship:', internshipId);
  };

  const getStipendColor = (stipend: number) => {
    if (stipend >= 25000) return 'text-green-600';
    if (stipend >= 15000) return 'text-blue-600';
    return 'text-orange-600';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading internships...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find Your Dream Internship
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with top companies and gain valuable experience through 
            internships that match your skills and career goals.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <Input
                    placeholder="Search internships, companies, or skills..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    leftIcon={<Search className="h-5 w-5" />}
                  />
                </div>
                <Select
                  options={locations}
                  value={selectedLocation}
                  onChange={setSelectedLocation}
                  placeholder="Select Location"
                />
              </div>
              <div className="mt-4">
                <Input
                  placeholder="Minimum stipend (e.g., 15000)"
                  value={minStipend}
                  onChange={(e) => setMinStipend(e.target.value)}
                  leftIcon={<DollarSign className="h-5 w-5" />}
                  type="number"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Results Count */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between">
            <p className="text-gray-600">
              Found <span className="font-semibold text-primary-600">{filteredInternships.length}</span> internships
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Filter className="h-4 w-4" />
              <span>Filtered results</span>
            </div>
          </div>
        </motion.div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredInternships.map((internship, index) => (
            <motion.div
              key={internship.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {internship.title}
                      </h3>
                      <div className="flex items-center space-x-2 mb-2">
                        <Building className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600 font-medium">{internship.company}</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {internship.description}
                      </p>
                    </div>
                    <button
                      onClick={() => handleBookmark(internship.id)}
                      className="text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Stipend */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="h-5 w-5 text-green-600" />
                        <span className={`text-lg font-bold ${getStipendColor(internship.stipend)}`}>
                          {formatCurrency(internship.stipend)}/month
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">Top Company</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{internship.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{internship.duration}</span>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                      <div className="space-y-1">
                        {internship.requirements.slice(0, 3).map((requirement, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{requirement}</span>
                          </div>
                        ))}
                        {internship.requirements.length > 3 && (
                          <span className="text-sm text-primary-600">
                            +{internship.requirements.length - 3} more requirements
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-3 pt-4">
                      <Button
                        onClick={() => handleApply(internship)}
                        className="flex-1"
                      >
                        Apply Now
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredInternships.length === 0 && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <Briefcase className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No internships found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or filters
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedLocation('');
                setMinStipend('');
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">
              Why Choose EduFi for Internships?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div>
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-primary-100">Companies</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-primary-100">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">₹25K</div>
                <div className="text-primary-100">Avg. Stipend</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InternshipsPage;
