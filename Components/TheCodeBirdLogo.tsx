"use client";

interface TheCodeBirdLogoProps {
  IconSize: string;
}

export default function TheCodeBirdLogo({ IconSize }: TheCodeBirdLogoProps) {
  const size = `fill-current ${IconSize}`;

  return (
    <div>
      <svg
        version="1.0"
        className={size}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500.000000 500.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
          fill="currentColor"
          stroke="none"
        >
          <path
            d="M2205 4868 c-281 -31 -603 -134 -848 -269 -208 -116 -363 -234 -547
-419 -355 -355 -573 -771 -660 -1260 -28 -155 -39 -519 -21 -693 28 -271 104
-536 225 -782 126 -256 254 -434 468 -646 359 -358 769 -570 1275 -661 113
-20 161 -22 403 -22 241 -1 291 2 404 22 398 69 709 201 1026 436 122 90 406
374 497 496 227 308 362 621 430 1000 24 133 27 168 27 420 1 222 -3 296 -17
385 -86 514 -303 939 -666 1303 -69 70 -162 156 -206 191 -342 274 -776 454
-1207 500 -115 13 -469 12 -583 -1z m503 -149 c144 -15 321 -53 463 -98 875
-280 1465 -1020 1560 -1956 37 -366 -56 -813 -247 -1185 -355 -694 -1035
-1143 -1835 -1212 -288 -24 -651 33 -944 149 -498 197 -888 534 -1140 983 -50
89 -123 245 -140 299 -7 22 -5 23 27 16 43 -10 104 -40 149 -76 50 -39 81 -45
147 -25 56 17 60 17 181 -7 68 -14 131 -23 140 -20 9 3 27 16 41 29 14 12 54
31 90 42 64 20 64 20 37 31 -54 21 -99 13 -146 -24 -56 -45 -93 -45 -167 -4
-30 17 -52 34 -50 37 3 3 45 22 92 43 96 43 148 89 138 122 -6 19 -11 16 -53
-31 -41 -45 -55 -54 -121 -73 -41 -12 -92 -22 -114 -23 -28 -1 -43 -8 -57 -26
-36 -47 -40 -50 -68 -50 -19 0 -45 13 -73 36 -42 36 -75 53 -132 70 -50 15
-41 32 33 68 39 19 90 50 114 70 44 36 176 102 252 126 22 7 56 22 75 34 19
11 42 22 50 23 8 1 29 6 45 12 17 5 102 21 190 35 l160 25 35 -25 c118 -80
196 -205 310 -494 103 -260 100 -253 105 -249 2 3 -1 38 -8 79 -9 57 -8 75 1
78 7 2 12 24 12 58 0 30 3 54 7 54 9 0 110 -106 128 -134 10 -16 11 -44 5
-123 -5 -56 -5 -114 -1 -130 l8 -28 7 30 c10 41 66 136 76 130 4 -3 27 29 49
70 23 41 45 75 50 75 5 0 16 -11 24 -24 25 -38 100 -121 107 -119 4 1 19 -19
33 -45 15 -26 27 -41 27 -34 0 21 -49 140 -86 207 -42 76 -64 168 -64 270 -1
44 -5 114 -10 155 -4 41 -7 77 -4 79 2 2 10 -2 18 -8 13 -11 14 -8 6 21 -12
40 -13 108 -2 125 5 8 29 12 67 10 l58 -2 15 -43 c16 -48 29 -45 34 8 l4 35
26 -55 c23 -50 40 -111 51 -181 5 -36 -25 -431 -38 -489 -5 -25 -5 -25 6 -2 7
12 15 22 18 22 4 0 22 -61 41 -136 39 -152 38 -153 61 34 7 56 16 102 20 102
4 0 24 -27 44 -60 20 -33 41 -58 46 -54 5 3 33 -14 62 -38 92 -77 95 -78 70
-38 -122 196 -147 277 -148 465 l0 130 54 113 c30 61 59 112 65 112 15 -1 40
-22 54 -45 9 -16 10 -7 5 42 -3 35 -4 63 -2 64 93 15 222 26 404 34 44 3 106
10 138 16 44 9 89 9 185 1 188 -16 315 -58 398 -132 28 -25 65 -53 82 -62 35
-19 82 -107 82 -155 l0 -28 20 25 c11 14 17 32 13 40 -3 8 -13 34 -21 58 -10
30 -32 58 -68 90 -30 25 -54 52 -54 59 0 16 4 16 62 -2 26 -7 63 -11 82 -8 59
9 106 -13 172 -83 53 -56 65 -64 97 -64 47 0 47 15 1 37 -45 23 -86 89 -64
103 8 5 29 10 47 10 28 0 101 45 90 56 -2 2 -41 -1 -88 -8 -157 -21 -295 -8
-409 38 -33 13 -72 24 -87 24 -16 1 -46 9 -68 20 -22 11 -61 19 -87 20 -27 0
-48 4 -48 10 0 11 20 16 95 24 31 4 64 16 87 34 67 48 131 83 184 103 95 36
187 110 266 215 39 54 93 112 120 131 51 37 66 70 25 58 -33 -11 -79 -40 -106
-69 -33 -35 -48 -33 -60 12 -20 69 -11 95 40 122 10 6 24 20 30 32 l11 21 -35
-21 c-19 -12 -37 -22 -41 -22 -20 0 2 63 64 185 44 85 70 148 68 163 -3 21 -9
15 -50 -45 -27 -38 -53 -84 -59 -102 -12 -33 -15 -34 -105 -16 -29 6 -49 58
-47 119 1 27 -4 60 -12 75 -13 24 -14 21 -15 -52 0 -89 14 -129 59 -172 37
-35 55 -92 46 -147 -4 -22 -8 -77 -9 -122 -3 -84 -24 -149 -66 -203 -30 -38
-224 -150 -281 -162 -73 -16 -114 -14 -132 7 -15 17 -10 22 78 87 108 79 123
102 137 214 17 129 6 242 -35 361 -19 58 -45 148 -56 200 -29 130 -60 190
-111 219 -36 20 -52 23 -125 19 -94 -3 -96 -5 -178 -103 -27 -33 -68 -72 -91
-86 -53 -34 -82 -67 -70 -78 5 -5 38 -17 74 -26 85 -22 100 -31 100 -60 0 -16
-11 -30 -35 -45 -69 -43 -153 -176 -199 -316 -42 -130 -128 -219 -211 -219
-64 0 -71 11 -54 87 23 102 18 286 -10 390 -42 154 -16 214 111 259 103 36
104 65 4 116 -58 29 -96 60 -96 80 0 7 -19 33 -43 58 l-44 45 -82 0 c-129 0
-195 -45 -271 -185 -24 -44 -67 -121 -96 -172 -66 -115 -103 -218 -146 -409
-32 -144 -33 -156 -33 -367 l0 -217 -27 0 c-52 0 -58 8 -58 73 0 33 4 74 9 91
6 17 18 94 27 170 15 118 15 148 5 200 -16 76 -53 169 -84 210 -39 50 -77 133
-77 165 0 22 8 37 30 53 36 27 37 38 5 68 -14 13 -34 48 -46 79 -24 66 -43 89
-86 107 -49 21 -84 17 -150 -16 -101 -50 -130 -101 -168 -290 -15 -74 -42
-175 -61 -225 -18 -49 -38 -114 -44 -143 -13 -58 -21 -59 -50 -2 -24 47 -133
159 -212 217 -39 29 -59 52 -63 70 -30 138 -116 223 -226 223 -64 0 -106 -26
-154 -95 -29 -43 -56 -68 -93 -88 -52 -28 -81 -62 -65 -77 4 -4 38 -17 75 -29
60 -20 68 -26 78 -57 10 -29 7 -50 -16 -142 -36 -136 -36 -220 0 -316 42 -111
117 -201 194 -231 28 -11 42 -23 42 -35 0 -18 -53 -70 -71 -70 -5 0 -26 -16
-48 -35 -47 -43 -102 -63 -195 -71 -39 -4 -79 -11 -88 -15 -9 -5 -19 -6 -21
-2 -8 13 89 181 120 208 l28 25 -57 -2 c-62 -2 -66 -6 -88 -86 -6 -24 -28 -58
-53 -85 -69 -70 -268 -180 -296 -163 -11 7 -47 198 -61 321 -68 615 187 1313
649 1776 464 463 1157 716 1779 648z m-664 -1760 c31 -15 65 -61 48 -67 -17
-5 -15 -32 3 -32 20 0 21 -156 1 -204 -20 -49 -72 -70 -154 -63 -69 7 -104 24
-123 58 -9 17 -8 24 2 30 11 8 11 12 -3 23 -15 11 -18 29 -18 99 0 104 12 134
65 159 44 21 130 19 179 -3z m815 -33 c34 -33 39 -46 16 -46 -8 0 -15 -4 -15
-10 0 -5 7 -10 15 -10 11 0 15 -12 17 -42 2 -67 -3 -131 -13 -150 -21 -39 -92
-55 -221 -50 l-48 2 0 171 0 171 109 -4 c106 -3 111 -4 140 -32z m894 2 c2 -7
1 -23 -4 -35 -7 -20 -15 -23 -64 -23 -48 0 -56 -3 -53 -17 2 -14 15 -19 56
-21 l53 -3 -3 -32 c-3 -33 -3 -34 -75 -36 -28 -1 -33 -5 -33 -26 0 -24 3 -25
59 -25 58 0 59 -1 63 -30 3 -16 0 -34 -6 -40 -15 -15 -201 -13 -214 3 -5 7 -8
63 -6 137 2 69 3 133 4 143 0 15 12 17 109 17 78 0 110 -4 114 -12z m-2451
-34 c13 -4 18 -16 18 -39 0 -29 -4 -34 -29 -40 -16 -3 -45 -3 -65 0 -32 7 -37
5 -46 -20 -13 -34 -13 -161 0 -186 9 -16 22 -19 76 -19 l65 0 -3 -37 -3 -36
-92 -1 c-78 -1 -96 2 -120 20 -43 32 -53 61 -53 153 0 68 3 86 18 97 14 11 14
15 3 23 -15 10 -4 38 24 61 24 20 168 37 207 24z m436 -447 c55 -52 59 -62 41
-99 -13 -30 -104 -65 -124 -48 -26 21 -39 69 -26 94 7 12 11 38 10 57 -1 19
-2 50 0 69 l2 35 22 -29 c12 -17 46 -52 75 -79z m1595 60 c23 -28 52 -50 81
-61 25 -10 46 -22 46 -28 0 -25 -42 -66 -74 -72 -20 -4 -61 -18 -92 -32 -73
-32 -196 -38 -234 -11 -13 9 -37 17 -51 17 -25 0 -79 47 -79 69 0 4 11 34 24
67 l24 59 81 2 c45 1 81 0 81 -2 0 -3 -12 -11 -27 -19 -43 -23 2 -20 54 3 23
11 43 15 45 10 2 -5 19 2 38 15 19 14 38 25 41 26 4 0 23 -20 42 -43z m451
-83 c16 -41 -69 -74 -204 -81 -105 -5 -128 3 -111 35 14 27 63 43 114 37 23
-3 69 1 102 9 82 18 92 18 99 0z m-1926 -87 c26 -28 20 -37 -25 -37 -33 0 -40
10 -27 44 9 22 27 20 52 -7z m-656 -93 l32 -16 -33 -14 c-43 -18 -60 -18 -67
1 -7 16 12 45 28 45 5 0 23 -7 40 -16z m776 -119 c50 -118 82 -249 81 -325 -1
-81 -21 -192 -34 -197 -5 -1 -21 13 -33 31 -13 19 -54 74 -91 121 -95 120
-197 312 -177 332 3 3 14 -5 25 -18 12 -14 20 -18 21 -11 0 7 5 10 12 6 13 -8
12 -7 -37 66 -20 29 -32 57 -28 61 12 12 60 16 148 15 l79 -1 34 -80z"
          />
          <path
            d="M2125 4393 c-14 -21 -25 -41 -25 -45 0 -5 92 -8 203 -8 l204 0 15 39
c9 22 13 42 10 45 -3 3 -90 6 -193 6 l-188 0 -26 -37z"
          />
          <path
            d="M2213 4303 c-3 -10 -51 -130 -106 -268 -54 -137 -102 -256 -104 -263
-4 -10 11 -12 68 -10 l73 3 107 265 c59 146 108 271 108 278 1 8 -19 12 -69
12 -58 0 -72 -3 -77 -17z"
          />
          <path
            d="M2373 4213 c-4 -10 -44 -112 -90 -227 -46 -116 -83 -214 -83 -218 0
-5 28 -8 62 -6 l62 3 39 98 c37 91 41 97 68 97 15 0 30 -3 32 -8 3 -4 -10 -45
-29 -91 -19 -47 -34 -88 -34 -93 0 -4 28 -8 63 -8 l62 0 90 227 c50 125 92
231 93 235 2 5 -26 8 -61 8 l-65 0 -38 -95 c-37 -93 -38 -95 -71 -95 -38 0
-39 4 -18 54 9 20 24 59 35 86 l20 50 -65 0 c-53 0 -67 -3 -72 -17z"
          />
          <path
            d="M2757 4222 c-4 -6 -96 -233 -168 -414 l-19 -48 123 0 123 0 17 35 c9
20 17 38 17 40 0 3 -25 5 -56 5 -63 0 -63 1 -29 83 15 37 16 37 74 37 57 0 59
1 70 31 16 47 15 49 -39 49 -57 0 -61 10 -32 70 16 34 19 35 78 38 58 3 61 4
72 36 7 18 12 35 12 39 0 10 -238 9 -243 -1z"
          />
          <path
            d="M2018 1136 c-16 -19 -28 -37 -28 -40 0 -4 54 -6 120 -6 92 0 122 -3
126 -14 6 -15 -44 -147 -60 -158 -19 -13 -66 -9 -66 5 0 8 11 41 25 75 14 34
25 64 25 67 0 3 -28 5 -63 5 l-63 0 -97 -243 c-53 -133 -97 -248 -97 -256 0
-10 29 -12 143 -9 117 2 147 6 169 21 33 23 113 214 105 254 -3 18 2 32 18 47
21 20 105 212 105 241 0 8 -7 21 -16 29 -13 13 -43 16 -167 16 l-152 0 -27
-34z m108 -311 c4 -8 -8 -51 -26 -95 -26 -64 -37 -81 -57 -86 -43 -11 -46 8
-13 92 18 43 36 85 42 92 14 17 47 15 54 -3z"
          />
          <path
            d="M2377 983 c-3 -5 -40 -96 -82 -203 -42 -107 -79 -201 -82 -207 -4
-10 11 -13 55 -13 l60 0 67 168 c37 92 76 188 86 215 l19 47 -60 0 c-32 0 -61
-3 -63 -7z"
          />
          <path
            d="M2462 785 c-45 -113 -82 -210 -82 -216 0 -6 22 -9 56 -7 l56 3 36 90
c30 72 42 91 60 93 34 5 35 -18 2 -97 -16 -41 -30 -78 -30 -83 0 -5 26 -8 57
-6 l57 3 33 85 c18 47 31 91 28 99 -3 7 1 19 9 25 17 13 76 150 76 175 0 35
-21 41 -150 41 l-126 0 -82 -205z m224 134 c11 -18 -18 -90 -43 -106 -13 -8
-30 -13 -38 -9 -13 5 -12 12 6 58 11 28 23 56 25 60 8 12 42 10 50 -3z"
          />
          <path
            d="M2885 981 c-7 -13 -165 -410 -165 -417 0 -3 60 -4 134 -2 113 2 137
6 154 21 11 11 53 99 92 198 59 147 70 182 60 194 -10 12 -39 15 -141 15 -70
0 -130 -4 -134 -9z m142 -62 c7 -7 -4 -47 -40 -137 -56 -145 -61 -152 -93
-152 -13 0 -24 6 -24 13 0 20 103 271 114 279 15 11 30 10 43 -3z"
          />
          <path
            d="M1930 2881 c-13 -25 -13 -151 0 -185 12 -31 35 -34 51 -5 16 32 8
187 -11 199 -22 14 -28 12 -40 -9z"
          />
          <path
            d="M2704 2873 c-3 -10 -10 -26 -16 -37 -6 -12 -6 -22 1 -29 6 -6 11 -35
11 -64 0 -50 2 -53 25 -53 13 0 29 8 34 18 11 21 9 151 -3 170 -11 18 -46 14
-52 -5z"
          />
          <path
            d="M2675 2690 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0
-7 -4 -4 -10z"
          />
        </g>
      </svg>
    </div>
  );
}
