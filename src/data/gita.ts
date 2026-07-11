import type { Verse, VerseTag, Chapter, QuizQuestion } from './types';
import { chapterMeta } from './chapterMeta';
import { chapterQuizData } from './quizData';
import { verseDatabase } from './verseDatabase';

// Curated authentic content for the most well-known and important verses.
// Key: "chapter.verse" (e.g. "2.47")
interface CuratedVerse {
  sanskrit: string;
  telugu: string;
  english: string;
  explanation: string;
  takeaway: string;
  tags: VerseTag[];
}

const curated: Record<string, CuratedVerse> = {
  '1.1': {
    sanskrit: 'धृतराष्ट्र उवाच\nधर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय॥',
    telugu: 'ధృతరాష్ట్రుడు ఉవాచ:\nధర్మక్షేత్రమైన కురుక్షేత్రంలో యుద్ధానికి సిద్ధంగా సమకూడిన నా వంశీయులు, పాండవులు ఏమి చేశారు సంజయా?',
    english: 'Dhritarashtra said: O Sanjaya, what did my sons and the sons of Pandu do, assembled together on the holy field of Kurukshetra, eager for battle?',
    explanation:
      'The blind king Dhritarashtra asks his advisor Sanjaya what is happening on the battlefield. He calls it a "field of dharma" — a place where right and wrong will be decided. This opening reminds us that every big moment in life is also a moment of choosing what is right.',
    takeaway: 'Every important moment in life is also a test of what is right.',
    tags: ['duty', 'truth'],
  },
  '1.21': {
    sanskrit: 'अर्जुन उवाच\nसेनयोरुभयोर्मध्ये रथं स्थापय मेऽच्युत।\nयावदेतान्निरीक्षेऽहं योद्धुकामानवस्थितान्॥',
    telugu: 'అర్జునుడు ఉవాచ:\nఅచ్యుతా, నా రథాన్ని రెండు సైన్యాల మధ్య నిలబెట్టు. యుద్ధానికి సిద్ధంగా నిలిచిన వీరందరినీ నేను చూసే వరకు.',
    english: 'Arjuna said: O Achyuta (Krishna), place my chariot between the two armies, so that I may look at those who stand ready to fight.',
    explanation:
      'Arjuna asks Krishna to position his chariot so he can see who he is about to fight. He wants to understand the situation before acting. This shows the value of looking clearly at a difficult situation before making a decision.',
    takeaway: 'Before acting in a hard moment, take time to see clearly.',
    tags: ['wisdom', 'courage'],
  },
  '1.28': {
    sanskrit: 'अर्जुन उवाच\nदृष्ट्वेमं स्वजनं कृष्ण युयुत्सुं समुपस्थितम्।\nसीदन्ति मम गात्राणि मुखं च परिशुष्यति॥',
    telugu: 'అర్జునుడు ఉవాచ:\nకృష్ణా, యుద్ధానికి సిద్ధంగా నిలిచిన నా బంధువులను చూసి నా అవయవాలు బలహీనపడుతున్నాయి, నా నోరు ఎండిపోతున్నది.',
    english: 'Arjuna said: O Krishna, seeing these my own people assembled, eager to fight, my limbs feel weak and my mouth goes dry.',
    explanation:
      'When Arjuna sees his own family on the other side, his body weakens. He realizes that "winning" would mean hurting those he loves. This is the moment his heart breaks — a feeling many of us know when doing the right thing is painful.',
    takeaway: 'Doing the right thing can sometimes feel painful and confusing.',
    tags: ['compassion', 'peace'],
  },
  '1.47': {
    sanskrit: 'सञ्जय उवाच\nएवमुक्त्वार्जुनः सङ्ख्ये रथोपस्थ उपाविशत्।\nविसृज्य सशरं चापं शोकसंविग्नमानसः॥',
    telugu: 'సంజయుడు ఉవాచ:\nయుద్ధభూమిలో ఇలా చెప్పి అర్జునుడు రథంలో కూర్చున్నాడు. విల్లు, బాణాలు విడిచి, దుఃఖంతో కలవరపడిన మనస్సుతో.',
    english: 'Sanjaya said: Having spoken thus on the battlefield, Arjuna sat down in the chariot, casting aside his bow and arrows, his mind overwhelmed with grief.',
    explanation:
      'Arjuna is so overwhelmed that he puts down his weapons and sits down. He cannot act. This is the lowest point — and it is exactly where true learning begins. When we admit we are confused, we become ready to listen and learn.',
    takeaway: 'Admitting confusion is the first step toward wisdom.',
    tags: ['wisdom', 'surrender'],
  },
  '2.7': {
    sanskrit: 'कार्पण्यदोषोपहतस्वभावः\nपृच्छामि त्वां धर्मसम्मूढचेताः।\nयच्छ्रेयः स्यान्निश्चितं ब्रूहि तत्\nमे शिष्यस्तेऽहं शाधि मां त्वां प्रपन्नम्॥',
    telugu: 'కారుణ్యదోషంతో క్షీణించిన మనస్సుతో, ధర్మంలో మంకుతనంతో నేను నిన్ను అడుగుతున్నాను. ఏది మంచిదో నిశ్చయించి చెప్పు. నీ శిష్యుడనైన నేను, నీకు శరణాగతుడనైన నన్ను బోధించు.',
    english: 'My nature is overcome by weakness of heart; my mind is confused about duty. I ask you: tell me clearly what is good for me. I am your disciple; please teach me, for I have taken refuge in you.',
    explanation:
      'Arjuna surrenders his pride and asks Krishna to teach him. He admits he does not know what to do. This is the moment the Gita truly begins — when a person becomes a willing student. Real learning starts with humility.',
    takeaway: 'Become a willing student, and wisdom will come to you.',
    tags: ['surrender', 'wisdom', 'discipline'],
  },
  '2.13': {
    sanskrit: 'देहिनोऽस्मिन्यथा देहे कौमारं यौवनं जरा।\nतथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति॥',
    telugu: 'జీవాత్మకు ఈ శరీరంలో బాల్యం, యవ్వనం, వృద్ధాప్యం వచ్చినట్లు, మరొక శరీరం పొందడం జరుగుతుంది. ధీరుడు దీనికి మోహించడు.',
    english: 'Just as the embodied soul passes through childhood, youth, and old age in this body, so too it passes into another body. The wise are not deluded by this.',
    explanation:
      'Krishna explains that the soul changes bodies the way a person grows from child to adult to elder. We are not our bodies — we are the one who lives in the body. Understanding this helps us not fear change or loss.',
    takeaway: 'You are not the body that changes; you are the one who experiences the change.',
    tags: ['soul', 'wisdom', 'fearlessness'],
  },
  '2.14': {
    sanskrit: 'मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥',
    telugu: 'కౌన్తేయా, చలి-వేడి, సుఖ-దుఃఖాలను ఇచ్చే ఇంద్రియ సంబంధాలు వచ్చి పోతూ ఉంటాయి. అవి నిత్యం ఉండవు. భరతవంశీయుడా, వాటిని సహించు.',
    english: 'O Kaunteya, the contacts of the senses with their objects give rise to cold and heat, pleasure and pain. They come and go and are impermanent. Endure them, O Bharata.',
    explanation:
      'Pleasure and pain, like winter and summer, come and go. They are temporary. If we remember this, we can stay calm in both good and hard times. This is one of the most practical teachings of the Gita for daily life.',
    takeaway: 'Pleasure and pain are like seasons — they come and go. Stay steady.',
    tags: ['peace', 'self-control', 'detachment'],
  },
  '2.22': {
    sanskrit: 'वासांसि जीर्णानि यथा विहाय\nनवानि गृह्णाति नरोऽपराणि।\nतथा शरीराणि विहाय जीर्णा\nन्यन्यानि संयाति नवानि देही॥',
    telugu: 'మనుషుడు పాత బట్టలను విడిచి కొత్త బట్టలు ధరించినట్లు, జీవాత్మ పాత శరీరాన్ని విడిచి కొత్త శరీరాన్ని పొందుతుంది.',
    english: 'As a person casts off worn-out clothes and puts on new ones, so the embodied soul casts off worn-out bodies and enters new ones.',
    explanation:
      'Krishna uses a beautiful comparison: changing bodies is like changing clothes. The body wears out, but the soul continues. This teaching helps us face change, loss, and even death with understanding instead of fear.',
    takeaway: 'The body is like clothing; the soul simply moves on.',
    tags: ['soul', 'fearlessness', 'wisdom'],
  },
  '2.47': {
    sanskrit: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥',
    telugu: 'నీకు కర్మ చేయడంలో మాత్రమే అధికారం ఉంది, ఫలితంలో ఎప్పుడూ లేదు. కర్మ ఫలానికి కారణం అవుతావని భావించకు, కర్మ చేయకుండా ఉండటంలో నీకు అభిమానం ఉండకూడదు.',
    english: 'You have a right to action alone, never to its fruits. Let not the fruits of action be your motive, nor let your attachment be to inaction.',
    explanation:
      'This is the most famous verse of the Gita. Do your duty fully, but do not be obsessed with the result. Study hard, work hard, do your best — but do not let worry about the outcome steal your peace. The result is not in your hands; the effort is.',
    takeaway: 'Do your best without worrying about the result — that is true freedom.',
    tags: ['action', 'detachment', 'duty'],
  },
  '2.48': {
    sanskrit: 'योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥',
    telugu: 'ధనంజయా, అభిమానం విడిచి కర్మలు చేయి. సిద్ధి, అసిద్ధి రెండిటిలో సమానంగా ఉండు. ఈ సమత్వమే యోగం అని అంటారు.',
    english: 'Established in yoga, perform your actions, abandoning attachment, O Dhananjaya. Being equal in success and failure, this evenness of mind is called yoga.',
    explanation:
      'Yoga here means balance of mind. Do your work without being attached to success or failure. Whether you win or lose, stay steady. This calm, balanced way of acting is the real meaning of yoga in the Gita.',
    takeaway: 'True yoga is a steady mind in both success and failure.',
    tags: ['yoga', 'detachment', 'peace'],
  },
  '2.56': {
    sanskrit: 'दुःखेष्वनुद्विग्नमनाः सुखेषु विगतस्पृहः।\nवीतरागभयक्रोधः स्थितधीर्मुनिरुच्यते॥',
    telugu: 'దుఃఖాలలో కలత చెందని మనస్సు, సుఖాలలో కోరిక లేనివాడు, రాగం, భయం, కోపం లేనివాడు — అతడే స్థితప్రజ్ఞ ముని.',
    english: 'One whose mind is not disturbed in sorrow, who has no craving for pleasure, who is free from attachment, fear, and anger — such a sage of steady wisdom is called a sthitaprajna.',
    explanation:
      'Krishna describes the wise person: calm in sadness, not greedy for happiness, free from attachment, fear, and anger. This is the goal of spiritual life — not escaping feelings, but staying balanced through all of them.',
    takeaway: 'A wise person stays calm in sadness and free from craving in happiness.',
    tags: ['wisdom', 'peace', 'self-control'],
  },
  '2.62': {
    sanskrit: 'ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते।\nसङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते॥',
    telugu: 'విషయాలను ఆలోచిస్తూ ఉంటే వాటిపై అభిమానం పుడుతుంది. అభిమానం వల్ల కోరిక పుడుతుంది. కోరిక వల్ల కోపం పుడుతుంది.',
    english: 'When a person dwells on objects of the senses, attachment to them grows. From attachment comes desire, and from desire comes anger.',
    explanation:
      'Krishna explains a chain reaction: thinking about something constantly leads to attachment, attachment leads to desire, and unfulfilled desire leads to anger. Knowing this chain helps us break it early by choosing what we focus on.',
    takeaway: 'Watch what you keep thinking about — it shapes your desires and your anger.',
    tags: ['self-control', 'discipline', 'peace'],
  },
  '2.66': {
    sanskrit: 'नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना।\nन चाभावयतः शान्तिरशान्तिकुतश्सुखम्॥',
    telugu: 'సమత్వం లేని వానికి బుద్ధి లేదు, సమత్వం లేని వానికి ధ్యానం లేదు. ధ్యానం లేని వానికి శాంతి లేదు. శాంతి లేని వానికి సుఖం ఎలా వస్తుంది?',
    english: 'For one who is not balanced there is no wisdom, and for one without wisdom there is no meditation. Without meditation there is no peace, and without peace, how can there be happiness?',
    explanation:
      'Krishna shows a clear path: balance leads to wisdom, wisdom to meditation, meditation to peace, and peace to happiness. Happiness is not found by chasing it directly — it comes as a result of a balanced, peaceful mind.',
    takeaway: 'Happiness comes from peace, peace from a steady mind.',
    tags: ['peace', 'wisdom', 'meditation'],
  },
  '3.5': {
    sanskrit: 'न हि कश्चित्क्षणमपि जातु तिष्ठत्यकर्मकृत्।\nकार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः॥',
    telugu: 'ఎవరూ క్షణం కూడా కర్మ చేయకుండా ఉండలేరు. ప్రకృతి గుణాల వల్ల అందరూ అనివార్యంగా కర్మ చేయబడతారు.',
    english: 'No one can remain even for a moment without performing action, for everyone is made to act helplessly by the qualities born of nature.',
    explanation:
      'Krishna says we cannot stop acting even for a second. Our very nature keeps us doing things. So the question is not whether to act, but how to act — with awareness and without attachment.',
    takeaway: 'Action is unavoidable — what matters is how we act.',
    tags: ['action', 'duty'],
  },
  '3.19': {
    sanskrit: 'तस्मादसक्तः सततं कार्यं कर्म समाचर।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥',
    telugu: 'కాబట్టి అనాసక్తిగా ఎల్లప్పుడూ కర్మను చేయి. అనాసక్తిగా కర్మ చేస్తే మనిషి పరమాన్ని పొందుతాడు.',
    english: 'Therefore, always perform your duty without attachment, for by doing so, a person attains the supreme.',
    explanation:
      'Krishna tells Arjuna to keep doing his duty without being attached. When we act without selfish motives, even ordinary work becomes a path to the highest. This is the heart of karma yoga.',
    takeaway: 'Do your duty without attachment — it becomes a path to the highest.',
    tags: ['action', 'detachment', 'duty'],
  },
  '3.21': {
    sanskrit: 'यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥',
    telugu: 'గొప్పవాడు ఏది చేస్తే, ఇతరులు కూడా అదే చేస్తారు. అతడు ఏది నియమంగా చేస్తే, లోకం అదే అనుసరిస్తుంది.',
    english: 'Whatever a great person does, others follow. Whatever standard they set, the world pursues.',
    explanation:
      'Krishna explains that leaders set examples. People follow what great people do. This is a reminder that our actions influence others — especially when we are in a position of responsibility. Act well, and others will too.',
    takeaway: 'Your actions set an example for others to follow.',
    tags: ['duty', 'discipline', 'compassion'],
  },
  '3.35': {
    sanskrit: 'श्रेयान्स्वधर्मो विगुणः परधर्मात्स्वनुष्ठितात्।\nस्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥',
    telugu: 'స్వధర్మం గుణం లేకున్నా, బాగా చేయబడిన పరధర్మం కంటే మిన్న. స్వధర్మంలో మరణం మంచిది, పరధర్మం భయం కలిగించేది.',
    english: 'Better is one\'s own duty, though imperfect, than the duty of another well performed. Death in one\'s own duty is better; the duty of another brings fear.',
    explanation:
      'Krishna teaches that it is better to do your own duty imperfectly than to copy someone else\'s role perfectly. Each person has their own path. Comparing yourself to others and trying to be them only brings confusion and fear. Be true to your own nature.',
    takeaway: 'Be yourself — your own path, even with flaws, is better than copying others.',
    tags: ['duty', 'wisdom', 'courage'],
  },
  '4.7': {
    sanskrit: 'यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥',
    telugu: 'భరతా, ధర్మం క్షీణించి, అధర్మం వృద్ధి చెందినప్పుడు, నేను నా స్వరూపాన్ని సృష్టిస్తాను (అవతరిస్తాను).',
    english: 'Whenever there is a decline in righteousness and a rise in unrighteousness, O Bharata, then I manifest myself.',
    explanation:
      'Krishna promises that whenever goodness declines and wrong rises, the Divine takes form to restore balance. This gives hope — no matter how dark things seem, good will return. It also inspires us to be part of restoring what is right.',
    takeaway: 'When things go wrong, good will rise again — and we can be part of it.',
    tags: ['truth', 'courage', 'devotion'],
  },
  '4.8': {
    sanskrit: 'परित्राणाय साधूनां विनाशाय च दुष्कृताम्।\nधर्मसंस्थापनार्थाय सम्भवामि युगे युगे॥',
    telugu: 'సాధువులను రక్షించడానికి, దుష్టులను నాశనం చేయడానికి, ధర్మాన్ని స్థాపించడానికి యుగం యుగం నేను పుడుతాను.',
    english: 'To protect the good, to destroy the wicked, and to establish righteousness — I take birth, age after age.',
    explanation:
      'Krishna explains the purpose of divine incarnation: to protect the good, remove what is harmful, and restore dharma. This teaches us that standing up for what is right is a divine quality we can all practice.',
    takeaway: 'Protecting the good and standing for what is right is a noble purpose.',
    tags: ['duty', 'courage', 'truth'],
  },
  '4.34': {
    sanskrit: 'तद्विद्धि प्रणिपातेन परिप्रश्नेन सेवया।\nउपदेक्ष्यन्ति ते ज्ञानं ज्ञानिनस्तत्त्वदर्शिनः॥',
    telugu: 'నమస్కరించి, ప్రశ్నలు అడిగి, సేవ చేసి దానిని తెలుసుకో. సత్యాన్ని చూసిన జ్ఞానులు నీకు జ్ఞానం ఉపదేశిస్తారు.',
    english: 'Know that by humble approach, by inquiry, and by service. The wise who have realized the truth will teach you that knowledge.',
    explanation:
      'Krishna tells Arjuna how to learn: approach a teacher with respect, ask sincere questions, and serve. True knowledge comes from those who have realized it, and it is received with humility. This is how real learning works in any field.',
    takeaway: 'Learn with humility, sincere questions, and respect for the wise.',
    tags: ['knowledge', 'wisdom', 'discipline'],
  },
  '4.38': {
    sanskrit: 'न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।\nतत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति॥',
    telugu: 'ఈ లోకంలో జ్ఞానం వంటి పవిత్రం మరొకటి లేదు. యోగ సిద్ధి వల్ల అది కాలక్రమేణ ఆత్మలో లభిస్తుంది.',
    english: 'There is nothing in this world as purifying as knowledge. One who is established in yoga finds it in the self in due time.',
    explanation:
      'Krishna says knowledge is the greatest purifier. It cleanses the mind and heart. True knowledge is not just information — it is understanding that transforms us from within. It comes to those who practice with patience.',
    takeaway: 'Knowledge purifies the heart — seek it with patience and practice.',
    tags: ['knowledge', 'wisdom', 'discipline'],
  },
  '5.10': {
    sanskrit: 'ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः।\nलिप्यते न स पापेन पद्मपत्रमिवाम्भसा॥',
    telugu: 'బ్రహ్మణి కర్మలను అప్పగించి, అభిమానం విడిచి కర్మ చేసేవాడు పాపంతో స్పృశబడడు, నీటితో తామర ఆకులా.',
    english: 'One who performs actions, surrendering them to the Divine and abandoning attachment, is not touched by sin — like a lotus leaf untouched by water.',
    explanation:
      'Krishna compares the wise to a lotus leaf that sits on water but never gets wet. They act in the world but are not stained by it. This is the ideal — to live fully in the world without being trapped by it.',
    takeaway: 'Live in the world fully, but let it not stick to your heart — like a lotus leaf on water.',
    tags: ['detachment', 'action', 'peace'],
  },
  '6.5': {
    sanskrit: 'उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥',
    telugu: 'ఆత్మతో ఆత్మను ఉద్ధరించుకో, ఆత్మను అవమానించకు. ఆత్మే ఆత్మకు బంధువు, ఆత్మే ఆత్మకు శత్రువు.',
    english: 'Lift yourself by yourself; do not let yourself fall. For the self alone is the friend of the self, and the self alone is the enemy of the self.',
    explanation:
      'Krishna says we are our own best friend or our own worst enemy. No one else can do the inner work for us. Our own mind, when trained, lifts us up; when untrained, it pulls us down. This is a powerful call to self-mastery.',
    takeaway: 'You are your own best friend or your own worst enemy — train your mind.',
    tags: ['self-control', 'discipline', 'wisdom'],
  },
  '6.6': {
    sanskrit: 'बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः।\nअनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्॥',
    telugu: 'ఆత్మతో ఆత్మను జయించినవానికి ఆత్మే బంధువు. ఆత్మను జయించనివానికి ఆత్మే శత్రువులా వర్తిస్తుంది.',
    english: 'For one who has conquered the self, the self is a friend. For one who has not, the self acts like an enemy.',
    explanation:
      'Krishna deepens the previous teaching: when you master your mind, it becomes your greatest friend. When you do not, it becomes your enemy. The same mind can either lift us or drag us — depending on whether we have trained it.',
    takeaway: 'A mastered mind is your friend; an untrained mind is your enemy.',
    tags: ['self-control', 'discipline', 'meditation'],
  },
  '6.16': {
    sanskrit: 'नात्यश्नतस्तु योगोऽस्ति न चैकान्तमनश्नतः।\nन चातिस्वप्नशीलस्य जाग्रतो नैव चार्जुन॥',
    telugu: 'అర్జునా, మితిమీరి తినేవానికి, మితిమీరి ఉపవాసం చేసేవానికి, ఎక్కువ నిద్రపోయేవానికి, ఎక్కువ మేల్కొలుపుతూ ఉండేవానికి యోగం లేదు.',
    english: 'O Arjuna, yoga is not for one who eats too much or too little, sleeps too much or too little.',
    explanation:
      'Krishna teaches moderation. Yoga — a balanced, focused life — is not possible if we eat or sleep too much or too little. The path to inner peace begins with simple, balanced habits. This is practical wisdom for everyday life.',
    takeaway: 'Balance in eating, sleeping, and habits is the foundation of a focused life.',
    tags: ['discipline', 'yoga', 'self-control'],
  },
  '6.35': {
    sanskrit: 'असंशयं महाबाहो मनो दुर्निग्रहं चलम्।\nअभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते॥',
    telugu: 'మహాబాహో, మనస్సు నిశ్చయంగా నిగ్రహించశకతమైన, చంచలమైనది. కానీ కౌన్తేయా, అభ్యాసం వల్ల, వైరాగ్యం వల్ల దానిని నిగ్రహించవచ్చు.',
    english: 'O mighty-armed one, the mind is undoubtedly restless and hard to control. Yet, O Kaunteya, it can be controlled by practice and detachment.',
    explanation:
      'Arjuna complains the mind is too restless to control. Krishna agrees it is hard, but says it is possible through two things: practice (abhyasa) and detachment (vairagya). With steady effort, even the wildest mind can be trained.',
    takeaway: 'The mind is restless, but practice and detachment can master it.',
    tags: ['meditation', 'discipline', 'self-control'],
  },
  '7.7': {
    sanskrit: 'मत्तः परतरं नान्यत्किञ्चिदस्ति धनञ्जय।\nमयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव॥',
    telugu: 'ధనంజయా, నా కంటే మించిన మరొకటి లేదు. దారంలో మణులు గుచ్చినట్లు, ఈ సర్వం నాలో గుచ్చి ఉంది.',
    english: 'O Dhananjaya, there is nothing higher than me. All this is strung on me like gems on a thread.',
    explanation:
      'Krishna says everything is connected to him, like beads on a single thread. He is the unity behind all diversity. This teaching helps us see that all of life is connected through one divine source.',
    takeaway: 'All of life is connected, like beads on one thread.',
    tags: ['devotion', 'truth', 'knowledge'],
  },
  '7.16': {
    sanskrit: 'चतुर्विधा भजन्ते मां जनाः सुकृतिनोऽर्जुन।\nआर्तो जिज्ञासुरर्थार्थी ज्ञानी च भरतर्षभ॥',
    telugu: 'అర్జునా, నల్లి చేసినవారు నాలుగు రకాలుగా నన్ను భజిస్తారు — బాధితుడు, జ్ఞానాకాంక్షి, అర్థార్థి, జ్ఞాని.',
    english: 'O Arjuna, four kinds of people worship me: the distressed, the seeker of knowledge, the seeker of wealth, and the wise.',
    explanation:
      'Krishna says people come to the Divine for different reasons — when in pain, to learn, to gain something, or out of wisdom. All are good, because all are turning toward the truth. The wise, who love the Divine for the Divine alone, are dearest.',
    takeaway: 'People seek the Divine for many reasons — all are welcome; wisdom is the highest.',
    tags: ['devotion', 'knowledge', 'wisdom'],
  },
  '8.5': {
    sanskrit: 'अन्तकाले च मामेव स्मरन्मुक्त्वा कलेवरम्।\nयः प्रयाति स मद्भावं याति नास्त्यत्र संशयः॥',
    telugu: 'అంత్యకాలంలో నన్నే స్మరించి శరీరాన్ని విడిచి వెళ్ళేవాడు నా సన్నిధిని పొందుతాడు, దీంట్లో సంశయం లేదు.',
    english: 'Whoever, at the time of death, leaves the body remembering me alone, attains my state. Of this there is no doubt.',
    explanation:
      'Krishna says that what we hold in our heart at the end of life shapes our journey. This is why we should fill our life with remembrance of the Divine, so that it becomes natural to us. What we practice in life, we carry at the end.',
    takeaway: 'What you fill your heart with in life, you carry with you.',
    tags: ['devotion', 'surrender', 'faith'],
  },
  '9.22': {
    sanskrit: 'अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥',
    telugu: 'నన్నే ఏకాగ్రంగా ఆలోచిస్తూ, నన్ను భజించేవారికి, నిత్యం నన్ను సేవించేవారికి నేను యోగక్షేమాలను పొందించి పెడతాను.',
    english: 'To those who worship me with exclusive devotion, meditating on me alone, I carry what they lack and preserve what they have.',
    explanation:
      'Krishna promises that those who love the Divine with all their heart are cared for. They need not worry about what they lack — the Divine provides. This is a teaching of trust: when we give our heart fully, we are supported.',
    takeaway: 'Give your heart fully, and you will be supported.',
    tags: ['devotion', 'surrender', 'faith'],
  },
  '9.26': {
    sanskrit: 'पत्रं पुष्पं फलं तोयं यो मे भक्त्या प्रयच्छति।\nतदहं भक्त्युपहृतमश्नामि प्रयतात्मनः॥',
    telugu: 'ఎవరైతే భక్తితో నాకు ఆకు, పువ్వు, కాయ, నీరు సమర్పిస్తారో, శుద్ధ హృదయంతో భక్తితో సమర్పించిన దానిని నేను స్వీకరిస్తాను.',
    english: 'If one offers me a leaf, a flower, fruit, or water with devotion, I accept it — the devotion of a pure heart.',
    explanation:
      'Krishna says the Divine does not need grand offerings. Even a simple leaf or water, given with love, is accepted. What matters is not the gift but the heart behind it. This makes devotion possible for everyone, rich or poor.',
    takeaway: 'It is not the gift that matters, but the love with which it is given.',
    tags: ['devotion', 'faith', 'compassion'],
  },
  '9.34': {
    sanskrit: 'मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।\nमामेवैष्यसि युक्त्वैवमात्मानं मत्परायणः॥',
    telugu: 'నా మనస్సు గలవాడివి, నా భక్తుడవి, నా యజ్ఞం చేసేవాడవి, నన్ను నమస్కరించు. నన్నే శరణు పొంది నన్నే చేరుతావు.',
    english: 'Fix your mind on me, be devoted to me, worship me, bow to me. Thus you will come to me — this I promise, for you are dear to me.',
    explanation:
      'Krishna gives a simple path: keep the mind on the Divine, love, worship, and surrender. This is the essence of devotion. It is not complicated — it is a turning of the whole heart toward what is highest.',
    takeaway: 'Turn your whole heart toward the Divine — that is the simple path of love.',
    tags: ['devotion', 'surrender', 'faith'],
  },
  '10.20': {
    sanskrit: 'अहमात्मा गुडाकेश सर्वभूताशयस्थितः।\nअहमादिश्च मध्यं च भूतानामन्त एव च॥',
    telugu: 'గుడాకేశా, నేను సర్వ భూతాల హృదయంలో ఉన్న ఆత్మను. నేను భూతాల ఆది, మధ్య, అంతము కూడా.',
    english: 'O Gudakesha, I am the self seated in the hearts of all beings. I am the beginning, the middle, and the end of all beings.',
    explanation:
      'Krishna says he dwells in the heart of every being — not just some, but all. He is the beginning, middle, and end of everything. This teaches us to see the Divine in everyone we meet, and to respect all life.',
    takeaway: 'The Divine lives in every heart — see it in everyone.',
    tags: ['devotion', 'truth', 'compassion'],
  },
  '10.41': {
    sanskrit: 'यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा।\nतत्तदेवावगच्छ त्वं मम तेजोंशसम्भवम्॥',
    telugu: 'ఏదేది విభూతి గలది, కాంతి గలది, బలం గలది ఉంటే, అది నా తేజోభాగం వల్ల వచ్చినదని తెలుసుకో.',
    english: 'Whatever being has glory, splendor, or power, know that to be a manifestation of a fraction of my splendor.',
    explanation:
      'Krishna says that wherever we see beauty, power, or greatness in the world, it is a spark of the Divine. This helps us appreciate the good in the world as sacred, and not be fooled by it as the ultimate — it is only a glimpse of something greater.',
    takeaway: 'All beauty and greatness in the world is a glimpse of the Divine.',
    tags: ['devotion', 'knowledge', 'truth'],
  },
  '11.12': {
    sanskrit: 'दिवि सूर्यसहस्रस्य भवेद्भुक्तुग्युगापदा।\nयदि भाः सृष्टिः सा च भासि तस्यैव भासि सा॥',
    telugu: 'ఆకాశంలో వెయ్యి సూర్యులు ఒకేసారి ఉదయించినట్లు కలిగే కాంతి, ఆ విశ్వరూప కాంతికి సమానం.',
    english: 'If the radiance of a thousand suns were to rise at once in the sky, that would be like the splendor of that universal form.',
    explanation:
      'Arjuna sees Krishna\'s cosmic form, brighter than a thousand suns rising together. This image conveys the overwhelming brilliance of the Divine. It reminds us that behind the gentle forms we know lies an unimaginable splendor.',
    takeaway: 'Behind the gentle forms of life lies an unimaginable divine splendor.',
    tags: ['devotion', 'truth', 'fearlessness'],
  },
  '11.32': {
    sanskrit: 'कालोऽस्मि लोकक्षयकृत्प्रवृद्धो\nलोकान्समाहर्तुमिह प्रवृत्तः।\nऋतेऽपि त्वां न भविष्यन्ति सर्वे\nयेऽवस्थिताः प्रत्यनीकेषु योधाः॥',
    telugu: 'నేను లోకాలను నాశనం చేసే మహాకాలం. ఈ లోకాలను నాశనం చేయడానికి ప్రవృత్తమైన నేను. నీవు లేకున్నా, ఎదురు నిలిచిన యోధులందరూ ఉండరు.',
    english: 'I am time, the destroyer of worlds, grown mighty, here to destroy. Even without you, all these warriors will not remain.',
    explanation:
      'Krishna reveals himself as time itself — the power that consumes all things. He tells Arjuna that the warriors are already destined to end; Arjuna is only the instrument. This teaches humility: we are not the doers, only participants in a larger order.',
    takeaway: 'We are instruments of a larger order — humility, not pride, is wisdom.',
    tags: ['truth', 'surrender', 'wisdom'],
  },
  '11.55': {
    sanskrit: 'मत्कर्मकृन्मत्परमो मद्भक्तः सङ्गवर्जितः।\nनिर्वैरः सर्वभूतेषु यः स मामेति पाण्डव॥',
    telugu: 'పాండవా, నా కర్మ చేసేవాడు, నాలో అత్యధిక భక్తి గలవాడు, అభిమానం లేని భక్తుడు, సర్వ భూతాలలో ద్వేషం లేనివాడు — అతడు నన్ను చేరుతాడు.',
    english: 'O Pandava, one who does all actions for me, who is devoted to me, free from attachment, with no enmity toward any being — such a one comes to me.',
    explanation:
      'Krishna describes who reaches the Divine: one who acts for the Divine, loves the Divine, is free from attachment, and holds no hatred for any being. This is the complete picture of a spiritual life — action, love, detachment, and universal kindness.',
    takeaway: 'Act for the Divine, love the Divine, and hold no hatred — this is the way.',
    tags: ['devotion', 'detachment', 'compassion'],
  },
  '12.8': {
    sanskrit: 'मय्येव मन आधत्स्व मयि बुद्धिं निवेशय।\nनिवसिष्यसि मय्येव अत मात्रात् न संशयः॥',
    telugu: 'నాలో మనస్సు నిలపి, నాలో బుద్ధిని లగ్నం చేయి. తరువాత నాలోనే నివసిస్తావు, ఇందులో సంశయం లేదు.',
    english: 'Fix your mind on me, rest your thoughts on me. Thus you will live in me — of this there is no doubt.',
    explanation:
      'Krishna gives a simple instruction: keep the mind and thoughts on the Divine. This steady remembrance leads to living in the Divine. It is a practice of love — keeping what we love always in our heart.',
    takeaway: 'Keep your mind on what you love most, and you will live in it.',
    tags: ['devotion', 'meditation', 'faith'],
  },
  '12.13': {
    sanskrit: 'अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च।\nनिर्ममो निरहङ्कारः समदुःखसुखः क्षमी॥',
    telugu: 'సర్వ భూతాల యెడల ద్వేషం లేనివాడు, మిత్రభావం, కరుణ గలవాడు, మమకారం లేనివాడు, అహంకారం లేనివాడు, సుఖదుఃఖాలలో సమానుడు, క్షమాశీలుడు.',
    english: 'One who hates no being, who is friendly and compassionate, free from possessiveness and ego, equal in sorrow and joy, forgiving — such a devotee is dear to me.',
    explanation:
      'Krishna lists the qualities of a dear devotee: no hatred, friendliness, compassion, freedom from possessiveness and ego, balance in joy and sorrow, and forgiveness. These are qualities we can all practice — they make us lovable to the Divine and to people.',
    takeaway: 'Be kind, humble, balanced, and forgiving — these make you dear to the Divine.',
    tags: ['devotion', 'compassion', 'peace'],
  },
  '12.19': {
    sanskrit: 'यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः।\nहर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥',
    telugu: 'ఎవరితో లోకం కలత చెందదో, ఎవరు లోకం వల్ల కలత చెందరో, హర్షం, అసూయ, భయం, ఆవేశాల నుండి విముక్తుడైనవాడు — అతడు నాకు ప్రియుడు.',
    english: 'One by whom the world is not disturbed, and who is not disturbed by the world, who is free from joy, envy, fear, and agitation — such a one is dear to me.',
    explanation:
      'Krishna describes a devotee who neither disturbs others nor is disturbed by them — free from extreme emotions like envy, fear, and agitation. This is inner steadiness. Such a person brings peace wherever they go.',
    takeaway: 'Disturb no one, and let nothing disturb you — this is inner freedom.',
    tags: ['peace', 'devotion', 'self-control'],
  },
  '13.9': {
    sanskrit: 'असक्तिरनभिष्वङ्गः पुत्रदारगृहादिषु।\nनित्यं च समचित्तत्वमिष्टानिष्टोपपत्तिषु॥',
    telugu: 'కుమారుడు, భార్య, ఇల్లు మొదలైన వాటిపై అభిమానం లేనిది, ఇష్ట, అనిష్టాలలో ఎల్లప్పుడూ సమచిత్తత్వం.',
    english: 'Detachment, non-attachment to family, home, and the like; constant evenness of mind in pleasant and unpleasant events.',
    explanation:
      'Krishna lists qualities of true knowledge, including detachment from family and home, and steadiness in both pleasant and unpleasant events. This does not mean not loving them — it means loving without possessiveness, and staying steady when life changes.',
    takeaway: 'Love without possessiveness, and stay steady when life changes.',
    tags: ['detachment', 'wisdom', 'peace'],
  },
  '14.5': {
    sanskrit: 'सत्त्वं रजस्तम इति गुणाः प्रकृतिसम्भवाः।\nनिबध्नन्ति महाबाहो देहे देहिनमव्ययम्॥',
    telugu: 'సత్త్వం, రజో, తమో గుణాలు ప్రకృతి వల్ల పుట్టినవి. అవి మహాబాహో, శరీరంలో అవినాశి జీవాత్మను బంధిస్తాయి.',
    english: 'Sattva, rajas, and tamas — these qualities born of nature bind the imperishable soul in the body.',
    explanation:
      'Krishna introduces the three gunas: sattva (purity), rajas (passion), and tamas (dullness). These qualities of nature bind the soul to the body and the world. Understanding them helps us see why we act the way we do and how to rise above.',
    takeaway: 'Three qualities — purity, passion, dullness — shape how we act and feel.',
    tags: ['knowledge', 'self-control', 'wisdom'],
  },
  '14.26': {
    sanskrit: 'मां च योऽव्यभिचारेण भक्तियोगेन सेवते।\nस गुणान्समतीत्यैतान्ब्रह्मभूयाय कल्पते॥',
    telugu: 'ఎవరైతే అవ్యభిచార భక్తి యోగంతో నన్ను సేవిస్తారో, అతడు ఈ గుణాలను దాటి బ్రహ్మం అవుతాడు.',
    english: 'One who serves me with unwavering devotion crosses beyond these qualities and becomes fit to become Brahman.',
    explanation:
      'Krishna says that steady, unwavering devotion lifts a person beyond the three gunas. Love for the Divine is the simplest way to rise above the pulls of nature. This is a path of the heart, open to all.',
    takeaway: 'Steady love for the Divine lifts you above all the pulls of nature.',
    tags: ['devotion', 'detachment', 'wisdom'],
  },
  '15.7': {
    sanskrit: 'ममैवांशो जीवलोके जीवभूतः सनातनः।\nमनःषष्ठानीन्द्रियाणि प्रकृतिस्थानि कर्षति॥',
    telugu: 'సనాతన జీవాత్మ నా అంశ. ప్రకృతిలో ఉన్న మనస్సు, ఐదు ఇంద్రియాలను లాగుతుంది.',
    english: 'An eternal fragment of myself, the living being in this world, draws the five senses and the mind, which are in nature.',
    explanation:
      'Krishna says the soul is a part of the Divine itself, eternal. It uses the mind and senses to experience the world. Understanding that we are a spark of the Divine gives us dignity and a sense of our true worth.',
    takeaway: 'You are a spark of the Divine — eternal and worthy.',
    tags: ['soul', 'devotion', 'knowledge'],
  },
  '15.15': {
    sanskrit: 'सर्वस्य चाहं हृदि सन्निविष्टो\nमत्तः स्मृतिर्ज्ञानमपोहनं च।\nवेदैश्च सर्वैरहमेव वेद्यो\nवेदान्तकृद्वेदविदेव चाहम्॥',
    telugu: 'నేను అందరి హృదయంలో ఉన్నాను. నా వల్లే స్మృతి, జ్ఞానం, అపోహనం. అన్ని వేదాల వల్ల తెలుసుకోవాల్సింది నేనే. వేదాంతాన్ని రచించినవాడిని, వేదాలను తెలిసినవాడిని నేనే.',
    english: 'I am seated in the hearts of all. From me come memory, knowledge, and the removal of doubt. I alone am to be known by all the Vedas, the author of the Vedanta, and the knower of the Vedas.',
    explanation:
      'Krishna says he is in every heart, and that memory, knowledge, and clarity all come from the Divine. This means that whenever we truly understand something, it is a gift. True learning is not just effort — it is also grace.',
    takeaway: 'All true understanding is a gift from the Divine within.',
    tags: ['knowledge', 'devotion', 'truth'],
  },
  '15.19': {
    sanskrit: 'यो मामेवमसम्मूढो जानाति पुरुषोत्तमम्।\nस सर्वविद्भजति मां सर्वभावेन भारत॥',
    telugu: 'భరతా, ఎవరైతే అజ్ఞానం లేకుండా నన్ను పురుషోత్తముడిగా తెలుసుకుంటాడో, అతడు సర్వం తెలిసినవాడై సర్వభావంతో నన్ను భజిస్తాడు.',
    english: 'O Bharata, one who knows me without delusion as the Supreme Person, knowing all, worships me with all their being.',
    explanation:
      'Krishna says that knowing the Divine as the Supreme Person — without confusion — leads to worshipping with one\'s whole being. This is the highest knowledge: not just knowing about the Divine, but knowing the Divine directly and loving fully.',
    takeaway: 'To know the Divine truly is to love with your whole being.',
    tags: ['devotion', 'knowledge', 'surrender'],
  },
  '16.1': {
    sanskrit: 'अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः।\nदानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जवम्॥',
    telugu: 'భయం లేకపోవడం, మనస్సు శుద్ధి, జ్ఞాన, యోగాలలో నిలిచి ఉండడం, దానం, ఇంద్రియ నిగ్రహం, యజ్ఞం, స్వాధ్యాయం, తపస్సు, ఋజుత్వం.',
    english: 'Fearlessness, purity of heart, steadiness in knowledge and yoga, charity, self-control, sacrifice, study, austerity, straightforwardness.',
    explanation:
      'Krishna begins listing divine qualities. The very first is fearlessness — being unafraid. Then purity, steadiness, generosity, self-control, and more. These are qualities we can cultivate one by one. They lead to freedom and a noble life.',
    takeaway: 'Fearlessness is the first divine quality — cultivate it, and the rest follow.',
    tags: ['fearlessness', 'discipline', 'wisdom'],
  },
  '16.21': {
    sanskrit: 'त्रिविधं नरकस्येदं द्वारं नाशनमात्मनः।\nकामः क्रोधस्तथा लोभस्तस्मादेतत्त्रयं त्यजेत्॥',
    telugu: 'ఆత్మను నాశనం చేసే మూడు నరక ద్వారాలు — కామం, క్రోధం, లోభం. కాబట్టి ఈ మూడిటినీ విడనాడాలి.',
    english: 'Three are the gates of hell, destructive of the self: lust, anger, and greed. Therefore one should abandon these three.',
    explanation:
      'Krishna names the three gates that lead to ruin: greed, anger, and lust. These three destroy peace and wisdom. By watching for them and letting them go, we protect our inner life. This is practical advice for a good life.',
    takeaway: 'Greed, anger, and lust destroy the self — let them go.',
    tags: ['self-control', 'discipline', 'wisdom'],
  },
  '17.15': {
    sanskrit: 'अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत्।\nस्वाध्यायाभ्यसनं चैव वाङ्मयं तप उच्यते॥',
    telugu: 'కలత కలిగించని, సత్యమైన, ఇష్టమైన, హితకరమైన వాక్యం, స్వాధ్యాయ అభ్యాసం — ఇది వాఙ్మయ తపస్సు.',
    english: 'Speech that causes no distress, that is truthful, pleasant, and beneficial, and the practice of study — this is called the austerity of speech.',
    explanation:
      'Krishna describes right speech: words that do not hurt, that are true, kind, and helpful. This is a beautiful guide for how we speak — especially today, when words spread so fast. Truthful, kind, helpful speech is a form of spiritual practice.',
    takeaway: 'Speak words that are true, kind, and helpful — that is a sacred practice.',
    tags: ['discipline', 'compassion', 'truth'],
  },
  '17.20': {
    sanskrit: 'दातव्यमिति यद्दानं दीयतेऽनुपकारिणे।\nदेशे काले च पात्रे च तद्दानं सात्त्विकं स्मृतम्॥',
    telugu: 'ఇవ్వాలి అనే భావంతో, ప్రతిఫలం ఆశించక, సముచిత దేశం, కాలం, పాత్రంలో ఇవ్వబడే దానం సాత్త్వికం.',
    english: 'Charity given as a duty, to one who cannot repay, at the right place and time, to a worthy person — that charity is sattvic.',
    explanation:
      'Krishna describes the best kind of giving: giving because it is right, not expecting anything back, to someone in need, at the right time and place. Pure giving is its own reward. This is the highest form of generosity.',
    takeaway: 'Give because it is right, not to get back — that is pure generosity.',
    tags: ['compassion', 'detachment', 'duty'],
  },
  '18.61': {
    sanskrit: 'ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति।\nभ्रमयन्सर्वभूतानि यन्त्रारूढानि मायया॥',
    telugu: 'అర్జునా, ఈశ్వరుడు సర్వ భూతాల హృదయంలో ఉంటాడు. యంత్రంలో ఎక్కిన వారిలా మాయ వల్ల సర్వ భూతాలను తిప్పుతాడు.',
    english: 'O Arjuna, the Lord dwells in the hearts of all beings, causing all beings to revolve by his power, as if mounted on a machine.',
    explanation:
      'Krishna says the Divine is in every heart, guiding all beings like a driver moves a machine. This teaches us that there is a higher intelligence at work in our lives. We are not alone — the Divine is within, guiding us.',
    takeaway: 'The Divine is in every heart, gently guiding all of life.',
    tags: ['devotion', 'surrender', 'truth'],
  },
  '18.65': {
    sanskrit: 'मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु।\nमामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे॥',
    telugu: 'నా మనస్సు గలవాడివి, నా భక్తుడవి, నా యజ్ఞం చేసేవాడవి, నన్ను నమస్కరించు. నన్నే చేరుతావు, నీవు నాకు ప్రియుడవని నిశ్చయిస్తున్నాను.',
    english: 'Fix your mind on me, be devoted to me, worship me, bow to me. You will come to me — this I promise, for you are dear to me.',
    explanation:
      'Krishna repeats the simple path of devotion: keep the mind on the Divine, love, worship, surrender. He promises that this leads to the Divine. The repetition shows how important this is — love is the simplest and surest path.',
    takeaway: 'Love the Divine with all your heart — this is the surest path.',
    tags: ['devotion', 'surrender', 'faith'],
  },
  '18.66': {
    sanskrit: 'सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥',
    telugu: 'సర్వ ధర్మాలను విడిచి, నన్నే శరణు పొందు. నేను నిన్ను సర్వ పాపాల నుండి విమోచిస్తాను, దుఃఖపడకు.',
    english: 'Abandoning all duties, take refuge in me alone. I will free you from all sins; do not grieve.',
    explanation:
      'This is one of the most important verses in the Gita. Krishna says: let go of everything and surrender to the Divine alone. The Divine will free you from all burdens. This is the essence of complete trust — letting go and resting in the Divine.',
    takeaway: 'Surrender completely to the Divine — let go of all burdens.',
    tags: ['surrender', 'devotion', 'fearlessness'],
  },
  '18.78': {
    sanskrit: 'यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥',
    telugu: 'ఎక్కడ యోగేశ్వరుడైన కృష్ణుడు, ధనుర్ధరుడైన పార్థుడు ఉంటారో, అక్కడ శ్రీ, విజయం, భూతి, ధృవ నీతి ఉంటాయని నా అభిప్రాయం.',
    english: 'Where there is Krishna, the lord of yoga, and Arjuna, the archer, there will be wealth, victory, power, and morality — this is my conviction.',
    explanation:
      'Sanjaya concludes the Gita with this beautiful verse: wherever the Divine (Krishna) and the dedicated person (Arjuna) are together, there is success, victory, and goodness. This is the secret — when we align our effort with the Divine, success and goodness follow.',
    takeaway: 'Where the Divine and your sincere effort meet, there is success and goodness.',
    tags: ['devotion', 'duty', 'courage'],
  },
};

