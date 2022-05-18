import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { gsap } from "gsap";
import { baseUrl } from "../config";

const Header = () => {
  const router = useRouter();

  const [settingData, setSettingData] = useState({});
  const [open, setOpen] = useState(false);
  const [hoverdMenu, setHoverdMenu] = useState(1);
  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      title: "Home",
      link: "/",
      image: "../images/menu/house.png",
    },
    {
      id: 2,
      title: "About Us",
      link: "/about",
      image: "../images/menu/about.png",
    },
    {
      id: 3,
      title: "Schedule",
      link: "/schedule",
      image: "../images/menu/master.png",
    },
    {
      id: 4,
      title: "FAQ",
      link: "/faq",
      image: "../images/menu/faqs.png",
    },
    {
      id: 5,
      title: "Contact Us",
      link: "/contact",
      image: "../images/menu/contact.png",
    },
    {
      id: 6,
      title: "Our Gallery",
      link: "/gallery",
      image: "../images/menu/gallery.png",
    },
    {
      id: 7,
      title: "Compare House",
      link: "/compare",
      image: "../images/menu/house.png",
    },
  ]);

  const headerOpenClose = () => {
    if (open) {
      setTimeout(() => {
        setOpen(!open);
      }, 900);
    } else {
      setOpen(!open);
    }
    gsap.from(".headerOpenAnimation", {
      opacity: 1,
    });
    gsap.to(".headerOpenAnimation", {
      opacity: 0,
      duration: 0.8,
    });
  };

  const menuHover = (id) => {
    setHoverdMenu(id);
  };

  useEffect(() => {
    if (open && hoverdMenu) {
      gsap.from(".menu_img", {
        x: -10,
      });
      gsap.to(".menu_img", {
        x: 0,
        duration: 1.5,
      });
    }
  }, [gsap, hoverdMenu, open]);

  useEffect(() => {
    if (open) {
      document.querySelector("body").style.overflowY = "hidden";
      gsap.from(".headerOpenAnimation", {
        opacity: 0,
      });
      gsap.to(".headerOpenAnimation", {
        opacity: 1,
        duration: 0.8,
      });
    } else {
      document.querySelector("body").style.overflowY = "auto";
      gsap.from(".headerOpenAnimation", {
        opacity: 1,
      });
      gsap.to(".headerOpenAnimation", {
        opacity: 0,
        duration: 0.8,
      });
    }
  }, [gsap, open]);

  useEffect(() => {
    fetch(`${baseUrl}/setting`)
      .then((res) => res.json())
      .then((res) => {
        setSettingData(res[0]);
      });
  }, []);

  const renderHtmlContent = () => {
    if (isMobile) {
      if (router.pathname == "/") {
        return (
          <div className="imagewrapper">
            <Link href="/">
              <a>
                <img src={settingData.logo} alt="" />
              </a>
            </Link>
          </div>
        );
      }
      return (
        <div className="buttonwrapper header-back-button">
          <Link href="/">
            <a>
              <img src="../images/icons/undo.svg" alt="" className="mr-2" />
            </a>
          </Link>
        </div>
      );
    } else {
      return (
        <div className="imagewrapper">
          <Link href="/">
            <a>
              <img src={settingData.logo} alt="" />
            </a>
          </Link>
        </div>
      );
    }
  };

  return (
    <>
      <header className="header mob-header py-3">
        <section className="main-header">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 d-flex justify-content-between align-items-center">
                <div className="logoarea">{renderHtmlContent()}</div>
                <div className="menuarea">
                  <ul className="d-flex align-items-center ">
                    <li className="buttonwrapper textwrapper mr-3">
                      <Link href="/masterplan">
                        <a className="btn btn_underlined btn_schedule tcp mob-headerschedule">
                          Master Plan
                        </a>
                      </Link>
                    </li>
                    <li className="buttonwrapper">
                      <div
                        className="btn mob-icon"
                        onClick={() => headerOpenClose()}
                      >
                        <img src="../images/icons/menu-icon.svg" alt="" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <div className="headerOpenAnimation bg-white">
        {open && (
          <section className="megamenu py-3">
            <div className="container">
              <div className="row">
                <div className="col-sm-12 d-flex justify-content-between align-items-center">
                  <div className="logoarea">
                    <div
                      className="imagewrapper"
                      onClick={() => headerOpenClose()}
                    >
                      <Link href="/">
                        <a>
                          <img src={settingData.logo} alt="" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="menuarea mob-cross">
                    <ul className="d-flex align-items-center ">
                      <li className="buttonwrapper">
                        {open ? (
                          <div
                            className="btn"
                            onClick={() => headerOpenClose()}
                          >
                            <img src="../images/icons/close.svg" alt="" />
                          </div>
                        ) : (
                          <div className="btn">
                            <img src="../images/icons/menu-icon.svg" alt="" />
                          </div>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="row pt-5 mt-5">
                <div className="col-sm-2"></div>
                <div className="col-sm-4 pr-5 imagewrapper">
                  {menuItems && (
                    <div>
                      {menuItems.map((menu) => (
                        <div key={menu.id}>
                          {menu.id === hoverdMenu && (
                            <img
                              src={menu.image}
                              alt=""
                              className="img-fluid menu_img"
                            />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="col-sm-4 pl-5">
                  <div className="menuwrapper">
                    {menuItems && (
                      <ul>
                        {menuItems.map((menu) => (
                          <li key={menu.id} onClick={() => headerOpenClose()}>
                            <Link href={menu.link}>
                              <a>
                                <div
                                  className={
                                    menu.id === hoverdMenu
                                      ? "link activelink"
                                      : "link"
                                  }
                                  onMouseEnter={() => menuHover(menu.id)}
                                >
                                  {menu.title}
                                </div>
                              </a>
                            </Link>
                          </li>
                        ))}
                        <li>
                          <ul className="socialLinks">
                            {!!settingData.facebook_url && (
                              <li>
                                <Link href={settingData.facebook_url}>
                                  <a>
                                    <div className="imagewrapper">
                                      <img
                                        src="../images/icons/facebook.svg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </Link>
                              </li>
                            )}
                            {!!settingData.instagram_url && (
                              <li>
                                <Link href={settingData.instagram_url}>
                                  <a>
                                    <div className="imagewrapper">
                                      <img
                                        src="../images/icons/instagram.svg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </Link>
                              </li>
                            )}
                            {!!settingData.twitter_url && (
                              <li>
                                <Link href={settingData.twitter_url}>
                                  <a>
                                    <div className="imagewrapper">
                                      <img
                                        src="../images/icons/twitter.svg"
                                        alt=""
                                      />
                                    </div>
                                  </a>
                                </Link>
                              </li>
                            )}
                            <li>
                              <Link href="#">
                                <a>
                                  <div className="imagewrapper">
                                    <img
                                      src="../images/icons/youtube.svg"
                                      alt=""
                                    />
                                  </div>
                                </a>
                              </Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
                <div className="col-sm-2"></div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Header;
