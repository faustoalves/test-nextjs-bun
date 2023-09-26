import React from "react";

const IconBrand = ({ size = 197, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={(size / 197) * 46}
      viewBox="0 0 197 46"
      className={`${className} fill-current`}
    >
      <path d="M39.29 6.71C34.78 2.238 29.35 0 23 0S11.22 2.237 6.71 6.71C2.238 11.22 0 16.65 0 23s2.237 11.78 6.71 16.29C11.22 43.762 16.65 46 23 46s11.78-2.237 16.29-6.71C43.762 34.78 46 29.35 46 23s-2.237-11.78-6.71-16.29zM23 .813c6.133 0 11.365 2.164 15.694 6.494 4.33 4.365 6.494 9.597 6.494 15.694 0 6.133-2.165 11.365-6.494 15.694-4.33 4.33-9.56 6.494-15.694 6.494-6.133 0-11.365-2.165-15.694-6.494C2.94 34.364.776 29.134.812 23c0-6.133 2.164-11.365 6.494-15.694C11.636 2.976 16.866.812 23 .812zm-3.301 16.884l-.758-.324-1.136 2.976.757.325 1.137-2.976zm1.623-1.244l-.974 2.651.758.271.974-2.652-.758-.27zm2.923-.65l-.758-.324-1.136 2.976.757.325 1.137-2.977zm5.303-5.466l-.703.433c2.2 3.716 1.786 6.711-1.245 8.984-.397.289-.794.56-1.19.812-.037 0-.055.018-.055.054h-.054a14.305 14.305 0 01-4.113 1.461h-.162l-.054.108a11.25 11.25 0 01-2.977 2.22l1.3-3.248-.759-.325-1.569 4.06-.108.107c-.036.036-.036.09 0 .163l-1.84 4.383-.054.163.054.162 4.979 11.04h.595a.378.378 0 00-.27.108c-.109.072-.145.163-.109.27-.036.109 0 .217.108.326a.367.367 0 00.27.108h5.413v-.812h-3.68l-2.598-10.986 1.245-4.275c2.2-.902 3.824-2.381 4.87-4.438.397-.288.794-.56 1.19-.812h.055c3.428-2.561 3.915-5.917 1.461-10.066zm-7.09 12.502a17.299 17.299 0 003.031-.92c-.938 1.37-2.255 2.38-3.95 3.03l-.217.108-1.407 4.871v.108l2.544 10.878h-.596L16.886 29.71l1.677-4.222a10.844 10.844 0 003.897-2.651zm2.057-13.313l-.757-.27c-.253.793-.109 1.424.433 1.893.433.397 1.208.65 2.327.758.721.036 1.244.595 1.57 1.678.143.396.215.685.215.865a.583.583 0 01-.324-.108l.054.054c-1.227-.613-2.093-.956-2.598-1.028-1.19-.253-2.507-.036-3.95.65v.054c-1.912.938-5.7 3.878-11.365 8.82l-.595.542.811.162a16.67 16.67 0 006.549 0l-.163-.811c-1.804.36-3.608.396-5.411.108 5.231-4.546 8.749-7.252 10.552-8.118h-.054c1.3-.613 2.472-.812 3.518-.595.433.036 1.209.343 2.327.92.289.144.523.198.704.162a.703.703 0 00.65-.379c.143-.288.09-.811-.163-1.57-.47-1.478-1.227-2.218-2.273-2.218-.902-.108-1.515-.306-1.84-.595-.289-.253-.361-.577-.217-.974zm1.732.487c.36 0 .541-.163.541-.487 0-.361-.18-.541-.54-.541-.326 0-.488.18-.488.54 0 .325.162.488.487.488zm8.55-1.3l-.053-.81-6.44.432c-.253-.216-.632-.433-1.137-.65-1.154-.432-2.706-.432-4.654 0l-4.438 1.029.163.812 4.437-1.029c1.768-.396 3.175-.414 4.221-.054h-.054c.47.18.776.38.92.596l.163.162h.216l6.657-.487z"></path>
      <path
        fillRule="evenodd"
        d="M56 42.104h14.108c12.056 0 18.315-3.356 18.315-10.895 0-5.008-3.693-8.002-9.952-9.19 4.822-1.549 8.054-4.647 8.054-9.036 0-6.35-4.412-9.603-16.109-9.603H56v.31l3.694 3.252v31.703L56 41.794v.31zm11.286-20.911V5.445h2.822c5.49 0 8.465 2.427 8.465 7.797 0 5.938-3.386 7.95-8.26 7.95h-3.027zm4.053 2.014c6.31 0 9.132 3.097 9.132 8.415 0 5.783-3.027 8.468-9.645 8.468h-3.54V23.207h4.053zm33.809 19.413c5.079 0 8.773-2.168 11.543-5.008v-.672c-2.052 1.136-4.156 1.653-6.464 1.653-5.746 0-8.773-3.253-9.799-7.9l14.929-3.098 2.001-.413c-1.282-7.177-5.438-10.946-11.749-10.946-8.157 0-13.082 6.144-13.082 13.528 0 7.383 5.182 12.856 12.621 12.856zm-5.13-16.11c0-4.8 1.744-8.673 5.284-8.673 2.514 0 3.95 3.304 4.31 8.313l-9.389 3.355c-.154-.929-.205-1.961-.205-2.994zm33.962 15.284l-3.694-2.891V21.915l.154-.051c2.103-.93 4.053-1.704 6.258-1.704 3.387 0 4.515 1.704 4.515 5.731v13.012l-3.693 2.89v.31h14.724v-.31l-3.694-2.89V26.2c0-7.28-2.052-9.759-7.388-9.759-2.976 0-5.899 1.085-10.722 3.615l-.154.103v-3.408h-11.03v.31l3.694 3.82v18.02l-3.694 2.892v.31h14.724v-.31zm39.333-2.788l.205-.103v3.2h10.825v-.309l-3.694-3.046V16.649l-11.389.104v.31l4.002 2.89V37.2c-1.899.93-3.591 1.6-5.438 1.6-3.386 0-4.566-1.703-4.566-5.731V16.649l-11.031.104v.31l3.694 2.89v12.805c0 6.506 1.129 9.656 7.234 9.656 3.591 0 6.772-1.188 10.158-3.408zm18.777 3.614c2.257 0 4.053-1.445 4.053-3.975 0-2.324-1.796-3.924-4.053-3.924-2.258 0-4.053 1.6-4.053 3.924 0 2.53 1.795 3.975 4.053 3.975z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default IconBrand;