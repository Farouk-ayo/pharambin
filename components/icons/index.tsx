import React from "react";
import { SVGAttributes } from "react";

type ReactSVGProps = SVGAttributes<SVGSVGElement>;

export const XIcon = ({
  stroke,

  ...props
}: ReactSVGProps & { stroke?: string }) => {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 11 11"
      stroke={stroke || "currentColor"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.0249171 0.259766L3.97846 5.90771L0 10.4998H0.895463L4.37868 6.47926L7.19292 10.4998H10.24L6.06392 4.53419L9.76709 0.259766H8.87163L5.66388 3.96245L3.072 0.259766H0.0249171ZM1.34173 0.964428H2.74155L8.92301 9.7951H7.5232L1.34173 0.964428Z"
        fill="white"
      />
    </svg>
  );
};

export const WhatsappIcon = ({
  stroke,
  ...props
}: ReactSVGProps & { stroke?: string }) => {
  return (
    <svg
      width="13"
      height="14"
      stroke={stroke || "currentColor"}
      viewBox="0 0 13 14"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.58855 8.64015C9.45997 8.57586 8.62418 8.19012 8.4956 8.12583C8.36702 8.06153 8.23844 8.06153 8.10986 8.19012C7.98128 8.3187 7.72411 8.70444 7.59553 8.83302C7.53124 8.96161 7.40266 8.96161 7.27408 8.89732C6.82404 8.70444 6.37401 8.44728 5.98826 8.12583C5.66681 7.80437 5.34535 7.41863 5.08819 7.03288C5.0239 6.9043 5.08819 6.77572 5.15248 6.71143C5.21677 6.64714 5.28106 6.51855 5.40964 6.45426C5.47394 6.38997 5.53823 6.26139 5.53823 6.1971C5.60252 6.13281 5.60252 6.00423 5.53823 5.93994C5.47394 5.87565 5.15248 5.10416 5.0239 4.7827C4.95961 4.33267 4.83103 4.33267 4.70245 4.33267H4.38099C4.25241 4.33267 4.05954 4.46125 3.99525 4.52554C3.6095 4.91128 3.41663 5.36132 3.41663 5.87565C3.48092 6.45426 3.67379 7.03288 4.05954 7.54721C4.76674 8.57586 5.66681 9.41164 6.75975 9.92597C7.08121 10.0546 7.33837 10.1831 7.65982 10.2474C7.98128 10.376 8.30273 10.376 8.68848 10.3117C9.13851 10.2474 9.52426 9.92597 9.78142 9.54022C9.91 9.28306 9.91 9.0259 9.84571 8.76873L9.58855 8.64015ZM11.1958 2.78969C8.68848 0.282344 4.63815 0.282344 2.13081 2.78969C0.0735057 4.84699 -0.312239 7.99724 1.10216 10.5046L0.202087 13.7834L3.6095 12.8833C4.57386 13.3977 5.60252 13.6548 6.63117 13.6548C10.1672 13.6548 12.996 10.826 12.996 7.29004C13.0603 5.61848 12.3531 4.01121 11.1958 2.78969ZM9.45997 11.7904C8.62418 12.3047 7.65982 12.6262 6.63117 12.6262C5.66681 12.6262 4.76674 12.369 3.93096 11.919L3.73808 11.7904L1.74507 12.3047L2.25939 10.376L2.13081 10.1831C0.587832 7.6115 1.35932 4.39696 3.86666 2.78969C6.37401 1.18242 9.58855 2.0182 11.1315 4.46125C12.6745 6.96859 11.9673 10.2474 9.45997 11.7904Z"
        fill="white"
      />
    </svg>
  );
};

