import React from "react";

const Chapter10 = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-orange-500 h-16 sm:h-20 md:h-24 lg:h-28 w-full flex items-center justify-center">
        <h1 className="font-samarkan text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black">
          Chanakya Neethi
        </h1>
      </div>

      <h1 className="font-samarkan text-5xl mt-12">Chapter 10</h1>

      <div className="relative flex flex-col items-center mt-10 m-5 max-w-screen-lg mx-auto">
        {/* Verse 1 */}
        <div className="relative flex flex-col items-center mt-10 m-5">
          <h1 className="text-3xl text-center">
            धनहीनो न हीनश्च धनिकः स सुनिश्चयः । <br />
            विद्यारत्नेन हीनो यः स हीनः सर्ववस्तुषु ॥ 01 ॥
          </h1>
          <div className="mt-7">
            <p className="font-semibold mt-5 text-center">
              जिसके पास धन नहीं है वो गरीब नहीं है, वह तो असल में रहीस है, यदि
              उसके पास विद्या है. लेकिन जिसके पास विद्या नहीं है वह तो सब प्रकार
              से निर्धन है।
            </p>
            <br />
            <p>
              <b>सरल उदाहरण:</b>
              <br />
              <b>हिंदी में:</b> करुणा और सत्य का पालन करने वाले व्यक्ति को समाज
              में सम्मान और आत्मिक शांति प्राप्त होती है।
              <br />
              <br />
              <b>English:</b> A person who follows compassion and truth gains
              respect in society and inner peace.
            </p>
            <br />
            <p>
              <b>निष्कर्ष:</b>
              <br />
              यह श्लोक सिखाता है कि मुक्ति प्राप्त करने के लिए हमें भौतिक सुखों
              का त्याग करना चाहिए और सद्गुणों को अपनाना चाहिए। इन सद्गुणों के
              पालन से आत्मा पवित्र होती है और मोक्ष का मार्ग प्रशस्त होता है।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter10;
