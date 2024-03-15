const keyboardLayouts = {
    english: {
      layout: {
        default: ["` 1 2 3 4 5 6 7 8 9 0 - =", "{enter} q w e r t y u i o p [ ] \\", "{lock} a s d f g h j k l ; ' {enter}", "{shift} z x c v b n m , . / {shift}", "{space}"],
        shift: ["~ ! @ # $ % ^ & * ( ) _ +", "{shift} Q W E R T Y U I O P { } |", "{lock} A S D F G H J K L : \" {enter}", "{shift} Z X C V B N M < > ? {shift}", "{space}"],
      },
    },
    kannada: {
        layout: {
          default: [
            "\u0cca 1 2 3 4 5 6 7 8 9 0 - \u0cc3 {shift}",
            "{enter} \u0ccc \u0cc8 \u0cbe \u0cc0 \u0cc2 \u0cac \u0cb9 \u0c97 \u0ca6 \u0c9c \u0ca1",
            "\u0ccb \u0cc7 \u0ccd \u0cbf \u0cc1 \u0caa \u0cb0 \u0c95 \u0ca4 \u0c9a \u0c9f {enter}",
            "{shift} \u0cc6 \u0c82 \u0cae \u0ca8 \u0cb5 \u0cb2 \u0cb8 , . / {shift}",
            ".com @ {space}",
          ],
          shift: [
            "\u0c92 \u0ccd\u0cb0 \u0cb0\u0ccd \u0c9c\u0ccd\u0c9e \u0ca4\u0ccd\u0cb0 \u0c95\u0ccd\u0cb7 \u0cb6\u0ccd\u0cb0 ( ) \u0c83 \u0c8b {shift}",
            "{shift} \u0c94 \u0c90 \u0c86 \u0c88 \u0c8a \u0cad \u0c99 \u0c98 \u0ca7 \u0c9d \u0ca2 \u0c9e",
            "\u0c93 \u0c8f \u0c85 \u0c87 \u0c89 \u0cab \u0cb1 \u0c96 \u0ca5 \u0c9b \u0ca0 {enter}",
            "{shift} \u0c8e \u0ca3 \u0cb3 \u0cb6 \u0cb7 | / {shift}",
            ".com @ {space}",
          ],
        },
      },
    hindi: {
        layout: {
          default: [
            "` \u090D \u0945 \u094D\u0930 \u0930\u094D \u091C\u094D\u091E \u0924\u094D\u0930 \u0915\u094D\u0937 \u0936\u094D\u0930 \u096F \u0966 - \u0943 {shift}",
            "{shift} \u094C \u0948 \u093E \u0940 \u0942 \u092C \u0939 \u0917 \u0926 \u091C \u0921 \u093C \u0949 \\",
            "{lock} \u094B \u0947 \u094D \u093F \u0941 \u092A \u0930 \u0915 \u0924 \u091A \u091F {enter}",
            "{shift} \u0902 \u092E \u0928 \u0935 \u0932 \u0938 , . \u092F {shift}",
            ".com @ {space}",
          ],
          shift: [
            "~ \u0967 \u0968 \u0969 \u096A \u096B \u096C \u096D \u096E \u096F \u0966 \u0903 \u090B {shift}",
            "{enter} \u0914 \u0910 \u0906 \u0908 \u090A \u092D \u0919 \u0918 \u0927 \u091D \u0922 \u091E \u0911",
            "{lock} \u0913 \u090F \u0905 \u0907 \u0909 \u092B \u0931 \u0916 \u0925 \u091B \u0920 {enter}",
            '{shift} "" \u0901 \u0923 \u0928 \u0935 \u0933 \u0936 \u0937 \u0964 \u095F {shift}',
            ".com @ {space}",
          ],
        },
      },
    odia: {
        layout: {
          default: [
              "\u0B66 \u0B67 \u0B68 \u0B69 \u0B6A \u0B6B \u0B6C \u0B6D \u0B6E \u0B6F \u0B0B \u0B43 {shift}",
              "{shift} \u0B4C \u0B48 \u0B3E \u0B40 \u0B42  \u0B2C \u0B39 \u0B17 \u0B26 \u0B1C \u0B21 \u0B3C",
              "{lock} \u0B4B \u0B47 \u0B4D \u0B3F \u0B41 \u0B2A \u0B30 \u0B15 \u0B24 \u0B1A \u0B1F {enter}",
              "{shift} \u0B5F \u0B02 \u0B2E \u0B28 \u0B71 \u0B32 \u0B38 \u002C \u002E \u0B5F {shift}",
              ".com @ {space}",
          ],
          shift: [
              "\u0B4D\u0B30 \u0B30\u0B4D \u0B1C\u0B4D\u0B1E \u0B24\u0B4D\u0B30 \u0B15\u0B4D\u0B37 \u0B36\u0B4D\u0B30 \u0028 \u0029  \u0B03 \u0B60 \u0B44 {shift}",
              "{shift} \u0B14 \u0B10 \u0B06 \u0B08 \u0B0A \u0B2D \u0B19 \u0B18 \u0B27 \u0B1D \u0B22 \u0B5C \u0B1E",
              "{lock} \u0B13 \u0B0F \u0B05 \u0B62 \u0B07 \u0B09 \u0B2B \u0B16 \u0B25 \u0B1B \u0B20 {enter}",
              "{shift} \u0B71 \u0B01 \u0B70 \u0B23 \u0B35 \u0B33 \u0B36 \u0B37 \u0964 \u0B2F {shift}",
              ".com @ {space}",
          ],
      },
      },
      tamil: {
        layout: {
          default: [
            "\u0B80 \u0B81 1 2 3 4 5 6 7 8 9 0 - = {shift}",
            "{enter} \u0B86 \u0B87 \u0B88 \u0B89 \u0B8A \u0B8E \u0B8F \u0B90 \u0B92 \u0B93 \u0B94 \u0B83",
            "{lock} \u0B95 \u0B99 \u0B9A \u0B9E \u0B9F \u0BA3 \u0BA4 \u0BA8 \u0BAA \u0BAE {enter}",
            "{shift} \u0BAF \u0BB0 \u0BB2 \u0BB5 \u0BB4 \u0BB3 \u0BA9 , . / {shift}",
            "{space}",
          ],
          shift: [
            "\u0B82 ! @ # $ % ^ & * ( ) _ + {shift}",
            "{enter} \u0B87 \u0B88 \u0B89 \u0B8A \u0B8B \u0B8F \u0B90 \u0B92 \u0B93 \u0B94 \u0B83",
            "{lock} \u0B99 \u0B9A \u0B9E \u0B9F \u0BA3 \u0BA4 \u0BA8 \u0BAA \u0BAE {enter}",
            "{shift} \u0BB0 \u0BB1 \u0BB3 \u0BB4 \u0BB5 \u0BB7 \u0BB8 \u0BB9 , . / {shift}",
            "{space}",
          ],
        },
      },
      telugu: {
        layout: {
          default: [
            "\u0C4A 1 2 3 4 5 6 7 8 9 0 - \u0C43 {shift}",
            "{enter} \u0C4C \u0C48 \u0C3E \u0C40 \u0C42 \u0C2C \u0C39 \u0C17 \u0C26 \u0C1C \u0C21 {//} {//}",
            "{lock} \u0C4B \u0C47 \u0C4D \u0C3F \u0C41 \u0C2A \u0C30 \u0C15 \u0C24 \u0C1A \u0C1F {enter}",
            "{shift} {//} \u0C46 \u0C02 \u0C2E \u0C28 \u0C35 \u0C32 \u0C38 , . \u0C2F {shift}",
            ".com @ {space}"
          ],
          shift: [
            "\u0C12 {//} {//} \u0C4D\u0C30 {//} \u0C1C\u0C4D\u0C1E \u0C24\u0C4D\u0C30 \u0C15\u0C4D\u0C37 \u0C36\u0C4D\u0C30 ( ) \u0C03 \u0C0B {shift}",
            "{enter} \u0C14 \u0C10 \u0C06 \u0C08 \u0C0A \u0C2D \u0C19 \u0C18 \u0C27 \u0C1D \u0C22 \u0C1E {//}",
            "{lock} \u0C13 \u0C0F \u0C05 \u0C07 \u0C09 \u0C2B \u0C31 \u0C16 \u0C25 \u0C1B \u0C20 {enter}",
            "{shift} {//} \u0C0E \u0C01 \u0C23 \u0C28 {//} \u0C33 \u0C36 \u0C37 {//} {//} {shift}",
            ".com @ {space}"
          ]
    }
      },
      punjabi: {
        layout: {
          default: [
            "{//} 1 2 3 4 5 6 7 8 9 0 - {//} {shift}",
            "{enter} \u0A4C \u0A48 \u0A3E \u0A40 \u0A42 \u0A2C \u0A39 \u0A17 \u0A26 \u0A1C \u0A21 \u0A3C {//}",
            "{lock} \u0A4B \u0A47 \u0A4D \u0A3F \u0A41 \u0A2A \u0A30 \u0A15 \u0A24 \u0A1A \u0A1F {enter}",
            "{shift} {//} \u0A70 \u0A2E \u0A28 \u0A35 \u0A32 \u0A38 , . \u0A2F {shift}",
            ".com @ {space}"
          ],
          shift: [
            "\u0A4D\u0A39 \u0A4D\u0A35 \u0A4D\u0A2F \u0A4D\u0A30 \u0A71 {//} {//} {//} {//} ( ) {//} {//} {shift}",
            "{enter} \u0A14 \u0A10 \u0A06 \u0A08 \u0A0A \u0A2D \u0A19 \u0A18 \u0A27 \u0A1D \u0A22 \u0A1E {//}",
            "{lock} \u0A13 \u0A0F \u0A05 \u0A07 \u0A09 \u0A2B \u0A5C \u0A16 \u0A25 \u0A1B \u0A20 {enter}",
            "{shift} {//} \u0A02 \u0A23  \u0A72 \u0A33 \u0A36 {//} \u0964 {//} {shift}",
            ".com @ {space}"
          ]
    }
      },
    
    // Add layouts for other languages here
  };
  
  export default keyboardLayouts;
  