export const CallPhoneIcon = ({
  fill,
  ...props
}: ReactSVGProps & { stroke?: string }) => {
  return (
    <svg
      width="10"
      height="13"
      viewBox="0 0 10 13"
      {...props}
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.32032 0.480413L3.03474 0.265536C3.4261 0.147522 3.84704 0.175931 4.21899 0.345463C4.59095 0.514995 4.88852 0.814068 5.05617 1.18687L5.60836 2.41492C5.75251 2.73558 5.79265 3.09332 5.72315 3.43796C5.65366 3.78259 5.47801 4.09683 5.22085 4.33656L4.30563 5.18934C4.2789 5.21425 4.26196 5.24791 4.25788 5.28422C4.23095 5.52726 4.39563 6.00048 4.77579 6.65858C5.05128 7.13669 5.30166 7.47278 5.51409 7.66072C5.66285 7.79234 5.74427 7.8205 5.77916 7.81071L7.00965 7.43422C7.34569 7.33143 7.70546 7.33638 8.03855 7.44835C8.37163 7.56033 8.66133 7.77374 8.86702 8.05864L9.65062 9.14588C9.88917 9.47645 9.99967 9.88234 9.96162 10.2882C9.92357 10.6941 9.73954 11.0724 9.4437 11.3528L8.90069 11.867C8.61282 12.1397 8.25926 12.3331 7.87443 12.4284C7.48961 12.5238 7.08665 12.5179 6.70479 12.4113C5.01883 11.9405 3.50735 10.5178 2.15319 8.17251C0.797818 5.82417 0.321539 3.80151 0.761087 2.10393C0.859756 1.72213 1.05511 1.37218 1.32832 1.08782C1.60153 0.80346 1.94277 0.594269 2.32032 0.480413ZM2.58601 1.36012C2.35943 1.42826 2.15423 1.55362 1.99017 1.72411C1.82612 1.89459 1.70875 2.10447 1.64937 2.3335C1.28083 3.76111 1.70263 5.5542 2.94903 7.71337C4.19422 9.86948 5.53429 11.1312 6.95272 11.5273C7.18185 11.5912 7.42362 11.5947 7.6545 11.5374C7.88537 11.4801 8.09747 11.364 8.27014 11.2004L8.81254 10.6861C8.9471 10.5587 9.03083 10.3867 9.04817 10.2022C9.06551 10.0176 9.01528 9.83307 8.90681 9.68277L8.12322 8.59614C8.02971 8.46649 7.89795 8.36937 7.74643 8.31843C7.59491 8.26748 7.43125 8.26526 7.2784 8.31209L6.04485 8.68981C5.3286 8.90285 4.67907 8.32678 3.98118 7.11772C3.5098 6.30351 3.29063 5.67296 3.34573 5.1826C3.37389 4.92793 3.49265 4.69285 3.67937 4.51777L4.59459 3.665C4.71142 3.55596 4.79119 3.41309 4.82271 3.25641C4.85422 3.09974 4.83588 2.93713 4.77028 2.79141L4.2187 1.56337C4.14249 1.39391 4.00722 1.25797 3.83813 1.18092C3.66905 1.10387 3.47771 1.09097 3.29982 1.14463L2.58601 1.36012Z"
        fill="white"
      />
    </svg>
  );
};

