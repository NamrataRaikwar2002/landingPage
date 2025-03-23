import React, { useState } from "react";
import "./landingpage.css";
import { IoIosClose } from "react-icons/io";
import chat from "../../assets/chat.png";

const Landingpage = () => {
  const [showBanner, setShowbanner] = useState(true);

  return (
    <div className="landingView">
      {showBanner && (
        <div className="toastBg">
          <p className="toastText">
            slack is your digita HQ. Meet the features keeking teams connnected
            in a work-from-andywhere world. let's go -
          </p>
          <IoIosClose
            color={"#F7F5F5"}
            cursor={"pointer"}
            onClick={() => setShowbanner(false)}
          />
        </div>
      )}
      <div className="centerPart">
        <div className="centerleft">
          <h2>Slack is where the future works</h2>
          <p className="transformText">
            Transform the way you work with one place for everyone and
            everything you need to get stuff done.
          </p>
          <div className="btns">
            <a href="https://chromium.slack.com/signup#/domain-signup" target="_blank">
            <button className="btn primaryBtn">TRY FOR FREE</button>
            </a>
            <a target="_blank" href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fmyaccount.google.com%2Fintro%2Fsecurity&hl=en-US&ifkv=AXH0vVtkvQMqUlbgjLUtQnX0-OLT6e7hCOsCI3Ir4BS_NZC2Jstklm2jHWxBedcn9Bu9j8jiURZdSw&service=accountsettings&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S973852093%3A1742717208918736">
              <button className="btn googlebtn">SIGN UP WITH GOOGLE</button>
            </a>
          </div>
        </div>
        <div>
          <img src={chat} className="transformImage" />
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
