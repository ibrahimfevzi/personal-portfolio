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
      aboutMe: "Hakkımda",
      aboutMeText:
        "Ben tutkulu ve özverili bir frontend geliştiriciyim ve olağanüstü kullanıcı deneyimleri yaratma konusunda büyük bir sevgiye sahibim. Detaylara dikkat eden bir gözle ve kullanıcı odaklı tasarım prensiplerine derin bir anlayışla, görsel açıdan etkileyici ve sezgisel web uygulamaları oluşturmak için çaba gösteriyorum. Web geliştirme yolculuğum, kodlamaya duyduğum merak ve fikirleri dijital tuvalde hayata geçirme isteğiyle başladı. Yıllar içinde JavaScript, React.js ve Node.js konularında becerilerimi geliştirdim, bu da dinamik ve etkileşimli web siteleri inşa etmemi sağladı ve kullanıcıları etkilemeyi başardı. Sürekli olarak bilgimi genişletmeye ve en son endüstri trendleriyle güncel kalmaya çalışan biri olarak, her zaman yeni zorluklarla uğraşmaktan ve aynı vizyona sahip profesyonellerle işbirliği yapmaktan heyecan duyarım. Yaratıcılık, teknik uzmanlık ve sürekli öğrenmeye olan tutkunun bir karışımıyla, kalıcı bir etki bırakan yüksek kaliteli çözümler sunma konusunda taahhütte bulunuyorum.",
      javascriptText:
        "JavaScript, dinamik ve etkileşimli web geliştirmeyi sağlayan çok yönlü ve güçlü bir programlama dilidir. Ben bir frontend geliştirici olarak, JavaScript'in tam potansiyelini kullanarak etkileyici ve duyarlı kullanıcı arayüzleri oluşturma konusunda uzmanım. Değişkenler, fonksiyonlar ve nesneler gibi JavaScript'in temel kavramlarını derinlemesine anlayarak, Belgeler Nesne Modeli'ni (DOM) sorunsuz bir şekilde manipüle edebilir ve kullanıcı deneyimini geliştirmek için karmaşık mantığı uygulayabilirim. JavaScript çerçevelerini ve kütüphanelerini kullanarak, ölçeklenebilir ve çapraz platformlu uygulamaları verimli bir şekilde geliştirebilir ve fikirleri web üzerinde hayata geçirebilirim.",
      reactText:
        "React.js, kullanıcı arayüzleri oluşturmak için popüler bir JavaScript kütüphanesidir ve ben yeteneklerimi geliştirerek sağlam ve verimli bir şekilde frontend uygulamaları oluşturmak için React.js'in yeteneklerini kullanmayı öğrendim. React.js ile karmaşık kullanıcı arayüzü bileşenlerini yeniden kullanılabilir ve modüler bir kod haline getirebilir, bu sayede sürdürülebilirlik ve ölçeklenebilirlik sağlanır. React'in sanal DOM özelliğini kullanarak gereksiz yeniden-render işlemlerini en aza indirerek performansı optimize edebilir ve uygulamaların genel tepkisini artırabilirim. React.js ile olan deneyimim, dinamik, etkileşimli ve görsel açıdan çekici kullanıcı arayüzleri oluşturmama olanak sağlar ve olağanüstü bir kullanıcı deneyimi sunar.",
      nodeJsText:
        "Node.js, sunucu tarafında JavaScript geliştirmeye olanak sağlayan güçlü bir çalışma ortamıdır. Bir frontend geliştirici olarak, Node.js konusundaki yetkinliğim, hem tam yığın uygulamalar oluşturmamı hem de web projelerinin performansını optimize etmemi sağlar. Node.js ile sorunsuz bir şekilde asenkron görevleri yönetebilir, RESTful API'ler geliştirebilir ve çeşitli veritabanlarını entegre edebilirim. Bu, ölçeklenebilir, gerçek zamanlı ve veri odaklı uygulamalar oluşturmamı sağlar. Node.js paketleri ve çerçevelerinin geniş ekosistemini kullanarak, özellik açısından zengin web uygulamaları geliştirebilir, sunucu ve istemci arasındaki iletişimi sorunsuz hale getirerek kullanıcılara kesintisiz deneyimler sunabilirim.",
      projectsTitle: "Projeler",
      viewSite: "Siteye Git",
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
      skillsTitle: "Skills",
      aboutMe: "About Me",
      aboutMeText:
        "I am a passionate and dedicated frontend developer with a strong love for crafting exceptional user experiences. With a keen eye for detail and a deep understanding of user-centric design principles, I strive to create visually stunning and intuitive web applications. My journey in web development began with a curiosity for coding and a desire to bring ideas to life on the digital canvas. Over the years, I have honed my skills in JavaScript, React.js, and Node.js, allowing me to build dynamic and interactive websites that engage and captivate users. Constantly seeking to expand my knowledge and stay up-to-date with the latest industry trends, I am always excited to tackle new challenges and collaborate with like-minded professionals. With a blend of creativity, technical expertise, and a passion for continuous learning, I am committed to delivering high-quality solutions that leave a lasting impression.",
      javascriptText:
        "JavaScript is a versatile and powerful programming language that enables dynamic and interactive web development. As a frontend developer, my expertise lies in harnessing the full potential of JavaScript to create engaging and responsive user interfaces. With a deep understanding of JavaScript's core concepts, such as variables, functions, and objects, I can seamlessly manipulate the Document Object Model (DOM) and implement complex logic to enhance the user experience. Leveraging JavaScript frameworks and libraries, I can efficiently develop scalable and cross-platform applications that bring ideas to life on the web.",
      reactText:
        "React.js is a popular JavaScript library for building user interfaces, and I have honed my skills in leveraging its capabilities to create robust and efficient frontend applications. With React.js, I can efficiently break down complex UI components into reusable and modular code, ensuring maintainability and scalability. By utilizing React's virtual DOM, I can optimize performance by minimizing unnecessary re-rendering and enhancing the overall responsiveness of applications. My experience in working with React.js enables me to create dynamic, interactive, and visually appealing user interfaces that provide an exceptional user experience.",
      nodeJsText:
        "Node.js is a powerful runtime environment that allows for server-side JavaScript development. As a frontend developer, my proficiency in Node.js empowers me to build full-stack applications and optimize the performance of web projects. With Node.js, I can seamlessly handle asynchronous tasks, develop RESTful APIs, and integrate various databases. This enables me to build scalable, real-time, and data-driven applications. Leveraging the vast ecosystem of Node.js packages and frameworks, I can efficiently develop feature-rich web applications, ensuring smooth communication between the server and client, and providing users with seamless experiences.",
      projectsTitle: "Projects",
      viewSite: "View Site",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
});

export default i18n;