export const InstagramIcon = ({
  fill,
  ...props
}: ReactSVGProps & { stroke?: string }) => {
  return (
    <svg
      width="14"
      height="15"
      {...props}
      viewBox="0 0 14 15"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.559 3.01907C10.4007 3.01907 10.2461 3.06599 10.1145 3.15389C9.98296 3.2418 9.88042 3.36674 9.81987 3.51292C9.75932 3.6591 9.74348 3.81996 9.77434 3.97514C9.80521 4.13033 9.88141 4.27287 9.99329 4.38475C10.1052 4.49664 10.2477 4.57283 10.4029 4.6037C10.5581 4.63457 10.7189 4.61872 10.8651 4.55817C11.0113 4.49762 11.1362 4.39508 11.2241 4.26353C11.3121 4.13197 11.359 3.97729 11.359 3.81907C11.359 3.6069 11.2747 3.40341 11.1247 3.25338C10.9746 3.10335 10.7711 3.01907 10.559 3.01907ZM13.6256 4.6324C13.6127 4.07927 13.5091 3.532 13.319 3.0124C13.1495 2.56782 12.8856 2.16525 12.5456 1.8324C12.2155 1.49069 11.812 1.22852 11.3656 1.06574C10.8474 0.869843 10.2995 0.763876 9.74564 0.752402C9.03897 0.712402 8.81231 0.712402 6.99897 0.712402C5.18564 0.712402 4.95897 0.712402 4.25231 0.752402C3.69841 0.763876 3.15053 0.869843 2.63231 1.06574C2.18676 1.23017 1.7836 1.49211 1.45231 1.8324C1.11059 2.16252 0.848424 2.56603 0.685639 3.0124C0.489746 3.53063 0.383779 4.0785 0.372306 4.6324C0.332306 5.33907 0.332306 5.56574 0.332306 7.37907C0.332306 9.1924 0.332306 9.41907 0.372306 10.1257C0.383779 10.6796 0.489746 11.2275 0.685639 11.7457C0.848424 12.1921 1.11059 12.5956 1.45231 12.9257C1.7836 13.266 2.18676 13.528 2.63231 13.6924C3.15053 13.8883 3.69841 13.9943 4.25231 14.0057C4.95897 14.0457 5.18564 14.0457 6.99897 14.0457C8.81231 14.0457 9.03897 14.0457 9.74564 14.0057C10.2995 13.9943 10.8474 13.8883 11.3656 13.6924C11.812 13.5296 12.2155 13.2675 12.5456 12.9257C12.8871 12.5941 13.1512 12.1912 13.319 11.7457C13.5091 11.2261 13.6127 10.6789 13.6256 10.1257C13.6256 9.41907 13.6656 9.1924 13.6656 7.37907C13.6656 5.56574 13.6656 5.33907 13.6256 4.6324ZM12.4256 10.0457C12.4208 10.4689 12.3441 10.8882 12.199 11.2857C12.0925 11.5759 11.9216 11.838 11.699 12.0524C11.4827 12.2727 11.2211 12.4434 10.9323 12.5524C10.5348 12.6976 10.1155 12.7742 9.69231 12.7791C9.02564 12.8124 8.77897 12.8191 7.02564 12.8191C5.27231 12.8191 5.02564 12.8191 4.35897 12.7791C3.91957 12.7873 3.48204 12.7196 3.06564 12.5791C2.78949 12.4645 2.53988 12.2943 2.33231 12.0791C2.11103 11.8649 1.9422 11.6025 1.83897 11.3124C1.67621 10.9092 1.58593 10.4804 1.57231 10.0457C1.57231 9.37907 1.53231 9.1324 1.53231 7.37907C1.53231 5.62574 1.53231 5.37907 1.57231 4.7124C1.57529 4.27977 1.65427 3.85103 1.80564 3.44574C1.923 3.16434 2.10315 2.91351 2.33231 2.7124C2.53485 2.48318 2.78516 2.30113 3.06564 2.17907C3.47201 2.03243 3.9003 1.95579 4.33231 1.9524C4.99897 1.9524 5.24564 1.9124 6.99897 1.9124C8.75231 1.9124 8.99897 1.9124 9.66564 1.9524C10.0888 1.95726 10.5081 2.0339 10.9056 2.17907C11.2086 2.2915 11.4805 2.4743 11.699 2.7124C11.9174 2.91719 12.0881 3.16756 12.199 3.44574C12.3471 3.85169 12.4238 4.28026 12.4256 4.7124C12.459 5.37907 12.4656 5.62574 12.4656 7.37907C12.4656 9.1324 12.459 9.37907 12.4256 10.0457ZM6.99897 3.95907C6.32285 3.96039 5.66228 4.16209 5.10074 4.53868C4.5392 4.91528 4.10189 5.44987 3.84406 6.0749C3.58623 6.69994 3.51946 7.38738 3.65217 8.05036C3.78488 8.71333 4.11113 9.32209 4.58969 9.79972C5.06825 10.2774 5.67765 10.6024 6.34088 10.7338C7.00411 10.8653 7.69142 10.7971 8.31595 10.5381C8.94049 10.279 9.47423 9.8407 9.84973 9.27843C10.2252 8.71615 10.4256 8.0552 10.4256 7.37907C10.4265 6.92914 10.3384 6.48347 10.1665 6.06771C9.99449 5.65194 9.74201 5.27428 9.42355 4.95644C9.10509 4.6386 8.72694 4.38685 8.31084 4.21569C7.89474 4.04452 7.4489 3.95731 6.99897 3.95907ZM6.99897 9.59907C6.5599 9.59907 6.13068 9.46887 5.76561 9.22493C5.40053 8.981 5.11599 8.63428 4.94796 8.22863C4.77993 7.82297 4.73597 7.37661 4.82163 6.94597C4.90729 6.51533 5.11872 6.11976 5.4292 5.80929C5.73967 5.49882 6.13523 5.28738 6.56587 5.20173C6.99651 5.11607 7.44288 5.16003 7.84853 5.32806C8.25418 5.49608 8.6009 5.78063 8.84484 6.1457C9.08877 6.51078 9.21897 6.93999 9.21897 7.37907C9.21897 7.6706 9.16155 7.95928 9.04999 8.22863C8.93842 8.49797 8.7749 8.7427 8.56875 8.94885C8.3626 9.15499 8.11787 9.31852 7.84853 9.43008C7.57919 9.54165 7.29051 9.59907 6.99897 9.59907Z"
        fill="white"
      />
    </svg>
  );
};

