// Global Variables
let currentLang = 'ko';
let userData = {
    mbti: '',
    year: '',
    month: '',
    day: '',
    bloodType: '',
    zodiac: '',
    chineseZodiac: ''
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeYearOptions();
    initializeMonthOptions();
    initializeDayOptions();
    setupEventListeners();
    updateLanguage();
});

// Setup Event Listeners
function setupEventListeners() {
    // Language Toggle
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentLang = this.dataset.lang;
            updateLanguage();
        });
    });

    // MBTI Selection
    document.querySelectorAll('.mbti-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.mbti-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            userData.mbti = this.dataset.mbti;
            document.getElementById('mbti').value = userData.mbti;
        });
    });

    // Blood Type Selection
    document.querySelectorAll('.blood-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.blood-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            userData.bloodType = this.dataset.blood;
            document.getElementById('bloodType').value = userData.bloodType;
        });
    });

    // Date Change
    document.getElementById('year').addEventListener('change', updateAutoResult);
    document.getElementById('month').addEventListener('change', function() {
        updateDayOptions();
        updateAutoResult();
    });
    document.getElementById('day').addEventListener('change', updateAutoResult);

    // Form Submit
    document.getElementById('personalityForm').addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            userData.year = document.getElementById('year').value;
            userData.month = document.getElementById('month').value;
            userData.day = document.getElementById('day').value;
            calculateZodiacSigns();
            showResults();
        }
    });
}

// Initialize Date Options
function initializeYearOptions() {
    const yearSelect = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    for (let year = currentYear; year >= 1950; year--) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
}

function initializeMonthOptions() {
    const monthSelect = document.getElementById('month');
    for (let month = 1; month <= 12; month++) {
        const option = document.createElement('option');
        option.value = month;
        option.textContent = month;
        monthSelect.appendChild(option);
    }
}

function initializeDayOptions() {
    const daySelect = document.getElementById('day');
    for (let day = 1; day <= 31; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = day;
        daySelect.appendChild(option);
    }
}

function updateDayOptions() {
    const year = parseInt(document.getElementById('year').value);
    const month = parseInt(document.getElementById('month').value);
    const daySelect = document.getElementById('day');
    
    if (!year || !month) return;
    
    const daysInMonth = new Date(year, month, 0).getDate();
    const currentDay = parseInt(daySelect.value);
    
    daySelect.innerHTML = '<option value="">일</option>';
    
    for (let day = 1; day <= daysInMonth; day++) {
        const option = document.createElement('option');
        option.value = day;
        option.textContent = day;
        if (day === currentDay && day <= daysInMonth) {
            option.selected = true;
        }
        daySelect.appendChild(option);
    }
}

// Update Auto Result
function updateAutoResult() {
    const year = document.getElementById('year').value;
    const month = document.getElementById('month').value;
    const day = document.getElementById('day').value;
    
    if (year && month && day) {
        const zodiac = getZodiacSign(parseInt(month), parseInt(day));
        const chineseZodiac = getChineseZodiac(parseInt(year));
        
        const autoResult = document.getElementById('autoResult');
        const zodiacInfo = currentLang === 'ko' ? zodiacDescriptions.ko[zodiac] : zodiacDescriptions.en[zodiac];
        const chineseInfo = currentLang === 'ko' ? chineseZodiacDescriptions.ko[chineseZodiac] : chineseZodiacDescriptions.en[chineseZodiac];
        
        autoResult.innerHTML = `
            <div class="auto-result-item">
                <span class="emoji">${zodiacInfo.emoji}</span>
                <span class="label">${currentLang === 'ko' ? '별자리:' : 'Zodiac:'}</span>
                <span class="value">${zodiac}</span>
            </div>
            <div class="auto-result-item">
                <span class="emoji">${chineseInfo.emoji}</span>
                <span class="label">${currentLang === 'ko' ? '띠:' : 'Chinese Zodiac:'}</span>
                <span class="value">${chineseZodiac}</span>
            </div>
        `;
        autoResult.classList.add('show');
    }
}

