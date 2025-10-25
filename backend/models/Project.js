import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    icon: 
        { type: String, 
        default: "FolderIcon" },
    
    tasks: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Task",
        },
      ],

    numTasks: {
      type: Number,
      default: 0, 
    },

    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },

    progress: {
      type: Number,
      default: 0, 
      min: 0,
      max: 100,
    },
  },

  { timestamps: true }
);


const Project = mongoose.model("Project", ProjectSchema);

export default Project;