export const FacebookIcon = ({
  fill,
  ...props
}: ReactSVGProps & { stroke?: string }) => {
  return (
    <svg
      width="9"
      height="15"
      viewBox="0 0 9 15"
      {...props}
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.19807 0.870871L6.19879 0.87087C6.67868 0.870144 7.15835 0.888872 7.63661 0.926992V2.23958H6.79862C6.22335 2.23958 5.74417 2.37041 5.43409 2.73672C5.13932 3.08496 5.09473 3.53911 5.09473 3.92253V5.50771V5.98257H5.56958H7.4875L7.28899 7.51887H5.56958H5.09473V7.99373V13.8875H3.47462V7.99373V7.51887H2.99977H1.33078V5.98257H2.99977H3.47462V5.50771V3.67812C3.47462 2.71507 3.76697 2.02654 4.2203 1.57885C4.67513 1.12967 5.3447 0.870871 6.19807 0.870871Z"
        stroke="white"
        strokeWidth="0.949708"
      />
    </svg>
  );
};

export const BottomLeftIcon = ({
  fill,
  ...props
}: ReactSVGProps & { stroke?: string }) => {
  return (
    <svg
      width="82"
      height="80"
      {...props}
      viewBox="0 0 82 80"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="-1"
        x2="80"
        y2="-1"
        transform="matrix(0 -1 1 1.84303e-06 2.00482 80)"
        stroke="white"
        strokeWidth="2"
      />
      <line
        y1="-1"
        x2="80"
        y2="-1"
        transform="matrix(-1 6.95737e-10 -3.7495e-06 -1 82 77.9988)"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};

export const BottomRightIcon = ({
  fill,
  ...props
}: ReactSVGProps & { stroke?: string }) => {
  return (
    <svg
      width="82"
      height="80"
      viewBox="0 0 82 80"
      {...props}
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="-1"
        x2="80"
        y2="-1"
        transform="matrix(0 -1 -1 1.84303e-06 79.9952 80)"
        stroke="white"
        strokeWidth="2"
      />
      <line
        y1="-1"
        x2="80"
        y2="-1"
        transform="matrix(1 6.95737e-10 3.7495e-06 -1 -1.52588e-05 77.9988)"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};

export const TopLeftIcon = ({
  fill,
  ...props
}: ReactSVGProps & { stroke?: string }) => {
  return (
    <svg
      width="80"
      height="82"
      viewBox="0 0 80 82"
      {...props}
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="-1"
        x2="80"
        y2="-1"
        transform="matrix(1 0 -1.84303e-06 1 -0.00115967 2)"
        stroke="white"
        strokeWidth="2"
      />
      <line
        y1="-1"
        x2="80.0097"
        y2="-1"
        transform="matrix(0 -1 1 -3.75091e-06 2 82.0049)"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};

export const TopRightIcon = ({
  fill,
  ...props
}: ReactSVGProps & { stroke?: string }) => {
  return (
    <svg
      width="80"
      height="82"
      viewBox="0 0 80 82"
      {...props}
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        y1="-1"
        x2="80"
        y2="-1"
        transform="matrix(-1 0 1.84303e-06 1 80 2.00488)"
        stroke="white"
        strokeWidth="2"
      />
      <line
        y1="-1"
        x2="80.0097"
        y2="-1"
        transform="matrix(0 -1 -1 -3.75091e-06 77.9988 82.0098)"
        stroke="white"
        strokeWidth="2"
      />
    </svg>
  );
};
export const CheckMark = ({
  fill,
  ...props
}: ReactSVGProps & { stroke?: string }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      {...props}
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
        fill="#157D18"
        fillOpacity="0.25"
      />
      <path
        d="M16.0001 26.6666C21.8911 26.6666 26.6667 21.891 26.6667 15.9999C26.6667 10.1089 21.8911 5.33325 16.0001 5.33325C10.109 5.33325 5.33341 10.1089 5.33341 15.9999C5.33341 21.891 10.109 26.6666 16.0001 26.6666Z"
        fill="#157D18"
      />
      <path
        d="M15.1113 17.4098L19.1966 13.324L19.8255 13.9524L15.1113 18.6667L12.2828 15.8382L12.9113 15.2098L15.1113 17.4098Z"
        fill="white"
      />
    </svg>
  );
};

export const CrossIcon = ({
  fill,
  ...props
}: ReactSVGProps & { stroke?: string }) => {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill={fill || "none"}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_26_257)">
        <path
          d="M34.5599 34.5598C40.3689 28.7508 40.3689 19.3325 34.5599 13.5234C28.7508 7.71436 19.3325 7.71436 13.5234 13.5234C7.71438 19.3325 7.71438 28.7508 13.5234 34.5598C19.3325 40.3689 28.7508 40.3689 34.5599 34.5598Z"
          fill="#023022"
        />
        <path
          d="M18.3836 19.4999L20.1868 17.6968L30.2041 27.7141L28.401 29.5172L18.3836 19.4999Z"
          fill="white"
        />
        <path
          d="M18.3836 27.9999L28.401 17.9825L30.2041 19.7857L20.1868 29.803L18.3836 27.9999Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_26_257">
          <rect
            width="34"
            height="34"
            fill="white"
            transform="translate(0 24.0416) rotate(-45)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const PlusIcon = ({
  fill,
  ...props
}: ReactSVGProps & { stroke?: string }) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill={fill || "none"}
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 31.875C25.2152 31.875 31.875 25.2152 31.875 17C31.875 8.78476 25.2152 2.125 17 2.125C8.78476 2.125 2.125 8.78476 2.125 17C2.125 25.2152 8.78476 31.875 17 31.875Z"
        fill="#333333"
        fillOpacity="0.25"
      />
      <path
        d="M16.2917 9.91663H18.4167V24.0833H16.2917V9.91663Z"
        fill="white"
      />
      <path
        d="M9.91666 15.5833H24.0833V18.4166H9.91666V15.5833Z"
        fill="white"
      />
    </svg>
  );
};

export const ArrowRight = ({
  fill,
  ...props
}: ReactSVGProps & { stroke?: string }) => {
  return (
    <svg
      {...props}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="20"
        cy="20"
        r="20"
        transform="rotate(-180 20 20)"
        fill="#BB8300"
      />
      <path
        d="M18 14.72L22.3467 19.0667C22.86 19.58 22.86 20.42 22.3467 20.9334L18 25.28"
        stroke="white"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ArrowLeft = ({
  fill,
  ...props
}: ReactSVGProps & { stroke?: string }) => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      {...props}
      fill={fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="19.5" stroke="#BB8300" />
      <path
        d="M22 25.28L17.6533 20.9333C17.14 20.42 17.14 19.58 17.6533 19.0666L22 14.72"
        stroke="#BB8300"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
