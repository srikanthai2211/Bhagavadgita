import { VerseTag } from './types';

interface VerseContent {
  sanskrit: string;
  telugu: string;
  english: string;
  explanation: string;
  takeaway: string;
  tags: VerseTag[];
}

export const verseDatabase: Record<string, VerseContent> = {
  '1.1': {
    sanskrit: `धृतराष्ट्र उवाच
धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।
मामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥`,
    telugu: `ధృతరాష్ట్రుడు పలికెను:
ధర్మక్షేత్రమైన కురుక్షేత్రంలో యుద్ధేచ్ఛతో సమావేశమైన నా వారు మరియు పాండవులు ఏమి చేశారు, సంజయా?`,
    english: `Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu do, assembled together on the holy field of Kurukshetra, eager for battle?`,
    explanation: `The blind king Dhritarashtra opens the Gita by asking his minister Sanjaya what is happening on the battlefield. He calls it Dharmakshetra — the field of righteousness. This single question sets the stage for the entire Gita: every major moment in life is also a moment of choosing between right and wrong.`,
    takeaway: `Every important moment in life is also a test of what is right.`,
    tags: ['duty', 'truth']
  },
  '1.2': {
    sanskrit: `सञ्जय उवाच
दृष्ट्वा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा।
आचार्यमुपसङ्गम्य राजा वचनमब्रवीत्॥`,
    telugu: `సంజయుడు పలికెను:
పాండవ సైన్యం వ్యూహబద్ధంగా నిలిచి ఉండటం చూసి, రాజు దుర్యోధనుడు గురువు దగ్గరకు వెళ్ళి ఈ మాటలు పలికాడు.`,
    english: `Sanjaya said: Seeing the army of the Pandavas arrayed in battle formation, King Duryodhana then approached his teacher Drona and spoke these words.`,
    explanation: `Sanjaya begins his narration. Duryodhana, seeing the Pandava army, feels uneasy and approaches his teacher Drona. Even powerful leaders look for reassurance in difficult moments. The scene teaches us that beneath pride often lies fear.`,
    takeaway: `Even the powerful seek guidance when facing a real challenge.`,
    tags: ['courage', 'duty']
  },
  '1.3': {
    sanskrit: `पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम्।
व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता॥`,
    telugu: `ఆచార్యా, మీ తెలివైన శిష్యుడు, ద్రుపదుని పుత్రుడు అయిన ధృష్టద్యుమ్నుడు వ్యూహరచన చేసిన పాండురాజు పుత్రుల యొక్క ఈ మహాసైన్యాన్ని చూడండి.`,
    english: `O teacher, behold this mighty army of the sons of Pandu, arrayed by your talented disciple, the son of Drupada.`,
    explanation: `Duryodhana points out to Drona that the Pandava army has been arranged by Dhrishtadyumna — Drona's own student. There is subtle anxiety in his words: the enemy is trained by their own teacher. This shows how knowledge, once given, cannot be controlled.`,
    takeaway: `Knowledge shared honestly will always find its own path.`,
    tags: ['wisdom', 'duty']
  },
  '1.4': {
    sanskrit: `अत्र शूरा महेष्वासा भीमार्जुनसमा युधि।
युयुधानो विराटश्च द्रुपदश्च महारथः॥`,
    telugu: `ఇక్కడ యుద్ధంలో భీమ అర్జునులతో సమానమైన శూరులు, మహా ధనుర్ధారులూ ఉన్నారు: యుయుధానుడు, విరాటుడు మరియు మహారథి ద్రుపదుడు.`,
    english: `Here in this army are great archers equal to Bhima and Arjuna in battle: Yuyudhana, Virata, and the great warrior Drupada.`,
    explanation: `Duryodhana begins listing the Pandava champions. By naming warriors equal to Bhima and Arjuna, he reveals his own anxiety. When we need to convince others of a threat, we are often first convincing ourselves.`,
    takeaway: `Acknowledge the strengths of others honestly — it reveals your own character.`,
    tags: ['courage', 'truth']
  },
  '1.5': {
    sanskrit: `धृष्टकेतुश्चेकितानः काशिराजश्च वीर्यवान्।
पुरुजित्कुन्तिभोजश्च शैब्यश्च नरपुङ्गवः॥`,
    telugu: `ధృష్టకేతువు, చేకితానుడు, వీరులైన కాశీరాజు, పురుజిత్తు, కుంతిభోజుడు మరియు నరశ్రేష్ఠుడైన శైబ్యుడు కూడా ఉన్నారు.`,
    english: `Dhrishtaketu, Chekitana, the valiant king of Kashi, Purujit, Kuntibhoja, and Shaibya, the best among men.`,
    explanation: `Duryodhana continues naming the allied kings on the Pandava side. The Pandavas had gathered noble, righteous allies. The company we keep and the alliances we form speak to our own values and character.`,
    takeaway: `The allies you attract reflect the values you stand for.`,
    tags: ['duty', 'courage']
  },
  '1.6': {
    sanskrit: `युधामन्युश्च विक्रान्त उत्तमौजाश्च वीर्यवान्।
सौभद्रो द्रौपदेयाश्च सर्व एव महारथाः॥`,
    telugu: `పరాక్రమవంతుడైన యుధామన్యుడు, బలవంతుడైన ఉత్తమౌజుడు, సుభద్ర పుత్రుడు (అభిమన్యుడు) మరియు ద్రౌపది పుత్రులు — వీరందరూ మహారథులే.`,
    english: `The valiant Yudhamanyu, the powerful Uttamauja, the son of Subhadra (Abhimanyu), and the sons of Draupadi — all of them great chariot warriors.`,
    explanation: `The list of Pandava heroes continues with Abhimanyu — Arjuna's young son — among the great warriors. Young people can rise to greatness when prepared with proper values and training. Age is not the measure of a hero.`,
    takeaway: `Preparation and character, not age, define a true hero.`,
    tags: ['courage', 'duty']
  },
  '1.7': {
    sanskrit: `अस्माकं तु विशिष्टा ये तान्निबोध द्विजोत्तम।
नायका मम सैन्यस्य संज्ञार्थं तान्ब्रवीमि ते॥`,
    telugu: `ఓ బ్రాహ్మణ శ్రేష్ఠా, మన సైన్యంలో విశిష్టులైన నాయకులను కూడా తెలుసుకో. నీకు వారిని గుర్తింపు కోసం చెప్తున్నాను.`,
    english: `O best of Brahmins, know also the distinguished commanders of our army. I name them for your information.`,
    explanation: `Duryodhana now lists his own side's heroes. The need to reassure his teacher by listing allies shows his inner unsteadiness. Leaders who are truly confident do not need to keep counting their strengths aloud.`,
    takeaway: `True confidence is quiet; anxiety constantly counts its resources.`,
    tags: ['truth', 'wisdom']
  },
  '1.8': {
    sanskrit: `भवान्भीष्मश्च कर्णश्च कृपश्च समितिञ्जयः।
अश्वत्थामा विकर्णश्च सौमदत्तिस्तथैव च॥`,
    telugu: `మీరు (ద్రోణుడు), భీష్ముడు, కర్ణుడు మరియు యుద్ధవిజేత కృపుడు, అశ్వత్థామ, వికర్ణుడు మరియు సోమదత్తుని కుమారుడు కూడా ఉన్నారు.`,
    english: `Yourself (Drona), Bhishma, Karna, and the ever-victorious Kripa; Ashvatthama, Vikarna, and also the son of Somadatta.`,
    explanation: `Duryodhana lists the Kaurava champions, including the great Bhishma and his friend Karna. He relies on the old and the powerful. True strength comes not just from allies but from the righteousness of one's cause.`,
    takeaway: `A righteous cause outlasts the mightiest army.`,
    tags: ['duty', 'courage']
  },
  '1.9': {
    sanskrit: `अन्ये च बहवः शूरा मदर्थे त्यक्तजीविताः।
नानाशस्त्रप्रहरणाः सर्वे युद्धविशारदाः॥`,
    telugu: `నా కోసం ప్రాణాలు అర్పించడానికి సిద్ధంగా ఉన్న ఇతర వీరులు అనేకులు ఉన్నారు. వివిధ ఆయుధాలు ధరించిన వారందరూ యుద్ధనిపుణులు.`,
    english: `And many other heroes who are ready to give up their lives for my sake, armed with various weapons, all skilled in battle.`,
    explanation: `Duryodhana notes that many warriors are ready to die for him. Being followed is not the same as being right. People will sacrifice for a cause — but the leader must ensure the cause is worthy of such sacrifice.`,
    takeaway: `Leadership is a responsibility to those who trust and follow you.`,
    tags: ['duty', 'courage']
  },
  '1.10': {
    sanskrit: `अपर्याप्तं तदस्माकं बलं भीष्माभिरक्षितम्।
पर्याप्तं त्विदमेतेषां बलं भीमाभिरक्षितम्॥`,
    telugu: `భీష్మపితామహుడు రక్షిస్తున్న మన బలం అపరిమితమైనది. కానీ భీముడు రక్షిస్తున్న వారి బలం పరిమితమే.`,
    english: `Our army, protected by Bhishma, is unlimited; but their army, protected by Bhima, is limited.`,
    explanation: `Duryodhana tries to convince himself his side is stronger. Yet the way he says it — comparing Bhishma to Bhima — reveals his doubt. When we have to convince ourselves of our superiority, we have already sensed our weakness.`,
    takeaway: `Honest self-assessment is always more useful than false confidence.`,
    tags: ['truth', 'wisdom']
  },
  '1.11': {
    sanskrit: `अयनेषु च सर्वेषु यथाभागमवस्थिताः।
भीष्ममेवाभिरक्षन्तु भवन्तः सर्व एव हि॥`,
    telugu: `మీరందరూ మీ మీ స్థానాల్లో నిలిచి, అన్ని వైపుల నుండి భీష్మపితామహుని మాత్రమే రక్షించాలి.`,
    english: `Therefore, all of you stationed at your respective positions in the army's formations, please protect Bhishma above all.`,
    explanation: `Duryodhana gives his one instruction: protect Bhishma. He places his entire hope in one person. This shows both his recognition of Bhishma's greatness and his failure to build a more resilient strategy. Over-reliance on one person is a weakness.`,
    takeaway: `Build systems and teams — do not depend on a single person alone.`,
    tags: ['duty', 'discipline']
  },
  '1.12': {
    sanskrit: `तस्य सञ्जनयन्हर्षं कुरुवृद्धः पितामहः।
सिंहनादं विनद्योच्चैः शङ्खं दध्मौ प्रतापवान्॥`,
    telugu: `కురువంశ వృద్ధుడు, ప్రతాపవంతుడైన భీష్మ పితామహుడు, దుర్యోధనునకు సంతోషం కలిగించడానికి సింహనాదంతో శంఖాన్ని ఊదాడు.`,
    english: `Then the powerful grandsire of the Kurus, the glorious Bhishma, blew his conch loudly like a lion's roar, cheering Duryodhana.`,
    explanation: `Bhishma blows his conch to encourage Duryodhana. Even the wisest sometimes support imperfect causes out of loyalty. Bhishma's dilemma — duty to the throne versus duty to righteousness — is one the Gita itself will address.`,
    takeaway: `Loyalty without wisdom can lead even the noble to support wrong causes.`,
    tags: ['duty', 'courage']
  },
  '1.13': {
    sanskrit: `ततः शङ्खाश्च भेर्यश्च पणवानकगोमुखाः।
सहसैवाभ्यहन्यन्त स स्तुमुलोऽभवद्घोषः॥`,
    telugu: `అప్పుడు శంఖాలు, మేళాలు, డప్పులు, తబలాలు, పశువుల కొమ్ములు ఒకేసారి మోగాయి. ఆ ఘోష చాలా భీకరంగా ఉంది.`,
    english: `Thereafter, conches, kettledrums, tabors, drums, and cow-horns all burst forth suddenly. That sound was tumultuous.`,
    explanation: `The sounds of battle fill the air from the Kaurava side. The noise of conflict can be overwhelming, drowning out inner wisdom. The Gita teaches us to find stillness even amidst the loudest chaos around us.`,
    takeaway: `Find your inner stillness even when the world around you is loud.`,
    tags: ['peace', 'self-control']
  },
  '1.14': {
    sanskrit: `ततः श्वेतैर्हयैर्युक्ते महति स्यन्दने स्थितौ।
माधवः पाण्डवश्चैव दिव्यौ शङ्खौ प्रदध्मतुः॥`,
    telugu: `అప్పుడు తెల్ల గుర్రాలు కట్టిన గొప్ప రథంపై నిలిచిన మాధవుడు (కృష్ణుడు) మరియు పాండవుడు (అర్జునుడు) తమ దివ్య శంఖాలను ఊదారు.`,
    english: `Then, stationed in a grand chariot drawn by white horses, Madhava (Krishna) and the son of Pandu (Arjuna) blew their divine conches.`,
    explanation: `Krishna and Arjuna together blow their divine conches. Where wisdom (Krishna) and dedicated action (Arjuna) come together, the response to any challenge is more powerful. This is the partnership the Gita embodies throughout.`,
    takeaway: `Wisdom and action together create an unstoppable force.`,
    tags: ['duty', 'courage']
  },
  '1.15': {
    sanskrit: `पाञ्चजन्यं हृषीकेशो देवदत्तं धनञ्जयः।
पौण्ड्रं दध्मौ महाशङ्खं भीमकर्मा वृकोदरः॥`,
    telugu: `హృషీకేశుడు (కృష్ణుడు) పాంచజన్యాన్ని, ధనంజయుడు (అర్జునుడు) దేవదత్తాన్ని మరియు భయంకర కర్ములైన వృకోదరుడు (భీముడు) పౌండ్రమనే మహాశంఖాన్ని ఊదారు.`,
    english: `Hrishikesha (Krishna) blew the Panchajanya, Dhananjaya (Arjuna) blew the Devadatta, and Bhima of terrible deeds blew the great conch Paundra.`,
    explanation: `Each warrior's conch has a name — a personal symbol. Krishna's Panchajanya means 'belonging to all five elements.' The naming of instruments shows the sacred significance the ancients gave to sound and intention in action.`,
    takeaway: `Bring intention and meaning to what you do — even small acts become significant.`,
    tags: ['action', 'duty']
  },
  '1.16': {
    sanskrit: `अनन्तविजयं राजा कुन्तीपुत्रो युधिष्ठिरः।
नकुलः सहदेवश्च सुघोषमणिपुष्पकौ॥`,
    telugu: `కుంతీ పుత్రుడైన రాజు యుధిష్ఠిరుడు అనంతవిజయాన్ని, నకులుడు సుఘోషాన్ని, సహదేవుడు మణిపుష్పకాన్ని ఊదారు.`,
    english: `King Yudhishthira, the son of Kunti, blew the Anantavijaya; Nakula and Sahadeva blew the Sughosha and Manipushpaka.`,
    explanation: `The five Pandava brothers each sound their individual conches. Unity in diversity — five distinct individuals with one purpose — is a powerful model for any team or family. Strength comes from both individual excellence and shared commitment.`,
    takeaway: `A united team of distinct individuals is more powerful than a uniform crowd.`,
    tags: ['duty', 'courage']
  },
  '1.17': {
    sanskrit: `काश्यश्च परमेष्वासः शिखण्डी च महारथः।
धृष्टद्युम्नो विराटश्च सात्यकिश्चापराजितः॥`,
    telugu: `మహా ధనుర్ధారి కాశీరాజు, మహారథి శిఖండి, ధృష్టద్యుమ్నుడు, విరాటుడు మరియు పరాజయం ఎరుగని సాత్యకి కూడా శంఖాలు ఊదారు.`,
    english: `The great archer, the king of Kashi; Shikhandi, the great chariot-warrior; Dhrishtadyumna; Virata; and the unconquered Satyaki.`,
    explanation: `More Pandava allies sound their conches. Satyaki is described as 'unconquered' — a title earned through consistent effort and integrity. Our reputation is built by how we act every day, not just on grand occasions.`,
    takeaway: `Reputation is built day by day through consistent, honest action.`,
    tags: ['courage', 'discipline']
  },
  '1.18': {
    sanskrit: `द्रुपदो द्रौपदेयाश्च सर्वशः पृथिवीपते।
सौभद्रश्च महाबाहुः शङ्खान्दध्मुः पृथक्पृथक्॥`,
    telugu: `ద్రుపదుడు, ద్రౌపది పుత్రులు అందరూ మరియు మహాబాహువు అభిమన్యుడు — వారందరూ వేర్వేరుగా శంఖాలు ఊదారు, ఓ రాజా.`,
    english: `Drupada and the sons of Draupadi, and the son of Subhadra, the mighty-armed, all blew their respective conches, O King.`,
    explanation: `Even Abhimanyu, the young son of Arjuna, sounds his conch alongside the great warriors. Youth standing beside experience in a righteous cause is a powerful image — every generation has its role to play.`,
    takeaway: `Every generation has a meaningful role in the work of righteousness.`,
    tags: ['duty', 'courage']
  },
  '1.19': {
    sanskrit: `स घोषो धार्तराष्ट्राणां हृदयानि व्यदारयत्।
नभश्च पृथिवीं चैव तुमुलो व्यनुनादयन्॥`,
    telugu: `ఆ మహాఘోష ఆకాశాన్ని భూమిని మారుమ్రోగించింది. ధృతరాష్ట్రుని పుత్రుల హృదయాలను చీల్చింది.`,
    english: `That tumultuous sound rent the hearts of the sons of Dhritarashtra, resounding through both heaven and earth.`,
    explanation: `The Pandava conches shake the hearts of the Kauravas. A cause rooted in righteousness carries a power that unsettles those on the wrong side. Truth has a resonance that reaches beyond sound.`,
    takeaway: `A righteous cause carries a power that the unjust cannot match.`,
    tags: ['courage', 'truth']
  },
  '1.20': {
    sanskrit: `अथ व्यवस्थितान्दृष्ट्वा धार्तराष्ट्रान्कपिध्वजः।
प्रवृत्ते शस्त्रसम्पाते धनुरुद्यम्य पाण्डवः॥`,
    telugu: `అప్పుడు కపిధ్వజుడైన పాండవుడు (అర్జునుడు) వ్యవస్థితులుగా నిలిచిన ధృతరాష్ట్రుని పుత్రులను చూసి, బాణాలు సంధింపబోయే సమయంలో విల్లు పైకెత్తాడు.`,
    english: `Then the son of Pandu, whose flag bore the symbol of Hanuman, seeing the sons of Dhritarashtra arrayed, took up his bow as weapons were about to be discharged.`,
    explanation: `Arjuna raises his bow, ready for battle. His chariot flag bears Hanuman — the symbol of devoted, selfless strength. The symbols we carry tell the world what we stand for. Choose your values as carefully as a warrior chooses his banner.`,
    takeaway: `The values you embody become your flag — choose them with care.`,
    tags: ['duty', 'courage']
  },
  '1.21': {
    sanskrit: `अर्जुन उवाच
सेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत।
यावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान्॥`,
    telugu: `అర్జునుడు పలికెను:
అచ్యుతా, నా రథాన్ని రెండు సైన్యాల మధ్య నిలబెట్టు. యుద్ధానికి సిద్ధంగా నిలిచిన వీరందరినీ నేను చూసే వరకు.`,
    english: `Arjuna said: O Achyuta, place my chariot between the two armies so that I may look upon those who stand here eager for battle.`,
    explanation: `Arjuna asks Krishna to stop the chariot so he can see who he is about to fight. Before any great decision, we need to pause and observe clearly. Rushing into action without clear seeing leads to regret.`,
    takeaway: `Before acting in a hard moment, take time to see clearly.`,
    tags: ['wisdom', 'courage']
  },
  '1.22': {
    sanskrit: `यावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान्।
कैर्मया सह योद्धव्यमस्मिन्रणसमुद्यमे॥`,
    telugu: `ఈ యుద్ధ సంరంభంలో నేను ఎవరితో పోరాడవలసి ఉంటుందో, యుద్ధేచ్ఛతో నిలిచిన వారిని నేను చూడగలిగేంత వరకు.`,
    english: `That I may observe those who have assembled here to fight, wishing to please the evil-minded Duryodhana in this endeavour of battle.`,
    explanation: `Arjuna wants to see clearly who he must fight. Clear seeing — without illusion or wishful thinking — is the first requirement for any important decision. The Gita begins with a call to honest observation.`,
    takeaway: `See your situation clearly before deciding what to do.`,
    tags: ['wisdom', 'truth']
  },
  '1.23': {
    sanskrit: `योत्स्यमानानवेक्षेऽहं य एतेऽत्र समागताः।
धार्तराष्ट्रस्य दुर्बुद्धेर्युद्धे प्रियचिकीर्षवः॥`,
    telugu: `దుర్మతి అయిన ధృతరాష్ట్రుని పుత్రునికి యుద్ధంలో ప్రీతి కలిగించాలని ఇక్కడ సమావేశమైన వారిని నేను చూస్తాను.`,
    english: `I wish to see those who have assembled here ready to fight, seeking to do service in battle for the evil-minded son of Dhritarashtra.`,
    explanation: `Arjuna recognizes that many have gathered to fight for a leader whose mind is crooked (durbhuddheh). Following a wrong-minded leader causes collective suffering. We must evaluate not just the order but the purpose behind it before we act.`,
    takeaway: `Evaluate the purpose behind an order before you follow it blindly.`,
    tags: ['wisdom', 'truth']
  },
  '1.24': {
    sanskrit: `सञ्जय उवाच
एवमुक्तो हृषीकेशो गुडाकेशेन भारत।
सेनयोरुभयोर्मध्ये स्थापयित्वा रथोत्तमम्॥`,
    telugu: `సంజయుడు పలికెను:
భరతవంశీయుడా, గుడాకేశుడు (అర్జునుడు) పలికిన విధంగా హృషీకేశుడు (కృష్ణుడు) ఉభయ సైన్యాల మధ్య రథోత్తమాన్ని నిలిపాడు.`,
    english: `Sanjaya said: O Bharata, thus addressed by Gudakesha (Arjuna), Hrishikesha (Krishna) placed the excellent chariot in the midst of both armies.`,
    explanation: `Krishna immediately fulfills Arjuna's request without argument. A true friend and guide honors your need to understand before acting. Wisdom doesn't force — it creates the conditions for insight to arise.`,
    takeaway: `A true guide creates the space for you to see for yourself.`,
    tags: ['wisdom', 'surrender']
  },
  '1.25': {
    sanskrit: `भीष्मद्रोणप्रमुखतः सर्वेषां च महीक्षिताम्।
उवाच पार्थ पश्यैतान्समवेतान्कुरूनिति॥`,
    telugu: `భీష్ముడు, ద్రోణుడు మరియు అన్ని రాజుల ముందు కృష్ణుడు: 'పార్థా, ఇక్కడ సమావేశమైన ఈ కురువంశీయులను చూడు' అని పలికాడు.`,
    english: `In the presence of Bhishma, Drona, and all the rulers of the earth, he said: O Partha, behold these Kurus assembled together.`,
    explanation: `Krishna says 'behold' — look, observe, see clearly. He does not tell Arjuna what to feel or decide. The best teachers create the conditions for their students to discover truth themselves rather than imposing conclusions.`,
    takeaway: `True teaching creates the conditions for the student to discover truth themselves.`,
    tags: ['wisdom', 'truth']
  },
  '1.26': {
    sanskrit: `तत्रापश्यत्स्थितान्पार्थः पितॄनथ पितामहान्।
आचार्यान्मातुलान्भ्रातॄन्पुत्रान्पौत्रान्सखींस्तथा॥`,
    telugu: `అప్పుడు పార్థుడు అక్కడ తండ్రులను, తాతలను, గురువులను, మేనమామలను, సోదరులను, పుత్రులను, పౌత్రులను మరియు మిత్రులను నిలిచి ఉండటం చూశాడు.`,
    english: `There Partha saw standing his fathers, grandfathers, teachers, maternal uncles, brothers, sons, grandsons, and companions.`,
    explanation: `Arjuna sees everyone he loves on the opposite side. This is the moment the crisis becomes deeply personal. Many life challenges are not abstract — they involve people we love. That is what makes them so difficult and so important.`,
    takeaway: `The hardest challenges in life involve people we care about.`,
    tags: ['compassion', 'wisdom']
  },
  '1.27': {
    sanskrit: `श्वशुरान्सुहृदश्चैव सेनयोरुभयोरपि।
तान्समीक्ष्य स कौन्तेयः सर्वान्बन्धूनवस्थितान्॥`,
    telugu: `రెండు సైన్యాలలో ఉన్న మామలను మరియు మిత్రులను చూసిన కౌంతేయుడు (అర్జునుడు) ఆ బంధువులందరినీ గమనించాడు.`,
    english: `And fathers-in-law and companions in both armies — seeing all these kinsmen thus arrayed, the son of Kunti.`,
    explanation: `Arjuna sees friends and allies on both sides of the conflict. Many conflicts in life divide people who were once united. This vision of divided relationships is what breaks Arjuna's heart and forces him to ask the deepest questions.`,
    takeaway: `Conflict hurts most when it divides those who were once united.`,
    tags: ['compassion', 'wisdom']
  },
  '1.28': {
    sanskrit: `कृपया परयाविष्टो विषीदन्निदमब्रवीत्।
दृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्॥`,
    telugu: `కృష్ణా, యుద్ధానికి సిద్ధంగా నిలిచిన నా బంధువులను చూసి అర్జునుడు గొప్ప కరుణతో నిండి, విషాదంతో ఈ మాటలు పలికాడు.`,
    english: `Filled with deep compassion and overwhelmed with grief, he said: O Krishna, seeing these my own people standing here ready to fight.`,
    explanation: `Arjuna's grief arises from compassion, not cowardice. The Gita honors this. Feeling pain at others' suffering is noble. The question is what we do with that feeling — let it paralyze us or let it lead us to wisdom.`,
    takeaway: `Compassion for others is noble; let it lead to wisdom, not paralysis.`,
    tags: ['compassion', 'wisdom']
  },
  '1.29': {
    sanskrit: `सीदन्ति मम गात्राणि मुखं च परिशुष्यति।
वेपथुश्च शरीरे मे रोमहर्षश्च जायते॥`,
    telugu: `నా అవయవాలు బలహీనపడుతున్నాయి, నోరు ఎండిపోతున్నది, శరీరంలో వణుకు కలుగుతున్నది, రోమాలు నిక్కబొడుచుకుంటున్నాయి.`,
    english: `My limbs fail and my mouth is parched; my body quivers and my hair stands on end.`,
    explanation: `Arjuna describes his physical symptoms of crisis — trembling, dry mouth, quivering. The Gita gives us perhaps the oldest recorded description of a panic response. It validates that even the bravest person can be physically overwhelmed by emotional crisis.`,
    takeaway: `Physical symptoms of crisis are normal — they are your body asking for wisdom.`,
    tags: ['courage', 'peace']
  },
  '1.30': {
    sanskrit: `गाण्डीवं स्रंसते हस्तात्त्वक्चैव परिदह्यते।
न च शक्नोम्यवस्थातुं भ्रमतीव च मे मनः॥`,
    telugu: `గాండీవం చేతి నుండి జారుతున్నది, చర్మం మండుతున్నది. నేను నిలబడలేకున్నాను, నా మనసు చుట్టూ తిరుగుతున్నట్లు ఉన్నది.`,
    english: `The Gandiva slips from my hand, my skin burns; I am unable to stand, and my mind seems to whirl.`,
    explanation: `Arjuna's famous Gandiva bow slips from his hands. The bow is the symbol of his identity and purpose as a warrior. When our core purpose feels impossible to hold, it means we need not more strength but deeper understanding.`,
    takeaway: `When your purpose feels impossible to hold, seek deeper understanding, not just more strength.`,
    tags: ['wisdom', 'courage']
  },
  '1.31': {
    sanskrit: `निमित्तानि च पश्यामि विपरीतानि केशव।
न च श्रेयोऽनुपश्यामि हत्वा स्वजनमाहवे॥`,
    telugu: `కేశవా, నేను అపశకునాలు చూస్తున్నాను. యుద్ధంలో స్వజనులను సంహరించడంలో నాకు శ్రేయస్సు కనిపించడం లేదు.`,
    english: `I see inauspicious omens, O Keshava; I do not foresee any good from slaying my own kinsmen in battle.`,
    explanation: `Arjuna says he sees bad omens. But the omens may reflect his own inner state more than external reality. How we interpret signs is shaped by what we feel inside. The Gita will teach that wisdom, not omens, should guide our decisions.`,
    takeaway: `Seek wisdom to guide your decisions, not just signs and omens.`,
    tags: ['wisdom', 'truth']
  },
  '1.32': {
    sanskrit: `न काङ्क्षे विजयं कृष्ण न च राज्यं सुखानि च।
किं नो राज्येन गोविन्द किं भोगैर्जीवितेन वा॥`,
    telugu: `కృష్ణా, నాకు విజయం వద్దు, రాజ్యం వద్దు, సుఖాలూ వద్దు. గోవిందా, మనకు రాజ్యంతో ఏమి ప్రయోజనం? భోగాలతో ఏమి ప్రయోజనం? జీవితంతో కూడా ఏమి ప్రయోజనం?`,
    english: `I desire neither victory, O Krishna, nor a kingdom, nor pleasures. Of what avail is a kingdom to us, or enjoyments, or even life itself?`,
    explanation: `Arjuna says he doesn't want victory if it costs him his family. This is a profound moral question: what is the price of winning too high? The Gita doesn't dismiss this question — it answers it at the deepest level.`,
    takeaway: `Ask not just whether you can win, but whether the cost of winning is worth it.`,
    tags: ['wisdom', 'compassion']
  },
  '1.33': {
    sanskrit: `येषामर्थे काङ्क्षितं नो राज्यं भोगाः सुखानि च।
त इमेऽवस्थिता युद्धे प्राणांस्त्यक्त्वा धनानि च॥`,
    telugu: `ఎవరి కోసం మనం రాజ్యాన్ని, భోగాలను, సుఖాలను కోరుకుంటామో, వారే ఇక్కడ ప్రాణాలు, సంపదలు విడిచి యుద్ధానికి నిలిచి ఉన్నారు.`,
    english: `Those for whose sake we desire kingdom, enjoyments, and pleasures — they stand here in battle, having renounced their lives and wealth.`,
    explanation: `Arjuna points out the painful irony: the people he would fight for are the ones he would have to fight against. Purpose without a moral compass leads to tragic contradictions. Know clearly for whom and what you truly act.`,
    takeaway: `Know clearly who and what you are truly acting for.`,
    tags: ['wisdom', 'compassion']
  },
  '1.34': {
    sanskrit: `आचार्याः पितरः पुत्रास्तथैव च पितामहाः।
मातुलाः श्वशुराः पौत्राः श्यालाः सम्बन्धिनस्तथा॥`,
    telugu: `గురువులు, తండ్రులు, పుత్రులు, తాతలు, మేనమామలు, మామలు, పౌత్రులు, బావమరుదులు మరియు ఇతర బంధువులు.`,
    english: `Teachers, fathers, sons, grandfathers, maternal uncles, fathers-in-law, grandsons, brothers-in-law, and all other relatives.`,
    explanation: `Arjuna lists every relationship category he sees on the opposing side. The battlefield has become a mirror of every human bond. The Gita uses this moment to teach that our deepest relationships are where the toughest questions about duty and love arise.`,
    takeaway: `The toughest questions of duty arise in our closest relationships.`,
    tags: ['compassion', 'duty']
  },
  '1.35': {
    sanskrit: `एतान्न हन्तुमिच्छामि घ्नतोऽपि मधुसूदन।
अपि त्रैलोक्यराज्यस्य हेतोः किं नु महीकृते॥`,
    telugu: `మధుసూదనా, ఈ వారు నన్ను సంహరించినా సరే నేను వీరిని చంపాలని కోరుకోను. ముల్లోకాల రాజ్యం కోసమైనా, భూమి కోసమైనా ఎంత మాత్రం.`,
    english: `I do not desire to kill them, even if they should slay me, O Madhusudana, even for the sovereignty of the three worlds — much less for the sake of this earth.`,
    explanation: `Arjuna says he would not kill even to gain the sovereignty of three worlds. This extreme statement shows moral seriousness — some things are worth more than any prize. The Gita honors this nobility even as it corrects his confusion.`,
    takeaway: `Some principles are worth more than any reward or victory.`,
    tags: ['compassion', 'truth']
  },
  '1.36': {
    sanskrit: `निहत्य धार्तराष्ट्रान्नः का प्रीतिः स्याज्जनार्दन।
पापमेवाश्रयेदस्मान्हत्वैतानाततायिनः॥`,
    telugu: `జనార్దనా, ధృతరాష్ట్రుని పుత్రులను సంహరించడంలో మనకు ఏ ఆనందం కలుగుతుంది? ఈ దాడి చేసిన వారిని సంహరిస్తే మనకు పాపమే అంటుతుంది.`,
    english: `What pleasure would there be in killing the sons of Dhritarashtra, O Janardana? Sin will only accrue to us by killing these aggressors.`,
    explanation: `Arjuna wonders if victory over the Kauravas would bring any real joy. This is a crucial question: winning a battle does not guarantee inner peace. The Gita will distinguish between outer victory and inner freedom.`,
    takeaway: `Outer victory does not guarantee inner peace — seek both.`,
    tags: ['wisdom', 'truth']
  },
  '1.37': {
    sanskrit: `तस्मान्नार्हा वयं हन्तुं धार्तराष्ट्रान्स्वबान्धवान्।
स्वजनं हि कथं हत्वा सुखिनः स्याम माधव॥`,
    telugu: `కాబట్టి మాధవా, మన స్వంత బంధువులైన ధృతరాష్ట్రుని పుత్రులను సంహరించడం సరికాదు. స్వజనులను సంహరించి మనం సుఖంగా ఎలా ఉంటాము?`,
    english: `Therefore it is not right that we slay our kinsmen, the sons of Dhritarashtra. For how can we be happy after slaying our own relatives, O Madhava?`,
    explanation: `Arjuna asks how anyone could be happy after killing their own family. This is a profound ethical question. The Gita does not dismiss it with easy answers but builds up to a complete understanding of duty, identity, and action.`,
    takeaway: `Do not seek happiness through actions that violate your deepest values.`,
    tags: ['compassion', 'wisdom']
  },
  '1.38': {
    sanskrit: `यद्यप्येते न पश्यन्ति लोभोपहतचेतसः।
कुलक्षयकृतं दोषं मित्रद्रोहे च पातकम्॥`,
    telugu: `లోభంతో చిత్తం కలుషితమై వీరు కులనాశకరమైన దోషాన్ని, మిత్రద్రోహపు పాపాన్ని చూడలేకపోతున్నా సరే.`,
    english: `Even if those whose minds are overpowered by greed see no wrong in destroying the family or betraying friends.`,
    explanation: `Arjuna recognizes that the Kauravas, blinded by greed, cannot see their own wrongdoing. Greed doesn't just corrupt actions — it blinds the intellect so wrongdoing feels justified. This is the great danger of unchecked desire.`,
    takeaway: `Greed blinds the intellect — it makes wrong seem right.`,
    tags: ['wisdom', 'truth']
  },
  '1.39': {
    sanskrit: `कथं न ज्ञेयमस्माभिः पापादस्मान्निवर्तितुम्।
कुलक्षयकृतं दोषं प्रपश्यद्भिर्जनार्दन॥`,
    telugu: `జనార్దనా, కులనాశకరమైన దోషాన్ని స్పష్టంగా చూస్తున్న మనం ఈ పాపం నుండి నివర్తించడం మనకు ఎందుకు తెలియదు?`,
    english: `Why should we not know to turn back from this sin, O Janardana, seeing clearly the wrong in the destruction of the family?`,
    explanation: `Arjuna argues: if we can see the harm, why should we not step back? This is moral reasoning at its best. Sometimes stepping back from apparent duty to prevent greater harm IS the right action. But sometimes it is not — distinguishing these requires wisdom.`,
    takeaway: `Seeing harm clearly is the first step; acting wisely in response requires deeper understanding.`,
    tags: ['wisdom', 'duty']
  },
  '1.40': {
    sanskrit: `कुलक्षये प्रणश्यन्ति कुलधर्माः सनातनाः।
धर्मे नष्टे कुलं कृत्स्नमधर्मोऽभिभवत्युत॥`,
    telugu: `కుల నాశనంలో సనాతన కులధర్మాలు నశించిపోతాయి. ధర్మం నశించగా మొత్తం కులాన్ని అధర్మం ఆక్రమిస్తుంది.`,
    english: `With the destruction of the family, the eternal family traditions are destroyed; when tradition is destroyed, the whole family is overtaken by irreligion.`,
    explanation: `Arjuna fears the collapse of dharma if families are destroyed. This reveals his understanding that civilization is built on relationships, traditions, and shared values. When these erode, society weakens from within.`,
    takeaway: `The traditions and values of a community are its invisible foundation — protect them.`,
    tags: ['duty', 'truth']
  },
  '1.41': {
    sanskrit: `अधर्माभिभवात्कृष्ण प्रदुष्यन्ति कुलस्त्रियः।
स्त्रीषु दुष्टासु वार्ष्णेय जायते वर्णसङ्करः॥`,
    telugu: `కృష్ణా, అధర్మం ఆధిపత్యం చెందగా కుల స్త్రీలు భ్రష్టులవుతారు. వార్ష్ణేయా, స్త్రీలు దుష్టులైనప్పుడు వర్ణ సంకరం కలుగుతుంది.`,
    english: `When irreligion predominates, O Krishna, the women of the family become corrupted; when women are corrupted, O Varshneya, unwanted population is generated.`,
    explanation: `Arjuna expresses concern about social disorder. While the specific social framework here is ancient, the underlying concern is timeless: moral collapse in a society spreads from one area to all areas. Integrity in community life matters.`,
    takeaway: `Moral integrity in a community is interconnected — one area of collapse affects all others.`,
    tags: ['duty', 'truth']
  },
  '1.42': {
    sanskrit: `सङ्करो नरकायैव कुलघ्नानां कुलस्य च।
पतन्ति पितरो ह्येषां लुप्तपिण्डोदकक्रियाः॥`,
    telugu: `ఈ వర్ణసంకరం కులఘాతకులను మరియు కులాన్ని నరకానికి తీసుకు వెళ్ళే విధంగా చేస్తుంది. పిండోదక క్రియలు లేనందున వారి పితరులు కూడా పతనమవుతారు.`,
    english: `This mixture leads to hell for the destroyers of the family and for the family itself. Their ancestors fall, deprived of offerings of rice and water.`,
    explanation: `Arjuna worries about the spiritual consequences for ancestors when family traditions end. This reflects deep reverence for continuity between generations — the living have responsibilities to those who came before and those who will come after.`,
    takeaway: `We carry responsibility not just to our present but to our past and future generations.`,
    tags: ['duty', 'truth']
  },
  '1.43': {
    sanskrit: `दोषैरेतैः कुलघ्नानां वर्णसङ्करकारकैः।
उत्साद्यन्ते जातिधर्माः कुलधर्माश्च शाश्वताः॥`,
    telugu: `ఈ వర్ణసంకరాన్ని కలిగించే కులఘాతకుల దోషాల వలన శాశ్వతమైన జాతి ధర్మాలు మరియు కులధర్మాలు నశిస్తాయి.`,
    english: `By the actions of these destroyers of family traditions, which result in unwanted population, the eternal laws of the community and the family are ruined.`,
    explanation: `Arjuna's argument concludes: destroying families destroys the structures that carry civilization forward. He is thinking systemically — seeing how one violent act has consequences that ripple across generations. Systems thinking is wisdom.`,
    takeaway: `Think beyond the immediate action to its long-term consequences for the community.`,
    tags: ['wisdom', 'truth']
  },
  '1.44': {
    sanskrit: `उत्सन्नकुलधर्माणां मनुष्याणां जनार्दन।
नरकेऽनिश्चितं वासो भवतीत्यनुशुश्रुम॥`,
    telugu: `జనార్దనా, కుల ధర్మాలు నశించిన మనుషులు నిరంతరం నరకంలో నివసిస్తారని మేము వినాము.`,
    english: `O Janardana, we have heard that men who have ruined the family tradition dwell in hell for an indefinite period.`,
    explanation: `Arjuna appeals to what he has heard from tradition. He is not inventing his ethics — he is drawing on received wisdom. This shows the value of learning from those who came before us, even as we must ultimately judge with our own understanding.`,
    takeaway: `Draw on the wisdom of tradition, then use your own understanding to apply it wisely.`,
    tags: ['wisdom', 'duty']
  },
  '1.45': {
    sanskrit: `अहो बत महत्पापं कर्तुं व्यवसिता वयम्।
यद्राज्यसुखलोभेन हन्तुं स्वजनमुद्यताः॥`,
    telugu: `అయ్యో, మనం ఎంత పెద్ద పాపం చేయాలని నిశ్చయించుకున్నాం! రాజ్య సుఖ లోభంతో స్వజనులను సంహరించడానికి సిద్ధంగా ఉన్నాం.`,
    english: `Alas, how strange it is that we are preparing to commit great sins, driven by the desire to enjoy royal happiness!`,
    explanation: `Arjuna has a moment of moral clarity — he sees himself as about to commit a great sin for the sake of pleasure and power. This honest self-examination is actually wisdom dawning. The ability to judge our own actions is the beginning of moral maturity.`,
    takeaway: `The ability to honestly judge your own actions is the beginning of wisdom.`,
    tags: ['truth', 'wisdom']
  },
  '1.46': {
    sanskrit: `यदि मामप्रतीकारमशस्त्रं शस्त्रपाणयः।
धार्तराष्ट्रा रणे हन्युस्तन्मे क्षेमतरं भवेत्॥`,
    telugu: `ఒకవేళ ఆయుధాలు ధరించిన ధృతరాష్ట్రుని పుత్రులు, ఆయుధం లేని నన్ను ప్రతిఘటించని వానిగా యుద్ధంలో సంహరించినా, అది నాకు శ్రేయస్కరం.`,
    english: `If the sons of Dhritarashtra, weapons in hand, kill me in battle when I am unresisting and unarmed, that would be better for me.`,
    explanation: `Arjuna says it would be better to be killed than to kill. This is his deepest despair — and his purest nobility. The Gita honors this feeling even as it will show a larger understanding: there is a path between killing in anger and surrendering passively.`,
    takeaway: `Between aggression and passivity lies the path of wise, dharmic action.`,
    tags: ['compassion', 'wisdom']
  },
  '1.47': {
    sanskrit: `सञ्जय उवाच
एवमुक्त्वार्जुनः सङ्ख्ये रथोपस्थ उपाविशत्।
विसृज्य सशरं चापं शोकसंविग्नमानसः॥`,
    telugu: `సంజయుడు పలికెను:
యుద్ధభూమిలో ఇలా చెప్పి అర్జునుడు రథంలో కూర్చున్నాడు. విల్లు, బాణాలు విడిచి, దుఃఖంతో కలవరపడిన మనస్సుతో.`,
    english: `Sanjaya said: Having spoken thus on the battlefield, Arjuna sat down in the chariot, casting aside his bow and arrows, his mind overwhelmed with grief.`,
    explanation: `Arjuna puts down his bow and sits — the warrior has stopped. This is the lowest point of Chapter 1 and the starting point of all wisdom. When we admit we are overwhelmed and don't know what to do, we become ready to truly listen and learn.`,
    takeaway: `Admitting confusion is the first step toward wisdom.`,
    tags: ['wisdom', 'surrender']
  },
  '2.1': {
    sanskrit: `सञ्जय उवाच
तं तथा कृपयाविष्टमश्रुपूर्णाकुलेक्षणम्।
विषीदन्तमिदं वाक्यमुवाच मधुसूदनः॥`,
    telugu: `సంజయుడు పలికెను:
ఆ విధంగా దయతో నిండి, నిండు కన్నీళ్ళతో కలవరపడిన నేత్రాలు గలిగి, విషాదంలో ఉన్న అతనితో మధుసూదనుడు ఈ మాటలు పలికాడు.`,
    english: `Sanjaya said: To Arjuna, who was thus filled with compassion, whose eyes were filled with tears and who was overwhelmed with grief, Madhusudana (Krishna) spoke these words.`,
    explanation: `Sanjaya narrates that Krishna sees Arjuna's tears and grief before speaking. A wise teacher first witnesses the student's pain fully before offering guidance. Rushing to fix someone's problem before truly seeing it leads to hollow advice.`,
    takeaway: `See clearly before you advise — witness before you instruct.`,
    tags: ['wisdom', 'compassion']
  },
  '2.2': {
    sanskrit: `श्रीभगवानुवाच
कुतस्त्वा कश्मलमिदं विषमे समुपस्थितम्।
अनार्यजुष्टमस्वर्ग्यमकीर्तिकरमर्जुन॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
ఓ అర్జునా, ఈ కష్టమైన సమయంలో నీకు ఈ మాలిన్యం ఎక్కడ నుండి వచ్చింది? ఇది అనార్యులు చేసేది, స్వర్గాన్ని ఇవ్వనిది, అపకీర్తిని తెచ్చేది.`,
    english: `The Blessed Lord said: O Arjuna, how has this impurity come upon you at this crisis? It does not become a noble person; it does not lead to heaven; it causes disgrace.`,
    explanation: `Krishna's first words are not gentle comfort but a firm challenge: this weakness does not become you. A true friend sometimes needs to be honest rather than sympathetic. Real love sometimes says 'this is not who you are.'`,
    takeaway: `A true friend sometimes challenges you rather than comforting you in your weakness.`,
    tags: ['courage', 'wisdom']
  },
  '2.3': {
    sanskrit: `क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।
क्षुद्रं हृदयदौर्बल्यं त्यक्त्वोत्तिष्ठ परन्तप॥`,
    telugu: `పార్థా, పౌరుషహీనత పొందకు. ఇది నీకు తగదు. హృదయ దౌర్బల్యమనే ఈ అల్పమైన భావాన్ని విడిచి, పరంతపా, లేచి నిలువు.`,
    english: `O Partha, do not yield to impotence. It does not become you. Shake off this faint-heartedness and arise, O scorcher of foes.`,
    explanation: `'Arise!' — Krishna's instruction is immediate and direct. There are moments when what we need is not analysis but the call to stand up. Understanding what is right and then acting on it requires courage that must be chosen.`,
    takeaway: `Understanding alone is not enough — courage to act on it must also be chosen.`,
    tags: ['courage', 'duty']
  },
  '2.4': {
    sanskrit: `अर्जुन उवाच
कथं भीष्ममहं सङ्ख्ये द्रोणं च मधुसूदन।
इषुभिः प्रतियोत्स्यामि पूजार्हावरिसूदन॥`,
    telugu: `అర్జునుడు పలికెను:
మధుసూదనా, భీష్ముని మరియు ద్రోణుని పూజించవలసిన వారిని నేను యుద్ధంలో బాణాలతో ఎలా ఎదుర్కొందును?`,
    english: `Arjuna said: O Madhusudana, how can I counterattack Bhishma and Drona with arrows in battle, as they are worthy of worship, O destroyer of enemies?`,
    explanation: `Arjuna's dilemma is real: can one fight those who deserve reverence? This tension between duty and devotion to elders is deeply human. The Gita does not dismiss the question but answers it within a larger understanding of the soul, duty, and action.`,
    takeaway: `True respect for elders does not always mean submission — sometimes duty calls us to stand against even those we revere.`,
    tags: ['duty', 'wisdom']
  },
  '2.5': {
    sanskrit: `गुरूनहत्वा हि महानुभावान्
श्रेयो भोक्तुं भैक्ष्यमपीह लोके।
हत्वार्थकामांस्तु गुरूनिहैव
भुञ्जीय भोगान्रुधिरप्रदिग्धान्॥`,
    telugu: `మహానుభావులైన గురువులను చంపకుండా ఈ లోకంలో భిక్షాన్నం తినడం శ్రేయస్కరం. అర్థకాముకులైన గురువులను చంపి, రక్తసిక్తమైన భోగాలను ఇక్కడే అనుభవిస్తాం.`,
    english: `It is better to live even in this world by begging than to slay these noble teachers. If I kill them, I would be enjoying wealth and pleasures stained with their blood.`,
    explanation: `Arjuna expresses a profound moral intuition: no material gain is worth the sin of killing one's teachers. The Gita will complicate this, but the underlying principle stands — some values cannot be traded for worldly gain.`,
    takeaway: `Some principles are worth more than any material gain — honor them.`,
    tags: ['wisdom', 'compassion']
  },
  '2.6': {
    sanskrit: `न चैतद्विद्मः कतरन्नो गरीयो
यद्वा जयेम यदि वा नो जयेयुः।
यानेव हत्वा न जिजीविषामस्
तेऽवस्थिताः प्रमुखे धार्तराष्ट्राः॥`,
    telugu: `గెలవడం మేలో, వారు గెలవడం మేలో అని కూడా మాకు తెలియడం లేదు. ఎవరిని చంపిన తర్వాత జీవించాలని లేదో, ఆ ధృతరాష్ట్రుని పుత్రులే మన ముందు నిలిచి ఉన్నారు.`,
    english: `We do not know which is better for us — whether we should conquer them or they should conquer us. The sons of Dhritarashtra stand before us; if we kill them we do not wish to live.`,
    explanation: `Arjuna admits complete confusion about what outcome would even be good. This is the deepest form of the crisis: when you cannot even define what winning would mean. This honest acknowledgment of not-knowing opens the door to receiving wisdom.`,
    takeaway: `Admitting you do not know what is best is the door through which wisdom enters.`,
    tags: ['wisdom', 'truth']
  },
  '2.7': {
    sanskrit: `कार्पण्यदोषोपहतस्वभावः
पृच्छामि त्वां धर्मसम्मूढचेताः।
यच्छ्रेयः स्यान्निश्चितं ब्रूहि तत्मे
शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम्॥`,
    telugu: `కారుణ్యదోషంతో క్షీణించిన స్వభావంతో, ధర్మం విషయంలో సందిగ్ధ చిత్తంతో నిన్ను అడుగుతున్నాను. ఏది నిశ్చయంగా శ్రేయమో అది చెప్పు. నేను నీ శిష్యుడను, నీకు శరణాగతుడనైన నన్ను బోధించు.`,
    english: `My nature is overcome by the weakness of compassion; my mind is confused about duty. I ask you: tell me clearly what is good for me. I am your disciple; teach me, who has taken refuge in you.`,
    explanation: `Arjuna takes the most courageous step: he surrenders his pride and declares himself a student. This is where the Gita truly begins. Real learning requires the humility to say 'I don't know — please teach me.'`,
    takeaway: `True learning begins when we have the courage to say: I don't know — please teach me.`,
    tags: ['wisdom', 'surrender']
  },
  '2.8': {
    sanskrit: `न हि प्रपश्यामि ममापनुद्याद्
यच्छोकमुच्छोषणमिन्द्रियाणाम्।
अवाप्य भूमावसपत्नमृद्धं
राज्यं सुराणामपि चाधिपत्यम्॥`,
    telugu: `ఇంద్రియాలను వాడిపోయేలా చేస్తున్న నా శోకాన్ని పోగొట్టేదేదీ నాకు కనిపించడం లేదు. భూమిపై శత్రురహితమైన సంపన్న రాజ్యం పొందినా, దేవతలకు ఆధిపత్యం పొందినా.`,
    english: `I do not see what would remove this grief which is drying up my senses, even if I were to obtain an unrivalled prosperous kingdom on earth or even sovereignty over the gods.`,
    explanation: `Arjuna recognizes something profound: no external gain can remove this kind of sorrow. This is the Gita's first great insight — the source of genuine happiness is not in the outer world. This recognition is itself the beginning of wisdom.`,
    takeaway: `Some sorrows cannot be cured by any external gain — their cure lies within.`,
    tags: ['wisdom', 'peace']
  },
  '2.9': {
    sanskrit: `सञ्जय उवाच
एवमुक्त्वा हृषीकेशं गुडाकेशः परन्तप।
न योत्स्य इति गोविन्दमुक्त्वा तूष्णीं बभूव ह॥`,
    telugu: `సంజయుడు పలికెను:
పరంతపుడైన గుడాకేశుడు హృషీకేశునికి ఇలా చెప్పి, 'నేను యుద్ధం చేయను' అని గోవిందునితో పలికి మౌనం వహించాడు.`,
    english: `Sanjaya said: Having spoken thus to Hrishikesha, Gudakesha said to Govinda, 'I shall not fight,' and became silent.`,
    explanation: `Arjuna says 'I will not fight' and falls silent. Sometimes we need to reach the end of our own resources before we can truly receive help. This silence is not defeat — it is the silence that precedes transformation.`,
    takeaway: `The silence after we have exhausted our own resources is where transformation begins.`,
    tags: ['wisdom', 'surrender']
  },
  '2.10': {
    sanskrit: `तमुवाच हृषीकेशः प्रहसन्निव भारत।
सेनयोरुभयोर्मध्ये विषीदन्तमिदं वचः॥`,
    telugu: `భరతవంశీయుడా, ఉభయ సైన్యాల మధ్య విషాదంలో ఉన్న అతనితో హృషీకేశుడు నవ్వినట్లుగా ఈ మాటలు పలికాడు.`,
    english: `To him who was grieving thus in the midst of the two armies, Hrishikesha spoke these words with a smile, O Bharata.`,
    explanation: `Krishna smiles as he begins his teaching. This smile is not mockery — it is the gentle confidence of wisdom that sees the solution clearly even when the student cannot. True teachers do not panic at their student's confusion.`,
    takeaway: `True wisdom is calm and even joyful in the face of confusion — it sees the solution the student cannot yet see.`,
    tags: ['wisdom', 'peace']
  },
  '2.11': {
    sanskrit: `श्रीभगवानुवाच
अशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे।
गतासूनगतासूंश्च नानुशोचन्ति पण्डिताः॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
నువ్వు శోకింపతగనివారి కొరకు శోకిస్తున్నావు మరియు జ్ఞానవాక్యాలు మాట్లాడుతున్నావు. జీవులున్నవారి కొరకు గాని, లేనివారి కొరకు గాని పండితులు శోకించరు.`,
    english: `The Blessed Lord said: You grieve for those who should not be grieved for, yet you speak words of wisdom. The wise grieve neither for the living nor for the dead.`,
    explanation: `Krishna's first teaching: you mourn those who should not be mourned. The wise understand that the soul is eternal — neither the living nor the dead are truly lost. This is not callousness but a deeper understanding of what a person truly is.`,
    takeaway: `Understanding the eternal nature of the soul transforms how we relate to loss.`,
    tags: ['wisdom', 'soul']
  },
  '2.12': {
    sanskrit: `न त्वेवाहं जातु नासं न त्वं नेमे जनाधिपाः।
न चैव न भविष्यामः सर्वे वयमतः परम्॥`,
    telugu: `వాస్తవానికి నేను ఎప్పుడు లేనట్లు కాదు, నువ్వు లేనట్లు కాదు, ఈ రాజులు లేనట్లు కాదు. మనమందరం ఇక ముందు కూడా ఉంటాము.`,
    english: `Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be.`,
    explanation: `Krishna states one of the Gita's central truths: the Self has always existed and will always exist. This is not a belief to be accepted blindly but an insight to be explored. What is the 'I' that was never born and will never die?`,
    takeaway: `Explore the deepest question: what is the 'I' that was never born and will never die?`,
    tags: ['soul', 'wisdom']
  },
  '2.13': {
    sanskrit: `देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा।
तथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति॥`,
    telugu: `జీవాత్మకు ఈ శరీరంలో బాల్యం, యవ్వనం, వృద్ధాప్యం వచ్చినట్లు, మరొక శరీరం పొందడం జరుగుతుంది. ధీరుడు దీనికి మోహించడు.`,
    english: `Just as the embodied soul passes through childhood, youth, and old age in this body, so too it passes into another body. The wise are not deluded by this.`,
    explanation: `The soul moves through phases like a person moves through life stages. We don't grieve the end of childhood — we recognize it as natural growth. Similarly, the soul's change of body is a natural transition, not a tragedy.`,
    takeaway: `You are not the body that changes; you are the one who experiences the change.`,
    tags: ['soul', 'wisdom']
  },
  '2.14': {
    sanskrit: `मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।
आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥`,
    telugu: `కౌంతేయా, చలి-వేడి, సుఖ-దుఃఖాలను ఇచ్చే ఇంద్రియ స్పర్శలు వచ్చి పోతూ ఉంటాయి. అవి నిత్యం ఉండవు. భరతవంశీయుడా, వాటిని సహించు.`,
    english: `O Kaunteya, the contacts of senses with their objects give rise to cold and heat, pleasure and pain. They come and go and are impermanent. Endure them, O Bharata.`,
    explanation: `Pleasure and pain, like winter and summer, come and go. They are temporary visitors, not permanent residents. If we remember this in our best moments and our worst, we can stay more balanced through both.`,
    takeaway: `Pleasure and pain are like seasons — they come and go. Stay steady through both.`,
    tags: ['peace', 'self-control']
  },
  '2.15': {
    sanskrit: `यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ।
समदुःखसुखं धीरं सोऽमृतत्वाय कल्पते॥`,
    telugu: `పురుషోత్తమా, ఈ (సుఖ దుఃఖాదులు) ఏ పురుషుని వ్యథకు గురి చేయవో, సుఖ దుఃఖాలలో సమంగా ఉండే ఆ ధీరుడు అమృతత్వానికి అర్హుడవుతాడు.`,
    english: `O best among men, the one whom these do not distress, who is steady in pleasure and pain — that wise one is fit for immortality.`,
    explanation: `The one who remains steady through both pleasure and pain becomes fit for liberation. This steadiness is not emotional numbness — it is a deep rootedness that allows full engagement without being swept away. This is the spiritual ideal.`,
    takeaway: `Steadiness through both pleasure and pain is the mark of genuine maturity.`,
    tags: ['peace', 'soul']
  },
  '2.16': {
    sanskrit: `नासतो विद्यते भावो नाभावो विद्यते सतः।
उभयोरपि दृष्टोऽन्तस्त्वनयोस्तत्त्वदर्शिभिः॥`,
    telugu: `అసత్తునకు ఉనికి లేదు, సత్తునకు అభావం లేదు. ఈ రెండింటి యొక్క సత్యం తత్త్వదర్శులచే చూడబడింది.`,
    english: `The unreal has no being; the real never ceases to be. The truth about both has been seen by seers of the truth.`,
    explanation: `What is truly real never ceases to exist; what is unreal never truly exists. The soul is real and eternal; the body is temporary. This distinction, once understood, changes how we relate to loss, change, and death.`,
    takeaway: `Learn to distinguish between what is permanent and what is passing — build your life on the permanent.`,
    tags: ['wisdom', 'truth']
  },
  '2.17': {
    sanskrit: `अविनाशि तु तद्विद्धि येन सर्वमिदं ततम्।
विनाशमव्ययस्यास्य न कश्चित्कर्तुमर्हति॥`,
    telugu: `ఈ సమస్తమూ ఏదానిచే వ్యాపింపబడి ఉన్నదో, దానిని అవినాశి అని తెలుసుకో. ఈ అవ్యయమైన దానిని నశింపజేయడానికి ఎవ్వరూ సమర్థులు కారు.`,
    english: `Know that to be indestructible by which all this is pervaded. None can cause the destruction of the imperishable.`,
    explanation: `The Self that pervades all things cannot be destroyed by anything. This is not a comforting story — it is an invitation to discover directly what cannot be taken away. That which is permanent is your true identity.`,
    takeaway: `Discover what in you cannot be taken away — that is your true self.`,
    tags: ['soul', 'wisdom']
  },
  '2.18': {
    sanskrit: `अन्तवन्त इमे देहा नित्यस्योक्ताः शरीरिणः।
अनाशिनोऽप्रमेयस्य तस्माद्युध्यस्व भारत॥`,
    telugu: `ఈ శరీరాలకు అంతం ఉంది. నిత్యుడు, వినాశరహితుడు, అప్రమేయుడైన శరీరి (ఆత్మ) కి అంతం లేదు. కాబట్టి భరతవంశీయుడా, యుద్ధం చేయి.`,
    english: `These physical bodies are said to have an end, but the eternal soul is indestructible, immeasurable. Therefore fight, O Bharata.`,
    explanation: `Bodies end; the soul does not. Therefore, grieve not for the body — engage in your duty. This logic may seem cold until we truly understand the soul's nature. The Gita invites us to do that deeper work of understanding.`,
    takeaway: `Understanding the soul's immortality changes how we face every loss.`,
    tags: ['soul', 'duty']
  },
  '2.19': {
    sanskrit: `य एनं वेत्ति हन्तारं यश्चैनं मन्यते हतम्।
उभौ तौ न विजानीतो नायं हन्ति न हन्यते॥`,
    telugu: `ఇది చంపేది అని ఎవరైతే తలుస్తారో, ఇది చంపబడుతుందని ఎవరైతే తలుస్తారో, వారిద్దరూ తెలుసుకోరు. ఇది చంపదు మరియు చంపబడదు.`,
    english: `One who thinks that this (soul) is a slayer and one who thinks it is slain — both of them fail to perceive the truth. The soul neither slays, nor is it slain.`,
    explanation: `The soul is neither the killer nor the killed. This profound truth dissolves the deepest fear: the soul is beyond violence. Understanding this does not make violence trivial — it makes the reality of the soul more, not less, significant.`,
    takeaway: `Understanding the soul's true nature resolves the deepest fears about life and death.`,
    tags: ['soul', 'wisdom']
  },
  '2.20': {
    sanskrit: `न जायते म्रियते वा कदाचिन्
नायं भूत्वा भविता वा न भूयः।
अजो नित्यः शाश्वतोऽयं पुराणो
न हन्यते हन्यमाने शरीरे॥`,
    telugu: `ఇది ఎప్పుడు జన్మించదు, మరణించదు. ఇది జన్మించి తిరిగి ఉండదు. పుట్టనిది, నిత్యమైనది, శాశ్వతమైనది, పురాతనమైనది అయిన ఇది శరీరం హతమైనప్పుడు కూడా హతమవదు.`,
    english: `The soul is never born nor does it die at any time. It has not come into being, does not come into being, and will not come into being. It is unborn, eternal, ever-existing, and primeval. It is not slain when the body is slain.`,
    explanation: `This verse gives the full portrait of the soul: unborn, undying, eternal, ancient. These qualities describe something that transcends all physical categories. The invitation is not to believe this statement but to discover its truth through inquiry and experience.`,
    takeaway: `The soul has qualities that no physical thing possesses — explore what that means.`,
    tags: ['soul', 'wisdom']
  },
  '2.21': {
    sanskrit: `वेदाविनाशिनं नित्यं य एनमजमव्ययम्।
कथं स पुरुषः पार्थ कं घातयति हन्ति कम्॥`,
    telugu: `పార్థా, ఈ ఆత్మ అవినాశి, నిత్యుడు, అజుడు, అవ్యయుడు అని తెలిసినవాడు ఎవరిని చంపిస్తాడు, ఎవరిని చంపుతాడు?`,
    english: `O Partha, how can a person who knows that the soul is indestructible, eternal, unborn, and immutable kill anyone or cause anyone to be killed?`,
    explanation: `If the soul cannot be destroyed, who is the killer and who is killed? This question dissolves the false identification with the body that creates the fear of killing and being killed. It is an invitation to a new level of understanding.`,
    takeaway: `Knowledge of the soul's true nature dissolves false fears and false identities.`,
    tags: ['soul', 'wisdom']
  },
  '2.22': {
    sanskrit: `वासांसि जीर्णानि यथा विहाय
नवानि गृह्णाति नरोऽपराणि।
तथा शरीराणि विहाय जीर्णा
न्यन्यानि संयाति नवानि देही॥`,
    telugu: `మనుషుడు పాత బట్టలను విడిచి కొత్త బట్టలు ధరించినట్లు, జీవాత్మ పాత శరీరాన్ని విడిచి కొత్త శరీరాన్ని పొందుతుంది.`,
    english: `As a person puts on new garments, giving up old ones, similarly, the soul accepts new material bodies, giving up the old and useless ones.`,
    explanation: `Death is like changing clothes — the soul moves on, not the person. This beautiful image teaches that what we are is not the body we inhabit. The real 'us' continues, grows, and evolves beyond any single physical form.`,
    takeaway: `The body is like clothing; the soul simply moves on to the next phase.`,
    tags: ['soul', 'wisdom']
  },
  '2.23': {
    sanskrit: `नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावकः।
न चैनं क्लेदयन्त्यापो न शोषयति मारुतः॥`,
    telugu: `ఆయుధాలు ఆత్మను ఖండించలేవు, అగ్ని దహించలేదు, నీరు తడపలేదు, గాలి ఆర్పలేదు.`,
    english: `The soul can never be cut by any weapon, nor burned by fire, nor moistened by water, nor withered by the wind.`,
    explanation: `The four classical elements — weapons (earth), fire, water, wind — cannot touch the soul. This verse speaks to the absolute indestructibility of consciousness. What we truly are cannot be harmed by any physical force.`,
    takeaway: `What you truly are cannot be harmed by any force in the physical world.`,
    tags: ['soul', 'fearlessness']
  },
  '2.24': {
    sanskrit: `अच्छेद्योऽयमदाह्योऽयमक्लेद्योऽशोष्य एव च।
नित्यः सर्वगतः स्थाणुरचलोऽयं सनातनः॥`,
    telugu: `ఇది ఖండించబడనిది, దహింపబడనిది, తడపబడనిది, ఆర్పబడనిది. ఇది నిత్యమైనది, సర్వవ్యాపకమైనది, స్థిరమైనది, అచలమైనది, సనాతనమైనది.`,
    english: `This soul is unbreakable and insoluble, and can be neither burned nor dried. It is everlasting, present everywhere, unchangeable, immovable, and eternally the same.`,
    explanation: `The soul's qualities are expanded: present everywhere, unchangeable, immovable, eternal. These qualities describe not an object but the ground of consciousness itself — that which knows, but cannot itself be an object of knowing.`,
    takeaway: `Contemplate the witness within — the one that knows but cannot be known as an object.`,
    tags: ['soul', 'wisdom']
  },
  '2.25': {
    sanskrit: `अव्यक्तोऽयमचिन्त्योऽयमविकार्योऽयमुच्यते।
तस्मादेवं विदित्वैनं नानुशोचितुमर्हसि॥`,
    telugu: `ఇది అవ్యక్తమైనది, అచింత్యమైనది, అవికార్యమైనదని చెప్పబడుతుంది. కాబట్టి దీన్ని ఈ విధంగా తెలుసుకుని నువ్వు శోకించడం తగదు.`,
    english: `It is said that the soul is invisible, inconceivable, and immutable. Knowing this, you should not grieve for the body.`,
    explanation: `The soul is invisible to physical eyes, beyond ordinary thought, unchanging. Knowing this transforms grief. We grieve for what is lost — but if the soul cannot be lost, what are we grieving for? This is the liberating question.`,
    takeaway: `When you truly know what cannot be lost, grief for what can be lost finds its proper proportion.`,
    tags: ['soul', 'wisdom']
  },
  '2.26': {
    sanskrit: `अथ चैनं नित्यजातं नित्यं वा मन्यसे मृतम्।
तथापि त्वं महाबाहो नैवं शोचितुमर्हसि॥`,
    telugu: `మహాబాహో, ఒకవేళ నువ్వు ఇది నిత్యం జన్మిస్తుందని లేదా నిత్యం మరణిస్తుందని తలిస్తే కూడా, నువ్వు ఇలా శోకించడం తగదు.`,
    english: `If, however, you think that the soul is perpetually born and always dies, still you have no reason to lament, O mighty-armed.`,
    explanation: `Even if one doesn't accept the soul's eternity — even if birth and death are real — grief is still not the right response. Death is part of nature. The wise accept what is natural without being paralyzed by it.`,
    takeaway: `Accept what is natural and inevitable — response through wisdom, not paralysis.`,
    tags: ['wisdom', 'peace']
  },
  '2.27': {
    sanskrit: `जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च।
तस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि॥`,
    telugu: `జన్మించినవానికి మరణం నిశ్చయం, మరణించినవానికి జన్మ నిశ్చయం. కాబట్టి అనివార్యమైన విషయంలో నువ్వు శోకించడం తగదు.`,
    english: `For the born, death is certain; for the dead, birth is certain. Therefore, for what is unavoidable, you should not grieve.`,
    explanation: `Birth and death are the two certainties of embodied existence. Grieving what is inevitable is like grieving winter's arrival. Accept what cannot be changed; focus your energy on how you respond to what is given.`,
    takeaway: `Accept what cannot be changed; direct your energy to how you respond to it.`,
    tags: ['wisdom', 'peace']
  },
  '2.28': {
    sanskrit: `अव्यक्तादीनि भूतानि व्यक्तमध्यानि भारत।
अव्यक्तनिधनान्येव तत्र का परिदेवना॥`,
    telugu: `భరతవంశీయుడా, భూతాలు ఆదిలో అవ్యక్తాలు, మధ్యలో వ్యక్తాలు, అంతానికి తిరిగి అవ్యక్తాలు. అంతట ఏమి దుఃఖపడటం?`,
    english: `All beings, O Bharata, are unmanifest before birth, manifest between birth and death, and unmanifest again after death. What is there to grieve?`,
    explanation: `Before we were born, we were unknown to the world. We will again become unknown. The visible period in between is a brief appearance. From this larger view, what seems like loss is simply return to the original state.`,
    takeaway: `See life from the largest possible perspective — what seems like loss is often a return.`,
    tags: ['wisdom', 'soul']
  },
  '2.29': {
    sanskrit: `आश्चर्यवत्पश्यति कश्चिदेन
माश्चर्यवद्वदति तथैव चान्यः।
आश्चर्यवच्चैनमन्यः शृणोति
श्रुत्वाप्येनं वेद न चैव कश्चित्॥`,
    telugu: `ఎవరైనా ఆత్మను ఆశ్చర్యంగా చూస్తారు, మరొకరు ఆశ్చర్యంగా చెప్తారు, ఇంకొకరు ఆశ్చర్యంగా వింటారు. విన్న తర్వాత కూడా ఎవ్వరూ దీన్ని తెలుసుకోలేరు.`,
    english: `Some see the soul as amazing, some describe it as amazing, some hear of it as amazing, and some, even after hearing about it, cannot understand it at all.`,
    explanation: `The soul is the greatest mystery — spoken of with wonder, yet rarely truly understood. This verse invites us not just to hear about the soul but to actually seek the direct experience of what it is. That discovery is the purpose of all spiritual practice.`,
    takeaway: `Don't just hear about the soul — seek the direct experience of what you truly are.`,
    tags: ['soul', 'wisdom']
  },
  '2.30': {
    sanskrit: `देही नित्यमवध्योऽयं देहे सर्वस्य भारत।
तस्मात्सर्वाणि भूतानि न त्वं शोचितुमर्हसि॥`,
    telugu: `భరతవంశీయుడా, ప్రతి ప్రాణి యొక్క శరీరంలోని ఆత్మ నిత్యం వధింపరానిది. కాబట్టి నువ్వు ఏ ప్రాణికి అయినా శోకించడం తగదు.`,
    english: `O Bharata, the dweller in the body can never be slain. Therefore you should not grieve for any being.`,
    explanation: `The soul in every body is indestructible. This is not just about Arjuna's relatives — it is about every being. When this is truly understood, our relationship to all life changes. We begin to see each being as carrying something eternal and sacred.`,
    takeaway: `Every being carries an eternal soul — this understanding transforms how we treat others.`,
    tags: ['soul', 'compassion']
  },
  '2.31': {
    sanskrit: `स्वधर्ममपि चावेक्ष्य न विकम्पितुमर्हसि।
धर्म्याद्धि युद्धाच्छ्रेयोऽन्यत्क्षत्रियस्य न विद्यते॥`,
    telugu: `స్వధర్మాన్ని చూసినా నువ్వు వణుకుటకు తగదు. ధర్మయుద్ధం కంటే క్షత్రియుడికి శ్రేయస్కరమైనది మరొకటి లేదు.`,
    english: `Considering your own dharma, you should not waver, for there is nothing better for a warrior than a righteous battle.`,
    explanation: `Arjuna has a specific duty as a warrior. Abandoning it would betray who he is. Each person has a dharma — a role and responsibility arising from their nature. Fulfilling it with integrity is the path of growth.`,
    takeaway: `Know your dharma and fulfill it with integrity — this is the path of genuine growth.`,
    tags: ['duty', 'courage']
  },
  '2.32': {
    sanskrit: `यदृच्छया चोपसृष्टं स्वर्गद्वारमपावृतम्।
सुखिनः क्षत्रियाः पार्थ लभन्ते युद्धमीदृशम्॥`,
    telugu: `పార్థా, అదృష్టవశాత్తు వచ్చిన, తెరుచుకున్న స్వర్గ ద్వారమైన ఇటువంటి యుద్ధాన్ని సుఖులైన క్షత్రియులు పొందుతారు.`,
    english: `O Partha, happy are the warriors to whom such a war comes of its own accord as an open door to heaven.`,
    explanation: `A righteous battle that comes to a warrior is actually a gift — the opportunity to fulfill one's highest purpose. When we are given the opportunity to do what is right at great personal cost, we should recognize it as a privilege, not a burden.`,
    takeaway: `The call to do what is right at great personal cost is a privilege, not just a burden.`,
    tags: ['duty', 'courage']
  },
  '2.33': {
    sanskrit: `अथ चेत्त्वमिमं धर्म्यं सङ्ग्रामं न करिष्यसि।
ततः स्वधर्मं कीर्तिं च हित्वा पापमवाप्स्यसि॥`,
    telugu: `ఒకవేళ నువ్వు ఈ ధర్మయుద్ధం చేయకపోతే, అప్పుడు స్వధర్మాన్ని మరియు కీర్తిని విడిచి పాపాన్ని పొందుతావు.`,
    english: `But if you do not perform this righteous duty, you will abandon your own dharma and fame and incur sin.`,
    explanation: `Not acting is also an action with consequences. Choosing to avoid a difficult but righteous duty does not make us innocent — it makes us responsible for what unfolds from that avoidance. There is no neutral ground in moral life.`,
    takeaway: `Choosing to avoid a difficult but righteous duty is itself a choice with real consequences.`,
    tags: ['duty', 'courage']
  },
  '2.34': {
    sanskrit: `अकीर्तिं चापि भूतानि कथयिष्यन्ति तेऽव्ययाम्।
सम्भावितस्य चाकीर्तिर्मरणादतिरिच्यते॥`,
    telugu: `ఇంకా ప్రాణులు నీ అపకీర్తిని పలుమారు చెప్తారు. గౌరవం పొందిన వానికి అపకీర్తి మరణం కంటే మిన్న.`,
    english: `People will speak of your infamy forever, and for a person who has been honored, dishonor is worse than death.`,
    explanation: `A person known for excellence who then fails at the crucial moment — the loss of integrity is more painful than any physical defeat. Our reputation is built over a lifetime of choices; it can be undone in a single moment of failure.`,
    takeaway: `Guard your integrity — it is built over a lifetime but can be lost in a moment.`,
    tags: ['duty', 'courage']
  },
  '2.35': {
    sanskrit: `भयाद्रणादुपरतं मंस्यन्ते त्वां महारथाः।
येषां च त्वं बहुमतो भूत्वा यास्यसि लाघवम्॥`,
    telugu: `మహారథులు నిన్ను భయంతో యుద్ధం నుండి వెనక్కి తగ్గావని అనుకుంటారు. వారిచే గొప్పగా పరిగణించబడిన నువ్వు చులకనవుతావు.`,
    english: `The great warriors who have highly esteemed you will think that you have left the battlefield out of fear, and you will be considered insignificant by them.`,
    explanation: `The respect of those who know us best is precious and fragile. When we abandon our duty out of fear dressed as compassion, those who know us best will see through it. The courage to do what is right earns lasting respect.`,
    takeaway: `Earn lasting respect by doing what is right, especially when it is hard.`,
    tags: ['courage', 'duty']
  },
  '2.36': {
    sanskrit: `अवाच्यवादांश्च बहून्वदिष्यन्ति तवाहिताः।
निन्दन्तस्तव सामर्थ्यं ततो दुःखतरं नु किम्॥`,
    telugu: `నీ శత్రువులు నిన్ను అనేక అసంబద్ధ మాటలు పలికి, నీ సామర్థ్యాన్ని నిందిస్తారు. దానికంటే దుఃఖకరమైనది ఏది?`,
    english: `Your enemies will speak many unkind words and scorn your ability. What could be more painful than that?`,
    explanation: `When we fail to fulfill our duty, those who wish us ill will find the opportunity to mock and diminish us. While we should not act out of fear of others' opinions alone, the pain of justified criticism is real and worth preventing by acting rightly.`,
    takeaway: `Act rightly so that your enemies have nothing truthful to say against you.`,
    tags: ['courage', 'duty']
  },
  '2.37': {
    sanskrit: `हतो वा प्राप्स्यसि स्वर्गं जित्वा वा भोक्ष्यसे महीम्।
तस्मादुत्तिष्ठ कौन्तेय युद्धाय कृतनिश्चयः॥`,
    telugu: `చనిపోతే స్వర్గాన్ని పొందుతావు, జయిస్తే భూమిని అనుభవిస్తావు. కాబట్టి కౌంతేయా, నిశ్చయించుకుని యుద్ధానికి లేచి నిలువు.`,
    english: `Either you will be killed and attain heaven, or you will conquer and enjoy the kingdom. Therefore, arise, O Kaunteya, and be determined to fight.`,
    explanation: `Both outcomes of righteous action — victory or noble death — have value. When the cause is right, there is no losing. This liberating understanding removes the paralysis of outcome-fixation and frees us to act with full commitment.`,
    takeaway: `When the cause is right, both outcomes have value — act with full commitment.`,
    tags: ['courage', 'duty']
  },
  '2.38': {
    sanskrit: `सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ।
ततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि॥`,
    telugu: `సుఖ దుఃఖాలను, లాభ నష్టాలను, జయ అపజయాలను సమంగా భావించి యుద్ధానికి సిద్ధమవు. ఆ విధంగా పాపం నీకు అంటదు.`,
    english: `Having made pleasure and pain, gain and loss, victory and defeat equal, engage in battle for the sake of battle. Thus you will not incur sin.`,
    explanation: `Equanimity toward all outcomes — success and failure alike — is what purifies action of its burden. When we act without grasping at victory or fearing defeat, we act from our deepest freedom. This is the practice of karma yoga.`,
    takeaway: `Act fully, but hold the outcomes lightly — this is the practice of inner freedom.`,
    tags: ['action', 'detachment']
  },
  '2.39': {
    sanskrit: `एषा तेऽभिहिता साङ्ख्ये बुद्धिर्योगे त्विमां श्रृणु।
बुद्ध्या युक्तो यया पार्थ कर्मबन्धं प्रहास्यसि॥`,
    telugu: `ఇది నీకు సాంఖ్యంలో బుద్ధి చెప్పబడింది. ఇక యోగంలోని దీన్ని వినుము. పార్థా, ఈ బుద్ధితో యుక్తుడవై కర్మబంధాన్ని విడిచిపెడతావు.`,
    english: `This wisdom has been described to you with regard to Sankhya. Now listen as I speak about yoga; being equiped with this, you will free yourself from the bondage of action.`,
    explanation: `Krishna transitions from wisdom about the soul (Sankhya) to wisdom about action (Yoga). These are two wings of the same understanding. Knowledge without right action remains incomplete; action without knowledge remains blind.`,
    takeaway: `Knowledge and right action together form the complete path — neither alone is sufficient.`,
    tags: ['wisdom', 'action']
  },
  '2.40': {
    sanskrit: `नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते।
स्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात्॥`,
    telugu: `ఈ మార్గంలో ప్రయత్నం వ్యర్థమవదు, విఘ్నం కలుగదు. ఈ ధర్మంలో అల్పమైన ప్రయత్నం కూడా మహాభయం నుండి రక్షిస్తుంది.`,
    english: `In this path there is no loss of effort, no adverse result. Even a little practice of this discipline protects one from great fear.`,
    explanation: `No sincere step on the spiritual path is ever wasted. This is deeply reassuring: we do not need to be perfect to benefit. Even a little genuine practice creates protection and progress. Begin wherever you are with whatever you have.`,
    takeaway: `Every sincere step on the path of wisdom counts — no effort is ever wasted.`,
    tags: ['action', 'faith']
  },
  '2.41': {
    sanskrit: `व्यवसायात्मिका बुद्धिरेकेह कुरुनन्दन।
बहुशाखा ह्यनन्ताश्च बुद्धयोऽव्यवसायिनाम्॥`,
    telugu: `కురుసంతానమా, ఇందులో నిశ్చయాత్మకమైన బుద్ధి ఏకమైనది. నిశ్చయంలేని వారి బుద్ధులు అనేక శాఖలు, అనంతాలు.`,
    english: `O descendant of Kuru, those who are on this path are resolute in purpose, and their aim is one. But the thoughts of the irresolute are many-branched and endless.`,
    explanation: `Single-pointed purpose is the key to effective action. A mind that is certain of its direction moves forward; a mind scattered in endless considerations moves in circles. Clarity of purpose is not arrogance — it is the prerequisite for meaningful achievement.`,
    takeaway: `Clarity of purpose is the prerequisite for meaningful achievement — resolve first.`,
    tags: ['action', 'discipline']
  },
  '2.42': {
    sanskrit: `यामिमां पुष्पितां वाचं प्रवदन्त्यविपश्चितः।
वेदवादरताः पार्थ नान्यदस्तीति वादिनः॥`,
    telugu: `పార్థా, వేదవాదాల్లో రక్తి గలిగి, 'ఇది మాత్రమే ఉంది' అని వాదించే అజ్ఞానులు ఈ పుష్పభాష (ఆడంబరమైన మాటలు) చెప్తారు.`,
    english: `O Partha, those of poor understanding who are attached to the flowery language of the Vedas, and who say there is nothing else, speak this flowery speech.`,
    explanation: `People who cling to the outer forms of knowledge without grasping its inner meaning speak impressive-sounding but ultimately hollow words. Genuine understanding goes beyond language, ritual, and tradition to the living truth these point toward.`,
    takeaway: `True knowledge lives beyond words and rituals — point to the living truth within.`,
    tags: ['wisdom', 'truth']
  },
  '2.43': {
    sanskrit: `कामात्मानः स्वर्गपरा जन्मकर्मफलप्रदाम्।
क्रियाविशेषबहुलां भोगैश्वर्यगतिं प्रति॥`,
    telugu: `కోరికలతో ఆత్మలు నిండి, స్వర్గమే పరమగతిగా భావించి, భోగ ఐశ్వర్యాల కొరకు పునర్జన్మకు దారితీసే క్రియావిశేషాలను చెప్తారు.`,
    english: `They are full of desires, and their goal is heaven, which provides re-birth as its fruit. They speak many flowery words prescribing various rituals for the attainment of pleasures and power.`,
    explanation: `Seeking only pleasure and power — even through spiritual means — keeps us cycling in the same patterns of desire and disappointment. The Gita points beyond merit and heaven to actual liberation — freedom from the entire cycle.`,
    takeaway: `Seek liberation from the cycle of desire and reward, not just better positions within it.`,
    tags: ['wisdom', 'detachment']
  },
  '2.44': {
    sanskrit: `भोगैश्वर्यप्रसक्तानां तयापहृतचेतसाम्।
व्यवसायात्मिका बुद्धिः समाधौ न विधीयते॥`,
    telugu: `భోగ ఐశ్వర్యాల్లో ఆసక్తులై, వాటిచే హరించబడిన చిత్తం గలవారికి, నిశ్చయాత్మకమైన బుద్ధి సమాధిలో స్థిరపడదు.`,
    english: `For those who are attached to pleasure and power, who are deluded by such teachings, the steady wisdom of contemplation is never achieved.`,
    explanation: `When the mind is consumed by the pursuit of pleasure and status, it cannot achieve the steady, clear understanding needed for real wisdom. First things first: the mind must be calmed before it can be truly illuminated.`,
    takeaway: `Calm the mind's craving for pleasure and power before seeking deeper wisdom.`,
    tags: ['wisdom', 'self-control']
  },
  '2.45': {
    sanskrit: `त्रैगुण्यविषया वेदा निस्त्रैगुण्यो भवार्जुन।
निर्द्वन्द्वो नित्यसत्त्वस्थो निर्योगक्षेम आत्मवान्॥`,
    telugu: `వేదాలు త్రిగుణ సంబంధమైన విషయాలు చెప్తాయి. అర్జునా, నువ్వు నిస్త్రైగుణ్యుడవు అవు. ద్వంద్వరహితుడవు, నిత్యం సత్వంలో స్థిరుడవు, యోగక్షేమరహితుడవు, ఆత్మవంతుడవు అవు.`,
    english: `The Vedas deal with the three gunas of material nature. Rise above these, O Arjuna. Be free from duality, free from the anxiety of gain and safety, and be established in the Self.`,
    explanation: `The Vedas describe the natural world governed by the three qualities. But Krishna points beyond: rise above the push and pull of these qualities. Be established in the Self that is beyond all qualities. This is the direction of genuine freedom.`,
    takeaway: `Rise above the push and pull of natural tendencies — aim for the Self beyond all qualities.`,
    tags: ['wisdom', 'self-control']
  },
  '2.46': {
    sanskrit: `यावानर्थ उदपाने सर्वतः सम्प्लुतोदके।
तावान्सर्वेषु वेदेषु ब्राह्मणस्य विजानतः॥`,
    telugu: `అన్ని వైపులా నీరు నిండిన మహా జలాశయం ఉన్నపుడు చిన్న నీటి కుంట వల్ల ఎంత ప్రయోజనమో, అంత మాత్రమే ప్రయోజనం తత్వం తెలిసిన బ్రాహ్మణునికి సర్వ వేదాలవల్ల.`,
    english: `As much benefit as there is in a small well of water when there is a flood everywhere, that much benefit is there in all the Vedas for a knower of Brahman.`,
    explanation: `When you have access to a great river, you don't need to search for small wells. When you have direct knowledge of the truth, the specific rituals and prescriptions of scripture are all contained within that larger knowing.`,
    takeaway: `Direct knowledge of truth contains all the guidance of scripture and more.`,
    tags: ['wisdom', 'truth']
  },
  '2.47': {
    sanskrit: `कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।
मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥`,
    telugu: `నీకు కర్మ చేయడంలో మాత్రమే అధికారం ఉంది, ఫలితంలో ఎప్పుడూ లేదు. కర్మ ఫలానికి కారణం అవుతావని భావించకు. కర్మ చేయకుండా ఉండటంలో నీకు అభిమానం ఉండకూడదు.`,
    english: `You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself the cause of the results of your activities, nor be attached to inaction.`,
    explanation: `The most famous verse of the Gita. Do your work completely — but don't obsess over the result. Give your full effort, and then release the outcome. This is the key to acting powerfully without anxiety destroying your effectiveness.`,
    takeaway: `Do your very best without making the outcome your obsession — that is true freedom.`,
    tags: ['action', 'detachment']
  },
  '2.48': {
    sanskrit: `योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।
सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥`,
    telugu: `ధనంజయా, అభిమానం విడిచి, యోగంలో స్థిరుడవై కర్మలు చేయి. సిద్ధి, అసిద్ధి రెండిటిలో సమంగా ఉండు. ఈ సమత్వమే యోగం అని అంటారు.`,
    english: `Be steadfast in yoga, O Arjuna. Perform your duty without attachment, remaining equal in both success and failure. Such equanimity is called yoga.`,
    explanation: `Yoga, defined here, is equanimity — the ability to remain steady in success and failure alike. This is not indifference to outcomes but freedom from being controlled by them. This inner balance is the foundation of sustainable excellence.`,
    takeaway: `True yoga is the inner balance that remains steady through success and failure.`,
    tags: ['action', 'yoga']
  },
  '2.49': {
    sanskrit: `दूरेण ह्यवरं कर्म बुद्धियोगाद्धनञ्जय।
बुद्धौ शरणमन्विच्छ कृपणाः फलहेतवः॥`,
    telugu: `ధనంజయా, బుద్ధి యోగం కంటే (ఫలాశతో చేసే) సాధారణ కర్మ చాలా హీనమైనది. బుద్ధిలో శరణాన్ని వెతుకు. ఫలానికి కారణులు అయ్యే వారు దీనులు.`,
    english: `O Dhananjaya, keep all abominable activities far distant by devotional service, and in that consciousness surrender unto the Lord. Those who want to enjoy the fruits of their work are misers.`,
    explanation: `Wisdom-guided action (buddhi yoga) is far superior to outcome-seeking action. Those who act only for rewards remain spiritually poor regardless of how much they accumulate. The rich life is one lived in the clarity of wisdom, not the anxiety of acquisition.`,
    takeaway: `Act from wisdom, not from craving for reward — this is the key to genuine richness.`,
    tags: ['action', 'wisdom']
  },
  '2.50': {
    sanskrit: `बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते।
तस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम्॥`,
    telugu: `బుద్ధి యుక్తుడు ఇక్కడే పుణ్య పాపాలు రెండూ విడుస్తాడు. కాబట్టి యోగానికి నిన్ను నియోగించుకో. యోగమే కర్మలలో కౌశలం.`,
    english: `A man engaged in devotional service rids himself of both good and evil in this life. Therefore, devote yourself to yoga. Yoga is the art of all work.`,
    explanation: `'Yoga is skill in action' — one of the Gita's most practical definitions. The skilled person is not someone who never fails but someone who brings wisdom, equanimity, and full presence to every action. This is excellence as a way of being.`,
    takeaway: `Yoga is skill in action — bring wisdom and full presence to everything you do.`,
    tags: ['action', 'yoga']
  },
  '2.51': {
    sanskrit: `कर्मजं बुद्धियुक्ता हि फलं त्यक्त्वा मनीषिणः।
जन्मबन्धविनिर्मुक्ताः पदं गच्छन्त्यनामयम्॥`,
    telugu: `బుద్ధి యుక్తులైన మేధావులు కర్మ ఫలాన్ని విడిచి, జన్మ బంధం నుండి విముక్తులై, వ్యాధి రహిత పదాన్ని పొందుతారు.`,
    english: `The wise, engaged in wise action, abandoning the fruits of their actions, are freed from the bondage of birth and attain the state beyond all evil.`,
    explanation: `Releasing attachment to outcomes is not passive resignation — it is the active practice that leads to liberation. Those who act fully while releasing outcomes break the chain of karma that perpetuates cycles of desire and disappointment.`,
    takeaway: `Full action plus released attachment is the formula for freedom from endless cycles.`,
    tags: ['action', 'wisdom']
  },
  '2.52': {
    sanskrit: `यदा ते मोहकलिलं बुद्धिर्व्यतितरिष्यति।
तदा गन्तासि निर्वेदं श्रोतव्यस्य श्रुतस्य च॥`,
    telugu: `నీ బుద్ధి మోహ కలిలాన్ని దాటినప్పుడు, అప్పుడు నువ్వు వినవలసిన దానిలో మరియు వినిన దానిలో వైరాగ్యాన్ని పొందుతావు.`,
    english: `When your intelligence has passed out of the dense forest of delusion, you will become indifferent to all that has been heard and all that is to be heard.`,
    explanation: `As wisdom grows, the mind's craving to consume ever more teachings, opinions, and external guidance naturally settles. The person who knows the truth from within has less need to constantly seek it from without. Inner clarity replaces outer searching.`,
    takeaway: `As wisdom grows within, the restless search for more knowledge from outside naturally settles.`,
    tags: ['wisdom', 'peace']
  },
  '2.53': {
    sanskrit: `श्रुतिविप्रतिपन्ना ते यदा स्थास्यति निश्चला।
समाधावचला बुद्धिस्तदा योगमवाप्स्यसि॥`,
    telugu: `విరుద్ధ విషయాలు విన్నా చలించని, సమాధిలో స్థిరమైన నిశ్చలమైన బుద్ధి నీకు స్థిరపడినప్పుడు, అప్పుడు నువ్వు యోగాన్ని పొందుతావు.`,
    english: `When your mind is no longer disturbed by the flowery language of the Vedas, and when it remains fixed in the trance of self-realization, then you will have attained the divine consciousness.`,
    explanation: `The sign of mature wisdom: the mind stays steady even when contradictory teachings and compelling arguments come at it from all sides. This steadiness is not stubbornness but deep rootedness in direct experience of truth.`,
    takeaway: `Mature wisdom is not moved by contradictory arguments — it is rooted in direct experience.`,
    tags: ['wisdom', 'peace']
  },
  '2.54': {
    sanskrit: `अर्जुन उवाच
स्थितप्रज्ञस्य का भाषा समाधिस्थस्य केशव।
स्थितधीः किं प्रभाषेत किमासीत व्रजेत किम्॥`,
    telugu: `అర్జునుడు పలికెను:
కేశవా, సమాధిలో స్థిరుడైన స్థితప్రజ్ఞుని లక్షణాలేమిటి? స్థిరమైన బుద్ధి గలవాడు ఎలా మాట్లాడతాడు, ఎలా కూర్చుంటాడు, ఎలా నడుస్తాడు?`,
    english: `Arjuna said: O Krishna, what are the signs of one whose wisdom is steady, who is established in deep meditation? How does one of steady wisdom speak, sit, and walk?`,
    explanation: `Arjuna asks the most practical question: what does the wise person actually look and act like? Theory about wisdom is one thing; seeing how it manifests in daily behavior is another. The answer spans the next 18 verses — the Gita's portrait of the ideal human.`,
    takeaway: `Theory about wisdom matters less than what wisdom looks like in daily life — ask for the portrait.`,
    tags: ['wisdom', 'peace']
  },
  '2.55': {
    sanskrit: `श्रीभगवानुवाच
प्रजहाति यदा कामान्सर्वान्पार्थ मनोगतान्।
आत्मन्येवात्मना तुष्टः स्थितप्रज्ञस्तदोच्यते॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
పార్థా, మనస్సులోని సమస్త కోరికలను విడిచినప్పుడు, ఆత్మ యందే ఆత్మతో తృప్తుడైనప్పుడు, అప్పుడు స్థితప్రజ్ఞుడని పిలువబడతాడు.`,
    english: `The Blessed Lord said: O Partha, when a man gives up all varieties of desire which arise from mental concoction, and when his mind finds satisfaction in the Self alone, then he is called one of steady wisdom.`,
    explanation: `The person of steady wisdom is satisfied in themselves — not from all desires being fulfilled but from not needing any particular desire to be fulfilled. This is the deepest freedom: contentment that does not depend on circumstances.`,
    takeaway: `True contentment is not getting all you want — it is needing nothing to be happy.`,
    tags: ['wisdom', 'peace']
  },
  '2.56': {
    sanskrit: `दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः।
वीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते॥`,
    telugu: `దుఃఖాలలో మనస్సు వ్యథపడనివాడు, సుఖాలలో కోరిక లేనివాడు, రాగ భయ క్రోధాలు విడిచినవాడు స్థిరబుద్ధి గల ముని అని పిలువబడతాడు.`,
    english: `One who is not disturbed in mind even amidst the threefold miseries or elated when there is happiness, and who is free from attachment, fear, and anger, is called a sage of steady mind.`,
    explanation: `The person of steady wisdom is not an emotional stone — they experience life fully. But they are not swept away by it. Sorrow does not shatter them; joy does not inflate them. They are free from the compulsive reactions of attachment, fear, and anger.`,
    takeaway: `Engage with life fully but don't be swept away by it — this is the mark of steady wisdom.`,
    tags: ['wisdom', 'peace']
  },
  '2.57': {
    sanskrit: `यः सर्वत्रानभिस्नेहस्तत्तत्प्राप्य शुभाशुभम्।
नाभिनन्दति न द्वेष्टि तस्य प्रज्ञा प्रतिष्ठिता॥`,
    telugu: `ఎవడు అంతటా అభిమానం లేనివాడై, శుభాశుభాలు పొందినప్పుడు సంతోషించడో, ద్వేషించడో — వాని ప్రజ్ञ స్థిరమై ఉంది.`,
    english: `In this world, one who is not affected by whatever good or evil one may obtain, neither rejoicing nor hating — such a person's wisdom is steady.`,
    explanation: `When good things come, the wise person enjoys them without clinging. When bad things come, they face them without aversion. This even-handedness toward all of life's events is the practical sign of wisdom. Nothing 'makes' them happy or unhappy — they bring their own inner state.`,
    takeaway: `When nothing external can 'make' you happy or unhappy, you have found your inner anchor.`,
    tags: ['wisdom', 'peace']
  },
  '2.58': {
    sanskrit: `यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः।
इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता॥`,
    telugu: `తాబేలు తన అంగాలన్నింటినీ ఉపసంహరించుకున్నట్లు, ఈ (ప్రజ్ఞావంతుడు) అన్ని వైపులా ఇంద్రియాలను వాటి విషయాల నుండి ఉపసంహరించుకున్నపుడు, వాని ప్రజ్ఞ స్థిరమై ఉంది.`,
    english: `One who is able to withdraw the senses from sense objects, as a tortoise draws its limbs within its shell, is to be understood as truly steady in wisdom.`,
    explanation: `The tortoise can extend its limbs fully into the world and draw them back at will. Similarly, the wise person engages with the world fully when appropriate and withdraws when appropriate — always in control of their engagement, never controlled by it.`,
    takeaway: `Engage fully with the world when appropriate; withdraw completely when needed — be in control, not controlled.`,
    tags: ['self-control', 'wisdom']
  },
  '2.59': {
    sanskrit: `विषया विनिवर्तन्ते निराहारस्य देहिनः।
रसवर्जं रसोऽप्यस्य परं दृष्ट्वा निवर्तते॥`,
    telugu: `ఆహారం లేనివారికి ఇంద్రియ విషయాలు విరమిస్తాయి, కానీ రుచి (ఆసక్తి) మాత్రం నివర్తించదు. పరతత్వాన్ని చూసిన తర్వాత ఆ రుచి కూడా నివర్తిస్తుంది.`,
    english: `The embodied soul may be restricted from sense enjoyment, though the taste for sense objects remains. But ceasing such engagements by experiencing a higher taste, one is fixed in consciousness.`,
    explanation: `You can force yourself to stop enjoying something, but the craving remains. True freedom from craving comes not from suppression but from discovering something better — the joy of the Self that surpasses all sense pleasures. Find the higher taste.`,
    takeaway: `True freedom from craving comes from finding a higher joy, not from suppressing desire.`,
    tags: ['self-control', 'wisdom']
  },
  '2.60': {
    sanskrit: `यततो ह्यपि कौन्तेय पुरुषस्य विपश्चितः।
इन्द्रियाणि प्रमाथीनि हरन्ति प्रसभं मनः॥`,
    telugu: `కౌంతేయా, ప్రయత్నించే విచక్షణాత్మకుని మనసును కూడా ప్రమాదకరమైన ఇంద్రియాలు బలవంతంగా తీసుకు వెళ్ళతాయి.`,
    english: `O son of Kunti, the senses are so strong and impetuous that they forcibly carry away the mind even of a man of discrimination who is endeavoring to control them.`,
    explanation: `Even sincere practitioners find their senses dragging the mind away from their intentions. This is not a sign of weakness but of what we are working with. The path acknowledges the challenge honestly and gives the practices to address it.`,
    takeaway: `Acknowledge the genuine difficulty of sense-control — honesty about the challenge enables the right practice.`,
    tags: ['self-control', 'wisdom']
  },
  '2.61': {
    sanskrit: `तानि सर्वाणि संयम्य युक्त आसीत मत्परः।
वशे हि यस्येन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता॥`,
    telugu: `వాటినన్నింటినీ నిగ్రహించి, నన్ను పరమగతిగా భావించి, యుక్తుడై కూర్చుండు. ఎవని ఇంద్రియాలు వశంలో ఉంటాయో వాని ప్రజ్ఞ స్థిరంగా ఉంటుంది.`,
    english: `One who restrains the senses, keeping them under full control, and fixes their consciousness upon the Divine — whose senses are under control is said to have steady wisdom.`,
    explanation: `Control the senses, fix the mind on the Divine — then wisdom becomes steady. This two-step practice works together: restraint creates space, and filling that space with divine awareness transforms restraint into joy rather than mere suppression.`,
    takeaway: `Control the senses and fill that space with divine awareness — restraint becomes joy.`,
    tags: ['self-control', 'devotion']
  },
  '2.62': {
    sanskrit: `ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।
सङ्गात्संजायते कामः कामात्क्रोधोऽभिजायते॥`,
    telugu: `ఇంద్రియ విషయాలను ధ్యానించే పురుషుడికి వాటిలో ఆసక్తి కలుగుతుంది. ఆసక్తి నుండి కోరిక పుడుతుంది. కోరిక నుండి క్రోధం జన్మిస్తుంది.`,
    english: `While contemplating the objects of the senses, a person develops attachment for them, from which arises desire; from desire arises anger.`,
    explanation: `The chain of downfall: dwell on sense objects → attachment forms → desire arises → desire is frustrated → anger erupts. Understanding this chain gives us the power to interrupt it at the very first link, before it gathers momentum.`,
    takeaway: `Interrupt the chain of desire early — dwelling on what you want is where it begins.`,
    tags: ['self-control', 'wisdom']
  },
  '2.63': {
    sanskrit: `क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः।
स्मृतिभ्रंशाद्बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥`,
    telugu: `క్రోధం నుండి మోహం కలుగుతుంది. మోహం వలన స్మృతి భ్రష్టమవుతుంది. స్మృతి భ్రష్టమైనప్పుడు బుద్ధి నష్టమవుతుంది. బుద్ధి నష్టం అవగానే నాశనమవుతాడు.`,
    english: `From anger, complete delusion arises, and from delusion bewilderment of memory; when memory is bewildered, intelligence is lost, and when intelligence is lost one falls down again into the material pool.`,
    explanation: `The chain continues: anger → confusion → memory loss → loss of intelligence → total downfall. This is not poetic metaphor — it is practical psychology. We have all seen how anger makes us temporarily 'lose our mind.' The teaching is to catch the chain at the beginning.`,
    takeaway: `Anger clouds judgment — catch it before it escalates into decisions you will regret.`,
    tags: ['self-control', 'wisdom']
  },
  '2.64': {
    sanskrit: `रागद्वेषवियुक्तैस्तु विषयानिन्द्रियैश्चरन्।
आत्मवश्यैर्विधेयात्मा प्रसादमधिगच्छति॥`,
    telugu: `కానీ రాగ ద్వేషాల నుండి విడివడిన, ఆత్మ వశమైన ఇంద్రియాలతో విషయాలలో సంచరించే స్వాధీన చిత్తుడు ప్రసన్నతను పొందుతాడు.`,
    english: `But one who can control the senses by practicing regulated control over them, remaining free from both attachment and aversion, can obtain the mercy of God.`,
    explanation: `Moving through the world with senses controlled and free from like and dislike — this is not withdrawal from life but engagement without entanglement. The person who achieves this finds a pervading sense of peace that ordinary pleasures cannot provide.`,
    takeaway: `Move through the world with full engagement but no compulsive attachment or aversion.`,
    tags: ['self-control', 'peace']
  },
  '2.65': {
    sanskrit: `प्रसादे सर्वदुःखानां हानिरस्योपजायते।
प्रसन्नचेतसो ह्याशु बुद्धिः पर्यवतिष्ठते॥`,
    telugu: `ప్రసన్నత కలిగిన వానికి సమస్త దుఃఖాలు నశిస్తాయి. ప్రసన్నచిత్తుని బుద్ధి శీఘ్రంగా స్థిరపడుతుంది.`,
    english: `For one who is thus satisfied, all sorrow is destroyed; for one of tranquil mind, the intelligence soon becomes steady.`,
    explanation: `Tranquility of mind is not just pleasant — it is the condition in which intelligence can function at its best. A troubled mind makes poor decisions; a peaceful mind sees clearly. Peace is not a luxury — it is the prerequisite for wisdom.`,
    takeaway: `Peace is not a luxury — it is the prerequisite for clear thinking and wise action.`,
    tags: ['peace', 'wisdom']
  },
  '2.66': {
    sanskrit: `नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना।
न चाभावयतः शान्तिरशान्तस्य कुतः सुखम्॥`,
    telugu: `అయుక్తునకు బుద్ధి లేదు, అయుక్తునకు భావన లేదు. భావన లేనివానికి శాంతి లేదు. అశాంతునికి సుఖమెక్కడ?`,
    english: `One who is not connected with the Supreme can have neither transcendental intelligence nor a steady mind, without which there is no possibility of peace; and how can there be any happiness without peace?`,
    explanation: `The chain of happiness: inner connection → wisdom → steady mind → peace → happiness. Each step depends on the previous. This is why peace is not found by seeking pleasure directly but by cultivating the inner conditions from which it naturally arises.`,
    takeaway: `Happiness is not a destination to seek — it is a natural result of inner peace and wisdom.`,
    tags: ['peace', 'wisdom']
  },
  '2.67': {
    sanskrit: `इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते।
तदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि॥`,
    telugu: `తిరిగే ఇంద్రియాలలో ఏ ఒక్కటి వెళ్ళినా మనస్సు దాని వెంట వెళ్ళిపోతే, అది ఆ (పురుషుని) బుద్ధిని హరిస్తుంది — నీటిలో పడవను గాలి వలె.`,
    english: `As a boat on the water is swept away by a strong wind, even one of the roaming senses on which the mind focuses can carry away a person's intelligence.`,
    explanation: `One uncontrolled sense — one unguarded moment of indulgence — can sweep away a lifetime of carefully built wisdom, like a strong wind capsizing a boat. This is the urgency behind the practice of sense-restraint. Guard your attention.`,
    takeaway: `Guard your attention — one unguarded moment can sweep away years of careful cultivation.`,
    tags: ['self-control', 'wisdom']
  },
  '2.68': {
    sanskrit: `तस्माद्यस्य महाबाहो निगृहीतानि सर्वशः।
इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता॥`,
    telugu: `కాబట్టి మహాబాహో, ఎవని ఇంద్రియాలు అన్ని వైపులా వాటి విషయాల నుండి నిగ్రహించబడి ఉంటాయో, వాని ప్రజ్ఞ స్థిరమై ఉంటుంది.`,
    english: `Therefore, O mighty-armed, one whose senses are restrained from their objects is certainly of steady wisdom.`,
    explanation: `The conclusion of the sense-control teaching: restrain the senses from their objects, and wisdom becomes steady. This is not about never experiencing the world but about not being compulsively driven by it. Freedom is the ability to choose.`,
    takeaway: `Sense-restraint is not about avoiding life — it is about choosing your engagement rather than being compelled by it.`,
    tags: ['self-control', 'wisdom']
  },
  '2.69': {
    sanskrit: `या निशा सर्वभूतानां तस्यां जागर्ति संयमी।
यस्यां जाग्रति भूतानि सा निशा पश्यतो मुनेः॥`,
    telugu: `సమస్త ప్రాణులకు రాత్రి అయిన దానిలో సంయమి మేల్కొని ఉంటాడు. ప్రాణులు మేల్కొని ఉన్న దానిలో దర్శించే మునికి రాత్రి.`,
    english: `What is night for all beings is the time of awakening for the self-controlled; and the time of awakening for all beings is night for the introspective sage.`,
    explanation: `What ordinary people call the waking world — the pursuit of pleasure, status, and objects — is like sleep for the wise. What ordinary people find dry and abstract — the exploration of the Self — is what the sage is fully awake in. Wisdom inverts ordinary priorities.`,
    takeaway: `The wise are awake to what most people sleep through — the deeper dimension of existence.`,
    tags: ['wisdom', 'self-control']
  },
  '2.70': {
    sanskrit: `आपूर्यमाणमचलप्रतिष्ठं
समुद्रमापः प्रविशन्ति यद्वत्।
तद्वत्कामा यं प्रविशन्ति सर्वे
स शान्तिमाप्नोति न कामकामी॥`,
    telugu: `అన్ని వైపులా నీరు ప్రవేశిస్తున్నా, చలించకుండా నిండిన సముద్రంలా, అన్ని కోరికలు ఏ వ్యక్తిలో ప్రవేశించినా అతడు శాంతిని పొందుతాడు. కోరికలు కోరేవాడు శాంతి పొందడు.`,
    english: `As rivers flow into the ocean, which remains unmoved despite being ever full, so too desires enter a person of steady mind, and such a person attains peace — not one who hankers after desires.`,
    explanation: `The ocean is not disturbed by rivers flowing into it because it is already full. The wise person is already full — desires arise and pass through without creating the desperate craving that disturbs peace. This fullness comes from being rooted in the Self.`,
    takeaway: `Find your inner fullness — then desires come and go without disturbing your peace.`,
    tags: ['peace', 'wisdom']
  },
  '2.71': {
    sanskrit: `विहाय कामान्यः सर्वान्पुमांश्चरति निःस्पृहः।
निर्ममो निरहङ्कारः स शान्तिमधिगच्छति॥`,
    telugu: `అన్ని కోరికలను విడిచి, నిఃస్పృహుడై, మమకారం లేకుండా, అహంకారం లేకుండా సంచరించే పురుషుడు శాంతిని పొందుతాడు.`,
    english: `A person who has given up all desires and lives free from longing, without the sense of 'I' and 'mine,' alone achieves peace.`,
    explanation: `Free from desires, without 'mine' or 'I' — this is the description of a liberated person. Not someone who owns nothing but someone for whom nothing is 'mine.' The ego's claim of ownership is what creates anxiety. Release the claim; retain the engagement.`,
    takeaway: `Release the ego's claim of ownership — engage fully but let go of 'mine.'`,
    tags: ['peace', 'detachment']
  },
  '2.72': {
    sanskrit: `एषा ब्राह्मी स्थितिः पार्थ नैनां प्राप्य विमुह्यति।
स्थित्वास्यामन्तकालेऽपि ब्रह्मनिर्वाणमृच्छति॥`,
    telugu: `పార్థా, ఇది బ్రాహ్మీ స్థితి. దీన్ని పొందిన తర్వాత మోహపడడు. చివరి కాలంలో కూడా ఈ స్థితిలో నిలిచినవాడు బ్రహ్మ నిర్వాణం పొందుతాడు.`,
    english: `O Partha, this is the way of the spiritual realm, and having attained it, one is not bewildered. Being so situated, even at the hour of death, one can enter into the kingdom of God.`,
    explanation: `Chapter 2 ends with the 'Brahmi state' — the state of one established in Brahman. This is the goal: clarity that is not confused by any circumstance, even death. One who lives in this state is already free, regardless of what happens to the body.`,
    takeaway: `The ultimate goal is freedom that cannot be touched by any circumstance — even death.`,
    tags: ['wisdom', 'soul']
  },
  '3.1': {
    sanskrit: `अर्जुन उवाच
ज्यायसी चेत्कर्मणस्ते मता बुद्धिर्जनार्दन।
तत्किं कर्मणि घोरे मां नियोजयसि केशव॥`,
    telugu: `అర్జునుడు పలికెను:
జనార్దనా, కర్మ కంటే బుద్ధి (జ్ఞానం) శ్రేష్ఠమని నీ అభిప్రాయమైతే, కేశవా, నన్ను ఈ భయంకర కర్మలో ఎందుకు నియోగిస్తున్నావు?`,
    english: `Arjuna said: O Janardana, if you consider that knowledge is better than action, why then do you urge me to engage in this terrible action?`,
    explanation: `Arjuna presents a logical challenge: if wisdom is higher than action, why act at all? This seems like clear reasoning but misses a crucial distinction — between renouncing action and performing action wisely. The Gita will show these are not opposites.`,
    takeaway: `The question 'why act if wisdom is higher?' misses the point — wise action IS the highest wisdom.`,
    tags: ['duty', 'wisdom']
  },
  '3.2': {
    sanskrit: `व्यामिश्रेणेव वाक्येन बुद्धिं मोहयसीव मे।
तदेकं वद निश्चित्य येन श्रेयोऽहमाप्नुयाम्॥`,
    telugu: `ಸ్పಷ್ಟంగా లేని వాక్యాలతో నా బుద్ధిని మోహపరుస్తున్నావు. నాకు ఏ ఒక్క విషయాన్ని నిశ్చయంగా చెప్పు, దానివల్ల శ్రేయస్సు పొందగలను.`,
    english: `You seem to confuse my intelligence with your ambiguous words. Please, therefore, speak definitively on one thing and tell me which is better.`,
    explanation: `Arjuna feels confused by seemingly contradictory teachings. When overwhelmed by complexity, asking for one clear principle is wisdom, not laziness. The teacher's job is to simplify without distorting — to give the essential before the exhaustive.`,
    takeaway: `When confused by complexity, ask for the essential principle — clarity beats comprehensiveness.`,
    tags: ['wisdom', 'truth']
  },
  '3.3': {
    sanskrit: `श्रीभगवानुवाच
लोकेऽस्मिन्द्विविधा निष्ठा पुरा प्रोक्ता मयानघ।
ज्ञानयोगेन साङ्ख्यानां कर्मयोगेन योगिनाम्॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
నిష్పాపా, ఈ లోకంలో నేను పూర్వం రెండు రకాల నిష్ఠలు చెప్పాను. సాంఖ్యులకు జ్ఞాన యోగం ద్వారా, యోగులకు కర్మ యోగం ద్వారా.`,
    english: `The Blessed Lord said: O sinless one, I have explained that there are two paths of self-realization in this world: the path of knowledge for those inclined toward contemplation, and the path of work for those inclined toward action.`,
    explanation: `Krishna acknowledges two valid paths suited to different temperaments: the path of knowledge for the contemplative and the path of action for the active. Both are honored; neither is dismissed. This generous pluralism is characteristic of the Gita.`,
    takeaway: `Different temperaments need different paths — respect the diversity of valid approaches to truth.`,
    tags: ['wisdom', 'action']
  },
  '3.4': {
    sanskrit: `न कर्मणामनारम्भान्नैष्कर्म्यं पुरुषोऽश्नुते।
न च संन्यसनादेव सिद्धिं समधिगच्छति॥`,
    telugu: `కర్మలను ప్రారంభించకుండా పురుషుడు నైష్కర్మ్యాన్ని పొందలేడు. సంన్యాసం మాత్రంతో సిద్ధిని పొందలేడు.`,
    english: `A person does not achieve freedom from reaction by merely abstaining from work, nor does one attain perfection by renunciation alone.`,
    explanation: `Avoiding action is not the same as transcending action. You cannot achieve freedom from karma by simply doing nothing — that is its own form of action (and often, avoidance). Liberation comes through right action, not the absence of action.`,
    takeaway: `Freedom is not found by avoiding action but by transforming the quality of your engagement.`,
    tags: ['action', 'wisdom']
  },
  '3.5': {
    sanskrit: `न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत्।
कार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः॥`,
    telugu: `ఎవ్వరూ ఒక్క క్షణం కూడా కర్మ చేయకుండా ఉండలేరు. ప్రకృతి జనితాలైన గుణాల వల్ల బలవంతంగా అందరూ కర్మ చేయిస్తారు.`,
    english: `No one can remain without action even for a moment; everyone is driven to act helplessly by the impulses born of nature.`,
    explanation: `Action is unavoidable — nature itself drives us to act constantly. The question is never 'should I act?' but always 'how should I act?' Pretending otherwise — claiming to opt out — is self-deception about our fundamental nature.`,
    takeaway: `Action is unavoidable — the only choice is how to act, not whether to act.`,
    tags: ['action', 'truth']
  },
  '3.6': {
    sanskrit: `कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन्।
इन्द्रियार्थान्विमूढात्मा मिथ्याचारः स उच्यते॥`,
    telugu: `కర్మేంద్రియాలను నిగ్రహించి, మనసాన ఇంద్రియ విషయాలు స్మరిస్తూ కూర్చున్న విమూఢ ఆత్మ మిథ్యాచారి అని పిలువబడతాడు.`,
    english: `One who restrains the organs of action but dwells mentally on sense objects — that confused soul is called a hypocrite.`,
    explanation: `Outer restraint with inner craving is hypocrisy. The person who avoids action while their mind races through fantasies of what they have 'given up' is worse off than one who acts openly. Integrity demands that outer and inner align.`,
    takeaway: `Integrity requires that your outer actions and inner intentions align — hypocrisy serves no one.`,
    tags: ['wisdom', 'truth']
  },
  '3.7': {
    sanskrit: `यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन।
कर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते॥`,
    telugu: `అర్జునా, ఎవడు మనసాన ఇంద్రియాలను నిగ్రహించి, ఆసక్తి లేకుండా కర్మేంద్రియాలతో కర్మ యోగాన్ని ప్రారంభిస్తాడో, అతడు విశిష్టుడు.`,
    english: `But one who controls the senses with the mind, O Arjuna, and begins the yoga of action with the organs of action, remaining unattached — that one excels.`,
    explanation: `True renunciation is inner: controlling the mind's cravings while engaging the hands in work. This combination — inner non-attachment and outer full engagement — is karma yoga. It is far superior to outer stillness with inner craving.`,
    takeaway: `Inner non-attachment combined with outer full engagement is the superior path.`,
    tags: ['action', 'self-control']
  },
  '3.8': {
    sanskrit: `नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः।
शरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः॥`,
    telugu: `నీవు నియతకర్మలు చేయి. కర్మ చేయకుండా ఉండటం కంటే కర్మ శ్రేష్ఠమైనది. కర్మ లేకుండా నీ శారీరక జీవనం కూడా సాగదు.`,
    english: `Perform your prescribed duties, for action is better than inaction. Even the maintenance of your body would not be possible without action.`,
    explanation: `Do the work in front of you — it is always better than paralyzed inaction. Even sustaining the body requires action. The Gita is relentlessly practical: you cannot opt out of life. The question is always how to engage it rightly.`,
    takeaway: `Do the work in front of you — inaction is never the spiritually superior choice.`,
    tags: ['action', 'duty']
  },
  '3.9': {
    sanskrit: `यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः।
तदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर॥`,
    telugu: `కౌంతేయా, యజ్ఞం కోసం తప్ప ఇతర కర్మలు ఈ లోకాన్ని కర్మబంధంలో ఉంచుతాయి. కాబట్టి ఆసక్తి విడిచి ఆ కోసం కర్మ చేయి.`,
    english: `Work done as a sacrifice for the sake of all (yajna) does not bind. Therefore, O Kaunteya, perform your duty without attachment as an offering.`,
    explanation: `When action is performed as service or offering — not for personal gain but for the greater good — it does not create binding karma. The transformation of action from self-serving to other-serving is the essence of karma yoga.`,
    takeaway: `Transform action from self-serving to other-serving — this is the alchemy of karma yoga.`,
    tags: ['action', 'detachment']
  },
  '3.10': {
    sanskrit: `सहयज्ञाः प्रजाः सृष्ट्वा पुरोवाच प्रजापतिः।
अनेन प्रसविष्यध्वमेष वोऽस्त्विष्टकामधुक्॥`,
    telugu: `పూర్వం ప్రజాపతి యజ్ఞంతో సహా ప్రజలను సృష్టించి, 'యజ్ఞం ద్వారా వృద్ధి పొందండి, ఇది మీకు ఇష్ట కామాలను ఇచ్చేది' అని పలికాడు.`,
    english: `In the beginning of creation, the Lord of creatures sent forth generations of men and demigods, along with sacrifices, and blessed them thus: 'Be prosperous with this yajna; may it grant all your desires.'`,
    explanation: `The universe itself was created with the spirit of mutual offering (yajna). Everything that sustains life depends on giving and receiving in balance. Selfish hoarding breaks this cosmic balance; generous contribution maintains it.`,
    takeaway: `Everything that sustains life depends on mutual giving — generous contribution is your part in the cosmic balance.`,
    tags: ['duty', 'action']
  },
  '3.11': {
    sanskrit: `देवान्भावयतानेन ते देवा भावयन्तु वः।
परस्परं भावयन्तः श्रेयः परमवाप्स्यसथ॥`,
    telugu: `ఈ యజ్ఞంతో దేవతలను తృప్తి పరచండి. ఆ దేవతలు మిమ్మల్ని తృప్తి పరుస్తారు. పరస్పరం తృప్తి పరచుకుంటూ మీరు పరమ శ్రేయస్సు పొందుతారు.`,
    english: `Please the gods by this offering, and those gods will please you. Thus nourishing one another, you will attain the highest good.`,
    explanation: `The universe runs on the principle of mutual nourishment. We receive air, water, food, and life from the cosmos; we give back through our work and service. Understanding this reciprocity transforms every act of contribution into sacred participation.`,
    takeaway: `See yourself as part of a cosmic exchange — what you receive calls you to give in return.`,
    tags: ['action', 'duty']
  },
  '3.12': {
    sanskrit: `इष्टान्भोगान्हि वो देवा दास्यन्ते यज्ञभाविताः।
तैर्दत्तानप्रदायैभ्यो यो भुङ्क्ते स्तेन एव सः॥`,
    telugu: `యజ్ఞంతో తృప్తులైన దేవతలు మీకు ఇష్టమైన భోగాలను ఇస్తారు. వారు ఇచ్చిన వాటిని వారికి ఇవ్వకుండా అనుభవించేవాడు దొంగయే.`,
    english: `The gods, being satisfied with sacrifices, will give you all desirable things. But one who enjoys what is given by the gods without offering them in return is indeed a thief.`,
    explanation: `To receive and not give back is stealing from the cosmic exchange. This is a powerful teaching about gratitude and generosity. Every gift we receive — talent, opportunity, food — comes with the implicit obligation to contribute in return.`,
    takeaway: `Every gift you receive calls you to give — gratitude is expressed through generous contribution.`,
    tags: ['duty', 'detachment']
  },
  '3.13': {
    sanskrit: `अन्नाद्भवन्ति भूतानि पर्जन्यादन्नसम्भवः।
यज्ञाद्भवति पर्जन्यो यज्ञः कर्मसमुद्भवः॥`,
    telugu: `ఆహారం నుండి ప్రాణులు పుడతాయి, వర్షం నుండి ఆహారం కలుగుతుంది, యజ్ఞం నుండి వర్షం కలుగుతుంది, యజ్ఞం కర్మ నుండి పుడుతుంది.`,
    english: `From food comes the sustenance of beings; from rain comes food; from sacrifice comes rain; and sacrifice is born of action.`,
    explanation: `The chain of life: food sustains life → rain creates food → selfless action (yajna) brings rain → action is the source of yajna. This interconnection shows that every sincere, selfless action we take literally participates in sustaining life. Nothing is too small.`,
    takeaway: `Every sincere, selfless action participates in sustaining the fabric of life — nothing is too small.`,
    tags: ['action', 'duty']
  },
  '3.14': {
    sanskrit: `कर्म ब्रह्मोद्भवं विद्धि ब्रह्माक्षरसमुद्भवम्।
तस्मात्सर्वगतं ब्रह्म नित्यं यज्ञे प्रतिष्ठितम्॥`,
    telugu: `కర్మ బ్రహ్మ నుండి పుట్టిందని తెలుసుకో. బ్రహ్మ అక్షర నుండి పుట్టింది. కాబట్టి సర్వత్ర ఉన్న బ్రహ్మ నిత్యం యజ్ఞంలో స్థిరపడి ఉంది.`,
    english: `Know that action is born of Brahman, and Brahman is from the Imperishable. Therefore, the all-pervading Brahman is eternally established in acts of sacrifice.`,
    explanation: `All action originates in the divine reality and returns to it through selfless offering. This vision sacralizes work completely: every action, when done as yajna, is not just pragmatically useful but cosmically meaningful.`,
    takeaway: `When done as selfless offering, every action becomes cosmically meaningful.`,
    tags: ['action', 'truth']
  },
  '3.15': {
    sanskrit: `एवं प्रवर्तितं चक्रं नानुवर्तयतीह यः।
अघायुरिन्द्रियारामो मोघं पार्थ स जीवति॥`,
    telugu: `పార్థా, ఈ విధంగా తిప్పబడిన చక్రాన్ని ఇక్కడ అనుసరించని వాడు, ఇంద్రియ రతుడు, పాపజీవి వ్యర్థంగా జీవిస్తాడు.`,
    english: `O Partha, one who does not follow this wheel set in motion, whose life is sinful, who delights in the senses — such a person lives in vain.`,
    explanation: `The cosmic wheel of mutual service turns; one who lives only for their own pleasure and refuses to contribute turns it against themselves and the world. A life lived only in self-gratification is ultimately empty, regardless of how much it accumulates.`,
    takeaway: `A life lived only for personal pleasure is ultimately empty — contribute to something larger.`,
    tags: ['duty', 'action']
  },
  '3.16': {
    sanskrit: `यस्त्वात्मरतिरेव स्यादात्मतृप्तश्च मानवः।
आत्मन्येव च सन्तुष्टस्तस्य कार्यं न विद्यते॥`,
    telugu: `కానీ ఆత్మలో ప్రసన్నుడు, ఆత్మలో తృప్తి పొందినవాడు, ఆత్మలోనే సంతుష్టుడైన పురుషుడికి చేయవలసిన కర్తవ్యం లేదు.`,
    english: `But for one who rejoices only in the Self, who is satisfied in the Self, who is content only in the Self — for such a person, there is nothing that needs to be done.`,
    explanation: `One established in the Self has no obligation to fulfill from ego — they are already complete. Yet such people still act, as Krishna will explain, for the welfare of the world. True freedom from obligation transforms action from burden to gift.`,
    takeaway: `True completeness doesn't eliminate action — it transforms it from obligation to offering.`,
    tags: ['wisdom', 'action']
  },
  '3.17': {
    sanskrit: `नैव तस्य कृतेनार्थो नाकृतेनेह कश्चन।
न चास्य सर्वभूतेषु कश्चिदर्थव्यपाश्रयः॥`,
    telugu: `అతనికి ఇక్కడ కర్మ చేయడం వల్ల ప్రయోజనం లేదు, చేయకుండా ఉండటం వల్ల హాని లేదు. అన్ని ప్రాణులలో కూడా అతనికి ఏ ప్రయోజన అవసరం లేదు.`,
    english: `For such a person, there is no purpose served by doing work, nor is there any purpose served by not doing work. Such a liberated soul has no need to depend on any being for any purpose.`,
    explanation: `The liberated person acts not from need or fear but from abundance and love. They have nothing to gain or lose from action, yet they act. This is the highest form of action — free, unconditioned, offered purely.`,
    takeaway: `Act from abundance, not from need or fear — this is the highest form of action.`,
    tags: ['wisdom', 'detachment']
  },
  '3.18': {
    sanskrit: `तस्मादसक्तः सततं कार्यं कर्म समाचर।
असक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥`,
    telugu: `కాబట్టి ఆసక్తి లేకుండా నిత్యం చేయవలసిన కర్మ చేయి. ఆసక్తి లేకుండా కర్మ చేయడం వల్ల పురుషుడు పరమాన్ని పొందుతాడు.`,
    english: `Therefore, without being attached to the fruits of activities, one should act as a matter of duty, for by working without attachment, one attains the Supreme.`,
    explanation: `Do your duty without attachment — this simple instruction contains the whole of karma yoga. Not 'do less' or 'do more' but 'do fully and release.' Full engagement plus full release is the formula for both effectiveness and liberation.`,
    takeaway: `Full engagement plus full release — this is the formula for both effectiveness and freedom.`,
    tags: ['action', 'detachment']
  },
  '3.19': {
    sanskrit: `कर्मणैव हि संसिद्धिमास्थिता जनकादयः।
लोकसङ्ग्रहमेवापि सम्पश्यन्कर्तुमर्हसि॥`,
    telugu: `కర్మ ద్వారానే జనకాదులు సంసిద్ధిని పొందారు. లోకసంగ్రహాన్ని చూస్తు కూడా నువ్వు కర్మ చేయడం తగినది.`,
    english: `Even by works alone did Janaka and others attain perfection. You should perform action with a view to the welfare of the world.`,
    explanation: `King Janaka ruled a kingdom and attained liberation through selfless action. This is the Gita's proof that complete engagement in worldly life, when done rightly, leads to the same freedom as renunciation. No life situation is an obstacle to liberation.`,
    takeaway: `No life situation is an obstacle to liberation — your daily work, done rightly, is the path.`,
    tags: ['action', 'duty']
  },
  '3.20': {
    sanskrit: `यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।
स यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥`,
    telugu: `శ్రేష్ఠుడు ఏమి ఆచరిస్తాడో, ఇతరులు అదే విధంగా చేస్తారు. అతడు ఏ ప్రమాణాన్ని నిర్ణయిస్తాడో, లోకం దానిని అనుసరిస్తుంది.`,
    english: `Whatever action a great person performs, common people follow. Whatever standards they set by exemplary acts, all the world pursues.`,
    explanation: `Leaders set standards that others follow. This is both an honor and a responsibility. Your consistency between what you teach and what you live determines your actual influence. People follow what you do, not what you say.`,
    takeaway: `Your most powerful teaching is how you live — people follow what you do, not what you say.`,
    tags: ['duty', 'action']
  },
  '3.21': {
    sanskrit: `न मे पार्थास्ति कर्तव्यं त्रिषु लोकेषु किञ्चन।
नानवाप्तमवाप्तव्यं वर्त एव च कर्मणि॥`,
    telugu: `పార్థా, మూడు లోకాలలో నాకు చేయవలసిన కర్తవ్యమేదీ లేదు. పొందవలసిన దేదీ లేదు. అయినా నేను కర్మలో నిమగ్నమై ఉంటాను.`,
    english: `O Partha, there is no duty prescribed for me in all the three worlds, nor is there anything not obtained which should be obtained by me. Yet I engage in action.`,
    explanation: `Krishna, who needs nothing and lacks nothing, still acts. Why? Because action done for the world is its own justification. The highest freedom is not freedom from action but freedom in action — acting from love, not from need.`,
    takeaway: `The highest freedom is not freedom from action but freedom in action — acting from love.`,
    tags: ['action', 'duty']
  },
  '3.22': {
    sanskrit: `यदि ह्यहं न वर्तेयं जातु कर्मण्यतन्द्रितः।
मम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः॥`,
    telugu: `పార్థా, ఒకవేళ నేను అలసత్వం లేకుండా కర్మలో నిమగ్నమై ఉండకపోతే, మనుషులు అన్ని విధాలా నా మార్గాన్ని అనుసరిస్తారు.`,
    english: `For if I did not engage in action, O Partha, all people would follow my path in all respects.`,
    explanation: `If Krishna stopped acting, his followers would stop acting, and the world would collapse. This shows the deep interdependence of all actions. Everyone's choices ripple outward. The most 'unimportant' person's integrity contributes to the world's moral fabric.`,
    takeaway: `Your choices ripple outward — even 'small' acts of integrity contribute to the world.`,
    tags: ['duty', 'action']
  },
  '3.23': {
    sanskrit: `उत्सीदेयुरिमे लोका न कुर्यां कर्म चेदहम्।
सङ्करस्य च कर्ता स्यामुपहन्यामिमाः प्रजाः॥`,
    telugu: `నేను కర్మ చేయకపోతే, ఈ లోకాలు నాశనమవుతాయి. నేను సంకరకర్తను అవుతాను. ఈ ప్రజలను నాశనం చేసినవాడవుతాను.`,
    english: `If I ceased to act, all these worlds would perish. I would be the cause of disorder and would destroy these beings.`,
    explanation: `The universe requires everyone's active participation. Opting out of your role, whatever it is, creates a gap that causes harm. This is not pressure — it is invitation to recognize your indispensable place in the world's functioning.`,
    takeaway: `Recognize your indispensable place in the world's functioning — no role is too small.`,
    tags: ['duty', 'action']
  },
  '3.24': {
    sanskrit: `सक्ताः कर्मण्यविद्वांसो यथा कुर्वन्ति भारत।
कुर्याद्विद्वांस्तथासक्तस्तत्कर्म लोकसङ्ग्रहम्॥`,
    telugu: `భరతవంశీయుడా, అజ్ఞానులు ఆసక్తితో ఎలా కర్మ చేస్తారో, అలాగే విద్వాంసుడు ఆసక్తి లేకుండా లోక సంగ్రహం కోసం కర్మ చేయాలి.`,
    english: `As the ignorant perform their duties with attachment to the results, the learned may similarly act, O Bharata, but without attachment, for the sake of leading people on the right path.`,
    explanation: `The wise and the ignorant may perform the same outward actions, but the inner quality transforms everything. The same work done with attachment creates bondage; the same work done without attachment creates freedom. The transformation is interior.`,
    takeaway: `The same work done with or without attachment creates completely different results — the transformation is interior.`,
    tags: ['action', 'detachment']
  },
  '3.25': {
    sanskrit: `न बुद्धिभेदं जनयेद्यज्ञानां कर्मसङ्गिनाम्।
जोषयेत्सर्वकर्माणि विद्वान्युक्तः समाचरन्॥`,
    telugu: `కర్మాసక్తులైన అజ్ఞానుల బుద్ధిలో భేదం కలిగించకూడదు. విద్వాంసుడు యుక్తుడై సమస్త కర్మలు చేస్తూ (వారికి) అన్ని కర్మలు ఇష్టపడేలా చేయాలి.`,
    english: `Let the wise not unsettle the minds of the ignorant who are attached to fruitive activities. The wise, acting in yoga, should inspire others to do all their works as well.`,
    explanation: `A wise teacher does not destroy people's current understanding through brutal honesty before they are ready for something better. Wisdom serves others by meeting them where they are and lifting them gently, not by shattering their current framework.`,
    takeaway: `Wisdom serves by meeting people where they are and lifting them gently, not shattering them.`,
    tags: ['wisdom', 'compassion']
  },
  '3.26': {
    sanskrit: `प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः।
अहङ्कारविमूढात्मा कर्ताहमिति मन्यते॥`,
    telugu: `ప్రకృతి గుణాలచే అన్ని కర్మలు అన్ని విధాలా చేయబడుతున్నాయి. అహంకారంతో విమోహితమైన ఆత్మ 'నేను కర్తను' అని తలుస్తుంది.`,
    english: `In truth, all activities are done by the qualities of material nature, but the self, deluded by egoism, thinks 'I am the doer.'`,
    explanation: `The great illusion: 'I am doing this.' In reality, nature's qualities (gunas) operate through us — our choices, motivations, and actions all arise from causes beyond the ego-self. Recognizing this dissolves pride and reduces anxiety simultaneously.`,
    takeaway: `Recognizing that you are not the ultimate doer dissolves pride and reduces anxiety simultaneously.`,
    tags: ['wisdom', 'truth']
  },
  '3.27': {
    sanskrit: `तत्त्ववित्तु महाबाहो गुणकर्मविभागयोः।
गुणा गुणेषु वर्तन्त इति मत्वा न सज्जते॥`,
    telugu: `మహాబాహో, గుణ కర్మ విభాగాల తత్త్వాన్ని తెలిసిన వాడు 'గుణాలు గుణాలలో వర్తిస్తున్నాయి' అని తలచి ఆసక్తి పొందడు.`,
    english: `But one who understands the truth about the role of gunas in action, O mighty-armed, and knows that it is these gunas acting on gunas, does not become attached.`,
    explanation: `The wise person understands that qualities of nature act through nature — the ego's claim to be the author is the misunderstanding. With this understanding, neither pride in achievement nor despair at failure makes sense. Freedom follows.`,
    takeaway: `Understanding that nature acts through nature dissolves both pride in success and despair at failure.`,
    tags: ['wisdom', 'detachment']
  },
  '3.28': {
    sanskrit: `प्रकृतेर्गुणसम्मूढाः सज्जन्ते गुणकर्मसु।
तानकृत्स्नविदो मन्दान्कृत्स्नविन्न विचालयेत्॥`,
    telugu: `ప్రకృతి గుణాలచే మోహితులైన వారు గుణ కర్మలలో ఆసక్తి పొందుతారు. పూర్తిగా తెలుసుకోని మందమతులను పూర్ణ జ్ఞాని చలింపజేయకూడదు.`,
    english: `Those deluded by the qualities of material nature become attached to the activities associated with those qualities. One who knows the truth should not unsettle these persons of incomplete knowledge.`,
    explanation: `Partial knowledge can be destabilizing. The fully wise person recognizes when to share deeper truth and when to let people develop at their own pace. Wisdom includes knowing when to speak and when to hold back.`,
    takeaway: `Wisdom includes knowing when to share a deeper truth and when to let others develop at their own pace.`,
    tags: ['wisdom', 'compassion']
  },
  '3.29': {
    sanskrit: `मयि सर्वाणि कर्माणि संन्यस्याध्यात्मचेतसा।
निराशीर्निर्ममो भूत्वा युध्यस्व विगतज्वरः॥`,
    telugu: `అధ్యాత్మ చేతనతో అన్ని కర్మలను నాలో అర్పించి, ఆశ లేకుండా, మమత్వం లేకుండా, జ్వరం లేకుండా యుద్ధం చేయి.`,
    english: `Therefore, surrendering all your actions to me, with full consciousness of the Supreme, freed from desires and selfishness, without mental agitation, fight.`,
    explanation: `Offer all actions to the Divine, free from personal desire and ego-possession, without mental fever. This is the integrated practice: spiritual orientation (offered to the Divine) + non-attachment + equanimity = action that does not bind.`,
    takeaway: `Offer your actions to something larger than yourself — this is what makes action free.`,
    tags: ['action', 'surrender']
  },
  '3.30': {
    sanskrit: `ये मे मतमिदं नित्यमनुतिष्ठन्ति मानवाः।
श्रद्धावन्तोऽनसूयन्तो मुच्यन्ते तेऽपि कर्मभिः॥`,
    telugu: `శ్రద్ధతో, అసూయ లేకుండా నా ఈ అభిప్రాయాన్ని నిత్యం ఆచరించే మానవులు కర్మల నుండి విముక్తులవుతారు.`,
    english: `Those persons who always execute these teachings of mine with faith and without envy are also liberated from the bondage of karma.`,
    explanation: `Those who follow this teaching with faith and without jealousy (of others' spiritual progress) are freed from karmic bondage. Faith is the key: trusting the path without constant demands for proof, while practicing with sincere effort.`,
    takeaway: `Follow the path with faith and without jealousy of others — these two qualities accelerate liberation.`,
    tags: ['faith', 'action']
  },
  '3.31': {
    sanskrit: `ये त्वेतदभ्यसूयन्तो नानुतिष्ठन्ति मे मतम्।
सर्वज्ञानविमूढांस्तान्विद्धि नष्टानचेतसः॥`,
    telugu: `కానీ నా ఈ అభిప్రాయాన్ని అసూయతో అనుసరించని వారు, అన్ని జ్ఞానాలలో విమూఢులైన వారు అచేతనులు, నష్టులు అని తెలుసుకో.`,
    english: `But those who, out of envy, disregard these teachings and do not follow them regularly, are to be considered foolish, bereft of all knowledge, and ruined in their endeavors.`,
    explanation: `Envy and contempt for wisdom are not intellectual positions — they are self-destructive. The person who dismisses wisdom out of cynicism, jealousy, or pride loses access to the very guidance that would help them. Open-mindedness is the first requirement.`,
    takeaway: `Open-mindedness to wisdom is not weakness — it is the prerequisite for growth.`,
    tags: ['wisdom', 'truth']
  },
  '3.32': {
    sanskrit: `सदृशं चेष्टते स्वस्याः प्रकृतेर्ज्ञानवानपि।
प्रकृतिं यान्ति भूतानि निग्रहः किं करिष्यति॥`,
    telugu: `జ్ఞానవంతుడు కూడా తన ప్రకృతి అనుసారంగా చేష్టిస్తాడు. ప్రాణులు ప్రకృతిని అనుసరిస్తాయి. నిగ్రహం ఏమి చేయగలదు?`,
    english: `Even a wise person acts according to their own nature. All creatures follow their nature; what can repression accomplish?`,
    explanation: `Even the wise person acts according to their inherent nature. Suppression of nature is not liberation — it is warfare with yourself. Wisdom works with nature, not against it: redirecting tendencies, not crushing them. Understanding your nature is the first step.`,
    takeaway: `Work with your nature, not against it — redirect your tendencies wisely rather than suppressing them.`,
    tags: ['wisdom', 'truth']
  },
  '3.33': {
    sanskrit: `इन्द्रियस्येन्द्रियस्यार्थे रागद्वेषौ व्यवस्थितौ।
तयोर्न वशमागच्छेत्तौ ह्यस्य परिपन्थिनौ॥`,
    telugu: `ఇంద్రియం ఇంద్రియ విషయంలో రాగ ద్వేషాలు వ్యవస్థితంగా ఉంటాయి. వాటి వశంలో పడకూడదు. అవి అతని మార్గంలో విఘ్నాలు.`,
    english: `Attraction and repulsion for sense objects are seated in the senses. One should not come under their control, for they are stumbling blocks on the path.`,
    explanation: `Like and dislike are automatic reactions embedded in the sensory system. They are not wrong in themselves — they become problems only when we are unconsciously controlled by them. Awareness is the beginning of freedom from their automatic pull.`,
    takeaway: `Automatic reactions of like and dislike are not wrong — becoming unconsciously controlled by them is.`,
    tags: ['self-control', 'wisdom']
  },
  '3.34': {
    sanskrit: `श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।
स्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥`,
    telugu: `స్వధర్మం గుణహీనంగా ఉన్నా, పర ధర్మం చక్కగా ఆచరించినా కంటే మేలైనది. స్వధర్మంలో మరణించడం శ్రేయస్కరం. పర ధర్మం భయంకరమైనది.`,
    english: `It is better to perform one's own duty imperfectly than to perform another's duty perfectly. It is better to die performing one's own duty, for the duty of another is fraught with danger.`,
    explanation: `Authentic imperfection is better than performed excellence. Living someone else's life — their script, their role, their values — no matter how successfully, leads to a deep sense of inauthenticity and spiritual danger. Know your own path and walk it.`,
    takeaway: `Authentic imperfection is spiritually safer than perfectly performing someone else's role.`,
    tags: ['duty', 'truth']
  },
  '3.35': {
    sanskrit: `अर्जुन उवाच
अथ केन प्रयुक्तोऽयं पापं चरति पूरुषः।
अनिच्छन्नपि वार्ष्णेय बलादिव नियोजितः॥`,
    telugu: `అర్జునుడు పలికెను:
వార్ష్ణేయా, ఇష్టం లేకపోయినా బలవంతంగా నియోగించబడినట్లు, ఏ ప్రేరణతో పురుషుడు పాపం చేస్తాడు?`,
    english: `Arjuna said: O Varshneya, by what is one impelled to commit sin, as if by force, even against one's will?`,
    explanation: `Arjuna asks one of humanity's most important questions: why do we do what we know is wrong? This is the question every person who has ever struggled with their own compulsions has asked. The answer Krishna gives is timeless psychology.`,
    takeaway: `Why do we do what we know is wrong? This question leads to one of the Gita's deepest psychological teachings.`,
    tags: ['wisdom', 'truth']
  },
  '3.36': {
    sanskrit: `श्रीभगवानुवाच
काम एष क्रोध एष रजोगुणसमुद्भवः।
महाशनो महापाप्मा विद्ध्येनमिह वैरिणम्॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
ఇది కోరిక, ఇది క్రోధం — రజో గుణం నుండి పుట్టినవి. మహా భక్షకుడు, మహాపాపి — ఇదే ఇక్కడ శత్రువు అని తెలుసుకో.`,
    english: `The Blessed Lord said: It is desire and anger born of the mode of passion — know these as the great enemy here, all-devouring and most sinful.`,
    explanation: `The enemy is desire (kama) and its dark twin anger (krodha), both arising from rajas (passion). They are 'all-devouring' — like fire, they grow with feeding. Understanding the enemy clearly is the first step to freedom from it.`,
    takeaway: `Understand your enemy clearly: unchecked desire and anger consume you — feed them and they grow.`,
    tags: ['self-control', 'wisdom']
  },
  '3.37': {
    sanskrit: `धूमेनाव्रियते वह्निर्यथादर्शो मलेन च।
यथोल्बेनावृतो गर्भस्तथा तेनेदमावृतम्॥`,
    telugu: `పొగచే అగ్ని కప్పబడినట్లు, మలంచే అద్దం కప్పబడినట్లు, మావిచే గర్భం కప్పబడినట్లు, అదే విధంగా జ్ఞానం దానిచే కప్పబడి ఉంది.`,
    english: `As fire is covered by smoke, as a mirror by dust, as an embryo by the womb, so too is knowledge covered by desire.`,
    explanation: `Desire covers wisdom in three degrees: lightly (like smoke on fire — easily dispersed), moderately (like dust on a mirror — requiring effort to clean), or completely (like a womb around an embryo — total enclosure). Know which level you are dealing with.`,
    takeaway: `Recognize how deeply desire is covering your clarity — and work accordingly to clear it.`,
    tags: ['wisdom', 'self-control']
  },
  '3.38': {
    sanskrit: `आवृतं ज्ञानमेतेन ज्ञानिनो नित्यवैरिणा।
कामरूपेण कौन्तेय दुष्पूरेणानलेन च॥`,
    telugu: `కౌంతేయా, ఈ జ్ఞాని యొక్క నిత్య శత్రువు, కభినీ తృప్తి కాని, అగ్నివంటి కామరూపంతో జ్ఞానం కప్పబడి ఉంది.`,
    english: `O Kaunteya, by this constant enemy of the wise — by this insatiable fire of desire — knowledge is covered.`,
    explanation: `Desire is like fire: the more you feed it, the more it grows. Unlike hunger, which is satisfied by food, desire is insatiable — fulfilling it only creates more desire. This is the trap. True freedom comes from turning toward the Self, not toward more objects.`,
    takeaway: `Unlike hunger, desire is insatiable — fulfilling it only creates more desire. Turn toward the Self instead.`,
    tags: ['wisdom', 'self-control']
  },
  '3.39': {
    sanskrit: `इन्द्रियाणि मनो बुद्धिरस्याधिष्ठानमुच्यते।
एतैर्विमोहयत्येष ज्ञानमावृत्य देहिनम्॥`,
    telugu: `ఇంద్రియాలు, మనస్సు మరియు బుద్ధి దీని (కామం యొక్క) అధిష్ఠానమని చెప్పబడతాయి. వీటి ద్వారా ఇది జ్ఞానాన్ని కప్పి దేహిని మోహపరుస్తుంది.`,
    english: `The senses, the mind, and the intelligence are the sitting places of this desire. Through these it bewilders the embodied soul by covering its real knowledge.`,
    explanation: `Desire operates through the senses, mind, and intellect. It corrupts our perception, thinking, and reasoning — making wrong seem right and harmful seem beneficial. This is why sense-discipline, mental training, and intellectual clarity are all necessary on the path.`,
    takeaway: `Desire corrupts perception, thinking, and reasoning — therefore train all three simultaneously.`,
    tags: ['self-control', 'wisdom']
  },
  '3.40': {
    sanskrit: `तस्मात्त्वमिन्द्रियाण्यादौ नियम्य भरतर्षभ।
पाप्मानं प्रजहि ह्येनं ज्ञानविज्ञाननाशनम्॥`,
    telugu: `కాబట్టి భరత శ్రేష్ఠా, ముందు ఇంద్రియాలను నిగ్రహించి, జ్ఞాన విజ్ఞానాలను నశింపజేసే ఈ పాపాన్ని నశింపజేయి.`,
    english: `Therefore, O best of the Bharatas, in the very beginning curb this great symbol of sin — desire — by regulating the senses, and slay this destroyer of knowledge and self-realization.`,
    explanation: `The practical instruction: regulate the senses first, before dealing with the mind and intellect. Start at the outermost layer and work inward. This sequential approach acknowledges that change happens from the periphery to the center.`,
    takeaway: `Start with sense-regulation — change happens from the outside inward, step by step.`,
    tags: ['self-control', 'action']
  },
  '3.41': {
    sanskrit: `इन्द्रियाणि पराण्याहुरिन्द्रियेभ्यः परं मनः।
मनसस्तु परा बुद्धिर्यो बुद्धेः परतस्तु सः॥`,
    telugu: `ఇంద్రియాలు శ్రేష్ఠమైనవని చెప్తారు. ఇంద్రియాల కంటే మనస్సు శ్రేష్ఠమైనది. మనస్సు కంటే బుద్ధి శ్రేష్ఠమైనది. బుద్ధి కంటే శ్రేష్ఠమైనది ఆత్మ.`,
    english: `The senses are superior to the body; the mind is superior to the senses; the intelligence is superior to the mind; and the Self is even superior to the intelligence.`,
    explanation: `The hierarchy of the inner life: body → senses → mind → intellect → Self. Govern the lower with the higher — use the mind to direct the senses, the intellect to guide the mind, and rest in the Self that governs all. This is the map of inner discipline.`,
    takeaway: `Govern the lower levels of your inner life with the higher — senses by mind, mind by intellect, intellect by the Self.`,
    tags: ['wisdom', 'self-control']
  },
  '3.42': {
    sanskrit: `एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना।
जहि शत्रुं महाबाहो कामरूपं दुरासदम्॥`,
    telugu: `మహాబాహో, ఈ విధంగా బుద్ధి కంటే ఆత్మ పరం అని తెలుసుకుని, ఆత్మచే ఆత్మను స్థిరం చేసుకుని, దుర్జయమైన కామరూప శత్రువును జయించు.`,
    english: `Thus knowing oneself to be transcendental to material senses, mind, and intelligence, O mighty-armed, one should steady the mind by deliberate spiritual intelligence and thus — by spiritual strength — conquer this insatiable enemy known as desire.`,
    explanation: `The conclusion: know the Self to be beyond even the intellect; use the higher Self to steady the lower instruments; conquer desire. This is the ascending movement of the whole chapter — from confusion to clarity, from bondage to freedom.`,
    takeaway: `Use the higher Self to steady the lower instruments — this is the ascending path of freedom.`,
    tags: ['wisdom', 'action']
  },
  '3.43': {
    sanskrit: `एवं बुद्धेः परं बुद्ध्वा संस्तभ्यात्मानमात्मना।
जहि शत्रुं महाबाहो कामरूपं दुरासदम्॥`,
    telugu: `మహాబాహో, ఈ విధంగా బుద్ధి కంటే ఆత్మ పరం అని తెలుసుకుని, ఆత్మచే ఆత్మను స్థిరం చేసుకుని, దుర్జయమైన కామరూప శత్రువును జయించు.`,
    english: `Thus knowing oneself to be transcendental to material senses, mind, and intelligence, O mighty-armed, one should steady the mind by deliberate spiritual intelligence and thus conquer the formidable enemy known as desire.`,
    explanation: `Chapter 3 ends where it began — with the call to conquer desire. But now Arjuna has a full understanding of what desire is, where it hides, and how to address it: by knowing the Self that is higher than the intellect and using that higher Self to steady and direct all lower faculties.`,
    takeaway: `Know the Self to be higher than the intellect — use it to conquer desire from within.`,
    tags: ['wisdom', 'action']
  },
  '4.1': {
    sanskrit: `श्रीभगवानुवाच
इमं विवस्वते योगं प्रोक्तवानहमव्ययम्।
विवस्वान्मनवे प्राह मनुरिक्ष्वाकवेऽब्रवीत्॥`,
    telugu: `వివస్వంతుడికి ఈ అవ్యయమైన యోగాన్ని నేను బోధించాను. వివస్వంతుడు మనువుకు చెప్పాడు. మనువు ఇక్ష్వాకువుకు చెప్పాడు.`,
    english: `I instructed this imperishable science of yoga to the sun god, Vivasvan, who taught it to Manu, who taught it to Ikshvaku.`,
    explanation: `This yoga has been passed through a lineage: from the Divine to the sun, to humanity's ancestor Manu, to King Ikshvaku. Wisdom is not invented but received, transmitted, and lived. Each generation has the responsibility to receive and pass on genuine wisdom.`,
    takeaway: `Wisdom is received and transmitted — your responsibility is to receive it genuinely and pass it on.`,
    tags: ['wisdom', 'duty']
  },
  '4.2': {
    sanskrit: `एवं परम्पराप्राप्तमिमं राजर्षयो विदुः।
स कालेनेह महता योगो नष्टः परन्तप॥`,
    telugu: `ఈ విధంగా పరంపరగా పొందిన ఈ యోగాన్ని రాజర్షులు తెలుసుకున్నారు. పరంతపా, కాలక్రమంలో ఈ యోగం లుప్తమైంది.`,
    english: `This supreme science was thus received through the chain of disciplic succession, and the saintly kings understood it in that way. But in course of time the succession was broken, and therefore the science as it is appears to be lost.`,
    explanation: `Every generation risks losing the wisdom of the previous. What is not actively transmitted gradually disappears. This is why conscious, intentional teaching and learning matter so much. Cultural wisdom does not preserve itself — it requires dedicated human effort.`,
    takeaway: `Wisdom does not preserve itself — every generation must consciously receive and transmit it.`,
    tags: ['wisdom', 'duty']
  },
  '4.3': {
    sanskrit: `स एवायं मया तेऽद्य योगः प्रोक्तः पुरातनः।
भक्तोऽसि मे सखा चेति रहस्यं ह्येतदुत्तमम्॥`,
    telugu: `ఆ పూర్వపు యోగమే నేడు నీకు చెప్తున్నాను. నువ్వు నా భక్తుడవు, మిత్రుడవు. ఇది ఉత్తమ రహస్యం.`,
    english: `That very ancient science of the relationship with the Supreme is today told by me to you because you are my devotee as well as my friend and can therefore understand the transcendental mystery of this science.`,
    explanation: `Krishna teaches Arjuna not just because he is qualified intellectually but because he is a friend and devotee. The deepest teachings flow through relationship and trust, not just through formal qualification. Love opens the door to wisdom.`,
    takeaway: `The deepest teachings flow through relationship and trust — love opens doors that credentials cannot.`,
    tags: ['wisdom', 'devotion']
  },
  '4.4': {
    sanskrit: `अर्जुन उवाच
अपरं भवतो जन्म परं जन्म विवस्वतः।
कथमेतद्विजानीयां त्वमादौ प्रोक्तवानिति॥`,
    telugu: `అర్జునుడు పలికెను:
మీ జన్మ అర్వాచీనమైనది. వివస్వంతుని జన్మ పురాతనమైనది. ఆది కాలంలో మీరే చెప్పారని నేను ఎలా తెలుసుకోవాలి?`,
    english: `Arjuna said: The sun god Vivasvan was born before you; how then can I understand that you instructed him in the beginning?`,
    explanation: `Arjuna asks the obvious question: how could Krishna have taught someone born long before him? This is exactly the right question. It opens the door to Krishna's revelation about divine incarnation and the nature of the eternal Self.`,
    takeaway: `The most honest questions open the doors to the deepest teachings — never be afraid to ask.`,
    tags: ['wisdom', 'truth']
  },
  '4.5': {
    sanskrit: `श्रीभगवानुवाच
बहूनि मे व्यतीतानि जन्मानि तव चार्जुन।
तान्यहं वेद सर्वाणि न त्वं वेत्थ परन्तप॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
పరంతపా, నాకు మరియు నీకు అనేక జన్మలు గడిచాయి. వాటన్నింటినీ నేను తెలుసుకుంటాను, నువ్వు తెలుసుకోవు.`,
    english: `The Blessed Lord said: Many, many births both you and I have passed. I can remember all of them, but you cannot, O Arjuna.`,
    explanation: `Krishna and Arjuna have both existed through many births. The difference: Krishna, as the divine Self, remembers all of them. This points to a dimension of identity that transcends individual lifetimes — the eternal witness that is present in every life.`,
    takeaway: `There is a dimension of your identity that transcends this single lifetime — begin to explore it.`,
    tags: ['soul', 'wisdom']
  },
  '4.6': {
    sanskrit: `अजोऽपि सन्नव्ययात्मा भूतानामीश्वरोऽपि सन्।
प्रकृतिं स्वामधिष्ठाय सम्भवाम्यात्ममायया॥`,
    telugu: `నేను అజుడనైనా, అవ్యయ స్వరూపుడనైనా, భూతాలకు ఈశ్వరుడనైనా, నా ప్రకృతిని అధిష్టించి నా మాయ ద్వారా జన్మిస్తాను.`,
    english: `Although I am unborn and my transcendental body never deteriorates, and although I am the Lord of all living entities, I still appear in every millennium in my original transcendental form.`,
    explanation: `The Divine appears in forms within the world while remaining essentially unborn and unchanging. This is the paradox of avatara: the Infinite appears finite without ceasing to be Infinite. Like space appearing in the form of a room without becoming limited.`,
    takeaway: `The Infinite can appear in finite form without ceasing to be Infinite — this is the mystery of avatar.`,
    tags: ['wisdom', 'truth']
  },
  '4.7': {
    sanskrit: `यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।
अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥`,
    telugu: `భరతవంశీయుడా, ధర్మం పతనం అయినప్పుడు మరియు అధర్మం పెరిగినప్పుడు, అప్పుడు నేను నన్ను నేను సృష్టించుకుంటాను.`,
    english: `Whenever and wherever there is a decline of righteousness and a rise of unrighteousness, O Bharata, at that time I manifest myself.`,
    explanation: `When dharma declines and adharma rises, the Divine responds. This is not passivity but active cosmic care. The universe has a self-correcting principle: when enough disorder accumulates, a corrective force arises. This gives us hope without complacency.`,
    takeaway: `The universe has a self-correcting principle — decline of righteousness calls forth its restoration.`,
    tags: ['truth', 'devotion']
  },
  '4.8': {
    sanskrit: `परित्राणाय साधूनां विनाशाय च दुष्कृताम्।
धर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥`,
    telugu: `సజ్జనుల రక్షణ కోసం, దుర్జనుల వినాశం కోసం, ధర్మ స్థాపన కోసం నేను యుగ యుగంలో జన్మిస్తున్నాను.`,
    english: `To deliver the pious and to annihilate the miscreants, as well as to reestablish the principles of religion, I appear millennium after millennium.`,
    explanation: `The three purposes of divine manifestation: protect the good, remove evil, establish dharma. These purposes give meaning to suffering and disorder — they are not permanent conditions but moments in a larger cycle of restoration and renewal.`,
    takeaway: `Every age of decline is followed by restoration — hold to righteousness and trust the larger process.`,
    tags: ['truth', 'duty']
  },
  '4.9': {
    sanskrit: `जन्म कर्म च मे दिव्यमेवं यो वेत्ति तत्त्वतः।
त्यक्त्वा देहं पुनर्जन्म नैति मामेति सोऽर्जुन॥`,
    telugu: `అర్జునా, నా జన్మ మరియు కర్మ దివ్యమైనవని ఈ విధంగా తత్వతః తెలిసినవాడు, దేహం విడిచిన తర్వాత తిరిగి జన్మించడు. నన్నే పొందుతాడు.`,
    english: `One who knows the transcendental nature of my appearance and activities does not, upon leaving the body, take birth again in this material world, but attains my eternal abode, O Arjuna.`,
    explanation: `Understanding the divine nature of the teacher's appearance and actions is itself liberating. This is not intellectual assent to doctrine but genuine recognition that transforms the knower. Such understanding dissolves the false sense of separation from the Divine.`,
    takeaway: `Genuine understanding of the Divine's nature — not belief, but recognition — is itself liberating.`,
    tags: ['wisdom', 'devotion']
  },
  '4.10': {
    sanskrit: `वीतरागभयक्रोधा मन्मया मामुपाश्रिताः।
बहवो ज्ञानतपसा पूता मद्भावमागताः॥`,
    telugu: `రాగ భయ క్రోధాలు విడిచి, జ్ఞాన తపస్సుతో పవిత్రులై, నన్నే ఆశ్రయించి, నాలో నిమగ్నులై అనేకులు నా భావాన్ని పొందారు.`,
    english: `Being freed from attachment, fear, and anger, being fully absorbed in me and taking refuge in me, many persons in the past became purified by knowledge of me and thus attained my divine love.`,
    explanation: `Throughout history, many have been freed from attachment, fear, and anger through devotion. This is not exclusive privilege but a universal possibility. The path is open; the examples exist. What remains is the choice to walk it.`,
    takeaway: `Liberation from attachment, fear, and anger is a universal possibility — many have walked this path.`,
    tags: ['devotion', 'wisdom']
  },
  '4.11': {
    sanskrit: `ये यथा मां प्रपद्यन्ते तांस्तथैव भजाम्यहम्।
मम वर्त्मानुवर्तन्ते मनुष्याः पार्थ सर्वशः॥`,
    telugu: `పార్థా, ఎవరు ఎలా నన్ను ఆశ్రయిస్తారో, అలాగే నేను వారిని ఆదుకుంటాను. మనుషులు అన్ని విధాలా నా మార్గాన్నే అనుసరిస్తారు.`,
    english: `As people approach me, so I reward them. People follow my path in all respects, O Partha.`,
    explanation: `The Divine meets each seeker exactly where they are, in whatever form they approach. There is no one right form of approach — sincere seeking in any direction is honored. This is the Gita's teaching of inclusive universalism.`,
    takeaway: `The Divine meets sincere seekers wherever they are — all genuine approaches are honored.`,
    tags: ['devotion', 'truth']
  },
  '4.12': {
    sanskrit: `काङ्क्षन्तः कर्मणां सिद्धिं यजन्त इह देवताः।
क्षिप्रं हि मानुषे लोके सिद्धिर्भवति कर्मजा॥`,
    telugu: `కర్మ సిద్ధిని కాంక్షిస్తూ ఇక్కడ దేవతలను పూజిస్తారు. మానవ లోకంలో కర్మజన్య సిద్ధి శీఘ్రంగా కలుగుతుంది.`,
    english: `Men in this world desire success in fruitive activities, and therefore they worship the gods. Quickly, of course, men get results from fruitive work in this world.`,
    explanation: `Those who desire specific results worship specific powers for quick results. There is nothing wrong with this as a starting point. But the Gita points beyond result-seeking to a deeper fulfillment that permanent results cannot provide.`,
    takeaway: `Result-seeking worship is a valid starting point — but aim eventually for the fulfillment that no result can give.`,
    tags: ['action', 'wisdom']
  },
  '4.13': {
    sanskrit: `चातुर्वर्ण्यं मया सृष्टं गुणकर्मविभागशः।
तस्य कर्तारमपि मां विद्ध्यकर्तारमव्ययम्॥`,
    telugu: `గుణ కర్మ విభాగాల ప్రకారం నాలుగు వర్ణాలు నాచే సృష్టించబడ్డాయి. వాటి కర్తనైన నన్ను కూడా అకర్తను, అవ్యయుని అని తెలుసుకో.`,
    english: `According to the three modes of material nature and the work associated with them, the four divisions of human society are created by me. And although I am the creator of this system, know that I am still the non-doer, being unchangeable.`,
    explanation: `The social order arises from the gunas — different qualities call for different roles. But the Divine who created this through natural law remains the non-doer, unchanging. This paradox teaches: engagement without ego-doership is possible.`,
    takeaway: `The Divine creates through natural law while remaining the non-doer — this is the model for our own action.`,
    tags: ['wisdom', 'truth']
  },
  '4.14': {
    sanskrit: `न मां कर्माणि लिम्पन्ति न मे कर्मफले स्पृहा।
इति मां योऽभिजानाति कर्मभिर्न स बध्यते॥`,
    telugu: `కర్మలు నన్ను అంటవు. కర్మఫలం పై నాకు ఆసక్తి లేదు. నన్ను ఇలా తెలుసుకున్నవాడు కర్మలచే బంధించబడడు.`,
    english: `There is no work that affects me, nor do I aspire for the fruits of action. One who understands this truth about me also does not become entangled in the fruitive reactions of work.`,
    explanation: `Krishna acts without being bound by action because he has no ego-desire for fruits. This is the model: act completely, desire nothing for the ego-self. One who understands and practices this is similarly freed from karma's binding force.`,
    takeaway: `Act completely without ego-desire for results — this is what frees action from its binding force.`,
    tags: ['action', 'wisdom']
  },
  '4.15': {
    sanskrit: `एवं ज्ञात्वा कृतं कर्म पूर्वैरपि मुमुक्षुभिः।
कुरु कर्मैव तस्मात्त्वं पूर्वैः पूर्वतरं कृतम्॥`,
    telugu: `ముముక్షువులైన పూర్వులు కూడా ఇలా తెలుసుకునే కర్మ చేశారు. కాబట్టి పూర్వులచే పూర్వకాలంలో చేయబడిన కర్మలనే నువ్వు కూడా చేయి.`,
    english: `All the liberated souls of ancient times acted with this understanding. Therefore, as the ancients did, you should perform your duty in this divine consciousness.`,
    explanation: `Every great soul throughout history has acted from this understanding. We are not inventing something new — we are rediscovering what the wisest have always known. Join the lineage of those who act with wisdom and non-attachment.`,
    takeaway: `Join the lineage of the wise who have always acted with wisdom and non-attachment.`,
    tags: ['action', 'wisdom']
  },
  '4.16': {
    sanskrit: `किं कर्म किमकर्मेति कवयोऽप्यत्र मोहिताः।
तत्ते कर्म प्रवक्ष्यामि यज्ज्ञात्वा मोक्ष्यसेऽशुभात्॥`,
    telugu: `కర్మ ఏమిటి, అకర్మ ఏమిటి అని కవులు కూడా మోహపడ్డారు. ఆ కర్మ నీకు చెప్తాను, దానిని తెలుసుకుని అశుభం నుండి విముక్తి పొందుతావు.`,
    english: `Even the intelligent are bewildered in determining what is action and what is inaction. Now I shall explain to you what action is, knowing which you shall be liberated from all misfortune.`,
    explanation: `Even the wisest are confused about what is truly action and what is truly inaction. This confusion itself is significant — it points to a deeper layer of understanding beyond the obvious distinction between doing and not doing.`,
    takeaway: `The confusion about action and inaction points to a deeper layer of wisdom worth exploring.`,
    tags: ['wisdom', 'action']
  },
  '4.17': {
    sanskrit: `कर्मणो ह्यपि बोद्धव्यं बोद्धव्यं च विकर्मणः।
अकर्मणश्च बोद्धव्यं गहना कर्मणो गतिः॥`,
    telugu: `కర్మ విషయం కూడా తెలుసుకోవాలి, వికర్మ కూడా తెలుసుకోవాలి, అకర్మ కూడా తెలుసుకోవాలి. కర్మ యొక్క గతి లోతైనది.`,
    english: `The intricacies of action are very hard to understand. Therefore one must know properly what action is, what forbidden action is, and what inaction is.`,
    explanation: `Three categories need understanding: right action, wrong action, and inaction. Each has its own nature and consequences. Wisdom about action is not simple — it requires careful discernment of the full spectrum of what action is and what it does.`,
    takeaway: `Wisdom about action is deep and requires careful discernment — do not oversimplify it.`,
    tags: ['wisdom', 'action']
  },
  '4.18': {
    sanskrit: `कर्मण्यकर्म यः पश्येदकर्मणि च कर्म यः।
स बुद्धिमान्मनुष्येषु स युक्तः कृत्स्नकर्मकृत्॥`,
    telugu: `కర్మలో అకర్మ చూసేవాడు, అకర్మలో కర్మ చూసేవాడు మనుషులలో బుద్ధిమంతుడు, యుక్తుడు, సమస్త కర్మలు చేసే వాడు.`,
    english: `One who sees inaction in action, and action in inaction, is intelligent among men. Such a person is a transcendentalist and accomplisher of all things.`,
    explanation: `The deepest level: seeing stillness within activity (inaction in action) and restlessness within apparent stillness (action in inaction). The athlete in 'flow,' the artist fully absorbed — these are glimpses of inaction in action. Full engagement with complete inner stillness.`,
    takeaway: `The deepest wisdom sees stillness within activity — full engagement with complete inner peace.`,
    tags: ['wisdom', 'action']
  },
  '4.19': {
    sanskrit: `यस्य सर्वे समारम्भाः कामसङ्कल्पवर्जिताः।
ज्ञानाग्निदग्धकर्माणं तमाहुः पण्डितं बुधाः॥`,
    telugu: `ఎవని అన్ని ప్రయత్నాలు కామసంకల్పం లేనివో, జ్ఞానాగ్నిలో కర్మలు దగ్ధమైనవో, అతనిని పండితుడు అని వివేకులు పిలుస్తారు.`,
    english: `One is understood to be in full knowledge whose every endeavor is devoid of desire for sense gratification. The wise say he is a worker for whom the reactions of work have been burned up by the fire of perfect knowledge.`,
    explanation: `Perfect knowledge burns away the binding force of karma like fire burns kindling — completely. The person of perfect knowledge still acts, but their actions leave no residue, create no binding consequence. The fire of understanding transforms everything it touches.`,
    takeaway: `Perfect knowledge burns away karma's binding force — understanding transforms every action it touches.`,
    tags: ['knowledge', 'wisdom']
  },
  '4.20': {
    sanskrit: `त्यक्त्वा कर्मफलासङ्गं नित्यतृप्तो निराश्रयः।
कर्मण्यभिप्रवृत्तोऽपि नैव किञ्चित्करोति सः॥`,
    telugu: `కర్మఫలాసక్తిని విడిచి, నిత్యతృప్తుడై, ఏ ఆశ్రయం అవసరంలేక, కర్మలో ప్రవృత్తుడైనా ఏమీ చేయనట్లే.`,
    english: `Abandoning all attachment to the results of activities, ever satisfied and independent, one performs no fruitive action, although engaged in all kinds of activities.`,
    explanation: `The liberated person acts fully in the world while doing nothing from ego-desire. They are ever satisfied — not because everything goes their way but because they don't need anything to go their way to be at peace. This is the fruit of wisdom.`,
    takeaway: `True satisfaction does not depend on outcomes — it comes from being rooted in the Self beyond all outcomes.`,
    tags: ['wisdom', 'detachment']
  },
  '4.21': {
    sanskrit: `निराशीर्यतचित्तात्मा त्यक्तसर्वपरिग्रहः।
शारीरं केवलं कर्म कुर्वन्नाप्नोति किल्बिषम्॥`,
    telugu: `ఆశ లేనివాడు, చిత్తాత్మలను నిగ్రహించినవాడు, సమస్త పరిగ్రహాన్ని విడిచినవాడు, కేవలం శరీర కర్మలు చేసినా పాపాన్ని పొందడు.`,
    english: `Such a person, without any sense of proprietorship and without false ego, does only bodily work for his own maintenance and does not incur sin.`,
    explanation: `When action is done without ownership, false ego, or accumulation — purely as bodily maintenance, pure function — no sin accrues. This describes action completely freed from the ego's agenda. The body acts; the Self remains pure.`,
    takeaway: `Action freed from ego's agenda creates no binding consequence — act without ownership.`,
    tags: ['action', 'wisdom']
  },
  '4.22': {
    sanskrit: `यदृच्छालाभसन्तुष्टो द्वन्द्वातीतो विमत्सरः।
समः सिद्धावसिद्धौ च कृत्वापि न निबध्यते॥`,
    telugu: `అదృష్టవశాత్తు వచ్చినదానితో తృప్తుడై, ద్వంద్వాలను దాటి, మాత్సర్యం లేనివాడు, సిద్ధి అసిద్ధులలో సమంగా ఉండి, కర్మ చేసినా బంధింపబడడు.`,
    english: `One who is satisfied with gain which comes of its own accord, who is free from duality and does not envy, who is steady in both success and failure, is never entangled in karmic reactions, even though performing actions.`,
    explanation: `Content with whatever comes, equal in success and failure, free from envy — this is the karma yogi in action. They participate fully in life without being controlled by its outcomes. This is the highest form of practical wisdom.`,
    takeaway: `Participate fully in life without being controlled by its outcomes — this is the karma yogi.`,
    tags: ['detachment', 'peace']
  },
  '4.23': {
    sanskrit: `गतसङ्गस्य मुक्तस्य ज्ञानावस्थितचेतसः।
यज्ञायाचरतः कर्म समग्रं प्रविलीयते॥`,
    telugu: `ఆసక్తి లేనివాడు, విముక్తుడు, జ్ఞానంలో స్థిత చిత్తుడు, యజ్ఞం కోసం కర్మ చేసేవాని కర్మ సమగ్రంగా కరిగిపోతుంది.`,
    english: `The work of a person who is unattached to the modes of material nature and who is fully situated in transcendental knowledge merges entirely into transcendence.`,
    explanation: `When action is performed without attachment, with knowledge, and as an offering — it dissolves into the transcendental. Nothing accrues, nothing binds. The river of action flows into the ocean of the eternal without leaving a residue.`,
    takeaway: `Action done with knowledge and as offering dissolves into the transcendental — it leaves no residue.`,
    tags: ['action', 'knowledge']
  },
  '4.24': {
    sanskrit: `ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम्।
ब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना॥`,
    telugu: `ब्रह्मार्पण ब्रह्म हविस्, ब्रह्माग्नौ ब्रह्मणा हुतम् — బ్రహ్మ కర్మ సమాధి గలవానిచే పొందవలసినది బ్రహ్మమే.`,
    english: `Brahman is the offering, Brahman is the oblation offered by Brahman into the fire of Brahman. Brahman shall be reached by one who always sees Brahman in action.`,
    explanation: `Everything in the offering is Brahman: the act of offering, the thing offered, the fire, the one who offers, the result. When the Divine is seen in every element of every action, the entire act of living becomes sacred. This is the ultimate yoga.`,
    takeaway: `When the Divine is seen in every element of every action, the whole of life becomes sacred.`,
    tags: ['wisdom', 'devotion']
  },
  '4.25': {
    sanskrit: `दैवमेवापरे यज्ञं योगिनः पर्युपासते।
ब्रह्माग्नावपरे यज्ञं यज्ञेनैवोपजुह्वति॥`,
    telugu: `ఇతర యోగులు దేవతా యజ్ఞాన్ని పరిచర్యగా చేస్తారు. మరి ఇతరులు బ్రహ్మాగ్నిలో యజ్ఞం ద్వారానే యజ్ఞాన్ని హవనం చేస్తారు.`,
    english: `Some yogis worship the gods through sacrifice; some offer sacrifice into the fire of Brahman itself by performing sacrifice as their sacrifice.`,
    explanation: `Different practitioners perform different types of sacrifice. Some perform elaborate rituals to specific deities; others offer the entire act of worship into the fire of awareness itself. Both are valid; the quality of consciousness is what determines the value.`,
    takeaway: `Different temperaments express devotion differently — honor the sincerity, not just the form.`,
    tags: ['devotion', 'action']
  },
  '4.26': {
    sanskrit: `श्रोत्रादीनीन्द्रियाण्यन्ये संयमाग्निषु जुह्वति।
शब्दादीन्विषयानन्ये इन्द्रियाग्निषु जुह्वति॥`,
    telugu: `ఇతరులు శ్రోత్రాది ఇంద్రియాలను నిగ్రహాగ్నులలో హవనం చేస్తారు. ఇతరులు శబ్దాది విషయాలను ఇంద్రియాగ్నులలో హవనం చేస్తారు.`,
    english: `Some offer the senses in the fire of controlled mind; others offer sense objects into the fire of senses.`,
    explanation: `Some spiritual practices work by offering the senses (withdrawing them from objects); others by mindfully experiencing sense objects without attachment. Again, the framework honors multiple valid practices rather than insisting on one form.`,
    takeaway: `Multiple valid spiritual practices exist — find what works for your temperament and practice it.`,
    tags: ['self-control', 'action']
  },
  '4.27': {
    sanskrit: `सर्वाणीन्द्रियकर्माणि प्राणकर्माणि चापरे।
आत्मसंयमयोगाग्नौ जुह्वति ज्ञानदीपिते॥`,
    telugu: `ఇతరులు ఇంద్రియ కర్మలు మరియు ప్రాణ కర్మలు అన్నింటినీ జ్ఞానంతో దీప్తమైన ఆత్మ సంయమ యోగాగ్నిలో హవనం చేస్తారు.`,
    english: `Others, who are interested in achieving self-realization through control of the mind and senses, offer the functions of the senses and of vital forces into the fire of the controlled mind, kindled by knowledge.`,
    explanation: `The fire of self-discipline, kindled by knowledge, consumes the scattered energy of the senses and vital forces. When all functions are brought under the steady authority of the awakened mind, they feed liberation rather than perpetuating bondage.`,
    takeaway: `Bring scattered energies under the authority of the awakened mind — discipline becomes liberation.`,
    tags: ['self-control', 'wisdom']
  },
  '4.28': {
    sanskrit: `द्रव्ययज्ञास्तपोयज्ञा योगयज्ञास्तथापरे।
स्वाध्यायज्ञानयज्ञाश्च यतयः संशितव्रताः॥`,
    telugu: `దివ్యయజ్ఞాలు, తపో యజ్ఞాలు, యోగ యజ్ఞాలు, అలాగే స్వాధ్యాయ జ్ఞాన యజ్ఞాలు — ఇవి నిశ్చితమైన వ్రతం గల యతులచే చేయబడతాయి.`,
    english: `There are those who offer sacrifice in the form of wealth; others in the form of austerity; others in the form of yoga; others in the form of self-study and knowledge — these are the disciplined strivers with firm vows.`,
    explanation: `All sincere spiritual practices are forms of sacrifice: sharing wealth, practicing austerity, yoga, scripture-study, and knowledge. The Gita honors this diversity. Whatever your form of sincere practice, it is a valid offering.`,
    takeaway: `Whatever your form of sincere practice, it is a valid offering on the altar of the Divine.`,
    tags: ['action', 'devotion']
  },
  '4.29': {
    sanskrit: `अपाने जुह्वति प्राणं प्राणेऽपानं तथापरे।
प्राणापानगती रुद्ध्वा प्राणायामपरायणाः॥`,
    telugu: `ఇతరులు అపానలో ప్రాణాన్ని హవనం చేస్తారు. ప్రాణలో అపానాన్ని హవనం చేస్తారు. ప్రాణాయామ పరాయణులై ప్రాణాపానల గతులను నిరుద్ధం చేస్తారు.`,
    english: `Some offer the in-breath into the out-breath, and the out-breath into the in-breath, thus arresting the force of both; some, as regulation of breath, offer the movements of in-breath and out-breath.`,
    explanation: `Pranayama — breath regulation — is itself a form of sacrifice. The breath bridges body and mind; controlling it gives access to deeper layers of consciousness. Ancient yogis understood what modern science confirms: breath regulation profoundly affects the nervous system.`,
    takeaway: `Breath regulation is not just physical — it bridges body and mind and opens deeper consciousness.`,
    tags: ['yoga', 'self-control']
  },
  '4.30': {
    sanskrit: `अपरे नियताहाराः प्राणान्प्राणेषु जुह्वति।
सर्वेऽप्येते यज्ञविदो यज्ञक्षपितकल्मषाः॥`,
    telugu: `ఆహారాన్ని నిగ్రహించి, ప్రాణాలలో ప్రాణాలను హవనం చేసేవారు కూడా ఉన్నారు. వీరందరూ యజ్ఞాన్ని తెలిసినవారు, యజ్ఞంతో పాపాన్ని నశింపజేసినవారు.`,
    english: `Others, who eat in regulated amounts, offer the life force into the life force; all these are knowers of sacrifice, and by sacrifice they have cleansed themselves of all impurities.`,
    explanation: `All forms of sacrifice — whether of wealth, austerity, breath, or food — have the power to cleanse impurities. The common element is the spirit of offering: placing something of yourself on the altar of the sacred. Sincerity transforms the act.`,
    takeaway: `The spirit of offering — placing something of yourself on the altar of the sacred — is what transforms.`,
    tags: ['action', 'devotion']
  },
  '4.31': {
    sanskrit: `यज्ञशिष्टामृतभुजो यान्ति ब्रह्म सनातनम्।
नायं लोकोऽस्त्ययज्ञस्य कुतोऽन्यः कुरुसत्तम॥`,
    telugu: `కురు శ్రేష్ఠా, యజ్ఞ శిష్టమైన అమృతాన్ని తినేవారు సనాతన బ్రహ్మాన్ని పొందుతారు. యజ్ఞం చేయనివానికి ఈ లోకమే లేదు, ఇక ఇతర లోకం ఎక్కడిది?`,
    english: `O best of the Kuru dynasty, without sacrifice one cannot live happily on this planet, let alone in the next life. Those who eat the remnants of sacrifice attain the eternal.`,
    explanation: `Those who eat the 'remnants of sacrifice' — who live on what remains after serving others — attain the eternal. This is the principle: serve first, then use what remains. This ordering of priorities — others before self — is the sacrificial way of life.`,
    takeaway: `Serve first and live on what remains — this ordering of priorities is the sacrificial way of life.`,
    tags: ['action', 'duty']
  },
  '4.32': {
    sanskrit: `एवं बहुविधा यज्ञा वितता ब्रह्मणो मुखे।
कर्मजान्विद्धि तान्सर्वान्एवं ज्ञात्वा विमोक्ष्यसे॥`,
    telugu: `ఈ విధంగా అనేక విధాలైన యజ్ఞాలు బ్రహ్మ ముఖంలో విస్తరించి ఉన్నాయి. వాటన్నింటినీ కర్మ జన్యాలని తెలుసుకో. ఇలా తెలుసుకుని విముక్తి పొందుతావు.`,
    english: `All these different types of sacrifice are approved by the Vedas, and all of them are born of different types of work. Knowing them as such, you will become liberated.`,
    explanation: `The many forms of sacrifice — ritual, breath, food, knowledge, austerity — all arise from action and all lead toward liberation when performed with understanding. The key is to understand what you are doing and why. Understanding transforms routine into liberation.`,
    takeaway: `Understanding what you are doing and why transforms routine action into liberation.`,
    tags: ['wisdom', 'action']
  },
  '4.33': {
    sanskrit: `श्रेयान्द्रव्यमयाद्यज्ञाज्ज्ञानयज्ञः परन्तप।
सर्वं कर्माखिलं पार्थ ज्ञाने परिसमाप्यते॥`,
    telugu: `పరంతపా, ద్రవ్యమయ యజ్ఞం కంటే జ్ఞాన యజ్ఞం శ్రేష్ఠమైనది. పార్థా, సమస్త కర్మ జ్ఞానంలో సమాప్తమవుతుంది.`,
    english: `O Arjuna, the sacrifice of knowledge is better than the sacrifice of material things. After all, the culmination of all work is knowledge.`,
    explanation: `Knowledge-sacrifice surpasses material sacrifice because understanding is the ultimate goal of all action. What is the purpose of any human activity? At its deepest level, to understand — oneself, others, and the nature of reality. All paths eventually converge on wisdom.`,
    takeaway: `The ultimate purpose of all human activity is understanding — knowledge is the crown of action.`,
    tags: ['knowledge', 'wisdom']
  },
  '4.34': {
    sanskrit: `तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया।
उपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः॥`,
    telugu: `ప్రణిపాతం (ప్రణతి) ద్వారా, ప్రశ్నల ద్వారా, సేవ ద్వారా ఆ జ్ఞానాన్ని తెలుసుకో. తత్వదర్శులైన జ్ఞానులు నీకు జ్ఞానాన్ని ఉపదేశిస్తారు.`,
    english: `Just try to learn the truth by approaching a spiritual master. Inquire from him submissively and render service unto him. The self-realized souls can impart knowledge unto you because they have seen the truth.`,
    explanation: `Three requirements for receiving wisdom from a teacher: humble approach (pranipata), sincere questioning (pariprasna), and service (seva). Not credentials, not payment, but genuine humility, authentic inquiry, and willingness to contribute.`,
    takeaway: `Receive wisdom through humility, sincere questioning, and service — these open every teacher's heart.`,
    tags: ['wisdom', 'knowledge']
  },
  '4.35': {
    sanskrit: `यज्ज्ञात्वा न पुनर्मोहमेवं यास्यसि पाण्डव।
येन भूतान्यशेषाणि द्रक्ष्यस्यात्मन्यथो मयि॥`,
    telugu: `పాండవా, ఆ జ్ఞానం తెలుసుకున్న తర్వాత నువ్వు తిరిగి మోహంలో పడవు. దీని ద్వారా అన్ని భూతాలను నీలో మరియు నాలో చూస్తావు.`,
    english: `Having obtained real knowledge from a self-realized soul, you will never again fall into such delusion, for by this knowledge you will see that all living beings are part of the Supreme, or, in other words, that they are mine.`,
    explanation: `After receiving this knowledge, you will see all beings within yourself and within the Divine. This is the practical fruit of wisdom: not just information but a transformed way of seeing that cannot be undone once genuinely attained. The world looks different from wisdom.`,
    takeaway: `Genuine wisdom changes how you see everything — all beings seen within the Divine is not a belief but a vision.`,
    tags: ['wisdom', 'truth']
  },
  '4.36': {
    sanskrit: `अपि चेदसि पापेभ्यः सर्वेभ्यः पापकृत्तमः।
सर्वं ज्ञानप्लवेनैव वृजिनं सन्तरिष्यसि॥`,
    telugu: `ఒకవేళ నువ్వు సమస్త పాపులకంటే పాపం ఎక్కువగా చేసినా, జ్ఞానమనే నావ ద్వారా మాత్రమే సమస్త పాపాన్ని దాటిపోతావు.`,
    english: `Even if you are considered the most sinful of all sinners, when you are situated in the boat of transcendental knowledge, you will be able to cross over the ocean of miseries.`,
    explanation: `No matter how deep one has fallen, the boat of knowledge can carry anyone across. This is one of the Gita's most radical statements of hope: no one is beyond redemption through genuine wisdom. The depth of past mistakes does not determine the availability of liberation.`,
    takeaway: `No one is beyond redemption through genuine wisdom — the boat of knowledge carries anyone.`,
    tags: ['knowledge', 'wisdom']
  },
  '4.37': {
    sanskrit: `यथैधांसि समिद्धोऽग्निर्भस्मसात्कुरुते'र्जुन।
ज्ञानाग्निः सर्वकर्माणि भस्मसात्कुरुते तथा॥`,
    telugu: `అర్జునా, ప్రజ్వలించిన అగ్ని కట్టెలను బుగ్గిచేసినట్లు, జ్ఞానాగ్ని సమస్త కర్మలను బుగ్గిచేస్తుంది.`,
    english: `As the blazing fire turns firewood to ashes, O Arjuna, so does the fire of knowledge reduce all reactions to ashes.`,
    explanation: `The fire of knowledge burns away karma as completely as fire burns wood. Not gradually reduced or managed — completely transformed into ash. This is the most radical statement about knowledge's power: it doesn't just diminish karma, it dissolves it entirely.`,
    takeaway: `Knowledge does not manage karma — it dissolves it completely, like fire reducing wood to ash.`,
    tags: ['knowledge', 'action']
  },
  '4.38': {
    sanskrit: `न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।
तत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति॥`,
    telugu: `ఈ లోకంలో జ్ఞానంతో సమానమైన పవిత్రమైనది లేదు. యోగంలో సంసిద్ధుడు అయిన వ్యక్తి కాలక్రమంలో ఆత్మలో దాన్ని పొందుతాడు.`,
    english: `In this world, there is nothing so sublime and pure as transcendental knowledge. Such knowledge is the mature fruit of all mysticism. And one who has become accomplished in the practice of devotional service enjoys this knowledge within himself in due course of time.`,
    explanation: `Knowledge is the highest purifier — more purifying than any ritual, any austerity, any charity. And the good news: it is available to everyone in time, through sincere practice. Nothing is more accessible and more transformative.`,
    takeaway: `Knowledge is the supreme purifier — more transformative than any ritual or austerity.`,
    tags: ['knowledge', 'wisdom']
  },
  '4.39': {
    sanskrit: `श्रद्धावांल्लभते ज्ञानं तत्परः संयतेन्द्रियः।
ज्ञानं लब्ध्वा परां शान्तिमचिरेणाधिगच्छति॥`,
    telugu: `శ్రద్ధ గలవాడు, తత్పరుడు, సంయతేంద్రియుడు జ్ఞానాన్ని పొందుతాడు. జ్ఞానాన్ని పొందిన తర్వాత శీఘ్రంగా పరమ శాంతిని పొందుతాడు.`,
    english: `A faithful person who is absorbed in transcendental knowledge and who subdues the senses is eligible to achieve such knowledge, and having achieved it he quickly attains the supreme peace.`,
    explanation: `Three conditions for receiving knowledge: faith (shraddha), dedication (tatpara), and sense-control (samyatendriya). These are not prerequisites that exclude — they are practices that prepare. And once knowledge is genuinely received, peace follows quickly.`,
    takeaway: `Faith, dedication, and sense-control prepare the ground — knowledge received in this soil grows fast.`,
    tags: ['knowledge', 'faith']
  },
  '4.40': {
    sanskrit: `अज्ञश्चाश्रद्दधानश्च संशयात्मा विनश्यति।
नायं लोकोऽस्ति न परो न सुखं संशयात्मनः॥`,
    telugu: `అజ్ఞుడు, అశ్రద్ధాళువు, సందేహాత్మ వినాశమవుతాడు. సందేహాత్మకు ఈ లోకం లేదు, పరలోకం లేదు, సుఖం లేదు.`,
    english: `But ignorant and faithless persons who doubt the revealed scriptures do not attain God consciousness; they fall down. For the doubting soul there is happiness neither in this world nor the next.`,
    explanation: `The doubting soul — not the healthy questioner but the corrosively cynical — finds no peace in either world. Healthy inquiry leads to understanding; toxic doubt that refuses all answers leads to paralysis. The difference is in the spirit: sincere vs. defensive.`,
    takeaway: `Healthy questioning leads to wisdom; corrosive cynicism that refuses all answers leads only to paralysis.`,
    tags: ['wisdom', 'truth']
  },
  '4.41': {
    sanskrit: `योगसंन्यस्तकर्माणं ज्ञानसञ्छिन्नसंशयम्।
आत्मवन्तं न कर्माणि निबध्नन्ति धनञ्जय॥`,
    telugu: `ధనంజయా, యోగం ద్వారా కర్మలను సంన్యసించినవాడు, జ్ఞానంతో సందేహాలు తొలగించుకున్నవాడు, ఆత్మవంతుని కర్మలు బంధించవు.`,
    english: `One who acts in devotional service, renouncing the fruits of his actions, and whose doubts have been slain by transcendental knowledge, is situated factually in the self. He is not bound by the reactions of work, O conqueror of riches.`,
    explanation: `When action is surrendered (karma yoga), doubt is dissolved (jnana), and one is established in the Self (atmavastha) — action no longer binds. These three together constitute the complete practice: action, understanding, and identity in the Self.`,
    takeaway: `Action surrendered, doubt dissolved, identity in the Self — these three together complete the practice.`,
    tags: ['wisdom', 'action']
  },
  '4.42': {
    sanskrit: `तस्मादज्ञानसम्भूतं हृत्स्थं ज्ञानासिनात्मनः।
छित्त्वैनं संशयं योगमातिष्ठोत्तिष्ठ भारत॥`,
    telugu: `కాబట్టి అజ్ఞానం నుండి పుట్టి హృదయంలో ఉన్న ఈ సందేహాన్ని జ్ఞానాసి ద్వారా ఖండించి, యోగాన్ని అవలంబించి, లేచి నిలువు, భరతవంశీయుడా.`,
    english: `Therefore the doubts which have arisen in your heart out of ignorance should be slashed by the weapon of knowledge. Armed with yoga, stand up and fight, O Bharata.`,
    explanation: `Chapter 4 ends where it began: with a call to action. Cut the doubt with the sword of knowledge — then arise and act. Wisdom is not the destination; it is the enabling of action. Understanding prepares for full, fearless engagement.`,
    takeaway: `Wisdom enables action — cut the doubt with knowledge, then arise and engage fully.`,
    tags: ['wisdom', 'action']
  },
  '5.1': {
    sanskrit: `अर्जुन उवाच
संन्यासं कर्मणां कृष्ण पुनर्योगं च शंससि।
यच्छ्रेय एतयोरेकं तन्मे ब्रूहि सुनिश्चितम्॥`,
    telugu: `అర్జునుడు పలికెను:
కృష్ణా, నువ్వు కర్మ సంన్యాసాన్ని మళ్ళీ యోగాన్ని ప్రశంసిస్తున్నావు. ఈ రెండిటిలో ఏది శ్రేయమో నిశ్చయంగా చెప్పు.`,
    english: `Arjuna said: O Krishna, you praise the renunciation of action and then again the yoga of action. Tell me which of the two is definitely better.`,
    explanation: `Arjuna is confused about an apparent contradiction: renouncing action vs. performing action selflessly. Both seem to be recommended. This is a genuine question worth asking — apparent contradictions in teaching often point to a deeper unity not yet seen.`,
    takeaway: `When teachings seem to contradict each other, a deeper unity is usually hidden within the apparent contradiction.`,
    tags: ['wisdom', 'action']
  },
  '5.2': {
    sanskrit: `श्रीभगवानुवाच
संन्यासः कर्मयोगश्च निःश्रेयसकरावुभौ।
तयोस्तु कर्मसंन्यासात्कर्मयोगो विशिष्यते॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
సంన్యాసం మరియు కర్మయోగం రెండూ నిఃశ్రేయసాన్ని కలిగిస్తాయి. కానీ రెండింటిలో కర్మ సంన్యాసం కంటే కర్మయోగం విశేషమైనది.`,
    english: `The Blessed Lord said: Both renunciation of action and the yoga of action lead to liberation. But, of the two, the yoga of action is better than the renunciation of action.`,
    explanation: `Both paths lead to liberation, but karma yoga is better for most people. Why? Because it is more accessible, more applicable to daily life, and more likely to be genuinely practiced without self-deception. Most people cannot truly renounce action inwardly.`,
    takeaway: `The best path is not the most extreme but the one most genuinely practiced — karma yoga is accessible.`,
    tags: ['action', 'wisdom']
  },
  '5.3': {
    sanskrit: `ज्ञेयः स नित्यसंन्यासी यो न द्वेष्टि न काङ्क्षति।
निर्द्वन्द्वो हि महाबाहो सुखं बन्धात्प्रमुच्यते॥`,
    telugu: `మహాబాహో, ఎవడు ద్వేషించడో, కోరుకోకుండా ఉంటాడో, అతడు నిత్య సంన్యాసి అని తెలుసుకోవాలి. ద్వంద్వ రహితుడు సుఖంగా బంధం నుండి విముక్తి పొందుతాడు.`,
    english: `One who is not hateful toward any being and who is free from craving is to be known as a constant renunciate. Free from all dualities, O mighty-armed, one is easily liberated from bondage.`,
    explanation: `The true renunciate is not identified by what they wear or where they live but by their inner state: free from hatred and craving. This is renunciation available to everyone, in any situation. Freedom from inner duality is the real renunciation.`,
    takeaway: `True renunciation is inner — freedom from hatred and craving, available to anyone anywhere.`,
    tags: ['wisdom', 'detachment']
  },
  '5.4': {
    sanskrit: `साङ्ख्ययोगौ पृथग्बालाः प्रवदन्ति न पण्डिताः।
एकमप्यास्थितः सम्यगुभयोर्विन्दते फलम्॥`,
    telugu: `పండితులు కాని పిల్లలు సాంఖ్య యోగాలు వేర్వేరని చెప్తారు. రెండింటిలో ఒకటి చక్కగా ఆచరించినా రెండింటి ఫలాన్ని పొందుతాడు.`,
    english: `Only the ignorant speak of devotional service and the renunciation of work as different. Those who are actually learned say that he who applies himself well to one of these paths achieves the results of both.`,
    explanation: `The immature see jnana yoga and karma yoga as opposite and incompatible; the wise see them as two expressions of the same truth. One sincerely followed leads to the same destination as the other. Unity beneath diversity is the advanced view.`,
    takeaway: `Sincerely walk one path and it leads where all genuine paths lead — unity beneath diversity.`,
    tags: ['wisdom', 'truth']
  },
  '5.5': {
    sanskrit: `यत्साङ्ख्यैः प्राप्यते स्थानं तद्योगैरपि गम्यते।
एकं साङ्ख्यं च योगं च यः पश्यति स पश्यति॥`,
    telugu: `సాంఖ్యం ద్వారా పొందిన స్థానాన్ని యోగం ద్వారా కూడా పొందుతారు. సాంఖ్యాన్ని మరియు యోగాన్ని ఒకటే అని చూసే వాడు చూసేవాడు.`,
    english: `The place that is reached by the Sankhyas is also reached by the devotees of yoga. One who sees that the path of analytical study and the path of devotional service are one sees things as they are.`,
    explanation: `The same peak can be reached by different mountain paths. Both the path of knowledge and the path of action lead to the same summit. The one who sees this sees truly. All genuine spiritual paths ultimately converge on the same realization.`,
    takeaway: `All genuine spiritual paths ultimately converge — see the unity beneath the diversity of traditions.`,
    tags: ['wisdom', 'truth']
  },
  '5.6': {
    sanskrit: `संन्यासस्तु महाबाहो दुःखमाप्तुमयोगतः।
योगयुक्तो मुनिर्ब्रह्म नचिरेणाधिगच्छति॥`,
    telugu: `మహాబాహో, యోగం లేకుండా సంన్యాసం పొందడం కష్టం. యోగయుక్తుడైన ముని శీఘ్రంగా బ్రహ్మాన్ని పొందుతాడు.`,
    english: `Merely renouncing all activities yet not engaging in the devotional service of the Lord cannot make one happy. But a thoughtful person engaged in devotional service can achieve the Supreme without delay.`,
    explanation: `Renunciation without yoga is difficult — it creates a vacuum without the positive orientation to fill it. But the person practicing karma yoga, with all their faculties engaged in purposeful service, quickly attains the highest. Integration beats mere subtraction.`,
    takeaway: `Integration beats mere subtraction — engage all faculties in purposeful service rather than just giving up.`,
    tags: ['action', 'wisdom']
  },
  '5.7': {
    sanskrit: `योगयुक्तो विशुद्धात्मा विजितात्मा जितेन्द्रियः।
सर्वभूतात्मभूतात्मा कुर्वन्नपि न लिप्यते॥`,
    telugu: `యోగ యుక్తుడు, విశుద్ధ ఆత్మ, విజితాత్మ, జితేంద్రియుడు, సర్వభూతాత్మ భూతాత్మ — కర్మ చేస్తున్నా అంటడు.`,
    english: `One who works in devotion, who is a pure soul, and who controls his mind and senses is dear to everyone, and everyone is dear to him. Though always working, such a person is never entangled.`,
    explanation: `When the soul is pure, the mind controlled, and the identity expanded to all beings — action leaves no residue. The person who sees all beings as expressions of the same Self cannot harm anyone, cannot be entangled by selfish action, because selfish action requires seeing others as separate.`,
    takeaway: `Expand your identity to include all beings — selfishness becomes structurally impossible.`,
    tags: ['wisdom', 'compassion']
  },
  '5.8': {
    sanskrit: `नैव किञ्चित्करोमीति युक्तो मन्येत तत्त्ववित्।
पश्यञ्शृण्वन्स्पृशञ्जिघ्रन्नश्नन्गच्छन्स्वपञ्श्वसन्॥`,
    telugu: `'నేను ఏమీ చేయడం లేదు' అని తత్వవేత్తయైన యుక్తుడు తలుస్తాడు — చూస్తూ, వింటూ, తాకుతూ, వాసన చూస్తూ, తింటూ, నడుస్తూ, నిద్రపోతూ, శ్వాసిస్తూ.`,
    english: `A person in the divine consciousness, although engaged in seeing, hearing, touching, smelling, eating, moving, sleeping, and breathing, always knows within himself that he actually does nothing at all.`,
    explanation: `Even while fully engaged in all sensory activities, the wise person knows: 'I am not the doer.' The senses interact with their objects; the body breathes and moves; the ego-self is not the ultimate agent. This awareness transforms engagement into liberation.`,
    takeaway: `Even in full activity, the wise know 'I am not the ultimate doer' — this awareness transforms engagement.`,
    tags: ['wisdom', 'detachment']
  },
  '5.9': {
    sanskrit: `प्रलपन्विसृजन्गृह्णन्नुन्मिषन्निमिषन्नपि।
इन्द्रियाणीन्द्रियार्थेषु वर्तन्त इति धारयन्॥`,
    telugu: `మాట్లాడుతూ, విడుస్తూ, తీసుకుంటూ, కళ్ళు తెరుస్తూ, మూస్తూ — ఇంద్రియాలు ఇంద్రియ విషయాలలో వర్తిస్తున్నాయని తెలుసుకుని.`,
    english: `Speaking, releasing, receiving, opening and closing the eyes — the wise person knows that it is the senses that engage with sense objects, not the Self.`,
    explanation: `Every action — speaking, receiving, even blinking — is the senses acting on sense objects. The Self is the witness, not the actor. This understanding, if genuinely realized (not just intellectually accepted), completely transforms one's relationship to action and identity.`,
    takeaway: `The Self is the witness, not the actor — this understanding transforms identity.`,
    tags: ['wisdom', 'soul']
  },
  '5.10': {
    sanskrit: `ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः।
लिप्यते न स पापेन पद्मपत्रमिवाम्भसा॥`,
    telugu: `ఆసక్తి విడిచి, కర్మలను బ్రహ్మలో అర్పించి చేసే వాడు పాపంతో అంటడు — నీటిలో తామర ఆకు వలె.`,
    english: `One who performs his duty without attachment, surrendering the results unto the Supreme God, is unaffected by sinful action, as the lotus leaf is untouched by water.`,
    explanation: `The lotus leaf is completely surrounded by water yet never wet. Similarly, the karma yogi is completely immersed in the world yet not stained by it. This is the teaching of engaged non-attachment: full presence, full participation, zero sticking.`,
    takeaway: `Be like the lotus leaf — completely immersed in the world yet not stained by it.`,
    tags: ['detachment', 'action']
  },
  '5.11': {
    sanskrit: `कायेन मनसा बुद्ध्या केवलैरिन्द्रियैरपि।
योगिनः कर्म कुर्वन्ति सङ्गं त्यक्त्वाऽत्मशुद्धये॥`,
    telugu: `యోగులు ఆసక్తి విడిచి, ఆత్మ శుద్ధి కోసం శరీరం, మనసు, బుద్ధి, ఇంద్రియాల ద్వారా మాత్రమే కర్మ చేస్తారు.`,
    english: `The yogis, abandoning attachment, act with body, mind, intelligence, and even senses, only for the purpose of purification.`,
    explanation: `All instruments — body, mind, intellect, senses — are used in service of purification. Even the senses, which can entangle us, can be redirected toward liberation. Every faculty, when offered in the right direction, becomes a tool for freedom.`,
    takeaway: `Every faculty you have, when redirected rightly, becomes a tool for liberation rather than bondage.`,
    tags: ['action', 'self-control']
  },
  '5.12': {
    sanskrit: `युक्तः कर्मफलं त्यक्त्वा शान्तिमाप्नोति नैष्ठिकीम्।
अयुक्तः कामकारेण फले सक्तो निबध्यते॥`,
    telugu: `యుక్తుడు కర్మఫలాన్ని విడిచి నిష్ఠీకమైన శాంతిని పొందుతాడు. అయుక్తుడు కామంతో ఫలంలో ఆసక్తుడై బంధింపబడతాడు.`,
    english: `The steadily devoted soul attains unadulterated peace because he offers the result of all activities to the Supreme, whereas a person who is not in union with the Divine, who is greedy for the fruits of labor, becomes entangled.`,
    explanation: `Two paths, two outcomes: offer the results and find enduring peace; cling to results and be bound by them. The difference is not in the action but in the relationship to the outcome. Inner orientation determines everything.`,
    takeaway: `Offer results and find peace; cling to results and be bound — inner orientation determines everything.`,
    tags: ['detachment', 'peace']
  },
  '5.13': {
    sanskrit: `सर्वकर्माणि मनसा संन्यस्यास्ते सुखं वशी।
नवद्वारे पुरे देही नैव कुर्वन्न कारयन्॥`,
    telugu: `మనస్సా సమస్త కర్మలను సంన్యసించి, వశియైన దేహి నవ ద్వారాలు గల పురంలో నిర్లిప్తంగా సుఖంగా ఉంటాడు — చేయకుండా, చేయించకుండా.`,
    english: `When the embodied being is able to transcend these three modes, he can become free from birth, death, old age and their distresses and can enjoy nectar even in this life. The self-controlled soul, who rests happily within the city of nine gates, neither acts nor causes others to act.`,
    explanation: `The 'city of nine gates' is the body with its nine openings. The Self within does not act and does not cause action — it witnesses. This is the profound freedom of the witnessing Self: completely present, completely uninvolved in the compulsive cycles of ego-driven action.`,
    takeaway: `The Self within witnesses all activity without compulsion — discover this witnessing dimension of yourself.`,
    tags: ['wisdom', 'soul']
  },
  '5.14': {
    sanskrit: `न कर्तृत्वं न कर्माणि लोकस्य सृजति प्रभुः।
न कर्मफलसंयोगं स्वभावस्तु प्रवर्तते॥`,
    telugu: `ప్రభువు (ఆత్మ) లోకానికి కర్తృత్వాన్ని గాని, కర్మలను గాని, కర్మఫల సంయోగాన్ని గాని సృష్టించడు. స్వభావమే ప్రవర్తిస్తుంది.`,
    english: `The embodied spirit, master in the city of his body, does not create activities, nor does he induce people to act, nor does he create the fruits of action. All this is enacted by the modes of material nature.`,
    explanation: `The Self does not create karma, does not drive action, does not create consequences. Nature does all of this through its own qualities. The Self is pure witness. This fundamental recognition dissolves ego-ownership of action at the root.`,
    takeaway: `Recognize the pure witnessing Self that owns nothing and creates nothing — this is the root of freedom.`,
    tags: ['soul', 'wisdom']
  },
  '5.15': {
    sanskrit: `नादत्ते कस्यचित्पापं न चैव सुकृतं विभुः।
अज्ञानेनावृतं ज्ञानं तेन मुह्यन्ति जन्तवः॥`,
    telugu: `విభువు (ఆత్మ) ఎవని పాపాన్నీ గ్రహించడు, పుణ్యాన్నీ గ్రహించడు. జ్ఞానం అజ్ఞానంచే కప్పబడి ఉంది. దానిచే జీవులు మోహపడతారు.`,
    english: `Nor does the Almighty assume anyone's sinful or pious activities. Embodied beings, however, are bewildered because of the ignorance which covers their real knowledge.`,
    explanation: `The Divine Self takes on neither sin nor merit — it remains untouched by the duality of good and bad. Confusion about this — thinking the Self can be diminished or enhanced by actions — is itself the ignorance that causes suffering. The Self is always already pure.`,
    takeaway: `The Self is always already pure — confusion about this is the root of all suffering.`,
    tags: ['soul', 'wisdom']
  },
  '5.16': {
    sanskrit: `ज्ञानेन तु तदज्ञानं येषां नाशितमात्मनः।
तेषामादित्यवज्ज्ञानं प्रकाशयति तत्परम्॥`,
    telugu: `ఎవరి ఆత్మ అజ్ఞానం జ్ఞానంచే నాశనమైందో, వారి జ్ఞానం సూర్యుని వలె ఆ పరతత్వాన్ని ప్రకాశింపజేస్తుంది.`,
    english: `When, however, one is enlightened with the knowledge by which nescience is destroyed, then his knowledge reveals everything, as the sun lights up everything in the daytime.`,
    explanation: `When ignorance is destroyed by knowledge, everything is illuminated — like the sun revealing what was always there in the dark. The world doesn't change; the capacity to see it truly is restored. Wisdom is the light that shows what was always real.`,
    takeaway: `Wisdom does not create reality — it reveals what was always there, like sunlight revealing the hidden.`,
    tags: ['knowledge', 'wisdom']
  },
  '5.17': {
    sanskrit: `तद्बुद्धयस्तदात्मानस्तन्निष्ठास्तत्परायणाः।
गच्छन्त्यपुनरावृत्तिं ज्ञाननिर्धूतकल्मषाः॥`,
    telugu: `ఆ బ్రహ్మలోనే బుద్ధి, ఆ బ్రహ్మలోనే ఆత్మ, ఆ బ్రహ్మంలోనే నిష్ఠ, ఆ బ్రహ్మమే పరాయణం — జ్ఞానంచే పాపం తొలగి తిరిగి రాని స్థితికి వెళ్తారు.`,
    english: `When one's intelligence, mind, faith, and refuge are all fixed in the Supreme, then one becomes fully cleansed of misgivings through complete knowledge, and thus proceeds straight on the path of liberation.`,
    explanation: `Complete orientation toward the Divine — intellect, identity, devotion, refuge — dissolves all impurities through knowledge and leads to non-return. Total alignment of all faculties in one direction creates an irresistible spiritual momentum.`,
    takeaway: `Total alignment of all faculties toward the Divine creates an irresistible momentum toward liberation.`,
    tags: ['devotion', 'wisdom']
  },
  '5.18': {
    sanskrit: `विद्याविनयसम्पन्ने ब्राह्मणे गवि हस्तिनि।
शुनि चैव श्वपाके च पण्डिताः समदर्शिनः॥`,
    telugu: `పండితులు విద్యా వినయ సంపన్నుడైన బ్రాహ్మణుడిలో, ఆవులో, ఏనుగులో, కుక్కలో మరియు కుక్కమాంసం తినే వారిలో కూడా సమంగా చూస్తారు.`,
    english: `The humble sages, by virtue of true knowledge, see with equal vision a learned and gentle brahmin, a cow, an elephant, a dog, and a dog-eater.`,
    explanation: `Equal vision across the full spectrum of beings — from the most honored brahmin to the most marginalized outcast — is the mark of realized wisdom. This is not pretending all are identical; it is seeing the same divine essence in radically different forms. True democracy of the soul.`,
    takeaway: `See the same divine essence in all beings — this equal vision is the mark of genuine wisdom.`,
    tags: ['wisdom', 'compassion']
  },
  '5.19': {
    sanskrit: `इहैव तैर्जितः सर्गो येषां साम्ये स्थितं मनः।
निर्दोषं हि समं ब्रह्म तस्माद्ब्रह्मणि ते स्थिताः॥`,
    telugu: `ఎవరి మనస్సు సమత్వంలో స్థిరమైందో, వారిచే ఇక్కడే సృష్టి జయించబడింది. నిర్దోషం మరియు సమంగా ఉన్న బ్రహ్మంలో వారు స్థిరమయ్యారు.`,
    english: `Those whose minds are established in sameness and equanimity have already conquered the conditions of birth and death. They are flawless like Brahman, and thus they are already situated in Brahman.`,
    explanation: `Equal-mindedness toward all beings is not just ethics — it is the sign of having realized Brahman. When you see no fundamental difference between self and other, you are already living in the non-dual reality that is liberation.`,
    takeaway: `Equal-mindedness toward all beings is not just ethics — it is the living sign of liberation.`,
    tags: ['wisdom', 'peace']
  },
  '5.20': {
    sanskrit: `न प्रहृष्येत्प्रियं प्राप्य नोद्विजेत्प्राप्य चाप्रियम्।
स्थिरबुद्धिरसम्मूढो ब्रह्मविद्ब्रह्मणि स्थितः॥`,
    telugu: `ప్రియమైనది పొందినా సంతోషించడు, అప్రియమైనది పొందినా వ్యథ పడడడు. స్థిర బుద్ధి, అసమ్మూఢుడు, బ్రహ్మవేత్త, బ్రహ్మంలో స్థిరుడు.`,
    english: `A person who neither rejoices upon achieving something pleasant nor laments upon obtaining something unpleasant, who is self-intelligent, who is unbewildered, and who knows the science of God, is already situated in transcendence.`,
    explanation: `Not elated by the pleasant, not disturbed by the unpleasant — this steady wisdom is the practical face of Brahman-realization. The liberated person still experiences life fully but is not buffeted by it. Inner stability persists through all weather.`,
    takeaway: `Not elated by the pleasant, not disturbed by the unpleasant — this steady wisdom is liberation in practice.`,
    tags: ['peace', 'wisdom']
  },
  '5.21': {
    sanskrit: `बाह्यस्पर्शेष्वसक्तात्मा विन्दत्यात्मनि यत्सुखम्।
स ब्रह्मयोगयुक्तात्मा सुखमक्षयमश्नुते॥`,
    telugu: `బాహ్య స్పర్శలలో అనాసక్తుడైన ఆత్మ ఆత్మలో సుఖాన్ని పొందుతాడు. బ్రహ్మయోగ యుక్తాత్మ అక్షయ సుఖాన్ని అనుభవిస్తాడు.`,
    english: `Such a liberated person is not attracted to material sense pleasure but is always in trance, enjoying the pleasure within. In this way the self-realized person enjoys unlimited happiness, for he concentrates on the Supreme.`,
    explanation: `The happiness found in the Self is inexhaustible because it has no external source that can be taken away. Outer pleasures are borrowed from circumstances; inner bliss is owned outright. The one who finds their joy within cannot be permanently robbed.`,
    takeaway: `Find your joy in the Self — what has no external source cannot be taken away.`,
    tags: ['peace', 'wisdom']
  },
  '5.22': {
    sanskrit: `ये हि संस्पर्शजा भोगा दुःखयोनय एव ते।
आद्यन्तवन्तः कौन्तेय न तेषु रमते बुधः॥`,
    telugu: `కౌంతేయా, స్పర్శ నుండి జన్మించే భోగాలు నిజంగా దుఃఖానికి మూలాలు. అవి ఆది అంతాలు గలవి. వాటిలో బుద్ధిమంతుడు ఆనందించడు.`,
    english: `An intelligent person does not take part in the sources of misery, which are due to contact with the material senses. Such pleasures have a beginning and an end, and so the wise person does not delight in them.`,
    explanation: `Sense pleasures are 'wombs of sorrow' — they have a beginning and an end. What rises must fall; what is gained must be lost; what brings pleasure now brings craving and disappointment next. The wise see this cycle clearly and seek what is beyond it.`,
    takeaway: `See the cycle of sense pleasure clearly: it begins, peaks, and ends — seek what lies beyond the cycle.`,
    tags: ['wisdom', 'detachment']
  },
  '5.23': {
    sanskrit: `शक्नोतीहैव यः सोढुं प्राक्शरीरविमोक्षणात्।
कामक्रोधोद्भवं वेगं स युक्तः स सुखी नरः॥`,
    telugu: `శరీరం విడవడానికి ముందే ఇక్కడ కామ క్రోధాల నుండి ఉద్భవించే వేగాన్ని సహించగల వాడు యుక్తుడు, సుఖి.`,
    english: `Before giving up this present body, if one can tolerate the urges of desire and anger, then one is a well-situated person in this world.`,
    explanation: `The test is here, in this body, in this life: can you withstand the surge of desire and anger before it sweeps you into action you will regret? This is the practical standard of a wise life. Not theoretical perfection but actual management of these two fierce forces.`,
    takeaway: `The test of wisdom is here in this life: can you hold steady when desire and anger surge?`,
    tags: ['self-control', 'wisdom']
  },
  '5.24': {
    sanskrit: `योऽन्तःसुखोऽन्तरारामस्तथान्तर्ज्योतिरेव यः।
स योगी ब्रह्मनिर्वाणं ब्रह्मभूतोऽधिगच्छति॥`,
    telugu: `అంతరంగంలో సుఖం గలవాడు, అంతరంగంలో ఆరాముడు, అంతర జ్యోతి గలవాడైన ఆ యోగి బ్రహ్మభూతుడై బ్రహ్మ నిర్వాణం పొందుతాడు.`,
    english: `One whose happiness is within, who is active and rejoices within, and whose aim is inward is actually the perfect mystic. He is liberated in the Supreme, and ultimately he attains the Supreme.`,
    explanation: `Inner happiness, inner delight, inner light — this triple interiority describes the liberated person. They have found the sourceless source of joy that doesn't depend on anything outside. The world can change in any direction; their peace remains.`,
    takeaway: `Find happiness, delight, and light within — this triple interiority is the description of liberation.`,
    tags: ['peace', 'soul']
  },
  '5.25': {
    sanskrit: `लभन्ते ब्रह्मनिर्वाणमृषयः क्षीणकल्मषाः।
छिन्नद्वैधा यतात्मानः सर्वभूतहिते रताः॥`,
    telugu: `క్షీణ పాపులు, ద్వైతాన్ని ఛేదించినవారు, ఆత్మ నిగ్రహులు, సర్వభూత హితంలో రతులైన ఋషులు బ్రహ్మ నిర్వాణం పొందుతారు.`,
    english: `Those who are beyond the dualities that arise from doubts, whose minds are engaged within, who are always busy working for the welfare of all living beings, and who are free from all sins achieve liberation in the Supreme.`,
    explanation: `Liberation is not selfish — the liberated ones are actively engaged in the welfare of all beings. This dismisses the caricature of the spiritual person as passive and self-absorbed. True realization expresses itself as universal compassion and active service.`,
    takeaway: `True liberation expresses itself as compassion and active service for all beings — not passive withdrawal.`,
    tags: ['wisdom', 'compassion']
  },
  '5.26': {
    sanskrit: `कामक्रोधवियुक्तानां यतीनां यतचेतसाम्।
अभितो ब्रह्मनिर्वाणं वर्तते विदितात्मनाम्॥`,
    telugu: `కామ క్రోధాలు విడిచిన, ఆత్మ నిగ్రహులైన, చిత్తాన్ని నియంత్రించిన, ఆత్మాజ్ఞానుల చుట్టూ బ్రహ్మ నిర్వాణం ఉంది.`,
    english: `Those who are free from anger and all material desires, who are self-realized, self-disciplined, and constantly endeavoring for perfection, are assured of liberation in the Supreme in the very near future.`,
    explanation: `Liberation surrounds the one who is free from desire and anger, established in self-knowledge and self-discipline. Not in some distant future, but near — surrounding them even now. The proximity of liberation to such a person is total.`,
    takeaway: `For the one free from desire and anger, established in wisdom, liberation is not distant — it surrounds them.`,
    tags: ['wisdom', 'peace']
  },
  '5.27': {
    sanskrit: `स्पर्शान्कृत्वा बहिर्बाह्यांश्चक्षुश्चैवान्तरे भ्रुवोः।
प्राणापानौ समौ कृत्वा नासाभ्यन्तरचारिणौ॥`,
    telugu: `బాహ్య స్పర్శలను బహిర్గతం చేసి, భ్రూమధ్యంలో దృష్టి స్థిరం చేసి, నాసికాంతర్గత ప్రాణాపానాలను సమంగా చేసి.`,
    english: `Shutting out all external sense objects, keeping the eyes and vision concentrated between the two eyebrows, suspending the inward and outward breaths within the nostrils.`,
    explanation: `Krishna here gives a brief but precise description of a meditation technique: withdraw senses, focus gaze between the brows, equalize the breath in the nostrils. This bridges the philosophical teachings to direct practice. Theory must become experience.`,
    takeaway: `Philosophical understanding must become direct practice — meditation bridges idea and experience.`,
    tags: ['yoga', 'meditation']
  },
  '5.28': {
    sanskrit: `यतेन्द्रियमनोबुद्धिर्मुनिर्मोक्षपरायणः।
विगतेच्छाभयक्रोधो यः सदा मुक्त एव सः॥`,
    telugu: `ఇంద్రియ మనో బుద్ధులను నిగ్రహించిన, మోక్ష పరాయణుడైన, ఇచ్ఛా భయ క్రోధాలు పోయిన ముని — అతడు నిత్యముక్తుడు.`,
    english: `Thus controlling the mind, senses, and intelligence, the transcendentalist who is always free from desire, fear, and anger is one who is always liberated.`,
    explanation: `Control of senses, mind, and intellect, combined with freedom from desire, fear, and anger — this is the description of the constantly liberated one. They are free not after death but now, while still living. Liberation is a present reality, not a future reward.`,
    takeaway: `Liberation is a present reality for one free from desire, fear, and anger — not a future reward.`,
    tags: ['wisdom', 'peace']
  },
  '5.29': {
    sanskrit: `भोक्तारं यज्ञतपसां सर्वलोकमहेश्वरम्।
सुहृदं सर्वभूतानां ज्ञात्वा मां शान्तिमृच्छति॥`,
    telugu: `నన్ను యజ్ఞ తపోభోక్తను, సర్వ లోక మహేశ్వరుడిని, సర్వ భూత సుహృదుని అని తెలుసుకుని శాంతిని పొందుతాడు.`,
    english: `A person in full consciousness of me, knowing me to be the ultimate beneficiary of all sacrifices and austerities, the Supreme Lord of all planets and demigods, and the benefactor and well-wisher of all living entities, attains peace from the pangs of material miseries.`,
    explanation: `The peace formula of Chapter 5: knowing the Divine as the enjoyer of all sacrifices, lord of all worlds, and friend of all beings brings immediate peace. When we stop seeing ourselves as the ultimate owner and controller, and trust the Divine as the real benefactor behind everything, anxiety dissolves.`,
    takeaway: `Know the Divine as the ultimate friend behind all things — this trust dissolves anxiety at its root.`,
    tags: ['devotion', 'peace']
  },
  '6.1': {
    sanskrit: `श्रीभगवानुवाच
अनाश्रितः कर्मफलं कार्यं कर्म करोति यः।
स संन्यासी च योगी च न निरग्निर्न चाक्रियः॥`,
    telugu: `కర్మ ఫలాన్ని ఆశ్రయించకుండా చేయవలసిన కర్మ చేసేవాడు సంన్యాసి మరియు యోగి. అగ్ని లేనివాడు, కర్మ లేనివాడు కాదు.`,
    english: `One who performs duties without attachment to results is both a renunciate and a yogi — not one who has given up fire and activities.`,
    explanation: `True renunciation is not giving up fire, rituals, or activities — it is giving up ego-attachment to their results. This corrects the popular misconception that spiritual life means withdrawal. The karma yogi lives fully in the world.`,
    takeaway: `True renunciation is inner — give up attachment to results, not engagement with life.`,
    tags: ['action', 'wisdom']
  },
  '6.2': {
    sanskrit: `यं संन्यासमिति प्राहुर्योगं तं विद्धि पाण्डव।
न ह्यसंन्यस्तसङ्कल्पो योगी भवति कश्चन॥`,
    telugu: `పాండవా, సంన్యాసమని చెప్పేదాన్ని యోగమని తెలుసుకో. సంకల్పాన్ని (ఫలాసక్తిని) విడవని వాడు యోగి కాదు.`,
    english: `O Pandava, what is called renunciation is the same as yoga, for one can never become a yogi unless one renounces the desire for sense gratification.`,
    explanation: `Renunciation and yoga are the same thing expressed differently. Yoga is the renunciation of ego-desire; renunciation is the yoga of non-attachment. The outer form varies; the inner principle is identical. See unity beneath apparent diversity.`,
    takeaway: `Renunciation and yoga are the same inner reality expressed in different outer forms.`,
    tags: ['wisdom', 'action']
  },
  '6.3': {
    sanskrit: `आरुरुक्षोर्मुनेर्योगं कर्म कारणमुच्यते।
योगारूढस्य तस्यैव शमः कारणमुच्यते॥`,
    telugu: `యోగం ఆరోహించాలనే మునికి కర్మ కారణమని చెప్పబడింది. యోగంలో ఆరూఢుడైన వానికి శమం (మనో నిగ్రహం) కారణమని చెప్పబడింది.`,
    english: `For the sage who wishes to rise to yoga, action is said to be the means. For the same sage who has attained yoga, serenity is said to be the means.`,
    explanation: `Two stages of yoga practice: for the beginner, action is the vehicle — engaged practice purifies and develops. For the established yogi, serenity becomes primary — the fruit of practice deepens into effortless stillness. Different medicines for different stages.`,
    takeaway: `Different stages of the path call for different practices — what works at one stage may not serve the next.`,
    tags: ['action', 'wisdom']
  },
  '6.4': {
    sanskrit: `यदा हि नेन्द्रियार्थेषु न कर्मस्वनुषज्जते।
सर्वसङ्कल्पसंन्यासी योगारूढस्तदोच्यते॥`,
    telugu: `ఇంద్రియ విషయాలలో మరియు కర్మలలో ఆసక్తి లేనప్పుడు, సమస్త సంకల్పాల సంన్యాసి అయినప్పుడు, అప్పుడు యోగంలో ఆరూఢుడని చెప్పబడతాడు.`,
    english: `A person is said to have attained to yoga when, having renounced all material desires, one neither acts for sense gratification nor engages in fruitive activities.`,
    explanation: `The mark of yoga-attainment: no pull toward sense objects, no attachment to the fruits of action, all ego-desires renounced. This is not a state to be forced but one that flowers naturally through sincere practice. It arrives; it is not manufactured.`,
    takeaway: `Yoga-attainment cannot be forced — it flowers naturally through sincere, sustained practice.`,
    tags: ['yoga', 'wisdom']
  },
  '6.5': {
    sanskrit: `उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।
आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥`,
    telugu: `ఆత్మచే ఆత్మను ఉద్ధరించుకోవాలి. ఆత్మను అధోగతికి పడనీయకూడదు. ఆత్మయే ఆత్మకు బంధువు, ఆత్మయే ఆత్మకు శత్రువు.`,
    english: `Let a man lift himself by himself; let him not degrade himself; for the self alone is the friend of the self, and the self alone is the enemy of the self.`,
    explanation: `The self can be either your greatest friend or your greatest enemy — depending on whether you have mastered it. This is one of the most empowering teachings in the Gita: your liberation is in your own hands. You are both the obstacle and the solution.`,
    takeaway: `Your liberation is in your own hands — the self is both your greatest ally and your greatest obstacle.`,
    tags: ['wisdom', 'self-control']
  },
  '6.6': {
    sanskrit: `बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः।
अनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्॥`,
    telugu: `ఎవనిచే ఆత్మ ఆత్మతో జయింపబడిందో, వాని ఆత్మ వానికి బంధువు. జయింపబడని వాని విషయంలో ఆత్మ శత్రువు వలె శత్రుత్వంలో ఉంటుంది.`,
    english: `For one who has conquered the self, the self is the best of friends; but for one who has failed to do so, his very self will be the greatest enemy.`,
    explanation: `The disciplined self becomes your best ally; the undisciplined self becomes your worst enemy. This is the clearest possible statement of why inner discipline matters — not as moral obligation but as practical wisdom. Self-mastery serves everything else.`,
    takeaway: `Self-mastery is the foundation of everything — the disciplined self serves you; the undisciplined self works against you.`,
    tags: ['self-control', 'wisdom']
  },
  '6.7': {
    sanskrit: `जितात्मनः प्रशान्तस्य परमात्मा समाहितः।
शीतोष्णसुखदुःखेषु तथा मानापमानयोः॥`,
    telugu: `జితాత్ముడు, ప్రశాంతుడైన వానికి, చలి-వేడి, సుఖ-దుఃఖ, మాన-అపమానాలలో పరమాత్మ సమాహితుడు.`,
    english: `For one who has conquered the mind, the Supersoul is already reached, for he has attained tranquility. To such a person happiness and distress, heat and cold, honor and dishonor are all the same.`,
    explanation: `The one who has conquered the mind finds the Divine already present within — the search ends. And they become equanimous toward opposites: hot-cold, pleasure-pain, honor-dishonor. This equanimity is not indifference but freedom from the compulsive control of opposites.`,
    takeaway: `Conquer the mind and find the Divine already present within — equanimity toward opposites is the fruit.`,
    tags: ['wisdom', 'peace']
  },
  '6.8': {
    sanskrit: `ज्ञानविज्ञानतृप्तात्मा कूटस्थो विजितेन्द्रियः।
युक्त इत्युच्यते योगी समलोष्टाश्मकाञ्चनः॥`,
    telugu: `జ్ఞాన విజ్ఞానాలతో తృప్తి పొందిన ఆత్మ, కూటస్థుడు, జితేంద్రియుడు, మట్టి-రాయి-బంగారం సమంగా చూసేవాడు — యుక్తుడు, యోగి అని పిలువబడతాడు.`,
    english: `A person is said to be established in self-realization and is called a yogi when he is fully satisfied by virtue of acquired knowledge and realization. Such a person is situated in transcendence and is self-controlled. He sees everything — whether it be pebbles, stones or gold — as the same.`,
    explanation: `The yogi is satisfied by knowledge and direct experience (vijnana), remaining steady as the unchanging ground (kutastha), with senses controlled, seeing clod-stone-gold as equal. These are the practical signs of established wisdom.`,
    takeaway: `The yogi sees clod, stone, and gold as equal — inner vision transforms what outer eyes discriminate.`,
    tags: ['wisdom', 'peace']
  },
  '6.9': {
    sanskrit: `सुहृन्मित्रार्युदासीनमध्यस्थद्वेष्यबन्धुषु।
साधुष्वपि च पापेषु समबुद्धिर्विशिष्यते॥`,
    telugu: `సుహృదులు, మిత్రులు, శత్రువులు, ఉదాసీనులు, మధ్యస్థులు, ద్వేష్యులు, బంధువులు — సాధువులలో, పాపులలో కూడా సమ బుద్ధి గలవాడు విశేషుడు.`,
    english: `A person is considered still further advanced when he regards honest well-wishers, affectionate benefactors, the neutral, mediators, the envious, friends and enemies, the pious and the sinners all with an equal mind.`,
    explanation: `Equal vision extending even further: not just toward beings but toward all categories of human relationship — friend, enemy, neutral, saint, sinner. This breadth of equanimity is the advanced stage, requiring deep wisdom to reach and sustain.`,
    takeaway: `Equal vision extending to friend, enemy, saint, and sinner — this breadth marks advanced wisdom.`,
    tags: ['wisdom', 'compassion']
  },
  '6.10': {
    sanskrit: `योगी युञ्जीत सततमात्मानं रहसि स्थितः।
एकाकी यतचित्तात्मा निराशीरपरिग्रहः॥`,
    telugu: `యోగి ఏకాంతంలో స్థిరుడై, నిత్యం ఆత్మను ఏకాగ్రం చేయాలి. ఏకాకిగా, నిగ్రహించిన చిత్తాత్మతో, ఆశ లేకుండా, పరిగ్రహం లేకుండా.`,
    english: `A transcendentalist should always engage his body, mind, and self in relationship with the Supreme. He should live alone in a secluded place and should always carefully control his mind. He should be free from desires and feelings of possessiveness.`,
    explanation: `The meditation instructions: practice in a quiet place, alone, with controlled mind, free from desire and possessiveness. These are ideal conditions, not absolute requirements — the principle is creating inner and outer conditions that support stillness.`,
    takeaway: `Create conditions that support stillness — both inner (desire-free) and outer (quiet, solitary) when possible.`,
    tags: ['meditation', 'yoga']
  },
  '6.11': {
    sanskrit: `शुचौ देशे प्रतिष्ठाप्य स्थिरमासनमात्मनः।
नात्युच्छ्रितं नातिनीचं चैलाजिनकुशोत्तरम्॥`,
    telugu: `पवित्र स्थानांलో, अत्यधिक ఉన్నతం కాని, అత్యధిక నీచం కాని స్థిరమైన ఆసనం నెలకొల్పుకోవాలి — వస్త్రం, మృగ చర్మం, కుశల పై.`,
    english: `In a sacred place, one should place one's seat which is neither too high nor too low, covered with sacred grass, deerskin, and cloth, one over the other.`,
    explanation: `Practical details of meditation: clean place, stable seat neither too high nor too low. This attention to the physical setup is not trivial — the body's comfort and uprightness directly affects the mind's ability to be still. Physical preparation enables mental practice.`,
    takeaway: `Physical setup matters for meditation — attention to body position enables mental stillness.`,
    tags: ['meditation', 'yoga']
  },
  '6.12': {
    sanskrit: `तत्रैकाग्रं मनः कृत्वा यतचित्तेन्द्रियक्रियः।
उपविश्यासने युञ्ज्याद्योगमात्मविशुद्धये॥`,
    telugu: `అక్కడ మనస్సు ఏకాగ్రం చేసుకుని, చిత్తేంద్రియ క్రియలు నిగ్రహించి, ఆసనంపై కూర్చుని, ఆత్మ విశుద్ధి కోసం యోగాన్ని సాధన చేయాలి.`,
    english: `With a clear mind, and controlling the activity of mind and senses, sit on the seat and practice yoga for purification of the self.`,
    explanation: `The purpose of meditation: purification of the self (atma-vishuddhi). Not relaxation, not problem-solving, not insight into daily life — though these may come. The primary purpose is the gradual removal of the obstacles that obscure the Self's natural clarity.`,
    takeaway: `The purpose of meditation is self-purification — removing obstacles to the Self's natural clarity.`,
    tags: ['meditation', 'wisdom']
  },
  '6.13': {
    sanskrit: `समं कायशिरोग्रीवं धारयन्नचलं स्थिरः।
सम्प्रेक्ष्य नासिकाग्रं स्वं दिशश्चानवलोकयन्॥`,
    telugu: `శరీరం, తల, మెడ సమంగా, నిశ్చలంగా, స్థిరంగా పట్టుకుని, నాసికాగ్రం వైపు తన దృష్టిని నిలిపి, చుట్టూ చూడకుండా.`,
    english: `One should hold one's body, neck, and head erect in a straight line and stare steadily at the tip of the nose. Thus, with an unagitated, subdued mind, devoid of fear, completely free from sex life, one should meditate upon me.`,
    explanation: `The posture: body, neck, head in a straight line, gaze focused forward (traditionally at the nose tip). This erect, still posture keeps the body alert without tension — the external form supports the internal practice. Form follows function in yoga.`,
    takeaway: `The erect, still posture of meditation keeps the body alert without tension — form serves the inner practice.`,
    tags: ['meditation', 'yoga']
  },
  '6.14': {
    sanskrit: `प्रशान्तात्मा विगतभीर्ब्रह्मचारिव्रते स्थितः।
मनः संयम्य मच्चित्तो युक्त आसीत मत्परः॥`,
    telugu: `ప్రశాంత ఆత్మ, భయం లేనివాడు, బ్రహ్మచారి వ్రతంలో స్థిరుడు, మనస్సు నిగ్రహించి, నా చిత్తంలో ఉండి, నన్ను పరమగతిగా భావించి యుక్తుడై ఉండాలి.`,
    english: `Thus, with a serene, fearless, and controlled mind, and abiding in the vow of celibacy, the yogi should meditate upon me, having me as the ultimate goal.`,
    explanation: `Meditation on the Divine with tranquility, fearlessness, self-restraint, and single-pointed orientation — these four qualities transform meditation from mental exercise to genuine spiritual practice. The object, the attitude, and the method all matter.`,
    takeaway: `Tranquility, fearlessness, restraint, and single-pointed orientation transform meditation into genuine practice.`,
    tags: ['meditation', 'devotion']
  },
  '6.15': {
    sanskrit: `युञ्जन्नेवं सदात्मानं योगी नियतमानसः।
शान्तिं निर्वाणपरमां मत्संस्थामधिगच्छति॥`,
    telugu: `ఈ విధంగా నిత్యం ఆత్మను ఏకాగ్రం చేసే, నియమిత మనస్కుడైన యోగి నాలో ఉన్న నిర్వాణ పరమ శాంతిని పొందుతాడు.`,
    english: `Thus, by always engaging the mind in this yoga practice, the yogi, whose mind is controlled, attains peace and achieves the supreme state — absorption in me (nirvana).`,
    explanation: `The fruit of sustained practice: the highest peace (nirvana-parma shanti), absorption in the Divine. This is not achieved through one session of meditation but through continuous, disciplined practice. Daily consistency creates what no single effort can.`,
    takeaway: `Daily consistency in practice creates what no single heroic effort can — sustained practice leads to nirvana.`,
    tags: ['meditation', 'peace']
  },
  '6.16': {
    sanskrit: `नात्यश्नतस्तु योगोऽस्ति न चैकान्तमनश्नतः।
न चाति स्वप्नशीलस्य जाग्रतो नैव चार्जुन॥`,
    telugu: `అర్జునా, అతిగా తినేవానికి, అస్సలు తినని వానికి, అతిగా నిద్రపోయే వానికి మరియు నిద్రపోని వానికి యోగం సిద్ధించదు.`,
    english: `O Arjuna, there is no possibility of one's becoming a yogi if one eats too much or eats too little, sleeps too much or does not sleep enough.`,
    explanation: `Yoga requires the middle path in all things — food, sleep, work, rest. The extremes in either direction disturb the equilibrium that practice needs. This is not about rigid rules but about sensitivity to what your body and mind actually need for clear, sustained practice.`,
    takeaway: `The middle path in eating, sleeping, and activity creates the equilibrium that yoga requires.`,
    tags: ['yoga', 'self-control']
  },
  '6.17': {
    sanskrit: `युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु।
युक्तस्वप्नावबोधस्य योगो भवति दुःखहा॥`,
    telugu: `యుక్త ఆహారవిహారుని, కర్మలలో యుక్త చేష్టుని, యుక్త నిద్రావిద్రుని యోగం దుఃఖాన్ని నశింపజేస్తుంది.`,
    english: `He who is temperate in his habits of eating, sleeping, working, and recreation can mitigate all material pains by practicing the yoga system.`,
    explanation: `Moderation in food, recreation, actions, and sleep creates the conditions where yoga can work its transformative power. Extremes in any direction undermine the practice. The regulated, balanced life is not boring — it is the ground of true freedom.`,
    takeaway: `The regulated, balanced life is not boring — it is the ground from which freedom grows.`,
    tags: ['yoga', 'self-control']
  },
  '6.18': {
    sanskrit: `यदा विनियतं चित्तमात्मन्येवावतिष्ठते।
निःस्पृहः सर्वकामेभ्यो युक्त इत्युच्यते तदा॥`,
    telugu: `చిత్తం నిగ్రహించి ఆత్మలోనే నిలిచినప్పుడు, సమస్త కామాలలో నిఃస్పృహుడైనప్పుడు, అప్పుడు యుక్తుడని పిలువబడతాడు.`,
    english: `When the yogi, by practice of yoga, disciplines the mind so that it is free from all desires and situated in the Self alone, such a person is said to be established in yoga.`,
    explanation: `The sign of yoga-establishment: the mind has found its rest in the Self alone, desiring nothing beyond. This is not suppression of desire but the natural settling of desire once its root (separation from the Self) has been dissolved. Fullness has no lack to fill.`,
    takeaway: `When the mind finds rest in the Self alone, desire naturally settles — not suppressed but fulfilled at the root.`,
    tags: ['yoga', 'wisdom']
  },
  '6.19': {
    sanskrit: `यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता।
योगिनो यतचित्तस्य युञ्जतो योगमात्मनः॥`,
    telugu: `గాలి లేని స్థానంలో దీపం చలించనట్లు — ఆత్మ యోగాన్ని సాధన చేసే, నిగ్రహించిన చిత్తం గల యోగికి ఈ ఉపమ చెప్పబడింది.`,
    english: `As a lamp in a windless place does not flicker — this is the classic simile used for the controlled mind of the yogi practicing the meditation of the Self.`,
    explanation: `A lamp in still air burns steady and bright — this is the meditating mind. Protected from the winds of distraction and desire, the mind becomes as steady and illuminating as a flame in perfect stillness. This is the goal of practice.`,
    takeaway: `Protect your mind from the winds of distraction and desire — it will burn as steady and bright as a still flame.`,
    tags: ['meditation', 'yoga']
  },
  '6.20': {
    sanskrit: `यत्रोपरमते चित्तं निरुद्धं योगसेवया।
यत्र चैवात्मनात्मानं पश्यन्नात्मनि तुष्यति॥`,
    telugu: `యోగ సేవచే నిరుద్ధమైన చిత్తం ఉపరమించే చోట, ఆత్మచే ఆత్మను చూసి ఆత్మలోనే తృప్తుడయ్యే చోట.`,
    english: `In that state of perfection, the yogi's mind becomes subdued by the practice of yoga. The yogi then sees the Self by the purified mind and relishes and rejoices in the Self.`,
    explanation: `The state of yoga-perfection: the mind becomes still, and the Self is seen by the Self. The observer and the observed merge — the mind sees itself as the Self. This is not absorption into blankness but the most vivid aliveness of pure awareness recognizing itself.`,
    takeaway: `In the deepest meditation, the mind sees itself as the Self — observer and observed merge into pure awareness.`,
    tags: ['yoga', 'soul']
  },
  '6.21': {
    sanskrit: `सुखमात्यन्तिकं यत्तद्बुद्धिग्राह्यमतीन्द्रियम्।
वेत्ति यत्र न चैवायं स्थितश्चलति तत्त्वतः॥`,
    telugu: `ఇంద్రియాలకు అతీతమైన, బుద్ధిచే గ్రహించే అత్యంతమైన సుఖం ఏదో, అది తెలిసి అక్కడ స్థిరుడైనవాడు తత్వం నుండి చలించడు.`,
    english: `In that joyous state, one is situated beyond all material sense gratification. Established thus, one never departs from the truth, and upon gaining this he thinks there is no greater gain. Being situated in such a position, one is never shaken, even in the midst of greatest difficulty.`,
    explanation: `The joy of the Self surpasses all sense pleasure — it is known by the purified intellect, beyond the senses. Once this joy is found, nothing external can match it. Established in this, nothing shakes you. This is the pinnacle of what the Gita calls yoga.`,
    takeaway: `The joy found in the Self surpasses all sense pleasure and, once found, nothing external can match it.`,
    tags: ['wisdom', 'peace']
  },
  '6.22': {
    sanskrit: `यं लब्ध्वा चापरं लाभं मन्यते नाधिकं ततः।
यस्मिन्स्थितो न दुःखेन गुरुणापि विचाल्यते॥`,
    telugu: `ఆ స్థితిని పొందిన తర్వాత దానికంటే అధికమైన లాభమేదీ లేదని తలుస్తాడు. ఆ స్థితిలో స్థిరుడైన వాడు మహాదుఃఖంతో కూడా చలించడు.`,
    english: `Upon gaining this one thinks there is no greater gain. Being situated in such a position, one is never shaken, even in the midst of greatest difficulty.`,
    explanation: `When you have found the highest, nothing else seems comparably valuable — and no difficulty can shake you from it. This is the Gita's promise: not that bad things stop happening but that they lose their power to uproot you. Stability becomes unconditional.`,
    takeaway: `The highest gain makes nothing else comparably valuable — and no difficulty can uproot you from it.`,
    tags: ['wisdom', 'peace']
  },
  '6.23': {
    sanskrit: `तं विद्याद्दुःखसंयोगवियोगं योगसंज्ञितम्।
स निश्चयेन योक्तव्यो योगोऽनिर्विण्णचेतसा॥`,
    telugu: `దుఃఖ సంయోగ వియోగాన్ని యోగం అని తెలుసుకో. నిరుత్సాహం లేని చిత్తంతో నిశ్చయంతో ఆ యోగాన్ని ఆచరించాలి.`,
    english: `Know that yoga is disconnection from pain. This yoga is to be practiced with firm determination and cheerful heart.`,
    explanation: `Yoga defined as 'disconnection from connection with pain' — breaking the habitual entanglement with suffering. And the method: practice with firm determination and a cheerful heart. Not grim willpower but joyful, steady commitment. Joy is the fuel of genuine spiritual practice.`,
    takeaway: `Practice with firm determination AND a cheerful heart — joy is the fuel of genuine spiritual practice.`,
    tags: ['yoga', 'wisdom']
  },
  '6.24': {
    sanskrit: `सङ्कल्पप्रभवान्कामांस्त्यक्त्वा सर्वानशेषतः।
मनसैवेन्द्रियग्रामं विनियम्य समन्ततः॥`,
    telugu: `మనసాన ఉద్భవించే సమస్త కోరికలను సంపూర్ణంగా విడిచి, అన్ని వైపులా మనసుచే ఇంద్రియ వర్గాన్ని నిగ్రహించి.`,
    english: `Abandoning without exception all the desires arising from the imagination, and fully restraining the group of senses by the mind from all sides.`,
    explanation: `The instruction for meditation practice: abandon all imagination-born desires completely, restrain all senses in all directions through the mind. This sounds impossible, but through sustained practice the grip of desire on the mind gradually loosens.`,
    takeaway: `Through sustained practice, the grip of desire on the mind gradually loosens — begin and persist.`,
    tags: ['meditation', 'self-control']
  },
  '6.25': {
    sanskrit: `शनैः शनैरुपरमेद्बुद्ध्या धृतिगृहीतया।
आत्मसंस्थं मनः कृत्वा न किञ्चिदपि चिन्तयेत्॥`,
    telugu: `ధైర్యం ద్వారా ధరించిన బుద్ధితో మెల్లగా మెల్లగా ఉపరమించాలి. మనస్సు ఆత్మలో స్థిరపడేలా చేసి, మరి ఏమీ చింతించకూడదు.`,
    english: `Gradually, step by step, one should become situated in trance by means of intelligence sustained by full conviction, and thus the mind should be fixed on the Self alone and should think of nothing else.`,
    explanation: `Gradually, step by step — this is the instruction for meditation. Not a sudden leap but a patient, sustained process of withdrawal from all external objects and thinking, until the mind rests in the Self alone. Gentleness and persistence, not force.`,
    takeaway: `Progress in meditation is gradual — patient, gentle persistence rather than forceful effort.`,
    tags: ['meditation', 'wisdom']
  },
  '6.26': {
    sanskrit: `यतो यतो निश्चलति मनश्चञ्चलमस्थिरम्।
ततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥`,
    telugu: `చంచలమైన, అస్థిరమైన మనస్సు ఎక్కడ ఎక్కడ ఎటు పడితే అటు వెళ్తుందో, అక్కడ అక్కడ దాన్ని నిగ్రహించి ఆత్మలోనే వశపరచుకోవాలి.`,
    english: `Whenever the mind wanders, due to its flickering and unsteady nature, one must certainly withdraw it and bring it back under the control of the Self.`,
    explanation: `'Whenever the mind wanders, bring it back' — this is the central practice instruction of meditation. Not 'don't let the mind wander' (which is impossible) but 'when it wanders, gently bring it back.' Patient repetition of this single action is the entire practice.`,
    takeaway: `The entire practice of meditation is this: when the mind wanders, gently bring it back — repeat endlessly.`,
    tags: ['meditation', 'self-control']
  },
  '6.27': {
    sanskrit: `प्रशान्तमनसं ह्येनं योगिनं सुखमुत्तमम्।
उपैति शान्तरजसं ब्रह्मभूतमकल्मषम्॥`,
    telugu: `ప్రశాంత మనస్కుడు, రజస్సు శాంతించినవాడు, బ్రహ్మభూతుడు, నిర్మలుడైన ఈ యోగికి ఉత్తమ సుఖం లభిస్తుంది.`,
    english: `The yogi whose mind is fixed on me verily attains the highest perfection of transcendental happiness. He is beyond the mode of passion, he realizes his qualitative identity with Brahman, and thus he is freed from all reactions to past deeds.`,
    explanation: `To the yogi with a tranquil mind — rajas quieted, established in Brahman, pure — the highest happiness comes. This happiness is not earned through effort but received through preparation. The quiet, pure mind becomes like a clear mirror in which the light of the Self is fully reflected.`,
    takeaway: `Prepare the mind through practice — happiness comes not through effort but through receptivity to what is always present.`,
    tags: ['yoga', 'peace']
  },
  '6.28': {
    sanskrit: `युञ्जन्नेवं सदात्मानं योगी विगतकल्मषः।
सुखेन ब्रह्मसंस्पर्शमत्यन्तं सुखमश्नुते॥`,
    telugu: `ఈ విధంగా నిత్యం ఆత్మను ఏకాగ్రం చేస్తూ, పాపాలు తొలగిన యోగి సులభంగా బ్రహ్మ స్పర్శతో అత్యంత సుఖాన్ని అనుభవిస్తాడు.`,
    english: `Thus the self-controlled yogi, constantly engaged in yoga practice, becomes free from all material contamination and achieves the highest stage of perfect happiness in transcendental loving service to the Lord.`,
    explanation: `The purified yogi, practicing constantly, easily experiences the touch of Brahman — infinite happiness. 'Easily' is the key word: what seems impossibly difficult from outside the practice becomes natural and effortless within it. Practice transforms the impossible into the obvious.`,
    takeaway: `What seems impossible before practice becomes natural and obvious within it — begin and persist.`,
    tags: ['yoga', 'peace']
  },
  '6.29': {
    sanskrit: `सर्वभूतस्थमात्मानं सर्वभूतानि चात्मनि।
ईक्षते योगयुक्तात्मा सर्वत्र समदर्शनः॥`,
    telugu: `యోగ యుక్తాత్మ సర్వభూతాలలో ఆత్మను, ఆత్మలో సర్వభూతాలను చూసి, సర్వత్ర సమ దర్శనుడవుతాడు.`,
    english: `A true yogi observes me in all beings and also sees every being in me. Indeed, the self-realized person sees me everywhere.`,
    explanation: `The vision of the established yogi: the same Self in all beings, all beings within the Self. This is not a philosophy but a direct experience — seeing with the eye of the heart what the physical eye cannot. This equal vision is the fruit of sustained practice.`,
    takeaway: `The fruit of sustained yoga practice: seeing the same Self in all beings — a direct experience, not a philosophy.`,
    tags: ['wisdom', 'compassion']
  },
  '6.30': {
    sanskrit: `यो मां पश्यति सर्वत्र सर्वं च मयि पश्यति।
तस्याहं न प्रणश्यामि स च मे न प्रणश्यति॥`,
    telugu: `సర్వత్ర నన్ను చూసేవానికి, నాలో సర్వాన్ని చూసేవానికి నేను కనుమరుగవను. అతడు నాకు కనుమరుగవడు.`,
    english: `For one who sees me everywhere and sees everything in me, I am never lost, nor is one ever lost to me.`,
    explanation: `Two directions of equal vision: seeing the Divine everywhere, and seeing everything in the Divine. The one who truly sees this way cannot lose the Divine — the Divine is everywhere they look. And such a person is never lost to the Divine — they are always within the Divine's sight.`,
    takeaway: `See the Divine everywhere and see everything in the Divine — this double vision is the mark of realization.`,
    tags: ['devotion', 'wisdom']
  },
  '6.31': {
    sanskrit: `सर्वभूतस्थितं यो मां भजत्येकत्वमास्थितः।
सर्वथा वर्तमानोऽपि स योगी मयि वर्तते॥`,
    telugu: `ఏకత్వంలో నెలకొని, సర్వభూతాలలో ఉన్న నన్ను భజించే వాడు, ఏ విధంగా వర్తించినా నాలోనే వర్తిస్తాడు.`,
    english: `Such a yogi, who engages in the worshipful service of the Divine within all living beings, pursuing the vision of oneness, abides in me under all circumstances.`,
    explanation: `The yogi who worships the Divine in all beings, rooted in oneness — whatever they do, they live in the Divine. This is continuous yoga: not just on the meditation cushion but in every interaction, every act of service, every moment of recognition.`,
    takeaway: `Worship the Divine in all beings — this transforms every interaction into continuous yoga.`,
    tags: ['devotion', 'yoga']
  },
  '6.32': {
    sanskrit: `आत्मौपम्येन सर्वत्र समं पश्यति योऽर्जुन।
सुखं वा यदि वा दुःखं स योगी परमो मतः॥`,
    telugu: `అర్జునా, ఆత్మ ఔపమ్యంతో సర్వత్ర సుఖ దుఃఖాలను సమంగా చూసేవాడు పరమ యోగి అని నా మతం.`,
    english: `O Arjuna, one who compares everything to the self — who sees pleasure and pain equally in all beings — is considered a perfect yogi.`,
    explanation: `The highest yoga: feeling others' joy and pain as your own. This is not merely intellectual empathy but realized non-separation — the boundary between self and other has dissolved. This is the crowning definition of the yogi in this chapter.`,
    takeaway: `The highest yoga: feeling others' joy and pain as your own — the boundary between self and other dissolved.`,
    tags: ['wisdom', 'compassion']
  },
  '6.33': {
    sanskrit: `अर्जुन उवाच
योऽयं योगस्त्वया प्रोक्तः साम्येन मधुसूदन।
एतस्याहं न पश्यामि चञ्चलत्वात्स्थितिं स्थिराम्॥`,
    telugu: `అర్జునుడు పలికెను:
మధుసూదనా, సమత్వంతో బోధించిన ఈ యోగం యొక్క స్థిరత్వాన్ని నేను చంచలత్వం వల్ల చూడలేకున్నాను.`,
    english: `Arjuna said: O Madhusudana, the system of yoga which you have summarized appears impractical and unendurable to me, for the mind is restless and unsteady.`,
    explanation: `Arjuna honestly admits: this sounds impossible — the mind is too restless for me to practice this. This is the most relatable moment of Chapter 6. Almost every practitioner has felt this. Krishna's response will be the most encouraging teaching of the chapter.`,
    takeaway: `Honest admission of difficulty is not defeat — it is the beginning of genuine learning.`,
    tags: ['wisdom', 'truth']
  },
  '6.34': {
    sanskrit: `चञ्चलं हि मनः कृष्ण प्रमाथि बलवद्दृढम्।
तस्याहं निग्रहं मन्ये वायोरिव सुदुष्करम्॥`,
    telugu: `కృష్ణా, మనస్సు చంచలమైనది, ప్రమాదకరమైనది, బలమైనది, దృఢమైనది. దాన్ని నిగ్రహించడం గాలిని నిగ్రహించడం అంత కష్టమని నేను తలుస్తాను.`,
    english: `The mind is restless, turbulent, obstinate, and very strong, O Krishna, and to subdue it is, it seems to me, more difficult than controlling the wind.`,
    explanation: `Arjuna's honest assessment of the mind: restless, turbulent, stubborn, powerful — controlling it is harder than controlling the wind. This is not exaggeration — every sincere meditator knows this truth. Naming the difficulty accurately is the first step to addressing it.`,
    takeaway: `Name the difficulty accurately — controlling the mind is genuinely hard, not just a beginner's problem.`,
    tags: ['wisdom', 'truth']
  },
  '6.35': {
    sanskrit: `श्रीभगवानुवाच
असंशयं महाबाहो मनो दुर्निग्रहं चलम्।
अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
మహాబాహో, నిస్సందేహంగా మనస్సు చంచలమైనది, నిగ్రహించడం కష్టమైనది. కానీ కౌంతేయా, అభ్యాసం మరియు వైరాగ్యంతో గ్రహించబడుతుంది.`,
    english: `Lord Sri Krishna said: O mighty-armed son of Kunti, it is undoubtedly very difficult to curb the restless mind, but it is possible with suitable practice and detachment.`,
    explanation: `Krishna doesn't contradict Arjuna — he affirms the difficulty and then gives the solution: practice (abhyasa) and non-attachment (vairagya). These two together make possible what seems impossible alone. Practice builds the capacity; non-attachment removes the friction.`,
    takeaway: `Practice builds the capacity and non-attachment removes the friction — together they make the impossible possible.`,
    tags: ['yoga', 'self-control']
  },
  '6.36': {
    sanskrit: `असंयतात्मना योगो दुष्प्राप इति मे मतिः।
वश्यात्मना तु यतता शक्योऽवाप्तुमुपायतः॥`,
    telugu: `అసంయత ఆత్మకు యోగం పొందడం కష్టమని నా మతం. కానీ వశ్యాత్మ, యతమానుడు ఉపాయంతో పొందగలడు.`,
    english: `For one whose mind is unbridled, self-realization is difficult work. But one whose mind is controlled and who strives by appropriate means is assured of success. That is my opinion.`,
    explanation: `Yoga is difficult for the uncontrolled mind — but attainable for the one who strives with proper means. The key word is 'appropriate means' — not all methods work for all people. Finding the right practice for your temperament is as important as practicing at all.`,
    takeaway: `Find the practice that fits your temperament — appropriate means is as important as sincere effort.`,
    tags: ['yoga', 'wisdom']
  },
  '6.37': {
    sanskrit: `अर्जुन उवाच
अयतिः श्रद्धयोपेतो योगाच्चलितमानसः।
अप्राप्य योगसंसिद्धिं कां गतिं कृष्ण गच्छति॥`,
    telugu: `అర్జునుడు పలికెను:
కృష్ణా, శ్రద్ధ గలిగి కానీ యత్నం లేక, యోగం నుండి చలించిన మనస్సుతో, యోగ సిద్ధి పొందలేక ఏ గతి పొందుతాడు?`,
    english: `Arjuna said: O Krishna, what is the destination of the unsuccessful transcendentalist who in the beginning takes to the process of self-realization with faith but who later desists due to worldly-mindedness and thus does not attain perfection in mysticism?`,
    explanation: `This is the most practically urgent question of the chapter: what happens to someone who starts the spiritual path with sincerity but doesn't complete it in this lifetime? The anxiety about 'failing' at spirituality is real. Krishna's answer is profoundly reassuring.`,
    takeaway: `What happens if I start the spiritual path but don't finish it? This is the most important practical question.`,
    tags: ['wisdom', 'faith']
  },
  '6.38': {
    sanskrit: `कच्चिन्नोभयविभ्रष्टश्छिन्नाभ्रमिव नश्यति।
अप्रतिष्ठो महाबाहो विमूढो ब्रह्मणः पथि॥`,
    telugu: `महाबाहो, రెండు చోట్ల చెడిన వాడు, ఆధారం లేనివాడు, బ్రహ్మ మార్గంలో విమూఢుడు చీకటి మేఘం వలె నశించిపోతాడా?`,
    english: `Is such a person not lost in this world, O mighty-armed, like a riven cloud, who has no position in any sphere?`,
    explanation: `Arjuna's fear: is the person who falls from the spiritual path lost in both worlds — neither achieving worldly success nor spiritual liberation? This fear of being caught between is common. Krishna's response will directly address this anxiety.`,
    takeaway: `Fear of being caught between worldly and spiritual failure is universal — Krishna's answer is deeply reassuring.`,
    tags: ['wisdom', 'faith']
  },
  '6.39': {
    sanskrit: `एतन्मे संशयं कृष्ण छेत्तुमर्हस्यशेषतः।
त्वदन्यः संशयस्यास्य छेत्ता न ह्युपपद्यते॥`,
    telugu: `కృష్ణా, ఈ నా సందేహాన్ని సంపూర్ణంగా తొలగించే అర్హుడవు నువ్వే. ఈ సందేహాన్ని తొలగించే వేరే ఎవరూ లేరు.`,
    english: `O Krishna, please resolve my doubt completely; save for you, no one is able to destroy this doubt.`,
    explanation: `Arjuna appeals to Krishna as the only one who can resolve this doubt. When we face questions that no ordinary wisdom can answer — questions about ultimate meaning, destiny, and spiritual progress — we need a teacher who has direct knowledge, not just theoretical understanding.`,
    takeaway: `Some questions require a teacher with direct knowledge — ordinary wisdom cannot answer them.`,
    tags: ['wisdom', 'faith']
  },
  '6.40': {
    sanskrit: `श्रीभगवानुवाच
पार्थ नैवेह नामुत्र विनाशस्तस्य विद्यते।
न हि कल्याणकृत्कश्चिद्दुर्गतिं तात गच्छति॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
పార్థా, వానికి ఇక్కడ గాని, అక్కడ గాని వినాశం లేదు. నిజంగా కల్యాణ కార్యాలు చేసేవాడు ఎవ్వడూ దుర్గతి పొందడు.`,
    english: `The Blessed Lord said: O son of Pritha, a transcendentalist engaged in auspicious activities does not meet with destruction either in this world or the spiritual world. One who does good, my friend, is never overcome by evil.`,
    explanation: `The most reassuring teaching: one who does good, who strives sincerely, is NEVER overcome by evil, never destroyed in either world. No sincere effort is wasted. This is Krishna's personal guarantee. The spiritual path has a cosmic safety net.`,
    takeaway: `No sincere spiritual effort is wasted — one who does good is never ultimately overcome. This is Krishna's guarantee.`,
    tags: ['faith', 'wisdom']
  },
  '6.41': {
    sanskrit: `प्राप्य पुण्यकृतां लोकानुषित्वा शाश्वतीः समाः।
शुचीनां श्रीमतां गेहे योगभ्रष्टोऽभिजायते॥`,
    telugu: `పుణ్యాత్ముల లోకాలు పొంది, అక్కడ శాశ్వతమైన సంవత్సరాలు నివసించి, పవిత్రులు, శ్రీమంతుల గృహంలో యోగభ్రష్టుడు జన్మిస్తాడు.`,
    english: `The unsuccessful yogi, after many, many years of enjoyment on the planets of the pious living entities, is born into a family of righteous people, or into a family of rich aristocracy.`,
    explanation: `The fallen yogi first enjoys the fruits of accumulated merit in higher planes, then is reborn in a virtuous or prosperous family — circumstances that support continued spiritual practice. Spiritual progress is not lost; favorable conditions carry it forward.`,
    takeaway: `Spiritual progress carries forward — the fallen yogi is reborn in conditions favorable to continuing.`,
    tags: ['soul', 'wisdom']
  },
  '6.42': {
    sanskrit: `अथवा योगिनामेव कुले भवति धीमताम्।
एतद्धि दुर्लभतरं लोके जन्म यदीदृशम्॥`,
    telugu: `లేదా జ్ఞానవంతులైన యోగుల కులంలోనే జన్మిస్తాడు. ఇటువంటి జన్మ లోకంలో చాలా అరుదైనది.`,
    english: `Or the unsuccessful yogi is born in a family of transcendentalists who are surely great in wisdom. Truly, such a birth is rare in this world.`,
    explanation: `Being born into a family of genuine spiritual practitioners is considered even rarer and more valuable than wealth — because spiritual wisdom is the most precious inheritance. The fallen yogi's most auspicious possible rebirth is directly into a family of practitioners.`,
    takeaway: `Spiritual wisdom is the most precious inheritance — more valuable than wealth or status.`,
    tags: ['soul', 'wisdom']
  },
  '6.43': {
    sanskrit: `तत्र तं बुद्धिसंयोगं लभते पौर्वदेहिकम्।
यतते च ततो भूयः संसिद्धौ कुरुनन्दन॥`,
    telugu: `అక్కడ పూర్వ దేహంలో పొందిన బుద్ధి సంయోగాన్ని పొందుతాడు. కురు సంతానమా, ఆ తర్వాత మరింతగా సంసిద్ధికి యత్నిస్తాడు.`,
    english: `On taking such a birth, the soul is again reminded of the divine consciousness of his previous life, and tries to make further progress in order to achieve complete success, O son of Kuru.`,
    explanation: `The fallen yogi picks up exactly where they left off — the spiritual attainments of the previous life remain accessible. Like waking from sleep and continuing work, the soul resumes its spiritual journey. Progress truly accumulates across lives.`,
    takeaway: `Spiritual progress truly accumulates — the soul resumes exactly where it left off.`,
    tags: ['soul', 'faith']
  },
  '6.44': {
    sanskrit: `पूर्वाभ्यासेन तेनैव ह्रियते ह्यवशोऽपि सः।
जिज्ञासुरपि योगस्य शब्दब्रह्मातिवर्तते॥`,
    telugu: `పూర్వ అభ్యాసం ద్వారా అతడు అవశుడై కూడా ఆకర్షితుడవుతాడు. యోగం యొక్క జిజ్ఞాసువు కూడా శబ్ద బ్రహ్మాన్ని అతిక్రమిస్తాడు.`,
    english: `By virtue of the divine consciousness of his previous life, he automatically becomes attracted to the yogic principles even without seeking them. Such an inquisitive transcendentalist, striving for yoga, stands always above the ritualistic principles of the scriptures.`,
    explanation: `Previous life's practice creates an almost automatic attraction to the spiritual path in the new life — the residue of genuine practice is magnetic. Even just being sincerely curious about yoga in this life carries one beyond mere ritual observance.`,
    takeaway: `Previous spiritual practice creates an attraction to the path in future lives — genuine practice always carries forward.`,
    tags: ['soul', 'faith']
  },
  '6.45': {
    sanskrit: `प्रयत्नाद्यतमानस्तु योगी संशुद्धकिल्बिषः।
अनेकजन्मसंसिद्धस्तततो याति परां गतिम्॥`,
    telugu: `ప్రయత్నంతో యత్నిస్తున్న యోగి, పాపాలు శుద్ధమై, అనేక జన్మలలో సంసిద్ధుడై, ఆ తర్వాత పరమ గతిని పొందుతాడు.`,
    english: `And when the yogi engages himself with sincere endeavor in making further progress, being washed of all contaminations, then ultimately, achieving perfection after many, many births of practice, he attains the supreme goal.`,
    explanation: `Through many lifetimes of sincere practice, the yogi is progressively purified and ultimately attains the supreme goal. This is deeply reassuring: the path is longer than one lifetime, but it is reliable. Sincere effort in any lifetime contributes to the total.`,
    takeaway: `The path may span many lifetimes, but it is completely reliable — sincere effort always contributes.`,
    tags: ['soul', 'faith']
  },
  '6.46': {
    sanskrit: `तपस्विभ्योऽधिको योगी ज्ञानिभ्योऽपि मतोऽधिकः।
कर्मिभ्यश्चाधिको योगी तस्माद्योगी भवार्जुन॥`,
    telugu: `యోగి తపస్వుల కంటే అధికుడు. జ్ఞానుల కంటే కూడా అధికుడు. కర్ముల కంటే అధికుడు. కాబట్టి అర్జునా, యోగి అవు.`,
    english: `A yogi is greater than the ascetic, greater than the empiricist, and greater than the fruitive worker. Therefore, O Arjuna, in all circumstances, be a yogi.`,
    explanation: `The yogi outranks the ascetic, the philosopher, and the ritualist. Why? Because yoga integrates all three: the discipline of the ascetic, the understanding of the philosopher, and the engagement of the active person — combined into one living practice.`,
    takeaway: `Yoga integrates discipline, wisdom, and action into one living practice — this is why it is the highest.`,
    tags: ['yoga', 'wisdom']
  },
  '6.47': {
    sanskrit: `योगिनामपि सर्वेषां मद्गतेनान्तरात्मना।
श्रद्धावान्भजते यो मां स मे युक्ततमो मतः॥`,
    telugu: `సమస్త యోగులలో కూడా, అంతరాత్మ నాలో నిమగ్నంగా, శ్రద్ధతో నన్ను భజించే వాడు నాకు అత్యంత యుక్తుడని నా మతం.`,
    english: `And of all yogis, the one with great faith who always abides in me, thinks of me within himself, and renders transcendental loving service to me — he is the most intimately united with me in yoga and is the highest of all.`,
    explanation: `The highest yogi is the one who is absorbed in the Divine with great faith — not the most technically advanced meditator but the most deeply devoted. Love united with practice is the pinnacle. This is the Gita's final word on yoga in Chapter 6.`,
    takeaway: `Love united with practice is the pinnacle of yoga — the devoted heart outranks the technically perfect.`,
    tags: ['devotion', 'yoga']
  },
  '7.1': {
    sanskrit: `श्रीभगवानुवाच
मय्यासक्तमनाः पार्थ योगं युञ्जन्मदाश्रयः।
असंशयं समग्रं मां यथा ज्ञास्यसि तच्छृणु॥`,
    telugu: `పార్థా, నాపై ఆసక్త మనస్సుతో, నన్ను ఆశ్రయించి యోగం సాధన చేస్తూ, నన్ను సందేహం లేకుండా సమగ్రంగా ఎలా తెలుసుకుంటావో అది వినుము.`,
    english: `O son of Pritha, now hear how by practicing yoga in full consciousness of me, with mind attached to me, you shall know me in full, free from doubt.`,
    explanation: `Chapter 7 begins with Krishna's promise: practice with mind fixed on me, take refuge in me — and you will know me completely, without doubt. This is an intimate invitation: not studying a doctrine but knowing a person. The personal relationship is the path.`,
    takeaway: `Know the Divine not as doctrine but as personal relationship — this is the path of Chapter 7.`,
    tags: ['devotion', 'wisdom']
  },
  '7.2': {
    sanskrit: `ज्ञानं तेऽहं सविज्ञानमिदं वक्ष्याम्यशेषतः।
यज्ज्ञात्वा नेह भूयोऽन्यज्ज्ञातव्यमवशिष्यते॥`,
    telugu: `జ్ఞానాన్ని విజ్ఞానంతో సహా నీకు సంపూర్ణంగా చెప్తాను. దాన్ని తెలుసుకున్న తర్వాత ఇక్కడ తెలుసుకోవలసినది మరేదీ మిగలదు.`,
    english: `I shall now declare unto you in full this knowledge, both phenomenal and noumenal. This being known, nothing further shall remain for you to know.`,
    explanation: `Knowledge (jnana) and direct realization (vijnana) together. Theory and experience. After this, nothing more needs to be known — because this points to the Source of all knowing. This is the promise of Chapter 7: total, complete, sufficient knowledge.`,
    takeaway: `Theory and direct realization together form complete knowledge — this is Chapter 7's promise.`,
    tags: ['knowledge', 'wisdom']
  },
  '7.3': {
    sanskrit: `मनुष्याणां सहस्रेषु कश्चिद्यतति सिद्धये।
यततामपि सिद्धानां कश्चिन्मां वेत्ति तत्त्वतः॥`,
    telugu: `సహస్ర మనుషులలో ఒకరు సిద్ధికి ప్రయత్నిస్తాడు. ప్రయత్నించే సిద్ధులలో కూడా ఒకరు మాత్రమే నన్ను తత్వతః తెలుసుకుంటాడు.`,
    english: `Out of many thousands among men, one may endeavor for perfection, and of those who have achieved perfection, hardly one knows me in truth.`,
    explanation: `The rarity of genuine God-realization: thousands pursue perfection; among those, few truly know. This is honest about the difficulty — not to discourage but to honor how precious genuine realization is. If it were easy and common, its depth wouldn't be accessible.`,
    takeaway: `Genuine realization is rare — this honesty honors its depth, not discourages the seeker.`,
    tags: ['wisdom', 'truth']
  },
  '7.4': {
    sanskrit: `भूमिरापोऽनलो वायुः खं मनो बुद्धिरेव च।
अहङ्कार इतीयं मे भिन्ना प्रकृतिरष्टधा॥`,
    telugu: `భూమి, నీరు, అగ్ని, వాయువు, ఆకాశం, మనస్సు, బుద్ధి, అహంకారం — ఇలా నా ప్రకృతి ఎనిమిది విధాలుగా విభజించబడింది.`,
    english: `Earth, water, fire, air, ether, mind, intelligence and false ego — all together these eight constitute my separated material energies.`,
    explanation: `The eight components of material nature: five elements plus mind, intellect, and ego. Everything material — including our thinking machinery — is included. This provides the complete inventory of what we are made of at the material level.`,
    takeaway: `The eight components of material nature include even our thinking machinery — we are made of the Divine's own energies.`,
    tags: ['wisdom', 'soul']
  },
  '7.5': {
    sanskrit: `अपरेयमितस्त्वन्यां प्रकृतिं विद्धि मे पराम्।
जीवभूतां महाबाहो ययेदं धार्यते जगत्॥`,
    telugu: `మహాబాహో, ఇది నా అపర ప్రకృతి. ఇదికంటే వేరైన నా పర ప్రకృతిని తెలుసుకో — ఏ జీవభూతంచే ఈ జగత్తు ధరించబడుతుందో.`,
    english: `Besides these, O mighty-armed Arjuna, there is another, superior energy of mine, which comprises the living entities who are exploiting the resources of this material, inferior nature.`,
    explanation: `Beyond the eight-fold lower nature, there is the higher nature — consciousness, the life-principle itself. This is what animates the material world. The Divine's higher nature is what makes the lower nature alive and meaningful rather than mere dead matter.`,
    takeaway: `Consciousness — the Divine's higher nature — is what animates material reality and makes it meaningful.`,
    tags: ['soul', 'wisdom']
  },
  '7.6': {
    sanskrit: `एतद्योनीनि भूतानि सर्वाणीत्युपधारय।
अहं कृत्स्नस्य जगतः प्रभवः प्रलयस्तथा॥`,
    telugu: `అన్ని భూతాలు ఈ రెండు ప్రకృతులు నుండి జన్మించాయని తెలుసుకో. నేనే కృత్స్న జగత్తుకు ఉద్భవం మరియు ప్రలయం.`,
    english: `Of all that is material and all that is spiritual in this world, know for certain that I am both its origin and its dissolution.`,
    explanation: `All of existence — material and spiritual — originates from the Divine and returns to the Divine. The Divine is both source and destination, both creator and dissolver. This comprehensive vision leaves nowhere outside the Divine. Everything is within it.`,
    takeaway: `The Divine is both source and destination — nowhere and nothing lies outside its embrace.`,
    tags: ['wisdom', 'truth']
  },
  '7.7': {
    sanskrit: `मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय।
मयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव॥`,
    telugu: `ధనంజయా, నాకంటే పరమైనది మరొకటి లేదు. నూలులో మణులు వలె ఇదంతా నాలో గుచ్చబడి ఉంది.`,
    english: `O conqueror of wealth, there is no truth superior to me. Everything rests upon me, as pearls are strung on a thread.`,
    explanation: `Nothing is higher than the Divine — and everything is strung on it like pearls on a thread. The thread holds the necklace together invisibly; remove it and all the pearls scatter. The Divine holds all of existence together invisibly.`,
    takeaway: `The Divine is the invisible thread holding all of existence together — remove it and everything scatters.`,
    tags: ['wisdom', 'devotion']
  },
  '7.8': {
    sanskrit: `रसोऽहमप्सु कौन्तेय प्रभास्मि शशिसूर्ययोः।
प्रणवः सर्ववेदेषु शब्दः खे पौरुषं नृषु॥`,
    telugu: `కౌంతేయా, నీటిలో రసం (రుచి) నేను, చంద్రసూర్యులలో కాంతి నేను. సమస్త వేదాలలో ప్రణవం (ఓం) నేను, ఆకాశంలో శబ్దం నేను, పురుషులలో పౌరుషం నేను.`,
    english: `O son of Kunti, I am the taste of water, the light of the sun and the moon, the syllable Om in the Vedic mantras; I am the sound in ether and ability in man.`,
    explanation: `The Divine is the essential quality in every thing: taste in water, light in sun, Om in scripture, sound in space, ability in humans. When you taste water, you taste the Divine. When light touches you, it is the Divine touching you. Everything becomes sacred.`,
    takeaway: `When you taste water, you taste the Divine — everything in the world becomes a form of encounter.`,
    tags: ['wisdom', 'devotion']
  },
  '7.9': {
    sanskrit: `पुण्यो गन्धः पृथिव्यां च तेजश्चास्मि विभावसौ।
जीवनं सर्वभूतेषु तपश्चास्मि तपस्विषु॥`,
    telugu: `భూమిలో పవిత్రమైన సుగంధం నేను, అగ్నిలో తేజస్సు నేను. సమస్త భూతాలలో జీవనం నేను, తపస్వులలో తపస్సు నేను.`,
    english: `I am the original fragrance of the earth, and I am the heat in fire. I am the life of all that lives, and I am the penances of all ascetics.`,
    explanation: `The Divine is the pure fragrance of earth, the heat of fire, the life in all living things, the penance of ascetics. These seemingly ordinary qualities are all forms of divine presence. When you smell a fragrant flower, you are encountering the Divine.`,
    takeaway: `The fragrance of flowers, the heat of fire, the life in all beings — all are forms of divine presence.`,
    tags: ['wisdom', 'devotion']
  },
  '7.10': {
    sanskrit: `बीजं मां सर्वभूतानां विद्धि पार्थ सनातनम्।
बुद्धिर्बुद्धिमतामस्मि तेजस्तेजस्विनामहम्॥`,
    telugu: `పార్థా, సమస్త భూతాలకు సనాతన బీజం నేను అని తెలుసుకో. బుద్ధిమంతుల బుద్ధి నేను, తేజస్వుల తేజస్సు నేను.`,
    english: `O son of Pritha, know that I am the original seed of all existences, the intelligence of the intelligent, and the prowess of all powerful men.`,
    explanation: `The Divine is the seed — the generative principle — within every being. Not added from outside but the most interior aspect of each thing. The intelligence in the intelligent, the power in the powerful — these are glimpses of the Divine shining through finite beings.`,
    takeaway: `The Divine is the seed within every being — the innermost generative principle, not an external addition.`,
    tags: ['wisdom', 'truth']
  },
  '7.11': {
    sanskrit: `बलं बलवतां चाहं कामरागविवर्जितम्।
धर्माविरुद्धो भूतेषु कामोऽस्मि भरतर्षभ॥`,
    telugu: `భరత శ్రేష్ఠా, బలవంతుల కామ రాగ రహిత బలం నేను. భూతాలలో ధర్మ అవిరుద్ధ కామం నేను.`,
    english: `I am the strength of the strong, devoid of passion and desire. I am sex life which is not contrary to religious principles, O Lord of the Bharatas.`,
    explanation: `The Divine is strength free from ego-desire and craving — power in its purest form. Even desire, when aligned with dharma, is divine. This is the Gita's balanced teaching: not all desire is wrong, only desire that violates the moral order.`,
    takeaway: `Even desire aligned with dharma is divine — the Gita is not against desire, only against adharmic craving.`,
    tags: ['wisdom', 'truth']
  },
  '7.12': {
    sanskrit: `ये चैव सात्त्विका भावा राजसास्तामसाश्च ये।
मत्त एवेति तान्विद्धि न त्वहं तेषु ते मयि॥`,
    telugu: `సాత్త్విక, రాజసిక, తామసిక భావాలు ఏవైనా నా నుండే కలుగుతాయని తెలుసుకో. కానీ నేను వాటిలో లేను, అవి నాలో ఉన్నాయి.`,
    english: `Know that all states of being — be they of goodness, passion or ignorance — are manifested by my energy. I am, in one sense, everything, but I am independent. I am not under the modes of material nature, for they, on the contrary, are within me.`,
    explanation: `All three gunas arise from the Divine — but the Divine is not contained in the gunas; the gunas are contained in the Divine. This is the asymmetry of the relationship: everything is within the Divine, but the Divine transcends everything.`,
    takeaway: `Everything is within the Divine, but the Divine transcends everything — asymmetry, not mere equality.`,
    tags: ['wisdom', 'soul']
  },
  '7.13': {
    sanskrit: `त्रिभिर्गुणमयैर्भावैरेभिः सर्वमिदं जगत्।
मोहितं नाभिजानाति मामेभ्यः परमव्ययम्॥`,
    telugu: `ఈ మూడు గుణమయ భావాలచే ఈ సమస్త జగత్తు మోహితమై నాకు పరమైన, అవ్యయమైన నన్ను తెలుసుకోలేదు.`,
    english: `Deluded by the three modes of material nature, the whole world does not know me, who am above the modes and inexhaustible.`,
    explanation: `The three gunas create the maya that veils the Divine. The entire world is caught in this web of delusion — mistaking the moving, changing dance of the gunas for ultimate reality. The Divine, unchanged, watches from beyond. This is the nature of maya.`,
    takeaway: `The three gunas create the veil of maya — the entire world mistakes their dance for ultimate reality.`,
    tags: ['wisdom', 'truth']
  },
  '7.14': {
    sanskrit: `दैवी ह्येषा गुणमयी मम माया दुरत्यया।
मामेव ये प्रपद्यन्ते मायामेतां तरन्ति ते॥`,
    telugu: `నా ఈ గుణమయమైన దైవీ మాయ దుస్తరమైనది. నన్ను ఆశ్రయించే వారు మాత్రమే ఈ మాయను దాటుతారు.`,
    english: `This divine energy of mine, consisting of the three modes of material nature, is difficult to overcome. But those who have surrendered unto me can easily cross beyond it.`,
    explanation: `Divine maya — made of the gunas — is almost impossible to cross through individual effort alone. But those who surrender to the Divine cross it easily. This is the relationship between effort and grace: effort brings us to the edge; grace carries us across.`,
    takeaway: `Effort brings us to the edge of maya; surrender allows grace to carry us across.`,
    tags: ['devotion', 'wisdom']
  },
  '7.15': {
    sanskrit: `न मां दुष्कृतिनो मूढाः प्रपद्यन्ते नराधमाः।
मायया अपहृतज्ञाना आसुरं भावमाश्रिताः॥`,
    telugu: `దుష్కర్ముడు, మూఢుడు, నరాధముడు, మాయ జ్ఞానాపహరించినవారు, ఆసుర భావాన్ని ఆశ్రయించినవారు నన్ను ఆశ్రయించరు.`,
    english: `Those miscreants who are grossly foolish, who are lowest among mankind, whose knowledge is stolen by illusion, and who partake of the atheistic nature of demons do not surrender unto me.`,
    explanation: `Four types who don't surrender: the deliberately evil, the grossly foolish, the those whose knowledge is stolen by illusion, and those of demonic temperament. The most common is the third — knowledge stolen by maya. Most people aren't evil; they are simply under illusion.`,
    takeaway: `Most people don't surrender not from evil but from illusion — maya has stolen their clear seeing.`,
    tags: ['wisdom', 'truth']
  },
  '7.16': {
    sanskrit: `चतुर्विधा भजन्ते मां जनाः सुकृतिनोऽर्जुन।
आर्तो जिज्ञासुरर्थार्थी ज्ञानी च भरतर्षभ॥`,
    telugu: `అర్జునా, పుణ్యాత్ములైన నాలుగు రకాల మానవులు నన్ను భజిస్తారు: ఆర్తుడు, జిజ్ఞాసువు, అర్థార్థి, జ్ఞాని.`,
    english: `O best among the Bharatas, four kinds of pious men begin to render devotional service unto me — the distressed, the desirer of wealth, the inquisitive, and he who is searching for knowledge of the Absolute.`,
    explanation: `Four types who turn to the Divine: the suffering person seeking relief, the curious seeker, the person wanting material blessings, and the genuine wisdom-seeker. All are welcomed — there is no wrong door for entering the Divine's presence. Any sincere approach is honored.`,
    takeaway: `All four approaches to the Divine are welcomed — there is no wrong door when the seeking is sincere.`,
    tags: ['devotion', 'wisdom']
  },
  '7.17': {
    sanskrit: `तेषां ज्ञानी नित्ययुक्त एकभक्तिर्विशिष्यते।
प्रियो हि ज्ञानिनोऽत्यर्थमहं स च मम प्रियः॥`,
    telugu: `వారిలో నిత్యయుక్తుడు, ఏకభక్తి గల జ్ఞాని విశేషుడు. జ్ఞానికి నేను అత్యంత ప్రియుడిని, అతడు నాకు ప్రియుడు.`,
    english: `Of these, the one who is in full knowledge and who is always engaged in pure devotional service is the best. For I am very dear to him, and he is dear to me.`,
    explanation: `Among the four types, the wisdom-devotee who is ever-united and single-pointed in love is the best — and is the most dear to the Divine. This mutuality of love is the deepest description of the devotee's relationship with the Divine.`,
    takeaway: `The wisdom-devotee and the Divine are mutually dear — love flows in both directions.`,
    tags: ['devotion', 'wisdom']
  },
  '7.18': {
    sanskrit: `उदाराः सर्व एवैते ज्ञानी त्वात्मैव मे मतम्।
आस्थितः स हि युक्तात्मा मामेवानुत्तमां गतिम्॥`,
    telugu: `వీరందరూ ఉదారులే. కానీ జ్ఞాని నా ఆత్మయే అని నా మతం. అతడు యుక్తాత్మడై అనుత్తమ గతిని (నన్నే) ఆశ్రయించాడు.`,
    english: `All these devotees are undoubtedly magnanimous souls, but he who is situated in knowledge of me I consider to be just like my own self. Being engaged in my transcendental service, he is sure to attain me, the highest and most perfect goal.`,
    explanation: `The wisdom-devotee is described as the Divine's own Self — the deepest statement of intimacy. The one who truly knows the Divine is so close that distinction blurs. This is the ultimate fruit of knowledge-devotion: becoming as one with the object of love.`,
    takeaway: `The deepest knowledge-devotion blurs the distinction between knower and known — love becomes identity.`,
    tags: ['devotion', 'soul']
  },
  '7.19': {
    sanskrit: `बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते।
वासुदेवः सर्वमिति स महात्मा सुदुर्लभः॥`,
    telugu: `అనేక జన్మల చివర జ్ఞానవంతుడు నన్ను ఆశ్రయిస్తాడు. 'వాసుదేవుడే అన్నీ' అని (తెలిసి). అటువంటి మహాత్మ అత్యంత అరుదైనవాడు.`,
    english: `After many births and deaths, he who is actually in knowledge surrenders unto me, knowing me to be the cause of all causes and all that is. Such a great soul is very rare.`,
    explanation: `After many lifetimes of genuine seeking, the realization dawns: Vasudeva is all — the Divine is everything. This final surrender is the fruit of the entire spiritual journey. Such a great soul is very rare — and very precious when they appear.`,
    takeaway: `After many lifetimes, the realization dawns: the Divine is everything — this is the fruit of the whole journey.`,
    tags: ['wisdom', 'soul']
  },
  '7.20': {
    sanskrit: `कामैस्तैस्तैर्हृतज्ञाना प्रपद्यन्तेऽन्यदेवताः।
तं तं नियममास्थाय प्रकृत्या नियताः स्वया॥`,
    telugu: `వివిధ కోరికలచే జ్ఞానం హరించబడిన వారు వివిధ నియమాలు పాటించి, తమ స్వభావం ద్వారా నిర్ణయించబడి ఇతర దేవతలను ఆశ్రయిస్తారు.`,
    english: `Those whose intelligence has been stolen by material desires surrender unto demigods and follow the particular rules and regulations of worship according to their own natures.`,
    explanation: `Those whose wisdom is clouded by particular desires worship specific deities for specific results. There is nothing wrong with this as a starting point — but it has limits. Specific desires create specific worship, which yields specific results, but not final liberation.`,
    takeaway: `Specific desires create specific worship that yields specific results but not final liberation.`,
    tags: ['wisdom', 'devotion']
  },
  '7.21': {
    sanskrit: `यो यो यां यां तनुं भक्तः श्रद्धयार्चितुमिच्छति।
तस्य तस्याचलां श्रद्धां तामेव विदधाम्यहम्॥`,
    telugu: `ఎవడు ఏ రూపాన్ని శ్రద్ధతో పూజించాలని ఇచ్ఛిస్తాడో, ఆ ఆ వానికి ఆ ఆ రూపంలో స్థిరమైన శ్రద్ధను నేను ఇస్తాను.`,
    english: `I am in everyone's heart as the Supersoul. As soon as one desires to worship some demigod, I make his faith steady so he can devote himself to that particular deity.`,
    explanation: `Whatever sincere devotee worships whatever form with faith — the Divine makes that faith steady. This teaching reveals the Divine's generosity: sincere worship in any direction is honored and supported. The object receives what the heart sincerely offers.`,
    takeaway: `The Divine honors and supports sincere worship in whatever form — all genuine faith is upheld.`,
    tags: ['devotion', 'wisdom']
  },
  '7.22': {
    sanskrit: `स तया श्रद्धया युक्तस्तस्याराधनमीहते।
लभते च ततः कामान्मयैव विहितान्हि तान्॥`,
    telugu: `ఆ శ్రద్ధతో యుక్తుడై అతడు ఆ దేవత ఆరాధన చేస్తాడు. నా ద్వారానే నియమించబడిన ఆ ఆ కోరికలు పొందుతాడు.`,
    english: `Endowed with such faith, he endeavors to worship a particular demigod and obtains his desires. But in actuality these benefits are bestowed by me alone.`,
    explanation: `The results of worship of any deity come ultimately from the Divine. All prayers are answered through the one Divine source, even when addressed to particular forms. This reveals the unity behind all religious practice.`,
    takeaway: `All prayers, regardless of form addressed, are ultimately answered through the one Divine source.`,
    tags: ['devotion', 'truth']
  },
  '7.23': {
    sanskrit: `अन्तवत्तु फलं तेषां तद्भवत्यल्पमेधसाम्।
देवान्देवयजो यान्ति मद्भक्ता यान्ति मामपि॥`,
    telugu: `కానీ ఆ అల్పమేధావుల ఫలం అంతవంతది. దేవతలను పూజించేవారు దేవతలను పొందుతారు. నా భక్తులు నన్నే పొందుతారు.`,
    english: `Men of small intelligence worship the demigods, and their fruits are limited and temporary. Those who worship the demigods go to the demigods. But my devotees ultimately come to me.`,
    explanation: `Limited wisdom seeks limited rewards from limited sources. Those who worship deities get temporary, limited results. But devotees of the Supreme reach the Supreme. The aspiration determines the destination — aim as high as possible.`,
    takeaway: `The aspiration determines the destination — those who aim for the highest reach the highest.`,
    tags: ['devotion', 'wisdom']
  },
  '7.24': {
    sanskrit: `अव्यक्तं व्यक्तिमापन्नं मन्यन्ते मामबुद्धयः।
परं भावमजानन्तो ममाव्ययमनुत्तमम्॥`,
    telugu: `బుద్ధి లేనివారు నా పరమ, అవ్యయ, అనుత్తమ స్వభావాన్ని తెలుసుకోలేక అవ్యక్తమైన నేను వ్యక్తత్వం పొందాను అని తలుస్తారు.`,
    english: `Unintelligent men, who do not know me perfectly, think that I, the Supreme Personality of Godhead, was impersonal before and have now assumed this personality. Due to their poor fund of knowledge, they do not know my higher nature, which is imperishable and supreme.`,
    explanation: `Those without wisdom think the Divine has descended from a higher impersonal state into a limited personal form. But Krishna's personal form is the Supreme itself, not a limitation of it. Personality, in the Divine, is not limitation but fullness.`,
    takeaway: `In the Divine, personality is not limitation but the fullness of the Supreme — wisdom reverses ordinary assumptions.`,
    tags: ['wisdom', 'truth']
  },
  '7.25': {
    sanskrit: `नाहं प्रकाशः सर्वस्य योगमायासमावृतः।
मूढोऽयं नाभिजानाति लोको मामजमव्ययम्॥`,
    telugu: `నేను అందరికీ ప్రకటితం కాను — యోగమాయ ద్వారా కప్పబడి ఉన్నాను. ఈ మూఢ లోకం నన్ను అజుడు, అవ్యయుడు అని తెలుసుకోలేదు.`,
    english: `I am never manifest to the foolish and unintelligent. For them I am covered by my internal potency, and therefore they do not know that I am unborn and infallible.`,
    explanation: `The Divine is not revealed to all because it is veiled by its own yoga-maya. This is not the Divine playing hide-and-seek — it is the natural condition of beings whose sight is clouded by desire and ignorance. The covering is in the eye, not in what is seen.`,
    takeaway: `The Divine's seeming concealment is not arbitrary — the covering is in the clouded eye, not in the object.`,
    tags: ['wisdom', 'truth']
  },
  '7.26': {
    sanskrit: `वेदाहं समतीतानि वर्तमानानि चार्जुन।
भविष्याणि च भूतानि मां तु वेद न कश्चन॥`,
    telugu: `అర్జునా, గడిచిన, వర్తమాన, భవిష్యత్ భూతాలను నేను తెలుసుకుంటాను. కానీ నన్ను ఎవ్వరూ తెలుసుకోరు.`,
    english: `O Arjuna, as the Supreme Personality of Godhead, I know everything that has happened in the past, all that is happening in the present, and all things that are yet to come. I also know all living entities; but me no one knows.`,
    explanation: `The Divine knows all — past, present, future — yet itself remains unknown to all. This asymmetry is profound: the knower of everything is itself unknowable through ordinary means. Only through surrender and devotion can the unknowable be known.`,
    takeaway: `The knower of everything remains unknowable through ordinary means — only devotion opens this door.`,
    tags: ['wisdom', 'devotion']
  },
  '7.27': {
    sanskrit: `इच्छाद्वेषसमुत्थेन द्वन्द्वमोहेन भारत।
सर्वभूतानि सम्मोहं सर्गे यान्ति परन्तप॥`,
    telugu: `భరతవంశీయుడా, సృష్టిలో అన్ని భూతాలు ఇచ్ఛ ద్వేషాల నుండి జన్మించిన ద్వంద్వ మోహంతో సమ్మోహనానికి వెళ్తాయి.`,
    english: `O scion of Bharata, O conqueror of the foe, all living entities are born into delusion, bewildered by dualities arisen from desire and hate.`,
    explanation: `All beings come into embodiment under the spell of the pairs of opposites — desire and hate. This is not a moral failing but the basic condition of embodied existence. Waking up from this spell is the spiritual path's fundamental work.`,
    takeaway: `The delusion of desire and hate is the basic condition of embodied life — waking from it is the entire spiritual path.`,
    tags: ['wisdom', 'truth']
  },
  '7.28': {
    sanskrit: `येषां त्वन्तगतं पापं जनानां पुण्यकर्मणाम्।
ते द्वन्द्वमोहनिर्मुक्ता भजन्ते मां दृढव्रताः॥`,
    telugu: `ఎవరి పాపాలు నశించాయో, పుణ్యకర్మలు చేసిన ఆ జనులు ద్వంద్వ మోహ నిర్మక్తులై దృఢ వ్రతంతో నన్ను భజిస్తారు.`,
    english: `Persons who have acted piously in previous lives and in this life and whose sinful actions are completely eradicated are freed from the dualities of delusion, and they engage themselves in my service with determination.`,
    explanation: `Those who have accumulated merit through righteous lives are freed from the spell of the opposites and turn to the Divine with firm devotion. This is how genuine spiritual life begins — through the gradual purification that makes us receptive to the Divine.`,
    takeaway: `Purification through righteous living is what frees us from the spell of the opposites and opens us to the Divine.`,
    tags: ['devotion', 'wisdom']
  },
  '7.29': {
    sanskrit: `जरामरणमोक्षाय मामाश्रित्य यतन्ति ये।
ते ब्रह्म तद्विदुः कृत्स्नमध्यात्मं कर्म चाखिलम्॥`,
    telugu: `వృద్ధాప్యం మరణం నుండి విముక్తి కోసం నన్ను ఆశ్రయించి యత్నించే వారు ఆ బ్రహ్మాన్ని, సమగ్ర అధ్యాత్మాన్ని, సమస్త కర్మాన్ని తెలుసుకుంటారు.`,
    english: `Intelligent persons who are endeavoring for liberation from old age and death take refuge in me in devotional service. They are actually Brahman because they entirely know everything about transcendental activities.`,
    explanation: `Those who seek freedom from aging and death through devotion to the Divine come to know Brahman, the inner Self, and all spiritual truth. The pursuit of liberation leads to complete knowledge — all the spiritual questions find their answers in the one devotion.`,
    takeaway: `Devotion to the Divine in pursuit of liberation leads to complete knowledge of all spiritual truth.`,
    tags: ['devotion', 'wisdom']
  },
  '7.30': {
    sanskrit: `साधिभूताधिदैवं मां साधियज्ञं च ये विदुः।
प्रयाणकालेऽपि च मां ते विदुर्युक्तचेतसः॥`,
    telugu: `అధిభూత అధిదైవ సహితంగా నన్ను, అధియజ్ఞ సహితంగా తెలుసుకున్నవారు, యుక్త చేతస్కులై, ప్రయాణ కాలంలో కూడా నన్ను తెలుసుకుంటారు.`,
    english: `Those in full consciousness of me, knowing me to be the governing principle of material and divine nature, and of all sacrificial methods, can understand and know me, the Supreme Personality of Godhead, even at the time of death.`,
    explanation: `Those who know the Divine in all its aspects — as the principle behind nature, divinity, and sacrifice — remain conscious of the Divine even at the moment of death. This complete knowing carries through the supreme transition.`,
    takeaway: `Complete knowledge of the Divine carries through even the final transition of death.`,
    tags: ['wisdom', 'devotion']
  },
  '8.1': {
    sanskrit: `अर्जुन उवाच
किं तद्ब्रह्म किमध्यात्मं किं कर्म पुरुषोत्तम।
अधिभूतं च किं प्रोक्तमधिदैवं किमुच्यते॥`,
    telugu: `పురుషోత్తమా, బ్రహ్మం ఏమిటి? అధ్యాత్మం ఏమిటి? కర్మ ఏమిటి? అధిభూతం ఏమని చెప్పబడింది? అధిదైవం ఏమని అంటారు?`,
    english: `O Supreme Person, what is Brahman? What is the self? What is action? What is called the adhibhuta? What is adhidaiva?`,
    explanation: `Arjuna asks seven technical questions. This shows mature discipleship: precise, specific inquiry. The teaching only goes as deep as the questions asked. Asking precise questions accelerates learning; vague questions get vague answers.`,
    takeaway: `Precise questions accelerate learning — ask specifically and the answer goes deep.`,
    tags: ['wisdom', 'knowledge']
  },
  '8.2': {
    sanskrit: `अधियज्ञः कथं कोऽत्र देहेऽस्मिन्मधुसूदन।
प्रयाणकाले च कथं ज्ञेयोऽसि नियतात्मभिः॥`,
    telugu: `మధుసూదనా, ఇక్కడ ఈ దేహంలో అధియజ్ఞుడెవడు, ఎలా? ప్రయాణ కాలంలో నిగ్రహించిన ఆత్మలకు నువ్వు ఎలా తెలుసుకోబడతావు?`,
    english: `And who is the Lord of sacrifice, and how does he live in the body, O Madhusudana? And how can those engaged in devotional service know you at the time of death?`,
    explanation: `Arjuna's final question about the moment of death is the most urgent: how can the Divine be known at the very end? This is the question that drives all spiritual practice — preparation for the greatest transition.`,
    takeaway: `The deepest question: how can the Divine be known at the moment of death? This drives all practice.`,
    tags: ['wisdom', 'devotion']
  },
  '8.3': {
    sanskrit: `श्रीभगवानुवाच
अक्षरं ब्रह्म परमं स्वभावोऽध्यात्ममुच्यते।
भूतभावोद्भवकरो विसर्गः कर्मसंज्ञितः॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
పరమ అక్షరం బ్రహ్మం. స్వభావం అధ్యాత్మం అని చెప్పబడింది. భూత భావోద్భవ కారకమైన విసర్గం కర్మ అని పేరు పొందింది.`,
    english: `The Supreme, indestructible Brahman is called the Self. Brahman's influence in living entities is called the adhyatma, or self. The creative force, action, and offering that causes the manifestation of living entities is called karma.`,
    explanation: `The definitions: Brahman is the imperishable Supreme; the adhyatma is its presence within each being as the Self; karma is the creative outpouring that brings beings into existence. These three encompass ultimate reality, its expression in individuals, and the mechanism of creation.`,
    takeaway: `Brahman is the ultimate, adhyatma is its individual expression, karma is its creative mechanism.`,
    tags: ['wisdom', 'knowledge']
  },
  '8.4': {
    sanskrit: `अधिभूतं क्षरो भावः पुरुषश्चाधिदैवतम्।
अधियज्ञोऽहमेवात्र देहे देहभृतां वर।`,
    telugu: `అక్షర భావం అధిభూతం. పురుషుడు అధిదైవతం. ఈ దేహంలో అధియజ్ఞుడు నేనే, దేహధారులలో శ్రేష్ఠా.`,
    english: `Physical nature, which is constantly changing, is called adhibhuta. The universal form of the Lord, which includes all the demigods, is called the adhidaiva. And I, the Supreme Lord, represented as the Supersoul in the heart of every embodied being, am called the adhiyajna.`,
    explanation: `The Divine as adhiyajna — the Lord of sacrifice — dwells in the heart of every embodied being. This is the most intimate location: the heart. Not in temples, not in scriptures, but inside each being. The sacred is as close as your own heart.`,
    takeaway: `The Divine dwells in the heart of every being — more intimate than any temple or scripture.`,
    tags: ['wisdom', 'soul']
  },
  '8.5': {
    sanskrit: `अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्।
यः प्रयाति स मद्भावं याति नास्त्यत्र संशयः॥`,
    telugu: `అంత కాలంలో నన్ను మాత్రమే స్మరిస్తూ దేహం విడిచేవాడు నా భావాన్ని పొందుతాడు. ఇందులో సందేహం లేదు.`,
    english: `And whoever, at the time of death, gives up the body, remembering me alone, reaches my state. Of this there is no doubt.`,
    explanation: `At the moment of death, remembering the Divine alone — this person reaches the divine state. The dying thought reflects the life's orientation. Death rehearsal is not morbid; it is the most important spiritual preparation. We die as we have lived.`,
    takeaway: `We die as we have lived — the dying thought reflects a lifetime of inner orientation.`,
    tags: ['devotion', 'soul']
  },
  '8.6': {
    sanskrit: `यं यं वापि स्मरन्भावं त्यजत्यन्ते कलेवरम्।
तं तमेवैति कौन्तेय सदा तद्भावभावितः॥`,
    telugu: `కౌంతేయా, అంత కాలంలో ఏ ఏ భావం స్మరిస్తూ దేహం విడుస్తాడో, ఆ ఆ భావాన్నే సదా ఆ భావ భావితుడై పొందుతాడు.`,
    english: `Whatever state of being one remembers when he quits his body, that state he will attain without fail.`,
    explanation: `The final state at death reflects a lifetime of dwelling. You become what you constantly think. The last thought is not random — it is the crystallization of habitual mental patterns. This is why daily mental training matters more than any last-minute preparation.`,
    takeaway: `The last thought crystallizes a lifetime of mental habits — daily training is the real preparation.`,
    tags: ['soul', 'wisdom']
  },
  '8.7': {
    sanskrit: `तस्मात्सर्वेषु कालेषु मामनुस्मर युध्य च।
मय्यर्पितमनोबुद्धिर्मामेवैष्यस्यसंशयम्॥`,
    telugu: `కాబట్టి అన్ని కాలాలలో నన్ను స్మరించు మరియు యుద్ధం చేయి. నాలో అర్పించిన మనో బుద్ధితో సందేహం లేకుండా నన్నే పొందుతావు.`,
    english: `Therefore, Arjuna, you should always think of me in the form of Krishna and at the same time carry out your prescribed duty of fighting. With your activities dedicated to me and your mind and intelligence fixed on me, you will attain me without doubt.`,
    explanation: `Remember me constantly AND perform your duty — both together. This teaching dissolves the false separation between spiritual life and ordinary life. You don't have to choose; integrate. Hold the inner remembrance while doing the outer work.`,
    takeaway: `Hold inner remembrance while doing outer work — spiritual life and daily life are not opposites.`,
    tags: ['devotion', 'action']
  },
  '8.8': {
    sanskrit: `अभ्यासयोगयुक्तेन चेतसा नान्यगामिना।
परमं पुरुषं दिव्यं याति पार्थानुचिन्तयन्॥`,
    telugu: `పార్థా, అభ్యాస యోగ యుక్తమైన, ఇతరత్ర వెళ్ళని చేతస్సుతో పరమ దివ్య పురుషుని అనుచింతించేవాడు ఆ పురుషుని పొందుతాడు.`,
    english: `He who meditates on me as the Supreme Personality of Godhead, his mind constantly engaged in remembering me, undeviated from the path, is sure to reach me, O son of Pritha.`,
    explanation: `The method for reaching the Divine: constant meditation with undistracted mind — practice of yoga focused entirely on the Divine. Not occasional thought between other preoccupations, but sustained orientation. The quality of sustained attention matters more than the quantity of sporadic effort.`,
    takeaway: `Sustained, undistracted attention on the Divine is what brings one to the Divine — quality over quantity.`,
    tags: ['devotion', 'yoga']
  },
  '8.9': {
    sanskrit: `कविं पुराणमनुशासितार
मणोरणीयांसमनुस्मरेद्यः।
सर्वस्य धातारमचिन्त्यरूपं
आदित्यवर्णं तमसः परस्तात्॥`,
    telugu: `ఎవడు కవిని, పురాతనుని, నిర్వాహకుని, అణువు కంటే సూక్ష్ముని, సమస్తాన్ని ధరించేవానిని, అచింత్య రూపుని, సూర్య వర్ణుని, చీకటికి పరంలో ఉన్నవానిని స్మరిస్తాడో.`,
    english: `One who, at the time of death, fixes his life air between the eyebrows and, by the strength of yoga, with an undeviating mind, engages himself in remembering the Supreme Lord in full devotion, will certainly attain to the Supreme Personality of Godhead.`,
    explanation: `The description of the Divine to meditate on: the Knower, the Ancient, the Ruler, subtler than the subtlest, the Sustainer of all, inconceivable in form, luminous as the sun, beyond darkness. These attributes describe what the meditating mind holds.`,
    takeaway: `Meditate on the Divine as the Ancient Knower, subtler than the subtlest, luminous beyond all darkness.`,
    tags: ['devotion', 'meditation']
  },
  '8.10': {
    sanskrit: `प्रयाणकाले मनसाचलेन
भक्त्या युक्तो योगबलेन चैव।
भ्रुवोर्मध्ये प्राणमावेश्य सम्यक्
स तं परं पुरुषमुपैति दिव्यम्॥`,
    telugu: `ప్రయాణ కాలంలో అచల మనస్సుతో, భక్తి యోగ బలంతో, భ్రూమధ్యంలో ప్రాణాన్ని సమ్యగ్ ఆవేశించి, ఆ దివ్య పరమ పురుషుని పొందుతాడు.`,
    english: `One who, at the time of death, fixes his life air between the eyebrows and in full devotion engages himself in remembering the Supreme Lord, will certainly attain to the Supreme Personality of Godhead.`,
    explanation: `At death: steady, undistracted mind; devotion; yoga-power; life force directed to the brow center. These are the elements of the supreme death practice. But they require a lifetime of preparation — you cannot suddenly perform them without having developed them through daily practice.`,
    takeaway: `The supreme death practice requires a lifetime of daily preparation — begin now, not at the end.`,
    tags: ['devotion', 'yoga']
  },
  '8.11': {
    sanskrit: `यदक्षरं वेदविदो वदन्ति
विशन्ति यद्यतयो वीतरागाः।
यदिच्छन्तो ब्रह्मचर्यं चरन्ति
तत्ते पदं संग्रहेण प्रवक्ष्ये॥`,
    telugu: `వేదవేత్తలు అక్షరమని చెప్పేది, వీతరాగులైన యతులు ప్రవేశించేది, బ్రహ్మచర్యాన్ని ఆచరించాలని కోరుకున్నది — ఆ పదాన్ని నీకు సంగ్రహంగా చెప్తాను.`,
    english: `Persons who are learned in the Vedas, who utter Om, who are great sages in the renounced order, enter into Brahman. Desiring such perfection, one practices celibacy. I shall now briefly explain to you this process by which one may attain salvation.`,
    explanation: `The goal that Vedic scholars describe as the imperishable, that the austere and passion-free enter, that seekers practice celibacy to reach — Krishna will now explain this directly. All traditional disciplines point to the same destination.`,
    takeaway: `All authentic spiritual disciplines — Vedic study, austerity, celibacy — point to the same destination.`,
    tags: ['wisdom', 'knowledge']
  },
  '8.12': {
    sanskrit: `सर्वद्वाराणि संयम्य मनो हृदि निरुध्य च।
मूर्ध्न्याधायात्मनः प्राणमास्थितो योगधारणाम्॥`,
    telugu: `అన్ని ఇంద్రియ ద్వారాలను నిగ్రహించి, మనస్సు హృదయంలో నిరుద్ధం చేసి, ప్రాణాన్ని శిరస్సులో ఉంచి యోగ ధారణలో స్థిరుడై.`,
    english: `The yoga situation is that of detachment from all sensual engagements. Closing all the doors of the senses and fixing the mind on the heart and the life air at the top of the head, one establishes himself in yoga.`,
    explanation: `The technique: close all sense-doors, fix the mind in the heart, draw the life force to the crown. This is the condensed instruction for the highest yoga practice — the yoga of conscious dying. All other practices prepare for this final act.`,
    takeaway: `Close the sense-doors, fix the mind in the heart, draw the life force upward — this is the supreme yoga.`,
    tags: ['yoga', 'meditation']
  },
  '8.13': {
    sanskrit: `ओमित्येकाक्षरं ब्रह्म व्याहरन्मामनुस्मरन्।
यः प्रयाति त्यजन्देहं स याति परमां गतिम्॥`,
    telugu: `ఓం ఇనే ఒకే అక్షరమైన బ్రహ్మాన్ని ఉచ్చరిస్తూ నన్ను స్మరిస్తూ దేహాన్ని విడిచే వాడు పరమ గతిని పొందుతాడు.`,
    english: `After being situated in this yoga practice and vibrating the sacred syllable Om, the supreme combination of letters, if one thinks of the Supreme Personality of Godhead and quits his body, he will certainly reach the spiritual planets.`,
    explanation: `Uttering Om while remembering the Divine at death — this simple act carries the prepared yogi to the supreme destination. Om is the sonic form of the Absolute; remembering the Divine is the final orientation. Together, they complete the spiritual journey.`,
    takeaway: `Om as the sonic form of the Absolute, plus divine remembrance, completes the spiritual journey at its end.`,
    tags: ['devotion', 'yoga']
  },
  '8.14': {
    sanskrit: `अनन्यचेताः सततं यो मां स्मरति नित्यशः।
तस्याहं सुलभः पार्थ नित्ययुक्तस्य योगिनः॥`,
    telugu: `పార్థా, అనన్య చేతస్కుడై నిత్యం నన్ను స్మరించే, నిత్యయుక్తుడైన ఆ యోగికి నేను సులభంగా లభ్యుడిని.`,
    english: `For one who always remembers me without deviation, I am easy to obtain, O son of Pritha, because of that person's constant engagement in devotional service.`,
    explanation: `For the one who remembers constantly with undivided mind — the Divine is easy to reach. This is perhaps the most encouraging verse in the chapter: the supreme goal is not difficult for the one who maintains steady, devoted remembrance. The difficulty is in sustaining the remembrance, not in reaching the goal.`,
    takeaway: `Sustained, undivided remembrance makes the Divine easy to reach — the difficulty is only in maintaining the remembrance.`,
    tags: ['devotion', 'wisdom']
  },
  '8.15': {
    sanskrit: `मामुपेत्य पुनर्जन्म दुःखालयमशाश्वतम्।
नाप्नुवन्ति महात्मानः संसिद्धिं परमां गताः॥`,
    telugu: `పరమ సంసిద్ధిని పొందిన మహాత్ములు నన్ను పొందిన తర్వాత దుఃఖపూర్ణమైన, అశాశ్వతమైన పునర్జన్మ పొందరు.`,
    english: `After attaining me, the great souls, who are yogis in devotion, never return to this temporary world, which is full of miseries, because they have attained the highest perfection.`,
    explanation: `Reaching the Divine means no return to 'this world full of miseries and impermanence.' The world is not condemned as evil but described accurately: it is characterized by dukkha and anitya (suffering and impermanence). Liberation is freedom from the cycle, not from existence.`,
    takeaway: `Liberation is freedom from the cycle of impermanence, not from existence itself.`,
    tags: ['soul', 'wisdom']
  },
  '8.16': {
    sanskrit: `आब्रह्मभुवनाल्लोकाः पुनरावर्तिनोऽर्जुन।
मामुपेत्य तु कौन्तेय पुनर्जन्म न विद्यते॥`,
    telugu: `అర్జునా, బ్రహ్మలోకం వరకు అన్ని లోకాలు పునరావర్తన ఉన్నాయి. కౌంతేయా, నన్ను పొందిన తర్వాత తిరిగి జన్మ లేదు.`,
    english: `From the highest planet in the material world down to the lowest, all are places of misery wherein repeated birth and death take place. But one who attains to my abode, O son of Kunti, never takes birth again.`,
    explanation: `Even the highest material heaven has an end — those who reach it will eventually return. Only reaching the Supreme ends the cycle permanently. This teaching redirects aspiration: aim for what is permanent, not for long-lasting temporary pleasure.`,
    takeaway: `Even the highest heavens are temporary — only the Supreme ends the cycle permanently.`,
    tags: ['soul', 'wisdom']
  },
  '8.17': {
    sanskrit: `सहस्रयुगपर्यन्तमहर्यद्ब्रह्मणो विदुः।
रात्रिं युगसहस्रान्तां तेऽहोरात्रविदो जनाः॥`,
    telugu: `బ్రహ్మ యొక్క పగలు వేయి యుగాల వరకు ఉంటుందని, రాత్రి వేయి యుగాల చివర వరకు ఉంటుందని తెలిసినవారు అహోరాత్రాలు తెలిసినవారు.`,
    english: `By human calculation, a thousand ages taken together form the duration of Brahma's one day. And such also is the duration of his night.`,
    explanation: `The cosmic time scales: one day of Brahma equals 1000 ages; one night equally long. This vast perspective puts human history in context — entire civilizations are brief moments in cosmic time. This perspective does not diminish human significance but contextualizes it wisely.`,
    takeaway: `Cosmic time scales put human concerns in perspective — neither diminishing nor inflating their significance.`,
    tags: ['wisdom', 'truth']
  },
  '8.18': {
    sanskrit: `अव्यक्ताद्व्यक्तयः सर्वाः प्रभवन्त्यहरागमे।
रात्र्यागमे प्रलीयन्ते तत्रैवाव्यक्तसंज्ञके॥`,
    telugu: `అహరాగమంలో అవ్యక్తం నుండి సమస్త వ్యక్తులు జన్మిస్తారు. రాత్ర్యాగమంలో అవ్యక్తమని పిలువబడే అక్కడే వాటిలో లీనమవుతాయి.`,
    english: `At the beginning of Brahma's day, all living entities become manifest from the unmanifest state, and thereafter, when the night falls, they are merged into what is called the unmanifest again.`,
    explanation: `All manifested beings stream forth from the unmanifest at the dawn of a cosmic day and return at cosmic night. This cosmic pulsation — manifestation and dissolution — is the rhythm of existence itself. We are part of a vast, breathing universe.`,
    takeaway: `All existence pulses between manifestation and dissolution — we are part of a vast, breathing universe.`,
    tags: ['soul', 'wisdom']
  },
  '8.19': {
    sanskrit: `भूतग्रामः स एवायं भूत्वा भूत्वा प्रलीयते।
रात्र्यागमेऽवशः पार्थ प्रभवत्यहरागमे॥`,
    telugu: `పార్థా, ఆ భూత సమూహమే అవశంగా జన్మించి జన్మించి రాత్ర్యాగమంలో లీనమవుతుంది. అహరాగమంలో తిరిగి జన్మిస్తుంది.`,
    english: `Again and again, when Brahma's day arrives, all living entities come into being, and with the arrival of Brahma's night they are helplessly annihilated.`,
    explanation: `The cycle continues 'helplessly' — beings emerge and dissolve without choice. This helplessness in the cosmic cycle is itself the teaching: liberation from the cycle is only achieved by transcending it, by realizing what is beyond even this vast cosmic pulsation.`,
    takeaway: `Liberation means transcending the cycle of cosmic emergence and dissolution — realizing what is beyond it.`,
    tags: ['soul', 'wisdom']
  },
  '8.20': {
    sanskrit: `परस्तस्मात्तु भावोऽन्योऽव्यक्तोऽव्यक्तात्सनातनः।
यः स सर्वेषु भूतेषु नश्यत्सु न विनश्यति॥`,
    telugu: `కానీ ఆ అవ్యక్తానికి పరమైన మరొక సనాతన అవ్యక్త భావం ఉంది. అన్ని భూతాలు నశించినా అది నశించదు.`,
    english: `Yet there is another unmanifest nature, which is eternal and is transcendental to this manifested and unmanifested matter. It is supreme and is never annihilated. When all in this world is annihilated, that part remains as it is.`,
    explanation: `Beyond even the vast cosmic cycle of manifestation and dissolution, there is an eternal, imperishable Reality. When the universe itself dissolves, this remains. This is what is worth realizing — the absolutely imperishable ground of all existence.`,
    takeaway: `Beyond even the cosmic cycle of manifestation and dissolution is the absolutely imperishable — realize this.`,
    tags: ['soul', 'wisdom']
  },
  '8.21': {
    sanskrit: `अव्यक्तोऽक्षर इत्युक्तस्तमाहुः परमां गतिम्।
यं प्राप्य न निवर्तन्ते तद्धाम परमं मम॥`,
    telugu: `అవ్యక్తమైనది, అక్షరమైనది అని చెప్పబడిన అది పరమ గతి అని పిలుస్తారు. దాన్ని పొందిన తర్వాత తిరిగి రారు. అదే నా పరమ ధామం.`,
    english: `That supreme abode of mine is called unmanifested and infallible, and it is the supreme destination. Those who reach it never return. That is my supreme abode.`,
    explanation: `The supreme abode: unmanifested, imperishable, from which there is no return. This is the final destination of the spiritual journey — not a heaven to be enjoyed and left, but an eternal state of being that is the ground of existence itself.`,
    takeaway: `The supreme abode is not a temporary heaven but the eternal ground of existence — reaching it, none return.`,
    tags: ['soul', 'devotion']
  },
  '8.22': {
    sanskrit: `पुरुषः स परः पार्थ भक्त्या लभ्यस्त्वनन्यया।
यस्यान्तःस्थानि भूतानि येन सर्वमिदं ततम्॥`,
    telugu: `పార్థా, ఆ పరమ పురుషుడు అనన్య భక్తిచే పొందుబడతాడు. ఎందులో అన్ని భూతాలు ఉన్నాయో, ఏదానిచే ఇదంతా వ్యాపించి ఉందో.`,
    english: `The Supreme Personality of Godhead, who is greater than all, is attainable by unalloyed devotion. Although he is present in his abode, he is all-pervading, and everything is situated within him.`,
    explanation: `The Supreme is attained by unalloyed, single-pointed devotion. Not by intellectual achievement, not by ritual proficiency, but by love that has no other object. This is the Gita's consistent answer: the highest is reached by the deepest love.`,
    takeaway: `The highest Reality is attained not by intellect or ritual but by single-pointed love — this is the Gita's answer.`,
    tags: ['devotion', 'soul']
  },
  '8.23': {
    sanskrit: `यत्र काले त्वनावृत्तिमावृत्तिं चैव योगिनः।
प्रयाता यान्ति तं कालं वक्ष्यामि भरतर्षभ॥`,
    telugu: `భరత శ్రేష్ఠా, ఏ కాలంలో యోగులు మరణించి తిరిగి రారో, మళ్ళీ వస్తారో ఆ కాలాన్ని చెప్తాను.`,
    english: `O best of the Bharatas, I shall now explain to you the different times at which, passing away from this world, the yogi does or does not come back.`,
    explanation: `Two paths from death: the path of no-return (liberation) and the path of return (continued cycle). This teaching is meant to motivate constant practice — don't leave the choice of path to chance; prepare deliberately through sustained practice.`,
    takeaway: `Don't leave the choice of path at death to chance — prepare deliberately through sustained practice.`,
    tags: ['wisdom', 'yoga']
  },
  '8.24': {
    sanskrit: `अग्निर्ज्योतिरहः शुक्लः षण्मासा उत्तरायणम्।
तत्र प्रयाता गच्छन्ति ब्रह्म ब्रह्मविदो जनाः॥`,
    telugu: `అగ్ని, జ్యోతి, పగలు, శుక్ల పక్షం, ఉత్తరాయణ ఆరు మాసాలు — ఆ కాలంలో మరణించి వెళ్ళే బ్రహ్మవేత్తలు బ్రహ్మాన్ని పొందుతారు.`,
    english: `Those who know the Supreme Brahman attain that Supreme by passing away from the world during the influence of the fiery god, in the light, at an auspicious moment of the day, during the fortnight of the waxing moon, or during the six months when the sun travels in the north.`,
    explanation: `The 'bright path' of fire, light, day, waxing moon, northern solstice. These can be understood both literally (cosmological timing) and symbolically: departing in states of clarity, consciousness, and upward orientation is more auspicious than in states of darkness and downward pull.`,
    takeaway: `Depart in a state of clarity and upward orientation — prepare this through daily practice, not last-minute effort.`,
    tags: ['wisdom', 'soul']
  },
  '8.25': {
    sanskrit: `धूमो रात्रिस्तथा कृष्णः षण्मासा दक्षिणायनम्।
तत्र चान्द्रमसं ज्योतिर्योगी प्राप्य निवर्तते॥`,
    telugu: `ధూమం, రాత్రి, కృష్ణ పక్షం, దక్షిణాయన ఆరు మాసాలు — ఆ కాలంలో వెళ్ళే యోగి చంద్ర జ్యోతి పొంది తిరిగి వస్తాడు.`,
    english: `The mystic who passes away from this world during the smoke, the night, the fortnight of the waning moon, or the six months when the sun passes to the south reaches the moon planet but again comes back.`,
    explanation: `The 'dark path' of smoke, night, waning moon, southern solstice leads to temporary worlds and eventual return. Symbolically: departing in states of confusion, darkness, and downward pull leads to temporary respite but not liberation.`,
    takeaway: `Prepare for the final moment through daily cultivation of clarity and upward orientation.`,
    tags: ['wisdom', 'soul']
  },
  '8.26': {
    sanskrit: `शुक्लकृष्णे गती ह्येते जगतः शाश्वते मते।
एकया यात्यनावृत्तिमन्ययावर्तते पुनः॥`,
    telugu: `ఈ రెండు శుక్ల కృష్ణ గతులు జగత్తుకు శాశ్వతాలు. ఒక దానిచే తిరిగి రాకుండా వెళ్తాడు. మరొక దానిచే తిరిగి వస్తాడు.`,
    english: `According to Vedic opinion, there are two ways of passing from this world — one in light and one in darkness. When one passes in light, one does not come back; but when one passes in darkness, one returns.`,
    explanation: `Light and darkness — the two eternal paths from this world. One leads to permanent liberation; the other to eventual return. The choice of path is made throughout life, not at the final moment. Daily living prepares the direction of departure.`,
    takeaway: `The choice of path at death is made throughout life — daily living prepares the direction of departure.`,
    tags: ['wisdom', 'soul']
  },
  '8.27': {
    sanskrit: `नैते सृती पार्थ जानन्योगी मुह्यति कश्चन।
तस्मात्सर्वेषु कालेषु योगयुक्तो भवार्जुन॥`,
    telugu: `పార్థా, ఈ రెండు సృతులు తెలిసిన యోగి ఏ విధంగా మోహపడడు. కాబట్టి అర్జునా, అన్ని కాలాలలో యోగ యుక్తుడవు అవు.`,
    english: `The devotees who know these two paths, O Arjuna, are never bewildered. Therefore be always fixed in devotion.`,
    explanation: `Knowing these two paths eliminates confusion about death and afterlife. And the practical conclusion: be always established in yoga. Not just occasionally; not just in retirement; not just when life gets difficult. Always.`,
    takeaway: `Be always established in yoga — not occasionally, not in retirement, but always.`,
    tags: ['yoga', 'wisdom']
  },
  '8.28': {
    sanskrit: `वेदेषु यज्ञेषु तपःसु चैव
दानेषु यत्पुण्यफलं प्रदिष्टम्।
अत्येति तत्सर्वमिदं विदित्वा
योगी परं स्थानमुपैति चाद्यम्॥`,
    telugu: `వేదాలలో, యజ్ఞాలలో, తపోమైన, దానాలలో ఏ పుణ్య ఫలం చెప్పబడిందో, ఇదంతా తెలుసుకున్న యోగి వాటన్నింటినీ అతిక్రమించి పరమ ఆది స్థానాన్ని పొందుతాడు.`,
    english: `A person who accepts the path of devotional service is not bereft of the results derived from studying the Vedas, performing austerities, giving charity, or pursuing philosophical and fruitive activities. Simply by performing devotional service, he attains all this, and at the end he reaches the supreme eternal abode.`,
    explanation: `The devotee surpasses all the merits of Vedic study, sacrifice, austerity, and charity simply through devoted practice. Not because these are worthless, but because devotion contains and transcends all of them — it is the path that includes all others.`,
    takeaway: `Devoted practice contains and transcends all other forms of merit — it is the path that includes all paths.`,
    tags: ['devotion', 'wisdom']
  },
  '9.1': {
    sanskrit: `श्रीभगवानुवाच
इदं तु ते गुह्यतमं प्रवक्ष्याम्यनसूयवे।
ज्ञानं विज्ञानसहितं यज्ज्ञात्वा मोक्ष्यसेऽशुभात्॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
నీకు ఈ అత్యంత రహస్యమైనది — అసూయ లేని నీకు — విజ్ఞానంతో సహా జ్ఞానాన్ని చెప్తాను. దాన్ని తెలుసుకుని అశుభం నుండి విముక్తి పొందుతావు.`,
    english: `The Blessed Lord said: My dear Arjuna, because you are never envious of me, I shall impart to you this most confidential knowledge and realization, knowing which you shall be relieved of the miseries of material existence.`,
    explanation: `Krishna shares the deepest teaching with Arjuna specifically because he is 'not envious' — free from the defensive cynicism that blocks wisdom. This is the most important qualification: not intelligence, not purity, but the openness that comes from non-envy. Open receptivity is the prerequisite for the deepest teachings.`,
    takeaway: `Open receptivity — freedom from envy and defensive cynicism — is the prerequisite for the deepest teaching.`,
    tags: ['wisdom', 'devotion']
  },
  '9.2': {
    sanskrit: `राजविद्या राजगुह्यं पवित्रमिदमुत्तमम्।
प्रत्यक्षावगमं धर्म्यं सुसुखं कर्तुमव्ययम्॥`,
    telugu: `ఇది రాజ విద్య, రాజ గుహ్యం, ఉత్తమ పవిత్రమైనది, ప్రత్యక్ష అవగమం, ధర్మ్యం, సుఖంగా చేయదగినది, అవ్యయమైనది.`,
    english: `This knowledge is the king of education, the most secret of all secrets. It is the purest knowledge, and because it gives direct perception of the self by realization, it is the perfection of religion. It is everlasting, and it is joyfully performed.`,
    explanation: `Five qualities of this supreme knowledge: it is the king of all knowledge, the most secret, the highest purifier, directly experienced (not just intellectual), imperishable, and joyfully practiced. These five together describe why it surpasses all other learning.`,
    takeaway: `The supreme knowledge is directly experienced, purifying, imperishable, and joyful — not merely intellectual.`,
    tags: ['wisdom', 'knowledge']
  },
  '9.3': {
    sanskrit: `अश्रद्दधानाः पुरुषा धर्मस्यास्य परन्तप।
अप्राप्य मां निवर्तन्ते मृत्युसंसारवर्त्मनि॥`,
    telugu: `పరంతపా, ఈ ధర్మంపై శ్రద్ధ లేని పురుషులు నన్ను పొందక మృత్యు సంసార మార్గంలో తిరిగి వెళ్తారు.`,
    english: `Those who are not faithful in this devotional service cannot attain me, O conqueror of enemies. Therefore they return to the path of birth and death in this material world.`,
    explanation: `Without faith in this teaching, one cannot reach the Divine and continues cycling in birth and death. Faith is not blind belief but trust born of practice and experience — the confidence that the path is reliable. This kind of faith can be developed through sincere experimentation.`,
    takeaway: `Develop faith through sincere experimentation — it is trust born of practice, not blind belief.`,
    tags: ['faith', 'wisdom']
  },
  '9.4': {
    sanskrit: `मया ततमिदं सर्वं जगदव्यक्तमूर्तिना।
मत्स्थानि सर्वभूतानि न चाहं तेष्ववस्थितः॥`,
    telugu: `అవ్యక్త రూపంతో నా ద్వారా ఈ జగత్తంతా వ్యాపించి ఉంది. అన్ని భూతాలు నాలో ఉన్నాయి. నేను వాటిలో లేను.`,
    english: `By me, in my unmanifested form, this entire universe is pervaded. All beings are in me, but I am not in them.`,
    explanation: `All beings are within the Divine — but the Divine is not simply identical with all beings. This is the asymmetry of divine immanence and transcendence: the Divine contains all without being limited to all. Like space containing everything without being identical to any one thing.`,
    takeaway: `The Divine contains all without being limited to all — immanence and transcendence together.`,
    tags: ['wisdom', 'soul']
  },
  '9.5': {
    sanskrit: `न च मत्स्थानि भूतानि पश्य मे योगमैश्वरम्।
भूतभृन्न च भूतस्थो ममात्मा भूतभावनः॥`,
    telugu: `అన్ని భూతాలు నాలో లేవు. నా యోగ ఐశ్వర్యాన్ని చూడు. భూతాలను భరించేది నా ఆత్మ. భూతాలలో లేకుండా భూతాలను పోషిస్తుంది.`,
    english: `And yet everything that is created does not rest in me. Behold my mystic opulence! Although I am the maintainer of all living entities and although I am everywhere, I am not a part of this cosmic manifestation, for I myself am the very source of creation.`,
    explanation: `Here is the great paradox: beings are within the Divine, yet the Divine is not simply among the beings. The Divine sustains all while remaining utterly itself. Like the ocean sustaining waves without becoming any one wave — presence without reduction.`,
    takeaway: `The Divine sustains all while remaining utterly itself — present in all without being reduced to any.`,
    tags: ['wisdom', 'soul']
  },
  '9.6': {
    sanskrit: `यथाकाशस्थितो नित्यं वायुः सर्वत्रगो महान्।
तथा सर्वाणि भूतानि मत्स्थानीत्युपधारय॥`,
    telugu: `సర్వత్రగమించే మహావాయువు నిత్యం ఆకాశంలో ఉన్నట్లు, అదే విధంగా అన్ని భూతాలు నాలో ఉన్నాయని గ్రహించు.`,
    english: `Understand that as the mighty wind, blowing everywhere, always rests in ethereal space, all created beings rest in me.`,
    explanation: `The analogy: the vast wind (all of creation's movement and activity) rests within the sky (the Divine). The sky neither pushes out the wind nor is confined by it. All the activity of creation rests within the unchanged, spacious Divine — the same relationship.`,
    takeaway: `All the activity of creation rests within the unchanged, spacious Divine — like wind resting in the sky.`,
    tags: ['wisdom', 'soul']
  },
  '9.7': {
    sanskrit: `सर्वभूतानि कौन्तेय प्रकृतिं यान्ति मामिकाम्।
कल्पक्षये पुनस्तानि कल्पादौ विसृजाम्यहम्॥`,
    telugu: `కౌంతేయా, కల్ప క్షయంలో అన్ని భూతాలు నా ప్రకృతికి వెళ్తాయి. కల్పాదిలో వాటిని తిరిగి విడుస్తాను.`,
    english: `O son of Kunti, at the end of the millennium all material manifestations enter into my nature, and at the beginning of another millennium, by my potency, I create them again.`,
    explanation: `At the end of a cosmic cycle all returns to the Divine; at the beginning of the next, the Divine sends forth creation again. This cosmic breathing — emanation and return — is the background rhythm of all existence. We are participants in this vast cosmic dance.`,
    takeaway: `We participate in a vast cosmic dance of emanation and return — our individual lives are part of this.`,
    tags: ['wisdom', 'soul']
  },
  '9.8': {
    sanskrit: `प्रकृतिं स्वामवष्टभ्य विसृजामि पुनः पुनः।
भूतग्राममिमं कृत्स्नमवशं प्रकृतेर्वशात्॥`,
    telugu: `నా ప్రకృతిని అవష్టభించి, ప్రకృతి వశం వల్ల అవశులైన ఈ సమస్త భూత సమూహాన్ని పదే పదే విడుస్తున్నాను.`,
    english: `The whole cosmic order is under me. Under my will it is automatically manifested again and again, and under my will it is annihilated at the end.`,
    explanation: `Creation streams forth 'helplessly' under the Divine's influence — nature's own laws operate, guided by divine will. This is not micromanagement but the cosmic order expressing itself through natural law. The Divine is the law-giver, not the law-breaker.`,
    takeaway: `The Divine operates through natural law — creator of the order, not the breaker of it.`,
    tags: ['wisdom', 'truth']
  },
  '9.9': {
    sanskrit: `न च मां तानि कर्माणि निबध्नन्ति धनञ्जय।
उदासीनवदासीनमसक्तं तेषु कर्मसु॥`,
    telugu: `ధనంజయా, ఆ కర్మలు నన్ను బంధించవు. ఆ కర్మలలో ఆసక్తిరహితుడై ఉదాసీనుని వలె ఉన్నాను.`,
    english: `O Dhananjaya, all this work cannot bind me. I am ever detached from all these material activities, seated as though neutral.`,
    explanation: `The Divine acts without being bound by action — seated in detachment, though creating and sustaining all. This is the model for the karma yogi: fully engaged yet utterly non-attached. The universe-creating Divine enacts the fullest possible action with perfect non-attachment.`,
    takeaway: `Full engagement with perfect non-attachment — the Divine creating the universe is the model for karma yoga.`,
    tags: ['action', 'detachment']
  },
  '9.10': {
    sanskrit: `मयाध्यक्षेण प्रकृतिः सूयते सचराचरम्।
हेतुनानेन कौन्तेय जगद्विपरिवर्तते॥`,
    telugu: `కౌంతేయా, నా అధ్యక్షతలో ప్రకృతి చరాచరాన్ని సృష్టిస్తుంది. ఈ కారణం వల్ల జగత్తు పరిభ్రమిస్తుంది.`,
    english: `This material nature, which is one of my energies, is working under my direction, O son of Kunti, producing all moving and nonmoving beings. Under its rule this manifestation is created and annihilated again and again.`,
    explanation: `Nature operates under divine direction — the laws of nature are not independent of the Divine but expressions of divine intelligence. The rotation of the world, the arising and passing of civilizations, all move according to a deeper order.`,
    takeaway: `The laws of nature are not independent of the Divine but expressions of divine intelligence.`,
    tags: ['wisdom', 'truth']
  },
  '9.11': {
    sanskrit: `अवजानन्ति मां मूढा मानुषीं तनुमाश्रितम्।
परं भावमजानन्तो मम भूतमहेश्वरम्॥`,
    telugu: `మానుషీ తనువు ఆశ్రయించిన నన్ను, నా భూత మహేశ్వరత్వమైన పర భావాన్ని తెలుసుకోని మూఢులు అవమానిస్తారు.`,
    english: `Fools deride me when I descend in the human form. They do not know my transcendental nature as the Supreme Lord of all that be.`,
    explanation: `Those who see only the human form miss the divine presence within it. This is the fundamental spiritual error: judging by appearance alone. The physical form is the vehicle; what inhabits it is what matters. This applies to Krishna's form and, more broadly, to all beings.`,
    takeaway: `Seeing only the form misses the divine presence within it — this error applies to all beings.`,
    tags: ['wisdom', 'truth']
  },
  '9.12': {
    sanskrit: `मोघाशा मोघकर्माणो मोघज्ञाना विचेतसः।
राक्षसीमासुरीं चैव प्रकृतिं मोहिनीं श्रिताः॥`,
    telugu: `విచేతసులు, మోహకరమైన రాక్షసి ఆసురీ ప్రకృతిని ఆశ్రయించి వ్యర్థ ఆశలతో, వ్యర్థ కర్మలతో, వ్యర్థ జ్ఞానంతో ఉన్నారు.`,
    english: `Those who are thus bewildered are attracted by demonic and atheistic views. In that deluded condition, their hopes for liberation, their fruitive activities, and their culture of knowledge are all defeated.`,
    explanation: `Those who see only form without recognizing the divine essence within become deluded — all their hopes, actions, and knowledge become fruitless. The fundamental misperception poisons everything built upon it. Right vision is the foundation of right living.`,
    takeaway: `Right perception of the divine essence in form is the foundation of right living — without it all else goes wrong.`,
    tags: ['wisdom', 'truth']
  },
  '9.13': {
    sanskrit: `महात्मानस्तु मां पार्थ दैवीं प्रकृतिमाश्रिताः।
भजन्त्यनन्यमनसो ज्ञात्वा भूतादिमव्ययम्॥`,
    telugu: `పార్థా, దైవీ ప్రకృతిని ఆశ్రయించిన మహాత్ములు అవ్యయమైన భూతాది అయిన నన్ను తెలుసుకుని అనన్య మనస్సుతో భజిస్తారు.`,
    english: `O son of Pritha, those who are not deluded, the great souls, are under the protection of the divine nature. They are fully engaged in devotional service because they know me as the Supreme Personality of Godhead, original and inexhaustible.`,
    explanation: `The great souls know the Divine as the original, inexhaustible source and worship with undivided mind. This knowing is not intellectual — it is the recognition that transforms the entire orientation of life. Everything becomes different when the Divine is truly known.`,
    takeaway: `Genuine recognition of the Divine as the inexhaustible source transforms the entire orientation of life.`,
    tags: ['devotion', 'wisdom']
  },
  '9.14': {
    sanskrit: `सततं कीर्तयन्तो मां यतन्तश्च दृढव्रताः।
नमस्यन्तश्च मां भक्त्या नित्ययुक्ता उपासते॥`,
    telugu: `నిత్యం నా కీర్తన చేస్తూ, దృఢ వ్రతంతో యత్నిస్తూ, భక్తితో నమస్కరిస్తూ, నిత్య యుక్తులై నన్ను ఉపాసిస్తారు.`,
    english: `Always chanting my glories, endeavoring with great determination, bowing down before me, these great souls perpetually worship me with devotion.`,
    explanation: `Four practices of the devoted great souls: constant praise of the Divine, determined striving, prostration (surrender), and perpetual devoted worship. These are not just occasional activities but the orientation of the whole life, all the time.`,
    takeaway: `The great soul's whole life is oriented toward the Divine — constant praise, striving, surrender, worship.`,
    tags: ['devotion', 'yoga']
  },
  '9.15': {
    sanskrit: `ज्ञानयज्ञेन चाप्यन्ये यजन्तो मामुपासते।
एकत्वेन पृथक्त्वेन बहुधा विश्वतोमुखम्॥`,
    telugu: `ఇతరులు జ్ఞాన యజ్ఞంతో నన్ను పూజిస్తూ ఉపాసిస్తారు — ఏకత్వంలో, పృథక్త్వంలో, అనేక విధాలుగా, సర్వముఖంగా.`,
    english: `Others, who engage in sacrifice by the cultivation of knowledge, worship the Supreme Lord as the one without a second, as diverse in many, and in the universal form.`,
    explanation: `Different ways of worshipping: through oneness (seeing all as one Divine), through diversity (seeing the Divine in each particular form), and through the universal form (seeing the Divine as the totality). All three are valid — they are complementary visions of the same Reality.`,
    takeaway: `Oneness, diversity, and the universal form are complementary visions of the same Divine Reality.`,
    tags: ['devotion', 'wisdom']
  },
  '9.16': {
    sanskrit: `अहं क्रतुरहं यज्ञः स्वधाहमहमौषधम्।
मन्त्रोऽहमहमेवाज्यमहमग्निरहं हुतम्॥`,
    telugu: `నేను క్రతువు, నేను యజ్ఞం, నేను స్వధ, నేను ఔషధం. నేను మంత్రం, నేను ఆజ్యం, నేను అగ్ని, నేను హోమం.`,
    english: `But it is I who am the ritual, I who am the sacrifice, the offering to the ancestors, the healing herb, and the transcendental chant. I am the butter and the fire and the offering.`,
    explanation: `Every element of the Vedic ritual — the ceremony, the sacrifice, the offering, the mantra, the fire, the oblation — is the Divine itself. This complete sacralization of ritual dissolves the distinction between means and end. The worship and the worshipped are not separate.`,
    takeaway: `Every element of worship is itself the Divine — the distinction between means and end dissolves.`,
    tags: ['devotion', 'wisdom']
  },
  '9.17': {
    sanskrit: `पिताहमस्य जगतो माता धाता पितामहः।
वेद्यं पवित्रमोंकार ऋक्साम यजुरेव च॥`,
    telugu: `నేను ఈ జగత్తుకు తండ్రి, తల్లి, ధాత, పితామహుడు. తెలుసుకోవలసినది, పవిత్రమైనది, ఓంకారం, ఋక్ సామ యజుస్సులు కూడా నేనే.`,
    english: `I am the father of this universe, the mother, the support and the grandsire. I am the object of knowledge, the purifier and the syllable om. I am also the Rig, the Sama and the Yajur Vedas.`,
    explanation: `The Divine is father, mother, grandfather, and sustainer — every relationship role and every generative principle is a form of the Divine. This teaching personalizes the cosmic: the universe is family. We are in a relationship of care with the Source of all.`,
    takeaway: `The universe is family — the Divine is father, mother, grandfather, and sustainer to all beings.`,
    tags: ['devotion', 'wisdom']
  },
  '9.18': {
    sanskrit: `गतिर्भर्ता प्रभुः साक्षी निवासः शरणं सुहृत्।
प्रभवः प्रलयः स्थानं निधानं बीजमव्ययम्॥`,
    telugu: `నేను గతి, భర్త, ప్రభువు, సాక్షి, నివాసం, శరణం, సుహృదు. ప్రభవం, ప్రళయం, స్థానం, నిధానం, అవ్యయమైన బీజం.`,
    english: `I am the goal, the sustainer, the master, the witness, the abode, the refuge, and the most dear friend. I am the creation and the annihilation, the basis of everything, the resting place and the eternal seed.`,
    explanation: `Every role and function: goal, sustainer, master, witness, home, refuge, friend, creator, destroyer, foundation, resting place, seed. No human need is unaddressed by the Divine. Whatever you are seeking, the Divine fulfills that function perfectly.`,
    takeaway: `Whatever you seek — goal, sustainer, refuge, friend — the Divine fulfills that function perfectly.`,
    tags: ['devotion', 'wisdom']
  },
  '9.19': {
    sanskrit: `तपाम्यहमहं वर्षं निगृह्णाम्युत्सृजामि च।
अमृतं चैव मृत्युश्च सदसच्चाहमर्जुन॥`,
    telugu: `నేను తపింపజేస్తాను, వర్షం నిలిపేది నేను, కురిపించేది నేను. అమృతం, మృత్యువు, సత్ అసత్ — నేనే, అర్జునా.`,
    english: `O Arjuna, I give heat, and I withhold and send forth the rain. I am immortality, and I am also death personified. Both spirit and matter are in me.`,
    explanation: `The Divine is behind all natural forces: heat, rain, drought. The Divine is both immortality and death. Both the spiritual and material realms are within the Divine. Nothing stands outside — this total inclusion is the vision of Chapter 9.`,
    takeaway: `Nothing stands outside the Divine — both immortality and death, both spirit and matter are within it.`,
    tags: ['wisdom', 'truth']
  },
  '9.20': {
    sanskrit: `त्रैविद्या मां सोमपाः पूतपापा
यज्ञैरिष्ट्वा स्वर्गतिं प्रार्थयन्ते।
ते पुण्यमासाद्य सुरेन्द्रलोकं
मोदन्ति दिव्यान्दिवि देवभोगान्॥`,
    telugu: `మూడు వేదాల జ్ఞానులు, సోమపానం చేసి, పాపాలు నశించి, యజ్ఞాలతో నన్ను ఆరాధించి స్వర్గం కోరుతారు. వారు ఇంద్ర లోకం పొంది దివ్య దేవ భోగాలు అనుభవిస్తారు.`,
    english: `Those who study the Vedas and drink the soma juice, seeking the heavenly planets, worship me indirectly. Purified of sinful reactions, they take birth on the pious, heavenly planet of Indra, where they enjoy godly delights.`,
    explanation: `Those who perform Vedic sacrifices seeking heavenly rewards reach heaven and enjoy it. But this approach has a limit — it is indirect worship leading to temporary results. The Gita honors this path while pointing beyond it to what is permanent.`,
    takeaway: `Vedic sacrifice for heavenly rewards has a limit — the results are real but temporary.`,
    tags: ['devotion', 'wisdom']
  },
  '9.21': {
    sanskrit: `ते तं भुक्त्वा स्वर्गलोकं विशालं
क्षीणे पुण्ये मर्त्यलोकं विशन्ति।
एवं त्रयीधर्ममनुप्रपन्ना
गतागतं कामकामा लभन्ते॥`,
    telugu: `ఆ విశాల స్వర్గ లోకం అనుభవించి, పుణ్యం క్షీణమైన తర్వాత మర్త్య లోకానికి వస్తారు. ఆ విధంగా కామాన్ని కోరేవారు పోవడం రావడం పొందుతారు.`,
    english: `When they have thus enjoyed vast heavenly sense pleasure and the results of their pious activities are exhausted, they return to this mortal planet again. Thus those who seek sense enjoyment by adhering to the principles of the three Vedas achieve only repeated birth and death.`,
    explanation: `Heaven's pleasures are exhausted just as earthly pleasures are. When the merit runs out, one returns. This endless cycle — going and coming — is what karma yoga and devotion transcend. The seekers of permanent joy must look beyond even the highest temporary pleasure.`,
    takeaway: `Seek what is permanent, not what is long-lasting but still temporary — heavenly pleasure also ends.`,
    tags: ['wisdom', 'soul']
  },
  '9.22': {
    sanskrit: `अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।
तेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥`,
    telugu: `అనన్యంగా నన్ను చింతించి, ఉపాసించే, నిత్యాభియుక్తులైన వారి యోగ క్షేమాలు నేను వహిస్తాను.`,
    english: `But those who always worship me with exclusive devotion, meditating on my transcendental form — to them I carry what they lack, and I preserve what they have.`,
    explanation: `The most beloved verse of Chapter 9: the devotee who worships with single-pointed, exclusive devotion receives the Divine's personal care — what they need is brought, what they have is protected. This is the Divine's promise of complete provision to the complete devotee.`,
    takeaway: `The Divine personally cares for those who worship with exclusive, single-pointed devotion.`,
    tags: ['devotion', 'faith']
  },
  '9.23': {
    sanskrit: `येऽप्यन्यदेवताभक्ता यजन्ते श्रद्धयान्विताः।
तेऽपि मामेव कौन्तेय यजन्त्यविधिपूर्वकम्॥`,
    telugu: `కౌంతేయా, ఇతర దేవతల భక్తులు శ్రద్ధతో పూజించినా, వారూ నన్నే పూజిస్తున్నారు — విధి పూర్వకంగా కాకపోయినా.`,
    english: `Those who are devotees of other gods and who worship them with faith actually worship only me, O son of Kunti, but they do so in a wrong way.`,
    explanation: `Those who worship other deities with sincere faith are actually worshipping the one Divine through those forms. This is the profound universalism of the Gita: no sincere devotion is misdirected, because all forms of the sacred are ultimately the one Divine.`,
    takeaway: `No sincere devotion is misdirected — all worship of any sacred form reaches the one Divine.`,
    tags: ['devotion', 'truth']
  },
  '9.24': {
    sanskrit: `अहं हि सर्वयज्ञानां भोक्ता च प्रभुरेव च।
न तु मामभिजानन्ति तत्त्वेनातश्च्यवन्ति ते॥`,
    telugu: `నేనే అన్ని యజ్ఞాల భోక్తను, ప్రభువును. కానీ వారు నన్ను తత్వతః తెలుసుకోరు. కాబట్టి వారు పడిపోతారు.`,
    english: `I am the only enjoyer and the only object of sacrifice. Those who do not recognize my true transcendental nature fall down.`,
    explanation: `The Divine is the ultimate recipient of all sacrifice. Not recognizing this leads to spiritual falling — not punishment but the natural consequence of misalignment. Right understanding aligns us with reality; misunderstanding creates friction and eventual correction.`,
    takeaway: `Recognizing the Divine as the ultimate recipient of all sacrifice aligns us with reality itself.`,
    tags: ['wisdom', 'devotion']
  },
  '9.25': {
    sanskrit: `यान्ति देवव्रता देवान्पितॄन्यान्ति पितृव्रताः।
भूतानि यान्ति भूतेज्या यान्ति मद्याजिनोऽपि माम्॥`,
    telugu: `దేవ వ్రతులు దేవతలను, పితృ వ్రతులు పితరులను, భూత పూజకులు భూతాలను పొందుతారు. నన్ను పూజించే వారు నన్ను పొందుతారు.`,
    english: `Those who worship the demigods will take birth among the demigods; those who worship the ancestors go to the ancestors; those who worship ghosts and spirits will take birth among such beings; and those who worship me will live with me.`,
    explanation: `You reach what you worship — this is the law of spiritual correspondence. Those who worship the Divine reach the Divine. Those who worship partial realities reach those partial realities. The teaching is: aim as high as possible; worship the highest.`,
    takeaway: `You reach what you worship — aim as high as possible; worship the highest.`,
    tags: ['devotion', 'wisdom']
  },
  '9.26': {
    sanskrit: `पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।
तदहं भक्त्युपहृतमश्नामि प्रयतात्मनः॥`,
    telugu: `ఎవడు నాకు భక్తితో పత్రం, పుష్పం, ఫలం, నీరు అర్పించాడో, ఆ ప్రయతాత్మ యొక్క భక్తి ఉపహారాన్ని నేను స్వీకరిస్తాను.`,
    english: `If one offers me with love and devotion a leaf, a flower, fruit or water, I will accept it.`,
    explanation: `One of the most beloved verses of the Gita: even a leaf, flower, fruit, or water — the simplest possible offering — is accepted by the Divine when given with love and devotion. The Divine is not interested in the size of the gift but in the sincerity of the heart.`,
    takeaway: `The Divine accepts the smallest offering given with love — sincerity matters more than the size of the gift.`,
    tags: ['devotion', 'faith']
  },
  '9.27': {
    sanskrit: `यत्करोषि यदश्नासि यज्जुहोषि ददासि यत्।
यत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम्॥`,
    telugu: `కౌంతేయా, నువ్వు ఏమి చేస్తావో, ఏమి తింటావో, ఏమి హవనం చేస్తావో, ఏమి దానం చేస్తావో, ఏ తపస్సు చేస్తావో — దాన్ని నాకు అర్పణగా చేయి.`,
    english: `Whatever you do, whatever you eat, whatever you offer or give away, and whatever austerities you perform — do that, O son of Kunti, as an offering to me.`,
    explanation: `The complete practice condensed into one verse: whatever you do — eat, work, give, practice — offer it to the Divine. This transforms the entirety of daily life into worship. No separate 'spiritual time' is needed when all time is offered.`,
    takeaway: `Transform all of daily life into worship by offering everything you do to the Divine.`,
    tags: ['devotion', 'action']
  },
  '9.28': {
    sanskrit: `शुभाशुभफलैरेवं मोक्ष्यसे कर्मबन्धनैः।
संन्यासयोगयुक्तात्मा विमुक्तो मामुपैष्यसि॥`,
    telugu: `ఈ విధంగా శుభాశుభ ఫలాలైన కర్మ బంధాల నుండి విముక్తి పొందుతావు. సంన్యాస యోగ యుక్తాత్మతో విముక్తుడై నన్ను పొందుతావు.`,
    english: `In this way you will be freed from bondage to work and its auspicious and inauspicious results. With your mind fixed on me in this principle of renunciation, you will be liberated and come to me.`,
    explanation: `The promise: offering all actions to the Divine frees you from both positive and negative karmic bonds. Liberation arrives not by doing nothing but by offering everything. This is the alchemy of devotion: transforming ordinary action into the path of liberation.`,
    takeaway: `Offering all actions to the Divine frees you from karmic bonds — ordinary action becomes liberation's path.`,
    tags: ['devotion', 'action']
  },
  '9.29': {
    sanskrit: `समोऽहं सर्वभूतेषु न मे द्वेष्योऽस्ति न प्रियः।
ये भजन्ति तु मां भक्त्या मयि ते तेषु चाप्यहम्॥`,
    telugu: `నేను అన్ని భూతాలలో సమంగా ఉన్నాను. నాకు ద్వేషుడు లేదు, ప్రియుడు లేడు. నన్ను భక్తితో భజించే వారు నాలో ఉంటారు, నేను వారిలో ఉంటాను.`,
    english: `I envy no one, nor am I partial to anyone. I am equal to all. But whoever renders service unto me in devotion is a friend, is in me, and I am also a friend to him.`,
    explanation: `The Divine is impartial — no favorites, no enemies. But those who love the Divine with devotion are in the Divine and the Divine is in them. This is not contradiction: the Divine's equal nature makes it available to all, and devotion actualizes that availability.`,
    takeaway: `The Divine's equality makes liberation available to all; devotion actualizes that availability.`,
    tags: ['devotion', 'wisdom']
  },
  '9.30': {
    sanskrit: `अपि चेत्सुदुराचारो भजते मामनन्यभाक्।
साधुरेव स मन्तव्यः सम्यग्व्यवसितो हि सः॥`,
    telugu: `సుదురాచారుడైనా అనన్య భక్తితో నన్ను భజిస్తే అతడు సాధువే అని తలచాలి. అతడు సరిగ్గా నిర్ణయించుకున్నాడు.`,
    english: `Even if one commits the most abominable action, if one is engaged in devotional service, one is to be considered saintly because one is properly situated in one's determination.`,
    explanation: `Even the one who has committed terrible wrongs, if they turn to the Divine with single-pointed devotion, is to be considered good — because they have made the right fundamental determination. The turning is what matters; the past does not permanently define the present.`,
    takeaway: `The turning toward the Divine is what matters — the past does not permanently define the present.`,
    tags: ['devotion', 'compassion']
  },
  '9.31': {
    sanskrit: `क्षिप्रं भवति धर्मात्मा शश्वच्छान्तिं निगच्छति।
कौन्तेय प्रतिजानीहि न मे भक्तः प्रणश्यति॥`,
    telugu: `శీఘ్రంగా ధర్మాత్మ అవుతాడు, శాశ్వత శాంతిని పొందుతాడు. కౌంతేయా, ప్రతిజ్ఞ చేయి — నా భక్తుడు నశించడు.`,
    english: `He quickly becomes virtuous and attains lasting peace. O son of Kunti, declare it boldly that my devotee never perishes.`,
    explanation: `The devotee who turns to the Divine quickly becomes righteous and attains lasting peace. Krishna's promise, direct and unambiguous: My devotee never perishes. This is the ultimate guarantee — total security for those who commit to the path of devotion.`,
    takeaway: `Krishna's ultimate guarantee: my devotee never perishes. Total security for those who commit.`,
    tags: ['devotion', 'faith']
  },
  '9.32': {
    sanskrit: `मां हि पार्थ व्यपाश्रित्य येऽपि स्युः पापयोनयः।
स्त्रियो वैश्यास्तथा शूद्रास्तेऽपि यान्ति परां गतिम्॥`,
    telugu: `పార్థా, పాపయోనులైనా, స్త్రీలు, వైశ్యులు, శూద్రులు — నన్ను ఆశ్రయించిన వారు పరమ గతి పొందుతారు.`,
    english: `O son of Pritha, those who take shelter in me, though they be of lower birth — women, merchants, and laborers — can approach the supreme destination.`,
    explanation: `The path to liberation is open to all, regardless of birth, gender, or social position. Those traditionally excluded from formal religious practice can reach the supreme through devotion. This is one of the Gita's most radical and inclusive teachings.`,
    takeaway: `Liberation is open to all regardless of birth, gender, or social position — devotion has no exclusions.`,
    tags: ['devotion', 'compassion']
  },
  '9.33': {
    sanskrit: `किं पुनर्ब्राह्मणाः पुण्या भक्ता राजर्षयस्तथा।
अनित्यमसुखं लोकमिमं प्राप्य भजस्व माम्॥`,
    telugu: `ఇక పవిత్రులైన బ్రాహ్మణులు మరియు భక్తులైన రాజర్షులు ఎంత మాత్రం! కాబట్టి ఈ అనిత్యమైన, అసుఖమైన లోకాన్ని పొంది నన్ను భజించు.`,
    english: `How much more this is so of the righteous brahmanas, the devoted saints and the royal sages who have come to this temporary, miserable world. Engage in loving service unto me.`,
    explanation: `If even those who seem least qualified can reach liberation through devotion, how much more available is it to those already inclined toward virtue? The conclusion: this temporary, impermanent world calls for one thing above all — loving service to the Divine.`,
    takeaway: `This temporary world calls for one response above all others: loving, devoted service to the Divine.`,
    tags: ['devotion', 'wisdom']
  },
  '9.34': {
    sanskrit: `मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।
मामेवैष्यसि युक्त्वैवमात्मानं मत्परायणः॥`,
    telugu: `నా ఆలోచనతో ఉండు, నా భక్తుడవు అవు, నన్ను పూజించు, నాకు నమస్కరించు. ఈ విధంగా ఆత్మను యుక్తం చేసుకుని, మత్పరాయణుడవై నన్నే పొందుతావు.`,
    english: `Engage your mind always in thinking of me, become my devotee, offer obeisances to me and worship me. Being completely absorbed in me, surely you will come to me.`,
    explanation: `Chapter 9's conclusion: think of me, be my devotee, worship me, bow to me. Engage yourself fully in this, with me as the supreme goal — and you will come to me. This four-fold practice of mind, heart, body, and soul converging on the Divine is the complete path.`,
    takeaway: `Think of me, be devoted to me, worship me, bow to me — converge all your faculties on the Divine.`,
    tags: ['devotion', 'action']
  },
  '10.1': {
    sanskrit: `श्रीभगवानुवाच
भूय एव महाबाहो श्रृणु मे परमं वचः।
यत्तेऽहं प्रीयमाणाय वक्ष्यामि हितकाम्यया॥`,
    telugu: `మహాబాహో, నీకు ప్రసన్నమైనట్లు మళ్ళీ నా పరమ వాక్యాన్ని వినుము. నీ హితాన్ని కోరి నీకు చెప్తాను.`,
    english: `O mighty-armed Arjuna, listen again to my supreme word, which I shall impart to you for your benefit and which will give you great joy.`,
    explanation: `The Divine speaks again out of love for the disciple's benefit. True teaching always springs from genuine care — the teacher's desire is not to display knowledge but to benefit the student. This quality of care in the teacher is what makes wisdom truly transmissible.`,
    takeaway: `True teaching springs from genuine care for the student's welfare — this is what makes wisdom transmissible.`,
    tags: ['wisdom', 'devotion']
  },
  '10.2': {
    sanskrit: `न मे विदुः सुरगणाः प्रभवं न महर्षयः।
अहमादिर्हि देवानां महर्षीणां च सर्वशः॥`,
    telugu: `నా ప్రభవం దేవ గణాలకు తెలియదు, మహర్షులకూ తెలియదు. ఎందుకంటే నేనే దేవతలకు, మహర్షులకు అన్ని విధాలా ఆది.`,
    english: `Neither the hosts of demigods nor the great sages know my origin or opulences, for in every respect I am the source of the demigods and sages.`,
    explanation: `The Divine's origin is unknown even to the highest beings — gods and great sages. This is not a deficiency in them but the nature of the Divine: the Source cannot be fully grasped by what arises from it. A wave cannot encompass the ocean.`,
    takeaway: `The Source cannot be fully grasped by what arises from it — the Divine's origin is beyond even the greatest sages.`,
    tags: ['wisdom', 'truth']
  },
  '10.3': {
    sanskrit: `यो मामजमनादिं च वेत्ति लोकमहेश्वरम्।
असम्मूढः स मर्त्येषु सर्वपापैः प्रमुच्यते॥`,
    telugu: `అజుడు, అనాది, లోక మహేశ్వరుడు అయిన నన్ను తెలుసుకున్న మానవులలో అసమ్మూఢుడు సమస్త పాపాల నుండి విముక్తుడవుతాడు.`,
    english: `One who knows me as the unborn, as the beginningless, as the Supreme Lord of all the worlds — he only, undeluded among men, is freed from all sins.`,
    explanation: `Knowing the Divine as unborn, beginningless, and Supreme Lord of all worlds — and being free from delusion about this — liberates from all sins. The liberation is through knowledge, not ritual. Understanding the Divine's true nature cleanses completely.`,
    takeaway: `True knowledge of the Divine's nature — unborn, beginningless, Supreme — liberates from all sins.`,
    tags: ['wisdom', 'knowledge']
  },
  '10.4': {
    sanskrit: `बुद्धिर्ज्ञानमसम्मोहः क्षमा सत्यं दमः शमः।
सुखं दुःखं भवोऽभावो भयं चाभयमेव च॥`,
    telugu: `బుద్ధి, జ్ఞానం, అసమ్మోహం, క్షమ, సత్యం, దమం, శమం, సుఖం, దుఃఖం, భవ అభవాలు, భయం, అభయం కూడా.`,
    english: `Intelligence, knowledge, freedom from doubt and delusion, forgiveness, truthfulness, control of the senses, control of the mind, happiness and distress, birth, death, fear, fearlessness...`,
    explanation: `The Divine is the source of all human qualities — both positive (intelligence, forgiveness, truth) and what we call negative (distress, fear, death). All human experience has its source in the Divine. Nothing falls outside; everything is within the divine embrace.`,
    takeaway: `All human experience — including distress, fear, and death — has its source in the Divine; nothing falls outside.`,
    tags: ['wisdom', 'truth']
  },
  '10.5': {
    sanskrit: `अहिंसा समता तुष्टिस्तपो दानं यशोऽयशः।
भवन्ति भावा भूतानां मत्त एव पृथग्विधाः॥`,
    telugu: `అహింస, సమత, తుష్టి, తపస్సు, దానం, యశస్సు, అపయశస్సు — ప్రాణుల విభిన్న భావాలు నా నుండే కలుగుతాయి.`,
    english: `Non-violence, equanimity, satisfaction, austerity, charity, fame and infamy — all these various qualities of living beings are created by me alone.`,
    explanation: `Non-violence, equanimity, contentment, austerity, charity, fame and infamy — all human qualities emanate from the Divine. This list includes even 'negative' qualities like infamy, because the Divine is the source of the full spectrum of human experience.`,
    takeaway: `The full spectrum of human qualities — positive and negative — emanates from the Divine.`,
    tags: ['wisdom', 'truth']
  },
  '10.6': {
    sanskrit: `महर्षयः सप्त पूर्वे चत्वारो मनवस्तथा।
मद्भावा मानसा जाता येषां लोक इमाः प्रजाः॥`,
    telugu: `మహర్షులు ఏడు, పూర్వం నలుగురు మనువులు — వారు నా నుండి మానసంగా జన్మించారు. వారి నుండి ఈ లోకంలో ఈ ప్రజలు జన్మించారు.`,
    english: `The seven great sages and before them the four other great sages and the Manus came from me, born from my mind, and all the living beings populating the various planets descended from them.`,
    explanation: `All of humanity descends from the great sages and progenitors who themselves arose from the Divine mind. We are all, ultimately, children of the Divine. This is not mythology but the recognition of our deepest origin and identity.`,
    takeaway: `All of humanity descends ultimately from the Divine — we are, in the deepest sense, children of the Divine.`,
    tags: ['wisdom', 'soul']
  },
  '10.7': {
    sanskrit: `एतां विभूतिं योगं च मम यो वेत्ति तत्त्वतः।
सोऽविकम्पेन योगेन युज्यते नात्र संशयः॥`,
    telugu: `నా ఈ విభూతిని మరియు యోగాన్ని తత్వతః తెలుసుకున్నవాడు అవికంపమైన యోగంతో యుక్తుడవుతాడు. ఇందులో సందేహం లేదు.`,
    english: `One who is in fact aware of my opulences and mystic power is situated in the unalloyed devotional service; of this there is no doubt.`,
    explanation: `True knowledge of the Divine's divine manifestations and power leads to unshakable devotional practice. Not as a forced discipline but as a natural consequence — when you truly see how magnificent the Divine is, devoted service becomes the natural response.`,
    takeaway: `Truly seeing the Divine's magnificence makes devoted service the natural, spontaneous response.`,
    tags: ['devotion', 'wisdom']
  },
  '10.8': {
    sanskrit: `अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते।
इति मत्वा भजन्ते मां बुधा भावसमन्विताः॥`,
    telugu: `నేను అన్నింటికి మూలం. నా నుండే అన్నీ ప్రవర్తిస్తాయి. ఇలా తెలుసుకుని బుద్ధిమంతులు భావంతో నన్ను భజిస్తారు.`,
    english: `I am the source of all spiritual and material worlds. Everything emanates from me. The wise who perfectly know this engage in my devotional service and worship me with all their hearts.`,
    explanation: `The wise who know the Divine as the source of all worlds worship with full-hearted devotion. This knowing is not merely intellectual; it fills the heart with reverential love. When you truly understand where everything comes from, the response is naturally devotion.`,
    takeaway: `When you truly understand that all things come from the Divine, devotion is the natural response of wisdom.`,
    tags: ['devotion', 'wisdom']
  },
  '10.9': {
    sanskrit: `मच्चिता मद्गतप्राणा बोधयन्तः परस्परम्।
कथयन्तश्च मां नित्यं तुष्यन्ति च रमन्ति च॥`,
    telugu: `నాలో చిత్తం, నాలో ప్రాణం, పరస్పరం బోధిస్తూ, నిత్యం నా కథలు చెప్తూ తృప్తి పొందుతారు, ఆనందిస్తారు.`,
    english: `The thoughts of my pure devotees dwell in me, their lives are fully devoted to my service, and they derive great satisfaction and bliss from always enlightening one another and conversing about me.`,
    explanation: `The joy of the devoted community: thinking always of the Divine, living in that consciousness, and sharing that joy with each other in mutual enlightening conversation. This describes the highest form of spiritual community — where the Divine is the center of all exchange.`,
    takeaway: `The highest spiritual community shares the Divine as its center — mutual enlightening conversation.`,
    tags: ['devotion', 'peace']
  },
  '10.10': {
    sanskrit: `तेषां सततयुक्तानां भजतां प्रीतिपूर्वकम्।
ददामि बुद्धियोगं तं येन मामुपयान्ति ते॥`,
    telugu: `నిరంతర యుక్తులై, ప్రీతిపూర్వకంగా భజించే వారికి నేను ఆ బుద్ధి యోగాన్ని ఇస్తాను, దానిచే వారు నన్ను పొందుతారు.`,
    english: `To those who are constantly devoted to serving me with love, I give the understanding by which they can come to me.`,
    explanation: `The Divine gives the understanding needed to reach the Divine — to those who love with constancy and sincerity. This is divine grace in action: the seeker provides the sincere love; the Divine provides the wisdom needed to complete the journey.`,
    takeaway: `Divine grace provides the understanding needed to reach the Divine — love is the condition; wisdom is the gift.`,
    tags: ['devotion', 'wisdom']
  },
  '10.11': {
    sanskrit: `तेषामेवानुकम्पार्थमहमज्ञानजं तमः।
नाशयाम्यात्मभावस्थो ज्ञानदीपेन भास्वता॥`,
    telugu: `వారిపై అనుకంపతో, వారి ఆత్మ భావంలో ఉన్న నేను అజ్ఞానజన్య అంధకారాన్ని జ్ఞాన దీపంతో నశింపజేస్తాను.`,
    english: `To show them special mercy, I, dwelling in their hearts, destroy with the shining lamp of knowledge the darkness born of ignorance.`,
    explanation: `Dwelling in the devotee's own heart, the Divine destroys ignorance with the lamp of knowledge. This is the most intimate description of divine grace: not an external intervention but an inner illumination from within the very heart. The teacher is always already inside.`,
    takeaway: `The Divine dwells in the devotee's heart and illuminates from within — grace is an inner event.`,
    tags: ['devotion', 'wisdom']
  },
  '10.12': {
    sanskrit: `अर्जुन उवाच
परं ब्रह्म परं धाम पवित्रं परमं भवान्।
पुरुषं शाश्वतं दिव्यमादिदेवमजं विभुम्॥`,
    telugu: `అర్జునుడు పలికెను:
మీరు పరం బ్రహ్మ, పరం ధామం, పవిత్రమైనవారు. శాశ్వత దివ్య పురుషుడు, ఆది దేవుడు, అజుడు, విభువు.`,
    english: `Arjuna said: You are the Supreme Personality of Godhead, the ultimate abode, the purest, the Absolute Truth. You are the eternal, transcendental, original person, the unborn, the greatest.`,
    explanation: `Arjuna's declaration of recognition is itself a form of teaching: this is what genuine recognition of the Divine looks and sounds like. Not theoretical assent but heartfelt declaration: 'You are the Supreme, the eternal, the original, the unborn, the All-pervading.'`,
    takeaway: `Genuine recognition of the Divine is not theoretical assent but heartfelt declaration from direct knowing.`,
    tags: ['devotion', 'wisdom']
  },
  '10.13': {
    sanskrit: `आहुस्त्वामृषयः सर्वे देवर्षिर्नारदस्तथा।
असितो देवलो व्यासः स्वयं चैव ब्रवीषि मे॥`,
    telugu: `నారద, అసిత, దేవల, వ్యాస మహర్షులు మరియు అన్ని ఋషులు మీ గురించి చెప్పారు. మీరు కూడా నాకు చెప్తున్నారు.`,
    english: `All the great sages like Narada, Asita, Devala, and Vyasa proclaim this of you, and now you yourself are declaring it to me.`,
    explanation: `The great sages throughout history have proclaimed the same truth — and now Krishna confirms it directly. The testimony of the wise tradition aligns with the teacher's direct declaration. When inner experience and outer tradition agree, truth is confirmed from multiple directions.`,
    takeaway: `When personal teaching and the wider tradition agree, truth is confirmed from multiple directions.`,
    tags: ['wisdom', 'devotion']
  },
  '10.14': {
    sanskrit: `सर्वमेतदृतं मन्ये यन्मां वदसि केशव।
न हि ते भगवन्व्यक्तिं विदुर्देवा न दानवाः॥`,
    telugu: `కేశవా, నీవు నాకు చెప్పేదంతా నిజమని నేను తలుస్తున్నాను. భగవంతుడా, నీ వ్యక్తిత్వాన్ని దేవతలు గాని, అసురులు గాని తెలుసుకోరు.`,
    english: `O Krishna, I totally accept as truth all that you have told me. Neither the gods nor demons, O Lord, know thy personality.`,
    explanation: `Arjuna accepts the teaching completely and notes that the Divine's true nature is unknown even to gods and demons. This is the final word on why the teaching is so rare and precious — the truth is accessible but not easily found, even by elevated beings.`,
    takeaway: `The Divine's true nature is accessible but not easily found — this is why the teaching is so precious.`,
    tags: ['devotion', 'wisdom']
  },
  '10.15': {
    sanskrit: `स्वयमेवात्मनात्मानं वेत्थ त्वं पुरुषोत्तम।
भूतभावन भूतेश देवदेव जगत्पते॥`,
    telugu: `పురుషోత్తమా, భూతభావనా, భూతేశా, దేవదేవా, జగత్పతే — నువ్వే ఆత్మచే ఆత్మను తెలుసుకుంటావు.`,
    english: `Indeed, you alone know yourself by your own internal potency, O Supreme Person, origin of all, Lord of all beings, God of gods, Lord of the universe.`,
    explanation: `Only the Divine knows itself through itself — this is the profundity of divine self-knowledge. The Source cannot be fully known by any object within it. Yet through devotion and surrender, the devotee is drawn into the Divine's own self-knowing.`,
    takeaway: `The Divine knows itself through itself — devotion draws the devotee into this self-knowing.`,
    tags: ['wisdom', 'devotion']
  },
  '10.16': {
    sanskrit: `वक्तुमर्हस्यशेषेण दिव्या ह्यात्मविभूतयः।
याभिर्विभूतिभिर्लोकानिमांस्त्वं व्याप्य तिष्ठसि॥`,
    telugu: `ఏ విభూతులచే నువ్వు ఈ లోకాలను వ్యాపించి ఉన్నావో ఆ దివ్య ఆత్మ విభూతులను సంపూర్ణంగా చెప్పడానికి అర్హుడవు.`,
    english: `Please tell me in detail of your divine opulences by which you pervade all these worlds and abide in them.`,
    explanation: `Arjuna asks for the Divine's manifestations in the world — the divine qualities in created things. This is the subject of the rest of Chapter 10: seeing the Divine in the best of every category. Training the eye to see the sacred everywhere.`,
    takeaway: `Train your eye to see the Divine in the best of every category — this is the practice of Chapter 10.`,
    tags: ['devotion', 'wisdom']
  },
  '10.17': {
    sanskrit: `कथं विद्यामहं योगिंस्त्वां सदा परिचिन्तयन्।
केषु केषु च भावेषु चिन्त्योऽसि भगवन्मया॥`,
    telugu: `యోగిన్, భగవంతుడా, నేను నిత్యం నిన్ను చింతిస్తూ ఎలా తెలుసుకోవాలి? ఏ ఏ భావాలలో నేను నిన్ను చింతించాలి?`,
    english: `O mystic Lord, how shall I constantly think of you, and how shall I know you? In what various forms are you to be contemplated by me, O Blessed Lord?`,
    explanation: `Arjuna asks the practical question: in what specific forms can I contemplate you? This is the most useful kind of question for daily practice — not abstract theology but concrete objects of meditation that make the practice of remembrance specific and accessible.`,
    takeaway: `Practice requires concrete objects of contemplation — Arjuna wisely asks which specific forms to meditate on.`,
    tags: ['devotion', 'meditation']
  },
  '10.18': {
    sanskrit: `विस्तरेणात्मनो योगं विभूतिं च जनार्दन।
भूयः कथय तृप्तिर्हि श्रृण्वतो नास्ति मेऽमृतम्॥`,
    telugu: `జనార్దనా, నీ యోగాన్ని మరియు విభూతులను మళ్ళీ వివరంగా చెప్పు. నీ అమృతాన్ని వింటున్న నాకు తృప్తి కలగడం లేదు.`,
    english: `O Janardana, please describe again in detail the mystic power of your opulences. I am never satiated in hearing about you, for the more I hear the more I want to taste the nectar of your words.`,
    explanation: `Arjuna is never satiated — the more he hears, the more he wants. This is the nature of genuine spiritual hunger: it grows as it is fed. Unlike material appetite which diminishes with fulfillment, spiritual thirst deepens with each drink from the source.`,
    takeaway: `True spiritual hunger grows as it is fed — unlike material appetite, it deepens with each drink.`,
    tags: ['devotion', 'wisdom']
  },
  '10.19': {
    sanskrit: `श्रीभगवानुवाच
हन्त ते कथयिष्यामि दिव्या ह्यात्मविभूतयः।
प्राधान्यतः कुरुश्रेष्ठ नास्त्यन्तो विस्तरस्य मे॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
హంత, నా దివ్య విభూతులను ప్రాధాన్యంగా చెప్తాను. కురు శ్రేష్ఠా, నా విస్తారానికి అంతం లేదు.`,
    english: `The Supreme Personality of Godhead said: Yes, I will tell you of my splendorous manifestations, but only of those which are prominent, O Arjuna, for my opulence is limitless.`,
    explanation: `'My extent has no end' — the Divine's manifestations are literally inexhaustible. What follows is a selection of the most prominent examples. The exercise invites us to extend this list indefinitely: wherever greatness, beauty, excellence appears, there is the Divine.`,
    takeaway: `The Divine's manifestations are inexhaustible — wherever greatness or beauty appears, there is the Divine.`,
    tags: ['wisdom', 'devotion']
  },
  '10.20': {
    sanskrit: `अहमात्मा गुडाकेश सर्वभूताशयस्थितः।
अहमादिश्च मध्यं च भूतानामन्त एव च॥`,
    telugu: `గుడాకేశా, నేను సర్వ భూతాల హృదయంలో స్థిత ఆత్మను. నేను భూతాలకు ఆది, మధ్య, అంత కూడా.`,
    english: `I am the Self, O Gudakesha, seated in the hearts of all creatures. I am the beginning, the middle and the end of all beings.`,
    explanation: `The Divine is the Self in the heart of every being — the beginning, middle, and end of all existence. This is the most personal statement: the Divine is not somewhere 'out there' but is the very Self you are, the center of your own existence.`,
    takeaway: `The Divine is the very Self in your own heart — not somewhere out there but the center of your own existence.`,
    tags: ['soul', 'devotion']
  },
  '10.21': {
    sanskrit: `अहमादिश्च — आदित्यानामहं विष्णुर्ज्योतिषां रविरंशुमान्।
मरीचिर्मरुतामस्मि नक्षत्राणामहं शशी॥`,
    telugu: `ఆదిత్యులలో నేను విష్ణువు, జ్యోతులలో రవి కిరణాల సూర్యుడు. మారుతులలో మరీచి, నక్షత్రాలలో చంద్రుడు నేను.`,
    english: `Among the Adityas I am Vishnu, among lights I am the radiant sun, among the Maruts I am Marichi, and among stars I am the moon.`,
    explanation: `Among the sun-gods, the Divine is Vishnu — the highest; among lights, the radiant sun; among winds, Marichi; among stars, the moon. The pattern: wherever there is a category of greatness, the Divine is the highest and brightest exemplar within it.`,
    takeaway: `Wherever there is greatness in any category, the Divine is its highest expression.`,
    tags: ['wisdom', 'devotion']
  },
  '10.22': {
    sanskrit: `वेदानां सामवेदोऽस्मि देवानामस्मि वासवः।
इन्द्रियाणां मनश्चास्मि भूतानामस्मि चेतना॥`,
    telugu: `వేదాలలో సామవేదం నేను, దేవతలలో ఇంద్రుడు నేను. ఇంద్రియాలలో మనస్సు నేను, ప్రాణులలో చేతన నేను.`,
    english: `Of the Vedas I am the Sama Veda; of the demigods I am Indra, the king of heaven; of the senses I am the mind; and in living beings I am the living force consciousness.`,
    explanation: `Among the Vedas, the Divine is the Sama Veda — the most musical and mystical; among gods, Indra; among senses, the mind — the king of senses; among living beings, consciousness itself. The Divine is always the animating, essential principle.`,
    takeaway: `The Divine is always the animating, essential principle within each category — consciousness among beings.`,
    tags: ['wisdom', 'soul']
  },
  '10.23': {
    sanskrit: `रुद्राणां शंकरश्चास्मि वित्तेशो यक्षरक्षसाम्।
वसूनां पावकश्चास्मि मेरुः शिखरिणामहम्॥`,
    telugu: `రుద్రులలో శంకరుడు నేను, యక్ష రక్షసులలో ధనదుడు నేను. వసువులలో అగ్ని నేను, శిఖరులలో మేరువు నేను.`,
    english: `Of all the Rudras I am Lord Shiva, of the Yakshas and Rakshasas I am the Lord of wealth Kuvera, of the Vasus I am fire, and of mountains I am Meru.`,
    explanation: `Among the Rudras, the Divine is Shiva — destroyer and transformer; among treasure-beings, Kubera; among the Vasus, fire — the most transformative element; among mountains, Meru — the cosmic axis. The highest and most central in each domain.`,
    takeaway: `In every domain, the Divine is the highest, most central, most transformative expression.`,
    tags: ['wisdom', 'truth']
  },
  '10.24': {
    sanskrit: `पुरोधसां च मुख्यं मां विद्धि पार्थ बृहस्पतिम्।
सेनानीनामहं स्कन्दः सरसामस्मि सागरः॥`,
    telugu: `పార్థా, పురోహితులలో ముఖ్యుడైన బృహస్పతిని నేను అని తెలుసుకో. సేనాపతులలో స్కంధుడు, సరసులలో సాగరం నేను.`,
    english: `Of priests, O Arjuna, know me to be the chief, Brihaspati. Of generals I am Kartikeya, and of bodies of water I am the ocean.`,
    explanation: `Among priests, the Divine is Brihaspati — the celestial teacher; among military commanders, Kartikeya; among bodies of water, the ocean — vast and containing all rivers. Each domain has its supreme, and the Divine is that supreme in every domain.`,
    takeaway: `The Divine is the supreme within every domain — the ocean among waters, the best among the best.`,
    tags: ['wisdom', 'devotion']
  },
  '10.25': {
    sanskrit: `महर्षीणां भृगुरहं गिरामस्म्येकमक्षरम्।
यज्ञानां जपयज्ञोऽस्मि स्थावराणां हिमालयः॥`,
    telugu: `మహర్షులలో భృగువు నేను, వాక్కులలో ఒక్క అక్షరం (ఓం) నేను. యజ్ఞాలలో జప యజ్ఞం నేను, స్థావరాలలో హిమాలయాలు నేను.`,
    english: `Of the great sages I am Bhrigu; of vibrations I am the transcendental Om; of sacrifices I am the chanting of the holy names, and among immovable things I am the Himalayas.`,
    explanation: `Among sages, Bhrigu; among sounds, Om — the primordial vibration; among sacrifices, japa (silent chanting) — the most interior; among immovable things, the Himalayas — the most majestic. The pattern continues: the most essential and magnificent in each domain.`,
    takeaway: `Among sacrifices, silent chanting is the most interior and powerful — the Divine especially dwells there.`,
    tags: ['devotion', 'meditation']
  },
  '10.26': {
    sanskrit: `अश्वत्थः सर्ववृक्षाणां देवर्षीणां च नारदः।
गन्धर्वाणां चित्ररथः सिद्धानां कपिलो मुनिः॥`,
    telugu: `సమస్త వృక్షాలలో అశ్వత్థ వృక్షం, దేవర్షులలో నారదుడు, గంధర్వులలో చిత్రరథుడు, సిద్ధులలో కపిల ముని — నేను.`,
    english: `Among all trees I am the holy fig tree, and among sages among the demigods I am Narada. Among the Gandharvas I am Citraratha, and among perfected beings I am the sage Kapila.`,
    explanation: `Among trees, the sacred fig — the Bodhi tree; among divine sages, Narada — the celestial teacher and divine ambassador; among Gandharvas, Citraratha — the most musical; among perfected sages, Kapila — the founder of Sankhya philosophy. Each domain's supreme exemplar.`,
    takeaway: `The Divine manifests as the most excellent, most sacred example in every domain of existence.`,
    tags: ['wisdom', 'devotion']
  },
  '10.27': {
    sanskrit: `उच्चैःश्रवसमश्वानां विद्धि माममृतोद्भवम्।
ऐरावतं गजेन्द्राणां नराणां च नराधिपम्॥`,
    telugu: `అమృతం నుండి జన్మించిన ఉచ్చైఃశ్రవసాన్ని గుర్రాలలో నేను అని తెలుసుకో. గజేంద్రులలో ఐరావతం, నరులలో రాజు — నేను.`,
    english: `Among horses know me to be Ucchaihshrava, produced during the churning of the ocean for nectar, among lordly elephants I am Airavata, and among men I am the monarch.`,
    explanation: `Ucchaihshrava, born from the divine ocean-churning — the purest and most magnificent horse; Airavata, the cosmic elephant; among humans, the king — the representative of divine authority in human society. Beauty and power both find their ultimate expression in the Divine.`,
    takeaway: `Beauty and power both find their ultimate expression in the Divine.`,
    tags: ['wisdom', 'devotion']
  },
  '10.28': {
    sanskrit: `आयुधानामहं वज्रं धेनूनामस्मि कामधुक्।
प्रजनश्चास्मि कन्दर्पः सर्पाणामस्मि वासुकिः॥`,
    telugu: `ఆయుధాలలో వజ్రం, ధేనువులలో కామధేనువు. సంతానకారణమైన కందర్పుడు, సర్పాలలో వాసుకి — నేను.`,
    english: `Among weapons I am the thunderbolt; among cows I am the surabhi. Of causes for procreation I am Kandarpa, the god of love, and of serpents I am Vasuki.`,
    explanation: `Among weapons, the thunderbolt — power at its most concentrated; among cows, Kamadhenu — the divine wish-fulfilling cow; among causes of procreation, Kandarpa — love itself; among serpents, Vasuki — the most powerful. The Divine is the most potent expression everywhere.`,
    takeaway: `The Divine is the most concentrated, most potent expression in every category.`,
    tags: ['wisdom', 'devotion']
  },
  '10.29': {
    sanskrit: `अनन्तश्चास्मि नागानां वरुणो यादसामहम्।
पितॄणामर्यमा चास्मि यमः संयमतामहम्॥`,
    telugu: `నాగులలో అనంతుడు, జలదేవతలలో వరుణుడు. పితరులలో అర్యమ, సంయమిస్తే వారిలో యముడు — నేను.`,
    english: `Among the many-hooded Nagas I am Ananta, and among the aquatics I am the demigod Varuna. Of departed ancestors I am Aryama, and among the dispensers of law I am Yama, the lord of death.`,
    explanation: `Among serpents, Ananta — the infinite serpent on whom Vishnu rests; among water-deities, Varuna — lord of cosmic order; among ancestors, Aryama; among those who dispense justice, Yama — lord of death and cosmic law. The Divine is the ultimate law-enforcer and boundary-keeper.`,
    takeaway: `The Divine is the ultimate law-enforcer — Yama, lord of death, enforces the cosmic moral order.`,
    tags: ['wisdom', 'truth']
  },
  '10.30': {
    sanskrit: `प्रह्लादश्चास्मि दैत्यानां कालः कलयतामहम्।
मृगाणां च मृगेन्द्रोऽहं वैनतेयश्च पक्षिणाम्॥`,
    telugu: `దైత్యులలో ప్రహ్లాదుడు, లెక్కించేవారిలో కాలం నేను. మృగాలలో సింహం, పక్షులలో గరుత్మంతుడు — నేను.`,
    english: `Among the Daitya demons I am the devoted Prahlada, among subduers I am time, among beasts I am the lion, and among birds I am Garuda.`,
    explanation: `Among demons, Prahlada — the great devotee who remained divine even in an demonic family; among forces that subdue all, Time; among beasts, the lion — the most royal; among birds, Garuda — the vehicle of Vishnu. Even among those considered enemies, the Divine manifests in the form of devotion.`,
    takeaway: `Even among demons, the Divine manifests as Prahlada — devotion can arise anywhere, under any circumstances.`,
    tags: ['devotion', 'courage']
  },
  '10.31': {
    sanskrit: `पवनः पवतामस्मि रामः शस्त्रभृतामहम्।
झषाणां मकरश्चास्मि स्रोतसामस्मि जाह्नवी॥`,
    telugu: `పవనుల పవిత్రమైనది, ఆయుధ ధారులలో రాముడు. మత్స్యాలలో మకరం, ప్రవాహాలలో గంగ — నేను.`,
    english: `Of purifiers I am the wind, of the wielders of weapons I am Rama, of fishes I am the shark, and of flowing rivers I am the Ganges.`,
    explanation: `Among purifiers, the wind; among weapon-bearers, Rama — the embodiment of dharma; among fish, the shark — the most powerful; among rivers, the Ganges — the most sacred. Rama is particularly significant: the avatar whose entire life is a teaching on righteous action.`,
    takeaway: `Among weapon-bearers, Rama — the embodiment of righteous action and dharma in every circumstance.`,
    tags: ['duty', 'wisdom']
  },
  '10.32': {
    sanskrit: `सर्गाणामादिरन्तश्च मध्यं चैवाहमर्जुन।
अध्यात्मविद्या विद्यानां वादः प्रवदतामहम्॥`,
    telugu: `అర్జునా, సృష్టులకు ఆది, మధ్య, అంత నేను. విద్యలలో అధ్యాత్మ విద్య, వాదులలో వాదం — నేను.`,
    english: `Of all creations I am the beginning and the end and also the middle, O Arjuna. Of all sciences I am the spiritual science of the self, and among logicians I am the conclusive truth.`,
    explanation: `Among all knowledge-systems, the Divine is the science of the Self — adhyatma vidya, the highest learning; among methods of discourse, the conclusive truth that ends debate. The Divine is both the source and the goal of all genuine inquiry.`,
    takeaway: `Among all sciences, the knowledge of the Self is supreme — all genuine inquiry points toward this.`,
    tags: ['wisdom', 'knowledge']
  },
  '10.33': {
    sanskrit: `अक्षराणामकारोऽस्मि द्वन्द्वः सामासिकस्य च।
अहमेवाक्षयः कालो धाताहं विश्वतोमुखः॥`,
    telugu: `అక్షరాలలో 'అ' కారం, సమాసాలలో ద్వంద్వ సమాసం. నేనే అక్షయ కాలం, సర్వ విధులలో విశ్వతోముఖ ధాత — నేను.`,
    english: `Among letters I am the letter A, and among compounds I am the dual compound. I am also inexhaustible time, and of creators I am Brahma.`,
    explanation: `Among letters, 'A' — the first sound, the source of all language; among compound forms, the dual — honoring pairs and relationships; among all forms, inexhaustible Time — the most powerful force; among creators, Brahma. The Divine is both the beginning and the sustainer.`,
    takeaway: `The Divine is the first, the source, the inexhaustible — the 'A' from which all language and existence flows.`,
    tags: ['wisdom', 'truth']
  },
  '10.34': {
    sanskrit: `मृत्युः सर्वहरश्चाहमुद्भवश्च भविष्यताम्।
कीर्तिः श्रीर्वाक्च नारीणां स्मृतिर्मेधा धृतिः क्षमा॥`,
    telugu: `నేను అన్నింటిని హరించే మృత్యువు, భవిష్యద్వారు ఉద్భవం. స్త్రీలలో కీర్తి, శ్రీ, వాక్కు, స్మృతి, మేధ, ధృతి, క్షమ — నేను.`,
    english: `I am all-devouring death, and I am the generating principle of all that is yet to be. Among women I am fame, fortune, fine speech, memory, intelligence, steadfastness and patience.`,
    explanation: `Death — all-devouring — is the Divine, and so is birth, the generating of all future existence. Among feminine qualities: fame, fortune, eloquence, memory, intelligence, steadfastness, patience. These too are divine. The Divine is equally present in the qualities we celebrate.`,
    takeaway: `The Divine is equally present in beginning and end, in fame and patience, in every human quality.`,
    tags: ['wisdom', 'truth']
  },
  '10.35': {
    sanskrit: `बृहत्साम तथा साम्नां गायत्री छन्दसामहम्।
मासानां मार्गशीर्षोऽहमृतूनां कुसुमाकरः॥`,
    telugu: `సామాలలో బృహత్సామ, ఛందస్సులలో గాయత్రి. మాసాలలో మార్గశిర్షం, ఋతువులలో వసంతం — నేను.`,
    english: `Of the hymns in the Sama Veda I am the Brihat-sama, and of poetry I am the Gayatri. Of months I am the month of Margashirsha (November-December), and of seasons I am the flower-bearing spring.`,
    explanation: `Among hymns, the Brihat-sama — the greatest; among meters, the Gayatri — the most sacred; among months, Margashirsha — the most auspicious; among seasons, spring — when life blooms most abundantly. The Divine is most evident in the most beautiful and auspicious.`,
    takeaway: `The Divine shines most brightly in what is most beautiful, most sacred, most auspicious.`,
    tags: ['wisdom', 'devotion']
  },
  '10.36': {
    sanskrit: `द्यूतं छलयतामस्मि तेजस्तेजस्विनामहम्।
जयोऽस्मि व्यवसायोऽस्मि सत्त्वं सत्त्ववतामहम्॥`,
    telugu: `ఛలనం చేసేవారిలో జూదం, తేజస్వులలో తేజస్సు. విజయం, వ్యవసాయం (సంకల్పం), సత్వమంతులలో సత్వం — నేను.`,
    english: `I am also the gambling of cheats, and of the splendid I am the splendor. I am victory, I am adventure, and I am the strength of the strong.`,
    explanation: `Among cheaters, gambling — the Divine is even in deception, because all activity occurs within the Divine's space. Among the splendid, the Divine is the splendor itself; victory, resolution, the strength of the strong — all manifestations of divine energy.`,
    takeaway: `The Divine is present even in activity that seems far from sacred — nothing occurs outside the Divine.`,
    tags: ['wisdom', 'truth']
  },
  '10.37': {
    sanskrit: `वृष्णीनां वासुदेवोऽस्मि पाण्डवानां धनञ्जयः।
मुनीनामप्यहं व्यासः कवीनामुशना कविः॥`,
    telugu: `వృష్ణులలో వాసుదేవుడు, పాండవులలో ధనంజయుడు. మునులలో వ్యాసుడు, కవులలో ఉశనుడు (శుక్రాచార్యుడు) — నేను.`,
    english: `Of the descendants of Vrishni I am Vasudeva, and of the Pandavas I am Arjuna. Of the sages I am Vyasa, and among great thinkers I am Usana.`,
    explanation: `Among the Vrishnis, the Divine is Krishna himself (Vasudeva); among the Pandavas, Arjuna — the best, the devotee; among sages, Vyasa — author of the scriptures; among poets, Ushanas. Most significantly, Krishna names Arjuna as his own divine manifestation — the teacher honoring the student.`,
    takeaway: `The teacher names the devoted student as a divine manifestation — the student who listens deeply becomes the teaching.`,
    tags: ['devotion', 'wisdom']
  },
  '10.38': {
    sanskrit: `दण्डो दमयतामस्मि नीतिरस्मि जिगीषताम्।
मौनं चैवास्मि गुह्यानां ज्ञानं ज्ञानवतामहम्॥`,
    telugu: `నిగ్రహించేవారిలో దండం, జయించాలనేవారిలో నీతి. రహస్యాలలో మౌనం, జ్ఞానవంతులలో జ్ఞానం — నేను.`,
    english: `Among all means of suppressing lawlessness I am punishment, and of those who seek victory I am morality. Of secret things I am silence, and of the wise I am wisdom.`,
    explanation: `Among the means of correction, punishment — the Divine is the principle of justice; among those seeking victory, the Divine is moral strategy; among secrets, silence — the deepest secret is held in silence; among the wise, the Divine is wisdom itself. Justice, strategy, silence, wisdom — all divine.`,
    takeaway: `Among the wise, the Divine is wisdom itself — and among secrets, the Divine is silence.`,
    tags: ['wisdom', 'truth']
  },
  '10.39': {
    sanskrit: `यच्चापि सर्वभूतानां बीजं तदहमर्जुन।
न तदस्ति विना यत्स्यान्मया भूतं चराचरम्॥`,
    telugu: `అర్జునా, అన్ని భూతాలకు బీజం కూడా నేనే. స్థావర జంగమ ప్రాణులలో నన్ను వదిలి ఉండేది ఏదీ లేదు.`,
    english: `Furthermore, O Arjuna, I am the generating seed of all existences. There is no being — moving or nonmoving — that can exist without me.`,
    explanation: `The key statement of the chapter: every being — moving or still — cannot exist without the Divine. The Divine is the generating seed of all existence. Without the Divine, nothing exists — not as a belief but as a direct description of the nature of reality.`,
    takeaway: `Without the Divine, nothing exists — the Divine is the generating seed of all existence, moving or still.`,
    tags: ['wisdom', 'soul']
  },
  '10.40': {
    sanskrit: `नान्तोऽस्ति मम दिव्यानां विभूतीनां परन्तप।
एष तूद्देशतः प्रोक्तो विभूतेर्विस्तरो मया॥`,
    telugu: `పరంతపా, నా దివ్య విభూతులకు అంతం లేదు. వీటిని నేను ఉద్దేశం (సంక్షేప) మాత్రంగా చెప్పాను.`,
    english: `There is no end to my divine manifestations, O conqueror of the enemy. What I have spoken to you is but a mere indication of my infinite opulences.`,
    explanation: `The enumeration ends with the acknowledgment: this is only a sample. The Divine's manifestations are literally inexhaustible. Even this apparently vast list of examples is a tiny indication of the infinite variety and excellence through which the Divine expresses itself.`,
    takeaway: `Even the vast list of divine manifestations given here is only a tiny sample of the inexhaustible whole.`,
    tags: ['wisdom', 'devotion']
  },
  '10.41': {
    sanskrit: `यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा।
तत्तदेवावगच्छ त्वं मम तेजोंऽशसम्भवम्॥`,
    telugu: `ఏ ఏ విభూతిమత్తమైనది, శ్రీమత్తమైనది, ఊర్జితమైనది అయినా — దాన్ని నా తేజస్సు యొక్క అంశ సంభవంగా తెలుసుకో.`,
    english: `Know that all opulent, beautiful and glorious creations spring from but a spark of my splendor.`,
    explanation: `Whatever is excellent, beautiful, or powerful in the world — know it as a manifestation of a fraction of the Divine's splendor. This single verse is the key to the entire chapter: a universal principle for seeing the Divine everywhere excellence appears.`,
    takeaway: `See every excellence in the world as a spark of divine splendor — this is the essence of Chapter 10.`,
    tags: ['wisdom', 'devotion']
  },
  '10.42': {
    sanskrit: `अथवा बहुनैतेन किं ज्ञातेन तवार्जुन।
विष्टभ्याहमिदं कृत्स्नमेकांशेन स्थितो जगत्॥`,
    telugu: `అర్జునా, ఇంత అధికంగా తెలుసుకోవడం వల్ల నీకు ఏమి ప్రయోజనం? నా ఒక్క అంశంతో ఈ సమస్త జగత్తు ఆధారపడి ఉంది.`,
    english: `But what need is there, Arjuna, for all this detailed knowledge? With a single fragment of myself I pervade and support this entire universe.`,
    explanation: `The entire infinite variety of divine manifestations described through the chapter — and yet the Divine sustains the whole universe with just one fragment of itself. This is the mind-stopping conclusion: what we can comprehend is a fraction of a fraction of what the Divine is.`,
    takeaway: `The whole universe rests on one fragment of the Divine — the Divine infinitely exceeds all we can comprehend.`,
    tags: ['wisdom', 'soul']
  },
  '11.1': {
    sanskrit: `अर्जुन उवाच
मदनुग्रहाय परमं गुह्यमध्यात्मसंज्ञितम्।
यत्त्वयोक्तं वचस्तेन मोहोऽयं विगतो मम॥`,
    telugu: `అర్జునుడు పలికెను:
నాపై అనుగ్రహంతో మీరు పలికిన అధ్యాత్మ సంజ్ఞితమైన పరమ రహస్య వచనాల వల్ల నా మోహం నశించింది.`,
    english: `Arjuna said: By my hearing the instructions you have kindly given me about these most confidential spiritual subjects, my illusion has now been dispelled.`,
    explanation: `Arjuna declares that his delusion has been dispelled by the teaching. This is the student's confirmation that genuine transmission has occurred. The teaching is complete at the intellectual level; what remains is direct experience — which this chapter will provide.`,
    takeaway: `The student's confirmation of received teaching is itself a milestone — now direct experience follows.`,
    tags: ['wisdom', 'devotion']
  },
  '11.2': {
    sanskrit: `भवाप्ययौ हि भूतानां श्रुतौ विस्तरशो मया।
त्वत्तः कमलपत्राक्ष महात्म्यमपि चाव्ययम्॥`,
    telugu: `కమలపత్రాక్షా, భూతాల ఉద్భవ లయాలు మీ నుండి విస్తారంగా వినబడ్డాయి. మీ అవ్యయ మహాత్మ్యం కూడా వినబడింది.`,
    english: `O lotus-eyed one, I have heard from you in detail about the appearance and disappearance of all living entities, as realized by your inexhaustible glories.`,
    explanation: `Arjuna summarizes what he has received: knowledge of cosmic creation and dissolution, understanding of the Divine's inexhaustible glories. He has received the complete teaching at the theoretical level. Now he seeks the experience.`,
    takeaway: `Complete theoretical knowledge prepares the ground for direct experience — theory must become vision.`,
    tags: ['wisdom', 'devotion']
  },
  '11.3': {
    sanskrit: `एवमेतद्यथात्थ त्वमात्मानं परमेश्वर।
द्रष्टुमिच्छामि ते रूपमैश्वरं पुरुषोत्तम॥`,
    telugu: `పరమేశ్వరా, పురుషోత్తమా, మీరు ఆత్మను గురించి చెప్పిన విధంగానే ఉంది. మీ ఐశ్వర్య రూపాన్ని చూడాలని ఇచ్ఛిస్తున్నాను.`,
    english: `O greatest of all personalities, O Supreme Form, though I see you here before me in your actual position, as you have described yourself, I wish to see how you have entered into this cosmic manifestation.`,
    explanation: `'I wish to see' — this is the most important request. Knowing about the Divine is not enough; seeing the Divine directly is the goal. Arjuna asks for vision (darshan) that transcends intellectual understanding. The eye of the heart wants to open.`,
    takeaway: `Knowing about the Divine is not enough — ask to see the Divine directly, with the heart's eye.`,
    tags: ['devotion', 'wisdom']
  },
  '11.4': {
    sanskrit: `मन्यसे यदि तच्छक्यं मया द्रष्टुमिति प्रभो।
योगेश्वर ततो मे त्वं दर्शयात्मानमव्ययम्॥`,
    telugu: `ప్రభో, యోగేశ్వరా, మీరు చూపించగలరని తలిస్తే, అవ్యయమైన మీ ఆత్మను నాకు చూపించండి.`,
    english: `O my Lord, O master of all mystic power, if you think that I am able to behold your cosmic form, O my Lord, O master of all mystic power, then kindly show me that unlimited universal self.`,
    explanation: `'If you think I am able to behold it' — Arjuna's humility. He recognizes that receiving the vision depends on the teacher's grace and the student's readiness. He asks without demanding; he requests without presuming.`,
    takeaway: `Ask for the vision with humility — the teacher's grace and the student's readiness both matter.`,
    tags: ['devotion', 'wisdom']
  },
  '11.5': {
    sanskrit: `श्रीभगवानुवाच
पश्य मे पार्थ रूपाणि शतशोऽथ सहस्रशः।
नानाविधानि दिव्यानि नानावर्णाकृतीनि च॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
పార్థా, నా అనేక రూపాలను చూడు — వందలుగా, వేలుగా. వివిధ రకాలైన, దివ్యమైన, వివిధ వర్ణ ఆకృతులు గలవి.`,
    english: `The Supreme Personality of Godhead said: My dear Arjuna, O son of Pritha, see now my opulences, hundreds of thousands of varied divine and multicolored forms.`,
    explanation: `'See!' — the teaching shifts from description to direct vision. Krishna now invites Arjuna into the experience rather than the explanation. The teacher offers the student the most precious gift: direct experience of the Reality that all teachings merely describe.`,
    takeaway: `The teacher now gives direct experience — the most precious gift, beyond all explanation.`,
    tags: ['wisdom', 'devotion']
  },
  '11.6': {
    sanskrit: `पश्यादित्यान्वसून्रुद्रानश्विनौ मरुतस्तथा।
बहून्यदृष्टपूर्वाणि पश्याश्चर्याणि भारत॥`,
    telugu: `భరతవంశీయుడా, ఆదిత్యులను, వసువులను, రుద్రులను, అశ్వినులను, మరుత్తులను చూడు. ఇంతకుపూర్వు చూడని అనేక ఆశ్చర్యాలు చూడు.`,
    english: `O best of the Bharatas, see here the different manifestations of Adityas, Vasus, Rudras, Asvini-kumaras and all the other demigods. Behold the many wonderful things which no one has ever seen or heard of before.`,
    explanation: `'See the wonders no one has ever seen before' — Arjuna is being offered something unprecedented. The vision that will be granted transcends all previous spiritual experience. This is the privilege of the devoted student who has genuinely received the teaching.`,
    takeaway: `The devoted student who receives genuine teaching is offered unprecedented spiritual experience.`,
    tags: ['devotion', 'wisdom']
  },
  '11.7': {
    sanskrit: `इहैकस्थं जगत्कृत्स्नं पश्याद्य सचराचरम्।
मम देहे गुडाकेश यच्चान्यद्द्रष्टुमिच्छसि॥`,
    telugu: `గుడాకేశా, నా దేహంలో ఒకే చోట నిలిచిన సమస్త సచరాచర జగత్తును నేడు చూడు. మరియు ఏ వేరే దాన్ని చూడాలని ఉందో అది.`,
    english: `O Arjuna, whatever you wish to see, behold at once in this body of mine. This universal form can show you everything that you now desire to see and everything that you may want to see in the future.`,
    explanation: `See the entire universe — moving and unmoving — in one place, in one body. This is the ultimate non-dual vision: not many things in many places but the One in everything and everything in the One. The cosmic form makes the non-dual visible.`,
    takeaway: `The cosmic form makes the non-dual visible: the entire universe in one body, everything in the One.`,
    tags: ['wisdom', 'soul']
  },
  '11.8': {
    sanskrit: `न तु मां शक्यसे द्रष्टुमनेनैव स्वचक्षुषा।
दिव्यं ददामि ते चक्षुः पश्य मे योगमैश्वरम्॥`,
    telugu: `కానీ నీ స్వంత కళ్ళతో నన్ను చూడలేవు. దివ్య చక్షువులు ఇస్తున్నాను — నా ఐశ్వర్య యోగాన్ని చూడు.`,
    english: `But you cannot see me with your present eyes. Therefore I give you divine eyes. Behold my mystic opulence.`,
    explanation: `Divine eyes — supra-sensory perception — are given to Arjuna to see what ordinary eyes cannot. This is the teaching about direct spiritual experience: it requires a new kind of seeing, not just more acute physical vision. The 'eye' of the heart must open.`,
    takeaway: `Spiritual experience requires a new kind of seeing — the eye of the heart, beyond physical perception.`,
    tags: ['wisdom', 'devotion']
  },
  '11.9': {
    sanskrit: `सञ्जय उवाच
एवमुक्त्वा ततो राजन्महायोगेश्वरो हरिः।
दर्शयामास पार्थाय परमं रूपमैश्वरम्॥`,
    telugu: `సంజయుడు పలికెను:
రాజా, ఇలా చెప్పి, మహాయోగేశ్వరుడు హరి (కృష్ణుడు) పార్థునికి పరమ ఐశ్వర్య రూపాన్ని చూపించాడు.`,
    english: `Sanjaya said: O King, having spoken thus, the Supreme Lord of all mystic power, the Personality of Godhead, displayed his universal form to Arjuna.`,
    explanation: `Sanjaya narrates the moment: the Supreme, the Lord of all mystic power, displays the universal form. This is the hinge of the entire Gita — the moment when philosophical teaching becomes direct divine revelation. The teaching is validated by experience.`,
    takeaway: `The philosophical teaching culminates in direct revelation — this is the hinge of the entire Gita.`,
    tags: ['wisdom', 'devotion']
  },
  '11.10': {
    sanskrit: `अनेकवक्त्रनयनमनेकाद्भुतदर्शनम्।
अनेकदिव्याभरणं दिव्यानेकोद्यतायुधम्॥`,
    telugu: `అనేక ముఖాలు, నయనాలు, అనేక అద్భుత దర్శనాలు, అనేక దివ్య ఆభరణాలు, అనేక దివ్య ఆయుధాలు ఎత్తిన.`,
    english: `...with many mouths and eyes, with many wondrous sights, with many divine ornaments, with many divine weapons raised.`,
    explanation: `Countless mouths, countless eyes, countless wonders, countless divine ornaments and weapons. 'Countless' is the key word — the Infinite cannot be counted. The vision breaks every concept of limitation. The mind strains to hold what cannot be contained.`,
    takeaway: `The cosmic form breaks every concept of limitation — countless, beyond all counting.`,
    tags: ['wisdom', 'truth']
  },
  '11.11': {
    sanskrit: `दिव्यमाल्याम्बरधरं दिव्यगन्धानुलेपनम्।
सर्वाश्चर्यमयं देवमनन्तं विश्वतोमुखम्॥`,
    telugu: `దివ్య మాల్య అంబర ధారి, దివ్య గంధ అనులేపన, సర్వాశ్చర్యమయుడు, అనంతుడు, విశ్వతోముఖుడైన దేవుని.`,
    english: `...wearing divine garlands and clothes, anointed with divine fragrances, all-wonderful, all-glorious, infinite, and the faces turned everywhere.`,
    explanation: `Adorned with divine garlands and garments, fragrant with divine scent, all-wonderful, all-glorious, infinite, face turned everywhere simultaneously. The cosmic form is not just vast but beautiful — adorned with divine excellence in every dimension.`,
    takeaway: `The cosmic form is not just vast but supremely beautiful — adorned with divine excellence in all dimensions.`,
    tags: ['wisdom', 'truth']
  },
  '11.12': {
    sanskrit: `दिवि सूर्यसहस्रस्य भवेद्युगपदुत्थिता।
यदि भाः सदृशी सा स्याद्भासस्तस्य महात्मनः॥`,
    telugu: `ఆకాశంలో వేయి సూర్యుల ఒకేసారి ఉదయించే కాంతి ఉంటే, ఆ మహాత్ముని కాంతితో సమానంగా ఉంటుంది.`,
    english: `If hundreds of thousands of suns were to rise at once into the sky, their radiance might resemble the effulgence of the Supreme Person in that universal form.`,
    explanation: `A thousand suns rising simultaneously — yet even this unimaginable brilliance is only a comparison to, not an equation with, the cosmic form's radiance. No natural phenomenon can fully represent the Infinite's luminosity.`,
    takeaway: `A thousand suns only approximate the cosmic form's brilliance — the Infinite exceeds every comparison.`,
    tags: ['wisdom', 'truth']
  },
  '11.13': {
    sanskrit: `तत्रैकस्थं जगत्कृत्स्नं प्रविभक्तमनेकधा।
अपश्यद्देवदेवस्य शरीरे पाण्डवस्तदा॥`,
    telugu: `అప్పుడు పాండవుడు దేవదేవుని శరీరంలో అనేక విధాలుగా విభక్తమైన సమస్త జగత్తు ఒకే స్థానంలో చూశాడు.`,
    english: `There, in the body of the God of gods, Pandava then saw the whole universe resting in one place, although divided into many, many thousands.`,
    explanation: `The universe — divided into countless forms — resting in one place, in one body. This is direct perception of non-duality: the many in the One, the One pervading the many. This vision transforms everything — once seen, it cannot be unseen.`,
    takeaway: `The many in the One, the One pervading the many — this direct vision transforms everything.`,
    tags: ['wisdom', 'soul']
  },
  '11.14': {
    sanskrit: `ततः स विस्मयाविष्टो हृष्टरोमा धनञ्जयः।
प्रणम्य शिरसा देवं कृताञ्जलिरभाषत॥`,
    telugu: `అప్పుడు ధనంజయుడు విస్మయావిష్టుడై, రోమాంచితుడై, దేవునకు శిరస్సు వంచి నమస్కరించి, అంజలి ఘటించి పలికాడు.`,
    english: `Then, filled with wonder and his hairs standing on end, Dhananjaya bowed his head to offer obeisances and with folded hands began to pray to the Supreme Lord.`,
    explanation: `Arjuna is overwhelmed with wonder — hair standing on end, head bowed in instinctive reverence. This is the body's response to genuine encounter with the Infinite: involuntary awe, spontaneous reverence. The teaching has moved from the head to the whole person.`,
    takeaway: `Genuine encounter with the Infinite produces involuntary awe and spontaneous reverence.`,
    tags: ['devotion', 'wisdom']
  },
  '11.15': {
    sanskrit: `अर्जुन उवाच
पश्यामि देवांस्तव देव देहे
सर्वांस्तथा भूतविशेषसंघान्।
ब्रह्माणमीशं कमलासनस्थम
ऋषींश्च सर्वानुरगांश्च दिव्यान्॥`,
    telugu: `అర్జునుడు పలికెను:
దేవా, మీ దేహంలో సమస్త దేవతలను, సమస్త భూత విశేష సంఘాలను, కమలాసన స్థితుడైన బ్రహ్మను, ఈశుని, ఋషులందరను, దివ్య సర్పాలను చూస్తున్నాను.`,
    english: `Arjuna said: My dear Lord Krishna, I see assembled in your body all the gods and various other living entities. I see Brahma sitting on the lotus flower, as well as Lord Shiva and all the sages and divine serpents.`,
    explanation: `Arjuna begins his description: all the gods, Brahma on his lotus, Shiva, all the sages, divine serpents — all together in one vision. The cosmic form contains every religious tradition's sacred beings within one encompassing Reality.`,
    takeaway: `The cosmic form contains every sacred being from every tradition — all within one encompassing Reality.`,
    tags: ['wisdom', 'devotion']
  },
  '11.16': {
    sanskrit: `अनेकबाहूदरवक्त्रनेत्रं
पश्यामि त्वां सर्वतोऽनन्तरूपम्।
नान्तं न मध्यं न पुनस्तवादिं
पश्यामि विश्वेश्वर विश्वरूप॥`,
    telugu: `విశ్వేశ్వరా, విశ్వరూపా, అనేక బాహువులు, ఉదరాలు, ముఖాలు, నేత్రాలతో అన్ని వైపులా అనంత రూపాన్ని చూస్తున్నాను. మీ అంతం, మధ్యం, ఆదీ చూడడం లేదు.`,
    english: `O Lord of the universe, O universal form, I see in your body many, many arms, bellies, mouths and eyes, expanded everywhere, without limit. I see in you no end, no middle and no beginning.`,
    explanation: `'No end, no middle, no beginning' — the Infinite has no edges. Every attempt to locate the boundary of the cosmic form fails. This is the direct perception of infinitude — not a philosophical position but an overwhelming experiential fact.`,
    takeaway: `Direct perception of infinitude: no end, no middle, no beginning — overwhelming experiential fact.`,
    tags: ['wisdom', 'soul']
  },
  '11.17': {
    sanskrit: `किरीटिनं गदिनं चक्रिणं च
तेजोराशिं सर्वतो दीप्तिमन्तम्।
पश्यामि त्वां दुर्निरीक्ष्यं समन्ता
द्दीप्तानलार्कद्युतिमप्रमेयम्॥`,
    telugu: `కిరీటం, గద, చక్రం ధరించిన, తేజోరాశిగా సర్వత్ర ప్రజ్వలించే, ప్రజ్వలిత అగ్ని సూర్య కాంతి గల అప్రమేయుని అన్ని వైపుల చూడడం కష్టంగా ఉంది.`,
    english: `I see you with your crown, club and disc, but it is difficult to look at you because you are blazing on all sides with an immeasurable effulgence, like the blazing fire or sun.`,
    explanation: `The cosmic form blazes with a light that makes it almost impossible to look at directly — like looking at the sun. Truth at its full intensity cannot be directly perceived by unprepared consciousness. Preparation through practice is what makes the vision bearable and meaningful.`,
    takeaway: `Encountering the Infinite at full intensity overwhelms unprepared consciousness — preparation through practice matters.`,
    tags: ['wisdom', 'truth']
  },
  '11.18': {
    sanskrit: `त्वमक्षरं परमं वेदितव्यं
त्वमस्य विश्वस्य परं निधानम्।
त्वमव्ययः शाश्वतधर्मगोप्ता
सनातनस्त्वं पुरुषो मतो मे॥`,
    telugu: `నువ్వు తెలుసుకోవలసిన పరమ అక్షరం. నువ్వు ఈ విశ్వానికి పరమ నిధానం. నువ్వు అవ్యయుడు, శాశ్వత ధర్మ గోప్త. నువ్వే సనాతన పురుషుడని నా మతం.`,
    english: `You are the supreme primal objective. You are the ultimate resting place of all this universe. You are inexhaustible, and you are the oldest. You are the maintainer of the eternal religion, the Personality of Godhead. This is my opinion.`,
    explanation: `Arjuna's recognition: the imperishable that must be known, the ultimate resting place of the universe, inexhaustible, the oldest, the protector of eternal dharma, the eternal Person. These titles express complete recognition of the Divine's true nature.`,
    takeaway: `Complete recognition of the Divine's nature emerges in the presence of the cosmic form.`,
    tags: ['wisdom', 'devotion']
  },
  '11.19': {
    sanskrit: `अनादिमध्यान्तमनन्तवीर्य
मनन्तबाहुं शशिसूर्यनेत्रम्।
पश्यामि त्वां दीप्तहुताशवक्त्रं
स्वतेजसा विश्वमिदं तपन्तम्॥`,
    telugu: `ఆది మధ్యాంతాలు లేనివాని, అనంత వీర్యుని, అనంత బాహువులతో, చంద్ర సూర్యాలు నేత్రాలుగా, జ్వలించే అగ్ని ముఖంతో, స్వ తేజసు చే ఈ విశ్వాన్ని తపింపజేస్తున్నవాని చూస్తున్నాను.`,
    english: `Without beginning, middle or end, your glory is unlimited. You have numberless arms, and the sun and moon are your eyes. I see you with blazing fire coming forth from your mouth, burning this entire universe by your own radiance.`,
    explanation: `The cosmic form burning the universe with its own radiance — the fire of consciousness consuming everything. Sun and moon as the eyes of the Infinite suggest that all light is divine perception. The cosmos is the Divine seeing itself.`,
    takeaway: `All light is divine perception — the cosmos is the Divine seeing itself.`,
    tags: ['wisdom', 'soul']
  },
  '11.20': {
    sanskrit: `द्यावापृथिव्योरिदमन्तरं हि
व्याप्तं त्वयैकेन दिशश्च सर्वाः।
दृष्ट्वाद्भुतं रूपमुग्रं तवेदं
लोकत्रयं प्रव्यथितं महात्मन्॥`,
    telugu: `మహాత్మా, ద్యావాపృథివుల మధ్య ఉన్నది మరియు అన్ని దిక్కులు నువ్వే ఒక్కడు వ్యాపించావు. మీ ఈ అద్భుత ఉగ్ర రూపం చూసి మూడు లోకాలు అదిరిపడుతున్నాయి.`,
    english: `Although you are one, you spread throughout the sky and the planets and all space between. O great one, seeing this wondrous and terrible form, all the planetary systems are perturbed.`,
    explanation: `The entire space between heaven and earth filled with one Presence — all worlds trembling at the sight. The cosmic form is simultaneously wondrous and terrible. Wonder and terror are two faces of the encounter with genuine Infinity. Both are appropriate responses.`,
    takeaway: `Wonder and terror are both appropriate responses to genuine encounter with the Infinite.`,
    tags: ['wisdom', 'soul']
  },
  '11.21': {
    sanskrit: `अमी हि त्वां सुरसंघा विशन्ति
केचिद्भीताः प्राञ्जलयो गृणन्ति।
स्वस्तीत्युक्त्वा महर्षिसिद्धसंघाः
स्तुवन्ति त्वां स्तुतिभिः पुष्कलाभिः॥`,
    telugu: `దేవ సమూహాలు మీలో ప్రవేశిస్తున్నారు. కొందరు భయంతో అంజలి ఘటించి స్తుతిస్తున్నారు. మహర్షి సిద్ధ సమూహాలు 'స్వస్తి' అని పలికి అనేక స్తుతులతో కీర్తిస్తున్నారు.`,
    english: `All the hosts of demigods are surrendering before you and entering into you. Some of them, very much afraid, are offering prayers with folded hands. Hosts of great sages and perfected beings, crying 'All peace', are praying to you by singing the Vedic hymns.`,
    explanation: `The gods themselves enter into the cosmic form, some trembling, some praying. Even the most exalted beings in the universe are overwhelmed. If the gods tremble before the Infinite, what should the human attitude be? Profound humility and awe.`,
    takeaway: `If the gods themselves tremble before the Infinite, profound humility and awe are the human's right response.`,
    tags: ['wisdom', 'devotion']
  },
  '11.22': {
    sanskrit: `रुद्रादित्या वसवो ये च साध्या
विश्वेऽश्विनौ मरुतश्चोष्मपाश्च।
गन्धर्वयक्षासुरसिद्धसंघा
वीक्षन्ते त्वां विस्मिताश्चैव सर्वे॥`,
    telugu: `రుద్రులు, ఆదిత్యులు, వసువులు, సాధ్యులు, విశ్వేదేవులు, అశ్వినులు, మరుత్తులు, ఉష్మపులు, గంధర్వులు, యక్షులు, అసురులు, సిద్ధ సంఘాలు — వారందరూ ఆశ్చర్యంతో మిమ్మల్ని చూస్తున్నారు.`,
    english: `All the various manifestations of Lord Shiva, the Adityas, the Vasus, the Sadhyas, the Visvedevas, the two Asvins, the Maruts, the forefathers, the Gandharvas, the Yakshas, the Asuras, and the perfected demigods are beholding you in wonder.`,
    explanation: `All categories of divine beings — from the Rudras to the Yakshas to the Siddhas — behold the cosmic form in wonder. Every type of celestial being is included in this vision of universal awe. Even those who thought themselves powerful are overwhelmed.`,
    takeaway: `Even the most powerful celestial beings are overwhelmed by the cosmic form — no finite being exceeds the Infinite.`,
    tags: ['wisdom', 'truth']
  },
  '11.23': {
    sanskrit: `रूपं महत्ते बहुवक्त्रनेत्रं
महाबाहो बहुबाहूरुपादम्।
बहूदरं बहुदंष्ट्राकरालं
दृष्ट्वा लोकाः प्रव्यथितास्तथाहम्॥`,
    telugu: `మహాబాహో, అనేక ముఖ నేత్రాలు, అనేక బాహువులు తొడలు పాదాలు, అనేక ఉదరాలు, అనేక భయంకర దంష్ట్రలతో మీ మహారూపాన్ని చూసి లోకాలు అదిరిపడుతున్నాయి. నేను కూడా.`,
    english: `O mighty-armed one, all the planets with their demigods are disturbed at seeing your great form, with its many faces, eyes, arms, thighs, legs, and bellies and your many terrible teeth; and as they are disturbed, so am I.`,
    explanation: `'And so am I' — Arjuna counts himself among those disturbed. He does not pretend to be unshaken by the vision. Honesty about one's experience in the face of the Infinite is itself a form of integrity. The great student is honest about their limits.`,
    takeaway: `Honesty about one's experience in the face of the Infinite is itself a form of integrity.`,
    tags: ['wisdom', 'truth']
  },
  '11.24': {
    sanskrit: `नभःस्पृशं दीप्तमनेकवर्णं
व्यात्ताननं दीप्तविशालनेत्रम्।
दृष्ट्वा हि त्वां प्रव्यथितान्तरात्मा
धृतिं न विन्दामि शमं च विष्णो॥`,
    telugu: `విష్ణో, ఆకాశాన్ని తాకే, దీప్తమైన, అనేకవర్ణమైన, తెరుచుకున్న ముఖాలతో, దీప్త విశాల నేత్రాలతో ఉన్న మిమ్మల్ని చూసి అంతరాత్మ వ్యథిల్లి, ధైర్యం, శాంతి పొందలేకున్నాను.`,
    english: `O all-pervading Vishnu, seeing you with your many radiant colors touching the sky, your gaping mouths, and your great glowing eyes, my mind is perturbed with fear. I can no longer maintain my steadiness or equilibrium of mind.`,
    explanation: `Arjuna's inner state: mind perturbed, steadiness lost. The encounter with genuine Infinity is not comfortable or manageable. It breaks through all our prepared frameworks and leaves us unable to maintain our usual mental equilibrium. This discomfort is part of the gift.`,
    takeaway: `The genuine encounter with Infinity breaks through our prepared frameworks — the discomfort is part of the gift.`,
    tags: ['wisdom', 'truth']
  },
  '11.25': {
    sanskrit: `दंष्ट्राकरालानि च ते मुखानि
दृष्ट्वैव कालानलसन्निभानि।
दिशो न जाने न लभे च शर्म
प्रसीद देवेश जगन्निवास॥`,
    telugu: `కాలాగ్ని సమానమైన మీ భయంకర దంష్ట్రాయుత ముఖాలను చూసి దిక్కులు తెలియడం లేదు. శాంతి పొందడం లేదు. దేవేశా, జగన్నివాసా, ప్రసన్నుడవు అవ్వు.`,
    english: `O Lord of lords, O refuge of the worlds, please be gracious to me. I cannot keep my balance seeing thus your blazing deathlike faces and awful teeth. In all directions I am bewildered.`,
    explanation: `Arjuna is completely disoriented — the directions themselves are lost. This total disorientation is what genuine encounter with the Infinite does: all our usual coordinates for understanding break down. Only the plea for grace remains.`,
    takeaway: `When all coordinates break down before the Infinite, the only possibility is a plea for grace.`,
    tags: ['devotion', 'wisdom']
  },
  '11.26': {
    sanskrit: `अमी च त्वां धृतराष्ट्रस्य पुत्राः
सर्वे सहैवावनिपालसंघैः।
भीष्मो द्रोणः सूतपुत्रस्तथासौ
सहास्मदीयैरपि योधमुख्यैः॥`,
    telugu: `ధృతరాష్ట్రుని పుత్రులందరూ, రాజ సమూహాలతో సహా, భీష్ముడు, ద్రోణుడు, కర్ణుడు, మరియు మన పక్ష ముఖ్య యోధులు కూడా.`,
    english: `All the sons of Dhritarashtra along with their allied kings, and Bhishma, Drona, Karna — and our chief soldiers also.`,
    explanation: `Arjuna sees the specific warriors — Bhishma, Drona, Karna — whom he feared to fight, all being drawn into the cosmic form. The personal drama of the Gita's opening is here transformed into cosmic perspective. The individuals are part of the larger unfolding.`,
    takeaway: `The personal drama of the Gita is here shown as part of the larger cosmic unfolding.`,
    tags: ['wisdom', 'truth']
  },
  '11.27': {
    sanskrit: `वक्त्राणि ते त्वरमाणा विशन्ति
दंष्ट्राकरालानि भयानकानि।
केचिद्विलग्ना दशनान्तरेषु
सन्दृश्यन्ते चूर्णितैरुत्तमाङ्गैः॥`,
    telugu: `మీ భయంకర దంష్ట్రలతో భయాన్ని కలిగించే ముఖాలలో వేగంగా ప్రవేశిస్తున్నారు. కొందరు దంతాల మధ్య చూర్ణితమైన శిరస్సులతో చిక్కుకున్నారు.`,
    english: `All the sons of Dhritarashtra, along with their allied kings, and Bhishma, Drona, Karna, and all our soldiers are rushing into your mouths, their heads smashed by your terrible teeth.`,
    explanation: `The warriors rush into the cosmic form's mouths, heads smashed between the teeth. This is the vision of Time consuming all things — a terrifying image of inevitable dissolution. Whatever exists must eventually be consumed by the inexorable passage of time.`,
    takeaway: `Time consumes all things — the cosmic form's terrifying mouths are the vision of inevitable dissolution.`,
    tags: ['wisdom', 'truth']
  },
  '11.28': {
    sanskrit: `यथा नदीनां बहवोऽम्बुवेगाः
समुद्रमेवाभिमुखाः द्रवन्ति।
तथा तवामी नरलोकवीरा
विशन्ति वक्त्राण्यभिविज्वलन्ति॥`,
    telugu: `నదుల అనేక నీటి ప్రవాహాలు సముద్రాభిముఖంగా పరుగెత్తినట్లు, ఈ నరలోక వీరులు మీ జ్వలించే ముఖాలలో ప్రవేశిస్తున్నారు.`,
    english: `As the many waves of the rivers flow into the ocean, so do all these great warriors enter blazing into your mouths.`,
    explanation: `As rivers inevitably flow to the sea, warriors inevitably enter the cosmic mouths. The river cannot resist the sea; the warriors cannot resist cosmic time. This image of inevitable dissolution is not depressing but liberating: surrender to what is inevitable is wisdom.`,
    takeaway: `Surrender to what is inevitable is wisdom — resist the cosmic flow and suffer; flow with it and find peace.`,
    tags: ['wisdom', 'truth']
  },
  '11.29': {
    sanskrit: `यथा प्रदीप्तं ज्वलनं पतंगा
विशन्ति नाशाय समृद्धवेगाः।
तथैव नाशाय विशन्ति लोकाः
तवापि वक्त्राणि समृद्धवेगाः॥`,
    telugu: `ప్రజ్వలిత జ్వాలలో పతంగాలు నాశాన్ని కోరి పూర్ణ వేగంతో ప్రవేశించినట్లు, అలాగే ఈ లోకాలు కూడా నాశాన్ని కోరి మీ ముఖాలలో పూర్ణ వేగంతో ప్రవేశిస్తున్నాయి.`,
    english: `As moths dash to destruction in a blazing fire, so also these people are rushing into your mouths to be destroyed.`,
    explanation: `Moths rushing to the flame — the classic image of beings drawn to their own destruction. Attached to what is impermanent, driven by what brings their dissolution. The teaching: don't be the moth drawn to the flame of impermanent pleasures.`,
    takeaway: `Don't be the moth drawn to the flame — attachment to impermanence leads to destruction.`,
    tags: ['wisdom', 'truth']
  },
  '11.30': {
    sanskrit: `लेलिहान्वग्रसमानः समन्ता
ल्लोकान्समग्रान्वदनैर्ज्वलद्भिः।
तेजोभिरापूर्य जगत्समग्रं
भासस्तवोग्राः प्रतपन्ति विष्णो॥`,
    telugu: `విష్ణో, జ్వలించే ముఖాలతో అన్ని వైపుల లోకాలన్నింటిని నాలుకలు చాపి మ్రింగుతున్నావు. మీ ఉగ్ర తేజస్సులు సమగ్ర జగత్తు నింపి తపింపజేస్తున్నాయి.`,
    english: `O Vishnu, I see you devouring all people from all sides with your flaming mouths. Covering all the universe with your effulgence, you are manifest with terrible, scorching rays.`,
    explanation: `The cosmic form devouring all with flaming mouths, filling the universe with scorching radiance. This is the vision of cosmic dissolution — the Infinite consuming what it once created. Creation and dissolution are two faces of the same cosmic activity.`,
    takeaway: `Creation and dissolution are two faces of the same cosmic activity — the Infinite creates and consumes.`,
    tags: ['wisdom', 'truth']
  },
  '11.31': {
    sanskrit: `आख्याहि मे को भवानुग्ररूपो
नमोऽस्तु ते देववर प्रसीद।
विज्ञातुमिच्छामि भवन्तमाद्यं
न हि प्रजानामि तव प्रवृत्तिम्॥`,
    telugu: `దేవ వర, నాకు మీరు ఎవరో చెప్పండి — ఈ ఉగ్ర రూపుడు. మీకు నమస్కారం. ప్రసన్నుడవు అవ్వు. ఆదిభూతుడైన మిమ్మల్ని తెలుసుకోవాలని ఇచ్ఛిస్తున్నాను. మీ ప్రవర్తన నాకు తెలియడం లేదు.`,
    english: `O lord of lords, so fierce of form, please tell me who you are. I offer my obeisances unto you; please be gracious to me. You are the primal Lord. I want to know about you, for I do not know what your mission is.`,
    explanation: `'Who are you?' — the most fundamental question. Even after all the Gita's teaching, confronted with the cosmic form, Arjuna must ask again from a deeper place. The question now comes from the whole person, not just the intellect.`,
    takeaway: `The encounter with the cosmic form drives the most fundamental question — who are you? — from the whole person.`,
    tags: ['wisdom', 'devotion']
  },
  '11.32': {
    sanskrit: `श्रीभगवानुवाच
कालोऽस्मि लोकक्षयकृत्प्रवृद्धो
लोकान्समाहर्तुमिह प्रवृत्तः।
ऋतेऽपि त्वां न भविष्यन्ति सर्वे
येऽवस्थिताः प्रत्यनीकेषु योधाः॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
నేను లోకాలను క్షయించే కాలం. లోకాలను సంహరించడానికి ప్రవర్తించాను. నీవు లేకపోయినా, ఎదురు సైన్యాలలో ఉన్న యోధులందరూ ఉండరు.`,
    english: `The Supreme Personality of Godhead said: Time I am, the great destroyer of the worlds, and I have come here to destroy all people. With the exception of you, all the soldiers here on both sides will be slain.`,
    explanation: `'I am Time, the destroyer of worlds' — the most famous verse in the chapter. Time does not destroy because it is evil but because the nature of the manifest is to dissolve. The warriors are already destroyed by cosmic time; Arjuna is just the occasion.`,
    takeaway: `Time destroys not from malice but from the nature of manifestation — all that arises must dissolve.`,
    tags: ['wisdom', 'truth']
  },
  '11.33': {
    sanskrit: `तस्मात्त्वमुत्तिष्ठ यशो लभस्व
जित्वा शत्रून्भुङ्क्ष्व राज्यं समृद्धम्।
मयैवैते निहताः पूर्वमेव
nimittamātram bhava savyasācin॥`,
    telugu: `కాబట్టి నువ్వు లేచి, యశో పొంది, శత్రువులను జయించి, సమృద్ధ రాజ్యాన్ని అనుభవించు. వారు ముందే నాచే చంపబడ్డారు. సవ్యసాచీ, నువ్వు కేవలం నిమిత్తమాత్రుడవు అవ్వు.`,
    english: `Therefore get up. Prepare to fight and win glory. Conquer your enemies and enjoy a flourishing kingdom. They are already put to death by my arrangement, and you, O Savyasachi, can be but an instrument in the fight.`,
    explanation: `'Be the instrument' — the most liberating instruction. The outcome is already determined by cosmic order; Arjuna's role is to play his part fully. Release of outcome anxiety comes from recognizing that we are instruments of a larger unfolding.`,
    takeaway: `We are instruments of a larger cosmic unfolding — release outcome anxiety and play your part fully.`,
    tags: ['action', 'wisdom']
  },
  '11.34': {
    sanskrit: `द्रोणं च भीष्मं च जयद्रथं च
कर्णं तथान्यानपि योधवीरान्।
मया हतांस्त्वं जहि मा व्यथिष्ठा
युध्यस्व जेतासि रणे सपत्नान्॥`,
    telugu: `ద్రోణుని, భీష్ముని, జయద్రథుని, కర్ణుని, ఇతర వీర యోధులను — నాచే చంపబడిన వారిని నువ్వు చంపు. వ్యథ పడకు. యుద్ధం చేయి, రణంలో శత్రువులను జయిస్తావు.`,
    english: `Drona, Bhishma, Jayadratha, Karna, and the other great warriors have already been destroyed by me. Therefore, kill them and do not be disturbed. Simply fight, and you will vanquish your enemies in battle.`,
    explanation: `The specific warriors are named: Drona, Bhishma, Jayadratha, Karna. Already destroyed by cosmic time. Arjuna's task: simply fight. This is the ultimate teaching about non-attachment to results — act as the instrument while the larger order unfolds.`,
    takeaway: `Act as the instrument of dharma while the cosmic order unfolds — this is the ultimate karma yoga.`,
    tags: ['action', 'duty']
  },
  '11.35': {
    sanskrit: `सञ्जय उवाच
एतच्छ्रुत्वा वचनं केशवस्य
कृताञ्जलिर्वेपमानः किरीटी।
नमस्कृत्वा भूय एवाह कृष्णं
सगद्गदं भीतभीतः प्रणम्य॥`,
    telugu: `సంజయుడు పలికెను:
కేశవుని ఈ మాటలు విని, కిరీటి (అర్జునుడు) వణుకుతూ అంజలి ఘటించి, నమస్కరించి, మళ్ళీ భయభీతుడై గద్గదంగా కృష్ణుడికి పలికాడు.`,
    english: `Sanjaya said: O King, having heard that speech of Keshava, the crowned Arjuna, trembling, joined his palms in obeisance, and bowed down, and with great difficulty spoke as follows in a faltering voice.`,
    explanation: `Arjuna trembles, bows, speaks in a faltering voice. This is the body-language of genuine awe — not performed reverence but involuntary response to the overwhelming. The student who has been transformed cannot speak normally; only the prayer of a broken-open heart remains.`,
    takeaway: `The student transformed by the cosmic vision cannot speak normally — only the prayer of a broken-open heart.`,
    tags: ['devotion', 'wisdom']
  },
  '11.36': {
    sanskrit: `अर्जुन उवाच
स्थाने हृषीकेश तव प्रकीर्त्या
जगत्प्रहृष्यत्यनुरज्यते च।
रक्षांसि भीतानि दिशो द्रवन्ति
सर्वे नमस्यन्ति च सिद्धसंघाः॥`,
    telugu: `అర్జునుడు పలికెను:
హృషీకేశా, మీ కీర్తనతో జగత్తు ఆనందపడుతుంది, అనురక్తమవుతుంది. రాక్షసులు భయపడి అన్ని దిక్కులు పరుగెత్తుతున్నారు. సిద్ధ సంఘాలు నమస్కరిస్తున్నారు.`,
    english: `Arjuna said: O master of the senses, the world becomes joyful upon hearing your name, and thus everyone becomes attached to you. Although the perfected beings offer you their respectful homage, the demons are afraid, and they flee here and there.`,
    explanation: `The world rejoices at the Divine's glorification; demons flee in all directions; the perfected beings bow in reverence. The same Reality produces opposite responses depending on the quality of the one encountering it.`,
    takeaway: `The same Reality produces opposite responses — joy in the devoted, terror in the opposed.`,
    tags: ['wisdom', 'devotion']
  },
  '11.37': {
    sanskrit: `कस्माच्च ते न नमेरन्महात्मन्
गरीयसे ब्रह्मणोऽप्यादिकर्त्रे।
अनन्त देवेश जगन्निवास
त्वमक्षरं सदसत्तत्परं यत्॥`,
    telugu: `మహాత్మా, బ్రహ్మ కంటే గురువైన, ఆది కర్తైన మీకు ఎందుకు నమస్కరించరు? అనంతా, దేవేశా, జగన్నివాసా, నువ్వు అక్షరం, సత్ అసత్ మరియు వాటికి పరమైనది.`,
    english: `And why should they not offer their homage to you, O great one, greater than Brahma himself? You are the original master, O infinite one, O God of gods, O refuge of the universe! You are the invincible source, the cause of all causes, transcendental to this material manifestation.`,
    explanation: `Why should not everything bow to you — greater than even Brahma, the original master, infinite, God of gods, refuge of all, the imperishable that transcends even the categories of sat (being) and asat (non-being)? These titles attempt to express the inexpressible.`,
    takeaway: `These titles for the Divine attempt the impossible — to express the inexpressible through accumulated approximations.`,
    tags: ['wisdom', 'devotion']
  },
  '11.38': {
    sanskrit: `त्वमादिदेवः पुरुषः पुराणस्
त्वमस्य विश्वस्य परं निधानम्।
वेत्तासि वेद्यं च परं च धाम
त्वया ततं विश्वमनन्तरूप॥`,
    telugu: `నువ్వు ఆది దేవుడు, పురాతన పురుషుడు, ఈ విశ్వానికి పరమ నిధానం. నువ్వు జ్ఞాత, జ్ఞేయం, పరమ ధామం. అనంత రూపా, ఈ విశ్వం మీ ద్వారా వ్యాపించి ఉంది.`,
    english: `You are the original Personality of Godhead, the oldest, the ultimate sanctuary of this manifested cosmic world. You are the knower of everything, and you are all that is knowable. You are the supreme refuge, above the material modes. This whole cosmic manifestation is pervaded by you.`,
    explanation: `The Knower, the Knowable, and the Supreme Abode are all the Divine — the knower-known duality itself dissolves in the Divine's presence. All three — subject, object, and the relationship between them — exist within the one Reality.`,
    takeaway: `Knower, known, and the act of knowing all dissolve into the one Divine Reality.`,
    tags: ['wisdom', 'soul']
  },
  '11.39': {
    sanskrit: `वायुर्यमोऽग्निर्वरुणः शशाङ्कः
प्रजापतिस्त्वं प्रपितामहश्च।
नमो नमस्तेऽस्तु सहस्रकृत्वः
पुनश्च भूयोऽपि नमो नमस्ते॥`,
    telugu: `నువ్వు వాయువు, యముడు, అగ్ని, వరుణుడు, చంద్రుడు, ప్రజాపతి, ప్రపితామహుడు. మీకు వేయి పర్యాయాలు నమస్కారం. మళ్ళీ మళ్ళీ నమస్కారం.`,
    english: `You are air, and you are the supreme controller! You are fire, you are water, and you are the moon! You are Brahma, the first living creature, and you are the great-grandfather. I therefore offer my respectful obeisances unto you a thousand times, and again and yet again!`,
    explanation: `'A thousand times' is an expression of the inadequacy of any number of bows before the Infinite. No finite act of reverence is commensurate with the Infinite. Yet the attempt itself is what counts — the offering of the whole self in the gesture of bowing.`,
    takeaway: `No finite act of reverence is commensurate with the Infinite — yet the attempt itself is what counts.`,
    tags: ['devotion', 'wisdom']
  },
  '11.40': {
    sanskrit: `नमः पुरस्तादथ पृष्ठतस्ते
नमोऽस्तु ते सर्वत एव सर्व।
अनन्तवीर्यामितविक्रमस्त्वं
सर्वं समाप्नोषि ततोऽसि सर्वः॥`,
    telugu: `ముందు నుండి నమస్కారం, వెనుక నుండి నమస్కారం. అన్ని వైపుల నుండి నమస్కారం. అనంత వీర్యా, అమిత విక్రమా — నువ్వు సర్వాన్ని సమాపించావు కాబట్టి సర్వుడవు.`,
    english: `Obeisances to you from the front, from behind, and from all sides! O unbounded power, you are the master of limitless might! You are all-pervading, and thus you are everything.`,
    explanation: `Bowing from all directions simultaneously — before, behind, all sides — because the Divine surrounds from all directions simultaneously. There is no angle from which the Divine is absent. Every direction is toward the Divine. Every direction is divine.`,
    takeaway: `There is no direction from which the Divine is absent — all directions are toward the Divine.`,
    tags: ['wisdom', 'devotion']
  },
  '11.41': {
    sanskrit: `सखेति मत्वा प्रसभं यदुक्तं
हे कृष्ण हे यादव हे सखेति।
अजानता महिमानं तवेदं
मया प्रमादात्प्रणयेन वापि॥`,
    telugu: `మీ ఈ మహిమాన్ని తెలుసుకోకుండా, నేను ప్రమాదంతో లేదా ప్రేమతో 'ఓ కృష్ణా, ఓ యాదవా, ఓ సఖా' అని సాహసంగా పలికాను.`,
    english: `Thinking of you as my friend, I have rashly addressed you as 'O Krishna,' 'O Yadava,' 'O my friend,' not knowing your glories. Please forgive whatever I may have done in madness or in love.`,
    explanation: `Arjuna apologizes for the casual familiarity with which he had always addressed Krishna. Knowing the Infinite's true nature transforms every previous interaction. The student who has seen the cosmic form can never again relate to the teacher as merely a friend.`,
    takeaway: `Knowing the Infinite's true nature transforms every relationship with it — casual familiarity gives way to reverence.`,
    tags: ['devotion', 'wisdom']
  },
  '11.42': {
    sanskrit: `यच्चावहासार्थमसत्कृतोऽसि
विहारशय्यासनभोजनेषु।
एकोऽथवाप्यच्युत तत्समक्षं
तत्क्षामये त्वामहमप्रमेयम्॥`,
    telugu: `విహారంలో, శయనంలో, ఆసనంలో, భోజనంలో ఒంటరిగా లేదా సాక్షులతో హాస్యంగా మీకు అపమానం కలిగించాను. అచ్యుతా, అప్రమేయా, దాన్ని క్షమించమని అడుగుతున్నాను.`,
    english: `I have in the past insulted you by calling you 'O Krishna,' 'O Yadava,' 'O my friend.' I did not know your glories. Please forgive all my mistakes, whether they be out of affection, or simply due to negligence or foolishness. I implore you for forgiveness.`,
    explanation: `The intimacy that preceded knowledge — jokes, casual address, shared meals, friendship — is now seen in new light. Arjuna asks forgiveness not because those moments were wrong but because they were unknowing. Knowledge transforms even the past's meaning.`,
    takeaway: `Knowledge transforms even the past's meaning — the intimacy of friendship is seen anew in light of the vision.`,
    tags: ['devotion', 'wisdom']
  },
  '11.43': {
    sanskrit: `पितासि लोकस्य चराचरस्य
त्वमस्य पूज्यश्च गुरुर्गरीयान्।
न त्वत्समोऽस्त्यभ्यधिकः कुतोऽन्यो
लोकत्रयेऽप्यप्रतिमप्रभाव॥`,
    telugu: `చరాచర లోకానికి నువ్వు తండ్రివి. పూజ్యుడవు, గురువులలో గురువువు. అప్రతిమ ప్రభావా, మూడు లోకాలలో మీతో సమానుడు లేడు. ఇక అధికుడెలా ఉంటాడు?`,
    english: `You are the father of this complete cosmic manifestation, of the moving and the nonmoving. You are its worshipable chief, the supreme spiritual master. No one is equal to you, nor can anyone be one with you. How then could there be anyone greater than you within the three worlds?`,
    explanation: `The Divine as father of all existence — moving and unmoving — and as the supreme teacher. No equal exists, none greater. This recognition dissolves the false notion that any finite being, however great, can be compared to the Infinite.`,
    takeaway: `No finite being, however great, can be compared to the Infinite — this recognition dissolves all spiritual pride.`,
    tags: ['wisdom', 'devotion']
  },
  '11.44': {
    sanskrit: `तस्मात्प्रणम्य प्रणिधाय कायं
प्रसादये त्वामहमीशमीड्यम्।
पितेव पुत्रस्य सखेव सख्युः
प्रियः प्रियायार्हसि देव सोढुम्॥`,
    telugu: `కాబట్టి ప్రణమిల్లి, శరీరం నేలపై వేసి, ఈశుడైన, ఈడ్యుడైన మిమ్మల్ని ప్రసన్నపరుస్తున్నాను. తండ్రి పుత్రుణ్ణి, సఖుడు సఖుని, ప్రేమించిన వాడు ప్రేయసిని ఎలా సహిస్తాడో, దేవా, అలా సహించు.`,
    english: `I bow down before you and ask for your mercy. As a father tolerates the impudence of his son, or a friend tolerates the impertinence of a friend, or a wife tolerates the familiarity of her partner, please similarly tolerate the wrongs I may have done to you.`,
    explanation: `Three intimate relationships — parent-child, friend-friend, beloved-beloved — asked as models for the Divine's forgiveness. The most intimate human relationships become the template for asking divine mercy. The cosmic cannot be separated from the intimate.`,
    takeaway: `The most intimate human relationships become the template for approaching divine mercy — they are not opposites.`,
    tags: ['devotion', 'wisdom']
  },
  '11.45': {
    sanskrit: `अदृष्टपूर्वं हृषितोऽस्मि दृष्ट्वा
भयेन च प्रव्यथितं मनो मे।
तदेव मे दर्शय देव रूपं
प्रसीद देवेश जगन्निवास॥`,
    telugu: `ఇంతకుముందు చూడని (రూపాన్ని) చూసి నేను హర్షించాను. భయంచే నా మనస్సు వ్యథిల్లింది. దేవేశా, జగన్నివాసా, ప్రసన్నుడవై, నాకు ఆ (తెలిసిన) రూపాన్నే చూపించు.`,
    english: `After seeing this universal form, which I have never seen before, I am gladdened, but at the same time my mind is disturbed with fear. Therefore please bestow your grace upon me and reveal again your form as the Personality of Godhead, O Lord of lords, O abode of the universe.`,
    explanation: `Both gladdened AND disturbed — the cosmic vision produces both responses simultaneously. This is authentic encounter with the Infinite: joy and terror, wonder and fear together. And the request: return to the gentle, familiar form. The loving personal face is also the Divine.`,
    takeaway: `The cosmic vision produces simultaneous joy and terror — both are authentic responses to the Infinite.`,
    tags: ['devotion', 'wisdom']
  },
  '11.46': {
    sanskrit: `किरीटिनं गदिनं चक्रहस्तम
निच्छामि त्वां द्रष्टुमहं तथैव।
तेनैव रूपेण चतुर्भुजेन
सहस्रबाहो भव विश्वमूर्ते॥`,
    telugu: `కిరీటి, గది, చక్రం ధరించిన మిమ్మల్ని అలాగే చూడాలని ఇచ్ఛిస్తున్నాను. సహస్రభాహో, విశ్వమూర్తీ, నాలుగు భుజాలతో ఉండు.`,
    english: `O universal form, O thousand-armed Lord, I wish to see you in your four-armed form, with helmeted head and with club, wheel, conch, and lotus flower in your hands. I long to see you in that form.`,
    explanation: `Arjuna longs for the four-armed form — the beloved, recognizable, personal form of the Divine. After the overwhelming cosmic vision, the human heart longs for the intimate and personal. Both the cosmic and the personal are fully divine; the heart needs both.`,
    takeaway: `Both the cosmic and the personal are fully divine — after the overwhelming, the heart longs for the intimate.`,
    tags: ['devotion', 'wisdom']
  },
  '11.47': {
    sanskrit: `श्रीभगवानुवाच
मया प्रसन्नेन तवार्जुनेदं
रूपं परं दर्शितमात्मयोगात्।
तेजोमयं विश्वमनन्तमाद्यं
यन्मे त्वदन्येन न दृष्टपूर्वम्॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
ప్రసన్నుడనై నా యోగం ద్వారా నీకు ఈ పరమ రూపాన్ని చూపించాను. తేజోమయం, విశ్వమయం, అనంతం, ఆద్యం — ఇది నీ కంటే వేరొకరికి ఎప్పుడూ చూపించబడలేదు.`,
    english: `The Supreme Personality of Godhead said: My dear Arjuna, happily have I shown you, by my internal potency, this supreme universal form within the material world. No one before you has ever seen this primeval form, unlimited and full of glorious effulgence.`,
    explanation: `'Happily' — the Divine gives this vision out of love, not reluctantly. And it is given to Arjuna uniquely — no one has seen it before. This exclusive gift expresses the depth of the teacher-student relationship built through devotion and genuine practice.`,
    takeaway: `The cosmic vision is given out of love, not reluctantly — the depth of the relationship enables the gift.`,
    tags: ['devotion', 'wisdom']
  },
  '11.48': {
    sanskrit: `न वेदयज्ञाध्ययनैर्न दानैर्
न च क्रियाभिर्न तपोभिरुग्रैः।
एवंरूपः शक्य अहं नृलोके
द्रष्टुं त्वदन्येन कुरुप्रवीर॥`,
    telugu: `కురు ప్రవీరా, వేదాలు, యజ్ఞాలు, అధ్యయనం, దానాలు, క్రియలు, ఉగ్ర తపస్సులు — వీటిచే నేను ఇలా మానవ లోకంలో చూడబడడం సాధ్యం కాదు నీ తప్ప.`,
    english: `O best of the Kuru warriors, no one before you has ever seen this universal form of mine, for neither by studying the Vedas, nor by performing sacrifices, nor by charity, nor by pious activities, nor by severe penances can I be seen in this form in the material world.`,
    explanation: `No Vedic study, sacrifice, charity, activity, or severe austerity can reveal the cosmic form. Only the specific combination of complete devotion and divine grace can open this vision. This is the Gita's consistent teaching: grace exceeds technique.`,
    takeaway: `No technique or merit alone reveals the Infinite — only complete devotion combined with divine grace.`,
    tags: ['wisdom', 'devotion']
  },
  '11.49': {
    sanskrit: `मा ते व्यथा मा च विमूढभावो
दृष्ट्वा रूपं घोरमीदृङ्ममेदम्।
व्यपेतभीः प्रीतमनाः पुनस्त्वं
तदेव मे रूपमिदं प्रपश्य॥`,
    telugu: `నా ఈ ఘోర రూపాన్ని చూసి నీకు వ్యథ, విమూఢ భావం వద్దు. భయం పోగొట్టుకుని, ప్రీత మనస్సుతో మళ్ళీ ఆ నా రూపాన్నే చూడు.`,
    english: `You have been perturbed and bewildered by seeing this horrible feature of mine. Now let it be finished. My devotee, be free from all disturbance. With a peaceful mind you can now see the form you desire.`,
    explanation: `'Let it be finished' — Krishna shows sensitivity to Arjuna's state. The vision has served its purpose; it need not continue. The Divine does not prolong what is beyond the student's capacity. This compassionate sensitivity is part of the teacher's art.`,
    takeaway: `The Divine is sensitive to the student's capacity — the vision is given and then compassionately concluded.`,
    tags: ['devotion', 'wisdom']
  },
  '11.50': {
    sanskrit: `सञ्जय उवाच
इत्यर्जुनं वासुदेवस्तथोक्त्वा
स्वकं रूपं दर्शयामास भूयः।
आश्वासयामास च भीतमेनं
भूत्वा पुनः सौम्यवपुर्महात्मा॥`,
    telugu: `సంజయుడు పలికెను:
వాసుదేవుడు అర్జుణుడికి ఇలా పలికి మళ్ళీ తన రూపాన్ని చూపించాడు. మహాత్ముడు మళ్ళీ సౌమ్య రూపం ధరించి భయపడిన అతనిని ఆశ్వాసపరిచాడు.`,
    english: `Sanjaya said to Dhritarashtra: The Supreme Personality of Godhead, Krishna, having spoken thus to Arjuna, displayed his real four-armed form and at last showed his two-armed form, thus encouraging the fearful Arjuna.`,
    explanation: `Krishna returns to his gentle, two-armed form and reassures the frightened Arjuna. The cosmic vision served its purpose; now the intimate, personal relationship resumes. The teacher knows when to overwhelm and when to reassure.`,
    takeaway: `The teacher knows when to overwhelm with the cosmic and when to reassure with the intimate.`,
    tags: ['devotion', 'wisdom']
  },
  '11.51': {
    sanskrit: `अर्जुन उवाच
दृष्ट्वेदं मानुषं रूपं तव सौम्यं जनार्दन।
इदानीमस्मि संवृत्तः सचेताः प्रकृतिं गतः॥`,
    telugu: `అర్జునుడు పలికెను:
జనార్దనా, మీ సౌమ్యమైన మానవ రూపాన్ని చూసి నేను ఇప్పుడు స్వస్థుడయ్యాను, చేతనం పొందాను, సహజ స్థితికి వచ్చాను.`,
    english: `Arjuna said: O Janardana, seeing this humanlike form, so very beautiful, I am now settled in mind, and I am restored to my original nature.`,
    explanation: `Arjuna is restored to his normal state upon seeing the gentle human form again. The cosmic vision was necessary; so is the return to the intimate. The teaching is complete when both dimensions are honored — the vast and the personal.`,
    takeaway: `The complete spiritual life honors both the vast cosmic dimension and the intimate personal relationship.`,
    tags: ['wisdom', 'devotion']
  },
  '11.52': {
    sanskrit: `श्रीभगवानुवाच
सुदुर्दर्शमिदं रूपं दृष्टवानसि यन्मम।
देवा अप्यस्य रूपस्य नित्यं दर्शनकाङ्क्षिणः॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
నా ఈ రూపాన్ని చూడడం చాలా కష్టం — నువ్వు దానిని చూశావు. దేవతలు సైతం ఈ రూపాన్ని నిత్యం చూడాలని కాంక్షిస్తారు.`,
    english: `The Supreme Personality of Godhead said: My dear Arjuna, this form of mine you are now seeing is very difficult to behold. Even the gods are ever seeking the opportunity to see this form.`,
    explanation: `Even the gods long to see what Arjuna has seen. This emphasizes how extraordinary the gift was. Arjuna received something the most exalted beings in the cosmos aspire to. This calls for deep gratitude and renewed dedication.`,
    takeaway: `What Arjuna received, the gods themselves aspire to — this calls for deep gratitude and renewed dedication.`,
    tags: ['devotion', 'wisdom']
  },
  '11.53': {
    sanskrit: `नाहं वेदैर्न तपसा न दानेन न चेज्यया।
शक्य एवंविधो द्रष्टुं दृष्टवानसि मां यथा॥`,
    telugu: `వేదాలు, తపస్సు, దానం, యజ్ఞంతో నన్ను ఈ విధంగా చూడడం సాధ్యం కాదు — ఎలా చూశావో.`,
    english: `The form you are seeing with your transcendental eyes cannot be understood simply by studying the Vedas, nor by undergoing serious penances, nor by charity, nor by worship. It is not by these means that one can see me as I am, as you have seen me.`,
    explanation: `Four great paths — Vedas, austerity, charity, worship — are insufficient alone. The cosmic vision requires something beyond accumulated merit and technique. This is the consistent Gita teaching: grace does what achievement cannot.`,
    takeaway: `Even the four great paths are insufficient alone — the cosmic vision requires the grace beyond all achievement.`,
    tags: ['wisdom', 'devotion']
  },
  '11.54': {
    sanskrit: `भक्त्या त्वनन्यया शक्य अहमेवंविधोऽर्जुन।
ज्ञातुं द्रष्टुं च तत्त्वेन प्रवेष्टुं च परन्तप॥`,
    telugu: `పరంతపా, అర్జునా, అనన్య భక్తి మాత్రంతో ఈ విధంగా నన్ను తెలుసుకోవడం, చూడడం, తత్వతః ప్రవేశించడం సాధ్యం.`,
    english: `My dear Arjuna, only by undivided devotional service can I be understood as I am, standing before you, and can thus be seen directly. Only in this way can you enter into the mysteries of my understanding.`,
    explanation: `ONLY by undivided devotion — not as one path among many but as the essential ingredient — can the Divine be known as it is, seen directly, and truly entered into. This is the chapter's final and definitive teaching: love is the door to the Infinite.`,
    takeaway: `Love — undivided devotion — is the only door to genuine knowledge and direct vision of the Infinite.`,
    tags: ['devotion', 'wisdom']
  },
  '11.55': {
    sanskrit: `मत्कर्मकृन्मत्परमो मद्भक्तः सङ्गवर्जितः।
निर्वैरः सर्वभूतेषु यः स मामेति पाण्डव॥`,
    telugu: `పాండవా, నా కర్మ చేసేవాడు, నన్నే పరమగతిగా కలిగినవాడు, నా భక్తుడు, ఆసక్తి లేనివాడు, సమస్త భూతాలలో వైరం లేనివాడు — అతడు నన్ను పొందుతాడు.`,
    english: `My dear Arjuna, one who is engaged in my pure devotional service, free from the contaminations of fruitive activities and mental speculation, who works for me, who makes me the supreme goal of his life, and who is friendly to every living being — such a person certainly comes to me.`,
    explanation: `The complete formula: work for the Divine, hold the Divine as supreme goal, be the Divine's devotee, be free of attachment, be friendly toward all beings. These five together describe the fully integrated spiritual life that leads to the Divine.`,
    takeaway: `The integrated spiritual life: divine-oriented work, supreme goal, devoted heart, non-attachment, universal friendliness.`,
    tags: ['devotion', 'wisdom']
  },
  '12.1': {
    sanskrit: `अर्जुन उवाच
एवं सततयुक्ता ये भक्तास्त्वां पर्युपासते।
ये चाप्यक्षरमव्यक्तं तेषां के योगवित्तमाः॥`,
    telugu: `అర్జునుడు పలికెను:
ఇలా నిత్య యుక్తులై మిమ్మల్ని పర్యుపాసించే భక్తులు, మరియు అక్షర అవ్యక్తాన్ని ఉపాసించే వారు — వారిలో ఉత్తమ యోగులు ఎవరు?`,
    english: `Arjuna said: Which are considered to be more perfect, those who are always properly engaged in your devotional service, or those who worship the impersonal Brahman, the unmanifested?`,
    explanation: `The question at the heart of bhakti: which is higher — personal devotion or impersonal meditation? Both valid; which leads more directly to the highest? This question reveals the sincere student's concern with the most effective practice.`,
    takeaway: `Which path leads more directly to the highest — personal devotion or impersonal meditation?`,
    tags: ['devotion', 'wisdom']
  },
  '12.2': {
    sanskrit: `श्रीभगवानुवाच
मय्यावेश्य मनो ये मां नित्ययुक्ता उपासते।
श्रद्धया परयोपेताः ते मे युक्ततमा मताः॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
నాలో మనస్సు నిలిపి, నిత్యయుక్తులై, పరమ శ్రద్ధతో నన్ను ఉపాసించే వారు — వారు నాకు అత్యంత యుక్తులని నా మతం.`,
    english: `The Supreme Personality of Godhead said: Those who fix their minds on my personal form and are always engaged in worshipping me with great and transcendental faith are considered by me to be most perfect.`,
    explanation: `The answer: those who fix their minds on the personal form of the Divine with great faith are the most perfect. This is not exclusion of the impersonal path but an honest assessment of which is more accessible and complete for most practitioners.`,
    takeaway: `Personal devotion with great faith is declared most perfect — accessible, complete, and direct.`,
    tags: ['devotion', 'wisdom']
  },
  '12.3': {
    sanskrit: `ये त्वक्षरमनिर्देश्यमव्यक्तं पर्युपासते।
सर्वत्रगमचिन्त्यं च कूटस्थमचलं ध्रुवम्॥`,
    telugu: `కానీ అనిర్దేశ్యమైన, అవ్యక్తమైన, అన్నిటికి వ్యాప్తమైన, అచింత్యమైన, కూటస్థమైన, అచలమైన, ధ్రువమైన అక్షరాన్ని ఉపాసించే వారు.`,
    english: `But those who fully worship the unmanifested, that which lies beyond the perception of the senses, the all-pervading, inconceivable, unchanging, fixed, immovable — the impersonal conception of the Absolute Truth...`,
    explanation: `The impersonal path worships the unmanifested, all-pervading, inconceivable, unchanging Absolute. This is the highest abstraction — intellectually demanding and experientially subtle. Not wrong; just more difficult for embodied beings to sustain.`,
    takeaway: `The impersonal path aims at the highest abstraction — not wrong, but more difficult for embodied beings.`,
    tags: ['wisdom', 'knowledge']
  },
  '12.4': {
    sanskrit: `संनियम्येन्द्रियग्रामं सर्वत्र समबुद्धयः।
ते प्राप्नुवन्ति मामेव सर्वभूतहिते रताः॥`,
    telugu: `ఇంద్రియ సమూహాన్ని నిగ్రహించి, సర్వత్ర సమ బుద్ధులై, సర్వ భూత హితంలో రతులైన వారు నన్నే పొందుతారు.`,
    english: `...by controlling the various senses and being equally disposed to everyone, such persons, engaged in the welfare of all, at last achieve me.`,
    explanation: `The impersonal path also reaches the same destination: through sense-control, equal vision, and service to all beings, the impersonal meditator also attains the Divine. The destination is one; the paths differ in approach.`,
    takeaway: `Both personal and impersonal paths reach the same destination — the approach differs, not the goal.`,
    tags: ['wisdom', 'compassion']
  },
  '12.5': {
    sanskrit: `क्लेशोऽधिकतरस्तेषामव्यक्तासक्तचेतसाम्।
अव्यक्ता हि गतिर्दुःखं देहवद्भिरवाप्यते॥`,
    telugu: `అవ్యక్తంలో ఆసక్త చేతస్కులకు కష్టం అధికం. అవ్యక్త గతి దేహవంతులకు కష్టంతో పొందబడుతుంది.`,
    english: `For those whose minds are attached to the unmanifested, impersonal feature of the Supreme, advancement is very troublesome. To make progress in that discipline is always difficult for those who are embodied.`,
    explanation: `The honest assessment: the impersonal path is harder for embodied beings because the mind naturally seeks form. The formless is more demanding to hold. This is practical guidance, not condemnation of the path.`,
    takeaway: `The impersonal path is harder for embodied beings — the mind naturally seeks form to focus on.`,
    tags: ['wisdom', 'truth']
  },
  '12.6': {
    sanskrit: `ये तु सर्वाणि कर्माणि मयि संन्यस्य मत्पराः।
अनन्येनैव योगेन मां ध्यायन्त उपासते॥`,
    telugu: `సమస్త కర్మలను నాలో సంన్యసించి, నన్ను పరమగతిగా కలిగి, అనన్య యోగంతో నన్ను ధ్యానించి ఉపాసించే వారు.`,
    english: `But those who worship me, giving up all their activities unto me and being devoted to me without deviation, engaged in devotional service and always meditating upon me...`,
    explanation: `Those who surrender all actions to the Divine, hold the Divine as supreme, worship with undivided yoga — these are on the direct, efficient path. Surrender plus devotion plus constant meditation: the triple foundation of bhakti.`,
    takeaway: `Surrender all actions, hold the Divine as supreme, meditate with undivided devotion — this is the direct path.`,
    tags: ['devotion', 'yoga']
  },
  '12.7': {
    sanskrit: `तेषामहं समुद्धर्ता मृत्युसंसारसागरात्।
भवामि नचिरात्पार्थ मय्यावेशितचेतसाम्॥`,
    telugu: `పార్థా, నాలో ఆవేశిత చేతస్కులైన వారికి నేను మృత్యు సంసార సాగరం నుండి త్వరలో ఉద్ధర్తను అవుతాను.`,
    english: `For those who worship me with devotion, meditating on my transcendental form, I carry what they lack and preserve what they have.`,
    explanation: `For the devoted, the Divine becomes the rescuer from the ocean of death and rebirth. The promise is swift: 'not long' (nachira). Devotion brings the Divine's personal attention and intervention. This is the reciprocal relationship of true devotion.`,
    takeaway: `The devoted receive swift divine rescue — devotion creates a reciprocal relationship of divine care.`,
    tags: ['devotion', 'faith']
  },
  '12.8': {
    sanskrit: `मय्येव मन आधत्स्व मयि बुद्धिं निवेशय।
निवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः॥`,
    telugu: `నాలోనే మనస్సు నిలుపు, నాలోనే బుద్ధిని నివేశించు. ఇక పైన నాలోనే నివసిస్తావు. ఇందులో సందేహం లేదు.`,
    english: `Just fix your mind upon me, the Supreme Personality of Godhead, and engage all your intelligence in me. Thus you will live in me always, without a doubt.`,
    explanation: `The simplest instruction: fix the mind on the Divine, engage intelligence in the Divine. The result: you will live in the Divine. This is the most direct path — not requiring intermediate steps, just direct orientation of mind and intelligence.`,
    takeaway: `The most direct path: fix mind on the Divine, engage intelligence in the Divine — you will live in the Divine.`,
    tags: ['devotion', 'yoga']
  },
  '12.9': {
    sanskrit: `अथ चित्तं समाधातुं न शक्नोषि मयि स्थिरम्।
अभ्यासयोगेन ततो मामिच्छाप्तुं धनञ्जय॥`,
    telugu: `ధనంజయా, నాలో స్థిరంగా మనస్సు నిలపలేకపోతే, అభ్యాస యోగంతో నన్ను పొందాలని ఇచ్ఛించు.`,
    english: `If you cannot fix your mind upon me without deviation, then follow the regulative principles of bhakti yoga. In this way develop a desire to attain me.`,
    explanation: `If direct fixing of mind on the Divine is not yet possible — practice. Abhyasa yoga (yoga of practice) builds the capacity through repeated effort. The door is still open; the path just requires patient cultivation.`,
    takeaway: `If direct devotion is not yet possible, practice builds the capacity — patient cultivation opens the door.`,
    tags: ['devotion', 'yoga']
  },
  '12.10': {
    sanskrit: `अभ्यासेऽप्यसमर्थोऽसि मत्कर्मपरमो भव।
मदर्थमपि कर्माणि कुर्वन्सिद्धिमवाप्स्यसि॥`,
    telugu: `అభ్యాసంలో కూడా అసమర్థుడవైతే, నన్ను పరమంగా ఉంచి నా కర్మ పరముడవు అవ్వు. నా కోసం కర్మలు చేస్తూ సిద్ధి పొందుతావు.`,
    english: `If you cannot practice the regulations of bhakti yoga, then just try to work for me, because by working for me you will come to the perfect stage.`,
    explanation: `The ladder descends further: if practice is not yet possible, simply work for the Divine's sake. Even the simplest devotional service — doing ordinary work for the Divine's pleasure — is a valid entry point.`,
    takeaway: `Even the simplest devotional service — ordinary work done for the Divine's sake — is a valid entry point.`,
    tags: ['devotion', 'action']
  },
  '12.11': {
    sanskrit: `अथैतदप्यशक्तोऽसि कर्तुं मद्योगमाश्रितः।
सर्वकर्मफलत्यागं ततः कुरु यतात्मवान्॥`,
    telugu: `ఇది కూడా చేయలేకపోతే, నా యోగాన్ని ఆశ్రయించి, ఆత్మ నిగ్రహంతో సమస్త కర్మ ఫలత్యాగం చేయి.`,
    english: `If, however, you are unable to work in this consciousness of me, then try to act giving up all results of your work and try to be self-situated.`,
    explanation: `If even working for the Divine is not yet possible, the minimum: surrender the fruits of whatever you do. This is the most accessible entry point — no change in what you do, only a change in the inner attitude toward results.`,
    takeaway: `The most accessible entry: no change in what you do, only surrendering the fruits of action.`,
    tags: ['devotion', 'action']
  },
  '12.12': {
    sanskrit: `श्रेयो हि ज्ञानमभ्यासाज्ज्ञानाद्ध्यानं विशिष्यते।
ध्यानात्कर्मफलत्यागस्त्यागाच्छान्तिरनन्तरम्॥`,
    telugu: `అభ్యాసం కంటే జ్ఞానం మేలు. జ్ఞానం కంటే ధ్యానం మేలు. ధ్యానం కంటే కర్మఫలత్యాగం మేలు. త్యాగం నుండి వెంటనే శాంతి.`,
    english: `Better than mere practice is knowledge, better than knowledge is meditation, better than meditation is renunciation of the fruits of action, for by such renunciation one attains immediate peace.`,
    explanation: `The ranking: knowledge > practice; meditation > knowledge; fruit-renunciation > meditation. And fruit-renunciation brings immediate peace. This is the Gita's counterintuitive ranking — the most practical inner shift outranks the most impressive outer practice.`,
    takeaway: `The most practical inner shift — surrendering fruits — outranks even meditation and brings immediate peace.`,
    tags: ['wisdom', 'peace']
  },
  '12.13': {
    sanskrit: `अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च।
निर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥`,
    telugu: `సమస్త భూతాలలో ద్వేషం లేనివాడు, మైత్రీ, కరుణ గలవాడు, మమకారం లేనివాడు, అహంకారం లేనివాడు, సమ సుఖ దుఃఖుడు, క్షమ గలవాడు.`,
    english: `One who is not hateful toward any being, who is friendly and compassionate, free from possessiveness and false ego, equal in pleasure and pain, forgiving...`,
    explanation: `The portrait of the dear devotee begins: no hatred toward any being, friendship, compassion, no possessiveness, no false ego, equanimity in pleasure and pain, forgiving. These character qualities define the bhakta (devotee) more than any ritual.`,
    takeaway: `The dear devotee is defined by character qualities, not by rituals — love, compassion, equanimity, forgiveness.`,
    tags: ['devotion', 'compassion']
  },
  '12.14': {
    sanskrit: `सन्तुष्टः सततं योगी यतात्मा दृढनिश्चयः।
मय्यर्पितमनोबुद्धिर्यो मद्भक्तः स मे प्रियः॥`,
    telugu: `సర్వదా సంతుష్టుడు, యోగి, యతాత్మ, దృఢనిశ్చయుడు, నాలో అర్పిత మనో బుద్ధి గల నా భక్తుడు నాకు ప్రియుడు.`,
    english: `Always satisfied, self-controlled, engaged with determination, his mind and intelligence fixed on me — such a devotee is very dear to me.`,
    explanation: `Contentment, self-control, determination, mind and intelligence offered to the Divine — these practical qualities, when lived, define the dear devotee. Not extraordinary mystical states but daily consistent character.`,
    takeaway: `Daily consistent character — contentment, self-control, determination, divine orientation — defines the dear devotee.`,
    tags: ['devotion', 'peace']
  },
  '12.15': {
    sanskrit: `यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः।
हर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥`,
    telugu: `లోకం ఎవని వల్ల వ్యథ పడదో, ఎవడు లోకం వల్ల వ్యథ పడడో, హర్ష అమర్ష భయ ఉద్వేగాలు లేనివాడు — అతడు నాకు ప్రియుడు.`,
    english: `He by whom no one is put into difficulty and who is not disturbed by anyone, who is equal in happiness and distress, fear and anxiety, is very dear to me.`,
    explanation: `'From whom the world does not shrink, and who does not shrink from the world' — two directions of equanimity. Free from excitement, jealousy, fear, and anxiety. This double equanimity — toward the world and from the world — is the social expression of wisdom.`,
    takeaway: `True equanimity extends in both directions: neither disturbing the world nor being disturbed by it.`,
    tags: ['wisdom', 'peace']
  },
  '12.16': {
    sanskrit: `अनपेक्षः शुचिर्दक्षः उदासीनो गतव्यथः।
सर्वारम्भपरित्यागी यो मद्भक्तः स मे प्रियः॥`,
    telugu: `అనపేక్ష, శుచి, దక్ష, ఉదాసీన, గతవ్యథ, సర్వారంభపరిత్యాగి — ఆ నా భక్తుడు నాకు ప్రియుడు.`,
    english: `My devotee who is not dependent on the ordinary course of activities, who is pure, expert, without cares, free from all pains, and not striving for some result, is very dear to me.`,
    explanation: `Free from dependency on things, pure, capable, indifferent to worldly fluctuations, free from anxiety, renouncing ego-driven projects — this person is dear to the Divine. Note: capable (daksha) — the dear devotee is not passive but competent and engaged.`,
    takeaway: `The dear devotee is capable and engaged, not passive — competence combined with non-attachment.`,
    tags: ['devotion', 'wisdom']
  },
  '12.17': {
    sanskrit: `यो न हृष्यति न द्वेष्टि न शोचति न काङ्क्षति।
शुभाशुभपरित्यागी भक्तिमान्यः स मे प्रियः॥`,
    telugu: `హర్షించని, ద్వేషించని, శోకించని, కాంక్షించని, శుభాశుభ పరిత్యాగి, భక్తిమంతుడు — అతడు నాకు ప్రియుడు.`,
    english: `One who neither grasps nor rejects anything, who is unaffected by profit or loss, who is equal in pleasure and pain, neither hates nor desires — such a devotee is very dear to me.`,
    explanation: `Not elated, not hateful, not grieving, not craving, renouncing both good and evil outcomes — and filled with devotion. The inner steadiness that arises from non-attachment to all outcomes, held together by devotion, is what the Divine finds most dear.`,
    takeaway: `Non-attachment to all outcomes held together by devotion — this combination is what the Divine finds most dear.`,
    tags: ['devotion', 'peace']
  },
  '12.18': {
    sanskrit: `समः शत्रौ च मित्रे च तथा मानापमानयोः।
शीतोष्णसुखदुःखेषु समः सङ्गविवर्जितः॥`,
    telugu: `శత్రువులో, మిత్రుడిలో సమం. మాన అపమానాలలో సమం. చలి-వేడి, సుఖ-దుఃఖాలలో సమం. ఆసక్తి విడిచినవాడు.`,
    english: `He is the same to foe and friend, and also in honor and dishonor. He is the same in heat and cold, in pleasure and pain, in praise and blame. He is free from all contaminating association.`,
    explanation: `Equal toward enemy and friend, honor and dishonor, cold and heat, pleasure and pain — this comprehensive equanimity across all opposites is the crowning character quality. Not emotional flatness but freedom from compulsive reaction to any pair of opposites.`,
    takeaway: `Equanimity across all pairs of opposites — this freedom from compulsive reaction is the crowning character quality.`,
    tags: ['peace', 'wisdom']
  },
  '12.19': {
    sanskrit: `तुल्यनिन्दास्तुतिर्मौनी सन्तुष्टो येन केनचित्।
अनिकेतः स्थिरमतिर्भक्तिमान्मे प्रियो नरः॥`,
    telugu: `నింద స్తుతి సమానమైన, మౌని, ఏ విధంగానైనా సంతుష్టుడు, అనికేత, స్థిర మతి, భక్తిమంతుడు నాకు ప్రియుడు.`,
    english: `One who is equal in praise and censure, who is silent, content with anything, who has no fixed abode, who is stable in mind and full of devotion — such a man is very dear to me.`,
    explanation: `Equal in praise and blame, silent (not compelled to constantly self-express), content with whatever comes, without fixed home (not territorially attached), stable in mind, full of devotion. The last quality — devotion — ties everything together.`,
    takeaway: `Devotion is the thread tying all the dear devotee's qualities together — it is not one quality among others but the source.`,
    tags: ['devotion', 'peace']
  },
  '12.20': {
    sanskrit: `ये तु धर्म्यामृतमिदं यथोक्तं पर्युपासते।
श्रद्दधाना मत्परमा भक्तास्तेऽतीव मे प्रियाः॥`,
    telugu: `ఈ ఉక్తమైన ధర్మ్యామృతాన్ని పర్యుపాసించే, శ్రద్ధావంతులు, నన్ను పరమంగా ఉంచిన భక్తులు నాకు అత్యంత ప్రియులు.`,
    english: `Those who follow this imperishable path of devotional service and who completely engage themselves with faith, making me the supreme goal — they are very dear to me.`,
    explanation: `Those who follow this immortal dharma of devotion with faith, holding the Divine as supreme — they are the most dear of all. The chapter ends where it began: with the dear devotee. The entirety of Chapter 12 is a love letter about who the Divine loves most.`,
    takeaway: `Chapter 12 is a love letter from the Divine — describing who is most dear, ending in fullness of love.`,
    tags: ['devotion', 'faith']
  },
  '13.1': {
    sanskrit: `अर्जुन उवाच
प्रकृतिं पुरुषं चैव क्षेत्रं क्षेत्रज्ञमेव च।
एतद्वेदितुमिच्छामि ज्ञानं ज्ञेयं च केशव॥`,
    telugu: `అర్జునుడు పలికెను:
కేశవా, ప్రకృతి మరియు పురుషుని, క్షేత్రం మరియు క్షేత్రజ్ఞుని, జ్ఞానం మరియు జ్ఞేయాన్ని తెలుసుకోవాలని ఇచ్ఛిస్తున్నాను.`,
    english: `Arjuna said: O my dear Krishna, I wish to know about prakriti (nature), Purusha (the enjoyer), and the field and the knower of the field, and of knowledge and the end of knowledge.`,
    explanation: `A precise philosophical inquiry: nature vs. consciousness, field vs. knower of the field, knowledge vs. the object of knowledge. These distinctions are the foundation of the Gita's metaphysics and its practical guide to liberation.`,
    takeaway: `The great distinction: field (prakriti) vs. knower of the field (purusha) — the foundation of liberation.`,
    tags: ['wisdom', 'knowledge']
  },
  '13.2': {
    sanskrit: `श्रीभगवानुवाच
इदं शरीरं कौन्तेय क्षेत्रमित्यभिधीयते।
एतद्यो वेत्ति तं प्राहुः क्षेत्रज्ञ इति तद्विदः॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
కౌంతేయా, ఈ శరీరం క్షేత్రమని పిలువబడుతుంది. దీన్ని తెలుసుకున్నవానిని తత్వజ్ఞులు క్షేత్రజ్ఞుడని పిలుస్తారు.`,
    english: `The Supreme Personality of Godhead said: O son of Kunti, this body is called the field, and one who knows this body is called the knower of the field.`,
    explanation: `The body is the 'field' — the domain of experience. The one who knows the body is the 'knower of the field.' This fundamental distinction separates the observed (body, senses, mind) from the observer (the witnessing Self). This is the foundation of self-knowledge.`,
    takeaway: `The body-mind is the observed; the witnessing Self is the observer — this distinction is the foundation of self-knowledge.`,
    tags: ['wisdom', 'soul']
  },
  '13.3': {
    sanskrit: `क्षेत्रज्ञं चापि मां विद्धि सर्वक्षेत्रेषु भारत।
क्षेत्रक्षेत्रज्ञयोर्ज्ञानं यत्तज्ज्ञानं मतं मम॥`,
    telugu: `భరతవంశీయుడా, సమస్త క్షేత్రాలలో క్షేత్రజ్ఞుడు నేనే అని తెలుసుకో. క్షేత్ర క్షేత్రజ్ఞుల జ్ఞానమే జ్ఞానం అని నా మతం.`,
    english: `O scion of Bharata, you should understand that I am also the knower in all bodies, and to understand this body and its knower is called knowledge. That is my opinion.`,
    explanation: `The Divine is the knower in ALL bodies — the same witnessing consciousness in every being. This is the non-dual insight: not my soul and your soul as separate entities, but the one Witness consciousness appearing in all bodies simultaneously.`,
    takeaway: `One witnessing consciousness appears in all bodies — knowing this is true knowledge.`,
    tags: ['wisdom', 'soul']
  },
  '13.4': {
    sanskrit: `तत्क्षेत्रं यच्च यादृक्च यद्विकारि यतश्च यत्।
स च यो यत्प्रभावश्च तत्समासेन मे श्रृणु॥`,
    telugu: `ఏ క్షేత్రం, ఏ ప్రకారం, ఏ వికారాలు, ఎక్కడ నుండి, మరియు ఎవడు, ఏ ప్రభావం — అది సంగ్రహంగా వినుము.`,
    english: `Now please hear my brief description of this field of activity — what it is, how it is constituted, what its changes are, where it comes from, who that knower of the field of activities is, and what his influences are.`,
    explanation: `Krishna will now explain the field comprehensively: its constitution, its changes, its origin, the nature of the knower, and the knower's influences. This systematic inquiry is the beginning of real self-knowledge.`,
    takeaway: `Systematic inquiry into the field and its knower is the beginning of real self-knowledge.`,
    tags: ['wisdom', 'knowledge']
  },
  '13.5': {
    sanskrit: `ऋषिभिर्बहुधा गीतं छन्दोभिर्विविधैः पृथक्।
ब्रह्मसूत्रपदैश्चैव हेतुमद्भिर्विनिश्चितैः॥`,
    telugu: `వివిధ ఛందస్సులలో ఋషులచే బహువిధాలు కీర్తించబడింది. బ్రహ్మ సూత్ర పదాలచే హేతుమత్తో నిశ్చయంగా చెప్పబడింది.`,
    english: `This knowledge of the field of activities and of the knower of activities is described by various sages in various Vedic writings. It is especially presented in Vedanta-sutra with all reasoning as to cause and effect.`,
    explanation: `This knowledge appears throughout the great wisdom traditions — sung by sages in many forms, systematized in the Brahma Sutras. The Gita here connects to the entire tradition of Indian philosophy while presenting it freshly.`,
    takeaway: `This teaching connects to the entire tradition — fresh presentation of ancient wisdom.`,
    tags: ['wisdom', 'knowledge']
  },
  '13.6': {
    sanskrit: `महाभूतान्यहङ्कारो बुद्धिरव्यक्तमेव च।
इन्द्रियाणि दशैकं च पञ्च चेन्द्रियगोचराः॥`,
    telugu: `మహాభూతాలు, అహంకారం, బుద్ధి, అవ్యక్తం, దశ ఇంద్రియాలు మరియు ఒకటి (మనస్సు), ఐదు ఇంద్రియ విషయాలు.`,
    english: `The five great elements, false ego, intelligence, the unmanifested, the ten senses and the mind, the five sense objects...`,
    explanation: `The components of the field: five elements (earth, water, fire, air, space), ego, intellect, unmanifest prakriti, ten senses, mind, five sense-objects. This is the complete inventory of the material body-mind complex — everything that can be observed.`,
    takeaway: `The complete inventory of the field: elements, ego, intellect, mind, senses — everything that can be observed.`,
    tags: ['wisdom', 'knowledge']
  },
  '13.7': {
    sanskrit: `इच्छा द्वेषः सुखं दुःखं सङ्घातश्चेतना धृतिः।
एतत्क्षेत्रं समासेन सविकारमुदाहृतम्॥`,
    telugu: `ఇచ్ఛ, ద్వేషం, సుఖం, దుఃఖం, సంఘాతం, చేతన, ధృతి — వికారాలతో సహా సంగ్రహంగా ఇది క్షేత్రమని చెప్పబడింది.`,
    english: `Desire, hatred, happiness, distress, the aggregate, the life symptoms, and convictions — all these are considered, in summary, to be the field of activities and its interactions.`,
    explanation: `Even desire, hatred, pleasure, and pain are part of the field — they are to be witnessed by the knower, not identified with. This is the key practical teaching: observe your desires and emotions as field-phenomena rather than identifying with them as 'who I am.'`,
    takeaway: `Observe desires, emotions, and sensations as field-phenomena — they are not who you are.`,
    tags: ['wisdom', 'soul']
  },
  '13.8': {
    sanskrit: `अमानित्वमदम्भित्वमहिंसा क्षान्तिरार्जवम्।
आचार्योपासनं शौचं स्थैर्यमात्मविनिग्रहः॥`,
    telugu: `అమానిత్వం, అదంభిత్వం, అహింస, క్షాంతి, ఆర్జవం, ఆచార్యోపాసనం, శౌచం, స్థైర్యం, ఆత్మ వినిగ్రహం.`,
    english: `Humility; freedom from pride; nonviolence; tolerance; simplicity; approaching a bona fide spiritual master; cleanliness; steadiness; self-control...`,
    explanation: `The marks of knowledge begin: humility, freedom from pride, non-violence, tolerance, simplicity, service to the teacher, cleanliness, steadiness, self-control. These character qualities are called 'knowledge' because they arise from genuine understanding and enable its deeper reception.`,
    takeaway: `These character qualities are called 'knowledge' — they arise from understanding and enable its deepening.`,
    tags: ['wisdom', 'knowledge']
  },
  '13.9': {
    sanskrit: `इन्द्रियार्थेषु वैराग्यमनहङ्कार एव च।
जन्ममृत्युजराव्याधिदुःखदोषानुदर्शनम्॥`,
    telugu: `ఇంద్రియ విషయాలలో వైరాగ్యం, అనహంకారం, జన్మ మృత్యు జరా వ్యాధి దుఃఖ దోషాల దర్శనం.`,
    english: `...dispassion; freedom from entanglement with children, wife, home and the rest; constant even-mindedness among pleasant and unpleasant events; constant and unalloyed devotion to me; aspiring to live in a solitary place; detachment from the general mass of people...`,
    explanation: `Seeing the defects of birth, death, old age, disease, and suffering — and being dispassionate as a result. This is the motivation for spiritual practice: not morbidity but clear-eyed recognition of what impermanent existence contains.`,
    takeaway: `Clear-eyed recognition of impermanence motivates practice — not morbidity but honest seeing.`,
    tags: ['wisdom', 'detachment']
  },
  '13.10': {
    sanskrit: `मयि चानन्ययोगेन भक्तिरव्यभिचारिणी।
विविक्तदेशसेवित्वमरतिर्जनसंसदि॥`,
    telugu: `నాలో అనన్య యోగంతో అవ్యభిచారిణీ భక్తి, వివిక్త స్థల సేవనం, జనసంసదిలో అరతి.`,
    english: `...constant and unalloyed devotion to me; aspiring to live in a solitary place; detachment from the general mass of people...`,
    explanation: `Unswerving devotion to the Divine, love of solitude, and disinclination for crowded social engagement. These are aids to practice, not absolute rules — they create conditions in which the inner life can deepen.`,
    takeaway: `Solitude and reduced social craving create conditions for the inner life to deepen.`,
    tags: ['devotion', 'wisdom']
  },
  '13.11': {
    sanskrit: `अध्यात्मज्ञाननित्यत्वं तत्त्वज्ञानार्थदर्शनम्।
एतज्ज्ञानमिति प्रोक्तमज्ञानं यदतोऽन्यथा॥`,
    telugu: `ఆధ్యాత్మ జ్ఞాన నిత్యత్వం, తత్వజ్ఞాన అర్థ దర్శనం — ఇది జ్ఞానమని చెప్పబడింది. దీనికి విరుద్ధమైనది అజ్ఞానం.`,
    english: `Constancy in self-knowledge and philosophical search for the Absolute Truth — all this I declare to be knowledge, and besides this whatever there may be is ignorance.`,
    explanation: `What is called 'knowledge' is finally defined: constant self-inquiry and philosophical search for ultimate truth. Everything that moves away from these — toward ego, toward accumulation, toward distraction — is ignorance. The standard is clear and high.`,
    takeaway: `Knowledge is constant self-inquiry and philosophical search for truth — everything else is ignorance.`,
    tags: ['wisdom', 'knowledge']
  },
  '13.12': {
    sanskrit: `ज्ञेयं यत्तत्प्रवक्ष्यामि यज्ज्ञात्वामृतमश्नुते।
अनादिमत्परं ब्रह्म न सत्तन्नासदुच्यते॥`,
    telugu: `ఏదిని తెలుసుకుని అమృతత్వాన్ని పొందుతారో ఆ జ్ఞేయాన్ని చెప్తాను. అనాది, పరం, బ్రహ్మం — అది సత్ అని చెప్పబడదు, అసత్ అని కూడా చెప్పబడదు.`,
    english: `I shall now explain the knowable, knowing which you will taste the eternal. Brahman, the spirit, beginningless and subordinate to me, lies beyond the cause and effect of this material world.`,
    explanation: `The knowable: Brahman, beginningless, transcendental — neither sat (existing like objects) nor asat (non-existing). It lies beyond the ordinary categories of being and non-being. This is what knowledge aims toward — not information about things but the ground of all things.`,
    takeaway: `The knowable Brahman transcends ordinary categories of being and non-being — it is the ground of all.`,
    tags: ['wisdom', 'soul']
  },
  '13.13': {
    sanskrit: `सर्वतः पाणिपादं तत्सर्वतोऽक्षिशिरोमुखम्।
सर्वतः श्रुतिमल्लोके सर्वमावृत्य तिष्ठति॥`,
    telugu: `అది అన్ని వైపుల చేతులు పాదాలు, అన్ని వైపుల కళ్ళు తలలు ముఖాలు, అన్ని వైపుల చెవులు గలది. లోకంలో అన్నింటినీ కప్పి ఉంది.`,
    english: `Everywhere are his hands and legs, his eyes, heads and faces, and he has ears everywhere. In this way the Supersoul exists, pervading everything.`,
    explanation: `Hands everywhere, eyes everywhere, ears everywhere — the Divine pervades all space, all sensing, all motion simultaneously. This is the teaching of omnipresence through omnisensory presence. The Divine hears with every ear, sees with every eye.`,
    takeaway: `The Divine hears with every ear and sees with every eye — omnipresence through omnisensory presence.`,
    tags: ['wisdom', 'soul']
  },
  '13.14': {
    sanskrit: `सर्वेन्द्रियगुणाभासं सर्वेन्द्रियविवर्जितम्।
असक्तं सर्वभृच्चैव निर्गुणं गुणभोक्तृ च॥`,
    telugu: `సమస్త ఇంద్రియ గుణాల ఆభాసం, సమస్త ఇంద్రియ రహితం, అనాసక్తం, సర్వభృత్, నిర్గుణం, గుణభోక్తృ.`,
    english: `The Supersoul is the original source of all senses, yet it is without senses. It is unattached, although it is the maintainer of all living beings. It transcends the modes of nature, and at the same time it is the master of all the modes of material nature.`,
    explanation: `The great paradoxes of the Divine: it appears to sense through all senses yet has no senses; maintains all while being unattached; transcends the gunas while governing them. These paradoxes point to what cannot be captured in any single attribute.`,
    takeaway: `The Divine's paradoxes — sensing without senses, maintaining without attachment — point beyond all single attributes.`,
    tags: ['wisdom', 'soul']
  },
  '13.15': {
    sanskrit: `बहिरन्तश्च भूतानामचरं चरमेव च।
सूक्ष्मत्वात्तदविज्ञेयं दूरस्थं चान्तिके च तत्॥`,
    telugu: `భూతాల బహిరంతరాలలో, అచర మరియు చరంలో అది ఉంది. సూక్ష్మత వల్ల అవిజ్ఞేయం. అది దూరంలో మరియు సమీపంలో.`,
    english: `The Supreme Truth exists outside and inside of all living beings, the moving and the nonmoving. Because it is subtle, it is beyond the power of the material senses to see or to know. Although far, far away, it is also near to all.`,
    explanation: `Outside and inside, far and near simultaneously — the Divine is more intimate than the most intimate thing (inside) and more vast than the most vast (outside). This simultaneous intimacy and vastness is the hallmark of true omnipresence.`,
    takeaway: `The Divine is simultaneously more intimate than the most intimate and more vast than the most vast.`,
    tags: ['wisdom', 'soul']
  },
  '13.16': {
    sanskrit: `अविभक्तं च भूतेषु विभक्तमिव च स्थितम्।
भूतभर्तृ च तज्ज्ञेयं ग्रसिष्णु प्रभविष्णु च॥`,
    telugu: `భూతాలలో అవిభక్తంగా మరియు విభక్తంగా ఉన్నట్లు ఉంది. అది జ్ఞేయం — భూత భర్తృ, గ్రసిష్ణు, ప్రభవిష్ణు.`,
    english: `Although the Supersoul appears to be divided among all beings, he is never divided. He is situated as one. Although he is the maintainer of every living entity, it is to be understood that he devours and develops all.`,
    explanation: `Undivided yet appearing divided, one yet in all, maintaining yet consuming, generating yet dissolving — the Divine holds all apparent opposites within itself. The One that appears as the many is the deepest teaching of Vedanta.`,
    takeaway: `The One that appears as the many — undivided yet appearing divided — is the deepest Vedantic teaching.`,
    tags: ['wisdom', 'soul']
  },
  '13.17': {
    sanskrit: `ज्योतिषामपि तज्ज्योतिस्तमसः परमुच्यते।
ज्ञानं ज्ञेयं ज्ञानगम्यं हृदि सर्वस्य विष्ठितम्॥`,
    telugu: `అది జ్యోతులకు కూడా జ్యోతి, చీకటికి పరమైనదని చెప్పబడింది. జ్ఞానం, జ్ఞేయం, జ్ఞానగమ్యం — సమస్తుల హృదయంలో విష్ఠితం.`,
    english: `He is the source of light in all luminous objects. He is beyond the darkness of matter and is unmanifested. He is knowledge, he is the object of knowledge, and he is the goal of knowledge. He is situated in everyone's heart.`,
    explanation: `The light of all lights, beyond darkness, the knower and the known and the goal of knowing — seated in every heart. The Divine is the light by which all other lights shine, the knowing by which all knowing occurs, and the heart of every being.`,
    takeaway: `The light by which all lights shine, the knowing by which all knowing occurs — present in every heart.`,
    tags: ['wisdom', 'soul']
  },
  '13.18': {
    sanskrit: `इति क्षेत्रं तथा ज्ञानं ज्ञेयं चोक्तं समासतः।
मद्भक्त एतद्विज्ञाय मद्भावायोपपद्यते॥`,
    telugu: `ఇలా క్షేత్రం, జ్ఞానం, జ్ఞేయం సంగ్రహంగా చెప్పబడ్డాయి. నా భక్తుడు దీన్ని తెలుసుకుని నా భావాన్ని పొందుతాడు.`,
    english: `Thus the field of activities, knowledge, and the knowable have been summarily described by me. Only my devotees can understand this thoroughly and thus attain to my nature.`,
    explanation: `The field, knowledge, and the knowable — summarized. The devoted student who understands all three attains the Divine's nature. Understanding and devotion together — not one alone — bring this completion.`,
    takeaway: `Understanding the field and its knower, combined with devotion, brings the student to the Divine's nature.`,
    tags: ['wisdom', 'devotion']
  },
  '13.19': {
    sanskrit: `प्रकृतिं पुरुषं चैव विद्ध्यनादी उभावपि।
विकारांश्च गुणांश्चैव विद्धि प्रकृतिसम्भवान्॥`,
    telugu: `ప్రకృతి మరియు పురుషుడు రెండూ అనాదులని తెలుసుకో. వికారాలు మరియు గుణాలు ప్రకృతి సంభవాలని తెలుసుకో.`,
    english: `Material nature and the living entities should be understood to be beginningless. Their transformations and the material qualities are products of material nature.`,
    explanation: `Both prakriti (matter) and purusha (consciousness) are beginningless — neither created nor ending. And all changes and qualities arise from prakriti, not from purusha. This fundamental distinction is the key to understanding self and not-self.`,
    takeaway: `Prakriti and purusha are both beginningless — their distinction is the key to understanding self and not-self.`,
    tags: ['wisdom', 'knowledge']
  },
  '13.20': {
    sanskrit: `कार्यकारणकर्तृत्वे हेतुः प्रकृतिरुच्यते।
पुरुषः सुखदुःखानां भोक्तृत्वे हेतुरुच्यते॥`,
    telugu: `కార్య కారణ కర్తృత్వంలో ప్రకృతి హేతువని చెప్పబడింది. పురుషుడు సుఖ దుఃఖ భోక్తృత్వంలో హేతువని చెప్పబడింది.`,
    english: `Nature is said to be the cause of all material causes and effects, whereas the living entity is the cause of the various sufferings and enjoyments in this world.`,
    explanation: `Nature is responsible for causation and action; purusha (consciousness) is what experiences pleasure and pain. This division is precise: the body-mind acts, but it is consciousness that experiences. Understanding this dissolves the confusion of 'I am the body.'`,
    takeaway: `Nature causes and acts; consciousness experiences — understanding this dissolves 'I am the body.'`,
    tags: ['wisdom', 'soul']
  },
  '13.21': {
    sanskrit: `पुरुषः प्रकृतिस्थो हि भुङ्क्ते प्रकृतिजान्गुणान्।
कारणं गुणसङ्गोऽस्य सदसद्योनिजन्मसु॥`,
    telugu: `ప్రకృతిలో ఉన్న పురుషుడు ప్రకృతి జనితాలైన గుణాలను అనుభవిస్తాడు. గుణ సంగమే వానికి మంచి చెడు జన్మలకు కారణం.`,
    english: `The living entity in material nature thus follows the ways of life, enjoying the three modes of nature. This is due to his association with that material nature. Thus he meets with good and evil among various species.`,
    explanation: `Consciousness dwelling in prakriti experiences the gunas — and attachment to the gunas leads to rebirth in various species. The cycle of existence is driven by attachment to the qualities of nature. Non-attachment is the key to breaking the cycle.`,
    takeaway: `Attachment to the gunas drives the cycle of rebirth — non-attachment is the key to liberation.`,
    tags: ['wisdom', 'soul']
  },
  '13.22': {
    sanskrit: `उपद्रष्टानुमन्ता च भर्ता भोक्ता महेश्वरः।
परमात्मेति चाप्युक्तो देहेऽस्मिन्पुरुषः परः॥`,
    telugu: `ఈ దేహంలో పరమ పురుషుడు ఉపద్రష్ట, అనుమంత, భర్త, భోక్త, మహేశ్వరుడు, పరమాత్మ అని కూడా పిలువబడతాడు.`,
    english: `Yet in this body there is another, a transcendental enjoyer, who is the Lord, the supreme proprietor, who exists as the overseer and permitter, and who is known as the Supersoul.`,
    explanation: `The Supreme within the body: Overseer, Permitter, Sustainer, Experiencer, Great Lord, Supersoul. These six titles describe different aspects of the Divine's relationship to the body it dwells in. The Divine is not just present but actively witnessing and supporting.`,
    takeaway: `The Divine within the body is Overseer, Permitter, Sustainer, Experiencer — actively present, not passive.`,
    tags: ['wisdom', 'soul']
  },
  '13.23': {
    sanskrit: `य एवं वेत्ति पुरुषं प्रकृतिं च गुणैः सह।
सर्वथा वर्तमानोऽपि न स भूयोऽभिजायते॥`,
    telugu: `ఏ విధంగా వర్తించినా, పురుషుని మరియు గుణాలతో సహా ప్రకృతిని ఇలా తెలిసిన వాడు మళ్ళీ జన్మించడు.`,
    english: `One who understands this philosophy concerning material nature, the living entity and the interaction of the modes of nature is sure to attain liberation. He will not take birth here again, regardless of his present position.`,
    explanation: `Understanding purusha, prakriti, and the gunas in their proper relationship is itself liberating — regardless of one's current situation. This understanding dissolves the binding confusion between Self and not-Self, and liberation naturally follows.`,
    takeaway: `Understanding the proper relationship of purusha and prakriti is itself liberating — knowledge frees.`,
    tags: ['wisdom', 'knowledge']
  },
  '13.24': {
    sanskrit: `ध्यानेनात्मनि पश्यन्ति केचिदात्मानमात्मना।
अन्ये साङ्ख्येन योगेन कर्मयोगेन चापरे॥`,
    telugu: `కొందరు ధ్యానంతో ఆత్మలో ఆత్మచే ఆత్మను చూస్తారు. మరి కొందరు సాంఖ్య యోగంతో, ఇంకా కొందరు కర్మ యోగంతో.`,
    english: `Some perceive the Supersoul within themselves through meditation, others through the cultivation of knowledge, and still others through working without fruitive desires.`,
    explanation: `Three paths to the same realization: meditation, philosophical knowledge, and desireless action. These are not competitors but alternatives suited to different temperaments. The same Supersoul is discovered through each genuine approach.`,
    takeaway: `Three paths to the same Self: meditation, philosophical knowledge, desireless action — suited to different temperaments.`,
    tags: ['wisdom', 'yoga']
  },
  '13.25': {
    sanskrit: `अन्ये त्वेवमजानन्तः श्रुत्वान्येभ्य उपासते।
तेऽपि चातितरन्त्येव मृत्युं श्रुतिपरायणाः॥`,
    telugu: `కానీ ఇవి తెలుసుకోలేకుండా ఇతరుల నుండి విన్న శ్రవణ పరాయణులు కూడా మృత్యువును దాటిపోతారు.`,
    english: `Again there are those who, although not conversant in spiritual knowledge, begin to worship the Supreme Person upon hearing about him from others. Because of their tendency to hear from authorities, they also transcend the path of birth and death.`,
    explanation: `Those who cannot meditate, analyze, or act desirelessly — even those who simply hear teachings from authorities and trust them — also cross beyond death. This is the Gita's most generous statement: even hearing with sincere receptivity is enough.`,
    takeaway: `Even sincere hearing and trusting qualified teachings is enough to cross beyond birth and death.`,
    tags: ['faith', 'wisdom']
  },
  '13.26': {
    sanskrit: `यावत्सञ्जायते किञ्चित्सत्त्वं स्थावरजङ्गमम्।
क्षेत्रक्षेत्रज्ञसंयोगात्तद्विद्धि भरतर्षभ॥`,
    telugu: `భరత శ్రేష్ఠా, స్థావర జంగమాలతో ఏ ప్రాణి జన్మిస్తుందో అది క్షేత్ర క్షేత్రజ్ఞుల సంయోగం నుండి అని తెలుసుకో.`,
    english: `O chief of the Bharatas, know that whatever you see in existence, both the moving and the nonmoving, is only a combination of the field of activities and the knower of the field.`,
    explanation: `Everything that exists — moving or stationary, living or inert — is a combination of field (prakriti) and knower (purusha). This is the complete metaphysical picture: nothing exists that is not this combination of matter and consciousness.`,
    takeaway: `Everything that exists is the combination of matter (field) and consciousness (knower) — nothing else.`,
    tags: ['wisdom', 'truth']
  },
  '13.27': {
    sanskrit: `समं सर्वेषु भूतेषु तिष्ठन्तं परमेश्वरम्।
विनश्यत्स्वविनश्यन्तं यः पश्यति स पश्यति॥`,
    telugu: `అన్ని నశించే భూతాలలో నశించకుండా సమంగా నిలిచిన పరమేశ్వరుని చూసేవాడు చూసేవాడు.`,
    english: `One who sees the Supersoul equally present everywhere, in every living being, does not degrade himself by his mind. Thus he approaches the transcendental destination.`,
    explanation: `To see the Supersoul equally present in all beings — the same unchanging presence in everything that changes — is to truly see. This equal vision is simultaneously metaphysical truth and ethical foundation: seeing the same Self in all makes harm impossible.`,
    takeaway: `Seeing the same Supersoul in all beings is both metaphysical truth and the foundation of all ethics.`,
    tags: ['wisdom', 'compassion']
  },
  '13.28': {
    sanskrit: `समं पश्यन्हि सर्वत्र समवस्थितमीश्वरम्।
न हिनस्त्यात्मनात्मानं ततो याति परां गतिम्॥`,
    telugu: `సర్వత్ర సమంగా అవస్థితమైన ఈశ్వరుని సమంగా చూసేవాడు ఆత్మచే ఆత్మను హింసించడు. అనంతర పరమ గతిని పొందుతాడు.`,
    english: `One who sees the Supersoul accompanying the individual soul in all bodies, and who understands that neither the soul nor the Supersoul within the destructible body is ever destroyed, actually sees.`,
    explanation: `The one who sees the Supreme equally everywhere does not injure the Self through the self. How? Because once you see the same Self in all, injuring 'another' becomes logically impossible — it would be injuring yourself. Equal vision dissolves the root of violence.`,
    takeaway: `Seeing the same Self in all makes violence logically impossible — you cannot harm without harming yourself.`,
    tags: ['wisdom', 'compassion']
  },
  '13.29': {
    sanskrit: `प्रकृत्यैव च कर्माणि क्रियमाणानि सर्वशः।
यः पश्यति तथात्मानमकर्तारं स पश्यति॥`,
    telugu: `అన్ని కర్మలు అన్ని విధాలా ప్రకృతి ద్వారా చేయబడుతున్నాయని, ఆత్మ అకర్తయని చూసేవాడు చూసేవాడు.`,
    english: `One who can see that all activities are performed by the body, which is created of material nature, and sees that the self does nothing, actually sees.`,
    explanation: `To see all actions performed by prakriti while the Self remains the non-doer — this vision dissolves ego-doership at its root. Not 'I did this' but 'nature did this through this body-mind instrument.' This dissolves both pride and guilt simultaneously.`,
    takeaway: `Seeing all actions performed by prakriti while the Self remains the non-doer dissolves both pride and guilt.`,
    tags: ['wisdom', 'soul']
  },
  '13.30': {
    sanskrit: `यदा भूतपृथग्भावमेकस्थमनुपश्यति।
तत एव च विस्तारं ब्रह्म सम्पद्यते तदा॥`,
    telugu: `భూతాల పృథగ్భావం ఒకే స్థానంలో ఉందని, అక్కడ నుండే విస్తారమని చూసేవాడు బ్రహ్మాన్ని పొందుతాడు.`,
    english: `When a sensible man ceases to see different identities due to different material bodies and he sees how beings are expanded everywhere, he attains the Brahman conception.`,
    explanation: `The many in the One, and the expansion of the One into the many — when both are seen simultaneously, Brahman is attained. The multiplicity of individual identities is real; so is the unity of the One in all. True vision holds both simultaneously.`,
    takeaway: `Holding both the many and the One simultaneously in vision — this is the attainment of Brahman.`,
    tags: ['wisdom', 'soul']
  },
  '13.31': {
    sanskrit: `अनादित्वान्निर्गुणत्वात्परमात्मायमव्ययः।
शरीरस्थोऽपि कौन्तेय न करोति न लिप्यते॥`,
    telugu: `కౌంతేయా, అనాది, నిర్గుణ, అవ్యయ పరమాత్మ శరీరంలో ఉన్నా చేయదు, అంటుకోదు.`,
    english: `Those with the vision of eternity can see that the imperishable soul is transcendental, eternal, and beyond the modes of nature. Despite contact with the material body, O Arjuna, the soul neither does anything nor is entangled.`,
    explanation: `The soul within the body does nothing and is tainted by nothing — like space within a room, which holds everything but is not the room. The soul is the witness; the body-mind complex is what acts. This recognition is freedom.`,
    takeaway: `The soul does nothing and is tainted by nothing — like space within a room, which holds all but is not the room.`,
    tags: ['wisdom', 'soul']
  },
  '13.32': {
    sanskrit: `यथा सर्वगतं सौक्ष्म्यादाकाशं नोपलिप्यते।
सर्वत्रावस्थितो देहे तथात्मा नोपलिप्यते॥`,
    telugu: `సూక్ష్మత వల్ల సర్వగత ఆకాశం అంటుకోనట్లు, సర్వత్ర అవస్థిత ఆత్మ కూడా దేహంలో అంటుకోదు.`,
    english: `The sky, due to its subtle nature, does not mix with anything, although it is all-pervading. In the same way, the soul situated in Brahman vision does not mix with the body, though situated in that body.`,
    explanation: `The sky metaphor: space pervades everything, is in contact with everything, yet is not stained by anything it contains. Similarly, the soul pervades the body, experiences everything in it, yet is not stained by any of it. The witness is never the thing witnessed.`,
    takeaway: `The soul is the witness, never the thing witnessed — like sky pervading all without being stained by anything.`,
    tags: ['wisdom', 'soul']
  },
  '13.33': {
    sanskrit: `यथा प्रकाशयत्येकः कृत्स्नं लोकमिमं रविः।
क्षेत्रं क्षेत्री तथा कृत्स्नं प्रकाशयति भारत॥`,
    telugu: `భరతవంశీయుడా, ఒకే సూర్యుడు ఈ సమస్త లోకాన్ని ప్రకాశింపజేసినట్లు, క్షేత్రి సమగ్ర క్షేత్రాన్ని ప్రకాశింపజేస్తాడు.`,
    english: `O son of Bharata, as the sun alone illuminates all this universe, so does the living entity, one within the body, illuminate the entire body by consciousness.`,
    explanation: `As one sun illuminates an entire world, the one knower of the field illuminates the entire field. Consciousness is the light that makes all experience possible — without it, the body-mind complex would be dark and inert. You are the light in your own life.`,
    takeaway: `Consciousness is the light that illuminates all experience — you are the light in your own life.`,
    tags: ['wisdom', 'soul']
  },
  '13.34': {
    sanskrit: `क्षेत्रक्षेत्रज्ञयोरेवमन्तरं ज्ञानचक्षुषा।
भूतप्रकृतिमोक्षं च ये विदुर्यान्ति ते परम्॥`,
    telugu: `ज्ञान चक्षुसा क्षेत्र क्षेत्रज्ञयोर अंतरम् — ఇలా తెలుసుకుని, భూత ప్రకృతి మోక్షాన్ని తెలిసినవారు పరమాన్ని పొందుతారు.`,
    english: `Those who see with eyes of knowledge the difference between the body and the knower of the body, and can also understand the process of liberation from bondage in material nature, attain to the supreme goal.`,
    explanation: `The 'eye of knowledge' (jnana-chakshusha) sees the distinction between field and knower. Those who see this clearly, and understand liberation from prakriti's bondage, attain the supreme. Knowing is not enough — seeing with understanding eyes is required.`,
    takeaway: `The 'eye of knowledge' sees the distinction between field and knower — this seeing is liberation.`,
    tags: ['wisdom', 'soul']
  },
  '13.35': {
    sanskrit: `इति क्षेत्रक्षेत्रज्ञविभागयोगः`,
    telugu: `ఇది క్షేత్ర క్షేత్రజ్ఞ విభాగ యోగం (13వ అధ్యాయ ముగింపు).`,
    english: `Thus ends the Yoga of the Distinction between the Field and the Knower of the Field.`,
    explanation: `Chapter 13 concludes with the vision of the one sun illuminating the entire world — one consciousness illuminating all experience in every being. The teaching: know yourself as that light, the witness consciousness, and be free.`,
    takeaway: `Know yourself as the witnessing light — not the objects it illuminates but the light itself.`,
    tags: ['wisdom', 'soul']
  },
  '14.1': {
    sanskrit: `श्रीभगवानुवाच
परं भूयः प्रवक्ष्यामि ज्ञानानां ज्ञानमुत्तमम्।
यज्ज्ञात्वा मुनयः सर्वे परां सिद्धिमितो गताः॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
జ్ఞానాలలో ఉత్తమమైన పరమ జ్ఞానాన్ని మళ్ళీ చెప్తాను. దీన్ని తెలుసుకుని ముని అందరూ ఇక్కడ నుండి పరమ సిద్ధికి వెళ్ళారు.`,
    english: `The Supreme Lord said: Again I shall declare to you this supreme wisdom, the best of all knowledge, knowing which all the sages have attained the highest perfection.`,
    explanation: `Chapter 14 begins by declaring its teaching as the highest of knowledge. The gunas — the three qualities of nature — are the key to understanding all of human experience and the mechanism of liberation from it.`,
    takeaway: `The teaching of the three gunas is the highest knowledge — understanding them unlocks liberation.`,
    tags: ['wisdom', 'knowledge']
  },
  '14.2': {
    sanskrit: `इदं ज्ञानमुपाश्रित्य मम साधर्म्यमागताः।
सर्गेऽपि नोपजायन्ते प्रलये न व्यथन्ति च॥`,
    telugu: `ఈ జ్ఞానాన్ని ఆశ్రయించి నా సాధర్మ్యానికి వచ్చిన వారు, సృష్టిలో జన్మించరు, ప్రళయంలో వ్యథ పడరు.`,
    english: `By becoming fixed in this knowledge, one can attain to the transcendental nature like my own. Thus established, one is not born at the time of creation or disturbed at the time of dissolution.`,
    explanation: `Those who are established in this knowledge attain the Divine's own nature — and are neither born at creation nor disturbed at dissolution. They have transcended the cosmic cycles. This is the fruit: freedom from the endless turning of the wheel.`,
    takeaway: `Freedom from the cosmic cycles of creation and dissolution — this is the fruit of gunatita wisdom.`,
    tags: ['wisdom', 'soul']
  },
  '14.3': {
    sanskrit: `मम योनिर्महद्ब्रह्म तस्मिन्गर्भं दधाम्यहम्।
सम्भवः सर्वभूतानां ततो भवति भारत॥`,
    telugu: `భరతవంశీయుడా, మహా బ్రహ్మ నా యోని. దానిలో నేను గర్భాన్ని ఉంచుతాను. సమస్త భూతాల జన్మ అక్కడ నుండి జరుగుతుంది.`,
    english: `The total material substance, called Brahman, is the source of birth, and it is that Brahman that I impregnate, making possible the births of all living beings, O son of Bharata.`,
    explanation: `The great prakriti (Brahman in its primordial material sense) is the womb; the Divine consciousness is the seed. All beings arise from this union. Creation is not mechanical but the result of the union of consciousness and nature — always both.`,
    takeaway: `All beings arise from the union of consciousness and nature — creation is always both, never just one.`,
    tags: ['wisdom', 'soul']
  },
  '14.4': {
    sanskrit: `सर्वयोनिषु कौन्तेय मूर्तयः सम्भवन्ति याः।
तासां ब्रह्म महद्योनिरहं बीजप्रदः पिता॥`,
    telugu: `కౌంతేయా, అన్ని యోనులలో జన్మించే సమస్త రూపాలకు మహా బ్రహ్మ యోని. నేను బీజప్రద పిత.`,
    english: `It should be understood that all species of life, O son of Kunti, are made possible by birth in this material nature, and that I am the seed-giving father.`,
    explanation: `In every species, in every birth, the same pattern: the Divine as father (consciousness) and prakriti as mother (nature). Every being is the child of both. This parental image makes the Divine's relationship to creation intimate rather than abstract.`,
    takeaway: `Every being is the child of both consciousness (the Divine) and nature — this intimate parental image transforms our understanding of creation.`,
    tags: ['wisdom', 'soul']
  },
  '14.5': {
    sanskrit: `सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः।
निबध्नन्ति महाबाहो देहे देहिनमव्ययम्॥`,
    telugu: `మహాబాహో, సత్వ, రజస్, తమస్ అనే గుణాలు ప్రకృతి సంభవాలు. అవ్యయుడైన దేహిని దేహంలో బంధిస్తాయి.`,
    english: `Material nature consists of three modes — goodness, passion, and ignorance. When the eternal living entity comes in contact with nature, O mighty-armed Arjuna, he becomes conditioned by these modes.`,
    explanation: `The three gunas (sattva, rajas, tamas) are the three 'ropes' that bind the immortal soul to the body. Not the body itself but the qualities of nature that operate through the body are what bind. Understanding this is the first step to freedom.`,
    takeaway: `The three gunas — not the body itself — are the ropes that bind the soul to the cycle.`,
    tags: ['wisdom', 'soul']
  },
  '14.6': {
    sanskrit: `तत्र सत्त्वं निर्मलत्वात्प्रकाशकमनामयम्।
सुखसङ्गेन बध्नाति ज्ञानसङ्गेन चानघ॥`,
    telugu: `అనఘా, వాటిలో సత్వ నిర్మలత్వంచే ప్రకాశకం, అనామయం. సుఖ సంగంచే మరియు జ్ఞాన సంగంచే బంధిస్తుంది.`,
    english: `O sinless one, the mode of goodness, being purer than the others, is illuminating, and it frees one from all sinful reactions. Those situated in that mode become conditioned by a sense of happiness and knowledge.`,
    explanation: `Sattva (goodness) is illuminating and pure — yet even it binds. How? Through attachment to happiness and knowledge. Even the most refined quality of nature creates attachment. Liberation requires transcending even sattva, not just rajas and tamas.`,
    takeaway: `Even sattva (goodness) binds through attachment to happiness and knowledge — liberation requires transcending all three gunas.`,
    tags: ['wisdom', 'truth']
  },
  '14.7': {
    sanskrit: `रजो रागात्मकं विद्धि तृष्णासङ्गसमुद्भवम्।
तन्निबध्नाति कौन्तेय कर्मसङ्गेन देहिनम्॥`,
    telugu: `కౌంతేయా, రజస్ రాగాత్మకం అని తెలుసుకో. తృష్ణా సంగం నుండి పుడుతుంది. అది కర్మ సంగంతో దేహిని బంధిస్తుంది.`,
    english: `The mode of passion is born of unlimited desires and longings, O son of Kunti, and because of this the embodied living entity is bound to material fruitive actions.`,
    explanation: `Rajas (passion) is the mode of desire — craving more, doing more, acquiring more. It binds through attachment to action and its fruits. Rajas is the engine of the ego-driven life: always seeking, rarely content.`,
    takeaway: `Rajas is the engine of ego-driven life — always seeking, rarely content, bound by craving.`,
    tags: ['wisdom', 'truth']
  },
  '14.8': {
    sanskrit: `तमस्त्वज्ञानजं विद्धि मोहनं सर्वदेहिनाम्।
प्रमादालस्यनिद्राभिस्तन्निबध्नाति भारत॥`,
    telugu: `భరతవంశీయుడా, తమస్ అజ్ఞానం నుండి పుట్టిందని తెలుసుకో. అది సమస్త దేహులను మోహింపజేస్తుంది. అది ప్రమాద, ఆలస్య, నిద్రలతో బంధిస్తుంది.`,
    english: `O son of Bharata, know that the mode of darkness, born of ignorance, is the delusion of all embodied living entities. The results of this mode are madness, indolence and sleep, which bind the conditioned soul.`,
    explanation: `Tamas (ignorance) is the mode of delusion — covering, darkening, confusing. It binds through negligence, laziness, and excessive sleep. Tamas is the enemy of awareness: it makes the important seem unimportant and keeps us stuck.`,
    takeaway: `Tamas covers awareness and keeps us stuck through negligence, laziness, and delusion.`,
    tags: ['wisdom', 'truth']
  },
  '14.9': {
    sanskrit: `सत्त्वं सुखे सञ्जयति रजः कर्मणि भारत।
ज्ञानमावृत्य तु तमः प्रमादे सञ्जयत्युत॥`,
    telugu: `భరతవంశీయుడా, సత్వ సుఖంలో బంధిస్తుంది. రజస్ కర్మలో బంధిస్తుంది. తమస్ జ్ఞానాన్ని కప్పి, ప్రమాదంలో బంధిస్తుంది.`,
    english: `O son of Bharata, the mode of goodness conditions one to happiness; passion conditions one to fruitive action; and ignorance, covering one's knowledge, binds one to madness.`,
    explanation: `The three modes bind in three ways: sattva binds to happiness (pleasant but still binding), rajas binds to action (compulsive doing), tamas covers knowledge and binds to negligence. All three are binding; understanding them is the first step to rising above.`,
    takeaway: `All three gunas bind differently — knowing how each operates is the first step to transcending them.`,
    tags: ['wisdom', 'truth']
  },
  '14.10': {
    sanskrit: `रजस्तमश्चाभिभूय सत्त्वं भवति भारत।
रजः सत्त्वं तमश्चैव तमः सत्त्वं रजस्तथा॥`,
    telugu: `భరతవంశీయుడా, రజస్ తమస్లను అభిభవించి సత్వ కలుగుతుంది. రజస్ సత్వ తమస్లను, తమస్ సత్వ రజస్లను అభిభవించి కలుగుతాయి.`,
    english: `Sometimes the mode of goodness becomes prominent, defeating the modes of passion and ignorance, O son of Bharata. Sometimes the mode of passion defeats goodness and ignorance, and at other times ignorance defeats goodness and passion. In this way there is always competition for supremacy.`,
    explanation: `The three modes are constantly in flux — competing and replacing one another. No state of being is permanent; the modes constantly shift. Understanding this dynamic explains why our moods, energy, and clarity fluctuate so dramatically from day to day.`,
    takeaway: `The gunas constantly shift and compete — this explains the dramatic fluctuations in mood, energy, and clarity.`,
    tags: ['wisdom', 'truth']
  },
  '14.11': {
    sanskrit: `सर्वद्वारेषु देहेऽस्मिन्प्रकाश उपजायते।
ज्ञानं यदा तदा विद्याद्विवृद्धं सत्त्वमित्युत॥`,
    telugu: `ఈ దేహంలో సర్వ ద్వారాలలో జ్ఞానం (ప్రకాశం) కలిగినప్పుడు, సత్వ వృద్ధి అయిందని తెలుసుకో.`,
    english: `The manifestation of the mode of goodness can be experienced when all the gates of the body are illuminated by knowledge.`,
    explanation: `When sattva dominates, light pours through all the senses and faculties — clarity, wisdom, and awareness pervade everything. Learning to recognize when you are in a sattvic state helps you protect and extend those periods.`,
    takeaway: `Learn to recognize sattvic states — clarity through all faculties — and protect and extend them.`,
    tags: ['wisdom', 'truth']
  },
  '14.12': {
    sanskrit: `लोभः प्रवृत्तिरारम्भः कर्मणामशमो स्पृहा।
रजस्येतानि जायन्ते विवृद्धे भरतर्षभ॥`,
    telugu: `భరత శ్రేష్ఠా, రజస్ వృద్ధి అయినప్పుడు లోభం, ప్రవృత్తి, కర్మల ఆరంభం, అశమం, స్పృహ జన్మిస్తాయి.`,
    english: `O chief of the Bharatas, when there is an increase in the mode of passion, the symptoms of great attachment, fruitive activity, intense endeavor, and uncontrollable desire and hankering develop.`,
    explanation: `When rajas increases: greed, frantic activity, undertaking of projects, restlessness, craving. These are all recognizable signs. Recognizing rajas at work allows us to step back and not be swept along by its momentum.`,
    takeaway: `Recognize rajas at work: greed, frantic activity, restlessness, craving — then step back from the momentum.`,
    tags: ['wisdom', 'self-control']
  },
  '14.13': {
    sanskrit: `अप्रकाशोऽप्रवृत्तिश्च प्रमादो मोह एव च।
तमस्येतानि जायन्ते विवृद्धे कुरुनन्दन॥`,
    telugu: `కురు సంతానమా, తమస్ వృద్ధి అయినప్పుడు అప్రకాశం, అప్రవృత్తి, ప్రమాదం, మోహం జన్మిస్తాయి.`,
    english: `When there is an increase in the mode of ignorance, O son of Kuru, darkness, inertia, madness and illusion are manifested.`,
    explanation: `When tamas increases: darkness of understanding, inertia, carelessness, delusion. These too are recognizable — the days when we cannot think clearly, cannot motivate ourselves, and feel confused about everything. These are tamas days; they call for extra effort to lift the veil.`,
    takeaway: `Recognize tamas at work: darkness, inertia, delusion — these days call for extra effort to lift the veil.`,
    tags: ['wisdom', 'self-control']
  },
  '14.14': {
    sanskrit: `यदा सत्त्वे प्रवृद्धे तु प्रलयं याति देहभृत्।
तदोत्तमविदां लोकानमलान्प्रतिपद्यते॥`,
    telugu: `సత్వ వృద్ధిలో దేహభృత్ పరలోకానికి వెళ్ళినప్పుడు, ఉత్తమ విద్వాంసుల నిర్మలమైన లోకాలు పొందుతాడు.`,
    english: `When one dies in the mode of goodness, one attains to the pure higher planets of the great sages.`,
    explanation: `Death in sattva leads to the pure realms of the great sages — the most elevated possible destination within the cycle. Dying in clarity, wisdom, and goodness creates the best conditions for the soul's next phase.`,
    takeaway: `The guna we are established in at death determines our next destination — prepare by cultivating sattva.`,
    tags: ['wisdom', 'soul']
  },
  '14.15': {
    sanskrit: `रजसि प्रलयं गत्वा कर्मसङ्गिषु जायते।
तथा प्रलीनस्तमसि मूढयोनिषु जायते॥`,
    telugu: `రజస్లో మరణించి కర్మ సంగులలో జన్మిస్తాడు. తమస్లో మరణించి మూఢ యోనులలో జన్మిస్తాడు.`,
    english: `When one dies in the mode of passion, one takes birth among those engaged in fruitive activities; and when one dies in the mode of ignorance, one takes birth in the animal kingdom.`,
    explanation: `Death in rajas leads to rebirth among the action-driven; death in tamas leads to lower births. The quality of consciousness at the time of death reflects a lifetime's cultivation. This is the urgency behind cultivating sattva: our next beginning depends on our current dominant mode.`,
    takeaway: `Cultivate sattva throughout life — the quality of consciousness at death reflects lifetime patterns.`,
    tags: ['wisdom', 'soul']
  },
  '14.16': {
    sanskrit: `कर्मणः सुकृतस्याहुः सात्त्विकं निर्मलं फलम्।
रजसस्तु फलं दुःखमज्ञानं तमसः फलम्॥`,
    telugu: `సాత్విక కర్మ ఫలం నిర్మలమైనది అని అంటారు. రజసిక కర్మ ఫలం దుఃఖం. తామసిక కర్మ ఫలం అజ్ఞానం.`,
    english: `The result of pious action is pure and is said to be in the mode of goodness. But action done in the mode of passion results in misery, and action performed in the mode of ignorance results in foolishness.`,
    explanation: `The fruits of the three gunas: sattva produces purity and clarity, rajas produces suffering, tamas produces foolishness. These are not punishments but natural consequences. The quality of an action determines the quality of its fruit.`,
    takeaway: `The quality of an action determines the quality of its fruit — sattva produces purity, rajas suffering, tamas foolishness.`,
    tags: ['wisdom', 'action']
  },
  '14.17': {
    sanskrit: `सत्त्वात्सञ्जायते ज्ञानं रजसो लोभ एव च।
प्रमादमोहौ तमसो भवतोऽज्ञानमेव च॥`,
    telugu: `సత్వ నుండి జ్ఞానం జన్మిస్తుంది. రజస్ నుండి లోభం. తమస్ నుండి ప్రమాదం, మోహం, అజ్ఞానం జన్మిస్తాయి.`,
    english: `From the mode of goodness, real knowledge develops; from the mode of passion, greed develops; and from the mode of ignorance develop foolishness, madness and illusion.`,
    explanation: `Knowledge from sattva, greed from rajas, delusion from tamas. This is the inner harvest of each guna. The daily cultivation of sattva is not just spiritual practice — it is literally the cultivation of wisdom. Rajas cultivates greed; tamas cultivates delusion.`,
    takeaway: `Cultivate sattva and you cultivate wisdom — this is not abstract but the literal inner harvest of each guna.`,
    tags: ['wisdom', 'truth']
  },
  '14.18': {
    sanskrit: `ऊर्ध्वं गच्छन्ति सत्त्वस्था मध्ये तिष्ठन्ति राजसाः।
जघन्यगुणवृत्तिस्था अधो गच्छन्ति तामसाः॥`,
    telugu: `సత్వ స్థులు ఊర్ధ్వం వెళ్తారు. రాజసులు మధ్యలో ఉంటారు. జఘన్య గుణ వృత్తిస్థులైన తమస్ వారు అధో గమిస్తారు.`,
    english: `Those situated in the mode of goodness gradually go upward to the higher planets; those in the mode of passion live on the earthly planets; and those in the mode of ignorance go down to the hellish worlds.`,
    explanation: `Upward for sattva, middle for rajas, downward for tamas. These aren't just cosmic geography — they describe trajectories of consciousness. Sattva elevates; rajas maintains the same level; tamas degrades. Choose wisely which mode to cultivate.`,
    takeaway: `Choose which guna to cultivate — sattva elevates, rajas maintains, tamas degrades consciousness.`,
    tags: ['wisdom', 'soul']
  },
  '14.19': {
    sanskrit: `नान्यं गुणेभ्यः कर्तारं यदा द्रष्टानुपश्यति।
गुणेभ्यश्च परं वेत्ति मद्भावं सोऽधिगच्छति॥`,
    telugu: `ద్రష్ట (జీవుడు) గుణాల కంటే వేరే కర్తను చూడనపుడు, గుణాల కంటే పరమైనదాన్ని తెలుసుకుని, నా భావాన్ని పొందుతాడు.`,
    english: `When one properly sees that in all activities no other performer is at work than these modes of nature and he knows the Supreme Lord, who is transcendental to all these modes, he attains my nature.`,
    explanation: `The key insight: when the observer sees that only the gunas act (no independent ego-doer) AND knows what is beyond the gunas — this person attains the Divine's nature. Both recognitions together — gunas as doer, and the transcendent beyond them — are liberating.`,
    takeaway: `Recognize the gunas as the doer AND know what transcends them — both together bring liberation.`,
    tags: ['wisdom', 'soul']
  },
  '14.20': {
    sanskrit: `गुणानेतानतीत्य त्रीन्देही देहसमुद्भवान्।
जन्ममृत्युजरादुःखैर्विमुक्तोऽमृतमश्नुते॥`,
    telugu: `ఈ మూడు శరీర జన్యాలైన గుణాలను అతిక్రమించి, దేహి జన్మ మృత్యు జరా దుఃఖాల నుండి విముక్తుడై అమృతత్వాన్ని పొందుతాడు.`,
    english: `When the embodied being is able to transcend these three modes associated with the material body, he can become free from birth, death, old age and their distresses and can enjoy nectar even in this life.`,
    explanation: `Transcend the three gunas — become free from birth, death, old age, and suffering. And enjoy nectar even in THIS life. Liberation is not only after death; the gunatita (one beyond the gunas) tastes immortality while still embodied.`,
    takeaway: `Transcend the gunas and taste immortality in this very life — liberation is not only after death.`,
    tags: ['wisdom', 'soul']
  },
  '14.21': {
    sanskrit: `अर्जुन उवाच
कैर्लिङ्गैस्त्रीन्गुणानेतानतीतो भवति प्रभो।
किमाचारः कथं चैतांस्त्रीन्गुणानतिवर्तते॥`,
    telugu: `అర్జునుడు పలికెను:
ప్రభో, ఈ మూడు గుణాలను అతిక్రమించినవాడు ఏ లక్షణాలు గలవాడు? ఎలా ప్రవర్తిస్తాడు? ఈ మూడు గుణాలను ఎలా దాటుతాడు?`,
    english: `Arjuna inquired: O my dear Lord, by which symptoms is one known who is transcendental to these three modes? What is his behavior? And how does one transcend these modes of nature?`,
    explanation: `Arjuna asks the most practical question: what does the gunatita (one beyond the gunas) actually look like? What are the observable signs? And how does one get there? These are the questions every serious student must ask.`,
    takeaway: `What does the one beyond the gunas actually look like? Asking this question begins the transformation.`,
    tags: ['wisdom', 'truth']
  },
  '14.22': {
    sanskrit: `श्रीभगवानुवाच
प्रकाशं च प्रवृत्तिं च मोहमेव च पाण्डव।
न द्वेष्टि सम्प्रवृत्तानि न निवृत्तानि काङ्क्षति॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
పాండవా, ప్రకాశం, ప్రవృత్తి, మోహం — ఇవి వచ్చినప్పుడు ద్వేషించడు, విరమించినప్పుడు కోరుకోకుండా ఉంటాడు.`,
    english: `The Supreme Personality of Godhead said: O son of Pandu, he who does not hate illumination, attachment and delusion when they are present or long for them when they disappear...`,
    explanation: `The gunatita neither hates the gunas when they arise nor craves them when they depart. No aversion to tamas when it appears, no craving for sattva to return when it leaves. Complete equanimity toward the entire movement of the gunas — this is the sign.`,
    takeaway: `Complete equanimity toward the entire movement of the gunas — neither hating nor craving any state.`,
    tags: ['wisdom', 'peace']
  },
  '14.23': {
    sanskrit: `उदासीनवदासीनो गुणैर्यो न विचाल्यते।
गुणा वर्तन्त इत्येव योऽवतिष्ठति नेङ्गते॥`,
    telugu: `ఉదాసీనుని వలె కూర్చుని, గుణాలచే చలించని, 'గుణాలు వర్తిస్తున్నాయి' అని అలాగే నిలిచి చలించనివాడు.`,
    english: `One who is sitting like one unconcerned, who is not disturbed by the modes of material nature, who knows that the modes alone are acting and remains unmoved by them...`,
    explanation: `The gunatita sits like a detached observer — 'the gunas are acting' rather than 'I am acting.' This witness-consciousness that sees the gunas moving without being moved by them is the very definition of transcendence.`,
    takeaway: `The witness who sees the gunas acting without being moved by them — this is transcendence.`,
    tags: ['wisdom', 'soul']
  },
  '14.24': {
    sanskrit: `समदुःखसुखः स्वस्थः समलोष्टाश्मकाञ्चनः।
तुल्यप्रियाप्रियो धीरस्तुल्यनिन्दात्मसंस्तुतिः॥`,
    telugu: `సమ సుఖ దుఃఖుడు, స్వస్థుడు, లోష్ట అశ్మ కాంచనాలలో సమత్వం, ప్రియ అప్రియాలలో తుల్యత, ధీరుడు, నిందా స్తుతులలో తుల్యత.`,
    english: `One who is equal in happiness and distress, who is settled in himself, who values a lump of dirt, a stone and a piece of gold equally, who is equal to the desirable and undesirable, who is steady, who is equal in censure and in praise...`,
    explanation: `Equal in pleasure and pain, self-contained, equal toward clod, stone, and gold, equal toward pleasant and unpleasant, steady, equal in blame and praise. This is the practical portrait of the gunatita — not detached from life but unswayed by any of its oscillations.`,
    takeaway: `The gunatita is equal toward all opposites — not detached from life but unswayed by any of its oscillations.`,
    tags: ['peace', 'wisdom']
  },
  '14.25': {
    sanskrit: `मानापमानयोस्तुल्यस्तुल्यो मित्रारिपक्षयोः।
सर्वारम्भपरित्यागी गुणातीतः स उच्यते॥`,
    telugu: `మాన అపమానాలలో సమత్వం, మిత్ర శత్రు పక్షాలలో సమత్వం, సర్వారంభ పరిత్యాగి — అతడు గుణాతీతుడని చెప్పబడతాడు.`,
    english: `One who is equal in honor and dishonor, equal to friend and foe, and has renounced all fruitive activities — such a person is said to have transcended the modes of nature.`,
    explanation: `Honor and dishonor equal, friend and enemy equal, all ego-initiated projects abandoned — this is the gunatita. Not extraordinary mystical states but this earthy, complete equanimity across all of life's fluctuations. This is the mark.`,
    takeaway: `Complete equanimity across honor/dishonor, friend/enemy — this earthy steadiness is the mark of the gunatita.`,
    tags: ['peace', 'wisdom']
  },
  '14.26': {
    sanskrit: `मां च योऽव्यभिचारेण भक्तियोगेन सेवते।
स गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते॥`,
    telugu: `అవ్యభిచారిణీ భక్తి యోగంతో నన్ను సేవించేవాడు గుణాలన్నింటినీ దాటి బ్రహ్మ భావానికి అర్హుడవుతాడు.`,
    english: `One who engages in full devotional service, unfailing in all circumstances, at once transcends the modes of material nature and thus comes to the level of Brahman.`,
    explanation: `Unfailing devotion in all circumstances — this is the path to transcending the gunas and attaining Brahman. Not difficult austerity or complex philosophy but the simplest and most accessible path: constant, pure, undivided devotion.`,
    takeaway: `Constant, pure, undivided devotion in all circumstances transcends the gunas and attains Brahman.`,
    tags: ['devotion', 'wisdom']
  },
  '14.27': {
    sanskrit: `ब्रह्मणो हि प्रतिष्ठाहममृतस्याव्ययस्य च।
शाश्वतस्य च धर्मस्य सुखस्यैकान्तिकस्य च॥`,
    telugu: `నేను అమృతస్య, అవ్యయస్య, శాశ్వత ధర్మస్య, ఐకాంతిక సుఖస్య బ్రహ్మానికి ప్రతిష్ఠ.`,
    english: `And I am the basis of the impersonal Brahman, which is immortal, imperishable and eternal and is the constitutional position of ultimate happiness.`,
    explanation: `The Divine is the foundation of Brahman itself — the Infinite rests on the Personal. This is the Gita's final word on the relationship between the personal Divine and the impersonal Absolute: they are not opposed; the personal is the ground of the impersonal.`,
    takeaway: `The Personal Divine is the foundation of the Impersonal Absolute — they are not opposed.`,
    tags: ['wisdom', 'devotion']
  },
  '15.1': {
    sanskrit: `श्रीभगवानुवाच
ऊर्ध्वमूलमधःशाखमश्वत्थं प्राहुरव्ययम्।
छन्दांसि यस्य पर्णानि यस्तं वेद स वेदवित्॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
ఊర్ధ్వ మూలం, అధో శాఖలు గల, ఛందస్సులు పర్ణాలుగా గల అవ్యయ అశ్వత్థాన్ని చెప్తారు. దాన్ని తెలిసినవాడు వేదవేత్త.`,
    english: `The Blessed Lord said: There is a banyan tree which has its roots upward and its branches down and whose leaves are the Vedic hymns. One who knows this tree is the knower of the Vedas.`,
    explanation: `The inverted tree of existence: roots above in the Divine, branches below in the manifest world. This striking image describes the cosmos as rooted in the transcendent. All of creation hangs downward from its source above — visible life is the branch, not the root.`,
    takeaway: `All of creation hangs from its source above — the visible world is the branch, not the root.`,
    tags: ['wisdom', 'knowledge']
  },
  '15.2': {
    sanskrit: `अधश्चोर्ध्वं प्रसृतास्तस्य शाखा गुणप्रवृद्धा विषयप्रवालाः।
अधश्च मूलान्यनुसंततानि कर्मानुबन्धीनि मनुष्यलोके॥`,
    telugu: `దాని శాఖలు గుణాలతో పెరిగి, విషయాలు చివురులుగా గలిగి పైన క్రింద వ్యాపించాయి. కర్మ అనుబంధమైన మూలాలు మానవ లోకంలో క్రింద కూడా ఉన్నాయి.`,
    english: `The branches of this tree extend downward and upward, nourished by the three modes of material nature. The twigs are the objects of the senses. This tree also has roots going down, and these are bound to the fruitive actions of human society.`,
    explanation: `The cosmic tree's branches — nourished by the gunas, budding into sense objects — spread up and down. Its roots also reach downward into the human world through karma. This complex image shows how desire-driven action perpetuates the entanglement of existence.`,
    takeaway: `Desire-driven action extends the roots of worldly entanglement in all directions — karma deepens the tree.`,
    tags: ['wisdom', 'action']
  },
  '15.3': {
    sanskrit: `न रूपमस्येह तथोपलभ्यते नान्तो न चादिर्न च सम्प्रतिष्ठा।
अश्वत्थमेनं सुविरूढमूलं असङ्गशस्त्रेण दृढेन छित्त्वा॥`,
    telugu: `ఈ లోకంలో దాని రూపం అలా గ్రహించబడదు — అంతమూ లేదు, ఆదీ లేదు, స్థానమూ లేదు. ఈ దృఢంగా పాటించిన మూలాలు గల అశ్వత్థాన్ని వైరాగ్య శాస్త్రంతో ఛేదించి.`,
    english: `The real form of this tree cannot be perceived in this world. No one can understand where it ends, where it begins, or where its foundation is. But with determination one must cut down this strongly rooted tree with the weapon of detachment.`,
    explanation: `The cosmic tree of illusion has no perceivable beginning, end, or foundation in the ordinary world. But it can be cut — with the weapon of non-attachment. Detachment (asanga) is not coldness but the clarity that sees through maya's entanglements.`,
    takeaway: `Cut the tree of illusion with the weapon of non-attachment — clarity that sees through maya.`,
    tags: ['wisdom', 'detachment']
  },
  '15.4': {
    sanskrit: `ततः पदं तत्परिमार्गितव्यं यस्मिन्गता न निवर्तन्ति भूयः।
तमेव चाद्यं पुरुषं प्रपद्ये यतः प्रवृत्तिः प्रसृता पुराणी॥`,
    telugu: `అప్పుడు ఆ పదాన్ని అన్వేషించాలి — ఎక్కడ వెళ్ళినవారు తిరిగి రారో. ఏ పురాతన పురుషుని నుండి పురాతన ప్రవృత్తి ప్రసరించిందో — 'ఆ ఆది పురుషుని ఆశ్రయిస్తున్నాను.'`,
    english: `Thereafter, one must seek that place from which, having gone, one never returns, and there surrender to that Supreme Personality of Godhead from whom everything began and from whom everything has been extending since time immemorial.`,
    explanation: `After cutting the tree of illusion, seek the place of no-return — the Supreme Person from whom all existence originally flowed. The surrender described here is the culmination: not passive resignation but active, decisive turning toward the Source.`,
    takeaway: `After cutting the tree of illusion, turn decisively toward the Source — this is the supreme surrender.`,
    tags: ['wisdom', 'devotion']
  },
  '15.5': {
    sanskrit: `निर्मानमोहा जितसङ्गदोषा अध्यात्मनित्या विनिवृत्तकामाः।
द्वन्द्वैर्विमुक्ताः सुखदुःखसंज्ञैः गच्छन्त्यमूढाः पदमव्ययम्॥`,
    telugu: `మానం, మోహం లేనివారు, ఆసక్తి దోషాన్ని జయించినవారు, అధ్యాత్మంలో నిత్యులు, కోరికలు తొలగినవారు, సుఖ దుఃఖ ద్వంద్వాల నుండి విముక్తులు — విమూఢులు అవ్యయ పదాన్ని పొందుతారు.`,
    english: `Those who are free from false prestige, illusion and false association, who understand the eternal, who are done with material lust, who are freed from the dualities of happiness and distress, and who are undeluded reach that eternal kingdom.`,
    explanation: `Five qualities of those who reach the eternal: free from pride and delusion, free from attachment, rooted in the eternal Self, free from desire, free from the pull of pleasure and pain. These are not prerequisites for beginning the path but descriptions of one who has walked it.`,
    takeaway: `Freedom from pride, delusion, attachment, desire, and the pull of opposites — these describe the arrival, not the entrance.`,
    tags: ['wisdom', 'peace']
  },
  '15.6': {
    sanskrit: `न तद्भासयते सूर्यो न शशाङ्को न पावकः।
यद्गत्वा न निवर्तन्ते तद्धाम परमं मम॥`,
    telugu: `సూర్యుడు, చంద్రుడు, అగ్ని ఆ (పదాన్ని) ప్రకాశింపజేయలేరు. ఎక్కడ వెళ్ళినవారు తిరిగి రారో — అదే నా పరమ ధామం.`,
    english: `That supreme abode of mine is not illumined by the sun or moon, nor by fire or electricity. Those who reach it never return to this material world.`,
    explanation: `The supreme abode is self-luminous — it doesn't need sun, moon, or fire to light it. This is not a physical place but the state of pure consciousness that is its own light. What illuminates everything cannot itself need illumination.`,
    takeaway: `The supreme abode is self-luminous — pure consciousness that illumines all but needs no illumination itself.`,
    tags: ['wisdom', 'soul']
  },
  '15.7': {
    sanskrit: `ममैवांशो जीवलोके जीवभूतः सनातनः।
मनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति॥`,
    telugu: `జీవ లోకంలో జీవభూతమైన నా సనాతన అంశమే మనస్సుతో కలిసిన ఆరు ఇంద్రియాలను ప్రకృతిలో ఆకర్షిస్తుంది.`,
    english: `The living entities in this conditioned world are my eternal fragmental parts. Due to conditioned life, they are struggling very hard with the six senses, which include the mind.`,
    explanation: `Every living being is an eternal fragment of the Divine — not a creation separate from it but a portion of the Divine itself. Yet in conditioned existence, this fragment struggles with the six senses. This struggle is the condition of embodied life — and recognizing our divine origin is what ends it.`,
    takeaway: `Every living being is an eternal fragment of the Divine — recognizing this origin ends the struggle.`,
    tags: ['soul', 'wisdom']
  },
  '15.8': {
    sanskrit: `शरीरं यदवाप्नोति यच्चाप्युत्क्रामतीश्वरः।
गृहीत्वैतानि संयाति वायुर्गन्धानिवाशयात्॥`,
    telugu: `ఈశ్వరుడు (జీవాత్మ) శరీరాన్ని ఏ విధంగా పొందుతాడో, ఏ విధంగా వదులుతాడో, వీటిని గ్రహించి వెళ్తాడు — గాలి పూల వాసనలు గ్రహించినట్లు.`,
    english: `The living entity in the material world carries its different conceptions of life from one body to another as the air carries aromas.`,
    explanation: `Like wind carrying fragrance from one place to another, the soul carries its bundle of impressions, tendencies, and desires from one body to the next. We are not our current body alone — we are an accumulation of many lives' worth of experience and orientation.`,
    takeaway: `The soul carries its bundle of tendencies from life to life — we are more than our current body alone.`,
    tags: ['soul', 'wisdom']
  },
  '15.9': {
    sanskrit: `श्रोत्रं चक्षुः स्पर्शनं च रसनं घ्राणमेव च।
अधिष्ठाय मनश्चायं विषयानुपसेवते॥`,
    telugu: `శ్రోత్రం, చక్షువు, స్పర్శన, రసన, ఘ్రాణం — వీటిని మరియు మనస్సు అధిష్ఠించి ఈ (జీవాత్మ) విషయాలను అనుభవిస్తుంది.`,
    english: `The living entity, thus taking another gross body, obtains a certain type of ear, eye, tongue, nose and sense of touch, which are grouped about the mind. He thus enjoys a particular set of sense objects.`,
    explanation: `The soul, inhabiting a body, uses the senses — ear, eye, touch, taste, smell — plus the mind to experience the world. The soul is the experiencer; the senses are its instruments. This distinction between the experiencer and the instruments is fundamental to self-knowledge.`,
    takeaway: `The soul is the experiencer; senses are its instruments — this distinction is fundamental to self-knowledge.`,
    tags: ['soul', 'wisdom']
  },
  '15.10': {
    sanskrit: `उत्क्रामन्तं स्थितं वापि भुञ्जानं वा गुणान्वितम्।
विमूढा नानुपश्यन्ति पश्यन्ति ज्ञानचक्षुषः॥`,
    telugu: `శరీరం వదులుతున్నా, నిలిచినా, గుణాల అనుభవం పొందుతున్నా — విమూఢులు చూడరు. జ్ఞాన చక్షువులు చూస్తారు.`,
    english: `The foolish cannot understand how a living entity can quit his body, nor can they understand what sort of body he enjoys under the spell of the modes of nature. But one whose eyes are trained in knowledge can see all this.`,
    explanation: `The ordinary eye sees only the physical — it cannot perceive the soul moving through bodies, experiencing through the gunas. But the eye of wisdom sees this clearly. Developing the inner eye of discernment — jnana-chakshu — is the purpose of all genuine practice.`,
    takeaway: `Develop the inner eye of discernment — ordinary eyes see only the physical, wisdom sees the soul.`,
    tags: ['wisdom', 'knowledge']
  },
  '15.11': {
    sanskrit: `यतन्तो योगिनश्चैनं पश्यन्त्यात्मन्यवस्थितम्।
यतन्तोऽप्यकृतात्मानो नैनं पश्यन्त्यचेतसः॥`,
    telugu: `ప్రయత్నిస్తున్న యోగులు ఆత్మలో ఉన్న దాన్ని చూస్తారు. అయినా ప్రయత్నించే కృతాత్మలు కాని అచేతనులు దాన్ని చూడరు.`,
    english: `The endeavoring transcendentalists who are situated in self-realization can see all this clearly. But those whose minds are not developed and who are not situated in self-realization cannot see what is taking place, though they may try.`,
    explanation: `Striving yogis see the soul clearly; striving but unprepared seekers do not. The difference is not effort but the quality of inner preparation and development. This is why sustained, systematic inner work matters — not just desire or occasional seeking.`,
    takeaway: `Sustained, systematic inner development — not just desire — is what opens the inner eye.`,
    tags: ['yoga', 'wisdom']
  },
  '15.12': {
    sanskrit: `यदादित्यगतं तेजो जगद्भासयतेऽखिलम्।
यच्चन्द्रमसि यच्चाग्नौ तत्तेजो विद्धि मामकम्॥`,
    telugu: `సూర్యుడిలో ఉన్న తేజస్సు — జగత్తంతా ప్రకాశింపజేసేది, చంద్రుడిలో ఉన్న తేజస్సు, అగ్నిలో ఉన్న తేజస్సు — ఆ తేజస్సు నా తేజస్సు అని తెలుసుకో.`,
    english: `The splendor of the sun, which dissipates the darkness of this whole world, comes from me. And the splendor of the moon and the splendor of fire are also from me.`,
    explanation: `Every ray of sunlight is the Divine's light. The moon's silver glow — the Divine's glow. Fire's warmth and illumination — the Divine's warmth and illumination. This teaching trains us to see the ordinary world as continuously and directly displaying the Divine's presence.`,
    takeaway: `Every ray of sunlight is the Divine's light — the world continuously displays the Divine's presence.`,
    tags: ['wisdom', 'devotion']
  },
  '15.13': {
    sanskrit: `गामाविश्य च भूतानि धारयाम्यहमोजसा।
पुष्णामि चौषधीः सर्वाः सोमो भूत्वा रसात्मकः॥`,
    telugu: `భూమిలో ప్రవేశించి, ఓజస్సుతో భూతాలను ధరిస్తున్నాను. రసాత్మకమైన సోముడై సమస్త ఓషధులను పోషిస్తున్నాను.`,
    english: `I enter into each planet, and by my energy they stay in orbit. I become the moon and thereby supply the juice of life to all vegetables.`,
    explanation: `The Divine enters the earth and holds planets in their orbits by its energy; becomes the moon and nourishes all plants with life-juice. This immediate, intimate engagement of the Divine in the physical processes of the cosmos reveals that the universe is not an abandoned machine but a living expression of divine care.`,
    takeaway: `The cosmos is not an abandoned machine but a living expression of divine care and engagement.`,
    tags: ['wisdom', 'truth']
  },
  '15.14': {
    sanskrit: `अहं वैश्वानरो भूत्वा प्राणिनां देहमाश्रितः।
प्राणापानसमायुक्तः पचाम्यन्नं चतुर्विधम्॥`,
    telugu: `ప్రాణులలో వైశ్వానరుడై, దేహాన్ని ఆశ్రయించి, ప్రాణాపాన సమాయుక్తుడై నాలుగు విధాల అన్నాన్ని పాకం చేస్తున్నాను.`,
    english: `I am the fire of digestion in the bodies of all living entities, and I join with the air of life, outgoing and incoming, to digest the four kinds of foodstuff.`,
    explanation: `The Divine is the digestive fire within every body — digesting all four types of food. This means that every act of eating and nourishing is itself a divine process. The Divine is not merely the grand cosmic architect but the intimate life-force within every body.`,
    takeaway: `The Divine is the intimate life-force within every body — the fire that digests, the breath that lives.`,
    tags: ['wisdom', 'soul']
  },
  '15.15': {
    sanskrit: `सर्वस्य चाहं हृदि संनिविष्टो मत्तः स्मृतिर्ज्ञानमपोहनं च।
वेदैश्च सर्वैरहमेव वेद्यो वेदान्तकृद्वेदविदेव चाहम्॥`,
    telugu: `సర్వుల హృదయంలో నేను ఉన్నాను. నా నుండి స్మృతి, జ్ఞానం, అపోహనం. సమస్త వేదాలచే తెలుసుకోవలసినది నేనే. వేదాంతకర్త మరియు వేదవేత్త కూడా నేనే.`,
    english: `I am seated in everyone's heart, and from me come remembrance, knowledge and forgetfulness. By all the Vedas, I am to be known. Indeed I am the compiler of Vedanta, and I am the knower of the Vedas.`,
    explanation: `The Divine is in every heart — the source of memory, knowledge, and forgetting. All scriptures point to the Divine as their ultimate subject. The Divine compiled the Vedanta and is also the true knower of it. Subject, teacher, text, and student are all forms of the one Divine.`,
    takeaway: `The Divine is in every heart — source of all memory, knowledge, and forgetting. All learning points here.`,
    tags: ['wisdom', 'soul']
  },
  '15.16': {
    sanskrit: `द्वाविमौ पुरुषौ लोके क्षरश्चाक्षर एव च।
क्षरः सर्वाणि भूतानि कूटस्थोऽक्षर उच्यते॥`,
    telugu: `లోకంలో రెండు పురుషులున్నారు — క్షరుడు మరియు అక్షరుడు. సమస్త భూతాలు క్షరాలు. కూటస్థుడు అక్షరుడు అని పిలువబడతాడు.`,
    english: `There are two classes of beings, the fallible and the infallible. In the material world every living entity is fallible, and in the spiritual world every living entity is called infallible.`,
    explanation: `Two categories of beings: the perishable (all embodied creatures) and the imperishable (the unmanifest, the ground of existence). Every embodied being is perishable in form; yet within each perishable form is an imperishable essence.`,
    takeaway: `Every perishable form contains an imperishable essence — the distinction between body and soul is fundamental.`,
    tags: ['soul', 'wisdom']
  },
  '15.17': {
    sanskrit: `उत्तमः पुरुषस्त्वन्यः परमात्मेत्युदाहृतः।
यो लोकत्रयमाविश्य बिभर्त्यव्यय ईश्वरः॥`,
    telugu: `కానీ ఉత్తమ పురుషుడు వేరే — పరమాత్మ అని పిలువబడతాడు. అవ్యయ ఈశ్వరుడు మూడు లోకాలలో ప్రవేశించి వాటిని భరిస్తాడు.`,
    english: `Besides these two, there is the greatest living personality, the Supreme Soul, the imperishable Lord himself, who has entered the three worlds and is maintaining them.`,
    explanation: `Beyond the perishable and imperishable stands the Supreme Person — Paramatma — who pervades and sustains all three worlds. This is the third and highest category: not just what is within all things but the One who actively sustains, maintains, and oversees the whole.`,
    takeaway: `Beyond perishable and imperishable stands the Supreme Person who actively sustains all — this is the highest.`,
    tags: ['soul', 'wisdom']
  },
  '15.18': {
    sanskrit: `यस्मात्क्षरमतीतोऽहमक्षरादपि चोत्तमः।
अतोऽस्मि लोके वेदे च प्रथितः पुरुषोत्तमः॥`,
    telugu: `నేను క్షరాన్ని అతిక్రమించాను, అక్షరం కంటే కూడా ఉత్తముడిని. కాబట్టి లోకంలో మరియు వేదంలో పురుషోత్తముడిగా ప్రసిద్ధుడిని.`,
    english: `Because I am transcendental, beyond both the fallible and the infallible, and because I am the greatest, I am celebrated both in the world and in the Vedas as that Supreme Person.`,
    explanation: `Krishna is beyond both the perishable and the imperishable — hence the name Purushottama, the Supreme Person. This transcendence-of-transcendence is the great teaching of Chapter 15: the Divine exceeds all categories, including the seemingly ultimate one of 'the imperishable.'`,
    takeaway: `The Divine exceeds all categories including the seemingly ultimate — this is the deepest mystery.`,
    tags: ['wisdom', 'soul']
  },
  '15.19': {
    sanskrit: `यो मामेवमसम्मूढो जानाति पुरुषोत्तमम्।
स सर्वविद्भजति मां सर्वभावेन भारत॥`,
    telugu: `భరతవంశీయుడా, ఈ విధంగా అసమ్మూఢుడై పురుషోత్తముడైన నన్ను తెలిసినవాడు సర్వవేత్త. సర్వభావంతో నన్ను భజిస్తాడు.`,
    english: `Whoever knows me as the Supreme Personality of Godhead, without doubting, is the knower of everything. He therefore engages himself in full devotional service to me, O Bharata.`,
    explanation: `Knowing the Divine as Purushottama — without doubt or confusion — makes one a knower of everything. And knowing everything this way, the natural response is full-hearted devotion. Knowledge of the highest naturally evokes the deepest love.`,
    takeaway: `Knowledge of the highest naturally evokes the deepest love — understanding leads to devotion.`,
    tags: ['wisdom', 'devotion']
  },
  '15.20': {
    sanskrit: `इति गुह्यतमं शास्त्रमिदमुक्तं मयानघ।
एतद्बुद्ध्वा बुद्धिमान्स्यात्कृतकृत्यश्च भारत॥`,
    telugu: `నిష్పాపా, ఇది నా ద్వారా చెప్పబడిన అత్యంత రహస్యమైన శాస్త్రం. దీన్ని తెలుసుకుని బుద్ధిమంతుడు, కృతకృత్యుడు అవుతాడు, భరతవంశీయుడా.`,
    english: `This is the most confidential part of the Vedic scriptures, O sinless one, and it is disclosed now by me. Whoever understands this will become wise, and all his endeavors will be crowned with success.`,
    explanation: `Chapter 15 ends with a promise: this teaching is the most secret of all scriptures; knowing it makes one wise and fulfills all endeavors. The chapter on Purushottama ends with the assurance that knowing the Supreme brings complete success to the one who truly grasps it.`,
    takeaway: `Knowing the Supreme completes all wisdom and fulfills all endeavors — this is the chapter's final promise.`,
    tags: ['wisdom', 'knowledge']
  },
  '16.1': {
    sanskrit: `श्रीभगवानुवाच
अभयं सत्त्वसंशुद्धिः ज्ञानयोगव्यवस्थितिः।
दानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम्॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
భయం లేమి, సత్త్వ శుద్ధి, జ్ఞాన యోగంలో స్థిరత, దానం, దమం, యజ్ఞం, స్వాధ్యాయం, తపస్సు, సరళత.`,
    english: `Fearlessness, purification of one's existence, cultivation of spiritual knowledge, charity, self-control, performance of sacrifice, study of the Vedas, austerity, simplicity...`,
    explanation: `The divine qualities begin: fearlessness, purity of heart, established in jnana yoga, charity, self-control, sacrifice, self-study, austerity, straightforwardness. These are not rules to follow but qualities that naturally develop in one who is genuinely oriented toward the Divine.`,
    takeaway: `Divine qualities develop naturally in one genuinely oriented toward the Divine — they are fruit, not force.`,
    tags: ['wisdom', 'courage']
  },
  '16.2': {
    sanskrit: `अहिंसा सत्यमक्रोधस्त्यागः शान्तिरपैशुनम्।
दया भूतेष्वलोलुप्त्वं मार्दवं ह्रीरचापलम्॥`,
    telugu: `అహింస, సత్యం, అక్రోధత, త్యాగం, శాంతి, అపైశుణం, దయ భూతాలలో, అలోలుపత్వం, మార్దవం, లజ్జ, చాపలం లేమి.`,
    english: `Non-violence, truthfulness, freedom from anger, renunciation, tranquility, aversion to faultfinding, compassion and freedom from covetousness, gentleness, modesty and steady determination...`,
    explanation: `More divine qualities: non-violence, truth, freedom from anger, renunciation, tranquility, not finding fault, compassion for all beings, freedom from greed, gentleness, modesty, steadiness. Each of these is both a practice and a fruit — cultivating them develops the others.`,
    takeaway: `Cultivate any one divine quality and it develops the others — they form an interconnected whole.`,
    tags: ['compassion', 'wisdom']
  },
  '16.3': {
    sanskrit: `तेजः क्षमा धृतिः शौचमद्रोहो नातिमानिता।
भवन्ति सम्पदं दैवीमभिजातस्य भारत॥`,
    telugu: `తేజస్సు, క్షమ, ధృతి, శుచి, అద్రోహం, అతి మాన రాహిత్యం — భరతవంశీయుడా, దైవీ సంపదకు జన్మించినవాని లక్షణాలు.`,
    english: `Vigor, forgiveness, fortitude, cleanliness, freedom from envy and the passion for honor — these transcendental qualities belong to godly men endowed with divine nature, O son of Bharata.`,
    explanation: `The final group: vigor, forgiveness, steadiness, purity, freedom from malice, freedom from excessive pride. These twenty-six divine qualities together describe the complete human being — one whose character is an expression of divine values in every dimension of life.`,
    takeaway: `The twenty-six divine qualities describe the complete human being — character as expression of the Divine.`,
    tags: ['wisdom', 'truth']
  },
  '16.4': {
    sanskrit: `दम्भो दर्पोऽभिमानश्च क्रोधः पारुष्यमेव च।
अज्ञानं चाभिजातस्य पार्थ सम्पदमासुरीम्॥`,
    telugu: `పార్థా, దంభం, దర్పం, అభిమానం, క్రోధం, పారుష్యం, అజ్ఞానం — ఆసురీ సంపదకు జన్మించిన వాని లక్షణాలు.`,
    english: `Pride, arrogance, conceit, anger, harshness and ignorance — these qualities belong to those of demonic nature, O son of Pritha.`,
    explanation: `In contrast to the twenty-six divine qualities, the demonic ones: pride, arrogance, conceit, anger, harshness, and ignorance. These six qualities cluster together and reinforce each other — pride breeds conceit, conceit breeds anger at being contradicted, anger produces harshness, and all together they perpetuate ignorance.`,
    takeaway: `The six demonic qualities reinforce each other — pride, conceit, anger, harshness, and ignorance cluster.`,
    tags: ['wisdom', 'truth']
  },
  '16.5': {
    sanskrit: `दैवी सम्पद्विमोक्षाय निबन्धायासुरी मता।
मा शुचः सम्पदं दैवीमभिजातोऽसि पाण्डव॥`,
    telugu: `పాండవా, దైవీ సంపద విమోక్షానికి, ఆసురీ సంపద నిబంధానికి (దారి తీస్తుంది). నువ్వు దైవీ సంపదకు జన్మించావు — దుఃఖపడకు.`,
    english: `The divine qualities lead to liberation, whereas the demonic qualities lead to bondage. Do not worry, O son of Pandu, for you are born with the divine qualities.`,
    explanation: `Divine qualities lead to liberation; demonic to bondage. And crucially: Krishna tells Arjuna he is born of divine qualities. Don't grieve — you are already oriented in the right direction. This reassurance at the critical moment is what a true teacher gives.`,
    takeaway: `At the critical moment, the true teacher says: you are already oriented rightly — do not grieve.`,
    tags: ['wisdom', 'courage']
  },
  '16.6': {
    sanskrit: `द्वौ भूतसर्गौ लोकेऽस्मिन्दैव आसुर एव च।
दैवो विस्तरशः प्रोक्त आसुरं पार्थ मे श्रृणु॥`,
    telugu: `పార్థా, ఈ లోకంలో రెండు రకాల ప్రాణి సృష్టి ఉన్నాయి — దైవీ మరియు ఆసురీ. దైవీని విస్తారంగా చెప్పాను. ఆసురీని నా నుండి వినుము.`,
    english: `O son of Pritha, in this world there are two kinds of created beings. One is called the divine and the other demonic. I have already explained to you at length the divine qualities. Now hear from me of the demoniac.`,
    explanation: `Two fundamental orientations: divine and demonic. Not referring to mythological beings but to psychological and ethical dispositions within human nature itself. Each person carries both tendencies — the choice of which to cultivate is the most important choice one makes.`,
    takeaway: `Divine and demonic are not mythological but psychological — every person carries both tendencies.`,
    tags: ['wisdom', 'truth']
  },
  '16.7': {
    sanskrit: `प्रवृत्तिं च निवृत्तिं च जना न विदुर्असुराः।
न शौचं नापि चाचारो न सत्यं तेषु विद्यते॥`,
    telugu: `ఆసురీ జనులు ప్రవృత్తి నివృత్తులు తెలియరు. వారిలో శుచి, సదాచారం, సత్యం లేవు.`,
    english: `Those who are demonic do not know what is to be done and what is not to be done. Neither cleanliness nor proper behavior nor truth is found in them.`,
    explanation: `The demonic orientation is characterized by confusion about what to do and what to avoid — and the absence of purity, proper conduct, and truth. Not external observance but genuine inner orientation: living from values, not from impulse alone.`,
    takeaway: `The demonic orientation lacks clear values — confusion about right action, impurity, improper conduct.`,
    tags: ['wisdom', 'truth']
  },
  '16.8': {
    sanskrit: `असत्यमप्रतिष्ठं ते जगदाहुरनीश्वरम्।
अपरस्परसम्भूतं किमन्यत्कामहैतुकम्॥`,
    telugu: `వారు జగత్తు అసత్తు, ఆధారం లేనిది, ఈశ్వరుడు లేనిది అని చెప్తారు. పరస్పరం సంభవించినది. కోరిక తప్ప ఇతర కారణం ఏమిటి?`,
    english: `They say that this world is unreal, with no foundation, no God in control. They say it is produced of sex desire and has no cause other than lust.`,
    explanation: `The demonic worldview: the world has no ultimate foundation, no divine order, no God — it arose by chance from mutual desire and has no deeper purpose. This nihilism, when lived out, removes all ethical constraint and justifies any behavior that gratifies desire.`,
    takeaway: `Nihilism — 'no foundation, no God, no purpose' — when lived out, removes all ethical constraint.`,
    tags: ['wisdom', 'truth']
  },
  '16.9': {
    sanskrit: `एतां दृष्टिमवष्टभ्य नष्टात्मानो अल्पबुद्धयः।
प्रभवन्त्युग्रकर्माणः क्षयाय जगतोऽहिताः॥`,
    telugu: `ఈ దృష్టిని పట్టుకుని నష్టాత్ములు, అల్ప బుద్ధులు, ఉగ్ర కర్ముడు, జగత్తు నష్టానికి అహితులు వర్ధిల్లుతారు.`,
    english: `Following such conclusions, the demoniac, who are lost to themselves and who have no intelligence, engage in unbeneficial, horrible works meant to destroy the world.`,
    explanation: `Those who act from the demonic worldview — 'nothing is real, no God, no purpose' — are lost to themselves, limited in intelligence, engaged in terrible actions that harm the world. This is the practical consequence of philosophical nihilism: without meaning, anything becomes permissible.`,
    takeaway: `Philosophical nihilism produces ethical collapse — without meaning, anything becomes permissible.`,
    tags: ['wisdom', 'truth']
  },
  '16.10': {
    sanskrit: `काममाश्रित्य दुष्पूरं दम्भमानमदान्विताः।
मोहाद्गृहीत्वासद्ग्राहान्प्रवर्तन्ते ऽशुचिव्रताः॥`,
    telugu: `తృప్తి కాని కోరికను ఆశ్రయించి, దంభ మాన మదంతో కూడినవారు, మోహంచే అసద్విషయాలు పట్టుకుని, అశుచివ్రతంతో ప్రవర్తిస்তారు.`,
    english: `Taking shelter of insatiable lust and absorbed in the conceit of pride and false prestige, the demoniac, thus illusioned, are always sworn to unclean work, attracted by the impermanent.`,
    explanation: `The demonic life: trapped in insatiable desire, full of conceit, intoxicated by pride, drawn to falsehood through delusion, committed to impure practices. Each quality feeds the others — desire breeds conceit, conceit breeds pride, pride breeds delusion, delusion breeds more desire.`,
    takeaway: `Insatiable desire breeds conceit and pride, which breed delusion, which deepens desire — a self-reinforcing spiral.`,
    tags: ['wisdom', 'self-control']
  },
  '16.11': {
    sanskrit: `चिन्तामपरिमेयां च प्रलयान्तामुपाश्रिताः।
कामोपभोगपरमा एतावदिति निश्चिताः॥`,
    telugu: `మరణ పర్యంతం అపరిమిత చింతలు ఆశ్రయించినవారు, కామ భోగమే పరమ అని, ఇంతే అని నిశ్చయించుకున్నారు.`,
    english: `They believe that to gratify the senses is the prime necessity of human civilization. Thus until the end of life their anxiety is immeasurable. Bound by a network of hundreds of thousands of desires and absorbed in lust and anger, they secure money by illegal means for sense gratification.`,
    explanation: `The demonic person is consumed by anxiety until death — because insatiable desire always generates anxiety. Believing sense pleasure is the ultimate goal, they live in perpetual insufficiency. No amount ever satisfies because satisfaction is structurally impossible within this framework.`,
    takeaway: `Believing sense pleasure is the ultimate goal creates perpetual insufficiency — satisfaction becomes impossible.`,
    tags: ['wisdom', 'detachment']
  },
  '16.12': {
    sanskrit: `आशापाशशतैर्बद्धाः कामक्रोधपरायणाः।
ईहन्ते कामभोगार्थमन्यायेनार्थसञ्चयान्॥`,
    telugu: `ఆశ పాశ శతాలచే బంధించబడినవారు, కామ క్రోధ పరాయణులు, కామ భోగం కోసం అన్యాయమార్గంతో సంపద సంపాదించాలని ప్రయత్నిస్తారు.`,
    english: `Bound by a network of hundreds of thousands of desires and absorbed in lust and anger, they secure money by illegal means for sense gratification.`,
    explanation: `Desire and anger form the twin engines of the demonic life — and the result is unethical means of acquiring what desire demands. The chains of hope and desire multiply into a web that becomes increasingly difficult to escape, each fulfilled desire generating new desires.`,
    takeaway: `Desire and anger as twin engines drive unethical behavior — the web of desire becomes increasingly unescapable.`,
    tags: ['wisdom', 'self-control']
  },
  '16.13': {
    sanskrit: `इदमद्य मया लब्धमिमं प्राप्स्ये मनोरथम्।
इदमस्तीदमपि मे भविष्यति पुनर्धनम्॥`,
    telugu: `ఇది ఈ రోజు నాచే పొందబడింది, ఈ మనోరథం పొందుతాను. ఇది నాది, ఇది కూడా నాకు భవిష్యత్తులో ధనంగా ఉంటుంది.`,
    english: `The demoniac person thinks: 'So much wealth do I have today, and I will gain more according to my schemes. So much is mine now, and it will increase in the future, more and more.'`,
    explanation: `The internal monologue of the demonic orientation: 'I got this, I'll get that, I have this, more will come.' This endless accumulation-fantasy is the alternative to inner peace — instead of finding sufficiency within, projecting an endless horizon of 'more' outside.`,
    takeaway: `The accumulation-fantasy — 'I got this, I'll get more' — is the alternative to inner peace.`,
    tags: ['wisdom', 'detachment']
  },
  '16.14': {
    sanskrit: `असौ मया हतः शत्रुर्हनिष्ये चापरानपि।
ईश्वरोऽहमहं भोगी सिद्धोऽहं बलवान्सुखी॥`,
    telugu: `ఇతనిని నేను సంహరించాను, ఇతరులను కూడా సంహరిస్తాను. నేను ఈశ్వరుడను, భోక్తను, సిద్ధుడను, బలవంతుడను, సుఖుడను.`,
    english: `'I have killed this enemy, and I will kill others too. I am the lord of everything, I am the enjoyer, I am perfect, powerful and happy.'`,
    explanation: `The demonic self-narrative: 'I killed my enemies, I will kill more. I am the lord, the enjoyer, perfect, powerful, happy.' This grandiose self-image — isolated from genuine relationship, genuine humility, genuine service — is both the symptom and the cause of the demonic orientation.`,
    takeaway: `Grandiose self-narrative — 'I am the lord, the enjoyer, perfect' — is the mark of the demonic orientation.`,
    tags: ['wisdom', 'truth']
  },
  '16.15': {
    sanskrit: `आढ्योऽभिजनवानस्मि कोऽन्योऽस्ति सदृशो मया।
यक्ष्ये दास्यामि मोदिष्य इत्यज्ञानविमोहिताः॥`,
    telugu: `ధనవంతుడను, ఉత్తమ కులజుడను. నాతో సమానుడు మరొకడెవడు? యజ్ఞం చేస్తాను, దానం ఇస్తాను, ఆనందిస్తాను — అని అజ్ఞాన విమోహితులు.`,
    english: `'I am the richest man, surrounded by aristocratic relatives. There is none so powerful and happy as I am. I shall perform sacrifices, I shall give some charity, and thus I shall rejoice.' In this way, such persons are deluded by ignorance.`,
    explanation: `Even the religious activities of the demonic — sacrifice, charity — are performed from pride and ego rather than genuine devotion. The outer forms are present; the inner orientation is absent. Religious activity done from ego is not religion but self-congratulation.`,
    takeaway: `Religious activity done from ego is not religion but self-congratulation — inner orientation determines all.`,
    tags: ['wisdom', 'truth']
  },
  '16.16': {
    sanskrit: `अनेकचित्तविभ्रान्ता मोहजालसमावृताः।
प्रसक्ताः कामभोगेषु पतन्ति नरकेऽशुचौ॥`,
    telugu: `అనేక చింతలచే విభ్రాంతులు, మోహ జాలంలో చిక్కుకున్నవారు, కామ భోగాలలో ఆసక్తులు — అపవిత్రమైన నరకంలో పడతారు.`,
    english: `Thus perplexed by various anxieties and bound by a network of illusions, they become too strongly attached to sense enjoyment and fall down into hell.`,
    explanation: `Caught in a web of countless anxieties, bound by the net of delusion, obsessed with sense pleasure — such people fall into hell. 'Hell' here is not just a future punishment but the quality of life they already live: anxiety-ridden, deluded, obsessed.`,
    takeaway: `The demonic life is already a form of hell — perpetual anxiety, delusion, obsession with pleasure.`,
    tags: ['wisdom', 'truth']
  },
  '16.17': {
    sanskrit: `आत्मसम्भाविताः स्तब्धा धनमानमदान्विताः।
यजन्ते नामयज्ञैस्ते दम्भेनाविधिपूर्वकम्॥`,
    telugu: `ఆత్మ సంభావితులు, స్తబ్ధులు, ధన మాన మదాన్వితులు — వారు నామ మాత్రమైన యజ్ఞాలు, దంభంతో విధి రహితంగా చేస్తారు.`,
    english: `Self-complacent and always impudent, deluded by wealth and false prestige, they sometimes proudly perform sacrifices in name only, without following any rules or regulations.`,
    explanation: `The demonic person's 'worship' is performance — not following proper procedure, not in genuine humility, not with real reverence. It is sacrifice in name only, done to display wealth and status. The outer form of religion masks an inner orientation that is its opposite.`,
    takeaway: `Outer religious form without inner humility is performance, not worship — a mask, not a reality.`,
    tags: ['wisdom', 'truth']
  },
  '16.18': {
    sanskrit: `अहङ्कारं बलं दर्पं कामं क्रोधं च संश्रिताः।
मामात्मपरदेहेषु प्रद्विषन्तोऽभ्यसूयकाः॥`,
    telugu: `అహంకారం, బలం, దర్పం, కామం, క్రోధాన్ని ఆశ్రయించి, అసూయకులు, ఆత్మలో మరియు పర దేహాలలో ఉన్న నన్ను ద్వేషిస్తారు.`,
    english: `Bewildered by false ego, strength, pride, lust and anger, the demons become envious of the Supreme Personality of Godhead, who is situated in their own bodies and in the bodies of others, and blaspheme against the real religion.`,
    explanation: `The demonic person's deepest error: hating the Divine in themselves and in others. The Divine is within every heart — but the demonic person's ego, pride, lust, and anger make them hostile to precisely that divine presence. They attack what would liberate them.`,
    takeaway: `The deepest error: hating the Divine presence within themselves and others — attacking what would liberate them.`,
    tags: ['wisdom', 'truth']
  },
  '16.19': {
    sanskrit: `तानहं द्विषतः क्रूरान्संसारेषु नराधमान्।
क्षिपाम्यजस्रमशुभानासुरीष्वेव योनिषु॥`,
    telugu: `ద్వేషించే, క్రూరమైన, నరాధముల, అశుభులను నేను నిరంతరం ఆసురీ యోనులలో చేస్తాను.`,
    english: `Those who are envious and mischievous, who are the lowest among men, I perpetually cast into the ocean of material existence, into various demonic species of life.`,
    explanation: `Those who are consistently demonic in their orientation are drawn, by their own accumulated tendencies, into circumstances that reflect and reinforce those tendencies. The universe is just — it mirrors what we are.`,
    takeaway: `The universe is just — it draws each being into circumstances that reflect and reinforce their own orientation.`,
    tags: ['wisdom', 'truth']
  },
  '16.20': {
    sanskrit: `आसुरीं योनिमापन्ना मूढा जन्मनि जन्मनि।
मामप्राप्यैव कौन्तेय ततो यान्त्यधमां गतिम्॥`,
    telugu: `కౌంతేయా, జన్మ జన్మకు ఆసురీ యోనికి వచ్చిన మూఢులు నన్ను పొందలేక తక్కువ స్థితికి వెళ్తారు.`,
    english: `Attaining repeated birth amongst the species of demoniac life, O son of Kunti, such persons can never approach me. Gradually they sink down to the most abominable type of existence.`,
    explanation: `Birth after birth in demonic circumstances — never reaching the Divine — and sinking lower. This is not punishment but the natural consequence of a life oriented away from the Source. Every orientation either draws one toward the Divine or moves one away.`,
    takeaway: `Every orientation either draws one toward the Divine or moves one away — this accumulates across lives.`,
    tags: ['soul', 'wisdom']
  },
  '16.21': {
    sanskrit: `त्रिविधं नरकस्यैदं द्वारं नाशनमात्मनः।
कामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥`,
    telugu: `ఆత్మ నాశకమైన నరకానికి ఈ మూడు ద్వారాలు — కామం, క్రోధం, లోభం. కాబట్టి ఈ మూడింటినీ విడవాలి.`,
    english: `There are three gates leading to this hell — lust, anger and greed. Every sane man should give these up, for they lead to the degradation of the soul.`,
    explanation: `The three gates to self-destruction: lust (kama), anger (krodha), and greed (lobha). These three form a destructive trinity — each one feeds the other two. Giving them up is not suppression but transformation: redirecting desire toward the Divine, anger at injustice into righteous action, and generosity replacing greed.`,
    takeaway: `Lust, anger, and greed form a destructive trinity — transform them rather than merely suppressing them.`,
    tags: ['self-control', 'wisdom']
  },
  '16.22': {
    sanskrit: `एतैर्विमुक्तः कौन्तेय तमोद्वारैस्त्रिभिर्नरः।
आचरत्यात्मनः श्रेयस्ततो याति परां गतिम्॥`,
    telugu: `కౌంతేయా, ఈ మూడు తమో ద్వారాల నుండి విముక్తుడైన నరుడు ఆత్మ శ్రేయస్సు ఆచరించి, పరమ గతి పొందుతాడు.`,
    english: `O son of Kunti, a man who has escaped these three gates of hell leads a life conducive to self-realization and thus gradually attains the supreme destination.`,
    explanation: `Free from lust, anger, and greed — the person who escapes these three gates naturally begins doing what benefits the soul and gradually reaches the supreme. The three 'hell-gates' close automatically when the divine orientation opens; virtue is not forced but natural.`,
    takeaway: `Free from lust, anger, and greed, virtue is not forced but natural — divine qualities arise spontaneously.`,
    tags: ['wisdom', 'self-control']
  },
  '16.23': {
    sanskrit: `यः शास्त्रविधिमुत्सृज्य वर्तते कामकारतः।
न स सिद्धिमवाप्नोति न सुखं न परां गतिम्॥`,
    telugu: `శాస్త్ర విధి విడిచి, కామ ప్రేరణతో ప్రవర్తించే వాడు సిద్ధిని, సుఖాన్ని, పరమ గతిని పొందడు.`,
    english: `He who discards scriptural injunctions and acts according to his own whims attains neither perfection, nor happiness, nor the supreme destination.`,
    explanation: `Those who abandon the guidance of scripture and act purely from personal whim gain neither perfection, nor happiness, nor liberation. Scripture represents accumulated human wisdom — not arbitrary rules but the distilled understanding of what leads to genuine flourishing.`,
    takeaway: `Scripture is accumulated wisdom about what leads to flourishing — abandoning it for whim leads nowhere good.`,
    tags: ['wisdom', 'duty']
  },
  '16.24': {
    sanskrit: `तस्माच्छास्त्रं प्रमाणं ते कार्याकार्यव्यवस्थितौ॥
ज्ञात्वा शास्त्रविधानोक्तं कर्म कर्तुमिहार्हसि॥`,
    telugu: `కాబట్టి నీకు కర్తవ్య అకర్తవ్యాల నిర్ణయంలో శాస్త్రమే ప్రమాణం. శాస్త్ర విధానంలో చెప్పిన కర్మ ఇక్కడ చేయడం తగినది.`,
    english: `One should therefore understand what is duty and what is not duty by the regulations of the scriptures. Knowing such rules and regulations, one should act so that one may gradually be elevated.`,
    explanation: `Chapter 16 ends with its most practical guidance: scripture is the authority for determining what to do and avoid. Act according to scriptural guidance. This is not blind rule-following but using humanity's accumulated wisdom as a guide while developing one's own discernment.`,
    takeaway: `Use accumulated wisdom as a guide while developing your own discernment — this is what scripture is for.`,
    tags: ['wisdom', 'duty']
  },
  '17.1': {
    sanskrit: `अर्जुन उवाच
ये शास्त्रविधिमुत्सृज्य यजन्ते श्रद्धयान्विताः।
तेषां निष्ठा तु का कृष्ण सत्त्वमाहो रजस्तमः॥`,
    telugu: `అర్జునుడు పలికెను:
కృష్ణా, శాస్త్ర విధి విడిచి శ్రద్ధతో పూజించేవారి నిష్ఠ ఏమిటి? సత్వమా, రజస్సా, తమస్సా?`,
    english: `Arjuna said: O Krishna, what is the situation of those who do not follow the principles of scripture but worship according to their own imagination? Are they in goodness, in passion or in ignorance?`,
    explanation: `A subtle and important question: what is the spiritual status of those who are sincere but not following scripture? This is a question about the relationship between sincerity and correct practice. Krishna's answer involves the three gunas as a framework for understanding different qualities of faith.`,
    takeaway: `Sincerity without correct guidance and correct guidance without sincerity — Chapter 17 addresses both.`,
    tags: ['wisdom', 'faith']
  },
  '17.2': {
    sanskrit: `श्रीभगवानुवाच
त्रिविधा भवति श्रद्धा देहिनां सा स्वभावजा।
सात्त्विकी राजसी चैव तामसी चेति तां श्रृणु॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
దేహులకు స్వభావం నుండి జన్మించే శ్రద్ధ మూడు రకాలు — సాత్త్విక, రాజసిక, తామసిక. దాన్ని వినుము.`,
    english: `The Supreme Personality of Godhead said: According to the modes of nature acquired by the embodied soul, one's faith can be of three kinds — in goodness, in passion or in ignorance. Now hear about these.`,
    explanation: `Faith itself is qualified by the gunas. This is a radical insight: not all faith is the same — the quality of one's faith reflects and determines the direction of one's life. Sattvic faith leads toward liberation; rajasic toward power; tamasic toward ignorance.`,
    takeaway: `Not all faith is the same — the guna-quality of faith reflects and shapes the direction of one's life.`,
    tags: ['wisdom', 'faith']
  },
  '17.3': {
    sanskrit: `सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत।
श्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः॥`,
    telugu: `భరతవంశీయుడా, ప్రతి వ్యక్తి శ్రద్ధ సత్వానుసారం ఉంటుంది. ఈ పురుషుడు శ్రద్ధమయుడు. ఎవడు ఏ శ్రద్ధ గలవాడో అతడు ఆ విధంగానే ఉంటాడు.`,
    english: `O son of Bharata, according to one's existence under the various modes of nature, one evolves a particular kind of faith. The living being is said to be of a particular faith according to the modes he has acquired.`,
    explanation: `'As one's faith is, so one is' — this is one of the Gita's most psychologically profound statements. We are constituted by our deep beliefs and values. What we ultimately trust and orient around shapes everything about us — our worship, our choices, our destiny.`,
    takeaway: `As one's faith is, so one is — our deepest beliefs and values constitute who we are.`,
    tags: ['wisdom', 'faith']
  },
  '17.4': {
    sanskrit: `यजन्ते सात्त्विका देवान्यक्षरक्षांसि राजसाः।
प्रेतान्भूतगणांश्चान्ये यजन्ति तामसा जनाः॥`,
    telugu: `సాత్త్విక జనులు దేవతలను, రాజసులు యక్ష రక్షసులను, తామస జనులు ప్రేతాలను భూతాలను పూజిస్తారు.`,
    english: `Men in the mode of goodness worship the demigods; those in the mode of passion worship the demons; and those in the mode of ignorance worship ghosts and spirits.`,
    explanation: `The quality of one's worship reveals the quality of one's consciousness. The sattvic worship the Divine and divine beings; the rajasic worship power-beings and demons; the tamasic worship the spirits of the dead. Each orientation reflects and reinforces the inner state.`,
    takeaway: `What we worship reveals who we are — the quality of worship reflects the quality of consciousness.`,
    tags: ['faith', 'wisdom']
  },
  '17.5': {
    sanskrit: `अशास्त्रविहितं घोरं तप्यन्ते ये तपो जनाः।
दम्भाहङ्कारसंयुक्ताः कामरागबलान्विताः॥`,
    telugu: `శాస్త్ర విహితం కాని, ఘోరమైన తపస్సు తపించే జనులు, దంభ అహంకార సంయుక్తులు, కామ రాగ బలాన్వితులు.`,
    english: `Those who undergo severe austerities and penances not recommended in the scriptures, performing them out of pride and egoism, who are impelled by lust and attachment...`,
    explanation: `Self-inflicted severe austerities not prescribed by scripture — motivated by pride and ego rather than genuine spiritual development — are condemned. The motive matters as much as the practice. Pride-driven suffering is not the same as genuinely transformative practice.`,
    takeaway: `The motive behind spiritual practice matters as much as the practice itself — pride-driven austerity is destructive.`,
    tags: ['wisdom', 'truth']
  },
  '17.6': {
    sanskrit: `कर्शयन्तः शरीरस्थं भूतग्राममचेतसः।
मां चैवान्तःशरीरस्थं तानविद्धि आसुरनिश्चयान्॥`,
    telugu: `శరీరస్థమైన భూత సమూహాన్ని మరియు శరీరాంతర్గతుడైన నన్ను కూడా అచేతనంగా కృశింపజేసేవారు — ఆసుర నిశ్చయులని తెలుసుకో.`,
    english: `Those who are not in knowledge torture the elements of the material body as well as the Supersoul dwelling within. Know them to be demons.`,
    explanation: `Torturing the body through extreme austerities also tortures the Divine Self dwelling within that body. This is a profound insight: the body is not an enemy to be punished but the temple of the Divine. Genuine spirituality honors and cares for this temple.`,
    takeaway: `The body is the temple of the Divine within — extreme self-torture is violence against the Divine.`,
    tags: ['wisdom', 'self-control']
  },
  '17.7': {
    sanskrit: `आहारस्त्वपि सर्वस्य त्रिविधो भवति प्रियः।
यज्ञस्तपस्तथा दानं तेषां भेदमिमं श्रृणु॥`,
    telugu: `అందరికీ ప్రియమైన ఆహారం కూడా మూడు విధాలు. యజ్ఞం, తపస్సు, దానం కూడా (మూడు విధాలు). వాటి భేదాన్ని వినుము.`,
    english: `Even the food each person prefers is of three kinds, according to the three modes of material nature. The same is true of sacrifices, austerities and charity. Now hear of the distinctions between them.`,
    explanation: `Everything in life — including the most basic act of eating — reflects the three gunas. Chapter 17 extends the guna analysis comprehensively: food, sacrifice, austerity, and charity all have sattvic, rajasic, and tamasic forms. This is a complete spiritual psychology of daily life.`,
    takeaway: `The guna framework applies to all of daily life — food, worship, practice, and generosity.`,
    tags: ['wisdom', 'self-control']
  },
  '17.8': {
    sanskrit: `आयुःसत्त्वबलारोग्यसुखप्रीतिविवर्धनाः।
रस्याः स्निग्धाः स्थिरा हृद्या आहाराः सात्त्विकप्रियाः॥`,
    telugu: `ఆయుస్సు, సత్వం, బలం, ఆరోగ్యం, సుఖం, ప్రీతిని పెంచే, రసపూర్ణాలు, స్నిగ్ధాలు, స్థిరాలు, హృద్యాలు — సాత్త్విక ప్రియమైన ఆహారాలు.`,
    english: `Foods dear to those in the mode of goodness increase the duration of life, purify one's existence and give strength, health, happiness and satisfaction. Such foods are juicy, fatty, wholesome, and pleasing to the heart.`,
    explanation: `Sattvic foods increase life, purify, give strength, health, happiness, and contentment. They are juicy, wholesome, and pleasing to the heart — a description that honors the genuine pleasures of nourishing food. Sattvic eating is not asceticism but thoughtful, wholesome nourishment.`,
    takeaway: `Sattvic eating is not asceticism but wholesome, thoughtful nourishment that genuinely sustains life.`,
    tags: ['wisdom', 'self-control']
  },
  '17.9': {
    sanskrit: `कट्वम्ललवणात्युष्णतीक्ष्णरूक्षविदाहिनः।
आहारा राजसस्येष्टा दुःखशोकामयप्रदाः॥`,
    telugu: `చేదు, పుల్లని, నలుపు, అతి వేడి, తీక్షణ, రూక్ష, దహనకరమైన ఆహారాలు రాజసునికి ఇష్టాలు — దుఃఖ శోక రోగాలు ఇస్తాయి.`,
    english: `Foods that are too bitter, too sour, salty, hot, pungent, dry and burning are dear to those in the mode of passion. Such foods cause distress, misery and disease.`,
    explanation: `Rajasic foods — extremely bitter, sour, salty, spicy, dry, or burning — produce pain, grief, and disease. This connection between food quality and mental/physical quality is one of India's ancient insights, now supported by nutritional science.`,
    takeaway: `The quality of food consumed shapes the quality of mind and body — ancient wisdom, modern science agrees.`,
    tags: ['wisdom', 'self-control']
  },
  '17.10': {
    sanskrit: `यातयामं गतरसं पूति पर्युषितं च यत्।
उच्छिष्टमपि चामेध्यं भोजनं तामसप्रियम्॥`,
    telugu: `పాచి పోయిన, రసం లేని, దుర్వాసన గల, పాత, ఎంగిలి, అపవిత్రమైన ఆహారం తామసికి ప్రియమైనది.`,
    english: `Food prepared more than three hours before being eaten, food that is tasteless, decomposed and putrid, and food consisting of remnants and untouchable things is dear to those in the mode of darkness.`,
    explanation: `Tamasic food — stale, tasteless, rotten, decomposed — reflects and reinforces the tamasic state. This applies not just literally but symbolically: nourishment (of any kind — intellectual, spiritual, relational) that is stale, lifeless, and impure feeds the tamasic orientation.`,
    takeaway: `Stale, lifeless, impure nourishment of any kind — food, ideas, relationships — feeds the tamasic orientation.`,
    tags: ['wisdom', 'self-control']
  },
  '17.11': {
    sanskrit: `अफलाकाङ्क्षिभिर्यज्ञो विधिदृष्टो य इज्यते।
यष्टव्यमेवेति मनः समाधाय स सात्त्विकः॥`,
    telugu: `ఫలాన్ని కోరని, 'యజ్ఞం చేయవలసినదే' అని మనస్సు స్థిరపరచుకుని, శాస్త్రదృష్టంగా చేసే యజ్ఞం సాత్త్విక.`,
    english: `Of sacrifices, the sacrifice performed according to the directions of scripture, as a matter of duty, by those who desire no reward, is of the nature of goodness.`,
    explanation: `Sattvic sacrifice: following proper guidance, done as duty, without desire for reward. This is the model for all sattvic action — not the action itself but the orientation with which it is performed that determines its quality.`,
    takeaway: `Sattvic action is performed as duty, following proper guidance, without desire for reward.`,
    tags: ['action', 'wisdom']
  },
  '17.12': {
    sanskrit: `अभिसंधाय तु फलं दम्भार्थमपि चैव यत्।
इज्यते भरतश्रेष्ठ तं यज्ञं विद्धि राजसम्॥`,
    telugu: `భరత శ్రేష్ఠా, ఫలాన్ని అభిసంధించి, దంభం కోసం కూడా చేసే యజ్ఞాన్ని రాజస యజ్ఞమని తెలుసుకో.`,
    english: `But the sacrifice performed for some material benefit, or for the sake of pride, O chief of the Bharatas, you should know to be in the mode of passion.`,
    explanation: `Rajasic sacrifice: performed for personal benefit or to display status and pride. The outer form is identical to sattvic sacrifice; the inner orientation is entirely different. This shows how essential inner orientation is — identical outer acts have radically different spiritual meaning.`,
    takeaway: `Identical outer acts have radically different spiritual meaning depending on inner orientation.`,
    tags: ['action', 'wisdom']
  },
  '17.13': {
    sanskrit: `विधिहीनमसृष्टान्नं मन्त्रहीनमदक्षिणम्।
श्रद्धाविरहितं यज्ञं तामसं परिचक्षते॥`,
    telugu: `విధి హీనం, అన్నం ఇవ్వకుండా, మంత్రహీనం, దక్షిణ లేకుండా, శ్రద్ధ లేకుండా చేసే యజ్ఞం తామస అని పిలువబడుతుంది.`,
    english: `Any sacrifice performed without regard for the directions of scripture, without distribution of prasadam, without chanting of Vedic hymns and remunerations to the priests, and without faith is considered to be in the mode of ignorance.`,
    explanation: `Tamasic sacrifice violates every standard: no scriptural guidance, no distribution, no proper chanting, no proper remuneration, no faith. Not half-hearted but actively wrong in every dimension. This kind of worship is worse than no worship.`,
    takeaway: `Worship performed without any of its essential elements is not just incomplete but actively harmful.`,
    tags: ['wisdom', 'truth']
  },
  '17.14': {
    sanskrit: `देवद्विजगुरुप्राज्ञपूजनं शौचमार्जवम्।
ब्रह्मचर्यमहिंसा च शारीरं तप उच्यते॥`,
    telugu: `దేవ ద్విజ గురు ప్రాజ్ఞ పూజనం, శుచి, సరళత, బ్రహ్మచర్యం, అహింస — శరీర తపస్సు అని చెప్పబడింది.`,
    english: `Austerity of the body consists in worship of the Supreme Lord, the brahmanas, the spiritual master, and superiors like the father and mother, and in cleanliness, simplicity, celibacy and non-violence.`,
    explanation: `Bodily austerity: worship of the Divine, respect for spiritual teachers, parents, and the wise; cleanliness, simplicity, celibacy, and non-violence. These are not restrictions but disciplines that purify the physical instrument and make it responsive to higher influences.`,
    takeaway: `Bodily austerity purifies the physical instrument — worship, respect, purity, simplicity, non-violence.`,
    tags: ['self-control', 'wisdom']
  },
  '17.15': {
    sanskrit: `अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत्।
स्वाध्यायाभ्यसनं चैव वाङ्मयं तप उच्यते॥`,
    telugu: `వ్యథ కలిగించని, సత్యమైన, ప్రియమైన, హితమైన వాక్యం మరియు స్వాధ్యాయ అభ్యాసం — వాఙ్మయ తపస్సు అని చెప్పబడింది.`,
    english: `Austerity of speech consists in speaking words that are truthful, pleasing, beneficial, and not agitating to others, and also in regularly reciting Vedic literature.`,
    explanation: `Austerity of speech: words that are truthful, pleasing, beneficial, and not disturbing — plus regular self-study. The four qualities of sattvic speech form a complete standard: true (honest), pleasing (kind), beneficial (helpful), non-disturbing (peaceful). All four together.`,
    takeaway: `Sattvic speech is simultaneously true, kind, helpful, and peaceful — all four qualities together.`,
    tags: ['wisdom', 'truth']
  },
  '17.16': {
    sanskrit: `मनःप्रसादः सौम्यत्वं मौनमात्मविनिग्रहः।
भावसंशुद्धिरित्येतत्तपो मानसमुच्यते॥`,
    telugu: `మనః ప్రసాదం, సౌమ్యత, మౌనం, ఆత్మ విగ్రహం, భావ శుద్ధి — ఇవి మానస తపస్సు అని చెప్పబడింది.`,
    english: `And satisfaction, simplicity, gravity, self-control and purification of one's existence are the austerities of the mind.`,
    explanation: `Mental austerity: serenity of mind, gentleness, thoughtful silence, self-restraint, and purity of intention. These five together constitute the discipline of the inner life — not the dramatic austerities of the body but the steady, quiet cultivation of inner quality.`,
    takeaway: `Mental austerity is quiet and steady: serenity, gentleness, silence, self-restraint, purity of intention.`,
    tags: ['self-control', 'peace']
  },
  '17.17': {
    sanskrit: `श्रद्धया परया तप्तं तपस्तत्त्रिविधं नरैः।
अफलाकाङ्क्षिभिर्युक्तैः सात्त्विकं परिचक्षते॥`,
    telugu: `శ్రద్ధతో ఫలం కోరని యుక్తులైన నరులచే తపించబడిన ఈ మూడు విధాల తపస్సు సాత్త్విక అని పిలువబడుతుంది.`,
    english: `This threefold austerity, practiced by men whose aim is not to benefit themselves materially but to please the Supreme, is called austerity in goodness.`,
    explanation: `The three-fold austerity (body, speech, mind) practiced with great faith and without desire for personal benefit — offered to please the Divine — is sattvic. The test is always inner orientation: is this for the Divine or for the ego?`,
    takeaway: `Three-fold austerity offered to the Divine without personal motive — this is sattvic practice.`,
    tags: ['wisdom', 'action']
  },
  '17.18': {
    sanskrit: `सत्कारमानपूजार्थं तपो दम्भेन चैव यत्।
क्रियते तदिह प्रोक्तं राजसं चलमध्रुवम्॥`,
    telugu: `సత్కారం, మానం, పూజ కోసం దంభంతో తపస్సు చేయడం — అది రాజసమని, చలితం, అస్థిరం అని చెప్పబడింది.`,
    english: `Penance performed out of pride and for the sake of gaining respect, honor and worship is said to be in the mode of passion. It is neither stable nor permanent.`,
    explanation: `Rajasic austerity — performed for honor, respect, and worship by others, done with pride — is unstable and impermanent. What is built on ego's hunger for recognition collapses when the recognition fails to come or ceases. The foundation is too weak.`,
    takeaway: `Practice built on hunger for recognition is unstable — it collapses when the recognition fails.`,
    tags: ['wisdom', 'truth']
  },
  '17.19': {
    sanskrit: `मूढग्राहेणात्मनो यत्पीडया क्रियते तपः।
परस्योत्सादनार्थं वा तत्तामसमुदाहृतम्॥`,
    telugu: `మూఢంగా పట్టుకున్న, ఆత్మ పీడతో లేదా పరుని నాశనం కోసం చేసే తపస్సు తామస అని చెప్పబడింది.`,
    english: `Penance performed out of foolishness, with self-torture or to destroy or injure others, is said to be in the mode of ignorance.`,
    explanation: `Tamasic austerity: practiced in foolish self-delusion, involving self-torture, or aimed at harming others. The purpose of genuine austerity is development and purification; tamasic 'austerity' destroys rather than builds, harming the practitioner and others.`,
    takeaway: `Genuine austerity builds and purifies; tamasic austerity destroys — the purpose determines the quality.`,
    tags: ['wisdom', 'self-control']
  },
  '17.20': {
    sanskrit: `दातव्यमिति यद्दानं दीयतेऽनुपकारिणे।
देशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम्॥`,
    telugu: `ఇవ్వవలసినదే అని, ప్రత్యుపకారం లేని వానికి, దేశ కాల పాత్రలలో ఇచ్చే దానం సాత్త్విక అని స్మరించబడింది.`,
    english: `Charity given out of duty, without expectation of return, at the proper time and place, and to a worthy person is considered to be in the mode of goodness.`,
    explanation: `Sattvic charity: given as duty (not for reward), to someone who cannot repay, at the right time and place, to a worthy recipient. This is giving in its purest form — the gift that asks nothing in return, given precisely because giving is right.`,
    takeaway: `Sattvic charity is given as duty, to those who cannot repay, at the right time, to worthy recipients.`,
    tags: ['compassion', 'action']
  },
  '17.21': {
    sanskrit: `यत्तु प्रत्युपकारार्थं फलमुद्दिश्य वा पुनः।
दीयते च परिक्लिष्टं तद्दानं राजसं स्मृतम्॥`,
    telugu: `ప్రత్యుపకారం కోసం లేదా ఫలం ఉద్దేశించి, పరిక్లేశంతో ఇచ్చే దానం రాజసమని స్మరించబడింది.`,
    english: `But charity performed with the expectation of some return, or with a desire for fruitive results, or in a grudging mood, is said to be charity in the mode of passion.`,
    explanation: `Rajasic charity: given with expectation of return, given for the sake of future reward, given reluctantly. This is charity with strings attached — it looks generous but is actually a disguised transaction. The appearance of giving masks the underlying expectation of getting.`,
    takeaway: `Charity with strings attached is a disguised transaction — giving that is actually getting in disguise.`,
    tags: ['wisdom', 'compassion']
  },
  '17.22': {
    sanskrit: `अदेशकाले यद्दानमपात्रेभ्यश्च दीयते।
असत्कृतमवज्ञातं तत्तामसमुदाहृतम्॥`,
    telugu: `అదేశ కాలంలో, అపాత్రులకు, అసత్కారంగా, అవజ్ఞతో ఇచ్చే దానం తామస అని చెప్పబడింది.`,
    english: `And charity performed at an impure place, at an improper time, to unworthy persons, without proper attention and without respect is said to be in the mode of ignorance.`,
    explanation: `Tamasic charity: given at the wrong place and time, to unworthy recipients, without care, without respect. This kind of 'giving' may even cause harm — both to the giver (who gains nothing spiritually) and to the recipient (who may not be helped). Thoughtless giving is not necessarily good.`,
    takeaway: `Thoughtless giving — wrong time, wrong place, wrong recipient, without care — is not necessarily good.`,
    tags: ['wisdom', 'compassion']
  },
  '17.23': {
    sanskrit: `ॐ तत्सदिति निर्देशो ब्रह्मणस्त्रिविधः स्मृतः।
ब्राह्मणास्तेन वेदाश्च यज्ञाश्च विहिताः पुरा॥`,
    telugu: `ఓం తత్ సత్ అని బ్రహ్మానికి మూడు విధాల నిర్దేశం స్మరించబడింది. పూర్వం దానిచే బ్రాహ్మణులు, వేదాలు, యజ్ఞాలు విహితం చేయబడ్డాయి.`,
    english: `From the beginning of creation, the three syllables Om Tat Sat have been used to indicate the Supreme Absolute Truth. They were uttered by brahmanas while chanting the Vedic hymns and during sacrifices for the satisfaction of the Supreme.`,
    explanation: `Om Tat Sat — the three-syllable formula for the Absolute. Om signifies the Divine; Tat ('that') affirms the transcendent nature; Sat ('truth/reality') affirms the eternal being of what is referred to. Together they point to the Supreme beyond all names and forms.`,
    takeaway: `Om Tat Sat — the three syllables pointing beyond all names and forms to the Supreme Absolute.`,
    tags: ['wisdom', 'devotion']
  },
  '17.24': {
    sanskrit: `तस्मादोमित्युदाहृत्य यज्ञदानतपःक्रियाः।
प्रवर्तन्ते विधानोक्ताः सततं ब्रह्मवादिनाम्॥`,
    telugu: `కాబట్టి వేదవాదుల యజ్ఞ దాన తపః క్రియలు శాస్త్రోక్తంగా 'ఓం' అని ఉచ్చరించి నిత్యం ప్రవర్తిస్తాయి.`,
    english: `Therefore, transcendentalists undertaking performances of sacrifice, charity and penance in accordance with scriptural regulations begin always with Om to attain the Supreme.`,
    explanation: `All the prescribed practices — sacrifice, charity, austerity — begin with Om. This single syllable frames and consecrates the entire act, lifting it from the mundane to the sacred. Beginning any act with Om is a practice of consecration.`,
    takeaway: `Beginning any act with Om consecrates it — lifting the mundane to the sacred through a single syllable.`,
    tags: ['devotion', 'action']
  },
  '17.25': {
    sanskrit: `तदित्यनभिसन्धाय फलं यज्ञतपःक्रियाः।
दानक्रियाश्च विविधाः क्रियन्ते मोक्षकाङ्क्षिभिः॥`,
    telugu: `ఫలాన్ని అభిసంధించకుండా, 'తత్' అని మోక్షం కోరేవారిచే యజ్ఞ తప దాన క్రియలు విభిన్నంగా చేయబడతాయి.`,
    english: `Without desiring fruitive results, one should perform various kinds of sacrifice, penance and charity with the word Tat. The purpose of such transcendental activities is to get free from material entanglement.`,
    explanation: `'Tat' — 'that' — is uttered before actions done for liberation, without desire for personal results. The word orients the act toward the transcendent, away from personal gain. This simple practice of orienting each act toward the Absolute transforms it into spiritual practice.`,
    takeaway: `Uttering 'Tat' before an act orients it toward liberation rather than personal gain — a simple transforming practice.`,
    tags: ['action', 'wisdom']
  },
  '17.26': {
    sanskrit: `सद्भावे साधुभावे च सदित्येतत्प्रयुज्यते।
प्रशस्ते कर्मणि तथा सच्छब्दः पार्थ युज्यते॥`,
    telugu: `సద్భావంలో, సాధు భావంలో 'సత్' అని ప్రయోగించబడుతుంది. పార్థా, ప్రశస్తమైన కర్మలో కూడా 'సత్' శబ్దం ఉపయోగించబడుతుంది.`,
    english: `The word sat is used in the sense of goodness and in the sense of existence. The word sat is also used when something praiseworthy is done, O Partha.`,
    explanation: `'Sat' — truth, reality, goodness — is used to describe that which genuinely exists and is genuinely good. This Sanskrit root contains both being and ethics: what truly is and what is truly good are ultimately the same. Reality and goodness coincide in the Absolute.`,
    takeaway: `In the Absolute, reality and goodness coincide — 'sat' means both 'what truly is' and 'what is truly good.'`,
    tags: ['wisdom', 'truth']
  },
  '17.27': {
    sanskrit: `यज्ञे तपसि दाने च स्थितिः सदिति चोच्यते।
कर्म चैव तदर्थीयं सदित्येवाभिधीयते॥`,
    telugu: `యజ్ఞ, తపస్సు, దానాల స్థిరత కూడా 'సత్' అని చెప్పబడుతుంది. ఆ కోసం కర్మ కూడా 'సత్' అని పిలువబడుతుంది.`,
    english: `The steadfastness of sacrifice, penance and charity is also called sat, and activity performed for the sake of the Supreme is called sat as well.`,
    explanation: `Steadfastness in sacrifice, austerity, and charity is called 'sat' — and action performed for the Supreme is also called 'sat.' This convergence shows that genuine steadiness in practice and genuine orientation toward the Divine are the same thing expressed differently.`,
    takeaway: `Steadfastness in practice and orientation toward the Divine are ultimately the same quality.`,
    tags: ['wisdom', 'action']
  },
  '17.28': {
    sanskrit: `अश्रद्धया हुतं दत्तं तपस्तप्तं कृतं च यत्।
असदित्युच्यते पार्थ न च तत्प्रेत्य नो इह॥`,
    telugu: `పార్థా, అశ్రద్ధతో హవనం, దానం, తపస్సు, ఏ కర్మ చేసినా 'అసత్' అని చెప్పబడుతుంది. అది మరణానంతర కాని, ఇక్కడ కాని (శ్రేయస్కరం కాదు).`,
    english: `Anything done as sacrifice, charity or penance without faith in the Supreme, O son of Pritha, is impermanent. It is called asat and is useless both in this life and the next.`,
    explanation: `Without faith, all practices become 'asat' — unreal, impermanent, useless in both worlds. Faith is the ingredient that transforms any act into genuine spiritual practice. Its absence makes the most elaborate external practice hollow.`,
    takeaway: `Faith transforms practice — without it even the most elaborate external form is hollow and useless.`,
    tags: ['faith', 'wisdom']
  },
  '18.1': {
    sanskrit: `अर्जुन उवाच
संन्यासस्य महाबाहो तत्त्वमिच्छामि वेदितुम्।
त्यागस्य च हृषीकेश पृथक्केशिनिषूदन॥`,
    telugu: `అర్జునుడు పలికెను:
మహాబాహో, హృషీకేశా, కేశి నిషూదనా, సంన్యాసం మరియు త్యాగం యొక్క తత్వాన్ని పృథక్కంగా తెలుసుకోవాలని ఉంది.`,
    english: `O mighty-armed one, I wish to understand the purpose of renunciation and of the renounced order of life, one after the other. O killer of Keshi, please tell me.`,
    explanation: `The final chapter begins with Arjuna asking for clarity on the two most important spiritual distinctions: sannyasa (renunciation) and tyaga (relinquishment). The entire Gita's practical teaching can be understood through a complete grasp of these two concepts.`,
    takeaway: `The Gita's entire teaching culminates in understanding renunciation and relinquishment — their true meaning.`,
    tags: ['wisdom', 'action']
  },
  '18.2': {
    sanskrit: `श्रीभगवानुवाच
काम्यानां कर्मणां न्यासं संन्यासं कवयो विदुः।
सर्वकर्मफलत्यागं प्राहुस्त्यागं विचक्षणाः॥`,
    telugu: `శ్రీ భగవానుడు పలికెను:
కవులు కాంక్షాపూర్వక కర్మల సంన్యాసాన్ని సంన్యాసమని తెలుసుకుంటారు. విచక్షణులు సమస్త కర్మ ఫలాల త్యాగాన్ని త్యాగమని చెప్తారు.`,
    english: `The Supreme Lord said: The giving up of activities that are based on material desire is what great learned men call the renounced order of life. And giving up the results of all activities is what the wise call renunciation.`,
    explanation: `The distinction: sannyasa is giving up desire-based actions; tyaga is giving up the fruits of all actions. Both are important, but they operate differently. Sannyasa addresses the source (desire); tyaga addresses the attachment to outcomes.`,
    takeaway: `Sannyasa removes desire-based action; tyaga releases attachment to outcomes — both are essential.`,
    tags: ['wisdom', 'detachment']
  },
  '18.3': {
    sanskrit: `त्याज्यं दोषवदित्येके कर्म प्राहुर्मनीषिणः।
यज्ञदानतपःकर्म न त्याज्यमिति चापरे॥`,
    telugu: `కొందరు మేధావులు కర్మ దోషవత్తుగా విడవాలని చెప్తారు. మరికొందరు యజ్ఞ దాన తపః కర్మ విడవకూడదని చెప్తారు.`,
    english: `Some learned men declare that all kinds of fruitive activities should be given up, but there are yet other sages who maintain that acts of sacrifice, charity and penance should never be abandoned.`,
    explanation: `Two opposing views among scholars: some say all action should be renounced; others say sacrifice, charity, and austerity must never be abandoned. Krishna will now resolve this debate with his own authoritative teaching.`,
    takeaway: `Opposing views on renunciation exist — Krishna resolves the debate with the teaching that follows.`,
    tags: ['wisdom', 'action']
  },
  '18.4': {
    sanskrit: `निश्चयं श्रृणु मे तत्र त्यागे भरतसत्तम।
त्यागो हि पुरुषव्याघ्र त्रिविधः सम्प्रकीर्तितः॥`,
    telugu: `భరత సత్తమా, పురుషవ్యాఘ్రా, త్యాగ విషయంలో నా నిశ్చయం వినుము. త్యాగం మూడు విధాలుగా చెప్పబడింది.`,
    english: `O best of the Bharatas, now hear my judgment about renunciation. O tiger among men, renunciation is declared in the scriptures to be of three kinds.`,
    explanation: `Krishna's definitive ruling: renunciation (tyaga) is of three kinds. What follows is the Gita's final comprehensive framework for right action — the synthesis of all the earlier teachings.`,
    takeaway: `The Gita's final synthesis on right action: three types of renunciation.`,
    tags: ['wisdom', 'action']
  },
  '18.5': {
    sanskrit: `यज्ञदानतपःकर्म न त्याज्यं कार्यमेव तत्।
यज्ञो दानं तपश्चैव पावनानि मनीषिणाम्॥`,
    telugu: `యజ్ఞ దాన తపః కర్మ విడవకూడదు — అవి చేయవలసినవే. యజ్ఞం, దానం, తపస్సు మేధావులను పవిత్రపరుస్తాయి.`,
    english: `Acts of sacrifice, charity and penance are not to be given up; they must be performed. Indeed, sacrifice, charity and penance purify even the great souls.`,
    explanation: `Sacrifice, charity, and austerity should never be abandoned — they purify the great souls. These three are not optional extras but essential practices of the spiritual life. They work on different dimensions: sacrifice orients action outward, charity opens the heart, austerity develops inner discipline.`,
    takeaway: `Sacrifice, charity, and austerity purify — they are essential, not optional extras.`,
    tags: ['action', 'wisdom']
  },
  '18.6': {
    sanskrit: `एतान्यपि तु कर्माणि सङ्गं त्यक्त्वा फलानि च।
कर्तव्यानीति मे पार्थ निश्चितं मतमुत्तमम्॥`,
    telugu: `పార్థా, ఈ కర్మలు కూడా ఆసక్తి మరియు ఫలాలు విడిచి చేయవలసినవే అని నా నిశ్చితమైన ఉత్తమ అభిప్రాయం.`,
    english: `All these activities should be performed without attachment or any expectation of result. They should be performed as a matter of duty, O son of Pritha. That is my final opinion.`,
    explanation: `The final answer: perform these practices without attachment and without expectation of results, as a matter of duty. This is the complete teaching of karma yoga applied to spiritual practices themselves. Even spiritual practice should be free from ego.`,
    takeaway: `Even spiritual practice should be free from ego-attachment and desire for results.`,
    tags: ['action', 'detachment']
  },
  '18.7': {
    sanskrit: `नियतस्य तु संन्यासः कर्मणो नोपपद्यते।
मोहात्तस्य परित्यागस्तामसः परिकीर्तितः॥`,
    telugu: `నియత కర్మ సంన్యాసం తగదు. మోహంతో దాన్ని విడవడం తామస అని చెప్పబడింది.`,
    english: `Prescribed duties should never be renounced. If one gives up his prescribed duties because of illusion, such renunciation is said to be in the mode of ignorance.`,
    explanation: `Tamasic renunciation: abandoning one's prescribed duties out of delusion. This is the 'spiritual' person who retreats from life's responsibilities claiming to be above them — but is actually just avoiding difficulty. True renunciation is of attachment, not of duty.`,
    takeaway: `Abandoning duty out of delusion is not spiritual renunciation — it is avoidance disguised as spirituality.`,
    tags: ['duty', 'wisdom']
  },
  '18.8': {
    sanskrit: `दुःखमित्येव यत्कर्म कायक्लेशभयात्त्यजेत्।
स कृत्वा राजसं त्यागं नैव त्यागफलं लभेत्॥`,
    telugu: `దుఃఖకరమని శరీర క్లేశ భయంతో కర్మ విడిచినవాడు రాజస త్యాగం చేసినవాడు — త్యాగ ఫలం పొందడు.`,
    english: `Anyone who gives up prescribed duties as troublesome or out of fear of bodily discomfort is said to have renounced in the mode of passion. Such action never leads to the elevation of renunciation.`,
    explanation: `Rajasic renunciation: giving up duty because it is difficult or bodily uncomfortable. This is the person who avoids hard tasks, claiming it is not worth the effort. Real courage requires doing what is difficult precisely because it is right.`,
    takeaway: `Avoiding duty because it is difficult is not renunciation but cowardice dressed as spirituality.`,
    tags: ['duty', 'courage']
  },
  '18.9': {
    sanskrit: `कार्यमित्येव यत्कर्म नियतं क्रियतेऽर्जुन।
सङ्गं त्यक्त्वा फलं चैव स त्यागः सात्त्विको मतः॥`,
    telugu: `అర్జునా, నియత కర్మ 'చేయవలసినదే' అని ఆసక్తి మరియు ఫలం విడిచి చేయడం — ఆ త్యాగం సాత్త్విక అని తలంపబడుతుంది.`,
    english: `O Arjuna, when one performs his prescribed duty only because it ought to be done, and forsakes all material association and all attachment to the fruit, his renunciation is said to be in the mode of goodness.`,
    explanation: `Sattvic renunciation: doing what must be done, without attachment and without desire for results. This is pure duty, pure karma yoga — the action itself liberated from the ego's agenda. This is the model for all right action.`,
    takeaway: `Do what must be done, without attachment and without desire for results — this is sattvic renunciation.`,
    tags: ['action', 'wisdom']
  },
  '18.10': {
    sanskrit: `न द्वेष्ट्यकुशलं कर्म कुशले नानुषज्जते।
त्यागी सत्त्वसमाविष्टो मेधावी छिन्नसंशयः॥`,
    telugu: `అకుశల కర్మను ద్వేషించని, కుశల కర్మలో ఆసక్తి లేని, సత్వంలో ఆవిష్టుడు, మేధావి, సందేహాలు తొలగించుకున్న — అతడే త్యాగి.`,
    english: `The intelligent renouncer situated in the mode of goodness, who neither hates inauspicious work nor is attached to auspicious work, has no doubts about work.`,
    explanation: `The sattvic renouncer: not repelled by unpleasant duty, not attached to pleasant duty, established in the clarity of sattva, wise, and free from doubt. This equanimity toward all kinds of work is the practical expression of complete non-attachment.`,
    takeaway: `True equanimity: not repelled by unpleasant duty, not attached to pleasant duty — this is complete non-attachment.`,
    tags: ['wisdom', 'detachment']
  },
  '18.11': {
    sanskrit: `न हि देहभृता शक्यं त्यक्तुं कर्माण्यशेषतः।
यस्तु कर्मफलत्यागी स त्यागीत्यभिधीयते॥`,
    telugu: `దేహధారికి కర్మలు సంపూర్ణంగా విడవడం సాధ్యం కాదు. కర్మ ఫలాన్ని విడిచేవాడే త్యాగి అని పిలువబడతాడు.`,
    english: `It is indeed impossible for an embodied being to give up all activities. But one who renounces the fruits of action is called one who has truly renounced.`,
    explanation: `The embodied being cannot give up all action — action is the condition of embodiment. But the fruits of action can always be renounced. This is the practical heart of karma yoga: complete action, renounce outcomes. The true renunciate does more, not less.`,
    takeaway: `The true renunciate renounces outcomes, not action — complete engagement with complete release.`,
    tags: ['action', 'detachment']
  },
  '18.12': {
    sanskrit: `अनिष्टमिष्टं मिश्रं च त्रिविधं कर्मणः फलम्।
भवत्यत्यागिनां प्रेत्य न तु संन्यासिनां क्वचित्॥`,
    telugu: `అత్యాగుల కర్మ ఫలం మరణానంతర అనిష్టం, ఇష్టం, మిశ్రం అని మూడు విధాలు. సంన్యాసులకు ఎన్నడూ (ఉండదు).`,
    english: `For one who is not renounced, the threefold fruits of action — desirable, undesirable and mixed — accrue after death. But those who are in the renounced order of life have no such result to suffer or enjoy.`,
    explanation: `Those who cling to outcomes receive the three-fold fruits of action: desired, undesired, and mixed — binding them to further cycles. True renouncers receive none of these fruits because they created no attachment to create the bond. Non-attachment is liberation.`,
    takeaway: `Attachment to outcomes creates karmic bonds; non-attachment breaks them — this is the mechanism of liberation.`,
    tags: ['action', 'soul']
  },
  '18.13': {
    sanskrit: `पञ्चैतानि महाबाहो कारणानि निबोध मे।
साङ्ख्ये कृतान्ते प्रोक्तानि सिद्धये सर्वकर्मणाम्॥`,
    telugu: `మహాబాహో, సాంఖ్యం కృతాంతంలో చెప్పబడిన సమస్త కర్మ సిద్ధికి ఈ ఐదు కారణాలను నా నుండి తెలుసుకో.`,
    english: `O mighty-armed Arjuna, according to the Vedanta there are five causes for the accomplishment of all action. Learn of these from me.`,
    explanation: `The five causes of all action are about to be revealed — this is the Gita's most complete philosophical analysis of action. Understanding these five transforms how we see ourselves as agents and liberates us from both pride in success and despair at failure.`,
    takeaway: `The five causes of all action: understanding them transforms our relationship to success and failure.`,
    tags: ['wisdom', 'knowledge']
  },
  '18.14': {
    sanskrit: `अधिष्ठानं तथा कर्ता करणं च पृथग्विधम्।
विविधाश्च पृथक्चेष्टा दैवं चैवात्र पञ्चमम्॥`,
    telugu: `అధిష్ఠానం, కర్త, వివిధ కరణాలు, వివిధ పృథక్ చేష్టలు మరియు ఐదవదైన దైవం — ఇవే.`,
    english: `The body, the doer, the various senses, the many different kinds of endeavor, and ultimately the Supersoul — these are the five factors of action.`,
    explanation: `Five causes of action: the body (the base), the ego-self (the apparent doer), the various instruments (senses and mind), the many different functions and efforts, and the Divine (Supersoul) as the fifth factor. All five together produce any action — no single element is sufficient alone.`,
    takeaway: `Five factors together produce any action — the body, apparent doer, instruments, efforts, and the Divine.`,
    tags: ['wisdom', 'knowledge']
  },
  '18.15': {
    sanskrit: `शरीरवाङ्मनोभिर्यत्कर्म प्रारभते नरः।
न्याय्यं वा विपरीतं वा पञ्चैते तस्य हेतवः॥`,
    telugu: `న్యాయమైనా, వ్యతిరేకమైనా, మనుషుడు శరీర వాక్ మనస్సులతో ఏ కర్మ ప్రారంభిస్తాడో — అందుకు ఈ ఐదే హేతువులు.`,
    english: `Whatever right or wrong action a man performs by body, mind or speech is caused by these five factors.`,
    explanation: `Every action — right or wrong, bodily, verbal, or mental — is produced by the same five causes. This is not an excuse for wrongdoing but an invitation to understand action more deeply. Understanding the five causes naturally leads to greater wisdom in acting.`,
    takeaway: `Understanding the five causes of action leads to greater wisdom and freedom in how we act.`,
    tags: ['wisdom', 'action']
  },
  '18.16': {
    sanskrit: `तत्रैवं सति कर्तारमात्मानं केवलं तु यः।
पश्यत्यकृतबुद्धित्वान्न स पश्यति दुर्मतिः॥`,
    telugu: `ఇలా ఉన్నా, 'ఆత్మ కేవలం కర్త' అని చూసేవాడు అకృతమైన బుద్ధి వల్ల చూడడు — అతడు దుర్మతి.`,
    english: `Therefore, one who thinks himself the only doer, not considering the five factors, is certainly not very intelligent and cannot see things as they are.`,
    explanation: `One who sees only the ego-self as the doer — ignoring the other four causes — understands nothing. This is the error of ego: claiming complete authorship of action when in reality many factors combine. Pride in personal achievement and despair at personal failure both rest on this error.`,
    takeaway: `The ego's claim of complete authorship is the root of both pride in success and despair at failure.`,
    tags: ['wisdom', 'truth']
  },
  '18.17': {
    sanskrit: `यस्य नाहंकृतो भावो बुद्धिर्यस्य न लिप्यते।
हत्वापि स इमाँल्लोकान्न हन्ति न निबध्यते॥`,
    telugu: `ఎవనికి అహంకారభావం లేదో, బుద్ధి అంటదో — ఈ లోకాలను హతమార్చినా అతడు హతమార్చడు, బంధింపబడడు.`,
    english: `One who is not motivated by false ego, whose intelligence is not entangled, though he kills men in this world, does not kill. Nor is he bound by his actions.`,
    explanation: `Without ego-doership, without attachment of the intellect — even killing in battle creates no binding karma. This is the most radical statement of the doctrine of non-attachment: the act itself does not bind, only the ego's claim of ownership binds. No ego-claim, no bondage.`,
    takeaway: `Without ego-doership, action creates no binding karma — it is the ego's claim, not the act, that binds.`,
    tags: ['wisdom', 'action']
  },
  '18.18': {
    sanskrit: `ज्ञानं ज्ञेयं परिज्ञाता त्रिविधा कर्मचोदना।
करणं कर्म कर्तेति त्रिविधः कर्मसंग्रहः॥`,
    telugu: `జ్ఞానం, జ్ఞేయం, జ్ఞాత — మూడు విధాల కర్మ ప్రేరణ. కరణం, కర్మ, కర్త — మూడు విధాల కర్మ సంగ్రహం.`,
    english: `Knowledge, the object of knowledge, and the knower are the three factors that motivate action; the senses, the work and the doer are the three constituents of action.`,
    explanation: `Two sets of three: the knower, the knowing, and the known (the epistemic triangle); and the instruments, the action, and the actor (the practical triangle). These six elements together constitute the complete structure of any action. Understanding this structure enables mastery.`,
    takeaway: `The complete structure of action: knowing (knower, knowing, known) and doing (actor, action, instruments).`,
    tags: ['wisdom', 'knowledge']
  },
  '18.19': {
    sanskrit: `ज्ञानं कर्म च कर्ता च त्रिधैव गुणभेदतः।
प्रोच्यते गुणसंख्याने यथावच्छ्रृणु तान्यपि॥`,
    telugu: `జ్ఞానం, కర్మ, కర్త అని మూడు గుణ భేదాలతో గుణ సంఖ్యానంలో చెప్పబడతాయి. వాటిని యథావత్తుగా వినుము.`,
    english: `In accordance with the three different modes of material nature, there are three kinds of knowledge, action and performer of action. Now hear of these as I describe them.`,
    explanation: `Knowledge, action, and the performer of action each come in three qualities — corresponding to the three gunas. What follows is the Gita's most comprehensive analysis of the guna-types of knowing and doing.`,
    takeaway: `Knowledge, action, and performer each have three guna-types — the comprehensive analysis follows.`,
    tags: ['wisdom', 'knowledge']
  },
  '18.20': {
    sanskrit: `सर्वभूतेषु येनैकं भावमव्ययमीक्षते।
अविभक्तं विभक्तेषु तज्ज्ञानं विद्धि सात्त्विकम्॥`,
    telugu: `విభజించబడిన వాటిలో అవిభక్తంగా, అవ్యయంగా, ఏకమైన భావాన్ని సర్వ భూతాలలో చూసే జ్ఞానం సాత్త్విక అని తెలుసుకో.`,
    english: `The knowledge by which one undivided spiritual nature is seen in all living entities, though they are divided into innumerable forms, you should understand to be in the mode of goodness.`,
    explanation: `Sattvic knowledge: seeing the one undivided spiritual nature in all divided, differentiated forms. This is the wisdom-vision that perceives unity beneath diversity — the same consciousness in every being, the same divine essence in every form. This is the highest knowing.`,
    takeaway: `Sattvic knowledge sees the one undivided essence in all differentiated forms — unity beneath diversity.`,
    tags: ['wisdom', 'soul']
  },
  '18.21': {
    sanskrit: `पृथक्त्वेन तु यज्ज्ञानं नानाभावान्पृथग्विधान्।
वेत्ति सर्वेषु भूतेषु तज्ज्ञानं विद्धि राजसम्॥`,
    telugu: `అన్ని భూతాలలో పృథక్తత్వంతో, నానా భావాలు పృథక్కంగా తెలుసుకునే జ్ఞానం రాజస అని తెలుసుకో.`,
    english: `That knowledge by which one sees that in every different body there is a different type of living entity you should understand to be in the mode of passion.`,
    explanation: `Rajasic knowledge: seeing only the differentiated forms — each body containing a separate, different being. This is accurate as far as it goes, but it misses the deeper unity. It sees the waves but not the ocean, the leaves but not the tree.`,
    takeaway: `Rajasic knowledge sees differentiated forms accurately but misses the deeper unity behind them.`,
    tags: ['wisdom', 'knowledge']
  },
  '18.22': {
    sanskrit: `यत्तु कृत्स्नवदेकस्मिन्कार्ये सक्तमहैतुकम्।
अतत्त्वार्थवदल्पं च तत्तामसमुदाहृतम्॥`,
    telugu: `కృత్స్నవత్తుగా ఒక కార్యంలో ఆసక్తమైన, కారణం లేని, తత్వార్థం లేని, అల్పమైన జ్ఞానం తామస అని చెప్పబడింది.`,
    english: `And that knowledge by which one is attached to one kind of work as the all in all, without knowledge of the truth, and which is very meager, is said to be in the mode of darkness.`,
    explanation: `Tamasic knowledge: clinging to a single narrow perspective as the whole truth, without understanding the actual nature of things, extremely limited in scope. This is the consciousness that cannot see beyond its immediate circumstances and mistakes the fragment for the whole.`,
    takeaway: `Tamasic knowledge mistakes the fragment for the whole — a narrow perspective claimed as total truth.`,
    tags: ['wisdom', 'knowledge']
  },
  '18.23': {
    sanskrit: `नियतं सङ्गरहितमरागद्वेषतः कृतम्।
अफलप्रेप्सुना कर्म यत्तत्सात्त्विकमुच्यते॥`,
    telugu: `నియతమైన, ఆసక్తి రహితమైన, రాగ ద్వేషాలు లేకుండా, ఫలాన్ని కోరని వాడు చేసే కర్మ సాత్త్విక అని చెప్పబడింది.`,
    english: `That action which is regulated and which is performed without attachment, without love or hatred, and without desire for fruitive results is said to be in the mode of goodness.`,
    explanation: `Sattvic action: regulated, without attachment, without like or dislike, without desire for fruits. This is karma yoga in its pure form — the action itself, liberated from the ego's agenda, performed as pure service. This is what all of the Gita has been building toward.`,
    takeaway: `Sattvic action is the culmination of karma yoga: regulated, unattached, undisturbed, desireless.`,
    tags: ['action', 'wisdom']
  },
  '18.24': {
    sanskrit: `यत्तु कामेप्सुना कर्म साहङ्कारेण वा पुनः।
क्रियते बहुलायासं तद्राजसमुदाहृतम्॥`,
    telugu: `కోరికతో లేదా అహంకారంతో, అధిక ప్రయాసతో చేసే కర్మ రాజస అని చెప్పబడింది.`,
    english: `But action performed with great effort by one seeking to gratify desires, and enacted from a sense of false ego, is called action in the mode of passion.`,
    explanation: `Rajasic action: driven by desire, executed with ego, performed with great effort and strain. The very effort and strain of rajasic action reveals its nature — it is fighting against resistance because it is not aligned with what truly is. Sattvic action flows; rajasic action strains.`,
    takeaway: `Rajasic action strains because it fights resistance; sattvic action flows because it is aligned with reality.`,
    tags: ['action', 'wisdom']
  },
  '18.25': {
    sanskrit: `अनुबन्धं क्षयं हिंसामनवेक्ष्य च पौरुषम्।
मोहादारभ्यते कर्म यत्तत्तामसमुच्यते॥`,
    telugu: `అనుబంధాన్ని, క్షయాన్ని, హింసను, పౌరుషాన్ని పరిగణించకుండా మోహంతో ప్రారంభించే కర్మ తామస అని చెప్పబడింది.`,
    english: `That action performed in illusion, without heed of future bondage or consequences, without concern for injury or loss, is said to be in the mode of ignorance.`,
    explanation: `Tamasic action: begun in delusion, without considering consequences, future bondage, harm to others, or one's own capacity. This is impulsive, thoughtless action — not just careless but actively ignoring the harm it may cause.`,
    takeaway: `Tamasic action ignores consequences, harm to others, and its own limitations — impulsive, heedless action.`,
    tags: ['wisdom', 'action']
  },
  '18.26': {
    sanskrit: `मुक्तसङ्गोऽनहंवादी धृत्युत्साहसमन्वितः।
सिद्ध्यसिद्ध्योर्निर्विकारः कर्ता सात्त्विक उच्यते॥`,
    telugu: `ముక్త సంగుడు, అనహంవాది, ధైర్య ఉత్సాహంతో కూడినవాడు, సిద్ధి అసిద్ధులలో నిర్వికారుడు — కర్త సాత్త్విక అని చెప్పబడుతాడు.`,
    english: `The worker who is free from all material attachments and false ego, who is enthusiastic and resolute and who is indifferent to success or failure, is a worker in the mode of goodness.`,
    explanation: `The sattvic worker: free from attachment, free from false ego, full of enthusiasm and resolve, unaffected by success or failure. This portrait of the ideal worker combines extraordinary effort (enthusiastic, resolute) with extraordinary non-attachment (indifferent to outcomes). Both together.`,
    takeaway: `The ideal worker is both extraordinary in effort AND extraordinary in non-attachment — both together.`,
    tags: ['wisdom', 'action']
  },
  '18.27': {
    sanskrit: `रागी कर्मफलप्रेप्सुर्लुब्धो हिंसात्मकोऽशुचिः।
हर्षशोकान्वितः कर्ता राजसः परिकीर्तितः॥`,
    telugu: `రాగి, కర్మఫలం కోరేవాడు, లుబ్ధుడు, హింసాత్మకుడు, అశుచి, హర్ష శోకాన్వితుడు — కర్త రాజస అని పిలువబడతాడు.`,
    english: `The worker who is attached to work and the fruits of work, who desires to enjoy those fruits, who is greedy, always envious, impure, and who is moved by joy and sorrow, is said to be in the mode of passion.`,
    explanation: `The rajasic worker: attached to action and its fruits, greedy for those fruits, envious, impure, swung between elation and depression. This describes most ordinary human motivation — and the Gita says it without judgment, simply as a description of the rajasic mode.`,
    takeaway: `The rajasic worker is swung between elation and depression by outcomes — the opposite of the sattvic's stability.`,
    tags: ['wisdom', 'action']
  },
  '18.28': {
    sanskrit: `अयुक्तः प्राकृतः स्तब्धः शठो नैष्कृतिकोऽलसः।
विषादी दीर्घसूत्री च कर्ता तामस उच्यते॥`,
    telugu: `అయుక్తుడు, ప్రాకృతుడు, స్తబ్ధుడు, శఠుడు, నైష్కృతికుడు, అలసుడు, విషాది, దీర్ఘసూత్రి — కర్త తామస అని చెప్పబడతాడు.`,
    english: `The worker who is always engaged in work against the injunctions of the scripture, who is materialistic, obstinate, cheating and expert in insulting others, and who is lazy, always morose and procrastinating is said to be a worker in the mode of ignorance.`,
    explanation: `The tamasic worker: undisciplined, crude, stubborn, deceitful, malicious, lazy, depressed, and procrastinating. This is the portrait of someone whose inner disorder manifests outwardly as an inability to function effectively in any dimension of life.`,
    takeaway: `The tamasic worker's inner disorder manifests as dysfunction in every dimension — undisciplined, stubborn, lazy, depressed.`,
    tags: ['wisdom', 'action']
  },
  '18.29': {
    sanskrit: `बुद्धेर्भेदं धृतेश्चैव गुणतस्त्रिविधं श्रृणु।
प्रोच्यमानमशेषेण पृथक्त्वेन धनञ्जय॥`,
    telugu: `ధనంజయా, గుణాల ప్రకారం మూడు విధాలైన బుద్ధి భేదాన్ని మరియు ధృతి భేదాన్ని అశేషంగా పృథక్కంగా వింటావు.`,
    english: `O winner of wealth, now please listen as I tell you in detail of the different kinds of understanding and determination, according to the three modes of material nature.`,
    explanation: `Now the analysis extends to intellect (buddhi) and fortitude (dhriti) — both qualified by the three gunas. This comprehensiveness is the Gita's strength: the guna framework applies to knowing, doing, knowing who you are, and the will that sustains you.`,
    takeaway: `The guna framework applies to intelligence and fortitude — understanding and will are also qualitied.`,
    tags: ['wisdom', 'knowledge']
  },
  '18.30': {
    sanskrit: `प्रवृत्तिं च निवृत्तिं च कार्याकार्ये भयाभये।
बन्धं मोक्षं च या वेत्ति बुद्धिः सा पार्थ सात्त्विकी॥`,
    telugu: `పార్థా, ప్రవృత్తి నివృత్తులు, కార్య అకార్యాలు, భయ అభయాలు, బంధ మోక్షాలు తెలిసే బుద్ధి సాత్త్విక.`,
    english: `O son of Pritha, that understanding by which one knows what ought to be done and what ought not to be done, what is to be feared and what is not to be feared, what is binding and what is liberating, is in the mode of goodness.`,
    explanation: `Sattvic intellect knows the full spectrum of distinctions: what to do and avoid, what to fear and what not to fear, what binds and what liberates. This comprehensive discernment is the mark of a well-developed, clarity-oriented intelligence.`,
    takeaway: `Sattvic intellect discerns what to do, what to fear, and what liberates — comprehensive clarity.`,
    tags: ['wisdom', 'knowledge']
  },
  '18.31': {
    sanskrit: `यया धर्ममधर्मं च कार्यं चाकार्यमेव च।
अयथावत्प्रजानाति बुद्धिः सा पार्थ राजसी॥`,
    telugu: `పార్థా, ధర్మాధర్మాలను, కార్య అకార్యాలను యథావత్తుగా తెలుసుకోలేని బుద్ధి రాజస.`,
    english: `O son of Pritha, that understanding which cannot distinguish between righteousness and unrighteousness, between action that should be done and action that should not be done, is in the mode of passion.`,
    explanation: `Rajasic intellect cannot accurately distinguish dharma from adharma, right action from wrong action. This imprecision in moral discernment is the characteristic failure of the rajasic mode — desire distorts the capacity to see clearly.`,
    takeaway: `Rajasic intellect is imprecise in moral discernment — desire distorts the capacity to see clearly.`,
    tags: ['wisdom', 'knowledge']
  },
  '18.32': {
    sanskrit: `अधर्मं धर्ममिति या मन्यते तमसावृता।
सर्वार्थान्विपरीतांश्च बुद्धिः सा पार्थ तामसी॥`,
    telugu: `పార్థా, అధర్మాన్ని ధర్మం అని, సమస్త అర్థాలను విపరీతంగా తలచే తమసావృత బుద్ధి తామస.`,
    english: `That understanding which considers irreligion to be religion and religion to be irreligion, under the spell of illusion and darkness, and strives always in the wrong direction, O Partha, is in the mode of ignorance.`,
    explanation: `The worst distortion: calling irreligion 'religion' and religion 'irreligion' — seeing everything backwards. This inversion characterizes the tamasic intellect: so clouded by ignorance that good seems bad and bad seems good, liberation seems restrictive and bondage seems freedom.`,
    takeaway: `Tamasic intellect inverts reality — calling what harms 'good' and what helps 'harm.'`,
    tags: ['wisdom', 'knowledge']
  },
  '18.33': {
    sanskrit: `धृत्या यया धारयते मनःप्राणेन्द्रियक्रियाः।
योगेनाव्यभिचारिण्या धृतिः सा पार्थ सात्त्विकी॥`,
    telugu: `పార్థా, అవ్యభిచారిణియైన యోగంతో మనో ప్రాణ ఇంద్రియ క్రియలను ధరించే ధృతి సాత్త్విక.`,
    english: `O son of Pritha, that determination which is unbreakable, which is sustained with steadfastness by yoga practice, and which thus controls the activities of the mind, life and senses is determination in the mode of goodness.`,
    explanation: `Sattvic fortitude: sustained, unbreakable, maintained through yoga, governing the activities of mind, vital forces, and senses. This steady resolve that yoga builds — not willpower through gritted teeth but the effortless determination of one established in the Self — is the sattvic quality.`,
    takeaway: `Sattvic fortitude is effortless determination — not willpower but the resolve of one established in the Self.`,
    tags: ['wisdom', 'self-control']
  },
  '18.34': {
    sanskrit: `यया तु धर्मकामार्थान्धृत्या धारयतेऽर्जुन।
प्रसङ्गेन फलाकाङ्क्षी धृतिः सा पार्थ राजसी॥`,
    telugu: `అర్జునా, పార్థా, ఆసక్తితో ఫలాన్ని కోరేవాడు ధర్మ కామ అర్థాలను ధరించే ధృతి రాజస.`,
    english: `But that determination by which one holds fast to fruitive results in religion, economic development and sense gratification is of the nature of passion, O Arjuna.`,
    explanation: `Rajasic fortitude: the determination that clings to all three of the conventional life goals (dharma, wealth, pleasure) in pursuit of their fruits. Not wrong in itself to pursue these things, but when the determination is driven by desire for their fruits, it is rajasic.`,
    takeaway: `Determination driven by desire for fruits — even in religious, economic, and sensual goals — is rajasic.`,
    tags: ['wisdom', 'action']
  },
  '18.35': {
    sanskrit: `यया स्वप्नं भयं शोकं विषादं मदमेव च।
न विमुञ्चति दुर्मेधा धृतिः सा पार्थ तामसी॥`,
    telugu: `పార్థా, నిద్ర, భయం, శోకం, విషాదం, మదాన్ని విడవని దుర్మేధావి యొక్క ధృతి తామస.`,
    english: `And that determination which cannot go beyond dreaming, fearfulness, lamentation, moroseness and illusion — such unintelligent determination, O son of Pritha, is in the mode of darkness.`,
    explanation: `Tamasic fortitude: the 'determination' that is actually clinging to sleep, fear, grief, despondency, and delusion. This is not fortitude at all but its opposite — the stubborn persistence in states that harm. The tamasic person cannot let go of what damages them.`,
    takeaway: `Tamasic 'fortitude' is actually clinging to sleep, fear, grief, and delusion — the opposite of true resolve.`,
    tags: ['wisdom', 'self-control']
  },
  '18.36': {
    sanskrit: `सुखं त्विदानीं त्रिविधं श्रृणु मे भरतर्षभ।
अभ्यासाद्रमते यत्र दुःखान्तं च निगच्छति॥`,
    telugu: `భరత శ్రేష్ఠా, ఇప్పుడు మూడు విధాల సుఖాన్ని వినుము. అభ్యాసంతో ఆనందిస్తూ దుఃఖాంతాన్ని చేరే సుఖం.`,
    english: `O best of the Bharatas, now please hear from me about the three kinds of happiness by which the conditioned soul enjoys, and by which he sometimes comes to the end of all distress.`,
    explanation: `The Gita's final guna analysis: three types of happiness. This is perhaps the most practically relevant teaching — understanding the source and quality of what we call 'happiness' determines the direction of life's most fundamental choices.`,
    takeaway: `Understanding the three types of happiness determines the direction of life's most fundamental choices.`,
    tags: ['wisdom', 'peace']
  },
  '18.37': {
    sanskrit: `यत्तदग्रे विषमिव परिणामेऽमृतोपमम्।
तत्सुखं सात्त्विकं प्रोक्तमात्मबुद्धिप्रसादजम्॥`,
    telugu: `ఆది విషంలా, పరిణామంలో అమృతంలా ఉన్నది — ఆత్మ బుద్ధి ప్రసాదం నుండి జన్మించే ఆ సుఖం సాత్త్విక అని చెప్పబడింది.`,
    english: `That which in the beginning may be just like poison but at the end is just like nectar and which awakens one to self-realization is said to be happiness in the mode of goodness.`,
    explanation: `Sattvic happiness: bitter at the beginning (the discipline of practice, the renunciation of immediate gratification), but sweet at the end — nectar-like, awakening to the Self. This is the happiness of genuine spiritual growth: hard-won but permanently satisfying.`,
    takeaway: `Sattvic happiness is bitter at the start, nectar at the end — born of discipline, culminating in self-realization.`,
    tags: ['wisdom', 'peace']
  },
  '18.38': {
    sanskrit: `विषयेन्द्रियसंयोगाद्यत्तदग्रेऽमृतोपमम्।
परिणामे विषमिव तत्सुखं राजसं स्मृतम्॥`,
    telugu: `ఇంద్రియ విషయ సంయోగం నుండి ఆది అమృతంలా, పరిణామంలో విషంలా — ఆ సుఖం రాజస అని స్మరించబడింది.`,
    english: `That happiness which is derived from contact of the senses with their objects and which appears like nectar at first but poison at the end is said to be of the nature of passion.`,
    explanation: `Rajasic happiness: sweet at the beginning (the immediate pleasure of sense contact), bitter at the end — poison-like, creating craving and withdrawal. This is the happiness of sense pleasure: intensely appealing, but generating more craving and eventual suffering.`,
    takeaway: `Rajasic happiness is nectar at first, poison at the end — the cycle of pleasure, craving, and suffering.`,
    tags: ['wisdom', 'peace']
  },
  '18.39': {
    sanskrit: `यदग्रे चानुबन्धे च सुखं मोहनमात्मनः।
निद्रालस्यप्रमादोत्थं तत्तामसमुदाहृतम्॥`,
    telugu: `ఆది మరియు అనుబంధంలో ఆత్మను మోహపరచే, నిద్ర అలసత్వ ప్రమాదం నుండి పుట్టే సుఖం తామస అని చెప్పబడింది.`,
    english: `And that happiness which is blind to self-realization, which is delusion from beginning to end and which arises from sleep, laziness and illusion is said to be of the nature of ignorance.`,
    explanation: `Tamasic happiness: delusive from start to finish, arising from sleep, laziness, and negligence. This is not even pleasure but numbing — the 'happiness' of dulled consciousness that cannot face reality. It is self-delusion masquerading as contentment.`,
    takeaway: `Tamasic 'happiness' is numbing and self-deluding — dulled consciousness masquerading as contentment.`,
    tags: ['wisdom', 'peace']
  },
  '18.40': {
    sanskrit: `न तदस्ति पृथिव्यां वा दिवि देवेषु वा पुनः।
सत्त्वं प्रकृतिजैर्मुक्तं यदेभिः स्यात्त्रिभिर्गुणैः॥`,
    telugu: `ఈ మూడు ప్రకృతి జనిత గుణాల నుండి విముక్తమైన సత్వం భూమిలో, స్వర్గంలో, దేవతలలో కూడా లేదు.`,
    english: `There is no being existing, either here or among the demigods in the higher planetary systems, which is free from the three modes of material nature.`,
    explanation: `No being anywhere — in this world or in the heavens — is free from the influence of the three gunas. This is the comprehensive reach of the guna framework: it applies to all embodied experience universally. The path to freedom runs through, not around, this understanding.`,
    takeaway: `The three gunas apply universally — no embodied being anywhere is free from their influence.`,
    tags: ['wisdom', 'truth']
  },
  '18.41': {
    sanskrit: `ब्राह्मणक्षत्रियविशां शूद्राणां च परन्तप।
कर्माणि प्रविभक्तानि स्वभावप्रभवैर्गुणैः॥`,
    telugu: `పరంతపా, బ్రాహ్మణ, క్షత్రియ, వైశ్య, శూద్రుల కర్మలు స్వభావం నుండి జన్మించిన గుణాల ప్రకారం విభజించబడ్డాయి.`,
    english: `Brahmanas, kshatriyas, vaishyas and shudras are distinguished by the qualities born of their own natures in accordance with the material modes.`,
    explanation: `The four social roles are defined not by birth but by the qualities of nature (guna and svabhava) that operate through each person. This is the Gita's most important clarification about the social order: it is a functional description, not a hierarchy of worth.`,
    takeaway: `Social roles are defined by natural qualities and functions, not by birth or inherent worth.`,
    tags: ['duty', 'wisdom']
  },
  '18.42': {
    sanskrit: `शमो दमस्तपः शौचं क्षान्तिरार्जवमेव च।
ज्ञानं विज्ञानमास्तिक्यं ब्रह्मकर्म स्वभावजम्॥`,
    telugu: `శమం, దమం, తపస్సు, శుచి, క్షమ, సరళత, జ్ఞానం, విజ్ञానం, ఆస్తిక్యం — స్వభావం నుండి జన్మించే బ్రహ్మ కర్మ.`,
    english: `Peacefulness, self-control, austerity, purity, tolerance, honesty, knowledge, wisdom and religiousness — these are the natural qualities by which the brahmanas work.`,
    explanation: `The qualities of the brahmin (knowledge-worker): peace, self-control, austerity, purity, tolerance, honesty, knowledge, wisdom, and faith. These are the characteristics that define the role — found in anyone who primarily serves through wisdom, teaching, and spiritual guidance.`,
    takeaway: `The brahmin role is defined by these nine qualities — found in anyone who serves through wisdom.`,
    tags: ['duty', 'wisdom']
  },
  '18.43': {
    sanskrit: `शौर्यं तेजो धृतिर्दाक्ष्यं युद्धे चाप्यपलायनम्।
दानमीश्वरभावश्च क्षात्रं कर्म स्वभावजम्॥`,
    telugu: `శౌర్యం, తేజస్సు, ధృతి, దాక్ష్యం, యుద్ధంలో పలాయనం లేమి, దానం, ఈశ్వర భావం — స్వభావం నుండి జన్మించే క్షాత్ర కర్మ.`,
    english: `Heroism, power, determination, resourcefulness, courage in battle, generosity and leadership are the natural qualities of work for the kshatriyas.`,
    explanation: `The warrior-leader's qualities: heroism, power, steadiness, resourcefulness, not fleeing in battle, generosity, and leadership. These are the characteristics of those who serve by protecting, leading, and maintaining order — found in anyone who fulfills this role, regardless of birth.`,
    takeaway: `The warrior-leader role is defined by heroism, steadiness, resourcefulness, courage, generosity, and leadership.`,
    tags: ['duty', 'courage']
  },
  '18.44': {
    sanskrit: `कृषिगौरक्ष्यवाणिज्यं वैश्यकर्म स्वभावजम्।
परिचर्यात्मकं कर्म शूद्रस्यापि स्वभावजम्॥`,
    telugu: `కృషి, గో రక్ష, వాణిజ్యం — స్వభావం నుండి జన్మించే వైశ్య కర్మ. పరిచర్యాత్మకమైన కర్మ శూద్రుని స్వభావ కర్మ కూడా.`,
    english: `Farming, cow protection and business are the natural work for the vaishyas, and for the shudras there is labor and service to others.`,
    explanation: `The merchant-farmer's work: agriculture, animal care, trade — producing and distributing goods. The service worker's work: craft and service in support of others. Every social function is honored when performed according to one's nature and in the spirit of service.`,
    takeaway: `Every social function is honored when performed according to one's nature in the spirit of service.`,
    tags: ['duty', 'action']
  },
  '18.45': {
    sanskrit: `स्वे स्वे कर्मण्यभिरतः संसिद्धिं लभते नरः।
स्वकर्मनिरतः सिद्धिं यथा विन्दति तच्छृणु॥`,
    telugu: `ప్రతివాడు తన తన కర్మలలో నిరతుడై సంసిద్ధిని పొందుతాడు. తన కర్మలలో నిరతుడు ఎలా సిద్ధిని పొందుతాడో వినుము.`,
    english: `By following his qualities of work, every man can become perfect. Now please hear from me how this can be done.`,
    explanation: `Everyone, by devoting themselves to their own type of work, can attain perfection. This is the Gita's great democratic teaching: every legitimate role in society, when fulfilled with devotion, can be the path to the highest. No work is too lowly for liberation.`,
    takeaway: `Every legitimate role, when fulfilled with devotion, can be the path to liberation — no work too lowly.`,
    tags: ['duty', 'wisdom']
  },
  '18.46': {
    sanskrit: `यतः प्रवृत्तिर्भूतानां येन सर्वमिदं ततम्।
स्वकर्मणा तमभ्यर्च्य सिद्धिं विन्दति मानवः॥`,
    telugu: `ఎవని నుండి భూతాల ప్రవృత్తి కలుగుతుందో, ఏదానిచే ఇదంతా వ్యాపించి ఉందో — ఆ తాన్ని స్వకర్మంతో పూజించి మానవుడు సిద్ధిని పొందుతాడు.`,
    english: `By worship of the Lord, who is the source of all beings and who is all-pervading, a man can attain perfection through performing his own work.`,
    explanation: `Worshipping the Divine through one's own work — this is how perfection is attained. The ordinary person does not need to abandon their role to practice spirituality. The carpenter who worships through carpentry, the farmer through farming — each touches the Divine through their own work.`,
    takeaway: `Worship the Divine through your own work — the path of liberation runs right through your daily vocation.`,
    tags: ['duty', 'devotion']
  },
  '18.47': {
    sanskrit: `श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।
स्वभावनियतं कर्म कुर्वन्नाप्नोति किल्बिषम्॥`,
    telugu: `స్వభావంతో నిర్ణయించబడిన కర్మ చేస్తూ పాపాన్ని పొందడు. గుణహీనంగా ఉన్నా స్వధర్మం, పర ధర్మం చక్కగా ఆచరించడం కంటే శ్రేయమైనది.`,
    english: `It is better to engage in one's own occupation, even though one may perform it imperfectly, than to accept another's occupation and perform it perfectly. Duties prescribed according to one's nature are never affected by sinful reactions.`,
    explanation: `The teaching from Chapter 3 returns: better your own duty imperfectly than another's perfectly. Work prescribed by one's own nature creates no sin. Authentic imperfection is better than performed excellence — the authenticity matters more than the execution.`,
    takeaway: `Authenticity matters more than execution — your own imperfect work is better than another's perfect work.`,
    tags: ['duty', 'truth']
  },
  '18.48': {
    sanskrit: `सहजं कर्म कौन्तेय सदोषमपि न त्यजेत्।
सर्वारम्भा हि दोषेण धूमेनाग्निरिवावृताः॥`,
    telugu: `కౌంతేయా, సహజ కర్మ దోషపూర్ణంగా ఉన్నా విడవకూడదు. అగ్నిని పొగలా అన్ని ప్రారంభాలు దోషంతో కప్పబడి ఉంటాయి.`,
    english: `Every endeavor is covered by some fault, just as fire is covered by smoke. Therefore one should not give up the work born of his nature, O son of Kunti, even if such work is full of fault.`,
    explanation: `Every action has some imperfection — like fire always having some smoke. Demanding perfect action before acting is a way of never acting. Accept the inevitable imperfection of action and act anyway, doing your own work rather than someone else's supposedly purer work.`,
    takeaway: `Accept the inevitable imperfection of action — it does not excuse from duty but frees from perfectionist paralysis.`,
    tags: ['action', 'duty']
  },
  '18.49': {
    sanskrit: `असक्तबुद्धिः सर्वत्र जितात्मा विगतस्पृहः।
नैष्कर्म्यसिद्धिं परमां संन्यासेनाधिगच्छति॥`,
    telugu: `సర్వత్ర అసక్త బుద్ధి, జితాత్మ, విగతస్పృహ — సంన్యాసంతో పరమ నైష్కర్మ్య సిద్ధిని పొందుతాడు.`,
    english: `One who is self-controlled and unattached and who disregards all material enjoyments can obtain, by practice of renunciation, the highest perfect stage of freedom from reaction.`,
    explanation: `Non-attached intellect, self-mastery, freedom from desire — through renunciation, one attains the supreme state of actionlessness-in-action (naishkarmya siddhi). This is the paradox of perfect action: so free from ego that no karma is created, yet acting fully.`,
    takeaway: `The paradox of perfect action: acting fully yet creating no karma — ego-free engagement.`,
    tags: ['wisdom', 'action']
  },
  '18.50': {
    sanskrit: `सिद्धिं प्राप्तो यथा ब्रह्म तथाप्नोति निबोध मे।
समासेनैव कौन्तेय निष्ठा ज्ञानस्य या परा॥`,
    telugu: `కౌంతేయా, సిద్ధిని పొందినవాడు ఎలా బ్రహ్మాన్ని పొందుతాడో నా నుండి తెలుసుకో — జ్ఞానం యొక్క పరా నిష్ఠ సంక్షేపంగా.`,
    english: `O son of Kunti, learn from me in brief how one who has attained such perfection can attain the supreme perfection of Brahman, the highest knowledge.`,
    explanation: `Having attained worldly perfection through righteous action, how does one then attain Brahman? This question opens the final movement of Chapter 18 — from social excellence to spiritual liberation. The two are not separated but sequentially connected.`,
    takeaway: `Social excellence through right action prepares the ground for spiritual liberation — the two are connected.`,
    tags: ['wisdom', 'soul']
  },
  '18.51': {
    sanskrit: `बुद्ध्या विशुद्धया युक्तो धृत्यात्मानं नियम्य च।
शब्दादीन्विषयांस्त्यक्त्वा रागद्वेषौ व्युदस्य च॥`,
    telugu: `విశుद्ध బుద్ధితో యుక్తుడై, ధైర్యంతో ఆత్మను నిగ్రహించి, శబ్దాది విషయాలు విడిచి, రాగ ద్వేషాలు వదిలి.`,
    english: `Being purified by his intelligence and controlling the mind with determination, giving up the objects of sense gratification, being freed from attachment and hatred...`,
    explanation: `The path to Brahman: purified intellect, steady self-mastery, relinquishment of sense objects, freedom from attachment and aversion. These practices work together to progressively clear the ground for the Self to shine through.`,
    takeaway: `Purified intellect, self-mastery, relinquishment of sense objects, freedom from attachment — these together clear the ground.`,
    tags: ['wisdom', 'self-control']
  },
  '18.52': {
    sanskrit: `विविक्तसेवी लघ्वाशी यतवाक्कायमानसः।
ध्यानयोगपरो नित्यं वैराग्यं समुपाश्रितः॥`,
    telugu: `వివిక్త సేవి, లఘు ఆశి, నిగ్రహించిన వాక్కు శరీర మనస్సు, నిత్యం ధ్యాన యోగ పరుడు, వైరాగ్యం ఆశ్రయించి.`,
    english: `One who lives in a secluded place, who eats little, who controls the body, mind and power of speech, who is always in trance and who is detached, free from false ego, false strength, false pride, lust, anger, and acceptance of material things, free from false proprietorship, and peaceful — such a person is certainly elevated to the position of self-realization.`,
    explanation: `Living in seclusion, eating sparingly, controlling speech, body, and mind, always in meditation, taking refuge in non-attachment — these practices together constitute the complete lifestyle of the path to Brahman.`,
    takeaway: `Seclusion, sparse eating, controlled speech and mind, constant meditation, non-attachment — the complete lifestyle of liberation.`,
    tags: ['yoga', 'wisdom']
  },
  '18.53': {
    sanskrit: `अहंकारं बलं दर्पं कामं क्रोधं परिग्रहम्।
विमुच्य निर्ममः शान्तो ब्रह्मभूयाय कल्पते॥`,
    telugu: `అహంకారం, బలం, దర్పం, కామం, క్రోధం, పరిగ్రహం విడిచి, నిర్మమం, శాంతంగా ఉన్నవాడు బ్రహ్మభూతానికి అర్హుడవుతాడు.`,
    english: `One who is thus transcendentally situated at once realizes the Supreme Brahman and becomes fully joyful. He never laments nor desires to have anything. He is equally disposed toward every living entity. In that state he attains pure devotional service unto me.`,
    explanation: `Release from false ego, false strength, arrogance, lust, anger, and possessiveness — with this release, free from 'mine,' peaceful — one becomes fit for Brahman-realization. The progressive release of what we falsely cling to is the final movement toward freedom.`,
    takeaway: `Release false ego, arrogance, lust, anger, possessiveness — become free from 'mine' — and Brahman awaits.`,
    tags: ['wisdom', 'detachment']
  },
  '18.54': {
    sanskrit: `ब्रह्मभूतः प्रसन्नात्मा न शोचति न काङ्क्षति।
समः सर्वेषु भूतेषु मद्भक्तिं लभते पराम्॥`,
    telugu: `బ్రహ్మభూతుడు, ప్రసన్నాత్మ, శోకించడు, కోరుకోడు. సమస్త భూతాలలో సమంగా ఉంటాడు. పరా భక్తిని పొందుతాడు.`,
    english: `One who is thus transcendentally situated at once realizes the Supreme Brahman and becomes fully joyful. He never laments, nor desires to have anything. He is equally disposed toward every living entity. In that state he attains pure devotional service unto me.`,
    explanation: `Established in Brahman: joyful, free from grief and craving, equal toward all beings — and from here, one attains the highest devotion (para bhakti). This is the synthesis: Brahman-realization does not end the spiritual journey but opens it to its highest expression: pure love.`,
    takeaway: `Brahman-realization opens into the highest devotion — knowledge culminates in love.`,
    tags: ['wisdom', 'devotion']
  },
  '18.55': {
    sanskrit: `भक्त्या मामभिजानाति यावान्यश्चास्मि तत्त्वतः।
ततो मां तत्त्वतो ज्ञात्वा विशते तदनन्तरम्॥`,
    telugu: `భక్తిచే నన్ను యావత్తుగా తత్వతః తెలుసుకుంటాడు. ఆ తర్వాత నన్ను తత్వతః తెలుసుకుని ఆ తదనంతరం నాలో ప్రవేశిస్తాడు.`,
    english: `One can understand me as I am, as the Supreme Personality of Godhead, only by devotional service. And when one is in full consciousness of me by such devotion, one can enter into the kingdom of God.`,
    explanation: `Through devotion alone can the Divine be truly known — as it is, in its fullness. And after truly knowing, one enters the Divine. Devotion is both the means and the result — it is the relationship that is itself the destination.`,
    takeaway: `Devotion is both the means and the result — the relationship that is itself the destination.`,
    tags: ['devotion', 'wisdom']
  },
  '18.56': {
    sanskrit: `सर्वकर्माण्यपि सदा कुर्वाणो मद्व्यपाश्रयः।
मत्प्रसादादवाप्नोति शाश्वतं पदमव्ययम्॥`,
    telugu: `మద్వ్యపాశ్రయుడు సర్వ కర్మలు నిత్యం చేస్తున్నా, నా ప్రసాదంతో శాశ్వత, అవ్యయ పదం పొందుతాడు.`,
    english: `Though engaged in all kinds of activities, my pure devotee, under my protection, reaches the eternal and imperishable abode by my grace.`,
    explanation: `Always acting in all kinds of activities, taking refuge in the Divine — through divine grace, one attains the eternal, imperishable abode. This is the Gita's final statement on karma yoga united with devotion: complete engagement with complete surrender, sustained by grace.`,
    takeaway: `Complete engagement + complete surrender + divine grace = the eternal abode. This is the complete formula.`,
    tags: ['action', 'devotion']
  },
  '18.57': {
    sanskrit: `चेतसा सर्वकर्माणि मयि संन्यस्य मत्परः।
बुद्धियोगमुपाश्रित्य मच्चित्तः सततं भव॥`,
    telugu: `మనస్సా అన్ని కర్మలు నాలో సంన్యసించి, మత్పరుడై, బుద్ధి యోగాన్ని ఆశ్రయించి, నిత్యం నా చిత్తంతో ఉండు.`,
    english: `In all activities just depend upon me and work always under my protection. In such devotional service, be fully conscious of me.`,
    explanation: `Surrender all actions mentally to the Divine, take the Divine as the supreme goal, take refuge in buddhi yoga, and keep the mind constantly on the Divine. This single verse contains the entire practice: surrender + divine focus + wisdom yoga + constant consciousness.`,
    takeaway: `Surrender action + divine focus + wisdom yoga + constant consciousness — the complete practice in one verse.`,
    tags: ['devotion', 'action']
  },
  '18.58': {
    sanskrit: `मच्चित्तः सर्वदुर्गाणि मत्प्रसादात्तरिष्यसि।
अथ चेत्त्वमहंकारान्न श्रोष्यसि विनश्यसि॥`,
    telugu: `నా చిత్తంతో నా ప్రసాదంతో అన్ని కష్టాలు దాటిపోతావు. ఒకవేళ అహంకారంతో వినకపోతే నశిస్తావు.`,
    english: `If you become conscious of me, you will pass over all the obstacles of conditioned life by my grace. If, however, you do not work in such consciousness but act through false ego, not hearing me, you will be lost.`,
    explanation: `Divine-consciousness, sustained through grace, crosses all obstacles. But ego-consciousness — refusing to hear, acting from false ego alone — leads to ruin. This is not a threat but a description of the two fundamental orientations and their natural consequences.`,
    takeaway: `Divine-consciousness crosses all obstacles through grace; ego-consciousness, refusing to hear, leads to ruin.`,
    tags: ['devotion', 'wisdom']
  },
  '18.59': {
    sanskrit: `यदहंकारमाश्रित्य न योत्स्य इति मन्यसे।
मिथ्यैष व्यवसायस्ते प्रकृतिस्त्वां नियोक्ष्यति॥`,
    telugu: `అహంకారాన్ని ఆశ్రయించి 'యుద్ధం చేయను' అని తలుస్తావు — ఆ నిశ్చయం మిథ్య. ప్రకృతి నిన్ను నియోగిస్తుంది.`,
    english: `If you do not act according to my direction and do not fight, then you will be falsely directed. By your nature, you will have to engage in warfare.`,
    explanation: `Arjuna's resolve not to fight, based on ego-compassion, is false — nature itself will compel him to fight because it is his dharma. This is the fundamental teaching: we cannot escape our nature by refusing to act. We can only align with it consciously or be driven by it unconsciously.`,
    takeaway: `We cannot escape our nature — we can only align with it consciously or be driven by it unconsciously.`,
    tags: ['duty', 'action']
  },
  '18.60': {
    sanskrit: `स्वभावजेन कौन्तेय निबद्धः स्वेन कर्मणा।
कर्तुं नेच्छसि यन्मोहात्करिष्यस्यवशोऽपि तत्॥`,
    telugu: `కౌంతేయా, స్వభావ జనిత స్వ కర్మంతో బంధించబడినవాడు మోహంతో చేయాలని అనుకోని దాన్ని కూడా అవశంగా చేస్తాడు.`,
    english: `O son of Kunti, deluded by illusion, you are now declining to act according to my direction. But compelled by the work born of your own nature, you will act all the same.`,
    explanation: `What Arjuna refuses to do through ego, nature will compel through his warrior-nature anyway. The choice is not between fighting and not fighting but between conscious and unconscious action. Choosing consciously, with wisdom and devotion, is the path of freedom.`,
    takeaway: `The choice is never whether to act but whether to act consciously or be driven unconsciously by nature.`,
    tags: ['duty', 'wisdom']
  },
  '18.61': {
    sanskrit: `ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति।
भ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया॥`,
    telugu: `అర్జునా, ఈశ్వరుడు సర్వ భూతాల హృదయంలో ఉంటాడు. మాయంతో యంత్రారూఢాలైన అన్ని ప్రాణులను భ్రమింపజేస్తూ.`,
    english: `The Supreme Lord is situated in everyone's heart, O Arjuna, and is directing the wanderings of all living entities, who are seated as on a machine, made of the material energy.`,
    explanation: `The Divine resides in everyone's heart and directs the movements of all beings — who are seated on the machine of their material nature, being moved by maya. This image of the chariot-machine captures the condition of unconscious, unrealized existence.`,
    takeaway: `The Divine in every heart directs all beings — most are moved by maya unconsciously, like riders on a machine.`,
    tags: ['soul', 'wisdom']
  },
  '18.62': {
    sanskrit: `तमेव शरणं गच्छ सर्वभावेन भारत।
तत्प्रसादात्परां शान्तिं स्थानं प्राप्स्यसि शाश्वतम्॥`,
    telugu: `భరతవంశీయుడా, సర్వభావంతో ఆ ఈశ్వరుని మాత్రం శరణు పొందు. ఆ ప్రసాదంతో పరమ శాంతిని, శాశ్వత స్థానాన్ని పొందుతావు.`,
    english: `O Bharata, surrender unto him utterly. By his grace you will attain transcendental peace and the supreme and eternal abode.`,
    explanation: `Take refuge in the Divine alone, with all your being. Through divine grace, you will attain supreme peace and the eternal abode. This is the final practical instruction before the Gita's most intimate teachings: full surrender — not partial, not conditional, but total.`,
    takeaway: `Full surrender — not partial, not conditional, but total — is the final practical instruction.`,
    tags: ['devotion', 'wisdom']
  },
  '18.63': {
    sanskrit: `इति ते ज्ञानमाख्यातं गुह्याद्गुह्यतरं मया।
विमृश्यैतदशेषेण यथेच्छसि तथा कुरु॥`,
    telugu: `ఇలా నా ద్వారా రహస్యానికీ రహస్యతరమైన జ్ఞానం నీకు చెప్పబడింది. దాన్ని సంపూర్ణంగా విమర్శించి, నీకు ఎలా ఇష్టమైతే అలా చేయి.`,
    english: `Thus I have explained to you knowledge still more confidential. Deliberate on this fully, and then do what you wish to do.`,
    explanation: `'Reflect on this fully, then do as you wish.' Krishna does not demand — he presents and invites. This is the teaching of genuine spiritual freedom: not compulsion but invitation, not command but understanding that, once given, allows the student to choose freely.`,
    takeaway: `Genuine spiritual teaching invites free choice — reflect fully, then decide for yourself.`,
    tags: ['wisdom', 'truth']
  },
  '18.64': {
    sanskrit: `सर्वगुह्यतमं भूयः श्रृणु मे परमं वचः।
इष्टोऽसि मे दृढमिति ततो वक्ष्यामि ते हितम्॥`,
    telugu: `మళ్ళీ అన్నింటికీ రహస్యతమమైన నా పరమ వచనం వినుము. నువ్వు నాకు దృఢంగా ప్రియుడివి — కాబట్టి నీ హితం చెప్తాను.`,
    english: `Because you are my very dear friend, I am speaking to you my supreme instruction, the most secret of all knowledge. Hear this from me, for it is for your benefit.`,
    explanation: `The most secret of all teachings is about to be given — because 'you are dear to me.' Love is the reason for the highest teaching. Krishna holds back nothing from one who is genuinely beloved. This is the relationship that the entire Gita has been building.`,
    takeaway: `Love is the reason for the highest teaching — Krishna holds back nothing from the one who is genuinely dear.`,
    tags: ['devotion', 'wisdom']
  },
  '18.65': {
    sanskrit: `मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।
मामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे॥`,
    telugu: `నా మనస్సు గలవాడవు అవు, నా భక్తుడవు అవు, నన్ను పూజించు, నాకు నమస్కరించు — నన్నే పొందుతావు. నీకు సత్యంగా ప్రతిజ్ఞ చేస్తున్నాను — నువ్వు నాకు ప్రియుడివి.`,
    english: `Always think of me, become my devotee, worship me and offer your homage unto me. Thus you will come to me without fail. I promise you this because you are my very dear friend.`,
    explanation: `The supreme teaching: think of me, be my devotee, worship me, bow to me — you will come to me. Krishna promises this. Not conditional on perfect practice or perfect understanding but on genuine love and sincere turning toward the Divine.`,
    takeaway: `The supreme teaching: think of me, love me, worship me, bow to me — you will come to me. This is Krishna's promise.`,
    tags: ['devotion', 'soul']
  },
  '18.66': {
    sanskrit: `सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।
अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥`,
    telugu: `सर्वधर्मान्परित्यज्य মামেকং শরণং ব্রজ। — అన్ని ధర్మాలు విడిచి, నన్ను ఒక్కడినే శరణు పొందు. నేను నిన్ను అన్ని పాపాల నుండి విముక్తుడిగా చేస్తాను — దుఃఖపడకు.`,
    english: `Abandon all varieties of religion and just surrender unto me. I shall deliver you from all sinful reactions. Do not fear.`,
    explanation: `The most celebrated verse of the Gita: abandon all varieties of dharma and take refuge in me alone — I will deliver you from all sins, do not grieve. This is the teaching of total, unconditional surrender. Not abandoning ethics but surrendering the ego's management of one's life entirely to the Divine.`,
    takeaway: `Total surrender: not abandoning ethics but surrendering the ego's management entirely to the Divine — I will deliver you.`,
    tags: ['devotion', 'surrender']
  },
  '18.67': {
    sanskrit: `इदं ते नातपस्काय नाभक्ताय कदाचन।
न चाशुश्रूषवे वाच्यं न च मां योऽभ्यसूयति॥`,
    telugu: `ఇది తపస్సు లేనివానికి, భక్తి లేనివానికి ఎప్పుడూ చెప్పకూడదు. వినాలని కోరుకోనివానికి, నన్ను అసూయపడేవానికి చెప్పకూడదు.`,
    english: `This confidential knowledge may never be explained to those who are not austere, or devoted, or engaged in devotional service, nor to one who is envious of me.`,
    explanation: `This supreme teaching should not be shared with those who lack austerity, devotion, willingness to listen, and who are envious. The teaching is not withheld out of elitism but out of wisdom: such people are not ready to receive it and may even be harmed by hearing it prematurely.`,
    takeaway: `Not all wisdom should be shared with all people — readiness to receive is the prerequisite.`,
    tags: ['wisdom', 'truth']
  },
  '18.68': {
    sanskrit: `य इमं परमं गुह्यं मद्भक्तेष्वभिधास्यति।
भक्तिं मयि परां कृत्वा मामेवैष्यत्यसंशयः॥`,
    telugu: `మద్భక్తులకు ఈ పరమ గుహ్యాన్ని చెప్పేవాడు పరమ భక్తిని నాలో చేసి నన్నే పొందుతాడు — నిస్సందేహంగా.`,
    english: `For one who explains this supreme secret to the devotees, pure devotional service is guaranteed, and at the end he will come back to me.`,
    explanation: `Those who share this supreme secret with genuine devotees perform the highest service and will certainly reach the Divine. The act of transmitting genuine wisdom is itself a form of the highest devotion — the teacher and the teaching both serve the Divine.`,
    takeaway: `Sharing genuine wisdom with those ready to receive it is itself an act of the highest devotion.`,
    tags: ['devotion', 'wisdom']
  },
  '18.69': {
    sanskrit: `न च तस्मान्मनुष्येषु कश्चिन्मे प्रियकृत्तमः।
भविता न च मे तस्मादन्यः प्रियतरो भुवि॥`,
    telugu: `మనుష్యులలో అంతకంటే నాకు ప్రియమైనది చేసే వాడు మరొకడు లేడు. భూమిలో అంతకంటే నాకు ప్రియతముడు మరొకడు ఉండడు.`,
    english: `There is no servant in this world more dear to me, and there never will be one more dear.`,
    explanation: `No human being is more dear to the Divine than the one who shares this wisdom. The teacher of the Gita performs the most beloved service. This is Krishna's tribute to all sincere teachers — those who transmit the wisdom of liberation are the most beloved.`,
    takeaway: `The teacher who shares wisdom of liberation is the most beloved of the Divine — the highest service.`,
    tags: ['devotion', 'wisdom']
  },
  '18.70': {
    sanskrit: `अध्येष्यते च य इमं धर्म्यं संवादमावयोः।
ज्ञानयज्ञेन तेनाहमिष्टः स्यामिति मे मतिः॥`,
    telugu: `మన ఈ ధర్మ్యమైన సంవాదాన్ని ఎవడు అధ్యయనం చేస్తాడో, అతనిచే జ్ఞాన యజ్ఞంతో నాకు పూజ చేయబడతానని నా మతం.`,
    english: `And I declare that he who studies this sacred conversation worships me by his intelligence.`,
    explanation: `One who studies this sacred dialogue — the Gita itself — worships the Divine through the sacrifice of knowledge (jnana yajna). Studying the Gita is itself a form of worship; engaging with its wisdom is itself a spiritual practice.`,
    takeaway: `Studying the Gita is itself a form of worship — engaging with wisdom is a spiritual practice.`,
    tags: ['wisdom', 'devotion']
  },
  '18.71': {
    sanskrit: `श्रद्धावाननसूयश्च श्रृणुयादपि यो नरः।
सोऽपि मुक्तः शुभाँल्लोकान्प्राप्नुयात्पुण्यकर्मणाम्॥`,
    telugu: `శ్రద్ధతో, అసూయ లేకుండా వినే నరుడు కూడా విముక్తుడవుతాడు. పుణ్యకర్ముల శుభ లోకాలను పొందుతాడు.`,
    english: `And one who listens with faith and without envy becomes free from sinful reactions and attains to the auspicious planets where the pious dwell.`,
    explanation: `Even the one who merely listens to the Gita with faith and without envy becomes free from sin and reaches auspicious worlds. Genuine, humble listening is itself a form of practice — not passive but engaged, open, and receptive.`,
    takeaway: `Genuine humble listening — with faith, without envy — is itself a transformative spiritual practice.`,
    tags: ['faith', 'wisdom']
  },
  '18.72': {
    sanskrit: `कच्चिदेतच्छ्रुतं पार्थ त्वयैकाग्रेण चेतसा।
कच्चिदज्ञानसम्मोहः प्रनष्टस्ते धनञ्जय॥`,
    telugu: `పార్థా, ఇది ఏకాగ్ర చేతస్సుతో నీచే వినబడిందా? ధనంజయా, నీ అజ్ఞాన సమ్మోహం నశించిందా?`,
    english: `O son of Pritha, have you heard this with an attentive mind? And are your ignorance and illusions now dispelled?`,
    explanation: `The most intimate moment of the teaching: has it been received? Has the confusion been dissolved? This personal question shows that the goal of teaching is not the transmission of information but the transformation of the student's understanding and inner confusion.`,
    takeaway: `The goal of teaching is not information transferred but confusion dissolved — has the student truly heard?`,
    tags: ['wisdom', 'truth']
  },
  '18.73': {
    sanskrit: `अर्जुन उवाच
नष्टो मोहः स्मृतिर्लब्धा त्वत्प्रसादान्मयाच्युत।
स्थितोऽस्मि गतसन्देहः करिष्ये वचनं तव॥`,
    telugu: `అర్జునుడు పలికెను:
అచ్యుతా, నీ ప్రసాదంతో మోహం నశించింది, స్మృతి పొందబడింది. సందేహాలు పోయి స్థిరంగా ఉన్నాను. నీ వచనం చేస్తాను.`,
    english: `Arjuna said: My dear Krishna, O infallible one, my illusion is now gone. I have regained my memory by your mercy. I am now firm and free from doubt and am prepared to act according to your instructions.`,
    explanation: `The most important words of the Gita: 'My delusion is gone. My memory is restored. I stand firm, free from doubt. I will do as you say.' This is the student's declaration of genuine transformation — not just understanding but the restoration of clarity and willingness to act.`,
    takeaway: `The student's transformation: delusion gone, memory restored, firmly resolved to act — this is the Gita's fruit.`,
    tags: ['wisdom', 'courage']
  },
  '18.74': {
    sanskrit: `सञ्जय उवाच
इत्यहं वासुदेवस्य पार्थस्य च महात्मनः।
संवादमिमममृतम् श्रृणवन्रोमहर्षणम्॥`,
    telugu: `సంజయుడు పలికెను:
వాసుదేవుని మరియు మహాత్మ పార్థుని ఈ అమృతమైన, రోమహర్షణమైన సంవాదాన్ని నేను వింటున్నాను.`,
    english: `Sanjaya said: Thus have I heard the conversation of two great souls, Krishna and Arjuna. And so wonderful is that message that my hair is standing on end.`,
    explanation: `Sanjaya, the narrator, reports: he has heard the 'amrita-like' (nectar-like) conversation between Krishna and Arjuna, and his hair stands on end with wonder. The divine conversation has transcendent power — not just through its content but through the presence in which it was spoken.`,
    takeaway: `The divine teaching carries transcendent power — not just through content but through the presence it emanates from.`,
    tags: ['wisdom', 'devotion']
  },
  '18.75': {
    sanskrit: `व्यासप्रसादाच्छ्रुतवानेतद्गुह्यमहं परम्।
योगं योगेश्वरात्कृष्णात्साक्षात्कथयतः स्वयम्॥`,
    telugu: `వ్యాస ప్రసాదంతో ఈ పరమ గుహ్యమైన యోగాన్ని యోగేశ్వరుడైన కృష్ణుడు స్వయంగా చెప్తుండగా వింటిని.`,
    english: `By the mercy of Vyasa, I have heard these most confidential talks directly from the master of all mysticism, Krishna, who was speaking directly to Arjuna.`,
    explanation: `Sanjaya acknowledges: through Vyasa's grace, he heard this most secret yoga directly from Krishna himself. The lineage of transmission is honored: Vyasa enabled this hearing; Krishna spoke; Arjuna received. Each link in the chain of transmission is essential.`,
    takeaway: `Honor the lineage of transmission — each link in the chain that carries wisdom forward is essential.`,
    tags: ['wisdom', 'devotion']
  },
  '18.76': {
    sanskrit: `राजन्संस्मृत्य संस्मृत्य संवादमिमममृतम्।
केशवार्जुनयोः पुण्यं हृष्यामि च मुहुर्मुहुः॥`,
    telugu: `రాజా, కేశవ అర్జునుల ఈ పుణ్యమైన, అమృతమైన సంవాదాన్ని పదే పదే స్మరించి నేను పదే పదే ఆనందిస్తున్నాను.`,
    english: `O King, as I repeatedly recall this wondrous and holy dialogue between Krishna and Arjuna, I take pleasure, being thrilled at every moment.`,
    explanation: `Sanjaya, remembering the divine dialogue again and again, rejoices each time. This is the nature of genuine spiritual teaching: it is inexhaustible — each return to it reveals new depth, new meaning, new nourishment. The Gita is not exhausted by a single reading.`,
    takeaway: `Genuine spiritual teaching is inexhaustible — each return to it reveals new depth and new meaning.`,
    tags: ['wisdom', 'devotion']
  },
  '18.77': {
    sanskrit: `तच्च संस्मृत्य संस्मृत्य रूपमत्यद्भुतं हरेः।
विस्मयो मे महान्राजन्हृष्यामि च पुनः पुनः॥`,
    telugu: `రాజా, హరి యొక్క అత్యద్భుతమైన రూపాన్ని పదే పదే స్మరించి నాకు మహా ఆశ్చర్యం కలుగుతుంది. పదే పదే ఆనందిస్తున్నాను.`,
    english: `O King, as I remember the wonderful form of Lord Krishna, I am struck with wonder more and more, and I rejoice again and again.`,
    explanation: `Remembering the magnificent cosmic form that Krishna revealed in Chapter 11, Sanjaya is repeatedly struck with awe and joy. Wonder is the appropriate response to genuine encounter with the Divine — it does not diminish with repetition but deepens.`,
    takeaway: `Wonder at the Divine does not diminish with repetition — it deepens. This is the mark of genuine encounter.`,
    tags: ['devotion', 'wisdom']
  },
  '18.78': {
    sanskrit: `यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।
तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥`,
    telugu: `యోగేశ్వరుడైన కృష్ణుడు ఉన్న చోట మరియు ధనుర్ధారి పార్థుడు ఉన్న చోట, అక్కడ శ్రీ, విజయం, వైభవం, ధ్రువ నీతి ఉంటాయి — ఇది నా మతం.`,
    english: `Wherever there is Krishna, the master of all mystics, and wherever there is Arjuna, the supreme archer, there will also certainly be opulence, victory, extraordinary power, and morality. That is my opinion.`,
    explanation: `The Gita's final verse: wherever the Divine (Krishna, the Lord of yoga) and the devoted practitioner (Arjuna, the archer) are together, there will be prosperity, victory, power, and steadfast ethics. This is the ultimate promise: wisdom united with devoted action cannot fail.`,
    takeaway: `Wisdom united with devoted action cannot fail — this is the Gita's final and ultimate promise.`,
    tags: ['wisdom', 'devotion']
  }
};