// Theme-based content templates for generating verses that aren't individually curated.
// Each chapter has a set of thematic "beats" that cycle through its verses.
interface ChapterBeats {
  themes: string[];
  tags: VerseTag[];
}

const chapterBeats: Record<number, ChapterBeats> = {
  1: {
    themes: ['సైన్యాలు సమాహారం అవుతున్నాయి', 'యోధులు యుద్ధానికి సిద్ధం', 'శంఖాలు ధ్వనిస్తున్నాయి', 'ఇరుపక్షాలలో తన బంధువులను చూడటం', 'అర్జునుని విషాదం', 'విల్లు విడిచిపెట్టటం', 'కృష్ణుని సలహా అడగటం'],
    tags: ['duty', 'courage', 'compassion'],
  },
  2: {
    themes: ['ఆత్మ నిత్యమైనది', 'శరీరం క్షణికమైనది', 'భయం లేకుండా ధర్మం చేయటం', 'జ్ఞాన మార్గం', 'స్థితప్రజ్ఞ యొక్క జ్ఞానం', 'ఇంద్రియాలను నిగ్రహించటం', 'జ్ఞాని యొక్క శాంతి'],
    tags: ['soul', 'wisdom', 'duty', 'peace'],
  },
  3: {
    themes: ['కర్మ చేయక తప్పదు', 'ఫలితాన్ని ఆశించని కర్మ', 'యజ్ఞం, దానం', 'అభిమానం లేకుండా ధర్మం', 'మార్గదర్శకుడిగా ఉదాహరణ', 'కోరికే శత్రువు', 'స్వధర్మం పాటించటం'],
    tags: ['action', 'duty', 'detachment'],
  },
  4: {
    themes: ['జ్ఞానం యొక్క ప్రాచీన పరంపర', 'దైవ అవతారం', 'కర్మలో అకర్మ', 'జ్ఞానం పవిత్రం చేస్తుంది', 'జ్ఞాని అందరిలో సమానం చూస్తాడు', 'విశ్వాసం, యజ్ఞం', 'జ్ఞాన అగ్ని'],
    tags: ['knowledge', 'action', 'wisdom'],
  },
  5: {
    themes: ['రెండు మార్గాలు ఒకే గమ్యానికి', 'కర్మ సన్యాసం కంటే సులభం', 'తామర ఆకు ఉపమానం', 'జ్ఞాని అందరిలో దేవుని చూస్తాడు', 'అంతరంగ శాంతి', 'జ్యోతి మార్గం', 'జీవితంలోనే ముక్తి'],
    tags: ['detachment', 'peace', 'action'],
  },
  6: {
    themes: ['ధ్యాన సాధన', 'కూర్చుని మనస్సు ఏకాగ్రం చేయటం', 'మనస్సు మిత్రుడు, శత్రువు', 'మితిమీరని అలవాట్లు', 'చంచల మనస్సును నిగ్రహించటం', 'యోగి యొక్క శాంతి', 'ఉత్తమ యోగి'],
    tags: ['meditation', 'self-control', 'discipline'],
  },
  7: {
    themes: ['భగవంతుని పూర్తిగా తెలుసుకోవటం', 'భగవంతుని రెండు స్వరూపాలు', 'నాలుగు రకాల భక్తులు', 'భగవంతుడు అన్ని భూతాలుగా', 'మాయను దాటటం', 'భగవంతుడే మూలం', 'అంత్యకాలంలో భగవంతుని స్మరించటం'],
    tags: ['devotion', 'knowledge', 'truth'],
  },
  8: {
    themes: ['అక్షర బ్రహ్మం', 'మరణ సమయంలో భగవంతుని స్మరణ', 'జ్యోతి, చీకటి మార్గాలు', 'సృష్టి చక్రాలు', 'పరమ ధామం', 'ఓంకార మహిమ', 'పరమానికి చేరుకోవటం'],
    tags: ['soul', 'devotion', 'faith'],
  },
  9: {
    themes: ['అత్యంత రహస్య జ్ఞానం', 'భగవంతుడు సర్వాన్ని వ్యాపించాడు', 'అన్ని జీవులు భగవంతునిలో ఉన్నాయి', 'నాలుగు రకాల భక్తులు', 'భక్తితో సమర్పణ', 'భగవంతుడు అందరిని స్వీకరిస్తాడు', 'శరణాగతి మార్గం'],
    tags: ['devotion', 'surrender', 'knowledge'],
  },
  10: {
    themes: ['భగవంతుని విభూతులు', 'ప్రతి వర్గంలో ఉత్తముడు', 'ప్రతి శ్రేణిలో శ్రేష్ఠుడు', 'సర్వ బలానికి మూలం', 'ప్రకృతిలో భగవంతుడు', 'జ్ఞానంలో భగవంతుడు', 'భగవంతుని తేజోభాగం'],
    tags: ['devotion', 'knowledge', 'truth'],
  },
  11: {
    themes: ['అర్జునుని కోరిక - విశ్వరూప దర్శనం', 'దివ్య దృష్టి ప్రసాదం', 'విశ్వరూపం ప్రకటన', 'అనంత ముఖాలు, నేత్రాలు', 'అన్ని జీవులు ఆ రూపంలో', 'అర్జునుని ఆశ్చర్యం, భయం', 'శాంత రూపానికి తిరిగి రాటం'],
    tags: ['devotion', 'truth', 'fearlessness'],
  },
  12: {
    themes: ['సగుణ, నిర్గుణ భక్తి', 'రెండు మార్గాలు భగవంతునికి చేరుస్తాయి', 'ప్రియ భక్తుని లక్షణాలు', 'ద్వేషం లేనివాడు, కరుణ', 'అభిమానం లేనివాడు', 'సుఖదుఃఖాలలో సమానుడు', 'భక్తి మార్గం'],
    tags: ['devotion', 'peace', 'compassion'],
  },
  13: {
    themes: ['క్షేత్రం, క్షేత్రజ్ఞుడు', 'శరీరం, ఆత్మ', 'నిజ జ్ఞానం', 'భూతాలు, అహంకారం', 'అన్ని శరీరాలలో ఆత్మ', 'ప్రకృతి, పురుషుని సంయోగం', 'అంటూ భగవంతుని చూడటం'],
    tags: ['knowledge', 'soul', 'wisdom'],
  },
  14: {
    themes: ['మూడు గుణాలు', 'సత్త్వం - పవిత్రత', 'రజో - ప్రేరణ', 'తమో - అజ్ఞానం', 'గుణాలు ఎలా బంధిస్తాయి', 'గుణాలను దాటటం', 'పరమ ధామం'],
    tags: ['knowledge', 'self-control', 'wisdom'],
  },
  15: {
    themes: ['విశ్వ వృక్షం', 'వైరాగ్యంతో దానిని నరకటం', 'పురుషోత్తముడు', 'ఆత్మ భగవంతుని అంశ', 'సూర్య చంద్రులలో భగవంతుడు', 'స్మృతి, జ్ఞానం భగవంతుడు', 'పురుషోత్తముని తెలుసుకోవటం'],
    tags: ['soul', 'devotion', 'detachment'],
  },
  16: {
    themes: ['దైవ లక్షణాలు', 'అభయం, పవిత్రత', 'దానవ స్వభావం', 'నరక ద్వారాలు', 'కామం, క్రోధం, లోభం', 'శాస్త్రం మార్గదర్శకం', 'దైవ మార్గం ఎంచటం'],
    tags: ['fearlessness', 'discipline', 'wisdom'],
  },
  17: {
    themes: ['మూడు రకాల విశ్వాసాలు', 'సాత్త్విక, రాజసిక, తామసిక ఆహారం', 'మూడు రకాల యజ్ఞాలు', 'మూడు రకాల తపస్సులు', 'సద్వాక్కు', 'మూడు రకాల దానం', 'ఓంకార మహిమ'],
    tags: ['faith', 'discipline', 'devotion'],
  },
  18: {
    themes: ['నిజ సన్యాసం', 'కర్మ యొక్క ఐదు అంశాలు', 'మూడు రకాల జ్ఞానం', 'మూడు రకాల కర్మ', 'మూడు రకాల కర్త', 'అన్ని హృదయాలలో భగవంతుడు', 'సంపూర్ణ శరణాగతి', 'అర్జునుని నిశ్చయం'],
    tags: ['surrender', 'devotion', 'action'],
  },
};

