//Helper function to sort image filenames by the number in their name (e.g., 1.png, 2.png, etc.)
const sortByNumber = ([a]: [string, unknown], [b]: [string, unknown]) => {
  const numA = parseInt(a.match(/(\d+)\.png$/)?.[1] ?? "0");
  const numB = parseInt(b.match(/(\d+)\.png$/)?.[1] ?? "0");
  return numA - numB;
};

//Helper function to load images from a glob import, sorting them by the number in their filename (e.g., 1.png, 2.png, etc.)
const loadImages = (modules: Record<string, unknown>) =>
  Object.entries(modules).sort(sortByNumber).map(([, mod]: any) => mod.default);

//Images
const fashionVerseImages = loadImages(import.meta.glob("../../../assets/fahsionverse/*.png", { eager: true }));
const UniMLProjImages = loadImages(import.meta.glob("../../../assets/UniversityMLProject/*.png", { eager: true }));
const yoloImages = loadImages(import.meta.glob("../../../assets/YOLOHelmetProject/*.png", { eager: true }));
const auctionProject = loadImages(import.meta.glob("../../../assets/AuctionProject/*.png", { eager: true }));
const DLProject = loadImages(import.meta.glob("../../../assets/DLProject/*.png", { eager: true }))
const XpertNurse = loadImages(import.meta.glob("../../../assets/XpertNurse/*.png", { eager: true }))
export const PROJECTS = [
  {
    title: "FashionVerse: Web Application",
    descriptions: [
      "\"FashionVerse\" is a platform that fashion enthusiasts could enjoy. The concept was to combine several features that those enthusiasts need and look for into one.",
      "In FashionVerse, you could inspire or be inspired — whether you're a stylist, fashion expert, or simply looking for a decent clothing.",
    ],
    techTags: ["Python", "Django", "MySQL", "Bootstrap", "JavaScript", "HTML", "CSS", "Responsive Design"],
    projectLink: "https://github.com/IsraaHmd/FashionVerse-SeniorProject",
    images: fashionVerseImages,
  },
  {
    title:"Deep Learning Project: Pneumonia Detection from Chest X-Rays",
    descriptions: [
      "A deep learning project that classifies chest X-ray images as either Normal or Pneumonia, demonstrating how AI can support medical diagnosis.",
      "Started with a basic CNN architecture, then implemented transfer learning using DenseNet121.",
      "Implemented class imbalance handling with balanced validation sets, data augmentation, and early stopping to prevent overfitting.",
    ],
    techTags: ["Python","TensorFlow/Keras","OpenCV", "NumPy", "Pandas","Matplotlib & Seaborn", "scikit-learn"],
    projectLink:"https://github.com/IsraaHmd/Pneumonia-Detection-from-X-Rays-Deep-Learning",
    images: DLProject,
  },
  {
    title: "Computer Vision: Hard Hat Detection System with YOLOv8",
    descriptions: [
      "Developed a computer vision model for workplace safety compliance using YOLOv8 to detect workers with/without helmets.",
      "Trained on 5,000 annotated images, achieving [0.94%] mAP50, 0.923 Precision, and 0.887 Recall upon testing."
    ],
    techTags: [
    "Python",
    "YOLOv8",
    "Ultralytics",
    "PyTorch",
    "OpenCV",
    "NumPy",
    "Matplotlib",
    "scikit-learn"
  ],
    projectLink: "https://github.com/IsraaHmd/Computer-Vision-Hard-Hat-Detection-System-with-YOLOv8",
    images: yoloImages,
  },
  {
    title: "XpertNurse: Machine Learning and Data Science Internship Project (Healthcare)",
    descriptions: [
      "A 5-phase healthcare data science internship project that includes data exploration, cleaning and analysis in addition to machine learning models.",
      "Implemented rule-based, model-based or both approaches for health status classification, patient clustering, doctor recommendation, and vitals anomaly detection, along with an interactive Streamlit dashboard for healthcare insights."
    ],
    techTags: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Streamlit",
      "MySQL",
      "ngrok",
    ],
    projectLink: "https://github.com/IsraaHmd/XpertBot_Internship_Project_XpertNurse",
    images: [XpertNurse],
  },
  {
    title: "University Admission Prediction",
    descriptions: [
      "Machine Learning Project — predicting the likelihood of university admission based on factors like university rating, test scores, and other academic indicators.",
      "The model uses Linear Regression, compared with other regressors for performance evaluation.",
    ],
    techTags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    projectLink: "https://github.com/IsraaHmd/University-Admission-Prediction-MachineLearningProejct",
    images: UniMLProjImages,
  },
  {
    title: "Auction — Django Web Project",
    descriptions: [
      "A Django-based web application that allows users to register, log in, create listings for items to be bid on, place bids, comment on listings, add items to a Wishlist, and end their own listings.",
    ],
    techTags: ["Django", "Python", "HTML", "CSS", "JavaScript"],
    projectLink: "https://github.com/IsraaHmd/Auction-CS50-Project-Final",
    images: auctionProject,
  },
  {
    title: "Note and To-do List — Mobile Application",
    descriptions: [
      "A mobile application for taking notes and managing to-do lists.",
      "Features include writing and organizing notes and tasks, color-coded notes, user authentication, and more.",
    ],
    techTags: ["Dart", "Flutter", "Android Studio"],
    projectLink: "https://github.com/IsraaHmd/Todo-Note-MobileProject-Part2",
    images: [],
  },
];

/*
{
    title: "Automatic Plant Watering System",
    descriptions: [
      "An Arduino-based automatic plant watering system powered by a solar panel. Displays real-time moisture readings and motor status.",
      "Includes buttons to adjust and save moisture thresholds stored in EEPROM, ensuring values persist after power loss.",
    ],
    techTags: ["C++", "Tinkercad"],
    projectLink: "https://www.tinkercad.com/things/jnoqf6SvEQ2-automatic-plant-watering-system?sharecode=5hdLAX3bbLZAOH8BnNMrK2zhg_PbNFm3trgFY6Fwyjg",
    images: [],
  },
 */