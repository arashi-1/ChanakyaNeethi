import React from "react";

const Chapter7 = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-orange-500 h-16 sm:h-20 md:h-24 lg:h-28 w-full flex items-center justify-center">
        <h1 className="font-samarkan text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black">
          Chanakya Neethi
        </h1>
      </div>

      <h1 className="font-samarkan text-5xl mt-12">Chapter 7</h1>

      <div className="relative flex flex-col items-center mt-10 m-5 max-w-screen-lg mx-auto">
        {/* Verse 1 */}
        <div className="relative flex flex-col items-center mt-10 m-5">
          <h1 className="text-3xl text-center">
            अर्थनाशं मनस्तापं गृहे दुश्चरितानि च । <br />
            वंचनं चापमानं च मतिमान्न प्रकाशयेत् ॥ 01 ॥
          </h1>
          <div className="mt-7">
            <p className="font-semibold mt-5 text-center">
              यह श्लोक कहता है कि एक बुद्धिमान व्यक्ति को अपनी धन-हानि, मन की
              पीड़ा, घर की बुरी घटनाओं, धोखे, और अपमान को दूसरों के सामने नहीं
              प्रकट करना चाहिए।
            </p>
            <br />
            <p>
              <b>सरल उदाहरण:</b>
              <br />
              <b>हिंदी में:</b> एक व्यक्ति ने अपने व्यापार में बड़ा नुकसान झेला,
              लेकिन उसने इस बारे में किसी को नहीं बताया, बल्कि स्थिति सुधारने के
              लिए वह खुद काम में लगा रहा।
              <br />
              <br />
              <b>English:</b> A person faced a significant loss in business but
              didn’t share it with anyone. Instead, he worked on improving the
              situation himself.
            </p>
            <br />
            <p>
              <b>निष्कर्ष:</b>
              <br />
              यह श्लोक हमें सिखाता है कि व्यक्ति को अपने दुख, आर्थिक हानि, और
              अन्य निजी परेशानियों को दूसरों के सामने नहीं प्रकट करना चाहिए,
              क्योंकि इससे उसकी छवि प्रभावित हो सकती है और अन्य लोग उसका लाभ उठा
              सकते हैं।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter7;
