// import {
//   createBrowserRouter,
//   RouterProvider,
//   Outlet,
//   createRoutesFromElements,
//   Route,
//   ScrollRestoration,
//   Navigate,
//   useParams,
//   useLocation,
// } from "react-router-dom";
// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
// import Home from "../src/Pages/Home/Home";
// import { ToastContainer } from "react-toastify";
// import About from "./Pages/About/About";
// import Contact from "./Pages/Contact/Contact";
// import Products from "./Pages/Products/Products";
// import Blogs from "./Pages/Blogs/Blogs";
// import ProductDetail from "./Pages/ProductDetail/ProductDetail";
// import BlogDetail from "./Pages/BlogDetail/BlogDetail";
// import Service from "./Pages/Service/Service";
// import AboveHeader from "./Components/AboveHeader/AboveHeader";
// import Brands from "./Pages/Brands/Brands";
// import { FloatingWhatsApp } from "react-floating-whatsapp";
// import { useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { I18nextProvider } from "react-i18next";
// import i18n from "./Components/i18n/i18n";
// import Thanks from "./Pages/Thanks/Thanks";
// import { avatar } from "./assets/images";
// import Qapi from "./Pages/Qapi/Qapi";

// const LanguageWrapper = ({ children }) => {
//   const { i18n } = useTranslation();
//   const { lang } = useParams();
//   const location = useLocation();

//   useEffect(() => {
//     const changeLanguage = async () => {
//       if (["az", "en", "ru"].includes(lang)) {
//         await i18n.changeLanguage(lang);
//       } else {
//         await i18n.changeLanguage("az");
//       }
//     };

//     changeLanguage();
//   }, [lang, location.pathname]); 

//   return children;
// };
// const Layout = () => {
//   return (
//     <div>
//       <ToastContainer position="top-right" autoClose={1000} theme="colored" />
//       <AboveHeader />
//       <Header />
//       <Outlet />
//       <Footer />
//     </div>
//   );
// };

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/" element={<Navigate to="/az" replace />} />

//       <Route
//         path="/:lang"
//         element={
//           <LanguageWrapper>
//             <Layout />
//           </LanguageWrapper>
//         }
//       >
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="partners" element={<Brands />} />
//         <Route path="services" element={<Service />} />
//         <Route path="blogs" element={<Blogs />} />
//         <Route path="blogs/:id" element={<BlogDetail />} />
//         <Route path="products" element={<Products />} />
//         <Route path="product-detail/:id" element={<ProductDetail />} />
//         <Route path="contact" element={<Contact />} />
//         <Route path="contact/thank-you" element={<Thanks />} />
//          <Route path="qapi" element={<Qapi/>} />
//       </Route>
//     </Route>
//   )
// );

// function App() {
//   return (
//     <div className="font-firstFont">
//       <I18nextProvider i18n={i18n}>
//         <RouterProvider router={router}>
//           <ScrollRestoration />
//         </RouterProvider>
//       </I18nextProvider>

//       <FloatingWhatsApp
//         phoneNumber="+994102655821"
//         accountName="Safety Guard"
//         chatMessage="Salam, sizə necə kömək edə bilərik?"
//         placeholder="Mesaj yazın..."
//         avatar={avatar}
//         messageDelay="1"
//       />
//     </div>
//   );
// }

// export default App;




import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
  Navigate,
  useParams,
  useLocation,
} from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "../src/Pages/Home/Home";
import { ToastContainer } from "react-toastify";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Products from "./Pages/Products/Products";
import Blogs from "./Pages/Blogs/Blogs";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";
import Service from "./Pages/Service/Service";
import AboveHeader from "./Components/AboveHeader/AboveHeader";
import Brands from "./Pages/Brands/Brands";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "./Components/i18n/i18n";
import Thanks from "./Pages/Thanks/Thanks";
import { avatar } from "./assets/images";
// import Qapi from "./Pages/Qapi/Qapi";

// 👉 Yeni əlavə etdiyimiz səhifə
import BestProductsPage from "./Pages/BestProductsPage/BestProductsPage";
import QapiMain from "./Components/home/QapiMain/QapiMain";

const LanguageWrapper = ({ children }) => {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const location = useLocation();

  useEffect(() => {
    const changeLanguage = async () => {
      if (["az", "en", "ru"].includes(lang)) {
        await i18n.changeLanguage(lang);
      } else {
        await i18n.changeLanguage("az");
      }
    };

    changeLanguage();
  }, [lang, location.pathname]);

  return children;
};

const Layout = () => {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={1000} theme="colored" />
      <AboveHeader />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Navigate to="/az" replace />} />

      <Route
        path="/:lang"
        element={
          <LanguageWrapper>
            <Layout />
          </LanguageWrapper>
        }
      >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="partners" element={<Brands />} />
        <Route path="services" element={<Service />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/:id" element={<BlogDetail />} />
        <Route path="products" element={<Products />} />
        <Route path="product-detail/:id" element={<ProductDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="contact/thank-you" element={<Thanks />} />
        {/* <Route path="qapi" element={<Qapi />} /> */}
         <Route path="qapilar" element={<QapiMain/>}/>
        <Route path="best-products" element={<BestProductsPage />} />



      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className="font-firstFont">
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router}>
          <ScrollRestoration />
        </RouterProvider>
      </I18nextProvider>

      <FloatingWhatsApp
        phoneNumber="+9940102390413"
        accountName="Safety Guard"
        chatMessage="Salam, sizə necə kömək edə bilərik?"
        placeholder="Mesaj yazın..."
        avatar={avatar}
        messageDelay="1"
      />
    </div>
  );
}

export default App;
// +994102655821