import React from "react";
import s from "./InfoBlock.module.scss";
const InfoBlock = ({ defaultText }) => {
  return (
    <div className={s.alert}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.0001 0.03125C7.18665 0.03125 0.03125 7.18665 0.03125 16.0001C0.03125 24.8135 7.18665 31.9689 16.0001 31.9689C24.8135 31.9689 31.9689 24.8135 31.9689 16.0001C31.9689 7.18665 24.8135 0.03125 16.0001 0.03125ZM18.9318 16.8393C18.9318 15.2201 17.6193 13.9076 16.0002 13.9076H16.0001C15.2225 13.9076 14.4768 14.2165 13.927 14.7663C13.3772 15.3161 13.0683 16.0618 13.0683 16.8394V23.0809C13.0683 23.8585 13.3772 24.6042 13.927 25.154C14.4768 25.7038 15.2225 26.0127 16.0001 26.0127H16.0002C17.6193 26.0127 18.9318 24.7001 18.9318 23.081V16.8393ZM16.0001 5.98743C14.382 5.98743 13.0683 7.30111 13.0683 8.9192C13.0683 10.5373 14.382 11.851 16.0001 11.851C17.6182 11.851 18.9318 10.5373 18.9318 8.9192C18.9318 7.30111 17.6182 5.98743 16.0001 5.98743Z"
          fill="#FEB648"
        />
      </svg>
      <p className={s.alert_text}>{defaultText}</p>
    </div>
  );
};

export default InfoBlock;
