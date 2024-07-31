

const data = [
  {
    name: "generalHealthAdvice",
    keywords: ["advice", "help"],
    response:
      "For general health advice, it's always best to consult with a healthcare professional. Can you specify your concern a bit more?",
  },
  {
    name: "appointmentBooking",
    keywords: ["appointment", "book"],
    response:
      "I can help you book an appointment. Would you like to specify a department (e.g., gynecology, dermatology) or a particular doctor?",
  },
  {
    name: "symptomCheck",
    keywords: ["symptom", "feel", "pain"],
    response:
      "I understand you're feeling unwell. While I can provide some basic information, please consult a doctor for a thorough examination. Can you describe your symptoms more specifically?",
  },
  {
    name: "Greetings",
    keywords: [
      "hello",
      "hi",
      "how are you",
      "what's up",
      "hola",
      "hey",
      "are you there",
      "listen",
      "good morning",
      "good evening",
      "good night",
    ],
    response: "Hello! How can I assist you Today?",
  },
  {
    name: "Menstruation",
    keywords: ["peroids", "cramps", "contractions"],
    response:
      "Menstruation is the monthly shedding of the uterine lining in women of reproductive age, typically occurring every 21 to 35 days.",
  },
  {
    name: "Menstrual cramps",
    keywords: ["cramps", "pain in lower abdomen", "lower back pain"],
    response: "Pain relievers, heat therapy, exercise, yoga",
  },
  {
    name: "Breast tenderness",
    keywords: ["Breast tenderness", "discomfort in breast"],
    response: "Sensitivity and discomfort in the breasts, use Supportive bras, gentle massage",
  },
  {
    name: "Mood swings",
    keywords: ["mood swings"],
    response: "Emotional fluctuations during the menstrual cycle, Self-care, stress management, eat sweets, satisfy your craving",
  },
  {
    name: "Bloating",
    keywords: ["Feeling of fullness and swelling in the abdomen", "discomfort in breast"],
    response: "Sensitivity and discomfort in the breasts, use Supportive bras, gentle massage",
  },
  {
    name: "Fatigue",
    keywords: ["Fatigueness", "Fatigue"],
    response: "Increased tiredness and low energy levels, Adequate rest, balanced diet",
  },
  {
    name: "Heavy bleeding (Menorrhagia)",
    keywords: ["heavy bleeding", "inconsistent bleeding"],
    response: "Excessive menstrual blood flow lasting longer than 7 days, Medical evaluation, hormonal therapy",
  },
  {
    name: "Irregular periods",
    keywords: ["Irregular periods"],
    response: "Menstrual cycles that vary in length or timing, Tracking cycles, lifestyle adjustments such as regular exercise",
  },
  {
    name: "Premenstrual Syndrome (PMS)",
    keywords: ["Premenstrual Syndrome (PMS)"],
    response: "Physical and emotional symptoms before menstruation, Healthy lifestyle, stress reduction",
  },
  {
    name: "Menstrual migraines",
    keywords: ["Menstrual migraines"],
    response: "Headaches that occur before or during menstruation, Medication, lifestyle changes",
  },
  {
    name: "Menopause",
    keywords: ["Menopause"],
    response:
      "Menopause marks the end of a woman's reproductive years and is characterized by the cessation of menstruation for 12 consecutive months.",
  },
  {
    name: "Mental Health",
    keywords: ["Mental health"],
    response:
      "Mental health in women refers to the emotional, psychological, and social well-being of females, encompassing how they think, feel, and act., Menopause occurs due to the natural decline in reproductive hormones, particularly estrogen, as women age.",
  },
  {
    name: "Pregnancy",
    keywords: ["pregnancy", "pregnant"],
    response:
      "Pregnancy is the period during which a fertilized egg develops into a fetus in a woman's uterus, typically lasting around 40 weeks, Pregnancy occurs when a sperm fertilizes an egg, leading to the formation of a zygote that implants in the uterine lining.",
  },
  {
    name: "pads",
    keywords: ["pads","pad brands","sanitary pads","pad"],
    response:
      "Pads are rectangles of absorbent material that attach to the inside of a girl's underwear and catch menstrual blood. They're sometimes also called sanitary pads or sanitary napkins. Some pads have extra material on the sides. brands: whisper,soffy,stayfree,always,carefree are  some well known brands for pads, how to use pads: \n 1. Stick the pad in your underwear using the sticky strip on the back. Some reusable pads are held in place with snaps or the elastic in your underwear. \n2.Change your pad every few hours, or when it's soaked with blood.\n 3.Wrap used pads in the wrapper or toilet paper and throw them in the trash. ",
  },
  {
    name: "how to use pads",
    keywords: ["how to use pad"],
    response:
      "this is how you use pads ",
  },
  {
    name:"ovulation",
    keywords:["ovulation","ovulate","ovulatory"],
    response:"Ovulation is the process in which a mature egg is released from the ovary. After it's released, the egg moves down the fallopian tube and stays there for 12 to 24 hours, where it can be fertilized."
  },
  {
    name:"white water",
    keywords:["white water","white discharge","ovulatory","Cervical mucus"],
    response:"Vaginal discharge is a clear, white or off-white fluid that comes out of your vagina. Your uterus, cervix and vagina produce vaginal discharge, which is mainly made up of cells and bacteria. It helps clean and lubricate your vagina, and helps fight off bad bacteria and infection."
  },
  
  
  
];