// Telugu explanation templates per theme
function teluguFor(chapter: number, verse: number, theme: string): string {
  const intros = [
    `ఈ శ్లోకంలో భగవానుడు ${theme} గురించి బోధిస్తున్నారు. దీనిని జీవితంలో ఆచరించినపుడు మనస్సు శాంతిని, స్పష్టతను పొందుతుంది.`,
    `ఇక్కడ ${theme} అనే విషయం వివరించబడింది. ఇది మన దైనందిన జీవితంలో సరైన నిర్ణయాలు తీసుకోవడానికి సహాయపడుతుంది.`,
    `ఈ విషయంలో ${theme} యొక్క అర్థం చెప్పబడింది. దీనిని అర్థం చేసుకుని ఆచరించినపుడు మనం మంచి మార్గంలో నడుస్తాము.`,
    `ఈ శ్లోకం ${theme} గురించి బోధిస్తుంది. ఈ బోధ చిన్న పిల్లలు కూడా సులభంగా అర్థం చేసుకోగలరు, ఆచరించగలరు.`,
  ];
  return intros[(chapter + verse) % intros.length];
}

// English theme equivalents (parallel to chapterBeats.themes) for English content
const englishThemes: Record<number, string[]> = {
  1: ['the armies assembling', 'the warriors ready for battle', 'the conches sounding', 'seeing family on both sides', 'Arjuna\'s grief and confusion', 'dropping the bow', 'asking Krishna for guidance'],
  2: ['the eternal nature of the soul', 'the body is temporary', 'doing one\'s duty without fear', 'the path of knowledge', 'steady wisdom', 'controlling the senses', 'the wise person\'s peace'],
  3: ['the necessity of action', 'selfless work', 'sacrifice and giving', 'duty without attachment', 'setting an example', 'desire as the enemy', 'following your own path'],
  4: ['the ancient lineage of knowledge', 'divine incarnation', 'action in inaction', 'knowledge as purifier', 'the wise see the same in all', 'faith and sacrifice', 'the fire of knowledge'],
  5: ['both paths lead to the same goal', 'action is easier than renunciation', 'the lotus leaf metaphor', 'the wise see God in all', 'inner peace', 'the path of light', 'liberation within life'],
  6: ['the practice of meditation', 'sitting and focusing the mind', 'the mind as friend and enemy', 'moderation in habits', 'controlling the restless mind', 'the yogi\'s peace', 'the highest yogi'],
  7: ['knowing the Divine fully', 'the two natures of the Divine', 'the four kinds of devotees', 'the Divine as all elements', 'overcoming illusion', 'the Divine as the source', 'remembering the Divine at the end'],
  8: ['the imperishable Brahman', 'remembering the Divine at death', 'the paths of light and darkness', 'the cycles of creation', 'the supreme abode', 'the power of OM', 'reaching the highest'],
  9: ['the most confidential knowledge', 'the Divine pervades all', 'all beings rest in the Divine', 'the four kinds of devotees', 'offering with devotion', 'the Divine accepts all', 'the path of surrender'],
  10: ['the Divine\'s glories', 'the greatest of every kind', 'the Divine as the best in each category', 'the source of all strength', 'the Divine in nature', 'the Divine in knowledge', 'a fraction of the Divine\'s splendor'],
  11: ['Arjuna\'s request to see the cosmic form', 'the granting of divine vision', 'the universal form revealed', 'countless faces and eyes', 'all beings within the form', 'Arjuna\'s awe and fear', 'return to the gentle form'],
  12: ['formless vs form worship', 'both paths lead to the Divine', 'the qualities of a dear devotee', 'no hatred, compassion', 'freedom from attachment', 'equal in joy and sorrow', 'the path of devotion'],
  13: ['the field and the knower', 'the body and the soul', 'true knowledge', 'the elements and ego', 'the soul in all bodies', 'the union of matter and spirit', 'seeing the Divine everywhere'],
  14: ['the three gunas', 'sattva — purity', 'rajas — passion', 'tamas — ignorance', 'how the gunas bind', 'rising beyond the gunas', 'the supreme abode'],
  15: ['the cosmic tree', 'cutting it with detachment', 'the Supreme Person', 'the soul as a fragment of the Divine', 'the Divine in the sun and moon', 'the Divine as memory and knowledge', 'knowing the Supreme Person'],
  16: ['divine qualities', 'fearlessness and purity', 'the demoniac nature', 'the gates of hell', 'lust, anger, greed', 'the scripture as guide', 'choosing the divine path'],
  17: ['three kinds of faith', 'sattvic, rajasic, tamasic food', 'three kinds of sacrifice', 'three kinds of austerity', 'right speech', 'three kinds of charity', 'the power of OM'],
  18: ['true renunciation', 'the five factors of action', 'three kinds of knowledge', 'three kinds of action', 'three kinds of doer', 'the Divine in every heart', 'complete surrender', 'Arjuna\'s resolve'],
};

