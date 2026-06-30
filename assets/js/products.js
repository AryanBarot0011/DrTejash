const PRODUCTS = [
  {
    id: "kesh-sakhi-shampoo",
    price: 180,
    category: "shampoo",
    isPopular: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80",
    ],
    translations: {
      en: {
        name: "Kesh Sakhi Herbal Shampoo",
        shortDesc: "Natural hair cleanser with Amla, Shikakai & Bhringraj.",
        description: "A premium formulation crafted with handpicked Ayurvedic herbs that deeply cleanses the scalp, strengthens hair roots, reduces hair fall, and restores natural shine.",
        benefits: [
          "Reduces hair fall and hair breakage significantly",
          "Prevents dandruff and relieves dry, itchy scalp",
          "Promotes hair follicles growth and strengthens roots",
          "Adds natural volume, softness, and bounce to hair"
        ],
        usage: "Apply to wet hair, gently massage into the scalp for 2 minutes, and rinse thoroughly with clean water. Use 2-3 times a week.",
        ingredients: "Pure extracts of Amla (Gooseberry), Shikakai (Acacia Concinna), Bhringraj (Eclipta Prostrata), Reetha, Aloe Vera, and Coconut Oil base.",
        suitableFor: "All hair types. Perfect for weak, dry, and color-treated hair.",
        warnings: "For external use only. Avoid contact with eyes. In case of accidental contact, rinse immediately with cold water."
      },
      hi: {
        name: "केश सखी हर्बल शैम्पू",
        shortDesc: "आंवला, शिकाकाई और भृंगराज से युक्त प्राकृतिक हेयर क्लींजर।",
        description: "चुनिंदा आयुर्वेदिक जड़ी-बूटियों से बना एक प्रीमियम फॉर्मूलेशन जो स्कैल्प को गहराई से साफ करता है, बालों की जड़ों को मजबूत करता है, बालों का झड़ना रोकता है और प्राकृतिक चमक लौटाता है।",
        benefits: [
          "बालों का झड़ना और टूटना काफी हद तक कम करता है",
          "रूसी (डैंड्रफ) को रोकता है और खुजली से राहत देता है",
          "बालों के रोम के विकास को बढ़ावा देता है और जड़ों को मजबूत करता है",
          "बालों में प्राकृतिक चमक, कोमलता और बाउंस लाता है"
        ],
        usage: "गीले बालों में लगाएं, 2 मिनट तक स्कैल्प पर धीरे-धीरे मालिश करें और साफ पानी से अच्छी तरह धो लें। सप्ताह में 2-3 बार उपयोग करें।",
        ingredients: "आंवला, शिकाकाई, भृंगराज, रीठा, एलोवेरा और नारियल तेल बेस के शुद्ध अर्क।",
        suitableFor: "सभी प्रकार के बालों के लिए। कमजोर, रूखे और क्षतिग्रस्त बालों के लिए उत्तम।",
        warnings: "केवल बाहरी उपयोग के लिए। आँखों के संपर्क से बचाएं। संपर्क होने पर तुरंत ठंडे पानी से धो लें।"
      },
      gu: {
        name: "કેશ સખી હર્બલ શેમ્પૂ",
        shortDesc: "આમળા, શિકાકાઈ અને ભૃંગરાજ યુક્ત કુદરતી હેર ક્લીન્ઝર.",
        description: "પસંદ કરેલ આયુર્વેદિક જડીબુટ્ટીઓથી બનેલી એક પ્રીમિયમ ફોર્મ્યુલેશન જે વાળના મૂળને મજબૂત કરે છે, વાળ ખરતા અટકાવે છે અને કુદરતી ચમક આપે છે.",
        benefits: [
          "વાળ ખરતા અને તૂટતા નોંધપાત્ર રીતે અટકાવે છે",
          "ખોડો દૂર કરે છે અને ખંજવાળથી રાહત આપે છે",
          "વાળના ફોલિકલ્સના વિકાસને પ્રોત્સાહન આપે છે અને મૂળ મજબૂત કરે છે",
          "વાળને કુદરતી ચમક, મુલાયમતા અને વોલ્યુમ આપે છે"
        ],
        usage: "ભીના વાળમાં લગાવો, ૨ મિનિટ સુધી માથામાં હળવા હાથે માલિશ કરો અને સ્વચ્છ પાણીથી ધોઈ લો. અઠવાડિયામાં ૨-૩ વાર વાપરો.",
        ingredients: "આમળા, શિકાકાઈ, ભૃંગરાજ, અરીઠા, એલોવેરા અને નાળિયેર તેલ.",
        suitableFor: "તમામ પ્રકારના વાળ માટે ઉપયોગી. નબળા અને સૂકા વાળ માટે શ્રેષ્ઠ.",
        warnings: "માત્ર બાહ્ય ઉપયોગ માટે. આંખોમાં ન જવા દેવું. આંખમાં જાય તો તરત ઠંડા પાણીથી ધોઈ નાખવું."
      }
    }
  },
  {
    id: "neem-tulsi-soap",
    price: 90,
    category: "soap",
    isPopular: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1546554137-f86b9593a222?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1607006342445-565a8e2f8087?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1590439471364-192aa70c0c53?auto=format&fit=crop&w=500&q=80"
    ],
    translations: {
      en: {
        name: "Neem & Tulsi Purifying Soap",
        shortDesc: "Anti-bacterial soap for deep skin purification and acne defense.",
        description: "An Ayurvedic bathing bar with active Neem and Tulsi oil extracts. It effectively neutralizes germs, clears excess sebum, calms inflammation, and leaves skin refreshed.",
        benefits: [
          "Combats acne-causing bacteria and prevents breakout recurrence",
          "Soothes itchy skin rashes, eczema, and heat boils",
          "Gently cleanses without stripping natural moisture",
          "Improves overall skin texture and complexion radiance"
        ],
        usage: "Wet skin with water, work up a rich lather on body, and rinse off completely. Use daily during shower.",
        ingredients: "Neem Oil, Tulsi Oil (Holy Basil), Aloe Vera Extract, Glycerin, and Pure Coconut Oil soap base.",
        suitableFor: "Oily, sensitive, and acne-prone skin. Great for all family members.",
        warnings: "Keep out of reach of infants. Avoid placing soap in standing water to prolong its usage life."
      },
      hi: {
        name: "नीम और तुलसी शुद्धिकरण साबुन",
        shortDesc: "त्वचा की गहरी शुद्धि और मुंहासों से बचाव के लिए एंटी-बैक्टीरियल साबुन।",
        description: "सक्रिय नीम और तुलसी के तेल के अर्क से बना एक आयुर्वेदिक स्नान साबुन। यह कीटाणुओं को प्रभावी ढंग से नष्ट करता है, अतिरिक्त तेल हटाता है और त्वचा को तरोताजा रखता है।",
        benefits: [
          "मुंहासे पैदा करने वाले बैक्टीरिया से लड़ता है और उन्हें रोकता है",
          "त्वचा पर होने वाली खुजली, चकत्ते और घमौरियों को शांत करता है",
          "प्राकृतिक नमी को छीने बिना त्वचा की कोमल सफाई करता है",
          "त्वचा की बनावट और रंगत में सुधार करता है"
        ],
        usage: "त्वचा को पानी से गीला करें, झाग बनाएं, शरीर पर लगाएं और फिर पूरी तरह धो लें। रोजाना स्नान के दौरान इस्तेमाल करें।",
        ingredients: "नीम का तेल, तुलसी का तेल, एलोवेरा का अर्क, ग्लिसरीन और शुद्ध नारियल तेल का बेस।",
        suitableFor: "तैलीय, संवेदनशील और मुंहासे वाली त्वचा के लिए। पूरे परिवार के लिए उपयुक्त।",
        warnings: "शिशुओं की पहुंच से दूर रखें। साबुन को पिघलने से बचाने के लिए सूखे स्थान पर रखें।"
      },
      gu: {
        name: "લીમડા અને તુલસી સાબુ",
        shortDesc: "ત્વચાની ઊંડી સફાઈ અને ખીલ સામે રક્ષણ આપતો એન્ટી-બેક્ટેરિયલ સાબુ.",
        description: "લીમડા અને તુલસીના સક્રિય તેલયુક્ત અર્કથી બનેલો આયુર્વેદિક સાબુ. તે જંતુઓનો નાશ કરે છે, વધારાનું તેલ દૂર કરે છે અને ત્વચાને તાજગી આપે છે.",
        benefits: [
          "ખીલ પેદા કરતા બેક્ટેરિયા સામે લડે છે અને ખીલ અટકાવે છે",
          "ત્વચાની ખંજવાળ, લાલ ચકામા અને ગૂમડાંમાં રાહત આપે છે",
          "કુદરતી ભેજ જાળવી રાખીને ત્વચાને નરમાશથી સાફ કરે છે",
          "ત્વચાના પોત અને રંગમાં સુધારો કરે છે"
        ],
        usage: "શરીરને પાણીથી ભીનું કરી, સાબુ લગાવી ફીણ બનાવો અને ધોઈ લો. રોજ સ્નાન કરતી વખતે વાપરો.",
        ingredients: "લીમડાનું તેલ, તુલસીનું તેલ, એલોવેરા અર્ક, ગ્લિસરીન અને નાળિયેર તેલ સાબુ બેઝ.",
        suitableFor: "તૈલી, સંવેદનશીલ અને ખીલવાળી ત્વચા માટે. પરિવારના તમામ સભ્યો માટે યોગ્ય.",
        warnings: "નાના બાળકોથી દૂર રાખવું. સાબુને લાંબા સમય સુધી વાપરવા માટે સૂકી જગ્યાએ રાખવો."
      }
    }
  },
  {
    id: "aloe-honey-facewash",
    price: 150,
    category: "facewash",
    isPopular: false,
    isNew: true,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=500&q=80"
    ],
    translations: {
      en: {
        name: "Aloe Vera & Honey Glowing Face Wash",
        shortDesc: "Moisturizing face wash that reveals glowing skin naturally.",
        description: "A soap-free, gentle face wash packed with organic Aloe Vera juice and honey. It dissolves impurities, restores skin hydration, and leaves a dewy glow after every wash.",
        benefits: [
          "Hydrates skin layers deeply and prevents dry patches",
          "Gently removes dirt, pollution, and makeup residues",
          "Reduces dark spots and pigmentation marks over time",
          "Maintains skin's natural pH level and elasticity"
        ],
        usage: "Squeeze a small amount onto wet palms, work into lather, gently massage on face in circular motion, and rinse with cold water.",
        ingredients: "Fresh Aloe Vera Gel, Organic Forest Honey, Vitamin E, Licorice Extract, and Aqua.",
        suitableFor: "Dry, normal, and combination skin types. Ideal for daily skin brightness.",
        warnings: "Do not swallow. Keep away from direct sunlight."
      },
      hi: {
        name: "एलोवेरा और शहद ग्लोइंग फेस वॉश",
        shortDesc: "मॉइस्चराइजिंग फेस वॉश जो त्वचा को प्राकृतिक रूप से चमकदार बनाता है।",
        description: "जैविक एलोवेरा जेल और शहद से भरपूर एक साबुन-मुक्त, कोमल फेस वॉश। यह अशुद्धियों को घोलता है, त्वचा की नमी लौटाता है और त्वचा को कोमल चमक देता है।",
        benefits: [
          "त्वचा को गहराई से हाइड्रेट करता है और रूखेपन से बचाता है",
          "धूल, प्रदूषण और मेकअप के अवशेषों को धीरे से हटाता है",
          "समय के साथ काले धब्बे और झाइयों को कम करता है",
          "त्वचा के प्राकृतिक पीएच स्तर और लचीलेपन को बनाए रखता है"
        ],
        usage: "गीली हथेलियों पर थोड़ी मात्रा लें, झाग बनाएं, चेहरे पर गोलाकार गति में मालिश करें और ठंडे पानी से धो लें।",
        ingredients: "ताजा एलोवेरा जेल, जैविक वन शहद, विटामिन ई, मुलेठी का अर्क और शुद्ध पानी।",
        suitableFor: "रूखी, सामान्य और मिश्रित त्वचा। दैनिक चमक बढ़ाने के लिए सर्वोत्तम।",
        warnings: "निगलें नहीं। सीधे सूर्य के प्रकाश से दूर रखें।"
      },
      gu: {
        name: "એલોવેરા અને મધ ફેસ વોશ",
        shortDesc: "ત્વચાને કુદરતી રીતે તેજસ્વી બનાવતું મોઇશ્ચરાઇઝિંગ ફેસ વોશ.",
        description: "સાબુ-રહિત, સૌમ્ય ફેસ વોશ જે કુદરતી એલોવેરા જેલ અને મધના ગુણોથી સમૃદ્ધ છે. તે અશુદ્ધિઓ દૂર કરે છે અને ત્વચાને ચમકદાર રાખે છે.",
        benefits: [
          "ત્વચાને ઊંડાણપૂર્વક હાઇડ્રેટ કરે છે અને સૂકી થતી અટકાવે છે",
          "ધૂળ, પ્રદૂષણ અને મેકઅપના કણોને સરળતાથી સાફ કરે છે",
          "સમય જતાં કાળા ડાઘ અને પિગમેન્ટેશન ઘટાડે છે",
          "ત્વચાનું કુદરતી પીએચ (pH) સ્તર અને લવચીકતા જાળવી રાખે છે"
        ],
        usage: "ભીની હથેળી પર થોડી માત્રામાં ફેસ વોશ લો, ફીણ બનાવી ચહેરા પર મસાજ કરો અને ઠંડા પાણીથી ધોઈ લો.",
        ingredients: "એલોવેરા જેલ, કુદરતી મધ, વિટામિન E, જેઠીમધનો અર્ક અને પાણી.",
        suitableFor: "સૂકી, સામાન્ય અને મિશ્ર ત્વચા માટે. રોજિંદા વપરાશ માટે ઉત્તમ.",
        warnings: "ગળવું નહીં. સીધા સૂર્યપ્રકાશથી બચાવવું."
      }
    }
  },
  {
    id: "bhringraj-active-oil",
    price: 240,
    category: "hairoil",
    isPopular: true,
    isNew: false,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80"
    ],
    translations: {
      en: {
        name: "Bhringraj & Brahmi Active Hair Oil",
        shortDesc: "Ayurvedic hair oil for deep growth, stress relief, and sound sleep.",
        description: "Prepared using traditional 'Kshirpak Vidhi' methods, this oil is a rich blend of Bhringraj, Brahmi, and sesame oil. It directly feeds nutrients to the scalp, cooling the mind and preventing premature greying.",
        benefits: [
          "Accelerates hair growth by nourishing sleeping hair roots",
          "Prevents premature greying of hair strands",
          "Reduces stress, calms mind, and helps achieve sound sleep",
          "Deeply conditions dry hair shaft, making it soft and smooth"
        ],
        usage: "Warm a few drops, apply to scalp, massage gently for 10-15 minutes using fingertips. Keep overnight and wash off next morning.",
        ingredients: "Bhringraj, Brahmi, Amla, Sesame Oil, Coconut Oil, Almond Oil, and Natural Fragrance.",
        suitableFor: "All hair types. Highly recommended for people suffering from hair thinning or sleep issues.",
        warnings: "Avoid rubbing too vigorously if you are suffering from severe active hair fall."
      },
      hi: {
        name: "भृंगराज और ब्राह्मी एक्टिव हेयर ऑयल",
        shortDesc: "गहरे बालों के विकास, तनाव से राहत और अच्छी नींद के लिए आयुर्वेदिक तेल।",
        description: "पारंपरिक 'क्षीरपाक विधि' द्वारा तैयार यह तेल भृंगराज, ब्राह्मी और तिल के तेल का एक समृद्ध मिश्रण है। यह सीधे स्कैल्प को पोषण देता है, मस्तिष्क को ठंडक पहुंचाता है और समय से पहले बालों को सफेद होने से रोकता है।",
        benefits: [
          "कमजोर जड़ों को पोषण देकर बालों के विकास को तेज करता है",
          "बालों को समय से पहले सफेद होने से रोकता है",
          "तनाव को कम करता है, मन शांत करता है और गहरी नींद लाने में मदद करता है",
          "रूखे बालों को गहराई से कंडीशन कर उन्हें मुलायम और चिकना बनाता है"
        ],
        usage: "कुछ बूंदों को गुनगुना करें, स्कैल्प पर लगाएं, उंगलियों से 10-15 मिनट तक हल्के हाथ से मालिश करें। रात भर रखें और अगली सुबह धो लें।",
        ingredients: "भृंगराज, ब्राह्मी, आंवला, तिल का तेल, नारियल का तेल, बादाम का तेल और प्राकृतिक खुशबू।",
        suitableFor: "सभी प्रकार के बालों के लिए। बालों के पतले होने या नींद न आने की समस्या से पीड़ित लोगों के लिए अत्यधिक अनुशंसित।",
        warnings: "यदि गंभीर रूप से बाल झड़ रहे हों, तो बहुत तेजी से मालिश करने से बचें।"
      },
      gu: {
        name: "ભૃંગરાજ અને બ્રાહ્મી હેર ઓઈલ",
        shortDesc: "વાળના વિકાસ, તણાવ મુક્તિ અને સારી ઊંઘ માટેનું આયુર્વેદિક તેલ.",
        description: "પરંપરાગત 'ક્ષીરપાક વિધિ' દ્વારા તૈયાર કરાયેલ આ તેલ ભૃંગરાજ, બ્રાહ્મી અને તલના તેલનું ઉત્તમ મિશ્રણ છે. તે વાળના મૂળને પોષણ આપે છે અને મગજને ઠંડક આપે છે.",
        benefits: [
          "વાળના મૂળને પોષણ આપીને તેનો ઝડપી વિકાસ કરે છે",
          "વાળને અકાળે સફેદ થતા અટકાવે છે",
          "તણાવ ઓછો કરે છે, મગજ શાંત કરે છે અને સારી ઊંઘ લાવવામાં મદદ કરે છે",
          "વાળને કુદરતી કન્ડીશનીંગ પૂરું પાડી તેને નરમ અને સુંવાળા બનાવે છે"
        ],
        usage: "તેલના થોડા ટીપાં નવશેકા ગરમ કરી આંગળીઓથી ૧૦-૧૫ મિનિટ સુધી માથામાં હળવા હાથે માલિશ કરો. રાત્રે લગાવી સવારે ધોઈ નાખો.",
        ingredients: "ભૃંગરાજ, બ્રાહ્મી, આમળા, તલનું તેલ, નાળિયેર તેલ, બદામનું તેલ અને સુગંધ.",
        suitableFor: "તમામ પ્રકારના વાળ માટે. વાળ ખરવાની અથવા ઊંઘ ન આવવાની સમસ્યા માટે ખૂબ ઉપયોગી.",
        warnings: "વાળ વધુ ખરતા હોય તો માથામાં જોરથી ઘસવું નહીં."
      }
    }
  },
  {
    id: "twachamrit-cream",
    price: 210,
    category: "cream",
    isPopular: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=500&q=80"
    ],
    translations: {
      en: {
        name: "Twachamrit Herbal Moisturizing Cream",
        shortDesc: "Natural face cream with Turmeric & Sandalwood for soft skin.",
        description: "A nourishing facial and body cream enriched with antibacterial Turmeric and soothing Sandalwood oil. It protects skin from dry winds, heals micro-cracks, and maintains skin glow.",
        benefits: [
          "Provides 24-hour hydration lock for dry skin",
          "Brightens skin complexion and reduces uneven skin tone",
          "Heals minor skin irritation, sunburns, and dry patches",
          "Anti-aging formula prevents premature fine lines"
        ],
        usage: "Cleanse face, apply dots of cream over face and neck, and massage gently in upward strokes until fully absorbed. Use twice daily.",
        ingredients: "Pure Sandalwood (Chandan) extract, Organic Turmeric (Haldi), Kokum Butter, Almond Oil, and Aloe Vera.",
        suitableFor: "Normal, dry, and sensitive skin. Perfect winter cream.",
        warnings: "Do not apply on open bleeding cuts or fresh severe burns."
      },
      hi: {
        name: "त्वचामृत हर्बल मॉइस्चराइजिंग क्रीम",
        shortDesc: "मुलायम त्वचा के लिए हल्दी और चंदन से युक्त प्राकृतिक फेस क्रीम।",
        description: "एंटीबैक्टीरियल हल्दी और सुखदायक चंदन के तेल से समृद्ध एक पौष्टिक चेहरा और शरीर की क्रीम। यह त्वचा को रूखी हवाओं से बचाती है, दरारें ठीक करती है और चमक बनाए रखती है।",
        benefits: [
          "रूखी त्वचा के लिए 24 घंटे नमी लॉक प्रदान करती है",
          "त्वचा की रंगत को निखारती है और असमान रंगत को कम करती है",
          "त्वचा की हल्की जलन, सनबर्न और रूखे पैच को ठीक करती है",
          "एंटी-एजिंग फॉर्मूला झुर्रियों को रोकने में मदद करता है"
        ],
        usage: "चेहरा साफ करें, चेहरे और गर्दन पर क्रीम लगाएं और पूरी तरह अवशोषित होने तक ऊपर की ओर उंगलियों से धीरे-धीरे मालिश करें।",
        ingredients: "शुद्ध चंदन का अर्क, जैविक हल्दी, कोकम बटर, बादाम का तेल और एलोवेरा।",
        suitableFor: "सामान्य, रूखी और संवेदनशील त्वचा। सर्दियों के मौसम के लिए सर्वोत्तम क्रीम।",
        warnings: "खुले घाव या ताजी जली हुई त्वचा पर न लगाएं।"
      },
      gu: {
        name: "ત્વચામૃત હર્બલ મોઇશ્ચરાઇઝિંગ ક્રીમ",
        shortDesc: "નરમ ત્વચા માટે હળદર અને ચંદન યુક્ત કુદરતી ફેસ ક્રીમ.",
        description: "હળદર અને ચંદનના ગુણો ધરાવતી આ પૌષ્ટિક ક્રીમ ત્વચાને વાતાવરણની શુષ્કતાથી બચાવે છે, ઝીણી તિરાડો મટાડે છે અને ત્વચાની ચમક જાળવી રાખે છે.",
        benefits: [
          "સૂકી ત્વચા માટે ૨૪ કલાક મોઇશ્ચરાઇઝેશન પૂરું પાડે છે",
          "ત્વચાના રંગને ઉજળો કરે છે અને કાળાશ દૂર કરે છે",
          "ત્વચાની સામાન્ય બળતરા, સનબર્ન અને ડાઘ મટાડે છે",
          "વધતી ઉંમરની કરચલીઓ અટકાવવામાં મદદરૂપ બને છે"
        ],
        usage: "ચહેરો સાફ કરી, ક્રીમને ચહેરા અને ગરદન પર લગાવીને શોષાઈ જાય ત્યાં સુધી હળવા હાથે મસાજ કરો.",
        ingredients: "શુદ્ધ ચંદન અર્ક, હળદર, કોકમ બટર, બદામનું તેલ અને એલોવેરા.",
        suitableFor: "સામાન્ય, સૂકી અને સંવેદનશીલ ત્વચા માટે. શિયાળા માટે ખાસ ઉપયોગી ક્રીમ.",
        warnings: "ખુલ્લા ઘા અથવા તાજી દાઝેલી ત્વચા પર ન લગાડવું."
      }
    }
  },
  {
    id: "ashwagandha-giloy-capsules",
    price: 320,
    category: "herbal",
    isPopular: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=500&q=80"
    ],
    translations: {
      en: {
        name: "Ashwagandha & Giloy Immunity Booster",
        shortDesc: "Ayurvedic capsules for strength, vitality, and strong immunity.",
        description: "A combination of two powerful adaptogenic herbs: Ashwagandha and Giloy. Formulated to help fight fatigue, manage stress, build respiratory defenses, and improve stamina.",
        benefits: [
          "Enhances body's natural defense against virus and bacteria",
          "Boosts daily physical stamina and reduces chronic fatigue",
          "Calms stress levels and lowers cortisol hormones",
          "Improves digestive metabolism and blood purity"
        ],
        usage: "Take 1-2 capsules twice a day with warm milk or water after meals, or as directed by a healthcare professional.",
        ingredients: "Standardized extracts of Ashwagandha (Withania Somnifera) 250mg, Giloy (Tinospora Cordifolia) 250mg.",
        suitableFor: "Adults seeking physical strength, immune defense, and stress management.",
        warnings: "Pregnant or lactating women should consult a physician before using this supplement."
      },
      hi: {
        name: "अश्वगंधा और गिलोय इम्युनिटी बूस्टर",
        shortDesc: "शक्ति, जीवन शक्ति और मजबूत रोग प्रतिरोधक क्षमता के लिए आयुर्वेदिक कैप्सूल।",
        description: "दो शक्तिशाली एडाप्टोजेनिक जड़ी-बूटियों का संयोजन: अश्वगंधा और गिलोय। यह थकान से लड़ने, तनाव को प्रबंधित करने, श्वसन सुरक्षा का निर्माण करने और सहनशक्ति में सुधार करने में मदद करता है।",
        benefits: [
          "वायरस और बैक्टीरिया के खिलाफ शरीर की प्राकृतिक सुरक्षा को बढ़ाता है",
          "शारीरिक सहनशक्ति बढ़ाता है और पुरानी थकान को कम करता है",
          "तनाव के स्तर को शांत करता है और कोर्टिसोल हार्मोन को कम करता है",
          "पाचन क्रिया और रक्त की शुद्धता में सुधार करता है"
        ],
        usage: "भोजन के बाद गुनगुने दूध या पानी के साथ दिन में दो बार 1-2 कैप्सूल लें, या चिकित्सक के निर्देशानुसार लें।",
        ingredients: "अश्वगंधा (250mg) और गिलोय (250mg) के मानकीकृत अर्क।",
        suitableFor: "वयस्क जो शारीरिक शक्ति, प्रतिरक्षा और तनाव प्रबंधन चाहते हैं।",
        warnings: "गर्भवती या स्तनपान कराने वाली महिलाओं को इस पूरक का उपयोग करने से पहले डॉक्टर से परामर्श करना चाहिए।"
      },
      gu: {
        name: "અશ્વગંધા અને ગિલોય ઇમ્યુનિટી બૂસ્ટર",
        shortDesc: "તાકાત અને મજબૂત રોગપ્રતિકારક શક્તિ માટે આયુર્વેદિક કેપ્સ્યુલ.",
        description: "બે શક્તિશાળી જડીબુટ્ટીઓ અશ્વગંધા અને ગિલોયનું મિશ્રણ. તે થાક દૂર કરવામાં, તણાવ ઘટાડવામાં અને સ્ટેમિના વધારવામાં મદદરૂપ છે.",
        benefits: [
          "વાયરસ અને બેક્ટેરિયા સામે શરીરની પ્રતિકારક શક્તિ વધારે છે",
          "દૈનિક શારીરિક શક્તિ વધારે છે અને થાક દૂર કરે છે",
          "માનસિક તણાવ ઓછો કરે છે અને મગજને શાંતિ આપે છે",
          "પાચન ક્રિયા સુધારે છે અને લોહીને શુદ્ધ કરે છે"
        ],
        usage: "ભોજન પછી દિવસમાં બે વાર ૧-૨ કેપ્સ્યુલ નવશેકા દૂધ અથવા પાણી સાથે લેવી અથવા ડોક્ટરની સલાહ મુજબ લેવી.",
        ingredients: "અશ્વગંધા (૨૫૦mg) અને ગિલોય (૨૫૦mg) ના શુદ્ધ અર્ક.",
        suitableFor: "શારીરિક શક્તિ, રોગપ્રતિકારક શક્તિ અને તણાવ મુક્તિ મેળવવા માંગતા પુખ્ત વયના લોકો માટે.",
        warnings: "સગર્ભા અથવા સ્તનપાન કરાવતી મહિલાઓએ ઉપયોગ કરતા પહેલા ડોક્ટરની સલાહ લેવી."
      }
    }
  },
  {
    id: "triphala-digestive-powder",
    price: 120,
    category: "herbal",
    isPopular: false,
    isNew: false,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=500&q=80"
    ],
    translations: {
      en: {
        name: "Triphala Digestive Powder (Churna)",
        shortDesc: "Traditional Ayurvedic formula for regular digestion and bowel health.",
        description: "Triphala is a combination of three potent fruits: Amla, Haritaki, and Bibhitaki. It is widely used to regulate bowel movements, cleanse the colon, and support stomach wellness.",
        benefits: [
          "Relieves chronic constipation and bloating naturally",
          "Detoxifies the gastrointestinal tract and purifies liver",
          "Helps in weight management by optimizing fat digestion",
          "Rich source of Vitamin C and natural antioxidants"
        ],
        usage: "Mix 1 teaspoon (3-5g) in a glass of warm water and consume before sleeping, or as advised by a doctor.",
        ingredients: "Equal proportions of Amla (Emblica Officinalis), Bibhitaki (Terminalia Bellirica), and Haritaki (Terminalia Chebula) dry fruit powder.",
        suitableFor: "People suffering from indigestion, constipation, acidity, or bloating.",
        warnings: "Do not exceed the recommended daily dose. Avoid use during diarrhea or dysentery."
      },
      hi: {
        name: "त्रिफला पाचन चूर्ण",
        shortDesc: "नियमित पाचन और पेट के स्वास्थ्य के लिए पारंपरिक आयुर्वेदिक सूत्र।",
        description: "त्रिफला तीन शक्तिशाली फलों का संयोजन है: आंवला, हरड़ और बहेड़ा। इसका व्यापक रूप से मल त्याग को नियमित करने, पेट साफ करने और पाचन स्वास्थ्य के लिए उपयोग किया जाता है।",
        benefits: [
          "पुरानी कब्ज और गैस (bloating) से प्राकृतिक रूप से राहत देता है",
          "पाचन तंत्र को विषमुक्त (detoxify) करता है और लीवर को शुद्ध करता है",
          "वसा के पाचन को दुरुस्त कर वजन नियंत्रण में मदद करता है",
          "विटामिन सी और प्राकृतिक एंटीऑक्सीडेंट का समृद्ध स्रोत है"
        ],
        usage: "1 छोटा चम्मच (3-5 ग्राम) गुनगुने पानी में मिलाकर रात को सोने से पहले लें, या डॉक्टर की सलाह लें।",
        ingredients: "आंवला, बहेड़ा और हरड़ के सूखे फलों के चूर्ण का समान अनुपात।",
        suitableFor: "अपच, कब्ज, एसिडिटी या पेट फूलने की समस्या से परेशान लोगों के लिए।",
        warnings: "अनुशंसित दैनिक खुराक से अधिक न लें। दस्त (diarrhea) के दौरान इसके सेवन से बचें।"
      },
      gu: {
        name: "ત્રિફળા પાચન ચૂર્ણ",
        shortDesc: "નિયમિત પાચન અને પેટની તંદુરસ્તી માટેનું પરંપરાગત આયુર્વેદિક ચૂર્ણ.",
        description: "ત્રિફળા એ ત્રણ ફળો આમળા, હરડે અને બહેડાનું મિશ્રણ છે. તે આંતરડા સાફ કરવામાં અને પેટની તકલીફો દૂર કરવામાં ખૂબ મદદરૂપ છે.",
        benefits: [
          "કબજિયાત અને ગેસની તકલીફમાંથી કુદરતી રીતે રાહત આપે છે",
          "પાચનતંત્રના ઝેરી તત્વો દૂર કરે છે અને લીવર સુધારે છે",
          "ચરબીનું પાચન સુધારીને વજન નિયંત્રણમાં મદદ કરે છે",
          "વિટામિન C અને કુદરતી એન્ટીઑકિસડન્ટનો સમૃદ્ધ સ્ત્રોત"
        ],
        usage: "૧ નાની ચમચી (૩-૫ ગ્રામ) ચૂર્ણ એક ગ્લાસ નવશેકા ગરમ પાણીમાં મિક્સ કરી રાત્રે સૂતા પહેલા લેવું.",
        ingredients: "આમળા, બહેડા અને હરડેના સૂકા ફળનું સમાન માત્રામાં મિશ્રણ.",
        suitableFor: "અપચો, કબજિયાત, એસિડિટી કે પેટ ફૂલવાની સમસ્યા ધરાવતા લોકો માટે.",
        warnings: "નિયત માત્રાથી વધુ ન લેવું. ઝાડા થયા હોય ત્યારે આનો ઉપયોગ ટાળવો."
      }
    }
  },
  {
    id: "kesar-almond-cream",
    price: 280,
    category: "cream",
    isPopular: true,
    isNew: true,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=500&q=80",
    images: [
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=500&q=80"
    ],
    translations: {
      en: {
        name: "Kesar & Almond Skin Brightening Cream",
        shortDesc: "Rich daily cream that reduces dark spots and brightens skin.",
        description: "Infused with pure Saffron (Kesar) threads and sweet Almond oil, this rich daily face cream repairs skin cells, lightens dark patches, and restores youthfulness.",
        benefits: [
          "Brightens skin tone and gives a natural golden glow",
          "Reduces under-eye dark circles and pigmentation marks",
          "Improves skin elasticity, making it soft and supple",
          "Protects skin from environmental damage and dryness"
        ],
        usage: "Massage a small amount onto face and neck in circular motions after washing your face. Best used before bedtime.",
        ingredients: "Pure Kashmiri Kesar, Cold-pressed Sweet Almond Oil, Vitamin E, Shea Butter, and Sandalwood oil.",
        suitableFor: "All skin types, especially dull, dry, and aging skin.",
        warnings: "Perform a patch test on your arm before using on face. Avoid getting directly in contact with eyes."
      },
      hi: {
        name: "केसर और बादाम स्किन ब्राइटनिंग क्रीम",
        shortDesc: "काले धब्बों को कम करने और त्वचा को चमकदार बनाने वाली दैनिक फेस क्रीम।",
        description: "शुद्ध केसर और बादाम के तेल से युक्त यह दैनिक फेस क्रीम त्वचा की कोशिकाओं की मरम्मत करती है, काले धब्बों को हल्का करती है और त्वचा की कोमलता लौटाती है।",
        benefits: [
          "त्वचा की रंगत निखारती है और एक प्राकृतिक सुनहरी चमक देती है",
          "आँखों के नीचे के काले घेरे (dark circles) और झाइयों को कम करती है",
          "त्वचा के लचीलेपन में सुधार कर इसे कोमल और लचीला बनाती है",
          "त्वचा को पर्यावरणीय नुकसान और रूखेपन से बचाती है"
        ],
        usage: "चेहरा धोने के बाद, चेहरे और गर्दन पर थोड़ी मात्रा में लेकर गोलाकार गति में मालिश करें। रात को सोने से पहले उपयोग करना सबसे अच्छा है।",
        ingredients: "शुद्ध कश्मीरी केसर, कोल्ड-प्रेस बादाम का तेल, विटामिन ई, शिया बटर और चंदन का तेल।",
        suitableFor: "सभी प्रकार की त्वचा, विशेष रूप से बेजान, रूखी और बढ़ती उम्र की त्वचा के लिए।",
        warnings: "चेहरे पर इस्तेमाल करने से पहले हाथ पर पैच टेस्ट करें। आँखों के सीधे संपर्क से बचाएं।"
      },
      gu: {
        name: "કેસર અને બદામ સ્કીન બ્રાઇટનિંગ ક્રીમ",
        shortDesc: "કાળા ડાઘ ઘટાડતી અને ત્વચાને ચમકદાર બનાવતી ક્રીમ.",
        description: "શુદ્ધ કેસર અને બદામના તેલના ગુણો ધરાવતી આ ક્રીમ ત્વચાના કોષોને પુનર્જીવિત કરે છે, કાળા ડાઘ દૂર કરે છે અને ત્વચાની તાજગી જાળવી રાખે છે.",
        benefits: [
          "ત્વચાની રંગત સુધારે છે અને કુદરતી સોનેરી ચમક આપે છે",
          "આંખો નીચેના કાળા કુંડાળા અને ડાઘા ઘટાડે છે",
          "ત્વચાની લવચીકતા સુધારી તેને મુલાયમ બનાવે છે",
          "પર્યાવરણીય પ્રદૂષણ અને સૂકા પવનથી રક્ષણ આપે છે"
        ],
        usage: "ફેસ વોશ કર્યા પછી થોડી માત્રામાં ક્રીમ ચહેરા અને ગરદન પર લગાવી ગોળાકાર મસાજ કરો. રાત્રે સૂતા પહેલા વાપરવું વધુ હિતાવહ છે.",
        ingredients: "શુદ્ધ કાશ્મીરી કેસર, બદામનું તેલ, વિટામિન E, શીયા બટર અને ચંદન તેલ.",
        suitableFor: "તમામ પ્રકારની ત્વચા માટે, ખાસ કરીને નિસ્તેજ અને સૂકી ત્વચા માટે.",
        warnings: "ચહેરા પર વાપરતા પહેલા હાથ પર થોડું લગાવી ચેક કરવું. આંખમાં ન જવા દેવું."
      }
    }
  }
];
