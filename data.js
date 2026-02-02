// Celebrity Database with real MBTI, Blood Type, Zodiac, and Chinese Zodiac
const celebrityDatabase = {
    ko: [
        // BTS Members
        { name: "RM (김남준)", mbti: "ENFP", blood: "A", zodiac: "처녀자리", animal: "용띠", birth: "1994-09-12", description: "BTS 리더, 프로듀서, 래퍼. 지적이고 철학적인 사고를 가진 완벽주의자", image: "https://via.placeholder.com/200" },
        { name: "진 (김석진)", mbti: "INTP", blood: "O", zodiac: "사수자리", animal: "개띠", birth: "1992-12-04", description: "월드와이드 핸섬. 유머러스하고 따뜻한 성격의 소유자", image: "https://via.placeholder.com/200" },
        { name: "슈가 (민윤기)", mbti: "ISTP", blood: "O", zodiac: "물고기자리", animal: "개띠", birth: "1993-03-09", description: "프로듀서, 래퍼. 냉철하지만 따뜻한 내면을 가진 음악 천재", image: "https://via.placeholder.com/200" },
        { name: "제이홉 (정호석)", mbti: "ESFJ", blood: "A", zodiac: "물병자리", animal: "용띠", birth: "1994-02-18", description: "긍정 에너지의 화신. 춤과 랩의 올라운더", image: "https://via.placeholder.com/200" },
        { name: "지민 (박지민)", mbti: "ESTP", blood: "A", zodiac: "천칭자리", animal: "돼지띠", birth: "1995-10-13", description: "카리스마 넘치는 퍼포머. 완벽주의적 무대 장인", image: "https://via.placeholder.com/200" },
        { name: "뷔 (김태형)", mbti: "INFP", blood: "AB", zodiac: "염소자리", animal: "돼지띠", birth: "1995-12-30", description: "4차원 매력의 소유자. 예술적이고 독특한 감성", image: "https://via.placeholder.com/200" },
        { name: "정국 (전정국)", mbti: "INTP", blood: "A", zodiac: "처녀자리", animal: "양띠", birth: "1997-09-01", description: "황금막내. 모든 분야에서 뛰어난 재능", image: "https://via.placeholder.com/200" },
        
        // BLACKPINK
        { name: "지수 (김지수)", mbti: "ISTP", blood: "O", zodiac: "염소자리", animal: "돼지띠", birth: "1995-01-03", description: "블랙핑크 비주얼. 4차원 매력과 유머 감각", image: "https://via.placeholder.com/200" },
        { name: "제니 (김제니)", mbti: "ISFP", blood: "B", zodiac: "염소자리", animal: "개띠", birth: "1996-01-16", description: "인간 샤넬. 독보적인 패션 아이콘", image: "https://via.placeholder.com/200" },
        { name: "로제 (박채영)", mbti: "ESFJ", blood: "B", zodiac: "물병자리", animal: "양띠", birth: "1997-02-11", description: "메인 보컬. 감미로운 목소리의 소유자", image: "https://via.placeholder.com/200" },
        { name: "리사 (라리사 마노반)", mbti: "ESFP", blood: "O", zodiac: "양자리", animal: "양띠", birth: "1997-03-27", description: "춤신춤왕. 에너지 넘치는 퍼포머", image: "https://via.placeholder.com/200" },
        
        // K-POP Artists
        { name: "아이유 (이지은)", mbti: "INFP", blood: "A", zodiac: "황소자리", animal: "개띠", birth: "1993-05-16", description: "국민 여동생. 싱어송라이터, 배우로 다방면 활약", image: "https://via.placeholder.com/200" },
        { name: "태연 (김태연)", mbti: "ISFJ", blood: "A", zodiac: "사자자리", animal: "쥐띠", birth: "1989-03-09", description: "소녀시대 리더. 파워풀한 보컬의 대표주자", image: "https://via.placeholder.com/200" },
        { name: "강다니엘", mbti: "ENFJ", blood: "A", zodiac: "사수자리", animal: "개띠", birth: "1996-12-10", description: "워너원 센터. 귀여운 외모와 카리스마의 갭차이", image: "https://via.placeholder.com/200" },
        { name: "카리나 (유지민)", mbti: "ESTJ", blood: "O", zodiac: "양자리", animal: "개띠", birth: "2000-04-11", description: "에스파 리더. 완벽한 비주얼과 실력", image: "https://via.placeholder.com/200" },
        
        // Actors/Actresses
        { name: "박서준", mbti: "ISFJ", blood: "AB", zodiac: "사수자리", animal: "쥐띠", birth: "1988-12-16", description: "믿고 보는 배우. 로맨틱 코미디의 강자", image: "https://via.placeholder.com/200" },
        { name: "손예진", mbti: "INFP", blood: "A", zodiac: "염소자리", animal: "개띠", birth: "1982-01-11", description: "청순 미모의 대표 배우. 로맨스 장르 전문가", image: "https://via.placeholder.com/200" },
        { name: "현빈 (김태평)", mbti: "ISTJ", blood: "AB", zodiac: "처녀자리", animal: "개띠", birth: "1982-09-25", description: "국민 배우. 믿음직한 연기력", image: "https://via.placeholder.com/200" },
        { name: "송중기", mbti: "ESFJ", blood: "A", zodiac: "염소자리", animal: "소띠", birth: "1985-09-19", description: "송송 커플. 훈남 배우의 대명사", image: "https://via.placeholder.com/200" },
        { name: "전지현", mbti: "ESFP", blood: "B", zodiac: "천칭자리", animal: "개띠", birth: "1981-10-30", description: "영원한 미녀. 코미디와 멜로 모두 완벽", image: "https://via.placeholder.com/200" },
        { name: "공유", mbti: "INFJ", blood: "O", zodiac: "쌍둥이자리", animal: "소띠", birth: "1979-07-10", description: "도깨비. 부드러운 카리스마의 소유자", image: "https://via.placeholder.com/200" },
        
        // Athletes
        { name: "손흥민", mbti: "ISFP", blood: "O", zodiac: "게자리", animal: "개띠", birth: "1992-07-08", description: "토트넘의 영웅. 겸손하고 성실한 축구 선수", image: "https://via.placeholder.com/200" },
        { name: "김연아", mbti: "ISTJ", blood: "A", zodiac: "처녀자리", animal: "쥐띠", birth: "1990-09-05", description: "피겨 여왕. 완벽주의의 아이콘", image: "https://via.placeholder.com/200" },
        { name: "박지성", mbti: "ISFJ", blood: "O", zodiac: "물병자리", animal: "개띠", birth: "1981-02-25", description: "맨유 레전드. 끈기와 열정의 대명사", image: "https://via.placeholder.com/200" },
        
        // Comedians/Entertainers
        { name: "유재석", mbti: "ENFJ", blood: "A", zodiac: "사자자리", animal: "개띠", birth: "1972-08-14", description: "국민 MC. 따뜻하고 배려심 넘치는 리더십", image: "https://via.placeholder.com/200" },
        { name: "강호동", mbti: "ESTJ", blood: "A", zodiac: "천칭자리", animal: "원숭이띠", birth: "1970-06-11", description: "씨름 영웅에서 예능 대부로", image: "https://via.placeholder.com/200" },
        { name: "박나래", mbti: "ENFP", blood: "B", zodiac: "천칭자리", animal: "개띠", birth: "1981-10-25", description: "솔직하고 발랄한 나래바", image: "https://via.placeholder.com/200" },
        
        // K-Drama Stars
        { name: "김수현", mbti: "INFJ", blood: "AB", zodiac: "물병자리", animal: "쥐띠", birth: "1988-02-16", description: "별그대 도민준. 신비로운 매력", image: "https://via.placeholder.com/200" },
        { name: "이민호", mbti: "ISTJ", blood: "A", zodiac: "게자리", animal: "소띠", birth: "1987-06-22", description: "한류 스타. 완벽한 외모와 연기력", image: "https://via.placeholder.com/200" },
        { name: "박민영", mbti: "ISFP", blood: "O", zodiac: "사자자리", animal: "쥐띠", birth: "1986-03-04", description: "로맨스 퀸. 사랑스러운 연기", image: "https://via.placeholder.com/200" },
        { name: "정해인", mbti: "INFP", blood: "B", zodiac: "양자리", animal: "쥐띠", birth: "1988-04-01", description: "밥잘사. 순수하고 따뜻한 이미지", image: "https://via.placeholder.com/200" },
        { name: "김고은", mbti: "ENFP", blood: "A", zodiac: "게자리", animal: "토끼띠", birth: "1991-07-02", description: "도깨비 신부. 자유로운 영혼", image: "https://via.placeholder.com/200" },
        
        // Singers
        { name: "싸이 (박재상)", mbti: "ENTP", blood: "O", zodiac: "염소자리", animal: "말띠", birth: "1977-12-31", description: "강남스타일. 글로벌 아티스트", image: "https://via.placeholder.com/200" },
        { name: "백예린", mbti: "INFP", blood: "AB", zodiac: "쌍둥이자리", animal: "말띠", birth: "1997-06-26", description: "감성 싱어송라이터. 독보적 음악 세계", image: "https://via.placeholder.com/200" },
        { name: "헤이즈 (정다경)", mbti: "INFP", blood: "B", zodiac: "사자자리", animal: "닭띠", birth: "1991-01-07", description: "허스키한 목소리. 감성 발라드 장인", image: "https://via.placeholder.com/200" },
        
        // More Recent Stars
        { name: "차은우", mbti: "ISTP", blood: "B", zodiac: "양자리", animal: "양띠", birth: "1997-03-30", description: "아스트로 비주얼. 만화 주인공 같은 외모", image: "https://via.placeholder.com/200" },
        { name: "안유진", mbti: "ENTJ", blood: "O", zodiac: "처녀자리", animal: "토끼띠", birth: "2003-09-01", description: "IVE 리더. 완벽한 실력과 비주얼", image: "https://via.placeholder.com/200" },
        { name: "장원영", mbti: "ENFJ", blood: "AB", zodiac: "사자자리", animal: "용띠", birth: "2004-08-31", description: "IVE 센터. 청순 청아 그 자체", image: "https://via.placeholder.com/200" },
        { name: "송강", mbti: "ISFP", blood: "A", zodiac: "양자리", animal: "용띠", birth: "1994-04-23", description: "모델 출신 배우. 훈훈한 외모", image: "https://via.placeholder.com/200" },
        { name: "한소희", mbti: "ISFP", blood: "A", zodiac: "쌍둥이자리", animal: "용띠", birth: "1994-11-18", description: "파격 연기 변신. 강렬한 매력", image: "https://via.placeholder.com/200" }
    ],
    
    en: [
        // Actors
        { name: "Tom Holland", mbti: "ENFP", blood: "O", zodiac: "Gemini", animal: "Dog", birth: "1996-06-01", description: "Spider-Man. Energetic and charismatic British actor", image: "https://via.placeholder.com/200" },
        { name: "Zendaya", mbti: "ENFJ", blood: "A", zodiac: "Virgo", animal: "Rabbit", birth: "1996-09-01", description: "Emmy winner. Fashion icon and talented actress", image: "https://via.placeholder.com/200" },
        { name: "Timothée Chalamet", mbti: "INFP", blood: "AB", zodiac: "Capricorn", animal: "Pig", birth: "1995-12-27", description: "Dune star. Artistic and sensitive performer", image: "https://via.placeholder.com/200" },
        { name: "Florence Pugh", mbti: "ESFP", blood: "B", zodiac: "Capricorn", animal: "Rabbit", birth: "1996-01-03", description: "Black Widow. Bold and fearless actress", image: "https://via.placeholder.com/200" },
        { name: "Chris Hemsworth", mbti: "ESTP", blood: "O", zodiac: "Leo", animal: "Goat", birth: "1983-08-11", description: "Thor. Charismatic Australian action star", image: "https://via.placeholder.com/200" },
        { name: "Scarlett Johansson", mbti: "ISTP", blood: "A", zodiac: "Sagittarius", animal: "Rat", birth: "1984-11-22", description: "Black Widow. Versatile and talented actress", image: "https://via.placeholder.com/200" },
        { name: "Ryan Reynolds", mbti: "ENTP", blood: "O", zodiac: "Scorpio", animal: "Dog", birth: "1976-10-23", description: "Deadpool. Witty and humorous actor", image: "https://via.placeholder.com/200" },
        { name: "Emma Watson", mbti: "ISFJ", blood: "A", zodiac: "Aries", animal: "Rat", birth: "1990-04-15", description: "Hermione. Intelligent and activist actress", image: "https://via.placeholder.com/200" },
        { name: "Robert Downey Jr.", mbti: "ENTP", blood: "AB", zodiac: "Aries", animal: "Snake", birth: "1965-04-04", description: "Iron Man. Genius billionaire playboy philanthropist", image: "https://via.placeholder.com/200" },
        { name: "Margot Robbie", mbti: "ESFJ", blood: "B", zodiac: "Cancer", animal: "Rat", birth: "1990-07-02", description: "Harley Quinn. Australian beauty and talent", image: "https://via.placeholder.com/200" },
        
        // Musicians
        { name: "Taylor Swift", mbti: "ESFJ", blood: "O", zodiac: "Sagittarius", animal: "Rooster", birth: "1989-12-13", description: "Pop icon. Master storyteller and songwriter", image: "https://via.placeholder.com/200" },
        { name: "Ariana Grande", mbti: "ESFJ", blood: "O", zodiac: "Cancer", animal: "Dog", birth: "1993-06-26", description: "Powerhouse vocalist. Pop and R&B sensation", image: "https://via.placeholder.com/200" },
        { name: "Billie Eilish", mbti: "ISFP", blood: "A", zodiac: "Sagittarius", animal: "Ox", birth: "2001-12-18", description: "Alternative pop star. Unique and haunting voice", image: "https://via.placeholder.com/200" },
        { name: "Shawn Mendes", mbti: "ISFJ", blood: "A", zodiac: "Leo", animal: "Dog", birth: "1998-08-08", description: "Canadian heartthrob. Soulful singer-songwriter", image: "https://via.placeholder.com/200" },
        { name: "Ed Sheeran", mbti: "ISFJ", blood: "O", zodiac: "Aquarius", animal: "Goat", birth: "1991-02-17", description: "Shape of You. Talented guitarist and singer", image: "https://via.placeholder.com/200" },
        { name: "Dua Lipa", mbti: "ESFP", blood: "B", zodiac: "Leo", animal: "Pig", birth: "1995-08-22", description: "Future Nostalgia. British pop sensation", image: "https://via.placeholder.com/200" },
        { name: "The Weeknd", mbti: "ISFP", blood: "AB", zodiac: "Aquarius", animal: "Rat", birth: "1990-02-16", description: "Blinding Lights. R&B and pop innovator", image: "https://via.placeholder.com/200" },
        { name: "Selena Gomez", mbti: "ISFJ", blood: "A", zodiac: "Cancer", animal: "Dog", birth: "1992-07-22", description: "Multi-talented. Singer, actress, and producer", image: "https://via.placeholder.com/200" },
        
        // Athletes
        { name: "Cristiano Ronaldo", mbti: "ESFP", blood: "O", zodiac: "Aquarius", animal: "Snake", birth: "1985-02-05", description: "CR7. Legendary football superstar", image: "https://via.placeholder.com/200" },
        { name: "LeBron James", mbti: "ESFJ", blood: "O", zodiac: "Capricorn", animal: "Rat", birth: "1984-12-30", description: "King James. Basketball icon and leader", image: "https://via.placeholder.com/200" },
        { name: "Serena Williams", mbti: "ESTP", blood: "A", zodiac: "Virgo", animal: "Dog", birth: "1981-09-26", description: "Tennis legend. Powerful and dominant athlete", image: "https://via.placeholder.com/200" },
        { name: "Simone Biles", mbti: "ESFP", blood: "O", zodiac: "Pisces", animal: "Ox", birth: "1997-03-14", description: "Gymnastics GOAT. Most decorated gymnast", image: "https://via.placeholder.com/200" },
        
        // Marvel Stars
        { name: "Chris Evans", mbti: "ISFJ", blood: "A", zodiac: "Gemini", animal: "Dog", birth: "1981-06-13", description: "Captain America. Wholesome and kind-hearted", image: "https://via.placeholder.com/200" },
        { name: "Tom Hiddleston", mbti: "INFJ", blood: "AB", zodiac: "Aquarius", animal: "Dog", birth: "1981-02-09", description: "Loki. Charming and sophisticated British actor", image: "https://via.placeholder.com/200" },
        { name: "Elizabeth Olsen", mbti: "INFJ", blood: "A", zodiac: "Aquarius", animal: "Rooster", birth: "1989-02-16", description: "Wanda Maximoff. Mysterious and powerful", image: "https://via.placeholder.com/200" },
        { name: "Benedict Cumberbatch", mbti: "INFJ", blood: "AB", zodiac: "Cancer", animal: "Dog", birth: "1976-07-19", description: "Doctor Strange. Brilliant and eccentric", image: "https://via.placeholder.com/200" },
        
        // TV Stars
        { name: "Millie Bobby Brown", mbti: "ESFJ", blood: "B", zodiac: "Pisces", animal: "Rat", birth: "2004-02-19", description: "Eleven. Young talent from Stranger Things", image: "https://via.placeholder.com/200" },
        { name: "Noah Schnapp", mbti: "ENFP", blood: "O", zodiac: "Libra", animal: "Rat", birth: "2004-10-03", description: "Will Byers. Talented young actor", image: "https://via.placeholder.com/200" },
        { name: "Jenna Ortega", mbti: "INTJ", blood: "A", zodiac: "Libra", animal: "Ox", birth: "2002-09-27", description: "Wednesday Addams. Dark and intense performer", image: "https://via.placeholder.com/200" },
        
        // Comedians
        { name: "Kevin Hart", mbti: "ESTP", blood: "O", zodiac: "Cancer", animal: "Horse", birth: "1979-07-06", description: "Stand-up legend. High-energy comedian", image: "https://via.placeholder.com/200" },
        { name: "Amy Schumer", mbti: "ENFP", blood: "B", zodiac: "Gemini", animal: "Dog", birth: "1981-06-01", description: "Bold comedian. Fearless and hilarious", image: "https://via.placeholder.com/200" },
        
        // Influencers/YouTubers
        { name: "Emma Chamberlain", mbti: "ENFP", blood: "O", zodiac: "Gemini", animal: "Ox", birth: "2001-05-22", description: "YouTube star. Authentic and relatable influencer", image: "https://via.placeholder.com/200" },
        { name: "Charli D'Amelio", mbti: "ISFP", blood: "A", zodiac: "Taurus", animal: "Rat", birth: "2004-05-01", description: "TikTok queen. Most followed on TikTok", image: "https://via.placeholder.com/200" },
        
        // Directors/Creators
        { name: "Christopher Nolan", mbti: "INTJ", blood: "AB", zodiac: "Leo", animal: "Dog", birth: "1970-07-30", description: "Visionary director. Master of complex narratives", image: "https://via.placeholder.com/200" },
        { name: "Greta Gerwig", mbti: "ENFP", blood: "B", zodiac: "Leo", animal: "Goat", birth: "1983-08-04", description: "Barbie director. Indie film darling", image: "https://via.placeholder.com/200" },
        
        // More Pop Culture Icons
        { name: "Dwayne Johnson", mbti: "ESTP", blood: "O", zodiac: "Taurus", animal: "Dragon", birth: "1972-05-02", description: "The Rock. Action star and wrestler", image: "https://via.placeholder.com/200" },
        { name: "Zac Efron", mbti: "ESFP", blood: "B", zodiac: "Libra", animal: "Goat", birth: "1987-10-18", description: "High School Musical. Charming heartthrob", image: "https://via.placeholder.com/200" },
        { name: "Jennifer Lawrence", mbti: "ENFJ", blood: "A", zodiac: "Leo", animal: "Rat", birth: "1990-08-15", description: "Katniss. Down-to-earth Oscar winner", image: "https://via.placeholder.com/200" },
        { name: "Harry Styles", mbti: "ENFJ", blood: "B", zodiac: "Aquarius", animal: "Dragon", birth: "1994-02-01", description: "One Direction. Fashion icon and musician", image: "https://via.placeholder.com/200" }
    ]
};