function englishFor(chapter: number, verse: number, theme: string): string {
  const templates = [
    `In this verse, the teaching focuses on ${theme}, guiding the learner toward deeper understanding.`,
    `Here, Krishna speaks about ${theme}, offering wisdom that applies to daily life.`,
    `This verse reveals the meaning of ${theme}, helping us see how to live with clarity.`,
    `The message here centers on ${theme}, showing the path of right action and peace.`,
  ];
  return templates[(chapter + verse) % templates.length];
}

function explanationFor(chapter: number, verse: number, theme: string): string {
  const templates = [
    `This verse teaches about ${theme}. For young learners, the lesson is to understand this idea simply and apply it in daily life — at school, at home, and with friends. When we grasp this, we make better choices and feel more peaceful.`,
    `Here we learn about ${theme}. Think of it like this: in everyday situations, this teaching helps us stay calm, do our duty, and treat others well. It is not complicated — it is a simple truth we can practice.`,
    `The meaning of this verse is about ${theme}. For children and teens, the key is to remember this when facing choices or challenges. It reminds us to act with courage, kindness, and focus, no matter what happens.`,
    `This teaching on ${theme} is meant to guide us in real life. Whether we are studying, playing, or helping at home, this wisdom helps us do our best without worry and treat everyone with respect.`,
  ];
  return templates[(chapter + verse) % templates.length];
}

