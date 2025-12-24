function Skills() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-2xl font-semibold mb-8">Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Languages */}
        <div>
          <h3 className="font-medium mb-2">Languages</h3>
          <p className="text-slate-600">
            Python, Java, C, HTML, CSS, JavaScript
          </p>
        </div>

        {/* Libraries & Frameworks */}
        <div>
          <h3 className="font-medium mb-2">Libraries & Frameworks</h3>
          <p className="text-slate-600">
            NumPy, Pandas, XGBoost, TensorFlow, Keras, NLTK, Scikit-learn,
            Seaborn, SciPy, Matplotlib, Flask, Node.js, React
          </p>
        </div>

        {/* Technologies */}
        <div>
          <h3 className="font-medium mb-2">Technologies</h3>
          <p className="text-slate-600">
            Git, GitHub, MySQL, MongoDB, Oracle
          </p>
        </div>

        {/* Software Engineering */}
        <div>
          <h3 className="font-medium mb-2">Exposure</h3>
          <p className="text-slate-600">
            Generative AI, Agentic AI, LangChain, LangGraph
          </p>
        </div>

        {/* Exposure */}
        <div className="md:col-span-2">
          <h3 className="font-medium mb-2">Software Engineering</h3>
          <p className="text-slate-600">
            Operating Systems, Database Management Systems, Computer Networks,
            Data Structures & Algorithms, Object-Oriented Programming, SDLC models,
            Software Design, Design Patterns, UML Diagrams (Lucidchart)
            
          </p>
        </div>

      </div>
    </section>
  );
}


export default Skills;