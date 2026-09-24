import React from "react";

export interface TeamMember {
  slug: string;
  name: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  bio: React.ReactNode;
  imageWrapperClass?: string
}

export const teamMembersData: Record<string, TeamMember> = {
  "rajnickant-patel": {
    slug: "rajnickant-patel",
    name: "Rajnickant Patel",
    title: "Founder & Chairman",
    imageSrc: "/assets/rajnikant.png",
    imageAlt: "Rajnickant Patel",
    imageWrapperClass: "flex md:justify-end h-[90vh] md:h-[100vh]",
    bio: (
      <>
        <p>
          Mr. Rajnickant Patel is a distinguished leader in the financial services sector with an illustrious career spanning more than 4 decades. A visionary and strategist, he has held esteemed positions including MD & CEO of the Bombay Stock Exchange (BSE) and the Indian Commodity Exchange (ICEX).
        </p>
        <p>
          Among his landmark achievements is leading the corporatization of BSE, transforming it into a globally recognized institution with billion-dollar valuations. His profound experience includes roles at the Reserve Bank of India, MNC banks, nationalized banks, capital markets, commodity markets, and corporate strategy.
        </p>
        <p>
          Mr. Patel’s governance acumen extends to advising corporate boards and enterprises, where he promotes ethics, innovation, and visionary leadership.
        </p>
        <p>
          Internationally, he has represented India as Chairman of the South Asian Federation of Exchanges (SAFE), Director of the World Federation of Exchanges (WFE), and keynote speaker on global platforms.
        </p>
        <p>
          His accolades include Business Super Brand “Brand Guardian of BSE,” the Indira Super Achiever Award, Distinguished Fellow of the Institute of Directors (London), and the IT People Award for Innovation.
        </p>
        <p>
          With a legacy rooted in excellence, innovation, and strategic foresight, he continues to inspire transformation across industries.
        </p>
      </>
    ),
  },
  "viresh-patel": {
    slug: "viresh-patel",
    name: "Viresh Patel",
    title: "Founder & CEO",
    imageSrc: "/assets/viresh.png",
    imageAlt: "Viresh Patel",
    bio: (
      <>
        <p>
          A dynamic, versatile & result-oriented growth-preneur with 28+ years of experience spanning diverse domains across IT & IT Enabled service, BFSI, IT Education, Online Assessments, and US Healthcare. Known for his insight and hands-on leadership in cross-functional roles, Viresh has navigated complex challenges and led mission-critical projects to deliver desired outcomes while establishing and nurturing strong client relationships in India, US, Europe and Middle East.
        </p>
        <p>
          With a successful career of over two and half decades, Viresh has demonstrated finesse in client relationships and partnering with large corporates, universities, PSUs, regulators, and government bodies while spearheading large projects and strategic initiatives enabling businesses to achieve growth with operational excellence and customer delight.
        </p>
        <p>
          In one of his earlier roles, Viresh served as Vice President at National Stock Exchange (NSE) Group Co. for over 14+ years. Prior to that he has worked with NIIT Ltd., Infovision Software, ISMART GLOBAL. He is a Gold Medalist in Systems Management & Software Engineering with Post Graduation in Marketing Management and Leadership Excellence from IIM Calcutta. He has won several awards including NIIT Chairman Excellence Award and NSEIT CEO Special Recognition award among others.
        </p>
        <p>
          As the driving force behind Intellidea, Viresh combines his cross-functional experience across diverse domain knowledge with a passion for mentoring teams and empowering clients to create an ecosystem that helps them transform their big ideas into tangible outcomes, overcome challenges, unlock growth opportunities, and thrive.
        </p>
      </>
    ),
  },
  "jyoti-patel": {
    slug: "jyoti-patel",
    name: "Jyoti Patel",
    title: "Founder & Director",
    imageSrc: "/assets/jyoti_mam_update.png",
    imageAlt: "Jyoti Patel",
    bio: (
      <>
        <p>
          Ms. Jyoti Patel is a passionate educator with over 25 years of experience in diverse roles across various educational institutions across various boards. She is deeply committed to fostering holistic development in education, blending academic excellence with value-based learning for better living providing effective counselling to nurture confidence, resilience, and self-reliance.
        </p>
        <p>
          Her zeal for social impact programs has driven her to champion the cause of girl child education and enhancing learning ability. Ms. Jyoti has inspired thousands of students through her dedication, and ability to infuse compassion to make a profound difference.
        </p>
        <p>
          Through her initiatives, she continues to work towards uplifting women in competitive landscapes especially women in entrepreneurial roles, equipping them with essential business & life skills.
        </p>
      </>
    ),
  },
  "dr-rb-barman": {
    slug: "dr-rb-barman",
    name: "Dr. R. B. Barman",
    title: "Advisor",
    imageSrc: "/assets/4.png",
    imageAlt: "Dr. R. B. Barman",
    bio: (
      <>
        <p>
          Dr. R. B. Barman, former Executive Director of the Reserve Bank of India, is a highly esteemed expert in statistics, applied economics, and payment systems. With a distinguished career spanning decades, he has played a pivotal role in shaping India’s financial and payments infrastructure.
        </p>
        <p>
          He was instrumental in the development of the Reserve Bank’s Data Warehouse for Business Intelligence and in driving key digital payment systems including RTGS, NEFT, and NECS. He also played a foundational role in the establishment of the National Payments Corporation of India (NPCI) as a not-for-profit organization.
        </p>
        <p>
          As Adviser to NPCI since 2009, Dr. Barman continues to guide the organization on technology matters, supporting its emergence as a global leader in retail payments, including the development and widespread adoption of the Unified Payments Interface (UPI).
        </p>
        <p>
          Dr. Barman also served as Chairman of the National Statistical Commission (Ex-officio Minister of State, Government of India) from 2016–18, where he set a strong direction for modernizing India’s statistical systems through digital transformation.
        </p>
        <p>
          His leadership roles include serving as President of The Indian Econometric Society and Vice-Chairman of the Irving Fisher Committee on Central Bank Statistics at the Bank for International Settlements (BIS).
        </p>
        <p>
          Dr. Barman is the recipient of the prestigious National Award in Official Statistics – 2021, instituted by the Government of India in memory of Prof. P. C. Mahalanobis.
        </p>
      </>
    ),
  },
  "sanjay-ubale": {
    slug: "sanjay-ubale",
    name: "Sanjay Ubale",
    title: "Advisor",
    imageSrc: "/assets/sanjay_ubale.png",
    imageAlt: "Sanjay Ubale",
    bio: (
      <>
        <p>
          Sanjay Ubale, a distinguished IAS officer and seasoned leader with over 31 years of experience, has held several prestigious positions across governance, infrastructure, and philanthropy. He has served as the Director of Partnerships at the Bill and Melinda Gates Foundation's India Country Office, and as the Managing Director &amp; CEO of Tata Realty and Infrastructure Limited, a Tata Sons subsidiary.
        </p>
        <p>
          In his illustrious career, Mr. Ubale has contributed significantly to Mumbai's development as Secretary for Mumbai Development and Secretary to the Chief Minister. He also led major initiatives as Joint Secretary for Administrative Reforms and Project Director for World Bank and DfID-assisted projects.
        </p>
        <p>
          An alumnus of Mumbai University, Jamnalal Bajaj Institute of Management, and the University of Bath, U.K., he has also completed the Advanced Management Program at Harvard Business School. His expertise spans governance, infrastructure, water and sanitation, rural and urban development, and community-based initiatives.
        </p>
      </>
    ),
  },
  "dr-shashi-bhushan-singh": {
    slug: "dr-shashi-bhushan-singh",
    name: "Dr. Shashi Bhushan Singh",
    title: "Scientist, R & D",
    imageSrc: "/assets/SB.jpg",
    imageAlt: "Dr. Shashi Bhushan Singh",
    bio: (
      <>
        <p>
          Dr. Shashi Bhushan Singh is a distinguished expert with a blend of technical, academic, and administrative competence in materials, manufacturing, and management, with over 4 decades of experience, including director roles at DRDO (Defence R&D Organisation).
        </p>
        <p>
          As an Outstanding Scientist & former Director of the Naval Materials Research Laboratory (NMRL), Institute of Technology Management (ITM), and Principal Associate Director at the Vehicle Research & Development Establishment (VRDE), DRDO, he has spearheaded critical R&D projects in defence technology, materials science, and manufacturing innovation.
        </p>
        <p>
          He has played a pivotal role in technology development, project management, strategic planning, and leadership training for DRDO and the Indian Armed Forces. His expertise includes metallurgy, foundry technology, rapid prototyping, process optimisation, and product development, with multiple patents and publications to his credit.
        </p>
        <p>
          Dr. Singh has supported advanced initiatives in AI Products, rapid prototyping, and the manufacturing of drone technologies and defence-grade systems.
        </p>
        <p>
          Notable achievements include leadership coaching, team building, and mentoring over 100 scientists and technical officers across mission-critical DRDO projects. He has collaborated with multiple ministries and defence bodies on futuristic strategic initiatives, contributing to India’s technological leadership.
        </p>
        <p>
          He is the author of the book <strong>“Applied Thermodynamics”</strong> and holds the prestigious degree of <strong>D.Sc (Doctor of Science in Management)</strong>. An alumnus of IIT Kharagpur, he earned his M.Tech and Ph.D. in Metallurgical Engineering, along with an International Executive Diploma in Project Management.
        </p>
        <p>
          After superannuation from DRDO, he has served as an Emeritus Professor, consultant, and advisor in advanced research fields, and has received several honours including the DRDO Technology Awards and Lifetime Achievement Awards.
        </p>
      </>
    ),
  },
  "ca-hiten-shah": {
    slug: "ca-hiten-shah",
    name: "CA Hiten Shah",
    title: "Associate – Finance & Risk Management",
    imageSrc: "/assets/hiten_shah.png",
    imageAlt: "CA Hiten Shah",
    imageWrapperClass: "flex md:justify-end h-[90vh] md:h-[100vh]",
    bio: (
      <>
        <p>
          CA Hiten Shah is a seasoned finance professional with over 37 years of extensive experience, specializing in Family Business Advisory and guiding both listed and unlisted companies through IPOs and FPOs, with deep expertise particularly in IPO strategy and execution.
        </p>
        <p>
          He serves as an Independent Director on the boards of several NSE and BSE-listed companies, contributing his expertise in governance, finance, and risk management.
        </p>
        <p>
          A respected thought leader in audit and accounts, he has authored insightful articles for the <i>Sales Tax Review</i>, published by The Goods and Service Tax Practitioners’ Association of Maharashtra.
        </p>
        <p>
          He holds certifications from the Indian School of Business (ISB) and ICAI, along with specialized credentials in Internal Audit from the Bombay Chartered Accountants’ Society, and IFRS, Valuation, and Forensic Audit & Fraud Detection from ICAI.
        </p>
        <p>
          As a faculty member for Accounts & Audit at NACEN (now NACIN), he has trained senior leadership across financial and regulatory institutions. He has also delivered expert sessions at the WIRC of ICAI, The Goods and Service Tax Practitioners’ Association of Maharashtra, and multiple chambers of tax consultants.
        </p>
      </>
    ),
  },
  "dr-ca-chaitanya-shah": {
    slug: "dr-ca-chaitanya-shah",
    name: "Dr. CA Chaitanya Shah",
    title: "Associate – Financial Modelling for SMEs",
    imageSrc: "/assets/chaitanya_shah.png",
    imageAlt: "Dr. CA Chaitanya Shah",
    imageWrapperClass: "flex md:justify-end h-[90vh] md:h-[100vh]",
    bio: (
      <>
        <p>
          Dr. CA Chaitanya Shah is a seasoned financial strategist, author, mentor, and speaker with over{' '}
          <strong>20+ years of corporate leadership</strong> and <strong>25+ years of advisory experience</strong> guiding SMEs toward structured growth.
        </p>
        <p>
          He specialises in <strong>financial governance, strategic planning, business transformation, and professionalising SMEs</strong> for scalable and sustainable expansion. His work includes optimising financial architecture, implementing MIS-driven performance systems, and helping leadership teams build long-term profitability strategies.
        </p>
        <p>
          Dr. Shah actively collaborates with institutions such as <strong>NMIMS, SP Jain, Welingkar, and Woxsen</strong>, contributing as a thought leader in financial planning, SME governance, and growth strategy. He has also mentored entrepreneurs through programmes supported by the <strong>Asian Development Bank (ADB)</strong> and <strong>BCCI</strong>.
        </p>
        <p>
          He is the author of the impactful book <strong>"What Indian SMEs Need"</strong>, published by IMC, addressing the foundational challenges and transformational opportunities for small and medium enterprises.
        </p>
        <p>He is also accomplished in academic fields with degrees including:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li><strong>Ph.D. in SME Financial Governance</strong></li>
          <li><strong>Chartered Accountant (ICAI)</strong></li>
          <li><strong>Cost & Works Accountant (ICWAI)</strong></li>
          <li><strong>Master in Financial Management (JBIMS)</strong></li>
        </ul>
      </>
    ),
  },
  "dr-leena-pimpley": {
    slug: "dr-leena-pimpley",
    name: "Dr. Leena Pimpley",
    title: "Associate – Education Leader, Quality Assessor & Advisor",
    imageSrc: "/assets/Dr.LeenaPimpley.png",
    imageAlt: "Dr. Leena Pimpley",
    imageWrapperClass: "flex md:justify-end h-[90vh] md:h-[100vh]",
    bio: (
      <>
        <p>
          Dr. Leena Pimpley brings over <strong>35 years of experience</strong> in education, with deep expertise in{' '}
          <strong>Competency-based Learning, school accreditation, educator development, and leadership mentoring</strong>. 
          She is a Board of Studies Member for the Integrated B.Ed. Curriculum at SNDT University and a nationally empanelled 
          School Quality Assessor with <strong>QCI–NABET</strong>, having conducted more than <strong>200+ school assessments</strong> across India.
        </p>
        <p>
          She mentors school leaders at Ashoka Group of Schools and Amulakh Amichand International School, and leads research in{' '}
          <strong>AI-driven learning tools</strong> and <strong>competency-based assessment frameworks</strong>. Her work continues to influence 
          modern schooling practices and quality assurance systems nationwide.
        </p>
        <p>
          A Cambridge-certified Programme Leader for Professional Development Qualifications and a British Council School Ambassador, 
          she has played a foundational role in establishing IB and Cambridge curriculum schools such as:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Podar World School</li>
          <li>SVKM’s J. V. Parekh International School</li>
          <li>S. M. Shetty International School</li>
        </ul>
        <p>
          She has led major quality transformation initiatives for Aga Khan Education Service, Zee Learn Ltd., and the 
          Gujarat Government’s <strong>Gunotsav 2.0</strong>, guiding institutions on implementing Education Quality Management Systems.
        </p>
        <p>
          Dr. Pimpley holds a <strong>Ph.D. in History (University of Mumbai)</strong> and a{' '}
          <strong>PG Diploma in Education Management (NMIMS)</strong>. She has presented research at IIT Delhi, IIT Madras, 
          and the Indian History Congress.
        </p>
        <p>
          She has also developed NEP 2020–aligned curricula and continues to train educators on{' '}
          <strong>accreditation, competency-based education, school leadership, and quality frameworks</strong>.
        </p>
      </>
    ),
  },    
  "ketan-shah": {
    slug: "ketan-shah",
    name: "Ketan Shah",
    title: "Associate – Cybersecurity Governance, Compliance & ISO Specialist",
    imageSrc: "/assets/ketan_shah2.png",
    imageAlt: "Ketan Shah",
    bio: (
      <>
        <p>
          With over <strong>24 years of experience</strong>, including <strong>18 years</strong> dedicated to designing and executing 
          cybersecurity and management systems, Ketan Shah is a seasoned expert in <strong>information security, business continuity, privacy, and service management</strong>.
          His work spans commercial enterprises, public sector entities, and global organisations.
        </p>
        <p>
          He holds a <strong>Master’s degree in Commerce</strong> and is currently pursuing an <strong>LL.B.</strong> His industry-recognized certifications include 
          <strong>CISA, CDPSE, CIPM, COBIT 2019, CEH</strong>, and multiple ISO Lead Auditor credentials.
        </p>
        <p>
          Over the years, Ketan has led cybersecurity initiatives for <strong>digital service providers, financial institutions, telecom companies, 
          academic bodies, and oil exploration firms</strong> across India, the Middle East, and Saudi Arabia. His expertise includes 
          <strong>risk evaluation, compliance frameworks, business continuity systems, and information security governance</strong>.
        </p>
        <p>
          As an empanelled auditor with reputed certification bodies, he supports audits and delivers accredited Lead Auditor training for:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>ISO 27001 – Information Security Management</li>
          <li>ISO 9001 – Quality Management</li>
          <li>ISO 20000 – IT Service Management</li>
          <li>ISO 22301 – Business Continuity</li>
          <li>ISO 42001 – AI Management Systems</li>
          <li>ISO 27701 – Privacy Information Management</li>
        </ul>
        <p>
          He also designs <strong>customised training programs</strong> to help organisations build robust and effective management systems aligned with global best practices.
        </p>
        <p>
          In his previous role at <strong>Network Intelligence (India) Pvt. Ltd.</strong>, Ketan served as Senior Security Consultant and UAE Manager, 
          leading both <strong>security consulting and business development</strong>.
        </p>
        <p>
          His cross-industry experience spans <strong>oil & gas, BFSI, telecom, IT/ITES, BPO/KPO, and engineering</strong>, supporting organisations in:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>ISMS & BCMS implementation</li>
          <li>Internal audits & certification readiness</li>
          <li>Risk assessments & compliance planning</li>
          <li>Security control deployment & governance frameworks</li>
        </ul>
        <p>
          Ketan continues to help organisations strengthen their security posture, streamline compliance, and build resilient systems that 
          meet global standards and evolving cyber risks.
        </p>
      </>
    ),
  },
  "dr-nisarg-pathak": {
    slug: "dr-nisarg-pathak",
    name: "Dr. Nisarg Pathak",
    title: "Associate – Software Product Strategy & Innovation",
    imageSrc: "/assets/Dr. Nisarg.png",
    imageAlt: "Dr. Nisarg Pathak",
    bio: (
      <>
        <p>
          Dr. Nisarg Pathak is a seasoned professional specialising in <strong>technical product engineering, product portfolio management, and strategic growth initiatives</strong>, with experience spanning both corporate and academic environments. With advanced qualifications in <strong>Computer Science (PhD)</strong> and <strong>Business Administration (MBA)</strong>, he has successfully led cross-functional teams across the full product lifecycle.
        </p>
        <p>
          He has built and delivered <strong>6+ successful technology products</strong>, demonstrating a strong capability to transform complex technical concepts into practical, high-impact solutions.
        </p>
        <p>Dr. Pathak holds multiple professional certifications including:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>AWS Cloud Certifications</li>
          <li>Certified Kubernetes Administrator (CKA)</li>
          <li>Blockchain (Hyperledger) Certifications</li>
          <li>DevOps & Agile Methodologies</li>
        </ul>
        <p>
          He is actively engaged in education and capability development, delivering seminars and workshops on <strong>AWS Cloud</strong> across universities and institutions. His academic contributions extend to serving as an <strong>Adjunct Professor at IIM Jammu</strong> and <strong>Gujarat University</strong>, where he helps shape the next generation of technology leaders.
        </p>
        <p>
          Dr. Pathak has authored <strong>four ISBN-certified textbooks</strong> and contributed research-based articles focused on sustainable growth in SaaS product management and data-driven decision-making.
        </p>
        <p>
          Driven by a passion for innovation, he continually leverages emerging technologies to enhance product development, solve complex challenges, and accelerate sustainable business growth.
        </p>
      </>
    ),
  },
  "mauli-shah": {
    slug: "mauli-shah",
    name: "Mauli Shah",
    title: "Associate – IT & Cybersecurity Expert",
    imageSrc: "/assets/mauli_shah.png",
    imageAlt: "Mauli Shah",
    bio: (
      <>
        <p>
          Mauli Shah is a dynamic and results-driven <strong>IT & Cybersecurity expert</strong> with over a decade of specialised experience.
          With a strong foundation in <strong>Artificial Intelligence</strong> and a deep passion for emerging technologies, she brings a
          strategic and analytical approach to identifying, analysing, and mitigating cybersecurity threats across industries.
        </p>
        <p>
          She holds multiple industry-recognised credentials including <strong>CISA, CEH, and ISO 27001 Lead Auditor</strong>, equipping her
          to deliver robust, compliant, and scalable cybersecurity frameworks. Her expertise spans <strong>security audits, vulnerability
          assessments, risk evaluation, incident response planning, and enterprise-wide security training programs</strong>.
        </p>
        <p>
          Through her hands-on experience, Mauli excels at transforming complex technical insights into <strong>clear, actionable strategies</strong>
          that empower organisations to build resilient, future-ready cybersecurity postures.
        </p>
        <p>
          At <strong>Intellidea</strong>, Mauli plays a pivotal role in <strong>training, advising, and handholding businesses</strong> as they strengthen 
          their digital infrastructure, enhance compliance readiness, and cultivate a culture of cybersecurity excellence.
        </p>
        <p>
          Her mission is to help organisations stay ahead of evolving threats through a combination of strategic foresight,
          technical expertise, and continuous innovation.
        </p>
      </>
    ),
  },
  "parikshit-patel": {
    slug: "parikshit-patel",
    name: "Parikshit Patel",
    title: "Associate – Technical Solution Architect & Software Delivery",
    imageSrc: "/assets/Parikshit_patel.png",
    imageAlt: "Parikshit Patel",
    bio: (
      <>
        <p>
          Parikshit is a distinguished technologist with over <strong>15 years</strong> of experience delivering innovative IT services and
          software solutions across industries. He brings a pragmatic, product-minded approach to solution architecture and delivery.
        </p>
        <p>
          Parikshit holds a <strong>Bachelor of Engineering</strong> and an <strong>Executive MBA (IIM Indore)</strong>. His professional journey
          includes impactful roles at firms such as <strong>CSC, Nomura, Hexaware</strong>, and <strong>Waste Management</strong>, where he advanced
          from Senior Software Engineer to technical leadership roles.
        </p>
        <p>Under his leadership, service offerings have expanded to include:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Web & mobile application development</li>
          <li>Application maintenance & custom app development</li>
          <li>IT staff augmentation & IT strategy consulting</li>
          <li>HubSpot solutions, product engineering, and AI/ML services</li>
        </ul>
        <p>
          Parikshit's technical credentials include <strong>Sun Certified Web Component Developer (EE5)</strong>,
          <strong>Sun Certified Java Programmer (5.0)</strong>, and <strong>Oracle PL/SQL Developer Certified Associate</strong>.
          These certifications, combined with practical delivery experience, validate his competence in building resilient enterprise systems.
        </p>
        <p>
          Focused on delivering cutting-edge, maintainable solutions, Parikshit continues to drive innovation and operational excellence
          in software delivery and solution architecture at Intellidea.
        </p>
      </>
    ),
  },
  "prashant-dhume": {
    slug: "prashant-dhume",
    name: "Prashant Dhume",
    title: "Associate – Enterprise Risk Management",
    imageSrc: "/assets/PD ID.png",
    imageAlt: "Prashant Dhume",
    bio: (
      <>
        <p>
          Prashant Dhume is a distinguished technology executive and certified Independent Director with 
          <strong> 30+ years of global experience</strong> spanning <strong>enterprise risk management, cybersecurity, delivery excellence, 
          and large-scale technology-led transformations</strong>.
        </p>
        <p>Across his <strong>two-decade leadership journey at Accenture</strong>, Prashant held pivotal senior roles including:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Technology Risk Management Lead</li>
          <li>Global Director of Delivery</li>
          <li>Solution Architecting Lead</li>
        </ul>
        <p>
          He successfully steered global teams of <strong>12,000+ professionals</strong> and played a key role in driving innovation, 
          operational excellence, and business growth across the <strong>Energy, Utilities, and Chemicals (EUC)</strong> sectors.
        </p>
        <p>Currently serving in advisory and board-level capacities, Prashant focuses on:</p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Cybersecurity</li>
          <li>Enterprise Risk Management (ERM)</li>
          <li>Learning & Leadership Development</li>
          <li>Sustainability</li>
        </ul>
        <p>
          He is a <strong>Certified Independent Director</strong> (Indian Institute of Corporate Affairs) and has strengthened his governance 
          expertise through advanced executive certifications, including:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Executive Certificate in Corporate Governance for Directors & CXOs</li>
          <li>Grade A+ in the Independent Directors’ Exam (Skill India & NSDC)</li>
          <li>Microsoft Certified – Azure Fundamentals</li>
        </ul>
        <p>
          A respected <strong>thought leader, published author, and multidisciplinary faculty</strong>, Prashant is also a member of the 
          <strong> Harvard Business Review Advisory Council</strong>. His work continues to influence executive teams and boards, helping 
          organisations build <strong>resilient, future-ready governance and risk frameworks</strong>.
        </p>
      </>
    ),
  },
  "dr-mahendra-gupta": {
    slug: "dr-mahendra-gupta",
    name: "Dr. Mahendra Gupta",
    title: "Associate – Software Delivery & Technical Process",
    imageSrc: "/assets/Dr.mahendra.png",
    imageAlt: "Dr. Mahendra Gupta",
    bio: (
      <>
        <p>
          Dr. Mahendra Gupta is an accomplished expert in <strong>Human Capital Management</strong>, specialising in 
          <strong> HR Management Systems, Psychometric Assessments, Talent Acquisition Solutions, Employee Engagement, Gamification, and Placement Readiness</strong>.
          Beginning his career in <strong>Software Development</strong>, he has gained extensive experience across 
          <strong> Process, Quality Assurance, Project Management, Audits, Information Security, Agile, ITIL, and Service Management</strong>.
        </p>
        <p>
          His expertise extends across <strong>AI, Machine Learning, Cloud Portals, Mobile Apps, Payroll Systems, Performance Appraisals, and Gamified Learning Solutions</strong>. 
          Known for creating technology-led features that improve decision-making and organisational performance, he continues to bridge people processes with innovation.
        </p>
        <p>
          Despite his strong technology background, Dr. Mahendra remains deeply passionate about 
          <strong> classroom training, mentoring, counselling, and consulting</strong>, enabling employees and leaders across global organisations to overcome challenges through customised solutions.
        </p>
        <p>
          He holds a <strong>Doctorate in Management</strong>, an <strong>MBA in Systems</strong>, and prominent certifications including:
        </p>
        <ul className="list-disc ml-5 space-y-1">
          <li>Project Management Professional (PMP)</li>
          <li>Certified Scrum Master (CSM)</li>
          <li>Lead Auditor for ISO 9001</li>
          <li>Additional certifications in Quality, Process, and Service Management</li>
        </ul>
        <p>
          Dr. Mahendra has worked with <strong>Fortune 500 organisations</strong>, gaining deep insights into global operational complexities. 
          He is widely recognised for driving innovation, identifying opportunities for transformation, and reshaping organisational paradigms.
        </p>
        <p>
          Over the course of his career, he has impacted more than <strong>250,000 learners and professionals</strong> through teaching, 
          training, assessments, counselling, and talent mentoring.
        </p>
        <p>
          At <strong>Intellidea</strong>, Dr. Mahendra is instrumental in designing and delivering digital solutions that elevate 
          <strong> University and Educational Institution processes</strong>, as well as strengthening <strong>corporate HR ecosystems</strong> through technology and process excellence.
        </p>
      </>
    ),
  },
  "richard-george": {
    slug: "richard-george",
    name: "Richard George",
    title: "Creative Head",
    imageSrc: "/assets/Richard.png",
    imageAlt: "Richard George",
    bio: (
      <>
        <p>
          A seasoned visionary with an illustrious career spanning over <strong>30 years</strong>, Richard brings unparalleled expertise 
          in <strong>creative strategy, storytelling, and brand communication</strong>. His rich and out-of-the-box thinking has shaped 
          impactful creative journeys across diverse industries and continents.
        </p>
        <p>
          With a deep understanding of <strong>global audiences, cultural sensitivities, and multi-market dynamics</strong>, he has successfully 
          engaged with stakeholders across various states and countries — consistently delivering narratives that resonate and inspire.
        </p>
        <p>
          Richard blends <strong>artistic ingenuity with strategic clarity</strong>, leading transformative campaigns, brand systems, 
          and visual experiences that create measurable impact.
        </p>
        <p>
          An expert in <strong>cross-cultural communication, global outreach, and adaptive strategy</strong>, he excels at translating complex 
          ideas into compelling visual and verbal expressions that engage audiences of all backgrounds.
        </p>
        <p>
          Committed to excellence and innovation, Richard champions <strong>design thinking</strong> as a catalyst for business transformation — 
          crafting solutions that are creative, relevant, and future-ready.
        </p>
      </>
    ),
  },
  "shekhar-agarwal": {
    slug: "shekhar-agarwal",
    name: "Shekhar Agarwal",
    title: "Compliance & Statutory Auditor",
    imageSrc: "/assets/SA ID.png",
    imageAlt: "Shekhar Agarwal",
    bio: (
      <>
        <p>
          Shekhar Agarwal is a distinguished <strong>Fellow Member of the Institute of Chartered Accountants of India (ICAI)</strong> with deep expertise in statutory compliance and audit.
        </p>
        <p>
          With over <strong>12 years of extensive experience</strong> focused on <strong>income tax</strong> matters and <strong>internal audit management</strong>, Shekhar delivers pragmatic, compliant, and value-driven solutions to organisations across sectors.
        </p>
        <p>
          His work spans <strong>tax planning, advisory services, audit management</strong>, and strengthening control environments. He combines technical tax knowledge with a disciplined audit approach to help clients meet regulatory obligations while optimising financial outcomes.
        </p>
        <p>
          Known for his dedication to ethical practice and operational excellence, Shekhar partners with businesses to enhance governance, reduce risk, and drive sustainable growth.
        </p>
      </>
    ),
  },
  "amee-sedani": {
    slug: "amee-sedani",
    name: "Amee Sedani",
    title: "HR Business Lead",
    imageSrc: "/assets/Amee.png",
    imageAlt: "Amee Sedani",
    bio: (
      <>
        <p>
          Amee Sedani is a dedicated and passionate HR professional with nearly a decade of rich experience in the dynamic field of Human Resources. 
          She is committed to designing and delivering <strong>tailored HR solutions</strong> that strengthen organisational capability, foster collaboration, 
          and drive sustainable growth.
        </p>
        <p>
          Her expertise spans <strong>HR operations, talent management, employee relations, stakeholder engagement, policy development, 
          and organisational culture building</strong>. Amee excels at aligning people strategies with business objectives, ensuring seamless execution and measurable outcomes.
        </p>
        <p>
          Known for her empathetic leadership and structured problem-solving approach, she plays a pivotal role in strengthening HR systems, 
          supporting employee success, and enabling organisations to build empowered, performance-driven teams.
        </p>
      </>
    ),
  },
  "raajesh-chalke": {
    slug: "raajesh-chalke",
    name: "Raajesh Chalke",
    title: "Capital Structuring | Governance | IPO Readiness",
    imageSrc: "/assets/raajesh chalke.jpg",
    imageAlt: "Raajesh Chalke",
    bio: (
      <>
        <p>
          Raajesh Chalke is a seasoned financial leader with ~30 years of experience driving strategic growth, governance excellence, and IPO readiness for NYSE, BSE, and NSE-listed entities.
        </p>
        <p>
          He specializes in financial modelling, high-impact M&A, and cross-border acquisitions, consistently enhancing enterprise valuation and shareholder value.
        </p>
        <p>
          As a trusted advisor to boards and investors, he brings deep expertise in corporate governance, treasury management, and capital structuring. Raajesh combines strategic foresight with regulatory rigor to help organizations scale sustainably and succeed in public markets.
        </p>
      </>
    ),
  },
  "abraham-paul-vatakencherry": {
    slug: "abraham-paul-vatakencherry",
    name: "Abraham Paul Vatakencherry",
    title: "Associate - Global Advisory",
    imageSrc: "/assets/ab.png",
    imageAlt: "Abraham Paul Vatakencherry",
    bio: (
      <>
        <p>
          He is a dynamic global influencer known for building impactful international partnerships that drive sustainable growth. He combines sharp insight with exceptional communication and relationship-building skills to create high-value collaborations across global markets.
        </p>
        <p>
          Thriving in fast-paced environments, he leverages creativity, negotiation expertise, and global business acumen to unlock new opportunities. Abraham brings foresight and agility to help organizations scale and succeed in an evolving global landscape.
        </p>
      </>
    ),
  },
};