// MBTI Descriptions
const mbtiDescriptions = {
    ko: {
        INTJ: { title: "전략가", subtitle: "용의주도한 전략가", description: "상상력이 풍부하고 전략적인 사고를 하는 계획가. 모든 것에 대한 계획을 세우고 목표를 향해 나아갑니다." },
        INTP: { title: "논리술사", subtitle: "논리적인 사색가", description: "지식에 대한 끊임없는 갈증을 가진 혁신적인 발명가. 철학적이고 분석적인 사고의 소유자입니다." },
        ENTJ: { title: "통솔자", subtitle: "대담한 지도자", description: "카리스마 넘치는 리더십과 목표 지향적 성격. 어떤 장애물도 극복하며 목표를 달성합니다." },
        ENTP: { title: "변론가", subtitle: "뜨거운 논쟁을 즐기는 변론가", description: "창의적이고 지적 호기심이 많은 도전자. 새로운 아이디어와 토론을 즐깁니다." },
        INFJ: { title: "옹호자", subtitle: "선의의 옹호자", description: "이상주의적이고 원칙주의적인 성격. 세상을 더 나은 곳으로 만들고자 하는 열망을 가졌습니다." },
        INFP: { title: "중재자", subtitle: "이상주의적 몽상가", description: "감수성이 풍부하고 창의적인 예술가 기질. 자신만의 세계관과 가치관을 소중히 여깁니다." },
        ENFJ: { title: "선도자", subtitle: "카리스마 넘치는 지도자", description: "따뜻하고 공감능력이 뛰어난 천성적 리더. 사람들에게 영감을 주고 이끌어갑니다." },
        ENFP: { title: "활동가", subtitle: "자유로운 영혼의 활동가", description: "열정적이고 창의적인 사회성 좋은 자유인. 새로운 가능성과 인간관계를 소중히 여깁니다." },
        ISTJ: { title: "현실주의자", subtitle: "실용적인 현실주의자", description: "책임감이 강하고 신뢰할 수 있는 조직가. 전통과 질서를 중요시하며 꼼꼼합니다." },
        ISFJ: { title: "수호자", subtitle: "헌신적인 수호자", description: "따뜻하고 배려심 많은 보호자. 다른 사람을 돌보는 것에서 기쁨을 느낍니다." },
        ESTJ: { title: "경영자", subtitle: "엄격한 관리자", description: "실용적이고 체계적인 관리자. 규칙과 전통을 존중하며 효율적으로 일을 처리합니다." },
        ESFJ: { title: "집정관", subtitle: "사교적인 외교관", description: "배려심 많고 사교적인 협력자. 조화로운 환경을 만들고 사람들을 돕는 것을 좋아합니다." },
        ISTP: { title: "장인", subtitle: "만능 재주꾼", description: "대담하고 실용적인 실험가. 손으로 직접 만지며 문제를 해결하는 것을 선호합니다." },
        ISFP: { title: "모험가", subtitle: "호기심 많은 예술가", description: "유연하고 매력적인 예술가. 새로운 경험을 탐구하고 자신을 표현하는 것을 즐깁니다." },
        ESTP: { title: "사업가", subtitle: "모험을 즐기는 사업가", description: "똑똑하고 에너지 넘치는 행동가. 위험을 감수하며 순간을 즐기는 것을 좋아합니다." },
        ESFP: { title: "연예인", subtitle: "자유로운 영혼의 연예인", description: "즉흥적이고 열정적인 엔터테이너. 주변 사람들에게 즐거움을 주는 것을 좋아합니다." }
    },
    en: {
        INTJ: { title: "Architect", subtitle: "Imaginative and strategic", description: "Strategic thinker with vivid imagination. Plans everything and moves toward goals with precision." },
        INTP: { title: "Logician", subtitle: "Innovative inventor", description: "Innovative thinker with thirst for knowledge. Philosophical and analytical mind." },
        ENTJ: { title: "Commander", subtitle: "Bold leader", description: "Charismatic leadership with goal-oriented personality. Overcomes any obstacle." },
        ENTP: { title: "Debater", subtitle: "Smart and curious", description: "Creative and intellectually curious challenger. Enjoys new ideas and debates." },
        INFJ: { title: "Advocate", subtitle: "Idealistic advocate", description: "Idealistic and principled. Aspires to make the world a better place." },
        INFP: { title: "Mediator", subtitle: "Poetic idealist", description: "Sensitive and creative artist. Cherishes own worldview and values." },
        ENFJ: { title: "Protagonist", subtitle: "Charismatic leader", description: "Warm and empathetic natural leader. Inspires and guides people." },
        ENFP: { title: "Campaigner", subtitle: "Free spirit", description: "Passionate and creative social butterfly. Values new possibilities and relationships." },
        ISTJ: { title: "Logistician", subtitle: "Practical realist", description: "Responsible and reliable organizer. Values tradition and order." },
        ISFJ: { title: "Defender", subtitle: "Devoted protector", description: "Warm and caring guardian. Finds joy in caring for others." },
        ESTJ: { title: "Executive", subtitle: "Excellent manager", description: "Practical and systematic manager. Respects rules and handles work efficiently." },
        ESFJ: { title: "Consul", subtitle: "Social diplomat", description: "Caring and social cooperator. Creates harmonious environment and helps people." },
        ISTP: { title: "Virtuoso", subtitle: "Bold experimenter", description: "Bold and practical experimenter. Prefers hands-on problem solving." },
        ISFP: { title: "Adventurer", subtitle: "Curious artist", description: "Flexible and charming artist. Enjoys exploring new experiences." },
        ESTP: { title: "Entrepreneur", subtitle: "Smart energizer", description: "Smart and energetic action-taker. Takes risks and enjoys the moment." },
        ESFP: { title: "Entertainer", subtitle: "Spontaneous entertainer", description: "Spontaneous and passionate entertainer. Loves bringing joy to others." }
    }
};

