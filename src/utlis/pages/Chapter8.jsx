import React from "react";

const Chapter8 = () => {
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
            अधमा धनमिच्छंति धनमानौ च मध्यमाः । <br />
            उत्तमा मानमिच्छंति मानो हि महतां धनम् ॥ 01 ॥
          </h1>
          <div className="mt-7">
            <p className="font-semibold mt-5 text-center">
              निम्न स्तर के लोग केवल धन की कामना करते हैं। मध्यम स्तर के लोग धन
              और मान दोनों की चाह रखते हैं। लेकिन श्रेष्ठ व्यक्ति केवल सम्मान की
              इच्छा रखते हैं, क्योंकि उनके लिए मान ही सच्चा धन है।
            </p>
            <br />
            <p>
              <b>सरल उदाहरण:</b>
              <br />
              <b>हिंदी में:</b> एक साधु केवल अपनी प्रतिष्ठा और सम्मान को महत्व
              देता है, जबकि व्यापारी धन और मान दोनों की चाह रखता है।
              <br />
              <br />
              <b>English:</b> A sage values only his honor and respect, whereas
              a businessman desires both wealth and recognition.
            </p>
            <br />
            <p>
              <b>निष्कर्ष:</b>
              <br />
              यह श्लोक हमें यह सिखाता है कि सच्चे महान व्यक्तियों के लिए सबसे
              मूल्यवान चीज उनकी प्रतिष्ठा और आदर है। हमें भी भौतिक वस्तुओं से
              अधिक मान-सम्मान का महत्व समझना चाहिए।
            </p>
          </div>
        </div>

        {/* Verse 2 */}
        <div className="relative flex flex-col items-center mt-10 m-5">
          <h1 className="text-3xl text-center">
            इक्षुरापः पयो मूलं तांबूलं फलमौषधम् । <br />
            भक्षयित्वापि कर्तव्याः स्नानदानादिकाः क्रियाः ॥ 02 ॥
          </h1>
          <div className="mt-7">
            <p className="font-semibold mt-5 text-center">
              गन्ना, पानी, दूध, कन्द, पान, फल और औषधि – इन वस्तुओं का सेवन करने
              के बाद भी स्नान, दान, उपासना आदि किये जा सकते हैं।
            </p>
            <br />
            <p>
              <b>सरल उदाहरण:</b>
              <br />
              <b>हिंदी में:</b> यदि आपने फल और दूध का सेवन किया है, तो भी स्नान
              और पूजा का महत्त्व बना रहता है।
              <br />
              <br />
              <b>English:</b> Even after consuming fruits and milk, the
              importance of bathing and performing rituals remains.
            </p>
            <br />
            <p>
              <b>निष्कर्ष:</b>
              <br />
              यह श्लोक हमें सिखाता है कि केवल भोजन या औषधियों से शरीर को शुद्ध
              करना पर्याप्त नहीं है। शारीरिक और मानसिक पवित्रता बनाए रखने के लिए
              धार्मिक और नैतिक कर्तव्यों का पालन करना भी उतना ही आवश्यक है।
            </p>
          </div>
        </div>

        {/* Verse 3 */}
        <div className="relative flex flex-col items-center mt-10 m-5">
          <h1 className="text-3xl text-center">
            दीपो भक्षयते ध्वांतं कज्जलं च प्रसूयते । <br />
            यदन्नं भक्षयते नित्यं जायते तादृशी प्रजा ॥ 03 ॥
          </h1>
          <div className="mt-7">
            <p className="font-semibold mt-5 text-center">
              दीपक अंधकार को खाता है लेकिन कालिख उत्पन्न करता है। उसी प्रकार, जो
              जैसा अन्न खाता है, वैसा ही उसका परिणाम या संतति होती है।
            </p>
            <br />
            <p>
              <b>सरल उदाहरण:</b>
              <br />
              <b>हिंदी में:</b> जैसा भोजन आप करते हैं, वैसी ही आपकी सोच और शरीर
              पर उसका प्रभाव पड़ता है।
              <br />
              <br />
              <b>English:</b> The kind of food you eat influences your thoughts
              and physical well-being.
            </p>
            <br />
            <p>
              <b>निष्कर्ष:</b>
              <br />
              यह श्लोक हमें सिखाता है कि हमें अपने खान-पान और कर्मों पर विशेष
              ध्यान देना चाहिए। हमारे जीवन के परिणाम और गुण उन्हीं पर आधारित
              होते हैं।
            </p>
          </div>
        </div>

        {/* Verse 4 */}
        <div className="relative flex flex-col items-center mt-10 m-5">
          <h1 className="text-3xl text-center">
            वित्तं देहि गुणान्वितेषु मतिमन्नान्यत्र देहि क्वचित् प्राप्तं <br />
            वारिनिधेर्जलं घनमुखे माधुर्ययुक्तं सदा । <br />
            जीवान्स्थावरजंगमांश्च सकलान्संजीव्य भूमंडलं भूयः पश्य तदेव <br />
            कोटिगुणितं गच्छंतमंभोनिधिम् ॥ 04 ॥
          </h1>
          <div className="mt-7">
            <p className="font-semibold mt-5 text-center">
              धन को केवल गुणवान और बुद्धिमान लोगों को देना चाहिए, न कि कहीं भी
              या किसी को भी। मेघों के माध्यम से समुद्र का पानी मिठास प्राप्त कर
              पृथ्वी पर गिरता है, जिससे सभी जीव-जंतु और वनस्पतियां जीवन पाते
              हैं। अंततः वही जल, कई गुना बढ़कर, फिर से समुद्र में लौटता है।
            </p>
            <br />
            <p>
              <b>सरल उदाहरण:</b>
              <br />
              <b>हिंदी में:</b> यदि आप धन का उपयोग अच्छे कार्यों में करते हैं,
              तो वह समाज में कई गुना फलदायी होता है।
              <br />
              <br />
              <b>English:</b> If you utilize wealth for virtuous causes, it
              multiplies its value and benefits society.
            </p>
            <br />
            <p>
              <b>निष्कर्ष:</b>
              <br />
              धन का सही उपयोग और वितरण इसे न केवल उत्पादक बनाता है, बल्कि इसका
              चक्र पुनः लौटकर कई गुना फल देता है। हमें यह ध्यान रखना चाहिए कि
              हमारे संसाधन हमेशा सही दिशा में लगाए जाएं।
            </p>
          </div>
        </div>

        {/* Verse 5 */}
        <div className="relative flex flex-col items-center mt-10 m-5">
          <h1 className="text-3xl text-center">
            चांडालानां सहस्रैश्च सूरिभिस्तत्त्वदर्शिभिः । <br />
            एको हि यवनः प्रोक्तो न नीचो यवनात्परः ॥ 05 ॥
          </h1>
          <div className="mt-7">
            <p className="font-semibold mt-5 text-center">
              विद्वान् लोग जो तत्त्व को जानने वाले है उन्होंने कहा है की मास
              खाने वाले चांडालो से हजार गुना नीच यवन (विदेशी लोग) होते है।
            </p>
            <br />
            <p>
              <b>सरल उदाहरण:</b>
              <br />
              <b>हिंदी में:</b> जो लोग किसी अन्य देश में रहते हैं लेकिन वहां की
              संस्कृति, परंपराओं और नैतिक मूल्यों को नहीं अपनाते, वे उस देश के
              लिए निष्ठावान नहीं माने जा सकते।
              <br />
              <br />
              <b>English:</b> Those who live in a foreign land but fail to
              respect and adopt its culture, traditions, and moral values cannot
              truly be considered loyal to that land.
            </p>
            <br />
            <p>
              <b>निष्कर्ष:</b>
              <br />
              इस श्लोक के अनुसार, हमें बाहरी व्यक्तियों या विदेशी लोगों पर भरोसा
              नहीं करना चाहिए, जो हमारी संस्कृति, परंपराओं और नैतिक मूल्यों को
              अपनाने में विफल रहते हैं। उनका व्यवहार हमारे समाज से भिन्न होता
              है, जिससे उनकी निष्ठा और विश्वास पर प्रश्न उठता है।
            </p>
          </div>
        </div>

        {/* Verse 6 */}
        <div className="relative flex flex-col items-center mt-10 m-5">
          <h1 className="text-3xl text-center">
            तैलाभ्यंगे चिताधूमे मैथुने क्षौरकर्मणि । <br />
            तावद्भवति चांडालो यावत्स्नानं न चाचरेत् ॥ 06 ॥
          </h1>
          <div className="mt-7">
            <p className="font-semibold mt-5 text-center">
              शरीर पर मालिश करने के बाद, स्मशान में चिता का धुआ शरीर पर आने के
              बाद, सम्भोग करने के बाद, दाढ़ी बनाने के बाद जब तक आदमी नहा ना ले
              वह चांडाल रहता है।
            </p>
            <br />
            <p>
              <b>सरल उदाहरण:</b>
              <br />
              <b>हिंदी में:</b> जैसे कोई व्यक्ति जब तक स्नान नहीं करता तब तक
              शारीरिक रूप से अपवित्र रहता है, वैसे ही किसी भी कार्य के बाद
              शुद्धता बनाए रखना जरूरी है।
              <br />
              <br />
              <b>English:</b> Just like a person remains impure until they
              bathe, it is important to maintain purity after any action.
            </p>
            <br />
            <p>
              <b>निष्कर्ष:</b>
              <br />
              इस श्लोक के अनुसार, शारीरिक शुद्धता बनाए रखना महत्वपूर्ण है। तेल
              मालिश, चिता का धुआं, सम्भोग या दाढ़ी बनाने के बाद, व्यक्ति को
              स्नान करना चाहिए, ताकि वह शारीरिक और मानसिक दृष्टि से शुद्ध और
              अपवित्रता से मुक्त हो सके।
            </p>
          </div>
        </div>

        {/* Verse 7 */}
        <div className="relative flex flex-col items-center mt-10 m-5">
          <h1 className="text-3xl text-center">
            अजीर्णे भेषजं वारि जीर्णे वारि बलप्रदम् । <br />
            भोजने चामृतं वारि भोजनांते विषापहम् ॥ 07 ॥
          </h1>
          <div className="mt-7">
            <p className="font-semibold mt-5 text-center">
              अजीर्ण होने पर जल औषधि के समान होता है, और पचने के बाद जल बल
              प्रदान करने वाला होता है। भोजन करते समय जल अमृत के समान होता है,
              जबकि भोजन के अंत में जल विष का नाश करने वाला होता है।
            </p>
            <br />
            <p>
              <b>सरल उदाहरण:</b>
              <br />
              <b>हिंदी में:</b> अजीर्ण के बाद यदि हम गर्म पानी का सेवन करते हैं,
              तो वह पाचन में मदद करता है और शरीर को शुद्ध करता है।
              <br />
              <br />
              <b>English:</b> After indigestion, if we drink warm water, it
              helps in digestion and cleanses the body.
            </p>
            <br />
            <p>
              <b>निष्कर्ष:</b>
              <br />
              यह श्लोक जल की महिमा को बताता है और यह स्पष्ट करता है कि जल का सही
              समय पर सेवन हमारे स्वास्थ्य के लिए अत्यंत लाभकारी है।
            </p>
          </div>
        </div>

        {/* Verse 8 */}
        <div className="relative flex flex-col items-center mt-10 m-5">
          <h1 className="text-3xl text-center">
            हतं ज्ञानं क्रियाहीनं हतश्चाज्ञानतो नरः । <br />
            हतं निर्णायकं सैन्यं स्त्रियो नष्टा ह्यभर्तृकाः ॥ 08 ॥
          </h1>
          <div className="mt-7">
            <p className="font-semibold mt-5 text-center">
              जो व्यक्ति ज्ञानहीन और क्रियाहीन होता है, वह अज्ञान के कारण मरा
              हुआ होता है। इसी तरह, जो निर्णायक और सैन्य की शक्ति से वंचित होता
              है, वह भी पराजित होता है। महिलाएँ भी अपने पतियों से वंचित होने पर
              नष्ट हो जाती हैं।
            </p>
            <br />
            <p>
              <b>सरल उदाहरण:</b>
              <br />
              <b>हिंदी में:</b> यदि किसी के पास सही जानकारी नहीं है और वह कुछ भी
              कार्य नहीं करता, तो वह अपनी जिंदगी में कभी सफलता नहीं पा सकता।
              <br />
              <br />
              <b>English:</b> If someone lacks proper knowledge and does
              nothing, they will never achieve success in life.
            </p>
            <br />
            <p>
              <b>निष्कर्ष:</b>
              <br />
              यह श्लोक यह सिखाता है कि जीवन में ज्ञान, निर्णय क्षमता, और सही
              दिशा का होना अत्यंत महत्वपूर्ण है। बिना इन गुणों के जीवन निरर्थक
              हो सकता है।
            </p>
          </div>
        </div>

        {/* Verse 9 */}
        <div className="relative flex flex-col items-center mt-10 m-5">
          <h1 className="text-3xl text-center">
            वृद्धकाले मृता भार्या बंधुहस्तगतं धनम् । <br />
            भोजनं च पराधीनं तिस्रः पुंसां विडंबनाः ॥ 09 ॥
          </h1>
          <div className="mt-7">
            <p className="font-semibold mt-5 text-center">
              वृद्धावस्था में मरे हुए पत्नी, रिश्तेदारों के हाथ में चला गया धन,
              और दूसरों पर निर्भर भोजन ये तीन बातें पुरुषों के लिए विडंबनाओं का
              कारण बनती हैं।
            </p>
            <br />
            <p>
              <b>सरल उदाहरण:</b>
              <br />
              <b>हिंदी में:</b> एक व्यक्ति जो वृद्धावस्था में अपनों से बाहर हो
              जाता है और दूसरों पर निर्भर होता है, उसकी स्थिति बहुत ही
              विडंबनापूर्ण होती है।
              <br />
              <br />
              <b>English:</b> A person who is left alone in old age and becomes
              dependent on others is in a very deplorable situation.
            </p>
            <br />
            <p>
              <b>निष्कर्ष:</b>
              <br />
              यह श्लोक हमें यह समझाता है कि जीवन में स्वाधीनता और परिवार की
              महत्ता को समझना जरूरी है, ताकि वृद्धावस्था में अपमानजनक
              परिस्थितियों का सामना न करना पड़े।
            </p>
          </div>
        </div>

        {/* Verse 10 */}
        <div className="relative flex flex-col items-center mt-10 m-5">
          <h1 className="text-3xl text-center">
            नाग्निहोत्रं विना वेदा न च दानं विना क्रिया । <br />न भावेन विना
            सिद्धिस्तस्माद्भावो हि कारणम् ॥ 10 ॥
          </h1>
          <div className="mt-7">
            <p className="font-semibold mt-5 text-center">
              ग्निहोत्र के विना वेद पढना व्यर्थ है, दान और दक्षिणा के विना
              यज्ञादि क्रियाएँ निष्फल होती हैं, श्रद्धा और भक्ति के विना किसी भी
              कार्य में सफलता प्राप्त नहीं होती । अतः भावना ही सब सिद्धियों का
              मूल कारण है ।
            </p>
            <br />
            <p>
              <b>सरल उदाहरण:</b>
              <br />
              <b>हिंदी में:</b> किसी भी कर्म को केवल रूप या दिखावे के लिए न
              करें, क्योंकि भावना और आस्था ही उसे सफल बनाती हैं।
              <br />
              <br />
              <b>English:</b> Do not perform any act just for the sake of form
              or appearance, as it is the feeling and faith that make it
              successful.
            </p>
            <br />
            <p>
              <b>निष्कर्ष:</b>
              <br />
              यह श्लोक हमें यह सिखाता है कि हर कार्य, चाहे वह धार्मिक हो या
              अन्य, केवल बाहरी रूप से नहीं, बल्कि सही भावना और आस्था से किया
              जाना चाहिए, ताकि वह सफल और सिद्ध हो सके।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapter8;
