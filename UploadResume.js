import React, { useState } from "react";
import axios from "axios";
import { FaCloudUploadAlt } from "react-icons/fa";
import "./App.css";

function UploadResume() {

const [jd,setJd] = useState("");
const [result,setResult] = useState(null);

const analyze = async () => {

const res = await axios.post(
"http://localhost:5000/analyze",
{jobDescription:jd}
);

setResult(res.data);

};

return(

<div className="container">

<h1 className="header">AI Resume Analyzer</h1>

<div className="uploadBox">

<FaCloudUploadAlt size={40}/>

<p>Upload Resume (Drag & Drop)</p>

<input type="file"/>

</div>

<textarea
placeholder="Paste Job Description..."
className="textarea"
onChange={(e)=>setJd(e.target.value)}
/>

<button className="analyzeBtn" onClick={analyze}>
Analyze Resume
</button>

{result && (

<div className="dashboard">

<div className="scoreCard">

<h3>ATS Score</h3>

<div className="circle">

{result.atsScore}%

</div>

</div>

<div className="suggestionCard">

<h3>AI Suggestions</h3>

<p>{result.suggestion}</p>

</div>

<div className="skillsCard">

<h3>Missing Skills</h3>

<ul>

<li>JavaScript</li>
<li>React</li>
<li>Node.js</li>

</ul>

</div>

</div>

)}

</div>

);

}

export default UploadResume;