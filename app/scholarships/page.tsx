'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  DollarSign, 
  Award,
  Bookmark,
  ExternalLink,
  Star,
  ArrowRight
} from 'lucide-react';
import { getScholarships } from '@/lib/database';
import { formatCurrency, formatDate } from '@/lib/utils';
import { Scholarship } from '@/lib/types';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';

const ScholarshipsPage = () => {
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [filteredScholarships, setFilteredScholarships] = useState<Scholarship[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minAmount, setMinAmount] = useState('');

  const regions = [
    { value: '', label: 'All Regions' },
    { value: 'All India', label: 'All India' },
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Tamil Nadu', label: 'Tamil Nadu' },
    { value: 'West Bengal', label: 'West Bengal' }
  ];

  const categories = [
    { value: '', label: 'All Categories' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Medical', label: 'Medical' },
    { value: 'Arts', label: 'Arts' },
    { value: 'Commerce', label: 'Commerce' },
    { value: 'Science', label: 'Science' },
    { value: 'General', label: 'General' },
    { value: 'STEM', label: 'STEM' }
  ];

  useEffect(() => {
    const loadScholarships = async () => {
      try {
        const data = await getScholarships();
        setScholarships(data);
        setFilteredScholarships(data);
      } catch (error) {
        console.error('Error loading scholarships:', error);
      } finally {
        setLoading(false);
      }
    };

    loadScholarships();
  }, []);

  useEffect(() => {
    let filtered = scholarships;

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(scholarship =>
        scholarship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholarship.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Region filter
    if (selectedRegion) {
      filtered = filtered.filter(scholarship => scholarship.region === selectedRegion);
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(scholarship => scholarship.category === selectedCategory);
    }

    // Amount filter
    if (minAmount) {
      const amount = parseInt(minAmount);
      filtered = filtered.filter(scholarship => scholarship.amount >= amount);
    }

    setFilteredScholarships(filtered);
  }, [scholarships, searchTerm, selectedRegion, selectedCategory, minAmount]);

  const handleApply = (scholarship: Scholarship) => {
    window.open(scholarship.applicationUrl, '_blank');
  };

  const handleBookmark = (scholarshipId: string) => {
    // In a real app, this would save to user's bookmarks
    console.log('Bookmarked scholarship:', scholarshipId);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading scholarships...</p>
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
            Find Your Perfect Scholarship
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover thousands of scholarship opportunities tailored to your profile, 
            background, and academic achievements.
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="lg:col-span-2">
                  <Input
                    placeholder="Search scholarships..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    leftIcon={<Search className="h-5 w-5" />}
                  />
                </div>
                <Select
                  options={regions}
                  value={selectedRegion}
                  onChange={setSelectedRegion}
                  placeholder="Select Region"
                />
                <Select
                  options={categories}
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  placeholder="Select Category"
                />
              </div>
              <div className="mt-4">
                <Input
                  placeholder="Minimum amount (e.g., 10000)"
                  value={minAmount}
                  onChange={(e) => setMinAmount(e.target.value)}
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
              Found <span className="font-semibold text-primary-600">{filteredScholarships.length}</span> scholarships
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Filter className="h-4 w-4" />
              <span>Filtered results</span>
            </div>
          </div>
        </motion.div>

        {/* Scholarships Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredScholarships.map((scholarship, index) => (
            <motion.div
              key={scholarship.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {scholarship.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {scholarship.description}
                      </p>
                    </div>
                    <button
                      onClick={() => handleBookmark(scholarship.id)}
                      className="text-gray-400 hover:text-yellow-500 transition-colors"
                    >
                      <Bookmark className="h-5 w-5" />
                    </button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Amount */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Award className="h-5 w-5 text-green-600" />
                        <span className="text-lg font-bold text-green-600">
                          {formatCurrency(scholarship.amount)}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">High Success Rate</span>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">{scholarship.region}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-gray-600">
                          Deadline: {formatDate(scholarship.deadline)}
                        </span>
                      </div>
                    </div>

                    {/* Eligibility */}
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Eligibility:</h4>
                      <div className="space-y-1">
                        {scholarship.eligibility.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{item}</span>
                          </div>
                        ))}
                        {scholarship.eligibility.length > 3 && (
                          <span className="text-sm text-primary-600">
                            +{scholarship.eligibility.length - 3} more requirements
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center space-x-3 pt-4">
                      <Button
                        onClick={() => handleApply(scholarship)}
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
        {filteredScholarships.length === 0 && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <Award className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No scholarships found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search criteria or filters
            </p>
            <Button
              onClick={() => {
                setSearchTerm('');
                setSelectedRegion('');
                setSelectedCategory('');
                setMinAmount('');
              }}
            >
              Clear Filters
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ScholarshipsPage;