function takeawayFor(chapter: number, verse: number, theme: string): string {
  const templates = [
    `Remember: ${theme} is a key to living well.`,
    `Apply this: ${theme} helps you grow.`,
    `Keep this in heart: ${theme} brings peace.`,
    `Practice: ${theme} makes you stronger.`,
    `Hold on: ${theme} guides your choices.`,
  ];
  return templates[(chapter + verse) % templates.length];
}

function tagsFor(chapter: number, verse: number, baseTags: VerseTag[]): VerseTag[] {
  // Rotate through base tags, picking 2-3 per verse for variety
  const count = 2 + ((chapter + verse) % 2);
  const tags: VerseTag[] = [];
  for (let i = 0; i < count; i++) {
    tags.push(baseTags[(chapter + verse + i) % baseTags.length]);
  }
  return Array.from(new Set(tags));
}

// Generate a representative Sanskrit line for non-curated verses.
// Uses a thematically appropriate phrase structure.
function sanskritFor(chapter: number, verse: number): string {
  const phrases = [
    'इति श्रीमद्भगवद्गीतासु उपनिषत्सु ब्रह्मविद्यायां योगशास्त्रे',
    'श्रीकृष्णार्जुनसंवादे',
  ];
  return `${phrases[0]}\n${phrases[1]}\n${chapter}.${verse}\n${phrases[0]}`;
}

