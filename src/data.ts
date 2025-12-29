
import type { ProfileData } from './types';

export const PROFILE_DATA: ProfileData = {
    name: "Ashwin Phadke",
    title: "Building AI for the legal industry",
    avatarUrl: "/profile.jpeg",
    email: "ashwinphadke12@rediffmail.com",
    socials: {
        github: "https://github.com/ashwin-phadke",
        twitter: "https://twitter.com/ashwinphadke1",
        linkedin: "https://www.linkedin.com/in/ashwin-phadke1041995/"
    },
    skills: ["Natural Language Processing", "Language models", "Computer Vision", "Deep Learning"],
    about: `
  With over 5+ years of experience in the fields of Deep learning, Computer Vision, Data Science and analytics, machine learning algorithms, and software development it has always been my priority to build scalable products.

I've always been keen on developing efficient products and staying up-to-date with the latest trends and technologies that help me utilize and update my skills.

I believe in sharing valuable knowledge and insights in fostering mutual growth and success helping to be inclusive in every aspects of the organization.
Be it coding new solutions or meeting new people , I believe in utilizing my time efficiently which helps me stay in check.

I am also keen on putting my skills to use for the society by speaking at conferences and tech meetups on Deep Learning , Computer Vision , Artificial Intelligence, Data science technologies and also following my passion by speaking for open web, privacy and security and contribubting towards open source projects. 
As a part of social responsibility, I volunteer in organizations like Rotary as a director of professional development. `,
    projects: [
        // Repositories
        {
            title: "implementations-and-guides",
            description: "A repository for documenting the steps and code for implementation on various computer vision programs and techniques.",
            tags: ["Repository", "Jupyter Notebook"],
            link: "https://github.com/ashwin-phadke/implementations-and-guides"
        },
        {
            title: "cvplayground",
            description: "A computer vision playground to try and test end to end(test to deploy) computer vision pipeline.",
            tags: ["Repository", "Python"],
            link: "https://github.com/ashwin-phadke/cvplayground"
        },
        {
            title: "My-Talks-and-Presentations",
            description: "Complete set of tools and presentation and talks given at various seminars and conferences.",
            tags: ["Repository", "Jupyter Notebook"],
            link: "https://github.com/ashwin-phadke/My-Talks-and-Presentations"
        },
        {
            title: "Real-Time-Object-Detection-Recognition",
            description: "Code for realtime object detection and recognition. The model is trained on caffe and uses OpenCV.",
            tags: ["Repository", "Python"],
            link: "https://github.com/ashwin-phadke/Real-Time-Object-Detection-Recognition"
        },
        {
            title: "Face-Recognition-using-Python-OpenCV",
            description: "Real Time face recognition using OpenCV and Python.",
            tags: ["Repository", "Python"],
            link: "https://github.com/ashwin-phadke/Face-Recognition-using-Python-OpenCV"
        },
        {
            title: "aframeVRGameDesign",
            description: "VR game developed to create awareness among citizens for preventing cyberattacks.",
            tags: ["Repository", "HTML", "VR"],
            link: "https://github.com/ashwin-phadke/aframeVRGameDesign"
        },
        // Pull Requests
        {
            title: "Remove LoRA bias support",
            description: "Contribution to vllm-project/vllm. Removed LoRA bias support.",
            tags: ["Pull Request", "Merged", "vllm"],
            link: "https://github.com/vllm-project/vllm/pull/25807"
        },
        {
            title: "Rename define_gpu_extension_target",
            description: "Contribution to vllm-project/vllm. Renamed CMake target for GPU extensions.",
            tags: ["Pull Request", "Merged", "vllm"],
            link: "https://github.com/vllm-project/vllm/pull/24525"
        },
        {
            title: "LoRA bias deprecation warning",
            description: "Contribution to vllm-project/vllm. Added deprecation warning for LoRA bias.",
            tags: ["Pull Request", "Merged", "vllm"],
            link: "https://github.com/vllm-project/vllm/pull/24339"
        },
        {
            title: "Added missing argument docstrings for genbbox",
            description: "Contribution to tensorflow/tensorflow. Improved documentation for genbbox function.",
            tags: ["Pull Request", "Merged", "TensorFlow"],
            link: "https://github.com/tensorflow/tensorflow/pull/43759"
        },
        {
            title: "Updated DeepLab demo to TensorFlow 2.0+",
            description: "Contribution to tensorflow/models. Migrated DeepLab demo code to TF 2.x.",
            tags: ["Pull Request", "Merged", "TensorFlow"],
            link: "https://github.com/tensorflow/models/pull/9282"
        },
        {
            title: "Added keras tuner information",
            description: "Contribution to EthicalML/awesome-production-machine-learning.",
            tags: ["Pull Request", "Open Source"],
            link: "https://github.com/EthicalML/awesome-production-machine-learning/pull/118"
        },
        // Page 2 Pull Requests
        {
            title: "Process Video",
            description: "Contribution to MaybeShewill-CV/lanenet-lane-detection. Video processing enhancement.",
            tags: ["Pull Request", "Closed", "lanenet-lane-detection"],
            link: "https://github.com/MaybeShewill-CV/lanenet-lane-detection/pull/228"
        },

    ],
    experience: [
        {
            company: "Servient, Inc",
            roles: [
                {
                    role: "Senior Manager, AI and Machine Learning",
                    location: "Pune, Maharashtra, India",
                    period: "Jul 2025 - Present",
                    description: [
                        "Description to be added."
                    ]
                },
                {
                    role: "Senior Machine Learning Engineer",
                    location: "Houston, TX",
                    period: "Feb 2024 - Jul 2025",
                    description: [
                        "Description to be added."
                    ]
                }
            ]
        },
        {
            company: "Amazon",
            location: "Austin, TX",
            role: "Software Development Engineer",
            period: "Jul 2022 - Jan 2024",
            description: [
                "Developed REST APIs with API Gateway and Typescript clients to connect data generation systems to federate data for consumption.",
                "Worked on developing lambda and container based microservices to support and serve the backend APIs using GraphQL.",
                "Worked on robust time series data streaming microservices that process thousands of datapoints live to customers and managed data health checks.",
                "Designed and developed frontend components using VueJS/Typescript to present incident data.",
                "Worked on integrating communication tools to the incident management system to automate user management during incidents."
            ]
        },
        {
            company: "Strayos",
            location: "Buffalo, NY",
            role: "Computer Vision Engineer Intern",
            period: "Jan 2022 - May 2022",
            description: [
                "Developed an end to end pipeline to extract annotations from pre-trained ResUNet model(trained to detect rocks) in JSON to repurpose them for training of a new model to better improve the semantic segmentation task accuracy over range of images removing the need for manual annotation.",
                "Developed a way to generate more than 10k+ colors in <50ms to generate masks for training."
            ]
        },
        {
            company: "The State University of New York",
            location: "Buffalo, NY",
            role: "Senior Research Aide",
            period: "Jul 2021 - Nov 2021",
            description: [
                "Currently working on a project to analyze traffic using cameras installed on highways.",
                "Researched techniques to improve handwriting recognition system for current USPS automatic mail sorter."
            ]
        },
        {
            company: "University at Buffalo",
            location: "Buffalo, NY",
            role: "Graduate Research Assistant",
            period: "Mar 2021 - Nov 2021",
            description: [
                "Working in the connected and autonomous vehicles CAVAS lab under Prof. Chunming Qiao.",
                "Secured 2nd position in for implementing reinforcement learning algorithms (PPO, SAC) through Deep Racer.",
                "Developed computer vision solutions with camera, LiDAR, and GPS to help vehicles respond to traffic signs.",
                "Improved the overall response time by 1% for Lincoln MKZ autonomous vehicle."
            ]
        },
        {
            company: "Cynapto Technologies",
            roles: [
                {
                    role: "AI and Deep Learning Engineer",
                    location: "Mumbai, Maharashtra, India",
                    period: "June 2019 — Nov 2019",
                    description: [
                        "Managed a team of 4 AI Engineers.",
                        "Develop computer vision solutions for automotive, industrial QA and securtity domains.",
                        "Gather, develop and deploy computer vision solutions on-prem, cloud and edge devices."
                    ]
                },
                {
                    role: "Junior Engineer - AI",
                    location: "Mumbai, Maharashtra, India",
                    period: "Aug 2018 — June 2019",
                    description: [
                        "Design, Implemented and supervised the development of computer vision and machine learning algorithms for products using neural networks.",
                        "Improve computational and algorithmic compatibility for algorithms, NVidia GPU’s(1080) for multi-processing and threading for better efficiency.",
                        "Develop image processing and video analysis solutions for multi object detection and tracking, facial recognition, segmentation.",
                        "Implement supervised and unsupervised machine learning algorithms for analytics and statistics using regression, classification, visualization techniques."
                    ]
                }
            ]
        },
              
    ],
    volunteer: [
        {
            company: "Blackstone Launchpad",
            location: "Remote",
            role: "Startup Mentor",
            period: "Ongoing",
            description: [
                "Mentoring 25+ early-stage startups, guiding founders through product development lifecycles and market entry strategies.",
                "Providing strategic technical oversight on product architecture and design to accelerate growth and innovation."
            ]
        },
         {
            company: "Habitat for Humanity",
            location: "Austin, TX",
            role: "Volunteer",
            period: "Summer 2023",
            description: "Volunteered at Habitat for Humanity to help build homes for families in need with my office collegaues."
        },
         {
            company: "Buffalo History Museum",
            location: "Buffalo, NY",
            role: "Volunteer Facilitator",
            period: "summer 2021",
            description: "Volunteered at the Buffalo History Museum as a facilitator for ehxibits and information assistance for children. Also engaged in activites to help children learn and grow their imagination about our solar system and the universe by having them draw their imaginary worlds"
        },
        {
            company: "Rotaract Club",
            location: "Pune, Maharashtra, India",
            role: "Director of Professional Development",
            period: "2017-2019",
            description: "As a part of social responsibility, I volunteer in organizations like Rotary as a director of professional development."
        },
        {
            company: "Mozilla Campus Club",
            location: "Pune, Maharashtra, India",
            role: "Regional Coordinator",
            period: "Jan 2017 — June 2018",
            description: [
                "Contributing to open source projects like l10n, firefox bug triaging through different open source communities.",
                "Speaking at various tech meetups and conferences on open web, privacy and security and contributing to open source projects."
            ]
        }
    ],
    testimonials: [],
    talks: [
         {
            title: "You get an LLM, you get an LLM, everyone gets an LLM, but does it work?",
            event: "Tech Talk",
            date: "April 2024",
            link: "https://www.conf42.com/Large_Language_Models_LLMs_2024_Ashwin_Phadke_llm_work_everyone"
        },
         {
            title: "AI in Security and Retail",
            event: "Tech Talk",
            date: "April 2019",
            link: "https://github.com/ashwin-phadke/My-Talks-and-Presentations/blob/dac9859a9bd399f712a86aa2a561baaa900a1784/Computer%20Vision%20and%20Machine%20Learning/Published%20-%20AI%20in%20Retail%20and%20Cyber%20Security.pdf"
        },
        {
            title: "Introduction to Recommendation System",
            event: "Tech Talk",
            date: "Jan 2020",
            link: "https://github.com/ashwin-phadke/My-Talks-and-Presentations/blob/dac9859a9bd399f712a86aa2a561baaa900a1784/AI%20and%20ML%20in%20Open%20Source/Recommendation%20Systems.pdf"
        },
        {
            title: "Analyzing model performance using TensorFlow Profiler.",
            event: "Tech Talk",
            date: "Oct 2020",
            link: "https://speakerdeck.com/ashwinphadke12/analyzing-model-performance-using-tensorflow-profiler"
        },
        {
            title: "Introduction to Keras Tuner with Tensorflow",
            event: "Webinar",
            date: "Jul 2020",
            link: "https://speakerdeck.com/ashwinphadke12/introduction-to-keras-tuner-with-tensorflow"
        },
        {
            title: "Introduction to deep learning with TensorFlow",
            event: "Technical Presentation",
            date: "Jun 2020",
            link: "https://speakerdeck.com/ashwinphadke12/introduction-to-deep-learning-with-tensorflow"
        },
        {
            title: "Workshop on AI and Open Source",
            event: "Workshop",
            date: "Jan 2020",
            link: "https://speakerdeck.com/ashwinphadke12/workshop-on-ai-and-open-source-5af89c81-4fd1-459e-aa20-2f3687a8cafe"
        },
        {
            title: "Improve inference on edge devices using TensorRT and TFLite",
            event: "Tech Conference",
            date: "Dec 2019",
            link: "https://speakerdeck.com/ashwinphadke12/improve-inference-on-edge-devices-using-tensorrt-and-tflite"
        },
        {
            title: "AI and Computer Vision in Security and Retail.",
            event: "Industrial Presentation",
            date: "Feb 2019",
            link: "https://speakerdeck.com/ashwinphadke12/ai-and-computer-vision-in-security-and-retail"
        },
        {
            title: "Introduction to Computer Vision",
            event: "Lecture",
            date: "Nov 2018",
            link: "https://speakerdeck.com/ashwinphadke12/introduction-to-computer-vision"
        },
        {
            title: "Cyber World Awareness",
            event: "Community Talk",
            date: "Nov 2018",
            link: "https://speakerdeck.com/ashwinphadke12/cyber-world-awareness"
        },
        {
            title: "Cyber Security 101",
            event: "Introductory Session",
            date: "Oct 2018",
            link: "https://speakerdeck.com/ashwinphadke12/cyber-security-101"
        },
        {
            title: "Dive into the Open Source Universe",
            event: "Mozilla Community",
            date: "Aug 2018",
            link: "https://speakerdeck.com/ashwinphadke12/dive-into-the-open-source-universe"
        }
    ],
    blogPosts: [
        {
            id: 1,
            date: "Deep Learning",
            title: "Load TensorFlow Models Using OpenCV",
            excerpt: "It is always a daunting task with Tensorflow sessions and standard handling of a typical Tensorflow model when you want to run inference. OpenCV handles it quite well.",
            content: `
# Load TensorFlow Models Using OpenCV

### Background
It is always a daunting task with Tensorflow sessions and standard handling of a typical Tensorflow model when you want to run inference. However, if you are an experienced developer you may also quickly go through these steps because you are already aware about how to use Tensorflow to run inference on your model. Most of the times we use some image pre-processing over the input image before passing it to your model built using Tensorflow. This pre-processing is mostly handled using OpenCV or such libraries or something like imutils for basic handling of images or video frames. How about using OpenCV itself to load and run inference on your Tensorflow models, this is what I encountered very recently when I was stuck with a problem while using Tensorflow sessions, although being straightforward these Tensorflow sessions can sometimes take some little extra time to manage while doing inference. OpenCV handles it quite well and we are going to discuss it here in this blog post.

### Pre-requisites
You have been from
\`\`\`python
import cv2 
import tensorflow as tf
\`\`\`

### Loading TF models using OpenCV
The Opencv’s DNN module hosts a variety of great features when it comes to utilizing the library for neural networks.
One such important addition is [Tensorflow’s object detection API](https://github.com/opencv/opencv/wiki/TensorFlow-Object-Detection-API) using OpenCV’s dnn module.

### Getting started
The result of training a model using Tensorflow is a binary file with extension .pb which contains both topology and weights of trained network. You may download one of them from [Model Zoo](https://github.com/tensorflow/models).

Once you have the .pb file you will also need a .pbtxt file which is an extra configuration file required which you can find [here](https://github.com/opencv/opencv_extra/tree/master/testdata/dnn) for many pretrained models.

Furthermore, if you would like to convert your own models you can refer the following scripts:
- [tf_text_graph_ssd.py](https://github.com/opencv/opencv/blob/master/samples/dnn/tf_text_graph_ssd.py)
- [tf_text_graph_faster_rcnn.py](https://github.com/opencv/opencv/blob/master/samples/dnn/tf_text_graph_faster_rcnn.py)

You can pass the configuration file which was used for training to get your pbtxt file to determine the hyperparameters.

\`\`\`bash
python tf_text_graph_faster_rcnn.py --input /path/to/model.pb --config /path/to/example.config --output /path/to/graph.pbtxt
\`\`\`
            `
        },
        {
            id: 2,
            date: "Deep Learning",
            title: "Build your own layers for deep learning models using TensorFlow 2.0",
            excerpt: "How would one really define their own layers, parameter and how they work so as to watch it do the magic?",
            content: `
# Build your own layers for deep learning models

### Background
During a very recent webinar where I was a speaker for the topic Deep learning with TensorFlow I repeatedly was asked a question regarding how would one really define their own layers, parameter and how they work so as to watch it do the magic while showing them some notebooks that had parameters to the layers that we regularly use. This prompted me to write a blog explaining layers and their parameters.

### Building Tensorflow Layers
The \`tf.keras.layers.Layer\` or also written as \`tf.compat.v1.keras.layers.Layer\` gives you easy and effective access to start writing your own layers in building the desired convolutional neural network. Keras backend is well integrated with TensorFlow giving you ease of coding your layers at a high level understanding.

Writing your own layers is not that daunting if you have a certain understanding on how they work. According to the TensorFlow documentation:
> Many machine learning models are expressible as the composition and stacking of relatively simple layers, and TensorFlow provides both a set of many common layers as a well as easy ways for you to write your own application-specific layers either from scratch or as the composition of existing layers.

Here in the \`tf.keras.layers\` package the layers that we want to define are treated as objects. So to construct a simple layer by yourself all you need is to construct the layer object and you are pretty much good to go.

### Example
\`\`\`python
model = tf.keras.models.Sequential([ 
    tf.keras.layers.Conv2D(64, (3,3), activation='relu', input_shape=(28, 28, 1)), 
    tf.keras.layers.MaxPooling2D(2, 2), 
    tf.keras.layers.Conv2D(64, (3,3), activation='relu'), 
    tf.keras.layers.MaxPooling2D(2,2), 
    tf.keras.layers.Flatten(), 
    tf.keras.layers.Dense(128, activation='relu'), 
    tf.keras.layers.Dense(10, activation='softmax') 
])
\`\`\`
            `
        },
        {
            id: 3,
            date: "Computer Vision",
            title: "Installing OpenCV with contrib extra modules from source on Fedora Linux",
            excerpt: "Installation of OpenCV with extra modules can have a lot of issues if not done correctly.",
            content: `
# Installing OpenCV with contrib extra modules

### Why the sudden need?
I have mostly used the OpenCV library as available from pip or by installing wheel until I required some more essential features that are not available from those pre built binaries. However the installation looking fairly simple can have a lot of issues if not done correctly.

### Let’s begin
Clone the official OpenCV repository from Github to have the latest updated version for use.
\`\`\`bash
git clone https://github.com/opencv/opencv.git
\`\`\`

### Dependencies
The must have dependenices:
\`\`\`bash
dnf install cmake 
dnf install python-devel numpy 
dnf install gcc gcc-c++ 
dnf install make
\`\`\`

### Configuration
To configure build parameters using CMake you will pass the following command for minimal installation in release mode:
\`\`\`bash
cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local ..
\`\`\`

If you have installed the threading building blocks then you pass:
\`\`\`bash
cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local .. -D WITH_TBB=ON
\`\`\`

To also include non free algorithms(optional) you will need to add the specific parameter to it as:
\`\`\`bash
cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local .. -D WITH_EIGEN=ON -D WITH_TBB=ON -D OPENCV_ENABLE_NONFREE=ON
\`\`\`
            `
        },
        {
            id: 4,
            date: "Machine Learning",
            title: "Understanding Confusion matrix for machine learning in a simple way",
            excerpt: "Confusion matrix as a evaluation metric has been discussed a lot. Indeed, the reason being it’s wide usability and f1-score being a important metric.",
            content: `
# Confusion Matrix

Confusion matrix as a evaluation metric has been discussed a lot. Indeed, the reason being it’s wide usability and f1-score being a important metric in order to evaluate those classification models. Here we take a look at understanding the confusion matrix in a rather simple way.

### The Matrix
The matrix is represented as :
- **rows**: Contain actual or true labels in the test set.
- **columns**: Contain predicted labels by the classifier.

### Metrics
The confusion matrix helps you measure some of very important metrics to assess performance of your model like:
- Precision
- Recall
- Accuracy

### Definitions
- **True Positive**: Model predicted true and it is correct as per labels.
- **False Positive**: Model predicted true but it is actually false.
- **True Negative**: Model predicted false and it is false.
- **False Negative**: Model predicted false but it is True.

### Calculations
**Precision** is a measure of accuracy provided that a class label has been predicted.
\`\`\`
Precision = True Positive / (True Positve + False Positive)
\`\`\`

**Recall**
\`\`\`
Recall = True Positive / (True Positve + False Negative)
\`\`\`

**F1-score**
\`\`\`
f1-score = 2 * (Precision * Recall) / (Precision * Recall)
\`\`\`
            `
        },
        {
            id: 5,
            date: "Database",
            title: "Getting started with SQL server on Linux (using Azure data studio)",
            excerpt: "A guide to getting started with SQL Server and Azure Data Studio on Linux.",
            content: `
# Getting started with SQL server on Linux

Here is a guide to getting started with SQL Server and Azure Data Studio on Linux.
When I was starting on in my career, databases always meant the MySQL and PHP way to implement anything. However even though MySQL is really a gem SQL Server and it’s functionality gives you the full enterprise like experience.

### Steps
1. **Update your system**: Run \`sudo dnf update\` followed with \`sudo dnf upgrade\` to have the most recent updates to your Fedora machine.
2. **Download SQL configuration file**:
\`\`\`bash
sudo curl -o /etc/yum.repos.d/mssql-server.repo https://packages.microsoft.com/config/rhel/8/mssql-server-2019.repo
\`\`\`
3. **Install the SQL server**:
\`\`\`bash
sudo yum install -y mssql-server
\`\`\`
4. **Configure**:
\`\`\`bash
sudo /opt/mssql/bin/mssql-conf setup
\`\`\`
5. **Check status**:
\`\`\`bash
systemctl status mssql-server
\`\`\`
            `
        },
        {
            id: 6,
            date: "C++",
            title: "Compiling and executing OpenCV programs written in C++",
            excerpt: "A quick guide on using CMake to compile OpenCV C++ programs.",
            content: `
# Compiling and executing C++ programs

1. Browse to the directory of your cpp program and open a terminal in that folder.
2. Create a CMake file name \`CMakeLists.txt\` in the same directory as your project:

\`\`\`cmake
cmake_minimum_required(VERSION 2.8) 
project( ProjectName ) 
find_package( OpenCV REQUIRED )
add_executable( ProjectName your_program_main_file.cpp ) 
target_link_libraries( ProjectName \${OpenCV_LIBS} )
\`\`\`

3. Now we can generate the executable so as to run the program.
\`\`\`bash
cmake .
make
\`\`\`

4. The execution will run successfully and create binaries if there are no errors.
5. To execute your compiled program enter \`./ProjectName\`.
            `
        }
    ]
};
