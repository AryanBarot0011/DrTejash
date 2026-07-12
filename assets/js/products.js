const PRODUCTS = [
  {
    "id": "hair-oil",
    "price": 350,
    "category": "hair-care",
    "isPopular": true,
    "isNew": false,
    "image": "assets/images/Hair_oil_main.jpeg",
    "images": [
      "assets/images/Hair_oil_main.jpeg",
      "assets/images/Hair_oil_multiple1.jpeg",
      "assets/images/Hair_oil_multiple2.jpeg",
      "assets/images/Hair_oil_multiple3.jpeg",
      "assets/images/Hair_oil_multiple4.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Handmade Hair Oil (Kshirpak Vidhi) (100 ml)",
        "shortDesc": "Handmade Ayurvedic hair oil prepared using traditional Kshirpak Vidhi.",
        "description": "A premium, handmade hair oil crafted with the authentic Ayurvedic Kshirpak Vidhi. It nourishes the hair roots, strengthens the hair follicles, and promotes healthy hair growth.",
        "benefits": [
          "Promotes Hair Growth",
          "Stops Premature Greying Hair",
          "Stops Hair Fall",
          "Anti Dandruff"
        ],
        "usage": "Apply the oil to your scalp using your palm. Massage gently for 5 minutes. Leave on for few hours, then wash with shampoo. Use 3-4 times a week for optimal results.",
        "ingredients": "Amalaki, Haritaki, Bibhitak, Bhringraj, Neem pan, Neem bij, Hibiscus, Jatamasi, Gunja, Karanj, Mehndi, Black sesame, Yastimadhu, Kamal phool, Vacha, Nili pan, Anantmul dharua, Coconut oil, Sesame oil, Fragrance.",
        "suitableFor": "All hair types.",
        "warnings": "For external use only. Avoid contact with eyes."
      },
      "hi": {
        "name": "स्वयंभू हैंडमेड हेयर ऑयल (क्षीरपाक विधि) (100 ml)",
        "shortDesc": "पारंपरिक क्षीरपाक विधि से तैयार हैंडमेड आयुर्वेदिक हेयर ऑयल।",
        "description": "असली आयुर्वेदिक क्षीरपाक विधि द्वारा तैयार एक प्रीमियम हैंडमेड हेयर ऑयल। यह बालों की जड़ों को पोषण देता है, बालों के रोम को मजबूत करता है और स्वस्थ विकास को बढ़ावा देता है।",
        "benefits": [
          "बालों के विकास को बढ़ावा देता है",
          "बालों को समय से पहले सफेद होने से रोकता है",
          "बालों का झड़ना रोकता है",
          "डैंड्रफ (रूसी) को दूर करता है"
        ],
        "usage": "हथेली की मदद से तेल को अपने स्कैल्प पर लगाएं। 5 मिनट तक धीरे-धीरे मालिश करें। कुछ घंटों के लिए छोड़ दें, फिर शैम्पू से धो लें। सर्वोत्तम परिणामों के लिए सप्ताह में 3-4 बार उपयोग करें।",
        "ingredients": "आमलकी, हरीतकी, बिभीतक, भृंगराज, नीम की पत्तियां, नीम के बीज, गुड़हल, जटामासी, गुंजा, करंज, मेहंदी, काले तिल, यष्टिमधु, कमल का फूल, वचा, नीली पत्तियां, अनंतमूल, नारियल का तेल, तिल का तेल, सुगंध।",
        "suitableFor": "सभी प्रकार के बालों के लिए।",
        "warnings": "केवल बाहरी उपयोग के लिए। आँखों के संपर्क से बचाएं।"
      },
      "gu": {
        "name": "સ્વયંભૂ હેન્ડમેડ હેર ઓઈલ (ક્ષીરપાક વિધિ) (100 ml)",
        "shortDesc": "પરંપરાગત ક્ષીરપાક વિધિ દ્વારા તૈયાર કરાયેલ આયુર્વેદિક તેલ.",
        "description": "પરંપરાગત આયુર્વેદિક ક્ષીરપાક વિધિ દ્વારા તૈયાર કરવામાં આવેલું પ્રીમિયમ હેન્ડમેડ હેર ઓઈલ. તે વાળના મૂળને પોષણ આપીને તેનો મજબૂત અને ઝડપી વિકાસ કરે છે.",
        "benefits": [
          "વાળના વિકાસને પ્રોત્સાહન આપે છે",
          "વાળને અકાળે સફેદ થતા અટકાવે છે",
          "વાળ ખરતા અટકાવે છે",
          "ખોડો દૂર કરે છે"
        ],
        "usage": "હથેળીની મદદથી તેલને તમારા માથાની ત્વચા (સ્કેલ્પ) પર લગાવો. ૫ મિનિટ સુધી હળવા હાથે માલિશ કરો. થોડા કલાકો માટે રહેવા દો, પછી શેમ્પૂથી ધોઈ લો. શ્રેષ્ઠ પરિણામો માટે અઠવાડિયામાં ૩-૪ વાર ઉપયોગ કરો.",
        "ingredients": "આમળા, હરડે, બહેડા, ભૃંગરાજ, લીમડાના પાન, લીમડાના બીજ, જાસૂદ, જટામાસી, ગુણજા, કરંજ, મહેંદી, કાળા તલ, જેઠીમધ, કમળનું ફૂલ, વજ, ગળીના પાન, અનંતમૂળ, નાળિયેર તેલ, તલનું તેલ, સુગંધ.",
        "suitableFor": "તમામ પ્રકારના વાળ માટે.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. આંખોમાં જવાથી બચાવવું."
      }
    }
  },
  {
    "id": "hair-shampoo",
    "price": 320,
    "category": "hair-care",
    "isPopular": true,
    "isNew": false,
    "image": "assets/images/Hair_shampoo_main.jpeg",
    "images": [
      "assets/images/Hair_shampoo_main.jpeg",
      "assets/images/Hair_shampoo_multiple1.jpeg",
      "assets/images/Hair_shampoo_multiple2.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Handmade Hair Shampoo (200 ml)",
        "shortDesc": "Frizz-free, smooth, and healthy hair with Amla & Shikakai.",
        "description": "A gentle, handmade herbal shampoo that cleanses the scalp without stripping natural oils. Paraben-free and SLS-free for healthy, silky hair.",
        "benefits": [
          "Promotes hair growth",
          "Makes hair silky and shiny",
          "Controls Dandruff"
        ],
        "usage": "Shake well before use. Apply to wet hair, gently massage into the scalp, and rinse thoroughly.",
        "ingredients": "Amla, Aritha, Shikaki, Bhringraj, Aloevera, Fenugreek, Hibiscus, Neem, Coconut oil, Shampoo base, Fragrance.",
        "suitableFor": "Frizz-free, smooth, and healthy hair.",
        "warnings": "Avoid contact with eyes. Do not apply on broken or irritated skin."
      },
      "hi": {
        "name": "स्वयंभू हैंडमेड हेयर शैम्पू (200 ml)",
        "shortDesc": "आंवला और शिकाकाई से युक्त फ्रिज़-फ्री, मुलायम और स्वस्थ बाल।",
        "description": "एक कोमल, हैंडमेड हर्बल शैम्पू जो प्राकृतिक तेलों को छीने बिना स्कैल्प को साफ करता है। स्वस्थ, रेशमी बालों के लिए पैराबेन-मुक्त और एसएलएस-मुक्त फॉर्मूला।",
        "benefits": [
          "बालों के विकास को बढ़ावा देता है",
          "बालों को रेशमी और चमकदार बनाता है",
          "रूसी (डैंड्रफ) को नियंत्रित करता है"
        ],
        "usage": "उपयोग करने से पहले अच्छी तरह हिलाएं। गीले बालों में लगाएं, स्कैल्प पर धीरे-धीरे मालिश करें और अच्छी तरह धो लें।",
        "ingredients": "आंवला, रीठा, शिकाकाई, भृंगराज, एलोवेरा, मेथी, गुड़हल, नीम, नारियल का तेल, शैम्पू बेस, सुगंध।",
        "suitableFor": "रूखे, बेजान और उलझे बालों के लिए उपयुक्त।",
        "warnings": "आँखों के संपर्क से बचाएं। कटी-फटी या चिड़चिड़ी त्वचा पर न लगाएं।"
      },
      "gu": {
        "name": "સ્વયંભૂ હેન્ડમેડ હેર શેમ્પૂ (200 ml)",
        "shortDesc": "આમળા અને શિકાકાઈ યુક્ત નરમ, રેશમી અને સ્વસ્થ વાળ.",
        "description": "એક સૌમ્ય, હેન્ડમેડ હર્બલ શેમ્પૂ જે કુદરતી તેલ ગુમાવ્યા વિના સ્કેલ્પને સાફ કરે છે. સ્વસ્થ અને ચમકદાર વાળ માટે પેરાબેન-મુક્ત અને SLS-મુક્ત.",
        "benefits": [
          "વાળના વિકાસને પ્રોત્સાહન આપે છે",
          "વાળને રેશમી અને ચમકદાર બનાવે છે",
          "ખોડો નિયંત્રિત કરે છે"
        ],
        "usage": "વાપરતા પહેલા બરાબર હલાવો. ભીના વાળમાં લગાવો, સ્કેલ્પ પર હળવા હાથે માલિશ કરો અને સારી રીતે ધોઈ લો.",
        "ingredients": "આમળા, અરીઠા, શિકાકાઈ, ભૃંગરાજ, એલોવેરા, મેથી, જાસૂદ, લીમડો, નાળિયેર તેલ, શેમ્પૂ બેઝ, સુગંધ.",
        "suitableFor": "નરમ, રેશમી અને સ્વસ્થ વાળ માટે.",
        "warnings": "આંખોમાં ન જવા દેવું. કપાયેલી કે બળતરા વાળી ત્વચા પર લગાડવું નહીં."
      }
    }
  },
  {
    "id": "hair-serum",
    "price": 499,
    "category": "hair-care",
    "isPopular": true,
    "isNew": false,
    "image": "assets/images/hair_serum_main_new.jpeg",
    "images": [
      "assets/images/hair_serum_main_new.jpeg",
      "assets/images/Hair_serum_multiple1.jpeg",
      "assets/images/Hair_serum_multiple2.jpeg",
      "assets/images/Hair_serum_multiple5.jpeg",
      "assets/images/Hair_serum_multiple6.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Handmade Hair Growth Serum (30 ml)",
        "shortDesc": "Reduces hair fall, controls dandruff, and promotes hair growth.",
        "description": "An organic, handmade hair growth serum enriched with Vitamin E, Argan oil, and Jojoba oil. It locks in moisture and revitalizes the scalp.",
        "benefits": [
          "Promotes Hair Growth",
          "Stops Premature Greying Hair",
          "Stops Hair Fall",
          "Anti Dandruff"
        ],
        "usage": "Apply the serum to your scalp using your palm. Massage gently for 5 minutes. Leave on for few hours, then wash with shampoo. Use 3-4 times a week for optimal results.",
        "ingredients": "Vitamin E, Argan oil, Jojoba oil, Glycerin, Almond oil, Serum base, Fragrance.",
        "suitableFor": "All hair types, especially dry and weak hair.",
        "warnings": "For external use only. Avoid contact with eyes."
      },
      "hi": {
        "name": "स्वयंभू हैंडमेड हेयर ग्रोथ सीरम (30 ml)",
        "shortDesc": "बालों का झड़ना कम करे, डैंड्रफ नियंत्रित करे और बालों के विकास को बढ़ाए।",
        "description": "विटामिन ई, आर्गन तेल और जोजोबा तेल से समृद्ध एक प्राकृतिक हैंडमेड हेयर ग्रोथ सीरम। यह बालों को गहराई से नमी प्रदान करता है और स्कैल्प को स्वस्थ बनाता है।",
        "benefits": [
          "बालों के विकास को बढ़ावा देता है",
          "बालों को समय से पहले सफेद होने से रोकता है",
          "बालों का झड़ना रोकता है",
          "डैंड्रफ (रूसी) को रोकता है"
        ],
        "usage": "हथेली की मदद से सीरम को अपने स्कैल्प पर लगाएं। 5 मिनट तक धीरे-धीरे मालिश करें। कुछ घंटों के लिए छोड़ दें, फिर शैम्पू से धो लें। सर्वोत्तम परिणामों के लिए सप्ताह में 3-4 बार उपयोग करें।",
        "ingredients": "विटामिन ई, आर्गन तेल, जोजोबा तेल, ग्लिसरीन, बादाम का तेल, सीरम बेस, सुगंध।",
        "suitableFor": "कमजोर, रूखे और टूटते बालों के लिए अत्यधिक उपयोगी।",
        "warnings": "केवल बाहरी उपयोग के लिए। आँखों के संपर्क से बचाएं।"
      },
      "gu": {
        "name": "સ્વયંભૂ હેન્ડમેડ હેર ગ્રોથ સિરમ (30 ml)",
        "shortDesc": "વાળ ખરતા અટકાવે છે, ખોડો નિયંત્રિત કરે છે અને વાળનો વિકાસ વધારે છે.",
        "description": "વિટામિન E, આર્ગન ઓઈલ અને જોજોબા ઓઈલ ધરાવતું આયુર્વેદિક હેન્ડમેડ હેર સિરમ. તે વાળને ઊંડું પોષણ આપે છે અને મૂળ મજબૂત કરે છે.",
        "benefits": [
          "વાળના વિકાસને પ્રોત્સાહન આપે છે",
          "વાળને અકાળે સફેદ થતા અટકાવે છે",
          "વાળ ખરતા અટકાવે છે",
          "ખોડો દૂર કરે છે"
        ],
        "usage": "હથેળીની મદદથી સિરમને તમારા માથા પર લગાવો. ૫ મિનિટ સુધી હળવા હાથે માલિશ કરો. થોડા કલાકો માટે રહેવા દો, પછી શેમ્પૂથી ધોઈ લો. શ્રેષ્ઠ પરિણામો માટે અઠવાડિયામાં ૩-૪ વાર ઉપયોગ કરો.",
        "ingredients": "વિટામિન E, આર્ગન તેલ, જોજોબા તેલ, ગ્લિસરીન, બદામનું તેલ, સિરમ બેઝ, સુગંધ.",
        "suitableFor": "તમામ પ્રકારની ત્વચા, ખાસ કરીને નિસ્તેજ અને સૂકી ત્વચા માટે.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. આંખોમાં ન જવા દેવું."
      }
    }
  },
  {
    "id": "hair-mask",
    "price": 280,
    "category": "hair-care",
    "isPopular": false,
    "isNew": true,
    "image": "assets/images/hair_mask_multiple1.jpeg",
    "images": [
      "assets/images/hair_mask_multiple1.jpeg",
      "assets/images/hair_mask_multiple2.jpeg",
      "assets/images/hair_mask_multiple3.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Ayurvedic Hair Mask (Advance Damage Repair) (100 gm)",
        "shortDesc": "Deep hydration, frizz control, and damage repair with Argan oil.",
        "description": "An advanced Ayurvedic damage repair hair mask formulated with Aloe extract, Shea butter, and Argan oil. Strengthens hair shafts, boosts elasticity, and restores natural shine.",
        "benefits": [
          "Deep Hydration and Frizz Control",
          "Boost Elasticity",
          "Make Hair Silky and Shiny"
        ],
        "usage": "Wash hair, apply the mask evenly from scalp to ends, leave for 10-15 minutes, and rinse thoroughly with clean water.",
        "ingredients": "Aloe ext., Neem ext., Argan Oil, Coconut Oil, Almond Oil, Shea Butter, Glycerin, Base, Fragrance.",
        "suitableFor": "Damaged, dry, and frizzy hair.",
        "warnings": "For external use only. Avoid contact with eyes."
      },
      "hi": {
        "name": "स्वयंभू आयुर्वेदिक हेयर मास्क (एडवांस डैमेज रिपेयर) (100 gm)",
        "shortDesc": "आर्गन तेल के साथ गहन हाइड्रेशन, फ्रिज़ नियंत्रण और बालों की मरम्मत।",
        "description": "एलोवेरा अर्क, शिया बटर और आर्गन तेल से बना एक उन्नत आयुर्वेदिक हेयर रिपेयर मास्क। यह बालों की जड़ों को मजबूत करता है, लचीलापन बढ़ाता है और प्राकृतिक चमक लौटाता है।",
        "benefits": [
          "गहन हाइड्रेशन और फ्रिज़ (रूखेपन) का नियंत्रण",
          "बालों के लचीलेपन (इलास्टिसिटी) को बढ़ाता है",
          "बालों को रेशमी और चमकदार बनाता है"
        ],
        "usage": "बाल धोने के बाद, स्कैल्प से लेकर बालों के छोर तक समान रूप से पर्याप्त मात्रा में मास्क लगाएं। 10-15 मिनट के लिए छोड़ दें, फिर पानी से अच्छी तरह धो लें।",
        "ingredients": "एलोवेरा का अर्क, नीम का अर्क, आर्गन तेल, नारियल का तेल, बादाम का तेल, शिया बटर, ग्लिसरीन, बेस, सुगंध।",
        "suitableFor": "क्षतिग्रस्त, रूखे और बेजान बालों के लिए उत्तम समाधान।",
        "warnings": "केवल बाहरी उपयोग के लिए। आँखों में न जाने दें।"
      },
      "gu": {
        "name": "સ્વયંભૂ આયુર્વેદિક હેર માસ્ક (એડવાન્સ ડેમેજ રિપેર) (100 gm)",
        "shortDesc": "આર્ગન ઓઈલ સાથે ડીપ હાઇડ્રેશન, શુષ્કતા નિયંત્રણ અને ડેમેજ રિપેર.",
        "description": "એલોવેરા, લીમડો, શીયા બટર અને આર્ગન તેલ ધરાવતો એડવાન્સ આયુર્વેદિક હેર માસ્ક. તે વાળના ક્ષતિગ્રસ્ત કોષોને પુનર્જીવિત કરે છે અને વાળને કુદરતી ચમક આપે છે.",
        "benefits": [
          "ઊંડું મોઇશ્ચરાઇઝેશન અને વાળના રૂખાપણા પર નિયંત્રણ",
          "વાળની લવચીકતા વધારે છે",
          "વાળને રેશમી અને ચમકદાર બનાવે છે"
        ],
        "usage": "વાળ ધોયા પછી, માથાની ત્વચાથી વાળના છેડા સુધી સરખી માત્રામાં માસ્ક લગાવો. ૧૦-૧૫ મિનિટ માટે રહેવા દો, પછી પાણીથી સારી રીતે ધોઈ લો.",
        "ingredients": "એલોવેરા અર્ક, લીમડાનો અર્ક, આર્ગન તેલ, નાળિયેર તેલ, બદામનું તેલ, શીયા બટર, ગ્લિસરીન, બેઝ, સુગંધ.",
        "suitableFor": "સૂકા, નિર્જીવ અને ક્ષતિગ્રસ્ત વાળના રિપેરિંગ માટે.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. આંખોથી દૂર રાખવું."
      }
    }
  },
  {
    "id": "hair-pack",
    "price": 180,
    "category": "hair-care",
    "isPopular": false,
    "isNew": false,
    "image": "assets/images/Hair_pack_main.jpeg",
    "images": [
      "assets/images/Hair_pack_main.jpeg",
      "assets/images/Hair_pack_multiple1.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Ayurvedic Handmade Hair Pack (80 gm)",
        "shortDesc": "Traditional hair pack to reduce damage and prevent greying.",
        "description": "An authentic Ayurvedic handmade hair pack compiled with natural Amla, Shikakai, Neem, and Henna. Perfect for cleansing and calming scalp irritation.",
        "benefits": [
          "Reduce Hair Damaging",
          "Increase Shine And Softness Of Hair",
          "Prevent/Treat Premature Greying Hair",
          "Treat Hair Skin Problems"
        ],
        "usage": "Mix the hair pack powder with water, curd, or tea water to make a smooth paste. Apply to your scalp and hair, leave it for 30 to 45 minutes, then rinse off thoroughly with water.",
        "ingredients": "Amla, Aritha, Shikakai, Hibiscus, Neem, Methi, Heena.",
        "suitableFor": "Scalp skin infections, thinning hair, and grey hair.",
        "warnings": "For external use only. Perform a patch test to rule out Henna allergy."
      },
      "hi": {
        "name": "स्वयंभू आयुर्वेदिक हैंडमेड हेयर पैक (80 gm)",
        "shortDesc": "बालों के नुकसान को कम करने और सफेदी रोकने के लिए पारंपरिक पैक।",
        "description": "आंवला, रीठा, शिकाकाई, नीम और हिना के मिश्रण से बना एक प्रामाणिक आयुर्वेदिक हैंडमेड हेयर पैक। यह स्कैल्प को साफ करता है और बालों की कोमलता बढ़ाता है।",
        "benefits": [
          "बालों के नुकसान को कम करता है",
          "बालों की चमक और कोमलता बढ़ाता है",
          "बालों को समय से पहले सफेद होने से रोकता है",
          "स्कैल्प और त्वचा की समस्याओं का इलाज करता है"
        ],
        "usage": "हेयर पैक पाउडर को पानी, दही या चाय के पानी में मिलाकर एक चिकना पेस्ट बनाएं। इसे अपने स्कैल्प और बालों पर लगाएं, 30 से 45 मिनट के लिए छोड़ दें, फिर पानी से अच्छी तरह धो लें।",
        "ingredients": "आंवला, रीठा, शिकाकाई, गुड़हल, नीम, मेथी, हिना (मेहंदी)।",
        "suitableFor": "बालों के पतले होने, डैंड्रफ और स्कैल्प इन्फेक्शन के लिए।",
        "warnings": "केवल बाहरी उपयोग के लिए। हिना एलर्जी की जांच के लिए पैच टेस्ट करें।"
      },
      "gu": {
        "name": "સ્વયંભૂ આયુર્વેદિક હેન્ડમેડ હેર પેક (80 gm)",
        "shortDesc": "વાળનું નુકસાન ઘટાડવા અને સફેદ થતા અટકાવવા માટેનો પરંપરાગત પેક.",
        "description": "આમળા, અરીઠા, શિકાકાઈ અને મહેંદી યુક્ત આયુર્વેદિક હેર પેક. તે સ્કેલ્પને સાફ કરે છે, બળતરા શાંત કરે છે અને વાળને કુદરતી કલર આપે છે.",
        "benefits": [
          "વાળના નુકસાનને ઘટાડે છે",
          "વાળની ચમક અને મુલાયમતા વધારે છે",
          "વાળને અકાળે સફેદ થતા અટકાવે છે",
          "માથાની ત્વચાની સમસ્યાઓ મટાડે છે"
        ],
        "usage": "આ હેર પેક પાવડરને પાણી, દહીં અથવા ચાના પાણીમાં મિક્સ કરી પેસ્ટ બનાવો. તેને સ્કેલ્પ અને વાળ પર લગાવો, ૩૦ થી ૪૫ મિનિટ માટે રહેવા દો, પછી પાણીથી સારી રીતે ધોઈ લો.",
        "ingredients": "આમળા, અરીઠા, શિકાકાઈ, જાસૂદ, લીમડો, મેથી, હીના (મહેંદી).",
        "suitableFor": "વાળ ખરતા અટકાવવા અને સ્કેલ્પની તંદુરસ્તી જાળવવા માટે.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. પ્રથમ વાર વાપરતા પહેલા પેચ ટેસ્ટ કરવો."
      }
    }
  },
    {
    "id": "fairness-cream",
    "price": 450,
    "category": "beauty-care",
    "isPopular": false,
    "isNew": false,
    "image": "assets/images/Fairness_cream_main.jpeg",
    "images": [
      "assets/images/Fairness_cream_main.jpeg",
      "assets/images/Fairness_cream_multiple1.jpeg",
      "assets/images/Fairness_cream_multiple2.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Fairness Cream (30 gm)",
        "shortDesc": "Spot reduction and skin brightening cream.",
        "description": "Enriched with Sandalwood, Turmeric, Kumkumadi oil, and Almond oil, this cream helps reduce hyperpigmentation and black spots, providing a natural glowing skin and fairness.",
        "benefits": [
          "Treats Hyperpigmentation",
          "Reduces Dark Spots",
          "Provides Glowing Skin & Fairness"
        ],
        "usage": "Wash face, apply dots of cream over face and neck, and massage gently in circular motion.",
        "ingredients": "Aloevera ext, Neem ext, Manjistha ext, Turmeric ext, Sandalwood, Almond oil, Kumkumadi oil, Base, Fragrance.",
        "suitableFor": "All skin types, especially dull skin.",
        "warnings": "For external use only. Avoid contact with eyes."
      },
      "hi": {
        "name": "स्वयंभू फेयरनेस क्रीम (30 gm)",
        "shortDesc": "काले धब्बे कम करने वाली और स्किन ब्राइटनिंग क्रीम।",
        "description": "चंदन, हल्दी, कुमकुमादि तेल और बादाम के तेल से समृद्ध यह क्रीम पिगमेंटेशन और काले धब्बों को कम करने में मदद करती है, जिससे त्वचा चमकदार और गोरी बनती है।",
        "benefits": [
          "पिगमेंटेशन को ठीक करता है",
          "काले धब्बों को कम करता है",
          "चमकदार और गोरी त्वचा प्रदान करता है"
        ],
        "usage": "चेहरा धोएं, चेहरे और गर्दन पर क्रीम लगाएं और गोलाकार गति में धीरे से मालिश करें।",
        "ingredients": "एलोवेरा का अर्क, नीम का अर्क, मंजीष्ठा का अर्क, हल्दी का अर्क, चंदन, बादाम का तेल, कुमकुमादि तेल, बेस, सुगंध।",
        "suitableFor": "सभी प्रकार की त्वचा के लिए उपयुक्त।",
        "warnings": "केवल बाहरी उपयोग के लिए। आँखों से संपर्क से बचाएं।"
      },
      "gu": {
        "name": "સ્વયંભૂ ફેયરનેસ ક્રીમ (30 gm)",
        "shortDesc": "ત્વચાના ડાઘ-ધબ્બા ઘટાડતી અને ચમક આપતી ક્રીમ.",
        "description": "ચંદન, હળદર, કુમકુમાદિ તેલ અને બદામ તેલ ધરાવતી ક્રીમ. તે ત્વચાના કાળા ડાઘ અને પિગમેન્ટેશન ઘટાડીને કુદરતી ચમક આપે છે.",
        "benefits": [
          "પિગમેન્ટેશન દૂર કરે છે",
          "કાળા ડાઘ ઘટાડે છે",
          "ચમકદાર અને તેજસ્વી ત્વચા આપે છે"
        ],
        "usage": "ચહેરો ધોઈને ફેસ અને ગરદન પર ક્રીમ લગાવો અને હળવા હાથે માલિશ કરો.",
        "ingredients": "એલોવેરા અર્ક, લીમડા અર્ક, મંજિષ્ઠા અર્ક, હળદર અર્ક, ચંદન, બદામ તેલ, કુમકુમાદિ તેલ, બેઝ, સુગંધ.",
        "suitableFor": "તમામ પ્રકારની ત્વચા માટે યોગ્ય.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. આંખોથી બચાવવું."
      }
    }
  },
  {
    "id": "night-cream",
    "price": 550,
    "category": "beauty-care",
    "isPopular": true,
    "isNew": false,
    "image": "assets/images/Night_Cream_main.jpeg",
    "images": [
      "assets/images/Night_Cream_main.jpeg",
      "assets/images/Night_Cream_multiple1.jpeg",
      "assets/images/Night_Cream_multiple2.jpeg",
      "assets/images/Night_Cream_multiple3.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Night Cream (30 gm)",
        "shortDesc": "Anti-wrinkle, anti-aging, and spot reduction night cream.",
        "description": "A premium Ayurvedic night cream formulated with Kumkumadi oil, Almond oil, Coconut oil, Neem extract, Aloe vera extract, Turmeric, and Beet root. It works overnight to treat wrinkles, aging, under-eye melasma, and hyperpigmentation.",
        "benefits": [
          "Anti Wrinkles & Anti Aging",
          "Treats Under Eye Melasma",
          "Reduces Hyperpigmentation"
        ],
        "usage": "Wash face, apply dots of cream over face and neck, and massage gently in circular motion at bedtime.",
        "ingredients": "Kumkumadi oil, Almond oil, Coconut oil, Neem extract, Aloe vera extract, Turmeric, Beet root, Base, Fragrance.",
        "suitableFor": "All skin types, especially aging skin and those with hyperpigmentation.",
        "warnings": "For external use only. Avoid contact with eyes. Patch test before use."
      },
      "hi": {
        "name": "स्वयंभू नाइट क्रीम (30 gm)",
        "shortDesc": "एंटी-रिंकल, एंटी-अजिंग और त्वचा की मरम्मत करने वाली नाइट क्रीम।",
        "description": "कुमकुमादि तेल, बादाम के तेल, नारियल के तेल, नीम के अर्क, एलोवेरा के अर्क, हल्दी और चुकंदर से समृद्ध एक प्रीमियम आयुर्वेदिक नाइट क्रीम। यह झुर्रियों, बढ़ती उम्र के लक्षणों, आंखों के नीचे मेलास्मा (झाइयां) और हाइपरपिग्मेंटेशन को ठीक करने के लिए रात भर काम करती है।",
        "benefits": [
          "झुर्रियों को कम करता है और एंटी-एजिंग",
          "आँखों के नीचे मेलास्मा को ठीक करता है",
          "हाइपरपिग्मेंटेशन को कम करता है"
        ],
        "usage": "चेहरा धोएं, सोने के समय चेहरे और गर्दन पर क्रीम लगाएं और गोलाकार गति में धीरे से मालिश करें।",
        "ingredients": "कुमकुमादि तेल, बादाम का तेल, नारियल का तेल, नीम का अर्क, एलोवेरा का अर्क, हल्दी, चुकंदर, बेस, सुगंध।",
        "suitableFor": "सभी प्रकार की त्वचा, विशेष रूप से झुर्रियों और झाइयों वाली त्वचा के लिए।",
        "warnings": "केवल बाहरी उपयोग के लिए। आँखों से संपर्क से बचाएं। उपयोग से पहले पैच टेस्ट करें।"
      },
      "gu": {
        "name": "સ્વયંભૂ નાઇટ ક્રીમ (30 gm)",
        "shortDesc": "કરચલીઓ વિરોધી, એન્ટી-એજિંગ અને ડાઘ ઘટાડતી નાઇટ ક્રીમ.",
        "description": "કુમકુમાદિ તેલ, બદામ તેલ, નાળિયેર તેલ, લીમડાના અર્ક, એલોવેરા અર્ક, હળદર અને બીટ રૂટ ધરાવતી આયુર્વેદિક નાઇટ ક્રીમ. તે રાત્રે ત્વચાને ઊંડાણપૂર્વક રિપેર કરે છે અને કરચલીઓ તેમજ આંખો નીચેના કાળા ડાઘ/મેલાસ્મા અને હાયપરપીગ્મેન્ટેશન ઘટાડે છે.",
        "benefits": [
          "કરચલીઓ અને એન્ટી-એજિંગ અટકાવે છે",
          "આંખો નીચેના મેલાસ્મા મટાડે છે",
          "હાયપરપીગ્મેન્ટેશન ઘટાડે છે"
        ],
        "usage": "રાત્રે ચહેરો ધોઈને ફેસ અને ગરદન પર ક્રીમ લગાવો અને હળવા હાથે ગોળાકાર માલિશ કરો.",
        "ingredients": "કુમકુમાદિ તેલ, બદામનું તેલ, નાળિયેર તેલ, લીમડાનો અર્ક, એલોવેરા અર્ક, હળદર, બીટ રૂટ, બેઝ, સુગંધ.",
        "suitableFor": "વધતી ઉંમરની, કરચલીવાળી અને ડાઘ ધરાવતી ત્વચા માટે ખાસ ઉપયોગી.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. આંખોથી બચાવવું. પ્રથમ વાર વાપરતા પહેલા પેચ ટેસ્ટ કરવો."
      }
    }
  },
  {
    "id": "face-oil",
    "price": 499,
    "category": "beauty-care",
    "isPopular": true,
    "isNew": false,
    "image": "assets/images/face_oil_main_new.jpeg",
    "images": [
      "assets/images/face_oil_main_new.jpeg",
      "assets/images/Face_oil_multiple1.jpeg",
      "assets/images/Face_oil_multiple2.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Ayurvedic Face Oil (30 ml)",
        "shortDesc": "Kumkumadi & Jojoba face oil for scar and wrinkle reduction.",
        "description": "A luxury Ayurvedic facial oil formulated with Kumkumadi oil, Turmeric, Chandan, and Jojoba oil. Reverses signs of aging, brightens skin tone, and reduces blemishes.",
        "benefits": [
          "Anti Wrinkles, Anti Ageing",
          "Reduces Scars & Hyperpigmentation",
          "Removes Under Eye Circles & Black Spots",
          "Makes Skin Soft and Shiny"
        ],
        "usage": "Take 3-4 drops of face oil, apply onto clean face and massage gently in upward strokes. Leave overnight for best results.",
        "ingredients": "Kumkumadi Oil, Turmeric, Manjistha, Vit E, Chandan, Coconut Oil, Jojoba Oil.",
        "suitableFor": "All skin types, especially dry, dull, and spot-prone skin.",
        "warnings": "For external use only. Keep in a cool, dry place."
      },
      "hi": {
        "name": "स्वयंभू आयुर्वेदिक फेस ऑयल (30 ml)",
        "shortDesc": "निशान और झुर्रियां कम करने के लिए कुमकुमादि और जोजोबा फेस ऑयल।",
        "description": "कुमकुमादि तेल, हल्दी, चंदन और जोजोबा तेल से बना एक शानदार आयुर्वेदिक फेशियल तेल। यह बुढ़ापे के लक्षणों को धीमा करता है, त्वचा में निखार लाता है और दाग-धब्बे मिटाता है।",
        "benefits": [
          "झुर्रियों को रोके, बुढ़ापा रोधी",
          "निशान और झाइयां (हाइपरपिग्मेंटेशन) कम करे",
          "काले घेरे और काले धब्बे हटाए",
          "त्वचा को कोमल और चमकदार बनाए"
        ],
        "usage": "फेस ऑयल की 3-4 बूंदें लें, साफ चेहरे पर लगाएं और ऊपर की ओर हल्के हाथों से मालिश करें। सर्वोत्तम परिणामों के लिए रात भर लगा रहने दें।",
        "ingredients": "कुमकुमादि तेल, हल्दी, मंजीष्ठा, विटामिन ई, चंदन, नारियल का तेल, जोजोबा तेल।",
        "suitableFor": "बेजान, रूखी और असमान रंगत वाली त्वचा के लिए सर्वोत्तम।",
        "warnings": "केवल बाहरी उपयोग के लिए। ठंडे और सूखे स्थान पर रखें।"
      },
      "gu": {
        "name": "સ્વયંભૂ આયુર્વેદિક ફેસ ઓઈલ (30 ml)",
        "shortDesc": "ડાઘ અને કરચલીઓ ઘટાડવા માટે કુમકુમાદિ અને જોજોબા ફેસ ઓઇલ.",
        "description": "ચંદન, કેસર, કુમકુમાદિ તેલ અને જોજોબા તેલ ધરાવતું આયુર્વેદિક તેલ. તે ત્વચાના ડાઘા અને કરચલીઓ દૂર કરી મોઇશ્ચરાઇઝેશન પૂરું પાડે છે.",
        "benefits": [
          "કરચલીઓ વિરોધી, એન્ટી-એજિંગ",
          "ડાઘ અને હાયપરપીગ્મેન્ટેશન ઘટાડે છે",
          "આંખો નીચેના કાળા કુંડાળા અને ડાઘા મટાડે છે",
          "ત્વચાને નરમ અને ચમકદાર બનાવે છે"
        ],
        "usage": "ફેસ ઓઈલના ૩-૪ ટીપાં લો, સાફ ચહેરો પર લગાવી હળવા હાથે મસાજ કરો. શ્રેષ્ઠ પરિણામ માટે રાત્રે લગાવી રાખવું.",
        "ingredients": "કુમકુમાદિ તેલ, હળદર, મંજિષ્ઠા, વિટામિન E, ચંદન, નાળિયેર તેલ, જોજોબા તેલ.",
        "suitableFor": "તમામ પ્રકારની ત્વચા, ખાસ કરીને નિસ્તેજ અને સૂકી ત્વચા માટે.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. સૂર્યપ્રકાશથી બચાવવું."
      }
    }
  },
  {
    "id": "facewash",
    "price": 220,
    "category": "beauty-care",
    "isPopular": false,
    "isNew": true,
    "image": "assets/images/facewash_main_new.jpeg",
    "images": [
      "assets/images/facewash_main_new.jpeg",
      "assets/images/Facewash_multiple1.jpeg",
      "assets/images/Facewash_multiple2.jpeg",
      "assets/images/Facewash_multiple3.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Ayurvedic Handmade Face Wash (100 ml)",
        "shortDesc": "Anti-pimple, skin texture correction, and glowing skin facewash.",
        "description": "A soap-free Ayurvedic handmade face wash that cleanses deeply, improves skin tone, cures pimples and acne, and shields from allergies. Paraben-free and SLS-free.",
        "benefits": [
          "Anti Pimple properties",
          "Improves Skin Texture",
          "Provides Glowing Skin & Fairness",
          "Cures various skin problems"
        ],
        "usage": "Wet your face, squeeze a small amount of face wash onto your palm, work up a lather, gently massage onto your face, and rinse with cold water.",
        "ingredients": "Neem, Aloevera, Turmeric, Tulsi, Orange Peel, Manjistha, Jethimadh, Vit E, Base, Fragrance. (For dry skin: Olive oil, Jojoba oil, Coconut oil, Glycerin).",
        "suitableFor": "Dry Skin / Oily Skin.",
        "warnings": "Avoid direct contact with eyes. If contact occurs, rinse with cold water."
      },
      "hi": {
        "name": "स्वयंभू आयुर्वेदिक हैंडमेड फेस वॉश (100 ml)",
        "shortDesc": "मुंहासे रोकने वाला, त्वचा की बनावट सुधारने वाला और चमकदार फेस वॉश।",
        "description": "साबुन-मुक्त आयुर्वेदिक हैंडमेड फेस वॉश जो त्वचा को गहराई से साफ करता है, मुंहासे और पिंपल्स को ठीक करता है और त्वचा की रंगत सुधारता है। पैराबेन और एसएलएस से मुक्त।",
        "benefits": [
          "पिंपल्स (मुंहासों) से बचाव",
          "त्वचा की बनावट में सुधार",
          "चमकदार और गोरी त्वचा",
          "विभिन्न प्रकार की त्वचा समस्याओं का इलाज"
        ],
        "usage": "अपना चेहरा गीला करें, हथेली पर थोड़ी मात्रा में फेस वॉश लें, झाग बनाएं, चेहरे पर हल्के से मालिश करें और ठंडे पानी से धो लें।",
        "ingredients": "नीम, एलोवेरा, हल्दी, तुलसी, संतरे के छिलके, मंजीष्ठा, जेठीमध, विटामिन ई, बेस, सुगंध। (रूखी त्वचा के लिए: जैतून का तेल, जोजोबा तेल, नारियल तेल, ग्लिसरीन)।",
        "suitableFor": "तैलीय, सामान्य और रूखी त्वचा (दोनों प्रकार के लिए विकल्प उपलब्ध)।",
        "warnings": "केवल बाहरी उपयोग के लिए। आँखों के सीधे संपर्क से बचाएं।"
      },
      "gu": {
        "name": "સ્વયંભૂ આયુર્વેદિક હેન્ડમેડ ફેસ વોશ (100 ml)",
        "shortDesc": "ખીલ વિરોધી, ત્વચાનું પોત સુધારતું અને ગ્લો આપતું ફેસ વોશ.",
        "description": "સાબુ-રહિત આયુર્વેદિક હેન્ડમેડ ફેસ વોશ જે ત્વચાને ઊંડાણપૂર્વક સાફ કરે છે, ખીલ મટાડે છે અને ગૌરવર્ણ ચમક આપે છે. પેરાબેન અને SLS મુક્ત.",
        "benefits": [
          "ખીલ વિરોધી ગુણો",
          "ત્વચાનું પોત સુધારે છે",
          "ચમકદાર અને ગૌરવર્ણ ત્વચા આપે છે",
          "તમામ પ્રકારની ત્વચાની સમસ્યાઓ મટાડે છે"
        ],
        "usage": "ચહેરો ભીનો કરો, હથેળી પર થોડી માત્રામાં ફેસ વોશ લો, ફીણ બનાવી ચહેરો પર મસાજ કરો અને ઠંડા પાણીથી ધોઈ લો.",
        "ingredients": "લીમડો, એલોવેરા, હળદર, તુલસી, સંતરાની છાલ, મંજિષ્ઠા, જેઠીમધ, વિટામિન E, બેઝ, સુગંધ. (સૂકી ત્વચા માટે: ઓલિવ ઓઈલ, જોજોબા ઓઈલ, નાળિયેર તેલ, ગ્લિસરીન).",
        "suitableFor": "તૈલી અને સૂકી ત્વચા ધરાવતા લોકો માટે.",
        "warnings": "આંખમાં ન જવા દેવું. આંખમાં જાય તો ઠંડા પાણીથી ધોઈ નાખવું."
      }
    }
  },
  {
    "id": "fairness-soap",
    "price": 150,
    "category": "beauty-care",
    "isPopular": true,
    "isNew": false,
    "image": "assets/images/Fairness_soap_main.jpeg",
    "images": [
      "assets/images/Fairness_soap_main.jpeg",
      "assets/images/Fairness_soap_multiple1.jpeg",
      "assets/images/Fairness_soap_multiple2.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Fairness Soap (80 gm)",
        "shortDesc": "Brightening handmade soap that reduces dark circles and melasma.",
        "description": "An premium Ayurvedic bathing soap crafted with Sandalwood, Turmeric, and Almond oil. Gently cleanses, reduces melasma, and gives a natural glowing skin effect.",
        "benefits": [
          "Removes dark circles, hyperpigmentation and under eye melasma",
          "Makes the skin brighter and lighter",
          "Gives skin glowing effect and improves dullness",
          "Anti wrinkles and anti aging properties"
        ],
        "usage": "Apply to wet skin, rub gently to create lather, massage onto body, and rinse off thoroughly with water. Suitable for daily bathing.",
        "ingredients": "Aloevera, Sandalwood, Turmeric, Manjistha, Licorice, Almond oil, Olive Oil, Soap base, Fragrance.",
        "suitableFor": "For all skin types.",
        "warnings": "Avoid contact with eyes. In case of contact, flush with water."
      },
      "hi": {
        "name": "स्वयंभू फेयरनेस आयुर्वेदिक हैंडमेड साबुन (80 gm)",
        "shortDesc": "डार्क सर्कल और पिग्मेंटेशन को कम करे और त्वचा में चमक लाए।",
        "description": "केसर, चंदन और बादाम के तेल से बना एक प्रीमियम आयुर्वेदिक स्नान साबुन। यह त्वचा को कोमल साफ करता है, झाइयों को हटाता है और प्राकृतिक रूप से चमकदार बनाता है।",
        "benefits": [
          "डार्क सर्कल, हाइपरपिग्मेंटेशन और मेलास्मा हटाए",
          "त्वचा को गोरा और चमकदार बनाए",
          "त्वचा को ग्लो दे और बेजान त्वचा में सुधार करे",
          "झुर्रियां रोके और बुढ़ापे के लक्षणों को धीमा करे"
        ],
        "usage": "गीली त्वचा पर लगाएं, झाग बनाने के लिए धीरे से रगड़ें, शरीर पर मालिश करें और पानी से अच्छी तरह धो लें। दैनिक स्नान के लिए उपयुक्त।",
        "ingredients": "एलोवेरा, चंदन, हल्दी, मंजीष्ठा, मुलेठी, बादाम का तेल, जैतून का तेल, साबुन बेस, सुगंध।",
        "suitableFor": "सभी प्रकार की त्वचा के लिए सुरक्षित और उपयोगी।",
        "warnings": "आँखों के संपर्क से बचाएं। संपर्क होने पर पानी से धो लें।"
      },
      "gu": {
        "name": "સ્વયંભૂ ફેયરનેસ આયુર્વેદિક હેન્ડમેડ સાબુ (80 gm)",
        "shortDesc": "કાળા કુંડાળા અને પિગમેન્ટેશન ઘટાડે છે અને ત્વચાને તેજસ્વી બનાવે છે.",
        "description": "ચંદન, હળદર અને બદામ તેલથી બનેલો આયુર્વેદિક સાબુ. તે ત્વચાના કાળા કુંડાળા અને મેલાસ્મા દૂર કરે છે તેમજ વધતી ઉંમરની કરચલીઓ અટકાવે છે.",
        "benefits": [
          "કાળા કુંડાળા, પિગમેન્ટેશન અને મેલાસ્મા દૂર કરે છે",
          "તોચાને વધુ તેજસ્વી અને ગોરી બનાવે છે",
          "ત્વચાને ગ્લો આપે છે અને નિસ્તેજતા સુધારે છે",
          "કરચલીઓ વિરોધી અને વધતી ઉંમર અટકાવે છે"
        ],
        "usage": "ભીની ત્વચા પર લગાવો, હળવેથી ઘસી ફીણ બનાવો, શરીર પર મસાજ કરો અને પાણીથી ધોઈ લો. રોજ સ્નાન માટે ઉત્તમ.",
        "ingredients": "એલોવેરા, ચંદન, હળદર, મંજિષ્ઠા, જેઠીમધ, બદામનું તેલ, ઓલિવ ઓઈલ, સાબુ બેઝ, સુગંધ.",
        "suitableFor": "તમામ પ્રકારની ત્વચા માટે ઉત્તમ.",
        "warnings": "આંખોમાં ન જવા દેવું. આંખમાં જાય તો પાણીથી ધોઈ નાખવું."
      }
    }
  },
  {
    "id": "skincare-soap",
    "price": 130,
    "category": "beauty-care",
    "isPopular": false,
    "isNew": false,
    "image": "assets/images/Skincare_soap_main.jpeg",
    "images": [
      "assets/images/Skincare_soap_main.jpeg",
      "assets/images/Skincare_soap_multiple1.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Skincare Soap (80 gm)",
        "shortDesc": "Gentle daily skin nourishing and moisturizing herbal soap.",
        "description": "A pure herbal soap formulated for daily skincare, maintaining skin health, moisture, and natural glow.",
        "benefits": [
          "Nourishes skin tissues deeply",
          "Maintains natural skin moisture barrier",
          "Prevents daily skin irritation and rashes"
        ],
        "usage": "Work up lather on wet skin, apply to body, and rinse off thoroughly.",
        "ingredients": "Herbal extracts, coconut oil base, glycerin, natural fragrance.",
        "suitableFor": "All skin types.",
        "warnings": "For external use only."
      },
      "hi": {
        "name": "स्वयंभू स्किनकेयर साबुन (80 gm)",
        "shortDesc": "त्वचा को पोषण देने और नमी बनाए रखने वाला कोमल हर्बल साबुन।",
        "description": "दैनिक त्वचा की देखभाल, नमी और प्राकृतिक चमक बनाए रखने के लिए तैयार एक शुद्ध हर्बल साबुन। (जल्द ही लॉन्च हो रहा है)।",
        "benefits": [
          "त्वचा को गहराई से पोषण देता है",
          "प्राकृतिक नमी बनाए रखता है",
          "दैनिक त्वचा की जलन और रैशेज से बचाता है"
        ],
        "usage": "गीली त्वचा पर झाग बनाएं, शरीर पर लगाएं और अच्छी तरह धो लें।",
        "ingredients": "हर्बल अर्क, नारियल तेल बेस, ग्लिसरीन, प्राकृतिक सुगंध।",
        "suitableFor": "सभी प्रकार की त्वचा के लिए।",
        "warnings": "केवल बाहरी उपयोग के लिए।"
      },
      "gu": {
        "name": "સ્વયંભૂ સ્કીનકેર સાબુ (80 gm)",
        "shortDesc": "ત્વચાને પોષણ અને મોઇશ્ચરાઇઝેશન આપતો હર્બલ સાબુ.",
        "description": "ત્વચાની દૈનિક સંભાળ, નરમાશ અને ચમક જાળવી રાખવા માટેનો ખાસ સાબુ.",
        "benefits": [
          "ત્વચાને ઊંડાણપૂર્વક પોષણ આપે છે",
          "ત્વચાનો કુદરતી ભેજ જાળવી રાખે છે",
          "ત્વચાની બળતરા અને લાલ ચકામા અટકાવે છે"
        ],
        "usage": "ભીની ત્વચા પર સાબુ લગાવી ફીણ બનાવો, શરીર પર મસાજ કરો અને ધોઈ લો.",
        "ingredients": "હર્બલ અર્ક, નાળિયેર તેલ, ગ્લિસરીન, કુદરતી સુગંધ.",
        "suitableFor": "તમામ પ્રકારની ત્વચા માટે ઉપયોગી.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે."
      }
    }
  },
  {
    "id": "anti-pimple-soap",
    "price": 120,
    "category": "beauty-care",
    "isPopular": false,
    "isNew": false,
    "image": "assets/images/Antipimple_soap_main.jpeg",
    "images": [
      "assets/images/Antipimple_soap_main.jpeg",
      "assets/images/Antipimple_soap_multiple1.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Anti-Pimple Soap (80 gm)",
        "shortDesc": "Acne fighting soap with antibacterial Neem and Tulsi extracts.",
        "description": "A specialized anti-bacterial soap designed to cure active pimples, prevent acne breakouts, and regulate excess sebum.",
        "benefits": [
          "Fights acne causing bacteria",
          "Controls excess oil secretion",
          "Soothes skin inflammation and scars"
        ],
        "usage": "Lather on face and affected areas, leave for 1 minute, and rinse with cold water.",
        "ingredients": "Neem oil, Tulsi oil, Tea tree oil, Soap base, Glycerin.",
        "suitableFor": "Oily and acne-prone skin.",
        "warnings": "For external use only. Avoid contact with eyes."
      },
      "hi": {
        "name": "स्वयंभू एंटी-पिंपल साबुन (80 gm)",
        "shortDesc": "एंटीबैक्टीरियल नीम और तुलसी अर्क से निर्मित मुंहासे रोधी साबुन।",
        "description": "सक्रिय मुंहासों को ठीक करने, पिंपल्स को रोकने और चेहरे के अतिरिक्त तेल को नियंत्रित करने के लिए निर्मित विशेष साबुन।",
        "benefits": [
          "मुंहासे पैदा करने वाले बैक्टीरिया से लड़ता है",
          "त्वचा के अतिरिक्त तेल को नियंत्रित करता है",
          "त्वचा की जलन और दाग-धब्बों को शांत करता है"
        ],
        "usage": "चेहरे और प्रभावित क्षेत्रों पर झाग लगाएं, 1 मिनट के लिए छोड़ दें और ठंडे पानी से धो लें।",
        "ingredients": "नीम का तेल, तुलसी का तेल, टी ट्री ऑयल, सोप बेस, ग्लिसरीन।",
        "suitableFor": "तैलीय और मुंहासे वाली त्वचा के लिए।",
        "warnings": "केवल बाहरी उपयोग के लिए। आँखों से बचाएं।"
      },
      "gu": {
        "name": "સ્વયંભૂ એન્ટી-ખીલ સાબુ (80 gm)",
        "shortDesc": "ખીલ મટાડવા માટે લીમડા અને તુલસીના અર્કથી બનેલો વિશેષ સાબુ.",
        "description": "ખીલ અને ડાઘ મટાડવા તેમજ ત્વચાના વધારાના તેલને નિયંત્રિત કરવા માટે બનાવવામાં આવેલો સાબુ.",
        "benefits": [
          "ખીલ પેદા કરતા બેક્ટેરિયા સામે લડે છે",
          "ત્વચાના વધારાના તેલને નિયંત્રિત કરે છે",
          "ત્વચાની બળતરા અને ડાઘમાં રાહત આપે છે"
        ],
        "usage": "ચહેરો અને ખીલવાળા ભાગો પર સાબુ લગાવો, ૧ મિનિટ માટે રહેવા દઈ ઠંડા પાણીથી ધોઈ નાખો.",
        "ingredients": "લીમડાનું તેલ, તુલસીનું તેલ, ટી ટ્રી ઓઈલ, સાબુ બેઝ, ગ્લિસરીન.",
        "suitableFor": "તૈલી અને ખીલવાળી ત્વચા માટે ઉપયોગી.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. આંખોથી બચાવવું."
      }
    }
  },
  {
    "id": "sunscreen-lotion",
    "price": 280,
    "category": "beauty-care",
    "isPopular": false,
    "isNew": true,
    "image": "assets/images/Sunscreen_main.jpeg",
    "images": [
      "assets/images/Sunscreen_main.jpeg",
      "assets/images/Sunscreen_multiple1.jpeg",
      "assets/images/Sunscreen_multiple2.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Ayurvedic Sunscreen Lotion (100 ml)",
        "shortDesc": "Natural SPF protection with Aloe Vera and Sandalwood.",
        "description": "A natural sunscreen lotion formulated to protect your skin from harmful UV rays while maintaining moisture and nourishment without greasiness.",
        "benefits": [
          "Protects skin from UVA/UVB rays",
          "Prevents sunburns and tanning",
          "Hydrates skin layers",
          "Chemical-free formula"
        ],
        "usage": "Apply evenly on exposed skin parts 15 minutes before sun exposure. Reapply every 3-4 hours if outdoors.",
        "ingredients": "Aloe Vera, Sandalwood Oil, Turmeric Extract, Sunflower Oil, Zinc Oxide (Natural Mineral SPF).",
        "suitableFor": "All skin types.",
        "warnings": "Perform a patch test. For external use only."
      },
      "hi": {
        "name": "स्वयंभू आयुर्वेदिक सनस्क्रीन लोशन (100 ml)",
        "shortDesc": "एलोवेरा और चंदन से युक्त प्राकृतिक एसपीएफ सुरक्षा लोशन।",
        "description": "हानिकारक यूवी किरणों से आपकी त्वचा की रक्षा करने और बिना किसी चिपचिपाहट के त्वचा को पोषण देने के लिए तैयार एक प्राकृतिक सनस्क्रीन लोशन।",
        "benefits": [
          "यूवीए/यूवीबी (UVA/UVB) किरणों से त्वचा की रक्षा करता है",
          "सनबर्न और टैनिंग को रोकता है",
          "त्वचा की परतों को हाइड्रेट रखता है",
          "हानिकारक रसायनों से मुक्त फार्मूला"
        ],
        "usage": "धूप में निकलने से 15 मिनट पहले शरीर के खुले हिस्सों पर समान रूप से लगाएं। जरूरत पड़ने पर हर 3-4 घंटे में दोबारा लगाएं।",
        "ingredients": "एलोवेरा, चंदन का तेल, हल्दी का अर्क, सूरजमुखी का तेल, जिंक ऑक्साइड (प्राकृतिक खनिज एसपीएफ)।",
        "suitableFor": "सभी प्रकार की त्वचा के लिए उपयुक्त।",
        "warnings": "केवल बाहरी उपयोग के लिए। आँखों में जाने से बचाएं।"
      },
      "gu": {
        "name": "સ્વયંભૂ આયુર્વેદિક સનસ્ક્રીન લોશન (100 ml)",
        "shortDesc": "એલોવેરા અને ચંદન યુક્ત કુદરતી SPF સન પ્રોટેક્શન લોશન.",
        "description": "સૂર્યના હાનિકારક કિરણોથી ત્વચાનું રક્ષણ કરવા માટેનો આયુર્વેદિક લોશન. તે ચીકાશ વગર ત્વચાને હાઇડ્રેટ અને પોષિત રાખે છે.",
        "benefits": [
          "સૂર્યના UVA/UVB કિરણો સામે રક્ષણ આપે છે",
          "સનબર્ન અને ટેનિંગ થતું અટકાવે છે",
          "ત્વચાને મોઇશ્ચરાઇઝ રાખે છે",
          "કેમિકલ રહિત કુદરતી ફોર્મ્યુલા"
        ],
        "usage": "ધૂપમાં બહાર નીકળવાના ૧૫ મિનિટ પહેલા ખુલ્લી ત્વચા પર સરખી રીતે લગાવો. જરૂરિયાત મુજબ ફરીથી લગાડવું.",
        "ingredients": "એલોવેરા, ચંદન તેલ, હળદર અર્ક, સૂર્યમુખી તેલ, ઝીંક ઓક્સાઇડ.",
        "suitableFor": "તમામ પ્રકારની ત્વચા માટે યોગ્ય.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. ખુલ્લા ઘા પર ન લગાડવું."
      }
    }
  },
  {
    "id": "babycare-soap",
    "price": 150,
    "category": "baby-care",
    "isPopular": true,
    "isNew": false,
    "image": "assets/images/babycare_soap_main.jpeg",
    "images": [
      "assets/images/babycare_soap_main.jpeg",
      "assets/images/babycare_soap_multiple1.jpeg",
      "assets/images/babycare_soap_multiple2.jpeg",
      "assets/images/babycare_soap_multiple3.jpeg",
      "assets/images/babycare_soap_multiple4.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Handmade Baby Care Bathing Soap (80 gm)",
        "shortDesc": "Gentle baby bathing bar with Coconut, Almond & Milk base.",
        "description": "A very mild, handmade bathing soap carefully formulated for baby's delicate skin. Enriched with Coconut oil, Almond oil, and a milk base to nourish and protect skin.",
        "benefits": [
          "Skin glowing effect",
          "Make the skin softer and shiner",
          "Nourises and moisturizes",
          "Treat skin disease"
        ],
        "usage": "Gently apply the soap to your baby's wet skin to form a mild lather, massage softly, and wash off with lukewarm water.",
        "ingredients": "Almond oil, Coconut oil, Aloevera ext, Turmeric ext, Licorice ext, Neem ext, Milk base, Fragrance.",
        "suitableFor": "Baby Care. Safe for infants.",
        "warnings": "Avoid direct contact with eyes. Keep out of reach of children without supervision."
      },
      "hi": {
        "name": "स्वयंभू हैंडमेड बेबी केयर बाथिंग सोप (80 gm)",
        "shortDesc": "नारियल, बादाम और दूध बेस से निर्मित कोमल बेबी साबुन।",
        "description": "शिशु की नाजुक त्वचा के लिए सावधानीपूर्वक तैयार किया गया एक बेहद सौम्य हैंडमेड साबुन। यह त्वचा को गहराई से पोषण और सुरक्षा देने के लिए बादाम के तेल और नारियल के तेल से समृद्ध है।",
        "benefits": [
          "त्वचा को चमकदार बनाता है",
          "त्वचा को अधिक कोमल और चमकीला बनाता है",
          "गहरा पोषण और नमी प्रदान करता है",
          "त्वचा के सामान्य रोगों का इलाज करता है"
        ],
        "usage": "स्नान के समय बच्चे की गीली त्वचा पर साबुन को धीरे से रगड़ें, हल्की मालिश करें और गुनगुने पानी से पूरी तरह धो लें।",
        "ingredients": "बादाम का तेल, नारियल का तेल, एलोवेरा का अर्क, हल्दी का अर्क, मुलेठी का अर्क, नीम का अर्क, मिल्क बेस, सुगंध।",
        "suitableFor": "शिशुओं की संवेदनशील त्वचा की देखभाल के लिए सुरक्षित।",
        "warnings": "आँखों के सीधे संपर्क से बचाएं। वयस्कों की देखरेख में ही इस्तेमाल करें।"
      },
      "gu": {
        "name": "સ્વયંભૂ હેન્ડમેડ બેબી કેર બાથિંગ સાબુ (80 gm)",
        "shortDesc": "નાળિયેર, બદામ અને મિલ્ક બેઝ યુક્ત સૌમ્ય બેબી સાબુ.",
        "description": "બાળકની નાજુક ત્વચા માટે ખાસ તૈયાર કરવામાં આવેલો અતિ સૌમ્ય સાબુ. તે બદામ તેલ, નાળિયેર તેલ અને એલોવેરાના ગુણોથી સમૃદ્ધ છે જે બાળકની ત્વચાની રક્ષા કરે છે.",
        "benefits": [
          "બાળકની ત્વચાને ચમકદાર બનાવે છે",
          "ત્વચાને વધુ નરમ અને ચમકતી બનાવે છે",
          "ઊંડું પોષણ અને મોઇશ્ચરાઇઝેશન પૂરું પાડે છે",
          "ત્વચાના રોગો સામે રક્ષણ આપે છે"
        ],
        "usage": "બાળકને નવડાવતી વખતે ભીની ત્વચા પર સાબુ હળવેથી લગાવો, માલિશ કરો અને નવશેકા ગરમ પાણીથી બરાબર ધોઈ લો.",
        "ingredients": "બડામનું તેલ, નાળિયેર તેલ, એલોવેરા અર્ક, હળદર અર્ક, જેઠીમધ અર્ક, લીમડાનો અર્ક, મિલ્ક બેઝ, સુગંધ.",
        "suitableFor": "બાળકો અને શિશુઓની ત્વચાની સંભાળ માટે.",
        "warnings": "આંખોમાં ન જવા દેવું. બાળકના મોંથી દૂર રાખવું."
      }
    }
  },
  {
    "id": "baby-lotion",
    "price": 250,
    "category": "baby-care",
    "isPopular": true,
    "isNew": false,
    "image": "assets/images/baby_loction_main.jpeg",
    "images": [
      "assets/images/baby_loction_main.jpeg",
      "assets/images/baby_loction_multiple1.jpeg",
      "assets/images/baby_loction_multiple2.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Handmade Ayurvedic Baby Lotion (120 ml)",
        "shortDesc": "Nourishing baby lotion to moisturize and protect soft skin.",
        "description": "A natural, non-greasy baby lotion enriched with Almond oil, Olive oil, and Aloe vera. Helps remove dryness and protects baby skin from external environment.",
        "benefits": [
          "Make baby skin softer & shiner",
          "Remove skin dryness"
        ],
        "usage": "Apply baby lotion all over the baby's body after bath or whenever skin feels dry. Massage gently in circular motions.",
        "ingredients": "Neem, Aloe, Turmeric, Olive Oil, Almond Oil, Vit E, Coconut Oil, Glycerin, Base, Fragrance.",
        "suitableFor": "Babies. Safe for daily use.",
        "warnings": "For external use only. Keep away from direct sunlight."
      },
      "hi": {
        "name": "स्वयंभू हैंडमेड आयुर्वेदिक बेबी लोशन (120 ml)",
        "shortDesc": "मुलायम त्वचा को मॉइस्चराइज और सुरक्षित रखने के लिए बेबी लोशन।",
        "description": "बादाम के तेल, जैतून के तेल और एलोवेरा से भरपूर एक प्राकृतिक, गैर-चिपचिपा बेबी लोशन। यह त्वचा के रूखेपन को दूर करता है और शिशु की त्वचा को सुरक्षित रखता है।",
        "benefits": [
          "बच्चे की त्वचा को कोमल और चमकीला बनाता है",
          "त्वचा का रूखापन हटाता है और उसे सुरक्षित रखता है"
        ],
        "usage": "स्नान के बाद या जब भी त्वचा रूखी लगे, बच्चे के पूरे शरीर पर बेबी लोशन लगाएं। गोलाकार गति में धीरे-धीरे मालिश करें।",
        "ingredients": "नीम, एलोवेरा, हल्दी, जैतून का तेल, बादाम का तेल, विटामिन ई, नारियल का तेल, ग्लिसरीन, बेस, सुगंध।",
        "suitableFor": "शिशुओं के दैनिक मॉइस्चराइजेशन के लिए।",
        "warnings": "केवल बाहरी उपयोग के लिए। सीधे सूर्य के प्रकाश से दूर ठंडी जगह पर रखें।"
      },
      "gu": {
        "name": "સ્વયંભૂ હેન્ડમેડ આયુર્વેદિક બેબી લોશન (120 ml)",
        "shortDesc": "બાળકની નાજુક ત્વચાને નરમ રાખવા માટે પૌષ્ટિક બેબી લોશન.",
        "description": "બદામનું તેલ, ઓલિવ તેલ અને એલોવેરા યુક્ત કુદરતી બેબી લોશન. તે બાળકની ત્વચાની શુષ્કતા દૂર કરી તેને નરમ અને ચમકદાર રાખે છે.",
        "benefits": [
          "બાળકની ત્વચાને વધુ નરમ અને તેજસ્વી બનાવે છે",
          "ત્વચાની શુષ્કતા દૂર કરે છે અને રક્ષણ આપે છે"
        ],
        "usage": "સ્નાન કર્યા પછી અથવા જ્યારે પણ ત્વચા સૂકી લાગે ત્યારે બાળકના આખા શરીર પર બેબી લોશન લગાવો. હળવા હાથે મસાજ કરો.",
        "ingredients": "લીમડો, એલોવેરા, હળદર, ઓલિવ ઓઈલ, બદામનું તેલ, વિટામિન E, નાળિયેર તેલ, ગ્લિસરીન, બેઝ, સુગંધ.",
        "suitableFor": "બાળકોના દૈનિક સ્કીન મોઇશ્ચરાઇઝેશન માટે.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. ગરમ જગ્યાએ ન રાખવું."
      }
    }
  },
  {
    "id": "kesuda-soap",
    "price": 100,
    "category": "bathing",
    "isPopular": false,
    "isNew": false,
    "image": "assets/images/kesuda_soap_main.jpeg",
    "images": [
      "assets/images/kesuda_soap_main.jpeg",
      "assets/images/kesuda_soap_multiple1.jpeg",
      "assets/images/kesuda_soap_multiple2.jpeg",
      "assets/images/kesuda_soap_multiple3.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Kesuda Soap (80 gm)",
        "shortDesc": "Refreshing summer soap with natural Kesuda (Palash) flowers.",
        "description": "Traditionally crafted soap with Kesuda flower extracts, known for its cooling properties and healing skin rashes, particularly in summer.",
        "benefits": [
          "Cools and refreshes the skin",
          "Cures heat rashes and boils",
          "Gently cleanses and detoxifies skin"
        ],
        "usage": "Rub on wet body to work up a rich lather, wash off with water.",
        "ingredients": "Kesuda (Palash) flower extract, coconut oil base, glycerin, natural herbs.",
        "suitableFor": "Summer use. Good for sensitive skin.",
        "warnings": "For external use only."
      },
      "hi": {
        "name": "स्वयंभू केसूड़ा साबुन (80 gm)",
        "shortDesc": "प्राकृतिक केसूड़ा (पलाश) फूलों से निर्मित ग्रीष्मकालीन शीतल साबुन।",
        "description": "केसूड़ा फूल के अर्क से बना पारंपरिक साबुन, जो अपनी ठंडक प्रदान करने वाली विशेषताओं और गर्मियों में घमौरियों को ठीक करने के लिए जाना जाता है।",
        "benefits": [
          "त्वचा को ठंडक और ताजगी प्रदान करता है",
          "घमौरियों और गर्मी के दानों को ठीक करता है",
          "त्वचा को धीरे से साफ और विषमुक्त करता है"
        ],
        "usage": "गीले शरीर पर रगड़कर झाग बनाएं और पानी से धो लें।",
        "ingredients": "केसूड़ा (पलाश) फूल का अर्क, नारियल तेल base, ग्लिसरीन, प्राकृतिक जड़ी-बूटियाँ।",
        "suitableFor": "गर्मियों में उपयोग के लिए। संवेदनशील त्वचा के लिए उपयुक्त।",
        "warnings": "केवल बाहरी उपयोग के लिए।"
      },
      "gu": {
        "name": "સ્વયંભૂ કેસુડા સાબુ (80 gm)",
        "shortDesc": "ગરમીમાં શીતળતા આપતો કેસુડાના ફૂલોમાંથી બનેલો સાબુ.",
        "description": "પરંપરાગત રીતે તૈયાર કરાયેલો કેસુડાના ફૂલનો સાબુ, જે ચામડીની ગરમી, અળાઈઓ અને ચકામા મટાડવામાં મદદ કરે છે.",
        "benefits": [
          "ત્વચાને ઠંડક અને તાજગી આપે છે",
          "ઉનાળાની અળાઈઓ અને ગુમડાં મટાડે છે",
          "ત્વચાને ઊંડાણપૂર્વક સાફ કરે છે"
        ],
        "usage": "ભીના શરીર પર સાબુ લગાવી ફીણ બનાવો અને સ્વચ્છ પાણીથી ધોઈ નાખો.",
        "ingredients": "કેસુડા (ખાખરા) ના ફૂલનો અર્ક, નાળિયેર તેલ સાબુ બેઝ, ગ્લિસરીન.",
        "suitableFor": "ગરમીની ઋતુમાં વાપરવા માટે ખાસ ઉપયોગી.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે."
      }
    }
  },
  {
    "id": "panchgavya-soap",
    "price": 140,
    "category": "bathing",
    "isPopular": false,
    "isNew": false,
    "image": "assets/images/panchgavya_soap_main.jpeg",
    "images": [
      "assets/images/panchgavya_soap_main.jpeg",
      "assets/images/panchgavya_soap_multiple1.jpeg",
      "assets/images/panchgavya_soap_multiple2.jpeg",
      "assets/images/panchgavya_soap_multiple3.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Panchgavya Soap (80 gm)",
        "shortDesc": "Traditional purifying soap made with sacred Panchgavya ingredients.",
        "description": "A highly purifying Ayurvedic bathing bar containing Panchgavya (five cow products) which detoxifies skin layers and cures eczema.",
        "benefits": [
          "Deeply purifies and detoxifies skin",
          "Heals skin infections like eczema",
          "Improves overall skin texture"
        ],
        "usage": "Apply to wet skin, massage to lather, and rinse off thoroughly.",
        "ingredients": "Gau Ghrita, Gau Maya, Gau Mutra, Gau Dugdha, Gau Dadhi, Neem, Coconut oil soap base.",
        "suitableFor": "Dry, infected, or normal skin.",
        "warnings": "For external use only."
      },
      "hi": {
        "name": "स्वयंभू पंचगव्य साबुन (80 gm)",
        "shortDesc": "पवित्र पंचगव्य सामग्री से बना पारंपरिक शुद्धि साबुन।",
        "description": "एक अत्यंत पवित्र और औषधीय स्नान साबुन जिसमें पंचगव्य (गाय के पांच अमृत उत्पाद) शामिल हैं। यह त्वचा का शोधन करता है और चर्म रोगों को ठीक करता है।",
        "benefits": [
          "त्वचा को गहराई से शुद्ध और विषमुक्त करता है",
          "एक्जिमा और त्वचा के संक्रमण को ठीक करने में सहायक",
          "त्वचा की समग्र बनावट में सुधार करता है"
        ],
        "usage": "गीली त्वचा पर लगाएं, झाग बनाने के लिए रगड़ें और पानी से अच्छी तरह धो लें।",
        "ingredients": "गो घृत, गोमय, गोमूत्र, गो दुग्ध, गो दधि, नीम, नारियल तेल साबुन बेस।",
        "suitableFor": "चर्म रोग, एक्जिमा या शुष्क त्वचा वाले लोगों के लिए अत्यधिक लाभकारी।",
        "warnings": "केवल बाहरी उपयोग के लिए।"
      },
      "gu": {
        "name": "સ્વયંભૂ પંચગવ્ય સાબુ (80 gm)",
        "shortDesc": "પવિત્ર પંચગવ્યના ઘટકો ધરાવતો ગુણકારી આયુર્વેદિક સાબુ.",
        "description": "ચામડીના રોગો મટાડવા અને લોહીની અશુદ્ધિ દૂર કરવા માટે ગાયના પંચગવ્ય (દૂધ, દહીં, ઘી, ગોમૂત્ર, ગોબર) માંથી બનેલો વિશેષ સાબુ.",
        "benefits": [
          "ત્વચાને શુદ્ધ અને કીટાણુમુક્ત કરે છે",
          "ખીલ અને ખરજવું જેવા ચર્મરોગો મટાડે છે",
          "ત્વચાના પોતને તેજસ્વી બનાવે છે"
        ],
        "usage": "ભીની ત્વચા પર સાબુ લગાવી ફીણ બનાવો અને સ્વચ્છ પાણીથી ધોઈ નાખો.",
        "ingredients": "ગાયનું ઘી, ગૌમૂત્ર, ગૌમય અર્ક, ગાયનું દૂધ, ગાયનું દહીં, નાળિયેર તેલ સાબુ બેઝ.",
        "suitableFor": "ચર્મ રોગ ધરાવતા અને સંવેદનશીલ ત્વચાવાળા લોકો માટે.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે."
      }
    }
  },
  {
    "id": "bodywash",
    "price": 250,
    "category": "bathing",
    "isPopular": false,
    "isNew": false,
    "image": "assets/images/bodywash_main.jpeg",
    "images": [
      "assets/images/bodywash_main.jpeg",
      "assets/images/bodywash_multiple1.jpeg",
      "assets/images/bodywash_multiple2.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Ayurvedic Body Wash (200 ml)",
        "shortDesc": "Refreshing herbal bathing gel for deep skin purification.",
        "description": "A rejuvenating, sulfate-free body wash enriched with Neem, Aloe Vera, and Tulsi. It gently cleanses the skin, removes dirt and excess oil, and leaves a cooling sensation.",
        "benefits": [
          "Gently cleanses skin without drying",
          "Hydrates skin layers deeply",
          "Removes body odor naturally",
          "Paraben-free & toxin-free"
        ],
        "usage": "Squeeze onto a wet loofah or palm, work into a rich lather, massage all over body, and rinse off thoroughly.",
        "ingredients": "Neem extract, Aloe Vera juice, Tulsi, Coconut oil extract, Glycerin, Base, Fragrance.",
        "suitableFor": "All skin types.",
        "warnings": "For external use only. Keep out of reach of infants."
      },
      "hi": {
        "name": "स्वयंभू आयुर्वेदिक बॉडी वॉश (200 ml)",
        "shortDesc": "त्वचा की गहरी शुद्धि के लिए ताज़गी देने वाला हर्बल बाथिंग जेल।",
        "description": "नीम, एलोवेरा और तुलसी से समृद्ध एक पुनर्जीवित करने वाला सल्फेट-मुक्त बॉडी वॉश। यह त्वचा को कोमलता से साफ करता है, धूल और अतिरिक्त तेल हटाता है और शरीर को शीतलता प्रदान करता है।",
        "benefits": [
          "त्वचा को बिना सुखाए कोमलता से साफ करता है",
          "त्वचा की परतों को गहराई से हाइड्रेट करता है",
          "प्राकृतिक रूप से शरीर की दुर्गंध दूर करता है",
          "पैराबेन-मुक्त और विषमुक्त उत्पाद"
        ],
        "usage": "गीले लूफैह या हथेली पर लें, झाग बनाएं, पूरे शरीर पर मालिश करें और अच्छी तरह धो लें।",
        "ingredients": "नीम का अर्क, एलोवेरा जेल, तुलसी, नारियल तेल का अर्क, ग्लिसरीन, बेस, सुगंध।",
        "suitableFor": "सभी प्रकार की त्वचा के लिए। दैनिक उपयोग के लिए उपयुक्त।",
        "warnings": "केवल बाहरी उपयोग के लिए। बच्चों की पहुंच से दूर रखें।"
      },
      "gu": {
        "name": "સ્વયંભૂ આયુર્વેદિક બોડી વોશ (200 ml)",
        "shortDesc": "ત્વચાને તાજગી આપતો લીમડા અને એલોવેરા યુક્ત બોડી વોશ.",
        "description": "લીમડો, તુલસી અને એલોવેરાના અર્ક ધરાવતો કુદરતી બોડી વોશ. તે શરીરમાંથી પ્રદૂષણ દૂર કરે છે અને ત્વચાને મુલાયમ રાખે છે.",
        "benefits": [
          "તોચાને શુષ્ક કર્યા વિના સફાઈ આપે છે",
          "ત્વચાને ઊંડાણપૂર્વક હાઇડ્રેટ કરે છે",
          "પરસેવાની દુર્ગંધ કુદરતી રીતે દૂર કરે છે",
          "પેરાબેન-મુક્ત અને હાનિકારક રસાયણ મુક્ત"
        ],
        "usage": "ભીના લૂફા અથવા હથેળી પર થોડી માત્રામાં લઈ, શરીર પર મસાજ કરી ફીણ બનાવો અને ધોઈ લો.",
        "ingredients": "લીમડાનો અર્ક, એલોવેરા જ્યુસ, તુલસી, નાળિયેર તેલ અર્ક, ગ્લિસરીન, બેઝ, સુગંધ.",
        "suitableFor": "તમામ પ્રકારની ત્વચા માટે યોગ્ય.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. ગળી જવું નહીં."
      }
    }
  },
    {
    "id": "shower-gel",
    "price": 250,
    "category": "bathing",
    "isPopular": false,
    "isNew": false,
    "image": "assets/images/shower_gel_main.jpeg",
    "images": [
      "assets/images/shower_gel_main.jpeg",
      "assets/images/shower_gel_multiple1.jpeg",
      "assets/images/shower_gel_multiple2.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Ayurvedic Shower Gel (200 ml)",
        "shortDesc": "Hydrating and soothing Ayurvedic shower gel for all skin types.",
        "description": "A premium Ayurvedic shower gel formulated with Neem, Turmeric, Aloe Vera, and Tulsi. It cleanses gently while hydrating, moisturizing, and improving skin tone.",
        "benefits": [
          "Hydrates & Moisturizes",
          "Soothes Skin Irritations",
          "Improves Skin Tone",
          "Suitable For All Skin Types"
        ],
        "usage": "Lather onto wet body, massage gently, and rinse with water.",
        "ingredients": "Neem, Turmeric, Aloevera, Tulsi, Base, Fragrance.",
        "suitableFor": "All skin types.",
        "warnings": "Avoid contact with eyes. Keep in cool place."
      },
      "hi": {
        "name": "स्वयंभू आयुर्वेदिक शॉवर जेल (200 ml)",
        "shortDesc": "सभी प्रकार की त्वचा के लिए हाइड्रेटिंग और सुखदायक आयुर्वेदिक शॉवर जेल।",
        "description": "नीम, हल्दी, एलोवेरा और तुलसी से समृद्ध एक प्रीमियम आयुर्वेदिक शॉवर जेल। यह त्वचा को धीरे से साफ करता है, नमी प्रदान करता है और त्वचा की रंगत में सुधार करता है।",
        "benefits": [
          "त्वचा को हाइड्रेट और मॉइस्चराइज करता है",
          "त्वचा की जलन को शांत करता है",
          "त्वचा की रंगत (टोन) में सुधार करता है",
          "सभी प्रकार की त्वचा के लिए उपयुक्त है"
        ],
        "usage": "गीले शरीर पर झाग बनाएं, धीरे से मालिश करें और पानी से धो लें।",
        "ingredients": "नीम, हल्दी, एलोवेरा, तुलसी, Base, सुगंध।",
        "suitableFor": "सभी प्रकार की त्वचा के लिए।",
        "warnings": "आँखों में जाने से बचाएं। ठंडे स्थान पर रखें।"
      },
      "gu": {
        "name": "સ્વયંભૂ આયુર્વેદિક શાવર જેલ (200 ml)",
        "shortDesc": "ત્વચાને હાઇડ્રેટ કરતો લીમડા અને એલોવેરા યુક્ત શાવર જેલ.",
        "description": "લીમડો, હળદર, તુલસી અને એલોવેરાના અર્ક ધરાવતો આયુર્વેદિક શાવર જેલ. તે ત્વચાને સાફ કરી મોઇશ્ચરાઇઝ કરે છે અને સ્કીન ટોન સુધારે છે.",
        "benefits": [
          "તવચાને હાઇડ્રેટ અને મોઇશ્ચરાઇઝ રાખે છે",
          "તોચાની બળતરા શાંત કરે છે",
          "ત્વચાના રંગ અને ટોનમાં સુધારો કરે છે",
          "દરેક પ્રકારની ત્વચા માટે યોગ્ય છે"
        ],
        "usage": "ભીના શરીર પર લગાવી હળવા હાથે મસાજ કરી ધોઈ નાખો.",
        "ingredients": "લીમડો, હળદર, એલોવેરા, તુલસી, બેઝ, સુગંધ.",
        "suitableFor": "તમામ પ્રકારની ત્વચા માટે યોગ્ય.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. આંખોથી બચાવવું."
      }
    }
  },
  {
    "id": "moisturizer-lotion",
    "price": 280,
    "category": "winter-care",
    "isPopular": true,
    "isNew": false,
    "image": "assets/images/Mosturizer_lotion_main.jpeg",
    "images": [
      "assets/images/Mosturizer_lotion_main.jpeg",
      "assets/images/Mosturizer_lotion_multiple1.jpeg",
      "assets/images/Mosturizer_lotion_multiple2.jpeg",
      "assets/images/Mosturizer_lotion_multiple3.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Moisturizer Lotion (250 ml)",
        "shortDesc": "Prevents skin dryness, treats allergies, and fights infections.",
        "description": "A premium Ayurvedic handmade moisturizing lotion containing Aloe vera, Neem, and Tea tree oil. Nourishes deep skin layers, locks in moisture, and heals dry skin allergies.",
        "benefits": [
          "Prevent skin dryness",
          "Supply hydration",
          "Helpful in skin allergy",
          "Fight in bacterial infection",
          "Prevent Skin Dryness And Allergy"
        ],
        "usage": "Smooth over entire body daily or apply to dry patches as needed. Massage gently until completely absorbed.",
        "ingredients": "Neem ext., Aloevera ext, Manjistha ext, Turmeric ext, Coconut oil, Glycerin, Olive oil, Tea tree oil, Base, Fragrance.",
        "suitableFor": "Dry skin and allergy-prone skin.",
        "warnings": "For external use only. Keep away from direct sunlight."
      },
      "hi": {
        "name": "स्वयंभू मॉइस्चराइज़र लोशन (250 ml)",
        "shortDesc": "त्वचा के रूखेपन को रोके, एलर्जी का इलाज करे और संक्रमण से बचाए।",
        "description": "एलोवेरा, नीम और टी ट्री ऑयल से युक्त एक प्रीमियम आयुर्वेदिक हैंडमेड मॉइस्चराइजिंग लोशन। यह त्वचा की परतों को पोषण देता है और सूखी त्वचा की एलर्जी को ठीक करता है।",
        "benefits": [
          "त्वचा के रूखेपन को रोकता है",
          "त्वचा को गहराई से हाइड्रेट करता है",
          "त्वचा की एलर्जी के इलाज में सहायक",
          "बैक्टीरियल संक्रमण से लड़ता है",
          "त्वचा के रूखेपन और एलर्जी को रोकता है"
        ],
        "usage": "रोजाना पूरे शरीर पर लगाएं या आवश्यकतानुसार रूखे पैच पर लगाएं। पूरी तरह अवशोषित होने तक धीरे-धीरे मालिश करें।",
        "ingredients": "नीम का अर्क, एलोवेरा का अर्क, मंजीष्ठा का अर्क, हल्दी का अर्क, नारियल का तेल, ग्लिसरीन, जैतून का तेल, टी ट्री तेल, बेस, सुगंध।",
        "suitableFor": "रूखी और एलर्जी-प्रवण त्वचा के लिए अत्यधिक उपयोगी।",
        "warnings": "केवल बाहरी उपयोग के लिए। सीधे धूप से दूर रखें।"
      },
      "gu": {
        "name": "સ્વયંભૂ મોઇશ્ચરાઇઝર લોશન (250 ml)",
        "shortDesc": "અવરોધક શુષ્કતા, એલર્જી મટાડવા અને ચેપ સામે રક્ષણ આપવા માટે લોશન.",
        "description": "એલોવેરા, લીમડો અને ટી ટ્રી તેલ ધરાવતો આયુર્વેદિક લોશન. તે ચામડીની એલર્જી મટાડે છે અને ભેજ જાળવી રાખે છે.",
        "benefits": [
          "ત્વચાની શુષ્કતા અટકાવે છે",
          "ભેજ અને હાઇડ્રેશન પૂરું પાડે છે",
          "ત્વચાની એલર્જીમાં ખૂબ ફાયદાકારક છે",
          "બેક્ટેરિયલ ઇન્ફેક્શન સામે લડે છે",
          "ચામડીની શુષ્કતા અને એલર્જીથી બચાવે છે"
        ],
        "usage": "રોજ આખા શરીર પર લગાવો અથવા જરૂરિયાત મુજબ શુષ્ક ભાગો પર લગાવો. શોષાઈ જાય ત્યાં સુધી હળવા હાથે મસાજ કરો.",
        "ingredients": "લીમડાનો અર્ક, એલોવેરા અર્ક, મંજિષ્ઠા અર્ક, હળદર અર્ક, નાળિયેર તેલ, ગ્લિસરીન, ઓલિવ ઓઈલ, ટી ટ્રી ઓઈલ, બેઝ, સુગંધ.",
        "suitableFor": "સૂકી અને એલર્જી થવાની સંભાવના વાળી ત્વચા માટે.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. સૂર્યપ્રકાશથી બચાવવું."
      }
    }
  },
    {
    "id": "moisturizer-cream",
    "price": 180,
    "category": "winter-care",
    "isPopular": false,
    "isNew": false,
    "image": "assets/images/Mosturizer_cream_main.jpeg",
    "images": [
      "assets/images/Mosturizer_cream_main.jpeg",
      "assets/images/Mosturizer_cream_multiple1.jpeg",
      "assets/images/Mosturizer_cream_multiple2.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Moisturizing Cream (50 gm)",
        "shortDesc": "Rich nourishing cream to prevent skin dryness and allergies.",
        "description": "A premium Ayurvedic moisturizing cream formulated with Neem, Aloe Vera, Manjistha, and Turmeric extracts. It prevents skin dryness, supplies hydration, helps with skin allergies, and provides deep moisturization and nourishment.",
        "benefits": [
          "Prevent skin dryness",
          "Supply hydration",
          "Helpful in skin allergy",
          "Deep moisturization and nourishment"
        ],
        "usage": "Massage gently onto clean face, neck, and body until fully absorbed. Use daily, especially in dry weather.",
        "ingredients": "Neem ext, Aloevera ext, Manjistha ext, Turmeric ext, Coconut oil, Glycerin, Olive oil, Base, Fragrance.",
        "suitableFor": "Normal to dry and allergy-prone skin types.",
        "warnings": "For external use only. Avoid contact with eyes."
      },
      "hi": {
        "name": "स्वयंभू मॉइस्चराइजिंग क्रीम (50 gm)",
        "shortDesc": "त्वचा के रूखेपन और एलर्जी को रोकने के लिए पौष्टिक क्रीम।",
        "description": "नीम, एलोवेरा, मंजीष्ठा और हल्दी के अर्क से तैयार एक प्रीमियम आयुर्वेदिक मॉइस्चराइजिंग क्रीम। यह त्वचा के रूखेपन को रोकती है, हाइड्रेशन प्रदान करती है, त्वचा की एलर्जी में मदद करती है, और गहरा पोषण देती है।",
        "benefits": [
          "त्वचा के रूखेपन को रोकती है",
          "पर्याप्त नमी (हाइड्रेशन) प्रदान करती है",
          "त्वचा की एलर्जी में सहायक",
          "गहरा मॉइस्चराइजेशन और पोषण देती है"
        ],
        "usage": "साफ चेहरे, गर्दन और शरीर पर लगाएं और पूरी तरह अवशोषित होने तक धीरे-धीरे मालिश करें।",
        "ingredients": "नीम का अर्क, एलोवेरा का अर्क, मंजीष्ठा का अर्क, हल्दी का अर्क, नारियल का तेल, ग्लिसरीन, जैतून का तेल, बेस, सुगंध।",
        "suitableFor": "सामान्य से रूखी और एलर्जी-प्रवण त्वचा के लिए अत्यधिक उपयोगी।",
        "warnings": "केवल बाहरी उपयोग के लिए। आँखों में न जाने दें।"
      },
      "gu": {
        "name": "સ્વયંભૂ મોઇશ્ચરાઇઝિંગ ક્રીમ (50 gm)",
        "shortDesc": "ચામડીની શુષ્કતા અને એલર્જીથી બચાવતી પૌષ્ટિક ક્રીમ.",
        "description": "લીમડો, એલોવેરા, મંજિષ્ઠા અને હળદરના અર્ક ધરાવતી આયુર્વેદિક મોઇશ્ચરાઇઝિંગ ક્રીમ. તે ત્વચાની શુષ્કતા અટકાવે છે, ભેજ પૂરો પાડે છે, એલર્જી મટાડે છે અને ઊંડું પોષણ આપે છે.",
        "benefits": [
          "તવચાની શુષ્કતા અટકાવે છે",
          "પૂરતું હાઇડ્રેશન અને ભેજ પૂરો પાડે છે",
          "તોચાની એલર્જીમાં ખૂબ ફાયદાકારક છે",
          "ત્વચાને ઊંડું મોઇશ્ચરાઇઝેશન અને પોષણ આપે છે"
        ],
        "usage": "સાફ ચહેરો, ગરદન અને શરીર પર ક્રીમ લગાવી શોષાઈ જાય ત્યાં સુધી હળવા હાથે મસાજ કરો.",
        "ingredients": "લીમડો, એલોવેરા, મંજિષ્ઠા, હળદર, નાળિયેર તેલ, ગ્લિસરીન, ઓલિવ તેલ, બેઝ, સુગંધ.",
        "suitableFor": "સામાન્ય અને સૂકી ત્વચા તેમજ એલર્જીવાળી ત્વચા માટે ખાસ ઉપયોગી ક્રીમ.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. આંખોથી બચાવવું."
      }
    }
  },
    {
    "id": "lip-balm",
    "price": 120,
    "category": "winter-care",
    "isPopular": false,
    "isNew": false,
    "image": "assets/images/lip_balm_main.jpeg",
    "images": [
      "assets/images/lip_balm_main.jpeg",
      "assets/images/lip_balm_multiple1.jpeg",
      "assets/images/lip_balm_multiple2.jpeg",
      "assets/images/lip_balm_multiple3.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Ayurvedic Handmade Lip Balm (10 gm)",
        "shortDesc": "Natural lip balm for glossy shine, soft, and supple lips.",
        "description": "An organic, handmade Ayurvedic lip balm enriched with Castor oil, Coconut oil, Shea Butter, and Cocoa Butter. It provides a glossy shine and keeps your lips soft and supple.",
        "benefits": [
          "Get Glossy Shine",
          "Soft and Supple Lips"
        ],
        "usage": "Apply a thin layer to lips using your fingertip whenever they feel dry.",
        "ingredients": "Castor Oil, Coconut Oil, Shea Butter, Cocoa Butter, Vit E, Beeswax, Fragrance.",
        "suitableFor": "Dry, chapped, or normal lips.",
        "warnings": "For external use only. Store in a cool place to prevent melting."
      },
      "hi": {
        "name": "स्वयंभू आयुर्वेदिक हैंडमेड लिप बाम (10 gm)",
        "shortDesc": "चमकदार, कोमल और मुलायम होठों के लिए प्राकृतिक लिप बाम।",
        "description": "अरंडी के तेल (कैस्टर ऑयल), नारियल के तेल, शिया बटर और कोको बटर से भरपूर एक जैविक, हैंडमेड आयुर्वेदिक लिप बाम। यह होठों को चमकदार, कोमल और मुलायम रखता है।",
        "benefits": [
          "होठों को चमकदार (ग्लॉसी) बनाता है",
          "होठों को कोमल और मुलायम रखता है"
        ],
        "usage": "जब भी होठ रूखे लगें, उंगली की मदद से होठों पर लगाएं.",
        "ingredients": "अरंडी का तेल, नारियल का तेल, शिया बटर, कोको बटर, विटामिन ई, मधुमक्खी का मोम (बीस वैक्स), सुगंध।",
        "suitableFor": "रूखे और फटे होठों के लिए अत्यंत गुणकारी।",
        "warnings": "केवल बाहरी उपयोग के लिए। पिघलने से बचाने के लिए ठंडी जगह पर रखें।"
      },
      "gu": {
        "name": "સ્વયંભૂ આયુર્વેદિક હેન્ડમેડ લિપ બામ (10 gm)",
        "shortDesc": "ચમકદાર અને મુલાયમ હોઠ માટે નેચરલ લિપ બામ.",
        "description": "દિવેલ (કેસ્ટર ઓઈલ), કોકો બટર, નાળિયેર તેલ અને શીયા બટર ધરાવતો આયુર્વેદિક હેન્ડમેડ લિપ બામ. તે હોઠને નરમ અને ચમકદાર રાખે છે.",
        "benefits": [
          "હોઠને ગુલાબી અને ચમકદાર બનાવે છે",
          "હોઠને નરમ અને મુલાયમ રાખે છે"
        ],
        "usage": "જ્યારે પણ હોઠ સૂકા લાગે ત્યારે આંગળીની મદદથી હોઠ પર લગાવો.",
        "ingredients": "દિવેલ, નાળિયેર તેલ, શીયા બટર, કોકો બટર, વિટામિન E, મીણ (બીસવેક્સ), સુગંધ.",
        "suitableFor": "સૂકા અને ફાટેલા હોઠ ધરાવતા લોકો માટે.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. પીગળી ન જાય તે માટે ઠંડી જગ્યાએ રાખવું."
      }
    }
  },
  {
    "id": "footcare-cream",
    "price": 150,
    "category": "winter-care",
    "isPopular": true,
    "isNew": false,
    "image": "assets/images/Footcare_cream_main.jpeg",
    "images": [
      "assets/images/Footcare_cream_main.jpeg",
      "assets/images/Footcare_cream_multiple1.jpeg",
      "assets/images/Footcare_cream_multiple2.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Foot Care Cream (Soft & Smooth Heel) (50 gm)",
        "shortDesc": "Repairs cracked heels, moisturizes, and heals foot skin.",
        "description": "Formulated with Sarshav (Mustard) oil, Kapoor, Manjistha, and Beeswax, this foot care cream repairs deep cracked heels, protects against infection, and heals skin irritation.",
        "benefits": [
          "Repairs crack heel",
          "Protects foot skin",
          "Moisturises feet",
          "Reduces wrinkles",
          "Heals skin irritation"
        ],
        "usage": "Step 1 - Clean your feet with warm water. Step 2 - Apply an adequate amount of cream to your feet, heels, and soles. Step 3 - Massage until completely absorbed.",
        "ingredients": "Sarshav oil, Kapoor, Manjistha, Aloevera, Neem, Bees wax, Fragrance.",
        "suitableFor": "Cracked heels and rough foot skin.",
        "warnings": "For external use only. Do not apply on open, bleeding wounds."
      },
      "hi": {
        "name": "स्वयंभू फुट केयर क्रीम (50 gm)",
        "shortDesc": "फटी एड़ियों को ठीक करने और पैरों को मुलायम बनाने वाली क्रीम।",
        "description": "सरसों का तेल, कपूर, मंजीष्ठा और बीस वैक्स से निर्मित फुट केयर क्रीम। यह पैरों की गहरी फटी एड़ियों को ठीक करती है और संक्रमण व खुजली से बचाती है।",
        "benefits": [
          "फटी एड़ियों को ठीक करता है",
          "पैरों की त्वचा को नुकसान से बचाता है",
          "पैरों को गहराई से मॉइस्चराइज करता है",
          "पैरों की झुर्रियों को कम करता है",
          "त्वचा की जलन को शांत करता है"
        ],
        "usage": "चरण 1 - अपने पैरों को गुनगुने पानी से साफ करें। चरण 2 - अपने पैरों, एड़ियों और तलवों पर पर्याप्त मात्रा में क्रीम लगाएं। चरण 3 - पूरी तरह अवशोषित होने तक मालिश करें।",
        "ingredients": "सरसो का तेल, कपूर, मंजीष्ठा, एलोवेरा, नीम, मधुमक्खी का मोम (बीस वैक्स), सुगंध।",
        "suitableFor": "फटी हुई एड़ियों और पैरों की खुरदरी त्वचा के लिए सर्वोत्तम।",
        "warnings": "केवल बाहरी उपयोग के लिए। बहते खून वाले खुले घावों पर न लगाएं।"
      },
      "gu": {
        "name": "સ્વયંભૂ ફૂટ કેર ક્રીમ (નરમ અને સુંવાળી એડી) (50 gm)",
        "shortDesc": "ફાટેલી એડીઓ મટાડે છે અને પગની ચામડીને નરમ રાખે છે.",
        "description": "સરસવ તેલ, કપૂર, મંજિષ્ઠા અને મીણ ધરાવતી ફૂટ કેર ક્રીમ. તે પગની ઊંડી ફાટેલી એડીઓને મટાડે છે અને બળતરા કે ખંજવાળ શાંત કરે છે.",
        "benefits": [
          "ફાટેલી એડીઓ મટાડે છે",
          "પગની ત્વચાને નુકસાનથી બચાવે છે",
          "પગને ઊંડાણપૂર્વક મોઇશ્ચરાઇઝ કરે છે",
          "પગની ત્વચાની કરચલીઓ ઘટાડે છે",
          "ત્વચાની બળતરામાં રાહત આપે છે"
        ],
         "usage": "પગથિયું ૧ - નવશેકા પાણીથી તમારા પગ સાફ કરો. પગથિયું ૨ - તમારા પગ, એડી અને તળિયા પર પૂરતી માત્રામાં ક્રીમ લગાવો. પગથિયું ૩ - શોષાઈ જાય ત્યાં સુધી માલિશ કરો.",
        "ingredients": "સરસવનું તેલ, કપૂર, મંજિષ્ઠા, એલોવેરા, લીમડો, મીણ, સુગંધ.",
        "suitableFor": "ફાટેલી એડીઓ અને પગની ખરબચડી ત્વચા માટે.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. લોહી નીકળતા ખુલ્લા ઘા પર ન લગાડવું."
      }
    }
  },
  {
    "id": "anti-dandruff-shampoo",
    "price": 250,
    "category": "hair-care",
    "isPopular": false,
    "isNew": true,
    "image": "assets/images/anti_dandruff_shampoo_main.jpeg",
    "images": [
      "assets/images/anti_dandruff_shampoo_main.jpeg",
      "assets/images/anti_dandruff_shampoo_multiple1.jpeg",
      "assets/images/anti_dandruff_shampoo_multiple2.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Handmade Anti-Dandruff Shampoo (100 ml)",
        "shortDesc": "Effective anti-dandruff herbal shampoo for clean and healthy scalp.",
        "description": "A premium, handmade anti-dandruff herbal shampoo enriched with natural extracts of Amla, Bhringraj, and Tea tree oil. It controls dandruff and treats scalp skin problems.",
        "benefits": [
          "Control dandruff",
          "Treat scalp skin problems"
        ],
        "usage": "Shake well before use. Apply to wet hair, gently massage into the scalp, and rinse thoroughly.",
        "ingredients": "Amla, Bhringraj, Fenugreek, Neem Beej, Tulsi, Daruharidra, Tea tree oil, Base fragrance.",
        "suitableFor": "Dandruff control and scalp skin problems.",
        "warnings": "Avoid contact with eyes. Do not apply on broken or irritated skin."
      },
      "hi": {
        "name": "स्वयंभू हैंडमेड एंटी-डैंड्रफ हेयर शैम्पू (100 ml)",
        "shortDesc": "स्वच्छ और स्वस्थ स्कैल्प के लिए प्रभावी एंटी-डैंड्रफ हर्बल शैम्पू।",
        "description": "आंवला, भृंगराज और टी ट्री ऑयल के प्राकृतिक अर्क से समृद्ध एक प्रीमियम, हैंडमेड एंटी-डैंड्रफ हर्बल शैम्पू। यह रूसी को नियंत्रित करता है और स्कैल्प की समस्याओं को ठीक करता है।",
        "benefits": [
          "रूसी (डैंड्रफ) को नियंत्रित करता है",
          "स्कैल्प की समस्याओं (त्वचा रोगों) का इलाज करता है"
        ],
        "usage": "उपयोग करने से पहले अच्छी तरह हिलाएं। गीले बालों में लगाएं, स्कैल्प पर धीरे-धीरे मालिश करें और अच्छी तरह धो लें।",
        "ingredients": "आंवला, भृंगराज, मेथी, नीम के बीज, तुलसी, दारुहरिद्रा, टी ट्री तेल, बेस सुगंध।",
        "suitableFor": "डैंड्रफ नियंत्रण और स्कैल्प की समस्याओं के लिए।",
        "warnings": "केवल बाहरी उपयोग के लिए। आँखों के संपर्क से बचाएं।"
      },
      "gu": {
        "name": "સ્વયંભૂ એન્ટી-ખોડો હેર શેમ્પૂ (100 ml)",
        "shortDesc": "ખોડો નિયંત્રિત કરવા માટે અસરકારક આયુર્વેદિક શેમ્પૂ.",
        "description": "આમળા, ભૃંગરાજ અને ટી ટ્રી ઓઈલના કુદરતી અર્કથી સમૃદ્ધ પ્રીમિયમ હેન્ડમેડ એન્ટી-ડેન્ડ્રફ હર્બલ શેમ્પૂ. તે ખોડો નિયંત્રિત કરે છે અને સ્કેલ્પની સમસ્યાઓ મટાડે છે.",
        "benefits": [
          "ખોડો નિયંત્રિત કરે છે",
          "સ્કેલ્પની સમસ્યાઓ મટાડે છે"
        ],
        "usage": "વાપરતા પહેલા બરાબર હલાવો. ભીના વાળમાં લગાવો, સ્કેલ્પ પર હળવા હાથે માલિશ કરો અને સારી રીતે ધોઈ લો.",
        "ingredients": "આમળા, ભૃંગરાજ, મેથી, લીમડાના બીજ, તુલસી, દારૂહરિદ્રા, ટી ટ્રી ઓઈલ, બેઝ સુગંધ.",
        "suitableFor": "ખોડો દૂર કરવા અને સ્કેલ્પની સમસ્યાઓ માટે.",
        "warnings": "આંખોમાં ન જવા દેવું. કપાયેલી કે બળતરા વાળી ત્વચા પર લગાડવું નહીં."
      }
    }
  },
  {
    "id": "haircare-oil",
    "price": 180,
    "category": "hair-care",
    "isPopular": false,
    "isNew": true,
    "image": "assets/images/Haircare_oil_main.jpeg",
    "images": [
      "assets/images/Haircare_oil_main.jpeg",
      "assets/images/Haircare_oil_multiple1.jpeg",
      "assets/images/Haircare_oil_multiple2.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Premium Hair Care Oil (30 ml)",
        "shortDesc": "Effective hair care oil to remove dandruff and treat scalp skin problems.",
        "description": "A premium Ayurvedic hair care oil formulated with Neem Bij, Curry Leaves, Bhringraj, Tulsi, Fenugreek, and Shikakai to effectively remove dandruff and treat various hair and scalp skin problems.",
        "benefits": [
          "Remove Dandruff",
          "Treat Hair Skin Problems"
        ],
        "usage": "Apply the oil to your scalp using your palm. Massage gently for 5 minutes. Leave on for few hours or overnight, then wash with shampoo.",
        "ingredients": "Neem Bij, Curry Leaves, Bhringraj, Tulsi, Fenugreek, Shikakai.",
        "suitableFor": "Dandruff and scalp skin problems.",
        "warnings": "For external use only. Avoid contact with eyes."
      },
      "hi": {
        "name": "स्वयंभू प्रीमियम हेयर केयर ऑयल (30 ml)",
        "shortDesc": "रूसी हटाने और स्कैल्प की समस्याओं के इलाज के लिए प्रभावी हेयर ऑयल।",
        "description": "नीम के बीज, करी पत्ता, भृंगराज, तुलसी, मेथी और शिकाकाई से तैयार एक प्रीमियम आयुर्वेदिक हेयर ऑयल, जो रूसी को प्रभावी ढंग से हटाता है और स्कैल्प की समस्याओं को ठीक करता है।",
        "benefits": [
          "रूसी को दूर करता है",
          "स्कैल्प की समस्याओं (त्वचा रोगों) को ठीक करता है"
        ],
        "usage": "हथेली की मदद से तेल को अपने स्कैल्प पर लगाएं। 5 मिनट तक धीरे-धीरे मालिश करें। कुछ घंटों या रात भर के लिए छोड़ दें, फिर शैम्पू से धो लें।",
        "ingredients": "नीम के बीज, करी पत्ता, भृंगराज, तुलसी, मेथी, शिकाकाई।",
        "suitableFor": "रूसी और स्कैल्प की समस्याओं के लिए।",
        "warnings": "केवल बाहरी उपयोग के लिए। आँखों के संपर्क से बचाएं।"
      },
      "gu": {
        "name": "સ્વયંભૂ પ્રીમિયમ હેર કેર ઓઈલ (30 ml)",
        "shortDesc": "ખોડો દૂર કરવા અને સ્કેલ્પની સમસ્યાઓ મટાડવા માટે અસરકારક તેલ.",
        "description": "લીમડાના બીજ, મીઠો લીમડો (કરી પત્તા), ભૃંગરાજ, તુલસી, મેથી અને શિકાકાઈ ધરાવતું આયુર્વેદિક તેલ, જે ખોડો દૂર કરે છે અને સ્કેલ્પની સમસ્યાઓ મટાડે છે.",
        "benefits": [
          "ખોડો દૂર કરે છે",
          "સ્કેલ્પની સમસ્યાઓ મટાડે છે"
        ],
        "usage": "હથેળીની મદદથી તેલને તમારા માથા પર લગાવો. ૫ મિનિટ સુધી હળવા હાથે માલિશ કરો. થોડા કલાકો અથવા રાતભર રહેવા દઈ શેમ્પૂથી ધોઈ લો.",
        "ingredients": "લીમડાના બીજ, મીઠો લીમડો (કરી પત્તા), ભૃંગરાજ, તુલસી, મેથી, શિકાકાઈ.",
        "suitableFor": "ખોડો અને સ્કેલ્પની સમસ્યાઓ ધરાવતા લોકો માટે.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. આંખોથી બચાવવું."
      }
    }
  },
  {
    "id": "aloe-vera-gel",
    "price": 220,
    "category": "beauty-care",
    "isPopular": false,
    "isNew": true,
    "image": "assets/images/Aloe_vera_gel_main.jpeg",
    "images": [
      "assets/images/Aloe_vera_gel_main.jpeg",
      "assets/images/Aloe_vera_gel_multiple1.jpeg",
      "assets/images/Aloe_vera_gel_multiple2.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Aloe Vera Gel (100 gm)",
        "shortDesc": "Pure Aloe Vera Gel enriched with Vitamin E, Jojoba oil, Tulsi, and Neem.",
        "description": "An authentic Ayurvedic homemade Aloe Vera Gel enriched with Vitamin E oil, Jojoba oil, Neem, Turmeric, and Tulsi. It provides deep hydration, soothes skin inflammation, and promotes a natural glowing skin while reducing pigmentation.",
        "benefits": [
          "Provides Deep Hydration",
          "Soothes Skin Inflammation & Redness",
          "Promotes Natural Glow & Reduces Pigmentation"
        ],
        "usage": "Apply gently on clean face and body. Massage in an upward motion until absorbed. Can be used daily as a moisturizer.",
        "ingredients": "Aloe Vera Gel (Aloe Barbadensis Leaf Extract), Vitamin E Oil, Jojoba Oil, Beads of Vitamin E, Neem Ext., Turmeric Ext., Tulsi Ext., Gel Base, Fragrance.",
        "suitableFor": "All skin types, especially dry, sensitive, and sun-burnt skin.",
        "warnings": "For external use only. Store in a cool place."
      },
      "hi": {
        "name": "स्वयंभू एलोवेरा जेल (100 gm)",
        "shortDesc": "विटामिन ई, जोजोबा तेल, तुलसी और नीम से समृद्ध शुद्ध एलोवेरा जेल।",
        "description": "एक असली आयुर्वेदिक होममेड एलोवेरा जेल जो विटामिन ई तेल, जोजोबा तेल, नीम, हल्दी और तुलसी से समृद्ध है। यह त्वचा को गहराई से नमी (हाइड्रेशन) प्रदान करता है, त्वचा की जलन और सूजन को शांत करता है और पिगमेंटेशन को कम करते हुए प्राकृतिक चमक को बढ़ावा देता है।",
        "benefits": [
          "त्वचा को गहराई से नमी प्रदान करता है",
          "त्वचा की जलन और लाली को शांत करता है",
          "प्राकृतिक चमक देता है और पिगमेंटेशन को कम करता है"
        ],
        "usage": "साफ चेहरे और शरीर पर धीरे से लगाएं। अवशोषित होने तक ऊपर की ओर मालिश करें। दैनिक मॉइस्चराइज़र के रूप में इस्तेमाल किया जा सकता है।",
        "ingredients": "एलोवेरा जेल (एलोवेरा का अर्क), विटामिन ई तेल, जोजोबा तेल, विटामिन ई के बीड्स, नीम का अर्क, हल्दी का अर्क, तुलसी का अर्क, जेल बेस, सुगंध।",
        "suitableFor": "सभी प्रकार की त्वचा, विशेष रूप से शुष्क और संवेदनशील त्वचा के लिए।",
        "warnings": "केवल बाहरी उपयोग के लिए। ठंडे स्थान पर रखें।"
      },
      "gu": {
        "name": "સ્વયંભૂ એલોવેરા જેલ (100 gm)",
        "shortDesc": "વિટામિન E, જોજોબા તેલ, તુલસી અને લીમડા યુક્ત શુદ્ધ એલોવેરા જેલ.",
        "description": "પરંપરાગત રીતે તૈયાર કરાયેલ આયુર્વેદિક એલોવેરા જેલ, જે વિટામિન E, જોજોબા તેલ, લીમડો, હળદર અને તુલસીના અર્કથી સમૃદ્ધ છે. તે ત્વચાને ઊંડી ભેજ (હાઇડ્રેશન) પૂરી પાડે છે, બળતરા શાંત કરે છે અને ત્વચાને કુદરતી ચમક આપી પિગમેન્ટેશન ઘટાડે છે.",
        "benefits": [
          "ત્વચાને ઊંડી ભેજ (હાઇડ્રેશન) પૂરી પાડે છે",
          "ત્વચાની બળતરા અને લાલાશ શાંત કરે છે",
          "કુદરતી ચમક આપે છે અને પિગમેન્ટેશન ઘટાડે છે"
        ],
        "usage": "સાફ કરેલા ચહેરો અને શરીર પર લગાવો. શોષાઈ જાય ત્યાં સુધી હળવા હાથે મસાજ કરો. રોજિંદા મોઇશ્ચરાઇઝર તરીકે ઉપયોગ કરી શકાય છે.",
        "ingredients": "એલોવેરા જેલ, વિટામિન E ઓઇલ, જોજોબા ઓઇલ, વિટામિન E ના બીડ્સ, લીમડા અર્ક, હળદર અર્ક, તુલસી અર્ક, જેલ બેઝ, સુગંધ.",
        "suitableFor": "તમામ પ્રકારની ત્વચા, ખાસ કરીને સૂકી અને સંવેદનશીલ ત્વચા માટે.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. ઠંડી જગ્યાએ સંગ્રહ કરવો."
      }
    }
  },
  {
    "id": "ayurvedic-scrub",
    "price": 250,
    "category": "beauty-care",
    "isPopular": false,
    "isNew": true,
    "image": "assets/images/Ayurvedic_scrub_main.jpeg",
    "images": [
      "assets/images/Ayurvedic_scrub_main.jpeg",
      "assets/images/Ayurvedic_scrub_multiple1.jpeg",
      "assets/images/Ayurvedic_scrub_multiple2.jpeg"
    ],
    "translations": {
      "en": {
        "name": "Swayambhu Ayurvedic Scrub (100 gm)",
        "shortDesc": "Walnut facial scrub enriched with Argan oil, Coconut oil, Neem, and Turmeric.",
        "description": "A premium Ayurvedic homemade scrub formulated with natural Walnut shell powder, Argan oil, Coconut oil, and extracts of Neem, Turmeric, and Tulsi. It effectively removes blackheads and whiteheads, repairs dead skin cells, cures pimples, and makes the skin brighter, lighter, and glowing.",
        "benefits": [
          "Removes Blackheads & Whiteheads",
          "Repairs Dead Cells & Removes Pimples",
          "Brightens, Lightens, & Gives Glowing Skin"
        ],
        "usage": "Moisten face and neck, apply scrub and massage gently with fingertips in circular motions for 2-3 minutes, avoiding the eye area. Rinse off with water and pat dry. Use 1-2 times a week.",
        "ingredients": "Walnut Scrub, Argan Oil, Coconut Oil, Vitamin E Extract, Neem Extract, Turmeric Extract, Tulsi Extract, Base, Fragrance.",
        "suitableFor": "All skin types, especially those with blackheads, acne, or dull skin.",
        "warnings": "For external use only. Avoid contact with eyes. Do not scrub harshly on active acne."
      },
      "hi": {
        "name": "स्वयंभू आयुर्वेदिक स्क्रब (100 gm)",
        "shortDesc": "आर्गन तेल, नारियल तेल, नीम और हल्दी से समृद्ध अखरोट फेस स्क्रब।",
        "description": "प्राकृतिक अखरोट के छिलके के पाउडर, आर्गन तेल, नारियल के तेल और नीम, हल्दी और तुलसी के अर्क से तैयार एक प्रीमियम आयुर्वेदिक होममेड स्क्रब। यह ब्लैकहेड्स और व्हाइटहेड्स को प्रभावी ढंग से हटाता है, मृत त्वचा कोशिकाओं की मरम्मत करता है, मुँहासे ठीक करता है और त्वचा को अधिक चमकदार, गोरा और दीप्तिमान बनाता है।",
        "benefits": [
          "ब्लैकहेड्स और व्हाइटहेड्स को हटाता है",
          "मृत कोशिकाओं की मरम्मत करता है और मुँहासे ठीक करता है",
          "त्वचा को चमकदार, गोरा और कांतिमय बनाता है"
        ],
        "usage": "चेहरे और गर्दन को गीला करें, स्क्रब लगाएं और उंगलियों से 2-3 मिनट तक गोलाकार गति में धीरे से मालिश करें, आंखों के क्षेत्र से बचें। पानी से धो लें और थपथपाकर सुखाएं। सप्ताह में 1-2 बार प्रयोग करें।",
        "ingredients": "अखरोट का स्क्रब, आर्गन तेल, नारियल का तेल, विटामिन ई का अर्क, नीम का अर्क, हल्दी का अर्क, तुलसी का अर्क, बेस, सुगंध।",
        "suitableFor": "सभी प्रकार की त्वचा, विशेष रूप से ब्लैकहेड्स, मुंहासे या बेजान त्वचा के लिए।",
        "warnings": "केवल बाहरी उपयोग के लिए। आँखों के संपर्क से बचाएं। सक्रिय मुंहासों पर जोर से न रगड़ें।"
      },
      "gu": {
        "name": "સ્વયંભૂ આયુર્વેદિક સ્ક્રબ (100 gm)",
        "shortDesc": "આર્ગન તેલ, નાળિયેર તેલ, લીમડો અને હળદર યુક્ત અખરોટ ફેસ સ્ક્રબ.",
        "description": "કુદરતી અખરોટ (વોલનટ) સેલ પાવડર, આર્ગન તેલ, નાળિયેર તેલ અને લીમડા, હળદર તેમજ તુલસીના અર્ક ધરાવતું પ્રીમિયમ આયુર્વેદિક સ્ક્રબ. તે બ્લેકહેડ્સ અને વ્હાઇટહેડ્સ દૂર કરે છે, મૃત કોષો રિપેર કરે છે, ખીલ મટાડે છે અને ત્વચાને વધુ તેજસ્વી તેમજ સુંદર બનાવે છે.",
        "benefits": [
          "બ્લેકહેડ્સ અને વ્હાઇટહેડ્સ દૂર કરે છે",
          "મૃત કોષો રિપેર કરે છે અને ખીલ મટાડે છે",
          "તોચાને વધુ તેજસ્વી, ગોરી અને ચમકદાર બનાવે છે"
        ],
        "usage": "ચહેરો અને ગરદન ભીની કરો, સ્ક્રબ લગાવો અને આંગળીઓ વડે ૨-૩ મિનિટ સુધી ગોળાકાર મસાજ કરો (આંખોની આજુબાજુ બચવું). પાણીથી ધોઈ લો. અઠવાડિયામાં ૧-૨ વાર વાપરો.",
        "ingredients": "અખરોટ સ્ક્રબ, આર્ગન ઓઇલ, નાળિયેર તેલ, વિટામિન E અર્ક, લીમડા અર્ક, હળદર અર્ક, તુલસી અર્ક, બેઝ, સુગંધ.",
        "suitableFor": "તમામ પ્રકારની ત્વચા, ખાસ કરીને બ્લેકહેડ્સ કે ખીલ ધરાવતી ત્વચા માટે.",
        "warnings": "માત્ર બાહ્ય ઉપયોગ માટે. આંખોથી બચાવવું. સક્રિય ખીલ પર વધુ જોરથી ઘસવું નહીં."
      }
    }
  }
];