// Blood Type Descriptions
const bloodTypeDescriptions = {
    ko: {
        A: { title: "완벽주의자", description: "신중하고 조직적이며 책임감이 강합니다. 세심하고 배려심이 많아 주변 사람들에게 신뢰를 받습니다." },
        B: { title: "자유로운 영혼", description: "창의적이고 독립적이며 열정적입니다. 자유분방하고 독창적인 사고를 가지고 있습니다." },
        O: { title: "리더십", description: "자신감 넘치고 사교적이며 낙관적입니다. 타고난 리더십으로 사람들을 이끄는 능력이 뛰어납니다." },
        AB: { title: "신비주의자", description: "복잡하고 신비로우며 예술적입니다. A형과 B형의 특성을 모두 가진 독특한 성격입니다." }
    },
    en: {
        A: { title: "Perfectionist", description: "Careful, organized, and responsible. Detail-oriented and considerate, earning trust from others." },
        B: { title: "Free Spirit", description: "Creative, independent, and passionate. Free-spirited with original thinking." },
        O: { title: "Leader", description: "Confident, social, and optimistic. Natural leadership ability to guide people." },
        AB: { title: "Mysterious", description: "Complex, mysterious, and artistic. Unique personality with traits of both A and B types." }
    }
};

// Zodiac Descriptions
const zodiacDescriptions = {
    ko: {
        "양자리": { emoji: "♈", description: "열정적이고 용감한 개척자. 도전을 즐기며 리더십이 강합니다." },
        "황소자리": { emoji: "♉", description: "인내심 강하고 신뢰할 수 있는 안정 추구자. 예술적 감각이 뛰어납니다." },
        "쌍둥이자리": { emoji: "♊", description: "호기심 많고 적응력이 뛰어난 소통의 달인. 재치 있고 사교적입니다." },
        "게자리": { emoji: "♋", description: "감성적이고 보호본능이 강한 가정적인 성격. 직관력이 뛰어납니다." },
        "사자자리": { emoji: "♌", description: "자신감 넘치고 관대한 타고난 리더. 창의적이고 열정적입니다." },
        "처녀자리": { emoji: "♍", description: "분석적이고 완벽주의적인 실용주의자. 세심하고 효율적입니다." },
        "천칭자리": { emoji: "♎", description: "조화롭고 공정한 외교가. 사교적이고 미적 감각이 뛰어납니다." },
        "전갈자리": { emoji: "♏", description: "열정적이고 신비로운 강렬한 성격. 통찰력이 뛰어나고 집중력이 강합니다." },
        "사수자리": { emoji: "♐", description: "낙천적이고 모험을 즐기는 자유로운 영혼. 철학적이고 진실됩니다." },
        "염소자리": { emoji: "♑", description: "야심차고 책임감 강한 목표 지향적 성격. 인내심과 끈기가 있습니다." },
        "물병자리": { emoji: "♒", description: "독창적이고 진보적인 혁신가. 인도주의적이고 지적입니다." },
        "물고기자리": { emoji: "♓", description: "감수성이 풍부하고 직관적인 꿈꾸는 예술가. 공감능력이 뛰어납니다." }
    },
    en: {
        "Aries": { emoji: "♈", description: "Passionate and brave pioneer. Enjoys challenges with strong leadership." },
        "Taurus": { emoji: "♉", description: "Patient and reliable stability seeker. Excellent artistic sense." },
        "Gemini": { emoji: "♊", description: "Curious and adaptable communication master. Witty and social." },
        "Cancer": { emoji: "♋", description: "Emotional with strong protective instinct. Family-oriented with great intuition." },
        "Leo": { emoji: "♌", description: "Confident and generous natural leader. Creative and passionate." },
        "Virgo": { emoji: "♍", description: "Analytical perfectionist pragmatist. Detail-oriented and efficient." },
        "Libra": { emoji: "♎", description: "Harmonious and fair diplomat. Social with excellent aesthetic sense." },
        "Scorpio": { emoji: "♏", description: "Passionate and mysterious intense personality. Great insight and concentration." },
        "Sagittarius": { emoji: "♐", description: "Optimistic adventurer with free spirit. Philosophical and truthful." },
        "Capricorn": { emoji: "♑", description: "Ambitious and responsible goal-oriented. Patient and persistent." },
        "Aquarius": { emoji: "♒", description: "Original and progressive innovator. Humanitarian and intellectual." },
        "Pisces": { emoji: "♓", description: "Sensitive and intuitive dreamy artist. Great empathy." }
    }
};

