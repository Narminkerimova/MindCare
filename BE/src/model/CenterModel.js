import mongoose from "mongoose";

const centerSchema = new mongoose.Schema({
  name: { type: String, required: true },               
  city: { type: String, required: true },               
  status: { type: Boolean, default: true },             
  fullAddress: { type: String, required: true },        
  phoneNumber: { type: String, required: true },       
  specialties: { type: [String], default: [] },       
  doctorsCount: { type: Number, default: 0 },           
  workingHours: {                                       
    start: { type: String, required: true },
    end: { type: String, required: true }
  },
  rating: { type: Number, default: 0, min: 0, max: 5 },
  photoUrl:{type: String, required: true }
}, { timestamps: true });

export const Center = mongoose.model("Center", centerSchema);

// {
//   "name": "",               
//   "city": "Bakı",               
//   "status": true,             
//   "fullAddress": "",        
//   "phoneNumber":"0125550101",       
//   "specialties": ["Ümumi psixoloji",
//       "Nitq",
//       "Psixoloji yardım"],       
//   "doctorsCount": 100,           
//   "workingHours": {                                       
//     "start": "09:00",
//     "end": "00:00"
//   },
//   "rating": 4.5,
//   "photoUrl":""
// }