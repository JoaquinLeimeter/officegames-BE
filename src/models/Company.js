import mongoose, { model } from 'mongoose'

const { Schema } = mongoose
const hi = () => {
  
}
const companySchema = new Schema({
  name: { type: String, required: true },
})

export default model("Postulants", companySchema)