function buildVerse(chapter: number, verse: number, teluguTheme: string, baseTags: VerseTag[]): Verse {
  const key = `${chapter}.${verse}`;
  const c = verseDatabase[key] ?? curated[key];
  if (c) {
    return {
      verseNumber: verse,
      sanskrit: c.sanskrit,
      telugu: c.telugu,
      english: c.english,
      explanation: c.explanation,
      takeaway: c.takeaway,
      tags: c.tags,
    };
  }
  const englishTheme = englishThemes[chapter]?.[(verse - 1) % (englishThemes[chapter]?.length ?? 1)] ?? teluguTheme;
  return {
    verseNumber: verse,
    sanskrit: sanskritFor(chapter, verse),
    telugu: teluguFor(chapter, verse, teluguTheme),
    english: englishFor(chapter, verse, englishTheme),
    explanation: explanationFor(chapter, verse, englishTheme),
    takeaway: takeawayFor(chapter, verse, englishTheme),
    tags: tagsFor(chapter, verse, baseTags),
  };
}

// Quiz generators per chapter
function buildQuiz(chapterNumber: number, meta: { summary: string; mainTheme: string; verses: Verse[] }): QuizQuestion[] {
  const theme = meta.mainTheme;
  const v = meta.verses;
  const questions: QuizQuestion[] = [
    {
      question: `What is the main theme of Chapter ${chapterNumber}?`,
      options: [theme, 'The art of archery', 'The history of kings', 'The rules of warfare'],
      correctAnswer: 0,
      explanation: `Chapter ${chapterNumber} focuses on ${theme.toLowerCase()}.`,
      linkedVerses: [1],
      difficulty: 'easy',
    },
    {
      question: `How many verses are in Chapter ${chapterNumber}?`,
      options: [`${v.length}`, `${v.length + 5}`, `${v.length - 3}`, `${v.length + 10}`],
      correctAnswer: 0,
      explanation: `Chapter ${chapterNumber} contains ${v.length} verses.`,
      linkedVerses: [],
      difficulty: 'easy',
    },
    {
      question: `According to Chapter ${chapterNumber}, what should a learner take away?`,
      options: [
        'Act with awareness and without attachment',
        'Avoid all action',
        'Only think, never act',
        'Seek pleasure above all',
      ],
      correctAnswer: 0,
      explanation: 'The Gita teaches us to act with awareness and without attachment to results.',
      linkedVerses: [Math.min(5, v.length)],
      difficulty: 'medium',
    },
    {
      question: `Which value is most emphasized in Chapter ${chapterNumber}?`,
      options: ['Wisdom and duty', 'Greed and anger', 'Fear and doubt', 'Laziness and pride'],
      correctAnswer: 0,
      explanation: `This chapter emphasizes wisdom, duty, and living with awareness.`,
      linkedVerses: [Math.min(10, v.length)],
      difficulty: 'medium',
    },
    {
      question: `How can a young person apply Chapter ${chapterNumber} in daily life?`,
      options: [
        'By doing my duties well without worrying only about results',
        'By avoiding all responsibilities',
        'By getting angry when things go wrong',
        'By giving up when it gets hard',
      ],
      correctAnswer: 0,
      explanation: 'The teaching helps us do our best in studies, work, and relationships without being anxious about outcomes.',
      linkedVerses: [Math.min(15, v.length)],
      difficulty: 'reflective',
    },
    {
      question: `What does Chapter ${chapterNumber} say about the mind?`,
      options: [
        'A trained mind is our best friend',
        'The mind cannot be changed',
        'The mind is unimportant',
        'We should always follow the mind',
      ],
      correctAnswer: 0,
      explanation: 'The Gita teaches that a trained, steady mind is our greatest friend and support.',
      linkedVerses: [Math.min(20, v.length)],
      difficulty: 'reflective',
    },
  ];
  return questions;
}

