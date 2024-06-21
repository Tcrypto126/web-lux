import React from 'react'
import { type LucideProps } from 'lucide-react'

const FAQsAct: React.FC<LucideProps> = (props: LucideProps) => (
<svg
  width={12}
  height={12}
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  {...props}
>
  <mask id="path-1-inside-1_1372_84" fill="white">
    <path d="M8.99293 2.27228C8.99293 2.36565 8.91871 2.43987 8.82534 2.43987C8.73197 2.43987 8.65775 2.36566 8.65775 2.27228C8.65775 1.87725 8.97856 1.55404 9.37599 1.55404C9.89791 1.55404 10.2427 2.09512 10.0296 2.56675C9.95057 2.73913 9.83566 2.82532 9.6968 2.93545C9.52682 3.07192 9.54358 3.06234 9.54358 3.19641C9.54358 3.28978 9.46936 3.364 9.37599 3.364C9.28262 3.364 9.2084 3.28978 9.2084 3.19641V3.11022C9.2084 2.83728 9.40472 2.75349 9.62737 2.55957C9.88833 2.32973 9.73032 1.89161 9.37599 1.89161C9.1653 1.88922 8.99293 2.06159 8.99293 2.27228ZM9.2084 3.71357C9.2084 3.6202 9.28262 3.54598 9.37599 3.54598C9.46936 3.54598 9.54358 3.6202 9.54358 3.71357V3.7806C9.54358 3.87398 9.46936 3.94819 9.37599 3.94819C9.28262 3.94819 9.2084 3.87398 9.2084 3.7806V3.71357ZM7.17334 2.27228C7.17334 2.36565 7.09912 2.43987 7.00575 2.43987C6.91238 2.43987 6.83816 2.36566 6.83816 2.27228C6.83816 1.87725 7.15897 1.55404 7.5564 1.55404C8.07831 1.55404 8.42307 2.09512 8.20999 2.56675C8.13098 2.73913 8.01607 2.82532 7.87721 2.93545C7.70723 3.07192 7.72399 3.06234 7.72399 3.19641C7.72399 3.28978 7.64977 3.364 7.5564 3.364C7.46302 3.364 7.38881 3.28978 7.38881 3.19641V3.11022C7.38881 2.83728 7.58513 2.75349 7.80778 2.55957C8.06874 2.32973 7.91073 1.89161 7.5564 1.89161C7.34332 1.88922 7.17334 2.06159 7.17334 2.27228ZM7.38642 3.71357C7.38642 3.6202 7.46063 3.54598 7.55401 3.54598C7.64738 3.54598 7.7216 3.6202 7.7216 3.71357V3.7806C7.7216 3.87398 7.64738 3.94819 7.55401 3.94819C7.46063 3.94819 7.38642 3.87398 7.38642 3.7806V3.71357ZM2.74422 3.51006C2.65085 3.51006 2.57663 3.43585 2.57663 3.34247C2.57663 3.2491 2.65085 3.17488 2.74422 3.17488H4.64751C4.74088 3.17488 4.8151 3.2491 4.8151 3.34247C4.8151 3.43584 4.74088 3.51006 4.64751 3.51006H2.74422ZM5.88286 3.17729C5.97623 3.17729 6.05045 3.2515 6.05045 3.34488C6.05045 3.43825 5.97623 3.51247 5.88286 3.51247H5.29151C5.19814 3.51247 5.12392 3.43825 5.12392 3.34488C5.12392 3.2515 5.19814 3.17729 5.29151 3.17729H5.88286ZM5.88286 2.11429C5.97623 2.11429 6.05045 2.18851 6.05045 2.28188C6.05045 2.37525 5.97623 2.44947 5.88286 2.44947H3.97957C3.8862 2.44947 3.81198 2.37525 3.81198 2.28188C3.81198 2.18851 3.8862 2.11429 3.97957 2.11429H5.88286ZM2.74422 2.44947C2.65085 2.44947 2.57663 2.37525 2.57663 2.28188C2.57663 2.18851 2.65085 2.11429 2.74422 2.11429H3.33557C3.42894 2.11429 3.50316 2.18851 3.50316 2.28188C3.50316 2.37525 3.42894 2.44947 3.33557 2.44947H2.74422ZM2.57424 0.653931H10.099C10.6712 0.653931 11.1405 1.12079 11.1405 1.69538V3.78547C11.1405 4.35767 10.6736 4.82692 10.099 4.82692H6.8286L5.81827 6.21795C5.72251 6.34962 5.51662 6.2802 5.51662 6.11979V4.82695H2.57423C2.00203 4.82695 1.53278 4.36009 1.53278 3.7855V1.6954C1.53278 1.12081 2.00204 0.653931 2.57424 0.653931ZM10.099 0.989111H2.57424C2.18639 0.989111 1.86797 1.30754 1.86797 1.69538V3.78547C1.86797 4.17333 2.1864 4.49174 2.57424 4.49174H5.6842C5.77757 4.49174 5.85179 4.56596 5.85179 4.65933V5.605L6.60354 4.56835C6.63227 4.52286 6.68494 4.49174 6.74479 4.49174H10.0989C10.4868 4.49174 10.8052 4.17331 10.8052 3.78547V1.69538C10.8052 1.30752 10.4868 0.989111 10.099 0.989111ZM4.37468 6.81162C4.53748 7.27369 4.49678 7.82913 4.2837 8.2648C4.46087 8.29353 4.62607 8.34141 4.77929 8.40366V7.07012C4.77929 6.20584 4.10176 5.48517 3.24227 5.48517C2.38039 5.48517 1.70525 6.20341 1.70525 7.07012V8.42045C1.85847 8.35342 2.02606 8.30553 2.20323 8.27202C1.98537 7.82911 1.94466 7.26649 2.11465 6.79482C2.13859 6.72778 2.20323 6.68469 2.27266 6.68469H4.21432C4.29093 6.68469 4.35792 6.7398 4.37468 6.81162ZM4.08499 8.5737C3.63011 9.11237 2.86159 9.11237 2.40431 8.57849C1.77226 8.65749 1.1665 8.9783 1.1665 9.70134L1.16171 11.4275H1.76982V9.88092C1.76982 9.78755 1.84403 9.71333 1.93741 9.71333C2.03078 9.71333 2.105 9.78755 2.105 9.88092V11.4275H4.42015V9.88092C4.42015 9.78755 4.49437 9.71333 4.58774 9.71333C4.68111 9.71333 4.75533 9.78755 4.75533 9.88092V11.4275H5.36104L5.35865 9.70134C5.36104 8.96395 4.73384 8.64552 4.08499 8.5737ZM4.14005 7.41734C4.14005 7.28087 4.1233 7.1468 4.08978 7.01991H2.39475C2.29659 7.3886 2.34687 7.83152 2.52165 8.15952C2.67726 8.44921 2.91907 8.64313 3.24228 8.64313C3.86475 8.64313 4.14005 7.94644 4.14005 7.41734ZM1.93743 11.7626H0.998938C0.907961 11.7626 0.833738 11.6884 0.831348 11.5974C0.824165 11.0588 0.831348 10.4387 0.831348 9.70127C0.831348 9.22723 1.03485 8.86333 1.37242 8.61195V7.07014C1.37242 6.02151 2.20079 5.15006 3.24458 5.15006C4.28836 5.15006 5.11673 6.02153 5.11673 7.07014V8.58326C5.47824 8.83465 5.6985 9.20813 5.6985 9.70132V11.595C5.6985 11.6884 5.62428 11.7626 5.53091 11.7626L1.93743 11.7626ZM7.23322 7.11567C7.5684 7.16116 7.8533 6.81161 8.03765 6.55545C8.11186 6.4525 8.26987 6.46926 8.32254 6.57939C8.56914 7.08934 9.16767 7.3072 9.65363 7.29283C9.71348 7.29044 9.81643 7.28326 9.87149 7.2641C9.89543 6.5698 9.57223 6.11013 9.14368 5.88754C8.75583 5.68883 8.27701 5.67685 7.89153 5.87557C7.51086 6.07667 7.22604 6.48604 7.23322 7.11567ZM7.78387 7.29763C7.68811 7.36227 7.58755 7.40776 7.47981 7.43409C7.45587 7.81476 7.57797 8.17388 7.80063 8.43005C8.22199 8.91366 8.89234 8.91366 9.31374 8.43005C9.4933 8.22176 9.61301 7.94165 9.63456 7.63042C9.10546 7.6352 8.49974 7.42213 8.15736 6.95048C8.04244 7.08216 7.92034 7.20665 7.78387 7.29763ZM7.14224 7.43887C7.0369 7.41733 6.91241 7.3862 6.90283 7.25453C6.84777 6.40222 7.22365 5.84683 7.73838 5.58108C8.2196 5.33448 8.81574 5.34645 9.29698 5.59305C9.84763 5.87556 10.2618 6.4669 10.202 7.34789C10.1948 7.47478 10.0894 7.54421 9.96973 7.58252C9.96254 7.84348 9.8979 8.09007 9.79256 8.30554C10.4845 8.48031 11.0016 8.94238 11.0016 9.6989V11.5951C11.0016 11.6884 10.9274 11.7627 10.834 11.7627H6.30434C6.21336 11.7627 6.13914 11.6884 6.13675 11.5975C6.12957 11.0612 6.13675 10.4363 6.13675 9.70129C6.13675 8.95432 6.64191 8.49225 7.32184 8.31271C7.19256 8.05414 7.12787 7.75012 7.14224 7.43887ZM9.60339 8.6072C9.04316 9.3015 8.07593 9.30389 7.51574 8.61199C6.93158 8.73409 6.4719 9.07166 6.4719 9.7037L6.46951 11.4299H7.07522V9.88328C7.07522 9.78991 7.14944 9.71569 7.24281 9.71569C7.33618 9.71569 7.4104 9.78991 7.4104 9.88328V11.4275H9.72556V9.88095C9.72556 9.78758 9.79978 9.71336 9.89315 9.71336C9.98652 9.71336 10.0607 9.78758 10.0607 9.88095V11.4275H10.6665L10.6641 9.70138C10.6665 9.06215 10.1923 8.72451 9.60339 8.6072Z" />
  </mask>
  <path
    d="M8.99293 2.27228C8.99293 2.36565 8.91871 2.43987 8.82534 2.43987C8.73197 2.43987 8.65775 2.36566 8.65775 2.27228C8.65775 1.87725 8.97856 1.55404 9.37599 1.55404C9.89791 1.55404 10.2427 2.09512 10.0296 2.56675C9.95057 2.73913 9.83566 2.82532 9.6968 2.93545C9.52682 3.07192 9.54358 3.06234 9.54358 3.19641C9.54358 3.28978 9.46936 3.364 9.37599 3.364C9.28262 3.364 9.2084 3.28978 9.2084 3.19641V3.11022C9.2084 2.83728 9.40472 2.75349 9.62737 2.55957C9.88833 2.32973 9.73032 1.89161 9.37599 1.89161C9.1653 1.88922 8.99293 2.06159 8.99293 2.27228ZM9.2084 3.71357C9.2084 3.6202 9.28262 3.54598 9.37599 3.54598C9.46936 3.54598 9.54358 3.6202 9.54358 3.71357V3.7806C9.54358 3.87398 9.46936 3.94819 9.37599 3.94819C9.28262 3.94819 9.2084 3.87398 9.2084 3.7806V3.71357ZM7.17334 2.27228C7.17334 2.36565 7.09912 2.43987 7.00575 2.43987C6.91238 2.43987 6.83816 2.36566 6.83816 2.27228C6.83816 1.87725 7.15897 1.55404 7.5564 1.55404C8.07831 1.55404 8.42307 2.09512 8.20999 2.56675C8.13098 2.73913 8.01607 2.82532 7.87721 2.93545C7.70723 3.07192 7.72399 3.06234 7.72399 3.19641C7.72399 3.28978 7.64977 3.364 7.5564 3.364C7.46302 3.364 7.38881 3.28978 7.38881 3.19641V3.11022C7.38881 2.83728 7.58513 2.75349 7.80778 2.55957C8.06874 2.32973 7.91073 1.89161 7.5564 1.89161C7.34332 1.88922 7.17334 2.06159 7.17334 2.27228ZM7.38642 3.71357C7.38642 3.6202 7.46063 3.54598 7.55401 3.54598C7.64738 3.54598 7.7216 3.6202 7.7216 3.71357V3.7806C7.7216 3.87398 7.64738 3.94819 7.55401 3.94819C7.46063 3.94819 7.38642 3.87398 7.38642 3.7806V3.71357ZM2.74422 3.51006C2.65085 3.51006 2.57663 3.43585 2.57663 3.34247C2.57663 3.2491 2.65085 3.17488 2.74422 3.17488H4.64751C4.74088 3.17488 4.8151 3.2491 4.8151 3.34247C4.8151 3.43584 4.74088 3.51006 4.64751 3.51006H2.74422ZM5.88286 3.17729C5.97623 3.17729 6.05045 3.2515 6.05045 3.34488C6.05045 3.43825 5.97623 3.51247 5.88286 3.51247H5.29151C5.19814 3.51247 5.12392 3.43825 5.12392 3.34488C5.12392 3.2515 5.19814 3.17729 5.29151 3.17729H5.88286ZM5.88286 2.11429C5.97623 2.11429 6.05045 2.18851 6.05045 2.28188C6.05045 2.37525 5.97623 2.44947 5.88286 2.44947H3.97957C3.8862 2.44947 3.81198 2.37525 3.81198 2.28188C3.81198 2.18851 3.8862 2.11429 3.97957 2.11429H5.88286ZM2.74422 2.44947C2.65085 2.44947 2.57663 2.37525 2.57663 2.28188C2.57663 2.18851 2.65085 2.11429 2.74422 2.11429H3.33557C3.42894 2.11429 3.50316 2.18851 3.50316 2.28188C3.50316 2.37525 3.42894 2.44947 3.33557 2.44947H2.74422ZM2.57424 0.653931H10.099C10.6712 0.653931 11.1405 1.12079 11.1405 1.69538V3.78547C11.1405 4.35767 10.6736 4.82692 10.099 4.82692H6.8286L5.81827 6.21795C5.72251 6.34962 5.51662 6.2802 5.51662 6.11979V4.82695H2.57423C2.00203 4.82695 1.53278 4.36009 1.53278 3.7855V1.6954C1.53278 1.12081 2.00204 0.653931 2.57424 0.653931ZM10.099 0.989111H2.57424C2.18639 0.989111 1.86797 1.30754 1.86797 1.69538V3.78547C1.86797 4.17333 2.1864 4.49174 2.57424 4.49174H5.6842C5.77757 4.49174 5.85179 4.56596 5.85179 4.65933V5.605L6.60354 4.56835C6.63227 4.52286 6.68494 4.49174 6.74479 4.49174H10.0989C10.4868 4.49174 10.8052 4.17331 10.8052 3.78547V1.69538C10.8052 1.30752 10.4868 0.989111 10.099 0.989111ZM4.37468 6.81162C4.53748 7.27369 4.49678 7.82913 4.2837 8.2648C4.46087 8.29353 4.62607 8.34141 4.77929 8.40366V7.07012C4.77929 6.20584 4.10176 5.48517 3.24227 5.48517C2.38039 5.48517 1.70525 6.20341 1.70525 7.07012V8.42045C1.85847 8.35342 2.02606 8.30553 2.20323 8.27202C1.98537 7.82911 1.94466 7.26649 2.11465 6.79482C2.13859 6.72778 2.20323 6.68469 2.27266 6.68469H4.21432C4.29093 6.68469 4.35792 6.7398 4.37468 6.81162ZM4.08499 8.5737C3.63011 9.11237 2.86159 9.11237 2.40431 8.57849C1.77226 8.65749 1.1665 8.9783 1.1665 9.70134L1.16171 11.4275H1.76982V9.88092C1.76982 9.78755 1.84403 9.71333 1.93741 9.71333C2.03078 9.71333 2.105 9.78755 2.105 9.88092V11.4275H4.42015V9.88092C4.42015 9.78755 4.49437 9.71333 4.58774 9.71333C4.68111 9.71333 4.75533 9.78755 4.75533 9.88092V11.4275H5.36104L5.35865 9.70134C5.36104 8.96395 4.73384 8.64552 4.08499 8.5737ZM4.14005 7.41734C4.14005 7.28087 4.1233 7.1468 4.08978 7.01991H2.39475C2.29659 7.3886 2.34687 7.83152 2.52165 8.15952C2.67726 8.44921 2.91907 8.64313 3.24228 8.64313C3.86475 8.64313 4.14005 7.94644 4.14005 7.41734ZM1.93743 11.7626H0.998938C0.907961 11.7626 0.833738 11.6884 0.831348 11.5974C0.824165 11.0588 0.831348 10.4387 0.831348 9.70127C0.831348 9.22723 1.03485 8.86333 1.37242 8.61195V7.07014C1.37242 6.02151 2.20079 5.15006 3.24458 5.15006C4.28836 5.15006 5.11673 6.02153 5.11673 7.07014V8.58326C5.47824 8.83465 5.6985 9.20813 5.6985 9.70132V11.595C5.6985 11.6884 5.62428 11.7626 5.53091 11.7626L1.93743 11.7626ZM7.23322 7.11567C7.5684 7.16116 7.8533 6.81161 8.03765 6.55545C8.11186 6.4525 8.26987 6.46926 8.32254 6.57939C8.56914 7.08934 9.16767 7.3072 9.65363 7.29283C9.71348 7.29044 9.81643 7.28326 9.87149 7.2641C9.89543 6.5698 9.57223 6.11013 9.14368 5.88754C8.75583 5.68883 8.27701 5.67685 7.89153 5.87557C7.51086 6.07667 7.22604 6.48604 7.23322 7.11567ZM7.78387 7.29763C7.68811 7.36227 7.58755 7.40776 7.47981 7.43409C7.45587 7.81476 7.57797 8.17388 7.80063 8.43005C8.22199 8.91366 8.89234 8.91366 9.31374 8.43005C9.4933 8.22176 9.61301 7.94165 9.63456 7.63042C9.10546 7.6352 8.49974 7.42213 8.15736 6.95048C8.04244 7.08216 7.92034 7.20665 7.78387 7.29763ZM7.14224 7.43887C7.0369 7.41733 6.91241 7.3862 6.90283 7.25453C6.84777 6.40222 7.22365 5.84683 7.73838 5.58108C8.2196 5.33448 8.81574 5.34645 9.29698 5.59305C9.84763 5.87556 10.2618 6.4669 10.202 7.34789C10.1948 7.47478 10.0894 7.54421 9.96973 7.58252C9.96254 7.84348 9.8979 8.09007 9.79256 8.30554C10.4845 8.48031 11.0016 8.94238 11.0016 9.6989V11.5951C11.0016 11.6884 10.9274 11.7627 10.834 11.7627H6.30434C6.21336 11.7627 6.13914 11.6884 6.13675 11.5975C6.12957 11.0612 6.13675 10.4363 6.13675 9.70129C6.13675 8.95432 6.64191 8.49225 7.32184 8.31271C7.19256 8.05414 7.12787 7.75012 7.14224 7.43887ZM9.60339 8.6072C9.04316 9.3015 8.07593 9.30389 7.51574 8.61199C6.93158 8.73409 6.4719 9.07166 6.4719 9.7037L6.46951 11.4299H7.07522V9.88328C7.07522 9.78991 7.14944 9.71569 7.24281 9.71569C7.33618 9.71569 7.4104 9.78991 7.4104 9.88328V11.4275H9.72556V9.88095C9.72556 9.78758 9.79978 9.71336 9.89315 9.71336C9.98652 9.71336 10.0607 9.78758 10.0607 9.88095V11.4275H10.6665L10.6641 9.70138C10.6665 9.06215 10.1923 8.72451 9.60339 8.6072Z"
    fill="#949494"
    stroke="white"
    strokeWidth="2.66667"
    mask="url(#path-1-inside-1_1372_84)"
  />
</svg>

)

export default FAQsAct