// Calculate Zodiac Signs
function getZodiacSign(month, day) {
    const zodiacSigns = currentLang === 'ko' 
        ? ['염소자리', '물병자리', '물고기자리', '양자리', '황소자리', '쌍둥이자리', '게자리', '사자자리', '처녀자리', '천칭자리', '전갈자리', '사수자리']
        : ['Capricorn', 'Aquarius', 'Pisces', 'Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius'];
    
    const dates = [20, 19, 21, 20, 21, 22, 23, 23, 23, 24, 23, 22];
    
    let sign = zodiacSigns[month - 1];
    if (day < dates[month - 1]) {
        sign = zodiacSigns[month - 2 < 0 ? 11 : month - 2];
    }
    
    return sign;
}

function getChineseZodiac(year) {
    const animals = currentLang === 'ko'
        ? ['쥐띠', '소띠', '호랑이띠', '토끼띠', '용띠', '뱀띠', '말띠', '양띠', '원숭이띠', '닭띠', '개띠', '돼지띠']
        : ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];
    
    return animals[(year - 4) % 12];
}

function calculateZodiacSigns() {
    userData.zodiac = getZodiacSign(parseInt(userData.month), parseInt(userData.day));
    userData.chineseZodiac = getChineseZodiac(parseInt(userData.year));
}

// Validate Form
function validateForm() {
    if (!userData.mbti) {
        alert(currentLang === 'ko' ? 'MBTI를 선택해주세요.' : 'Please select your MBTI type.');
        return false;
    }
    if (!document.getElementById('year').value || !document.getElementById('month').value || !document.getElementById('day').value) {
        alert(currentLang === 'ko' ? '생년월일을 입력해주세요.' : 'Please enter your date of birth.');
        return false;
    }
    if (!userData.bloodType) {
        alert(currentLang === 'ko' ? '혈액형을 선택해주세요.' : 'Please select your blood type.');
        return false;
    }
    return true;
}

// Show Results
function showResults() {
    // Hide form section
    document.querySelector('.container').style.display = 'none';
    
    // Show results
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = generateResultsHTML();
    
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Animate results
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
}

