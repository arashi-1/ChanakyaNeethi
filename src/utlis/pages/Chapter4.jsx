import React from "react";

const Chapter4 = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-orange-500 h-16 w-full flex items-center justify-center">
        <h1 className="font-samarkan text-5xl text-black">Chanakya Neethi</h1>
      </div>

      <h1 className="font-samarkan text-5xl mt-12">Chapter 4</h1>

      <div className="relative flex flex-col items-center mt-10 m-5 max-w-screen-lg mx-auto">
        {/* Verse 1 */}
        <div className="relative flex flex-col items-center mt-10 m-5">
          <h1 className="text-3xl text-center">
            आयुः कर्म च वित्तं च विद्या निधनमेव च । <br />
            पञ्चैतानि हि सृज्यन्ते गर्भस्थस्यैव देहिनः ॥ 01 ॥
          </h1>
          <div className="mt-7">
            <p className="font-semibold mt-5 text-center">
              जीव का जीवनकाल (आयु), उसके कर्म (भाग्य), धन, शिक्षा, और मृत्यु ये
              पाँचों चीजें गर्भ में ही तय हो जाती हैं।
            </p>
            <br />
            <p>
              <b>सरल उदाहरण:</b>
              <br />
              <b>हिंदी में:</b> जैसे किसी व्यक्ति का जन्म किसी अमीर या गरीब
              परिवार में होना पहले से ही तय होता है, वैसे ही उसका जीवनकाल, धन,
              शिक्षा, और कर्म भी नियति द्वारा निर्धारित होते हैं।
              <br />
              <br />
              <b>English:</b> For instance, a person's birth in a wealthy or
              poor family is predetermined, just as their lifespan, fortune,
              education, and fate are considered to be predestined.
            </p>
            <br />
            <p>
              <b>निष्कर्ष:</b>
              <br />
              यह श्लोक नियति और भाग्य की अवधारणा को स्वीकार करता है, जो कहता है
              कि कुछ चीजें हमारे नियंत्रण में नहीं हैं और जीवन में पहले से ही
              निर्धारित होती हैं।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter4;