// Chinese Zodiac Descriptions
const chineseZodiacDescriptions = {
    ko: {
        "쥐띠": { emoji: "🐭", description: "재치 있고 영리하며 적응력이 뛰어납니다. 사교적이고 야망이 있습니다." },
        "소띠": { emoji: "🐮", description: "성실하고 끈기 있으며 신뢰할 수 있습니다. 인내심이 강하고 책임감이 있습니다." },
        "호랑이띠": { emoji: "🐯", description: "용감하고 자신감 넘치며 경쟁심이 강합니다. 카리스마가 있고 모험을 즐깁니다." },
        "토끼띠": { emoji: "🐰", description: "온화하고 세심하며 예의 바릅니다. 평화를 사랑하고 예술적 감각이 뛰어납니다." },
        "용띠": { emoji: "🐲", description: "자신감 넘치고 열정적이며 카리스마가 있습니다. 타고난 리더십의 소유자입니다." },
        "뱀띠": { emoji: "🐍", description: "지혜롭고 신비로우며 직관력이 뛰어납니다. 사려 깊고 분석적입니다." },
        "말띠": { emoji: "🐴", description: "활발하고 자유로우며 에너지가 넘칩니다. 사교적이고 독립적입니다." },
        "양띠": { emoji: "🐑", description: "온순하고 창의적이며 공감능력이 뛰어납니다. 예술적이고 평화를 추구합니다." },
        "원숭이띠": { emoji: "🐵", description: "똑똑하고 재치 있으며 호기심이 많습니다. 유머 감각이 뛰어나고 사교적입니다." },
        "닭띠": { emoji: "🐔", description: "성실하고 정직하며 완벽주의적입니다. 관찰력이 뛰어나고 신뢰할 수 있습니다." },
        "개띠": { emoji: "🐶", description: "충직하고 정직하며 책임감이 강합니다. 신의가 있고 정의로운 성격입니다." },
        "돼지띠": { emoji: "🐷", description: "관대하고 성실하며 낙천적입니다. 사교적이고 행운을 가져다줍니다." }
    },
    en: {
        "Rat": { emoji: "🐭", description: "Witty, intelligent, and highly adaptable. Social and ambitious." },
        "Ox": { emoji: "🐮", description: "Diligent, persistent, and reliable. Patient and responsible." },
        "Tiger": { emoji: "🐯", description: "Brave, confident, and competitive. Charismatic adventurer." },
        "Rabbit": { emoji: "🐰", description: "Gentle, careful, and polite. Peace-loving with artistic sense." },
        "Dragon": { emoji: "🐲", description: "Confident, passionate, and charismatic. Natural born leader." },
        "Snake": { emoji: "🐍", description: "Wise, mysterious, and intuitive. Thoughtful and analytical." },
        "Horse": { emoji: "🐴", description: "Active, free, and energetic. Social and independent." },
        "Goat": { emoji: "🐑", description: "Gentle, creative, and empathetic. Artistic peace-seeker." },
        "Monkey": { emoji: "🐵", description: "Smart, witty, and curious. Great sense of humor and social." },
        "Rooster": { emoji: "🐔", description: "Diligent, honest, and perfectionist. Observant and reliable." },
        "Dog": { emoji: "🐶", description: "Loyal, honest, and responsible. Faithful with strong justice." },
        "Pig": { emoji: "🐷", description: "Generous, diligent, and optimistic. Social and brings good fortune." }
    }
};

