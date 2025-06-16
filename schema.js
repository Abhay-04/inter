import mongoose from 'mongoose';

const opportunitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  offering: {
    type: String,
    required: true,
  },
  valueConstructs: {
    type: [String],
    required: true,
  },
  stipend: {
    type: Boolean,
    required: true,
  },
  stipendAmount: {
    type: Number,
    required: function () {
      return this.stipend;
    },
  },
  preplacementOffer: {
    type: Boolean,
    required: true,
  },
  letterOfRecommendation: {
    type: Boolean,
    required: true,
  },
  workMode: {
    type: String,
    required: true,
  },
  workLocation: {
    type: String,
    required: function () {
      return this.workMode === 'offline' || this.workMode === 'hybrid';
    },
  },
  workHours: {
    type: String,
    required: true,
  },
  workHourStart: {
    type: String,
  },
  workHourEnd: {
    type: String,
  },
  timeCommitment: {
    type: String,
    required: true,
  },
  academicAccommodation: {
    type: Boolean,
    required: true,
  },
}, {
  timestamps: true, // automatically adds createdAt and updatedAt fields
});

const Opportunity = mongoose.model('Opportunity', opportunitySchema);

export default Opportunity;