// Generate Results HTML
function generateResultsHTML() {
    const mbtiInfo = currentLang === 'ko' ? mbtiDescriptions.ko[userData.mbti] : mbtiDescriptions.en[userData.mbti];
    const bloodInfo = currentLang === 'ko' ? bloodTypeDescriptions.ko[userData.bloodType] : bloodTypeDescriptions.en[userData.bloodType];
    const zodiacInfo = currentLang === 'ko' ? zodiacDescriptions.ko[userData.zodiac] : zodiacDescriptions.en[userData.zodiac];
    const chineseInfo = currentLang === 'ko' ? chineseZodiacDescriptions.ko[userData.chineseZodiac] : chineseZodiacDescriptions.en[userData.chineseZodiac];
    
    const celebrity = findMatchingCelebrity();
    const compatibility = calculateCompatibility();
    const careers = careerRecommendations[userData.mbti][currentLang];
    
    return `
        <div class="container">
            <!-- Header -->
            <div class="results-header fade-in" style="opacity: 0; transform: translateY(20px); transition: all 0.6s ease;">
                <h2>${currentLang === 'ko' ? '🌟 당신의 성격 분석 결과' : '🌟 Your Personality Analysis'}</h2>
                <p>${currentLang === 'ko' ? '9,216가지 조합 중 당신만의 특별한 조합입니다' : 'Your unique combination among 9,216 possibilities'}</p>
            </div>
            
            <!-- Profile Cards -->
            <div class="profile-grid fade-in" style="opacity: 0; transform: translateY(20px); transition: all 0.6s ease;">
                <div class="profile-card">
                    <div class="card-icon">🧩</div>
                    <div class="card-title">${userData.mbti}</div>
                    <div class="card-subtitle">${mbtiInfo.title}</div>
                    <div class="card-description">${mbtiInfo.description}</div>
                </div>
                
                <div class="profile-card">
                    <div class="card-icon">🩸</div>
                    <div class="card-title">${userData.bloodType}${currentLang === 'ko' ? '형' : ''}</div>
                    <div class="card-subtitle">${bloodInfo.title}</div>
                    <div class="card-description">${bloodInfo.description}</div>
                </div>
                
                <div class="profile-card">
                    <div class="card-icon">${zodiacInfo.emoji}</div>
                    <div class="card-title">${userData.zodiac}</div>
                    <div class="card-subtitle">${currentLang === 'ko' ? '별자리' : 'Zodiac Sign'}</div>
                    <div class="card-description">${zodiacInfo.description}</div>
                </div>
                
                <div class="profile-card">
                    <div class="card-icon">${chineseInfo.emoji}</div>
                    <div class="card-title">${userData.chineseZodiac}</div>
                    <div class="card-subtitle">${currentLang === 'ko' ? '띠' : 'Chinese Zodiac'}</div>
                    <div class="card-description">${chineseInfo.description}</div>
                </div>
            </div>
            
            <!-- Comprehensive Analysis -->
            <section class="analysis-section fade-in" style="opacity: 0; transform: translateY(20px); transition: all 0.6s ease;">
                <h2 class="analysis-title">${currentLang === 'ko' ? '💡 종합 성격 분석' : '💡 Comprehensive Analysis'}</h2>
                <div class="analysis-content">
                    <p class="analysis-text">${generateComprehensiveAnalysis()}</p>
                </div>
            </section>
            
            <!-- Celebrity Match -->
            <section class="analysis-section fade-in" style="opacity: 0; transform: translateY(20px); transition: all 0.6s ease;">
                <h2 class="analysis-title">${currentLang === 'ko' ? '⭐ 나와 닮은 연예인' : '⭐ Celebrity Look-alike'}</h2>
                <div class="celebrity-card">
                    <img src="${celebrity.image}" alt="${celebrity.name}" class="celebrity-image">
                    <div class="celebrity-info">
                        <div class="celebrity-name">${celebrity.name}</div>
                        <div class="celebrity-traits">
                            <span class="trait-badge">🧩 ${celebrity.mbti}</span>
                            <span class="trait-badge">🩸 ${celebrity.blood}${currentLang === 'ko' ? '형' : ''}</span>
                            <span class="trait-badge">${currentLang === 'ko' ? zodiacDescriptions.ko[celebrity.zodiac]?.emoji : zodiacDescriptions.en[celebrity.zodiac]?.emoji} ${celebrity.zodiac}</span>
                            <span class="trait-badge">${currentLang === 'ko' ? chineseZodiacDescriptions.ko[celebrity.animal]?.emoji : chineseZodiacDescriptions.en[celebrity.animal]?.emoji} ${celebrity.animal}</span>
                        </div>
                        <div class="celebrity-description">${celebrity.description}</div>
                        <div style="margin-top: 20px; color: var(--text-secondary);">
                            ${currentLang === 'ko' ? '생년월일:' : 'Birth:'} ${celebrity.birth}
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Compatibility -->
            <section class="analysis-section fade-in" style="opacity: 0; transform: translateY(20px); transition: all 0.6s ease;">
                <h2 class="analysis-title">${currentLang === 'ko' ? '💑 최고의 궁합' : '💑 Best Compatibility'}</h2>
                <div class="analysis-content">
                    <div class="compatibility-grid">
                        <div class="compatibility-item">
                            <div class="compatibility-label">MBTI ${currentLang === 'ko' ? '궁합' : 'Match'}</div>
                            <div class="compatibility-value">${compatibility.mbti}</div>
                            <div class="compatibility-bar">
                                <div class="compatibility-fill" style="width: ${compatibility.mbti}"></div>
                            </div>
                        </div>
                        <div class="compatibility-item">
                            <div class="compatibility-label">${currentLang === 'ko' ? '혈액형 궁합' : 'Blood Type Match'}</div>
                            <div class="compatibility-value">${compatibility.blood}</div>
                            <div class="compatibility-bar">
                                <div class="compatibility-fill" style="width: ${compatibility.blood}"></div>
                            </div>
                        </div>
                        <div class="compatibility-item">
                            <div class="compatibility-label">${currentLang === 'ko' ? '별자리 궁합' : 'Zodiac Match'}</div>
                            <div class="compatibility-value">${compatibility.zodiac}</div>
                            <div class="compatibility-bar">
                                <div class="compatibility-fill" style="width: ${compatibility.zodiac}"></div>
                            </div>
                        </div>
                        <div class="compatibility-item">
                            <div class="compatibility-label">${currentLang === 'ko' ? '띠 궁합' : 'Chinese Zodiac Match'}</div>
                            <div class="compatibility-value">${compatibility.chinese}</div>
                            <div class="compatibility-bar">
                                <div class="compatibility-fill" style="width: ${compatibility.chinese}"></div>
                            </div>
                        </div>
                    </div>
                    <p class="analysis-text" style="margin-top: 30px;">${generateCompatibilityText(compatibility)}</p>
                </div>
            </section>
            
            <!-- Career Recommendations -->
            <section class="analysis-section fade-in" style="opacity: 0; transform: translateY(20px); transition: all 0.6s ease;">
                <h2 class="analysis-title">${currentLang === 'ko' ? '💼 추천 직업' : '💼 Career Recommendations'}</h2>
                <div class="analysis-content">
                    <div class="career-list">
                        ${careers.map(career => `
                            <div class="career-item">
                                <div class="career-icon">${career.icon}</div>
                                <div class="career-info">
                                    <div class="career-title">${career.title}</div>
                                    <div class="career-description">${career.description}</div>
                                </div>
                                <div class="success-rate">${career.rate}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
            
            <!-- Share Section -->
            <section class="share-section fade-in" style="opacity: 0; transform: translateY(20px); transition: all 0.6s ease;">
                <h2 class="analysis-title">${currentLang === 'ko' ? '📤 결과 공유하기' : '📤 Share Results'}</h2>
                <div class="share-buttons">
                    <button class="share-btn primary" onclick="window.print()">
                        ${currentLang === 'ko' ? '📄 PDF로 저장' : '📄 Save as PDF'}
                    </button>
                    <button class="share-btn" onclick="location.reload()">
                        ${currentLang === 'ko' ? '🔄 다시 테스트하기' : '🔄 Take Test Again'}
                    </button>
                    <button class="share-btn" onclick="shareOnSocialMedia()">
                        ${currentLang === 'ko' ? '📱 SNS 공유' : '📱 Share on SNS'}
                    </button>
                </div>
            </section>
        </div>
    `;
}

// Find Matching Celebrity
function findMatchingCelebrity() {
    const celebrities = currentLang === 'ko' ? celebrityDatabase.ko : celebrityDatabase.en;
    
    // Try exact match
    let matches = celebrities.filter(celeb => 
        celeb.mbti === userData.mbti && 
        celeb.blood === userData.bloodType
    );
    
    // If no exact match, try MBTI only
    if (matches.length === 0) {
        matches = celebrities.filter(celeb => celeb.mbti === userData.mbti);
    }
    
    // If still no match, try blood type only
    if (matches.length === 0) {
        matches = celebrities.filter(celeb => celeb.blood === userData.bloodType);
    }
    
    // Return random match or first celebrity
    return matches.length > 0 ? matches[Math.floor(Math.random() * matches.length)] : celebrities[0];
}

// Calculate Compatibility
function calculateCompatibility() {
    // MBTI Compatibility
    const bestMbti = mbtiCompat[userData.mbti] ? mbtiCompat[userData.mbti][0] : 'ENFJ';
    const mbtiScore = 75 + Math.floor(Math.random() * 21); // 75-95%
    
    // Blood Type Compatibility
    const bloodCompat = {
        'A': ['A', 'AB'],
        'B': ['B', 'AB'],
        'O': ['O', 'A'],
        'AB': ['AB', 'A', 'B']
    };
    
    const bloodScore = 70 + Math.floor(Math.random() * 21); // 70-90%
    
    // Zodiac Compatibility
    const zodiacScore = 75 + Math.floor(Math.random() * 21); // 75-95%
    
    // Chinese Zodiac Compatibility
    const chineseScore = 70 + Math.floor(Math.random() * 21); // 70-90%
    
    return {
        mbti: `${mbtiScore}%`,
        blood: `${bloodScore}%`,
        zodiac: `${zodiacScore}%`,
        chinese: `${chineseScore}%`,
        overall: Math.round((mbtiScore + bloodScore + zodiacScore + chineseScore) / 4),
        bestMbti: bestMbti,
        bestBlood: bloodCompat[userData.bloodType][0]
    };
}

// Generate Comprehensive Analysis
function generateComprehensiveAnalysis() {
    const mbtiDesc = ((currentLang === 'ko' ? mbtiDescriptions.ko[userData.mbti] : mbtiDescriptions.en[userData.mbti]) || { description: '' }).description;
    const bloodDesc = ((currentLang === 'ko' ? bloodTypeDescriptions.ko[userData.bloodType] : bloodTypeDescriptions.en[userData.bloodType]) || { description: '' }).description;
    const zodiacDesc = ((currentLang === 'ko' ? zodiacDescriptions.ko[userData.zodiac] : zodiacDescriptions.en[userData.zodiac]) || { description: '' }).description;
    const chineseDesc = ((currentLang === 'ko' ? chineseZodiacDescriptions.ko[userData.chineseZodiac] : chineseZodiacDescriptions.en[userData.chineseZodiac]) || { description: '' }).description;

    const texts = {
        ko: `당신은 <strong>${userData.mbti}</strong> 유형으로, ${mbtiDesc} 
        <strong>${userData.bloodType}형</strong>의 특성과 결합되어 ${bloodDesc} 
        <strong>${userData.zodiac}</strong>의 영향으로 ${zodiacDesc} 
        또한 <strong>${userData.chineseZodiac}</strong>로서 ${chineseDesc}
        
        <br><br>이러한 네 가지 요소가 조화롭게 결합되어, 당신만의 독특하고 매력적인 성격을 형성합니다. 
        당신의 강점을 살리고 약점을 보완한다면 어떤 분야에서든 큰 성공을 거둘 수 있을 것입니다.`,
        
        en: `You are an <strong>${userData.mbti}</strong> type, ${mbtiDesc} 
        Combined with <strong>${userData.bloodType}</strong> characteristics, ${bloodDesc} 
        Influenced by <strong>${userData.zodiac}</strong>, ${zodiacDesc} 
        Also as a <strong>${userData.chineseZodiac}</strong>, ${chineseDesc}
        
        <br><br>These four elements harmoniously combine to form your unique and attractive personality. 
        By leveraging your strengths and complementing your weaknesses, you can achieve great success in any field.`
    };
    
    return texts[currentLang];
}

// Generate Compatibility Text
function generateCompatibilityText(compatibility) {
    const texts = {
        ko: `당신과 가장 잘 맞는 유형은 <strong>MBTI: ${compatibility.bestMbti}</strong>, <strong>혈액형: ${compatibility.bestBlood}형</strong>입니다. 
        종합 궁합 점수는 <strong>${compatibility.overall}점</strong>으로, 매우 좋은 궁합을 보여줍니다! 
        이러한 유형의 사람들과는 자연스럽게 깊은 유대감을 형성할 수 있으며, 서로의 장점을 끌어내는 시너지 효과를 경험할 수 있습니다.`,
        
        en: `Your best match is <strong>MBTI: ${compatibility.bestMbti}</strong>, <strong>Blood Type: ${compatibility.bestBlood}</strong>. 
        Your overall compatibility score is <strong>${compatibility.overall}</strong>, showing excellent compatibility! 
        You can naturally form deep bonds with these types and experience synergy effects that bring out each other's strengths.`
    };
    
    return texts[currentLang];
}

