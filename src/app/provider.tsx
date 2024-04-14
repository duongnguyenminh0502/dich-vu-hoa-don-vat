"use client";
import AOS from "aos";
// import "aos/dist/aos.css";
import { PropsWithChildren, useEffect } from "react";

export default function Provider({ children }: PropsWithChildren) {
  useEffect(() => {
    const interval = setInterval(() => {
      const zalo = document.getElementById("zalo");
      if (!zalo) return;
      var zalo_acc = ["0358387379", "etrhwhndsfqk"];

      zalo.addEventListener("click", (event) => {
        event.preventDefault();
        const userAgent = navigator.userAgent.toLowerCase();
        console.log("???? ~ zalo.addEventListener ~ userAgent:", userAgent);
        const isIOS = /iphone|ipad|ipod/.test(userAgent);
        const isAndroid = /android/.test(userAgent);
        let redirectURL = null;
        if (isIOS) {
          redirectURL = "zalo://qr/p/" + zalo_acc[1];
          window.location.href = redirectURL;
        } else if (isAndroid) {
          redirectURL = "zalo://zaloapp.com/qr/p/" + zalo_acc[1];
          window.location.href = redirectURL;
        } else {
          redirectURL = "zalo://conversation?phone=" + zalo_acc[0];
          window.location.href = redirectURL;
        }
      });
      zalo.classList.remove("opacity-0");
      clearInterval(interval);
    }, 300);
  }, []);
  // if (typeof window !== "undefined") {
  //   AOS.init({
  //     duration: 1000,
  //     easing: "ease-in-out",
  //     once: true,
  //   });
  // }
  return children;
}
