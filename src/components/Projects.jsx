function Projects() {
  return (
    <section className="px-6 py-12">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Project 1 */}
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="font-semibold mb-2">
            Student Score Prediction using Regression
          </h3>
          <p className="text-slate-600 mb-3">
            End-to-end machine learning system for predicting student math scores.
          </p>

          <ul className="list-disc pl-4 text-sm text-slate-600 space-y-1">
            <li>
              Built regression models using categorical and numerical features with
              extensive EDA and preprocessing.
            </li>
            <li>
              Selected optimal model using <strong>GridSearchCV</strong> and
              modular object-oriented pipelines.
            </li>
            <li>
              Deployed the trained model via a <strong>Flask web application</strong>
              with logging and exception handling.
            </li>
          </ul>

          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/Ipsita2027/e2e_mlproject_1"
              target="_blank"
              className="text-blue-600 underline"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="font-semibold mb-2">
            A/B Testing for CTA Optimization
          </h3>
          <p className="text-slate-600 mb-3">
            Data science project analyzing the impact of CTA changes on CTR.
          </p>

          <ul className="list-disc pl-4 text-sm text-slate-600 space-y-1">
            <li>
              Evaluated CTA change from <em>“Free Trial”</em> to <em>“Enroll Now”</em>
              using a two-sample <strong>z-test</strong> (α = 0.05).
            </li>
            <li>
              Analyzed statistical significance, confidence intervals, and
              <strong> minimum detectable effect (MDE)</strong>.
            </li>
            <li>
              Interpreted results in terms of practical business impact.
            </li>
          </ul>

          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/Ipsita2027/Landing-Page-Optimization"
              target="_blank"
              className="text-blue-600 underline"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="p-6 bg-white rounded-xl shadow-sm">
          <h3 className="font-semibold mb-2">
            Neural Network from Scratch (MNIST 0/1)
          </h3>
          <p className="text-slate-600 mb-3">
            Object-oriented deep learning implementation without frameworks.
          </p>

          <ul className="list-disc pl-4 text-sm text-slate-600 space-y-1">
            <li>
              Implemented a neural network from scratch in Python using
              NumPy with forward and backward propagation.
            </li>
            <li>
              Designed activation and loss functions and trained using
              gradient descent.
            </li>
            <li>
              Achieved <strong>99% accuracy</strong> on MNIST binary
              classification (digits 0 vs 1).
            </li>
          </ul>

          <div className="mt-4 flex gap-4">
            <a
              href="https://github.com/Ipsita2027/Custom-ANN"
              target="_blank"
              className="text-blue-600 underline"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;






// function Projects() {
//   return (
//     <section className="px-6 py-12">
//       <h2 className="text-2xl font-semibold mb-6">Projects</h2>
//       <div className="grid md:grid-cols-2 gap-6">
//         {/*Project Card Begins*/}
//         <div className="p-6 bg-white rounded-xl shadow-sm">
//           <h3 className="font-semibold mb-2">ML-Powered Web Application</h3>
//           <p className="text-slate-600 mb-3">
//             End-to-end system integrating ML models into a web application.
//           </p>
//           <ul className="list-disc pl-4 text-sm text-slate-600 space-y-1">
//             <li>Built a complete ML pipeline with preprocessing and model inference</li>
//             <li>Integrated the model into a backend API for web deployment</li>
//             <li>Focused on performance, maintainability, and reliability</li>
//           </ul>
//           <div className="mt-4 flex gap-4">
//             <a
//             href="https://ml-web-app.vercel.app"
//             target="_blank"
//             className="text-blue-600 underline"
//             >
//             Live Demo
//             </a>
//             <a
//             href="https://github.com/yourusername/ml-web-app"
//             target="_blank"
//             className="text-blue-600 underline"
//             >
//             GitHub
//             </a>
//           </div>
//         </div>
//         {/*Project Card Ends*/}
//         {/* Add more project cards similarly */}
//       </div>
//     </section>
//   );
// }

// export default Projects;