// Share on Social Media
function shareOnSocialMedia() {
    const text = currentLang === 'ko' 
        ? `나의 MBTI: ${userData.mbti}, 혈액형: ${userData.bloodType}형, 별자리: ${userData.zodiac}, 띠: ${userData.chineseZodiac}! 당신의 조합은?`
        : `My MBTI: ${userData.mbti}, Blood Type: ${userData.bloodType}, Zodiac: ${userData.zodiac}, Chinese Zodiac: ${userData.chineseZodiac}! What's yours?`;
    
    if (navigator.share) {
        navigator.share({
            title: 'MBTI Universe',
            text: text,
            url: window.location.href
        });
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(text + ' ' + window.location.href);
        alert(currentLang === 'ko' ? '링크가 클립보드에 복사되었습니다!' : 'Link copied to clipboard!');
    }
}

// Update Language
function updateLanguage() {
    document.querySelectorAll('[data-ko]').forEach(el => {
        if (currentLang === 'ko') {
            el.textContent = el.dataset.ko;
        } else {
            el.textContent = el.dataset.en;
        }
    });
    
    // Update select placeholders
    const yearSelect = document.getElementById('year');
    const monthSelect = document.getElementById('month');
    const daySelect = document.getElementById('day');
    
    if (yearSelect.options[0]) {
        yearSelect.options[0].text = currentLang === 'ko' ? '년도' : 'Year';
    }
    if (monthSelect.options[0]) {
        monthSelect.options[0].text = currentLang === 'ko' ? '월' : 'Month';
    }
    if (daySelect.options[0]) {
        daySelect.options[0].text = currentLang === 'ko' ? '일' : 'Day';
    }
    
    // Update auto result if visible
    if (document.getElementById('autoResult').classList.contains('show')) {
        updateAutoResult();
    }
}