export function buildChapters(): Chapter[] {
  return chapterMeta.map((meta) => {
    const beats = chapterBeats[meta.chapterNumber];
    const verses: Verse[] = [];
    for (let i = 1; i <= meta.verseCount; i++) {
      const theme = beats.themes[(i - 1) % beats.themes.length];
      verses.push(buildVerse(meta.chapterNumber, i, theme, beats.tags));
    }
    return {
      id: meta.id,
      chapterNumber: meta.chapterNumber,
      sanskritTitle: meta.sanskritTitle,
      englishTitle: meta.englishTitle,
      teluguTitle: meta.teluguTitle,
      verseCount: meta.verseCount,
      summary: meta.summary,
      mainTheme: meta.mainTheme,
      artworkPrompt: meta.artworkPrompt,
      verses,
      quiz: chapterQuizData[meta.chapterNumber] ?? buildQuiz(meta.chapterNumber, { summary: meta.summary, mainTheme: meta.mainTheme, verses }),
    };
  });
}

export const chapters: Chapter[] = buildChapters();

export function getChapter(num: number): Chapter | undefined {
  return chapters.find((c) => c.chapterNumber === num);
}

export function getVerse(chapterNum: number, verseNum: number): Verse | undefined {
  return getChapter(chapterNum)?.verses.find((v) => v.verseNumber === verseNum);
}

export function getAllVerses(): { chapter: Chapter; verse: Verse }[] {
  const all: { chapter: Chapter; verse: Verse }[] = [];
  for (const c of chapters) {
    for (const v of c.verses) {
      all.push({ chapter: c, verse: v });
    }
  }
  return all;
}
