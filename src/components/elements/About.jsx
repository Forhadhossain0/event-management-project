
const About = () => {
    return (
    

<div className="space-y-2  md:px-[2rem] m-0 text-left my-20 md:flex">

<div className="px-5">
    <img className="h-full w-full" src='/images/fqw.jpg' alt="" />
</div>

<div className="md:w-[80%]  md:px-20 text-slate-500">

<div className="collapse collapse-arrow rounded-none">
    <input type="radio" name="wellness-accordion" checked id="question1" /> 
    <div className="collapse-title text-xl border-t-2 font-medium">
      How can I maintain a healthy diet?
    </div>
    <div className="collapse-content"> 
      <p>To maintain a healthy diet, focus on eating a variety of fruits, vegetables, lean proteins, whole grains, and reducing processed foods and added sugars. Make sure to stay hydrated by drinking plenty of water, and consider consulting with a registered dietitian for personalized guidance.</p>
    </div>
  </div>

  <div className="collapse collapse-arrow border-t-2 rounded-none">
    <input type="radio" name="wellness-accordion" id="question2" /> 
    <div className="collapse-title text-xl font-medium">
      What are the benefits of regular exercise?
    </div>
    <div className="collapse-content"> 
      <p>Regular exercise offers numerous benefits, including improved cardiovascular health, weight management, stress reduction, increased muscle strength, and enhanced mental well-being. Aim for at least 150 minutes of moderate-intensity exercise per week.</p>
    </div>
  </div>

  <div className="collapse collapse-arrow border-t-2 rounded-none">
    <input type="radio" name="wellness-accordion" id="question3" /> 
    <div className="collapse-title text-xl font-medium">
      How can I reduce stress in my daily life?
    </div>
    <div className="collapse-content"> 
      <p>You can reduce stress by practicing relaxation techniques such as deep breathing, meditation, and yoga. Its also important to prioritize self-care, get enough sleep, and engage in hobbies or activities you enjoy.</p>
    </div>
  </div>

  <div className="collapse collapse-arrow border-t-2 rounded-none">
    <input type="radio" name="wellness-accordion" id="question4" /> 
    <div className="collapse-title text-xl font-medium">
      What are some tips for getting a good nights sleep?
    </div>
    <div className="collapse-content"> 
      <p>To improve sleep quality, establish a regular sleep schedule, create a comfortable sleep environment, and avoid caffeine and electronic devices before bedtime. If sleep problems persist, consult a healthcare professional.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow rounded-none">
    <input type="radio" name="wellness-accordion" id="question1" /> 
    <div className="collapse-title text-xl border-t-2 font-medium">
      How can I improve my mental health and well-being?
    </div>
    <div className="collapse-content"> 
      <p>Improving mental health involves seeking support when needed, practicing mindfulness and stress reduction techniques, maintaining social connections, and getting regular exercise. If youre struggling, consider speaking with a mental health professional.</p>
    </div>
  </div>

  <div className="collapse collapse-arrow border-t-2 rounded-none">
    <input type="radio" name="wellness-accordion" id="question2" /> 
    <div className="collapse-title text-xl font-medium">
      What are the benefits of staying hydrated?
    </div>
    <div className="collapse-content"> 
      <p>Staying hydrated is essential for overall health. It helps maintain bodily functions, regulates body temperature, supports digestion, and promotes clear skin. Aim to drink at least 8 glasses of water per day.</p>
    </div>
  </div>

  <div className="collapse collapse-arrow border-t-2 rounded-none">
    <input type="radio" name="wellness-accordion" id="question3" /> 
    <div className="collapse-title text-xl font-medium">
      How can I manage stress at work?
    </div>
    <div className="collapse-content"> 
      <p>To manage work-related stress, prioritize tasks, set boundaries, take short breaks, and communicate with your supervisor about your needs. Implement stress-reduction techniques, like deep breathing exercises, during the workday.</p>
    </div>
  </div>

  <div className="collapse collapse-arrow border-t-2 rounded-none">
    <input type="radio" name="wellness-accordion" id="question4" /> 
    <div className="collapse-title text-xl font-medium">
      What are some ways to maintain a healthy work-life balance?
    </div>
    <div className="collapse-content"> 
      <p>Maintaining work-life balance involves setting boundaries, prioritizing self-care, and scheduling regular downtime. Its important to disconnect from work when youre off the clock and spend quality time with loved ones.</p>
    </div>
  </div>
</div>


        </div>
    );
};

export default About;