const BEFORE_AFTER = [
  {
    "id": "result-1",
    "beforeImage": "https://placehold.co/400x500/e2e8f0/64748b?text=Thinning+Hair",
    "afterImage": "https://placehold.co/400x500/009688/ffffff?text=Thicker+Hair",
    "translations": {
      "en": {
        "title": "Hair Volume Improvement (Handmade Hair Oil)"
      },
      "hi": {
        "title": "बालों की मात्रा में सुधार (हैंडमेड हेयर ऑयल)"
      },
      "gu": {
        "title": "વાળના જથ્થામાં સુધારો (હેન્ડમેડ હેર ઓઇલ)"
      }
    }
  },
  {
    "id": "result-2",
    "beforeImage": "https://placehold.co/400x500/e2e8f0/64748b?text=Acne+Breakout",
    "afterImage": "https://placehold.co/400x500/4CAF50/ffffff?text=Clear+Skin",
    "translations": {
      "en": {
        "title": "Acne Removal (Fairness Soap)"
      },
      "hi": {
        "title": "मुँहासे हटाने (फेयरनेस साबुन)"
      },
      "gu": {
        "title": "ખીલ દૂર કરવા (ફેયરનેસ સાબુ)"
      }
    }
  }
];

const TESTIMONIALS = [
  {
    "id": "review-1",
    "clientName": "Ramesh Patel",
    "productName": "Swayambhu Handmade Hair Shampoo",
    "videoUrl": "https://www.w3schools.com/html/mov_bbb.mp4",
    "thumbnail": "https://placehold.co/600x400/009688/ffffff?text=Hair+Care+Review+-+Ramesh"
  },
  {
    "id": "review-2",
    "clientName": "Saraswati Devi",
    "productName": "Swayambhu Moisturizer Lotion",
    "videoUrl": "https://www.w3schools.com/html/movie.mp4",
    "thumbnail": "https://placehold.co/600x400/4CAF50/ffffff?text=Skin+Care+Review+-+Saraswati"
  },
  {
    "id": "review-3",
    "clientName": "Neha Shah",
    "productName": "Swayambhu Fairness & Night Cream",
    "videoUrl": "https://assets.mixkit.co/videos/preview/mixkit-skin-care-routine-of-a-young-woman-41855-large.mp4",
    "thumbnail": "https://placehold.co/600x400/0d6efd/ffffff?text=Skin+Care+Review+-+Neha"
  }
];