// Career Recommendations
const careerRecommendations = {
    INTJ: {
        ko: [
            { icon: "💻", title: "소프트웨어 아키텍트", description: "복잡한 시스템 설계와 전략적 사고가 필요한 분야", rate: "95%" },
            { icon: "🔬", title: "과학자/연구원", description: "독립적 연구와 혁신적 아이디어 개발", rate: "92%" },
            { icon: "📊", title: "전략 컨설턴트", description: "비즈니스 전략 수립과 문제 해결", rate: "88%" }
        ],
        en: [
            { icon: "💻", title: "Software Architect", description: "Complex system design requiring strategic thinking", rate: "95%" },
            { icon: "🔬", title: "Scientist/Researcher", description: "Independent research and innovative idea development", rate: "92%" },
            { icon: "📊", title: "Strategy Consultant", description: "Business strategy and problem solving", rate: "88%" }
        ]
    },
    INTP: {
        ko: [
            { icon: "🔬", title: "데이터 과학자", description: "데이터 분석과 논리적 추론", rate: "93%" },
            { icon: "💡", title: "발명가/혁신가", description: "새로운 아이디어와 기술 개발", rate: "90%" },
            { icon: "🎓", title: "대학교수", description: "학문적 연구와 지식 전달", rate: "87%" }
        ],
        en: [
            { icon: "🔬", title: "Data Scientist", description: "Data analysis and logical reasoning", rate: "93%" },
            { icon: "💡", title: "Inventor/Innovator", description: "New ideas and technology development", rate: "90%" },
            { icon: "🎓", title: "Professor", description: "Academic research and knowledge sharing", rate: "87%" }
        ]
    },
    ENTJ: {
        ko: [
            { icon: "👔", title: "CEO/경영자", description: "조직 리더십과 전략적 의사결정", rate: "96%" },
            { icon: "⚖️", title: "변호사", description: "논리적 분석과 설득력 있는 주장", rate: "91%" },
            { icon: "💼", title: "투자 은행가", description: "금융 전략과 비즈니스 분석", rate: "89%" }
        ],
        en: [
            { icon: "👔", title: "CEO/Executive", description: "Organizational leadership and strategic decisions", rate: "96%" },
            { icon: "⚖️", title: "Lawyer", description: "Logical analysis and persuasive arguments", rate: "91%" },
            { icon: "💼", title: "Investment Banker", description: "Financial strategy and business analysis", rate: "89%" }
        ]
    },
    ENTP: {
        ko: [
            { icon: "🚀", title: "스타트업 창업가", description: "혁신적 비즈니스 모델 개발", rate: "94%" },
            { icon: "🎬", title: "크리에이티브 디렉터", description: "창의적 아이디어와 전략 기획", rate: "90%" },
            { icon: "📱", title: "제품 매니저", description: "혁신적 제품 개발과 전략", rate: "88%" }
        ],
        en: [
            { icon: "🚀", title: "Startup Founder", description: "Innovative business model development", rate: "94%" },
            { icon: "🎬", title: "Creative Director", description: "Creative ideas and strategic planning", rate: "90%" },
            { icon: "📱", title: "Product Manager", description: "Innovative product development", rate: "88%" }
        ]
    },
    INFJ: {
        ko: [
            { icon: "🧠", title: "심리상담사", description: "깊은 공감과 통찰력 활용", rate: "95%" },
            { icon: "✍️", title: "작가/저널리스트", description: "의미 있는 메시지 전달", rate: "91%" },
            { icon: "🎨", title: "예술 치료사", description: "창의성과 치유의 결합", rate: "87%" }
        ],
        en: [
            { icon: "🧠", title: "Psychologist", description: "Deep empathy and insight utilization", rate: "95%" },
            { icon: "✍️", title: "Writer/Journalist", description: "Delivering meaningful messages", rate: "91%" },
            { icon: "🎨", title: "Art Therapist", description: "Combining creativity and healing", rate: "87%" }
        ]
    },
    INFP: {
        ko: [
            { icon: "🎨", title: "예술가/디자이너", description: "창의적 표현과 미적 감각", rate: "93%" },
            { icon: "📚", title: "소설가/시인", description: "감성적 스토리텔링", rate: "90%" },
            { icon: "🌱", title: "사회복지사", description: "이상주의와 봉사정신", rate: "86%" }
        ],
        en: [
            { icon: "🎨", title: "Artist/Designer", description: "Creative expression and aesthetic sense", rate: "93%" },
            { icon: "📚", title: "Novelist/Poet", description: "Emotional storytelling", rate: "90%" },
            { icon: "🌱", title: "Social Worker", description: "Idealism and service spirit", rate: "86%" }
        ]
    },
    ENFJ: {
        ko: [
            { icon: "👨‍🏫", title: "교사/교육자", description: "사람들에게 영감을 주는 리더십", rate: "95%" },
            { icon: "🎤", title: "HR 매니저", description: "인재 육성과 조직 문화 형성", rate: "92%" },
            { icon: "💬", title: "코치/멘토", description: "개인 성장과 발전 지원", rate: "89%" }
        ],
        en: [
            { icon: "👨‍🏫", title: "Teacher/Educator", description: "Inspiring leadership for people", rate: "95%" },
            { icon: "🎤", title: "HR Manager", description: "Talent development and culture building", rate: "92%" },
            { icon: "💬", title: "Coach/Mentor", description: "Supporting personal growth", rate: "89%" }
        ]
    },
    ENFP: {
        ko: [
            { icon: "🎭", title: "배우/엔터테이너", description: "창의적 표현과 에너지", rate: "94%" },
            { icon: "📢", title: "마케팅 전문가", description: "창의적 캠페인과 트렌드 분석", rate: "91%" },
            { icon: "✈️", title: "여행 작가", description: "자유로운 탐험과 스토리텔링", rate: "88%" }
        ],
        en: [
            { icon: "🎭", title: "Actor/Entertainer", description: "Creative expression and energy", rate: "94%" },
            { icon: "📢", title: "Marketing Specialist", description: "Creative campaigns and trend analysis", rate: "91%" },
            { icon: "✈️", title: "Travel Writer", description: "Free exploration and storytelling", rate: "88%" }
        ]
    },
    ISTJ: {
        ko: [
            { icon: "💼", title: "회계사/감사", description: "정확성과 체계적 분석", rate: "96%" },
            { icon: "⚖️", title: "판사/법률가", description: "규칙과 원칙 준수", rate: "92%" },
            { icon: "🏦", title: "은행원", description: "신뢰성과 책임감", rate: "89%" }
        ],
        en: [
            { icon: "💼", title: "Accountant/Auditor", description: "Accuracy and systematic analysis", rate: "96%" },
            { icon: "⚖️", title: "Judge/Lawyer", description: "Rule and principle adherence", rate: "92%" },
            { icon: "🏦", title: "Banker", description: "Reliability and responsibility", rate: "89%" }
        ]
    },
    ISFJ: {
        ko: [
            { icon: "⚕️", title: "간호사", description: "돌봄과 헌신", rate: "95%" },
            { icon: "👨‍🏫", title: "초등교사", description: "안정적인 교육 환경 제공", rate: "91%" },
            { icon: "📚", title: "사서", description: "체계적 관리와 서비스", rate: "87%" }
        ],
        en: [
            { icon: "⚕️", title: "Nurse", description: "Care and dedication", rate: "95%" },
            { icon: "👨‍🏫", title: "Elementary Teacher", description: "Stable educational environment", rate: "91%" },
            { icon: "📚", title: "Librarian", description: "Systematic management and service", rate: "87%" }
        ]
    },
    ESTJ: {
        ko: [
            { icon: "👔", title: "프로젝트 매니저", description: "효율적 조직 관리", rate: "95%" },
            { icon: "🏢", title: "기업 임원", description: "체계적 리더십", rate: "92%" },
            { icon: "⚖️", title: "군인/경찰", description: "규율과 질서 유지", rate: "88%" }
        ],
        en: [
            { icon: "👔", title: "Project Manager", description: "Efficient organizational management", rate: "95%" },
            { icon: "🏢", title: "Corporate Executive", description: "Systematic leadership", rate: "92%" },
            { icon: "⚖️", title: "Military/Police", description: "Discipline and order maintenance", rate: "88%" }
        ]
    },
    ESFJ: {
        ko: [
            { icon: "🏥", title: "의료 행정가", description: "환자 케어와 조직 운영", rate: "94%" },
            { icon: "🎉", title: "이벤트 플래너", description: "사람들을 즐겁게 하는 기획", rate: "90%" },
            { icon: "🏢", title: "고객 서비스 매니저", description: "고객 만족과 팀 관리", rate: "87%" }
        ],
        en: [
            { icon: "🏥", title: "Healthcare Administrator", description: "Patient care and organization", rate: "94%" },
            { icon: "🎉", title: "Event Planner", description: "Planning to bring joy", rate: "90%" },
            { icon: "🏢", title: "Customer Service Manager", description: "Customer satisfaction and team management", rate: "87%" }
        ]
    },
    ISTP: {
        ko: [
            { icon: "🔧", title: "엔지니어", description: "실용적 문제 해결", rate: "95%" },
            { icon: "🏍️", title: "메카닉", description: "기계적 재능 활용", rate: "91%" },
            { icon: "👨‍🚒", title: "응급구조사", description: "위기 상황 대처", rate: "88%" }
        ],
        en: [
            { icon: "🔧", title: "Engineer", description: "Practical problem solving", rate: "95%" },
            { icon: "🏍️", title: "Mechanic", description: "Utilizing mechanical talent", rate: "91%" },
            { icon: "👨‍🚒", title: "Paramedic", description: "Crisis situation handling", rate: "88%" }
        ]
    },
    ISFP: {
        ko: [
            { icon: "🎨", title: "패션 디자이너", description: "미적 감각과 창의성", rate: "93%" },
            { icon: "📸", title: "사진작가", description: "순간 포착과 예술성", rate: "90%" },
            { icon: "🎵", title: "음악가", description: "감성적 표현", rate: "87%" }
        ],
        en: [
            { icon: "🎨", title: "Fashion Designer", description: "Aesthetic sense and creativity", rate: "93%" },
            { icon: "📸", title: "Photographer", description: "Capturing moments artistically", rate: "90%" },
            { icon: "🎵", title: "Musician", description: "Emotional expression", rate: "87%" }
        ]
    },
    ESTP: {
        ko: [
            { icon: "💼", title: "영업 매니저", description: "설득력과 협상 능력", rate: "95%" },
            { icon: "🏢", title: "기업가", description: "빠른 의사결정과 위험 감수", rate: "92%" },
            { icon: "🎬", title: "프로듀서", description: "역동적 프로젝트 관리", rate: "88%" }
        ],
        en: [
            { icon: "💼", title: "Sales Manager", description: "Persuasion and negotiation", rate: "95%" },
            { icon: "🏢", title: "Entrepreneur", description: "Quick decisions and risk-taking", rate: "92%" },
            { icon: "🎬", title: "Producer", description: "Dynamic project management", rate: "88%" }
        ]
    },
    ESFP: {
        ko: [
            { icon: "🎤", title: "연예인/방송인", description: "에너지와 즉흥성", rate: "96%" },
            { icon: "🎭", title: "이벤트 호스트", description: "사람들과의 교감", rate: "92%" },
            { icon: "✈️", title: "여행 가이드", description: "활발한 성격과 사교성", rate: "89%" }
        ],
        en: [
            { icon: "🎤", title: "Entertainer/TV Personality", description: "Energy and spontaneity", rate: "96%" },
            { icon: "🎭", title: "Event Host", description: "Connecting with people", rate: "92%" },
            { icon: "✈️", title: "Travel Guide", description: "Active personality and sociability", rate: "89%" }
        ]
    }
};

const mbtiCompat = {
    'INTJ': ['ENFP', 'ENTP', 'INFJ'],
    'INTP': ['ENTJ', 'ESTJ', 'INFJ'],
    'ENTJ': ['INTP', 'ISTP', 'INFP'],
    'ENTP': ['INFJ', 'INTJ', 'ENFJ'],
    'INFJ': ['ENTP', 'ENFP', 'INTJ'],
    'INFP': ['ENFJ', 'ENTJ', 'INFJ'],
    'ENFJ': ['INFP', 'ISFP', 'INTP'],
    'ENFP': ['INTJ', 'INFJ', 'ENTJ'],
    'ISTJ': ['ESFP', 'ESTP', 'ISFJ'],
    'ISFJ': ['ESFP', 'ESTP', 'ISTJ'],
    'ESTJ': ['ISTP', 'INTP', 'ISFP'],
    'ESFJ': ['ISFP', 'ISTP', 'ESFP'],
    'ISTP': ['ESTJ', 'ENTJ', 'ESFJ'],
    'ISFP': ['ENFJ', 'ESFJ', 'ESTJ'],
    'ESTP': ['ISFJ', 'ISTJ', 'ESFJ'],
    'ESFP': ['ISTJ', 'ISFJ', 'ESTJ']
};