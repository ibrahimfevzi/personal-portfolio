import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  tr: {
    translation: {
      karanlik: "KARANLIK MOD",
      aydinlik: "AYDINLIK MOD",
      footerText: "Birlikte bir sonraki ürününüz üzerinde çalışalım.",
      navSkills: "Beceriler",
      navProjects: "Projeler",
      navContactMe: "İletişim",
      introTitle: "Yaratıcı düşünce minimalist yaklaşım",
      introText:
        "Merhaba, ben İbrahim. Full-stack web geliştiricisiyim. Harika kullanıcı deneyimleri ile sağlam ve ölçeklenebilir önyüz ürünleri üretecek bir Developer arıyorsanız, hadi  el sıkışalım.",
      navContact: "İletişim",
      skillsTitle: "Beceriler",
      profileTitle: "Profil",
      birthday: "Doğum Tarihi",
      residence: "Yaşadığı Yer",
      preferredRole: "Tercih Ettiği Rol",
      frontendDeveloper: "Ön Uç Geliştirici",
      education: "Eğitim Durumu",
      aboutMe: "Hakkımda",
      aboutMeText:
        "Full stack web geliştirici olarak,  kariyer ve eğitim geçmişimin yanı sıra  Workintech eğitim kurumunda aldığım eğitimle bilgi ve becerilerimi önemli ölçüde geliştirdim. 900 saatten fazla süren bu yoğun eğitim programı, beni endüstri standartlarına uygun bir şekilde donatarak gerçek dünya projelerinde tecrübe kazanmama olanak sağladı. Bu süre zarfında, birçok projede aktif olarak yer aldım ve kendimi sürekli olarak geliştirme fırsatı buldum. Yazılım geliştirmeye olan merakım ve tutkum, tamamen kullanıcı odaklı deneyimler yaratma hedefiyle birleşti. Detaylara olan dikkatim ve görsel estetiğe verdiğim önemle, sezgisel ve etkileyici web uygulamaları oluşturmayı hedefledim. Bu süre içinde JavaScript, React.js ve Node.js gibi teknolojilerde becerilerimi geliştirdim. Bu sayede dinamik ve etkileşimli web siteleri inşa etme yeteneğine sahip oldum. Sürekli olarak kendimi güncel tutmak ve endüstri trendleriyle adım adım ilerlemek için çaba sarf ettim. Yaratıcılık, teknik uzmanlık ve sürekli öğrenme tutkum, kalıcı etkiler bırakan yüksek kaliteli çözümler sunma konusundaki taahhüdümü destekler. Aynı vizyona sahip profesyonellerle işbirliği yapmaktan heyecan duyuyorum ve her zaman yeni zorluklarla karşılaşmayı sabırsızlıkla bekliyorum.",
      javascriptText:
        "JavaScript, dinamik ve etkileşimli web geliştirmeyi sağlayan çok yönlü ve güçlü bir programlama dilidir. Ben bir frontend geliştirici olarak, JavaScript'in tam potansiyelini kullanarak etkileyici ve duyarlı kullanıcı arayüzleri oluşturma konusunda uzmanım. Değişkenler, fonksiyonlar ve nesneler gibi JavaScript'in temel kavramlarını derinlemesine anlayarak, Belgeler Nesne Modeli'ni (DOM) sorunsuz bir şekilde manipüle edebilir ve kullanıcı deneyimini geliştirmek için karmaşık mantığı uygulayabilirim. JavaScript çerçevelerini ve kütüphanelerini kullanarak, ölçeklenebilir ve çapraz platformlu uygulamaları verimli bir şekilde geliştirebilir ve fikirleri web üzerinde hayata geçirebilirim.",
      reactText:
        "React.js, kullanıcı arayüzleri oluşturmak için popüler bir JavaScript kütüphanesidir ve ben yeteneklerimi geliştirerek sağlam ve verimli bir şekilde frontend uygulamaları oluşturmak için React.js'in yeteneklerini kullanmayı öğrendim. React.js ile karmaşık kullanıcı arayüzü bileşenlerini yeniden kullanılabilir ve modüler bir kod haline getirebilir, bu sayede sürdürülebilirlik ve ölçeklenebilirlik sağlanır. React'in sanal DOM özelliğini kullanarak gereksiz yeniden-render işlemlerini en aza indirerek performansı optimize edebilir ve uygulamaların genel tepkisini artırabilirim. React.js ile olan deneyimim, dinamik, etkileşimli ve görsel açıdan çekici kullanıcı arayüzleri oluşturmama olanak sağlar ve olağanüstü bir kullanıcı deneyimi sunar.",
      nodeJsText:
        "Node.js, sunucu tarafında JavaScript geliştirmeye olanak sağlayan güçlü bir çalışma ortamıdır. Bir frontend geliştirici olarak, Node.js konusundaki yetkinliğim, hem tam yığın uygulamalar oluşturmamı hem de web projelerinin performansını optimize etmemi sağlar. Node.js ile sorunsuz bir şekilde asenkron görevleri yönetebilir, RESTful API'ler geliştirebilir ve çeşitli veritabanlarını entegre edebilirim. Bu, ölçeklenebilir, gerçek zamanlı ve veri odaklı uygulamalar oluşturmamı sağlar. Node.js paketleri ve çerçevelerinin geniş ekosistemini kullanarak, özellik açısından zengin web uygulamaları geliştirebilir, sunucu ve istemci arasındaki iletişimi sorunsuz hale getirerek kullanıcılara kesintisiz deneyimler sunabilirim.",
      projectsTitle: "Projeler",
      viewSite: "Siteye Git",
      pizzaTitle: "Pizza Sipariş",
      moviesTitle: "Film Arama",
      journalTitle: "Minnet Günlüğü",
      shoppingTitle: "Alışveriş Sepeti",
      calculatorTitle: "Hesap Makinesi",
      friendsTitle: "Arkadaşlar",
      pizzaText:
        " React kullanılarak geliştirilen bu etkileşimli web sayfası, Axios, Router, Cypress ve Yup gibi temel araçları başarıyla kullanma becerimi gösteriyor. İşlevselliği ve estetiği sorunsuz bir şekilde birleştiren pizza sipariş sayfası, müşterilerin sadece birkaç tıklama ile pizzalarını özelleştirebilecekleri ve sipariş verebilecekleri keyifli bir kullanıcı deneyimi sunuyor. Şık tasarımı ve akıcı gezinmesiyle bu proje, etkileyici ve duyarlı arayüzler oluşturma konusundaki uzmanlığımı göstermektedir.",
      moviesText:
        "Redux Film Projesi, React ve React Router ile oluşturulmuş şık ve sezgisel bir uygulama. Geniş bir film koleksiyonunu keşfedin, favorilerinizi ekleyin ve ayrıntılı film bilgilerini görüntüleyin. Verimli durum yönetimi için Redux kullanılarak geliştirilen bu proje, sorunsuz ve hızlı bir kullanıcı deneyimi sunuyor. Film dünyasına dalın ve keyifli bir gezinti deneyimi yaşayın.",
      journalText:
        "Minnet Günlüğü projesi, React ve React Router ile geliştirilmiş olan bu güzel tasarımlı web uygulaması, minnettarlık notlarını kolayca oluşturmanızı ve yönetmenizi sağlar. Kullanıcı dostu arayüzü ile pozitif bir bakış açısı geliştirmenize olanak tanır.",
      shoppingText:
        "Alışveriş Sepeti Uygulaması, React ve React Router ile geliştirilen dinamik bir web uygulaması. Ürünlere göz atın ve sepete ekleyerek sorunsuz bir alışveriş deneyimi yaşayın.",
      calculatorText:
        "Hesap Makinesi uygulaması, React'in useReducer hook'u kullanılarak oluşturulan bir hesap makinesi uygulamasıdır. Kolaylıkla aritmetik işlemler yapabilir, değerleri hafızada saklayabilir ve toplam sonucu takip edebilirsiniz. Uygulama, bir reducer ve action'lar kullanarak durumu yönetir ve hesaplamaları gerçekleştirir. Sayılar, hafıza işlemleri ve temel aritmetik işlevler için düğmeler içeren kullanıcı dostu bir arayüze sahiptir. Toplam görüntüsü mevcut sonucu takip ederken, işlem ve hafıza bölümleri ek bilgiler sağlar.",
      friendsText:
        "React ve React Router ile oluşturulan sosyal ağ uygulamasıdır. Arkadaşlarınızla iletişimde kalın ve arkadaş listenizi kolaylıkla yönetin. Uygulama, kullanıcıların kimlik doğrulama yapabileceği bir giriş işlevselliği sunar. Başarılı bir girişten sonra kullanıcılar arkadaş listelerini görüntüleyebilir, yeni arkadaşlar ekleyebilir ve her arkadaş hakkında detaylı bilgilere erişebilir. Uygulama, giriş token'ını yerel depolama kullanarak saklayarak, oturumlar arasında sorunsuz bir deneyim sağlar.",
    },
  },

  en: {
    translation: {
      karanlik: "DARK MODE",
      aydinlik: "LIGHT MODE",
      footerText: "Let’s work together on your next product.",
      navSkills: "Skills",
      navProjects: "Projects",
      navContactMe: "Contact!",
      introTitle: "Creative thinker  Minimalism lover",
      introText:
        "Hi, I’m İbrahim. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me.",
      navContact: "Contact",
      profileTitle: "Profile",
      birthday: "Birthday",
      residence: "Residence",
      preferredRole: "Preferred Role",
      frontendDeveloper: "Frontend Developer",
      education: "Education",
      skillsTitle: "Skills",
      aboutMe: "About Me",
      aboutMeText:
        "As a full-stack web developer, I have significantly enhanced my knowledge and skills through my career and educational background, along with the training I received at Workintech educational institution. This intensive training program, spanning over 900 hours, has equipped me with industry-standard practices and provided me with the opportunity to gain experience working on real-world projects. Throughout this period, I actively participated in numerous projects and constantly sought opportunities for self-improvement. My passion and curiosity for software development converged with the goal of creating user-centric experiences. With attention to detail and a focus on visual aesthetics, I aimed to build intuitive and impactful web applications. During this time, I honed my skills in technologies such as JavaScript, React.js, and Node.js, enabling me to construct dynamic and interactive websites. I made continuous efforts to stay up-to-date and progress alongside industry trends. My commitment to delivering high-quality solutions that leave a lasting impact is supported by my creativity, technical expertise, and constant thirst for learning. I am excited to collaborate with like-minded professionals and eagerly look forward to encountering new challenges.",
      javascriptText:
        "JavaScript is a versatile and powerful programming language that enables dynamic and interactive web development. As a frontend developer, my expertise lies in harnessing the full potential of JavaScript to create engaging and responsive user interfaces. With a deep understanding of JavaScript's core concepts, such as variables, functions, and objects, I can seamlessly manipulate the Document Object Model (DOM) and implement complex logic to enhance the user experience. Leveraging JavaScript frameworks and libraries, I can efficiently develop scalable and cross-platform applications that bring ideas to life on the web.",
      reactText:
        "React.js is a popular JavaScript library for building user interfaces, and I have honed my skills in leveraging its capabilities to create robust and efficient frontend applications. With React.js, I can efficiently break down complex UI components into reusable and modular code, ensuring maintainability and scalability. By utilizing React's virtual DOM, I can optimize performance by minimizing unnecessary re-rendering and enhancing the overall responsiveness of applications. My experience in working with React.js enables me to create dynamic, interactive, and visually appealing user interfaces that provide an exceptional user experience.",
      nodeJsText:
        "Node.js is a powerful runtime environment that allows for server-side JavaScript development. As a frontend developer, my proficiency in Node.js empowers me to build full-stack applications and optimize the performance of web projects. With Node.js, I can seamlessly handle asynchronous tasks, develop RESTful APIs, and integrate various databases. This enables me to build scalable, real-time, and data-driven applications. Leveraging the vast ecosystem of Node.js packages and frameworks, I can efficiently develop feature-rich web applications, ensuring smooth communication between the server and client, and providing users with seamless experiences.",
      projectsTitle: "Projects",
      viewSite: "View Site",
      pizzaTitle: "Pizza Order",
      moviesTitle: "Movies App",
      journalTitle: "Gratitude Journal",
      shoppingTitle: "Shopping Cart",
      calculatorTitle: "Calculator",
      friendsTitle: "Friends Database",
      pizzaText:
        "Introducing my pizza ordering page, a captivating project showcased in my frontend developer portfolio. Developed using React, this interactive webpage demonstrates my proficiency in utilizing essential tools such as Axios, Router, Cypress, and Yup. Seamlessly blending functionality and aesthetics, the pizza ordering page offers a delightful user experience, allowing customers to effortlessly customize their pizza selections and place orders with just a few clicks. With its sleek design and smooth navigation, this project exemplifies my expertise in creating engaging and responsive interfaces.",
      moviesText:
        "Introducing my Redux Movie Project, a sleek and intuitive application built with React and React Router. Explore a vast movie collection, add favorites, and view detailed movie information. With Redux for efficient state management, this project delivers a seamless and responsive user experience. Immerse yourself in the world of movies and enjoy a delightful browsing experience.",
      journalText:
        "Introducing my Gratitude Journal project, a beautifully designed web application developed with React and React Router. Easily create and manage gratitude notes, fostering a positive mindset. Experience the power of gratitude with this user-friendly app.",
      shoppingText:
        "Introducing my E-commerce App project, a dynamic web application built with React and React Router. Browse products and add to cart for a seamless shopping experience.",
      calculatorText:
        "Introducing my Reducer Challenge project, a calculator app built using React's useReducer hook. Perform arithmetic operations, store values in memory, and track the total result with ease. The app utilizes a reducer and actions to manage state and perform calculations. It features a user-friendly interface with buttons for numbers, memory operations, and basic arithmetic functions. The total display keeps track of the current result, and the operation and memory sections provide additional information.",
      friendsText:
        "A social networking application built with React and React Router. Stay connected with your friends and manage your friend list effortlessly. The app features a login functionality where users can authenticate and access their friend list. Upon successful login, users can view their friends, add new friends, and view detailed information about each friend. The app utilizes local storage to store the login token, ensuring a seamless experience across sessions.",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
