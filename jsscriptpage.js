//alert('hello js');

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("d_day_button").addEventListener("click", function(event) {
        event.preventDefault(); // 기본 동작 방지
      });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("d_day_reset").addEventListener("click", function(event) {
        event.preventDefault(); // 기본 동작 방지
      });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("military_button").addEventListener("click", function(event) {
        event.preventDefault(); // 기본 동작 방지
      });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("military_reset").addEventListener("click", function(event) {
        event.preventDefault(); // 기본 동작 방지
      });
});


function show_calender(m) {
    const month = m.value;

    var month0 = document.getElementById('part2_p2');
    var month1 = document.getElementById('table1_2024');
    var month2 = document.getElementById('table2_2024');
    var month3 = document.getElementById('table3_2024');
    var month4 = document.getElementById('table4_2024');
    var month5 = document.getElementById('table5_2024');
    var month6 = document.getElementById('table6_2024');
    var month7 = document.getElementById('table7_2024');
    var month8 = document.getElementById('table8_2024');
    var month9 = document.getElementById('table9_2024');
    var month10 = document.getElementById('table10_2024');
    var month11 = document.getElementById('table11_2024');
    var month12 = document.getElementById('table12_2024');

    month0.classList.add('display_hidden');
    month1.classList.add('display_hidden');
    month2.classList.add('display_hidden');
    month3.classList.add('display_hidden');
    month4.classList.add('display_hidden');
    month5.classList.add('display_hidden');
    month6.classList.add('display_hidden');
    month7.classList.add('display_hidden');
    month8.classList.add('display_hidden');
    month9.classList.add('display_hidden');
    month10.classList.add('display_hidden');
    month11.classList.add('display_hidden');
    month12.classList.add('display_hidden');

    if (month == 'default_2024') {
        month0.classList.remove('display_hidden');
    }

    if (month == 'month1_2024') {
        month1.classList.remove('display_hidden');
    }

    if (month == 'month2_2024') {
        month2.classList.remove('display_hidden');
    }

    if (month == 'month3_2024') {
        month3.classList.remove('display_hidden');
    }

    if (month == 'month4_2024') {
        month4.classList.remove('display_hidden');
    }

    if (month == 'month5_2024') {
        month5.classList.remove('display_hidden');
    }

    if (month == 'month6_2024') {
        month6.classList.remove('display_hidden');
    }

    if (month == 'month7_2024') {
        month7.classList.remove('display_hidden');
    }

    if (month == 'month8_2024') {
        month8.classList.remove('display_hidden');
    }

    if (month == 'month9_2024') {
        month9.classList.remove('display_hidden');
    }

    if (month == 'month10_2024') {
        month10.classList.remove('display_hidden');
    }

    if (month == 'month11_2024') {
        month11.classList.remove('display_hidden');
    }

    if (month == 'month12_2024') {
        month12.classList.remove('display_hidden');
    }
}


function show_date_calculater(d) {
    const date = d.value;

    var date0 = document.getElementById('part3_p2');
    var date1 = document.getElementById('d_day');
    var date2 = document.getElementById('military');
    var date3 = document.getElementById('period');
    var date4 = document.getElementById('birth');

    date0.classList.add('display_hidden');
    date1.classList.add('display_hidden');
    date2.classList.add('display_hidden');
    date3.classList.add('display_hidden');
    date4.classList.add('display_hidden');

    if (date == 'default_date_calculater') {
        date0.classList.remove('display_hidden');
    }

    if (date == 'd_day_date_calculater') {
        date1.classList.remove('display_hidden');
    }

    if (date == 'military_date_calculater') {
        date2.classList.remove('display_hidden');
    }

    if (date == 'period_date_calculater') {
        date3.classList.remove('display_hidden');
    }

    if (date == 'birth_date_calculater') {
        date4.classList.remove('display_hidden');
    }
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  function daysInMonth(year, month) {
    const monthDays = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return monthDays[month - 1];
  }

function show_d_day_result() {
    let y1 = parseInt(document.getElementById('d_day_input1').value);
    let y2 = parseInt(document.getElementById('d_day_input4').value);
    let m1 = parseInt(document.getElementById('d_day_input2').value);
    let m2 = parseInt(document.getElementById('d_day_input5').value);
    let d1 = parseInt(document.getElementById('d_day_input3').value);
    let d2 = parseInt(document.getElementById('d_day_input6').value);

    var p = document.getElementById('d_day_result_p');
    var p_error = `<span style="font-weight: 600; color: red">
    올바른 날짜를 입력하세요.</span>`;

    if (
        isNaN(y1) || isNaN(m1) || isNaN(d1) ||
        isNaN(y2) || isNaN(m2) || isNaN(d2) ||
        m1 < 1 || m1 > 12 || m2 < 1 || m2 > 12 ||  // 1월부터 12월까지 유효한 월
        d1 < 1 || d1 > daysInMonth(y1, m1) || d2 < 1 || d2 > daysInMonth(y2, m2)  // 유효한 일자 범위
      ) {
        p.innerHTML = `${p_error}`;
        return;
      }

    let dday = 0;

    while (!(y1 === y2 && m1 === m2 && d1 === d2)) {
        dday++;
    
        // 다음 날짜로 이동
        d1++;
        if (d1 > daysInMonth(y1, m1)) {
          d1 = 1;
          m1++;
          if (m1 > 12) {
            m1 = 1;
            y1++;
          }
        }
      }

    y1 = parseInt(document.getElementById('d_day_input1').value);
    m1 = parseInt(document.getElementById('d_day_input2').value);
    d1 = parseInt(document.getElementById('d_day_input3').value);

    var p_styled1 = `<span style="font-weight: 600;">
    ${y1}년 ${m1}월 ${d1}일</span>`;
    var p_styled2 = `<span style="font-weight: 600;">
    ${y2}년 ${m2}월 ${d2}일</span>`;
    var p_styled3 = `<span style="font-weight: 600; font-size: 33px; color: green;">
    D-${dday}</span>`;
    
    p.innerHTML = `${p_styled1}부터
    ${p_styled2}까지 ${p_styled3} 남았습니다.`;
}


function reset_d_day_input() {
    var y1 = document.getElementById('d_day_input1');
    var y2 = document.getElementById('d_day_input4');
    var m1 = document.getElementById('d_day_input2');
    var m2 = document.getElementById('d_day_input5');
    var d1 = document.getElementById('d_day_input3');
    var d2 = document.getElementById('d_day_input6');

    var p = document.getElementById('d_day_result_p');

    y1.value = "";
    y2.value = "";
    m1.value = "";
    m2.value = "";
    d1.value = "";
    d2.value = "";
    p.innerHTML = "시작 일자와 종료 일자를 입력하세요.";
}


function show_military_result() {
    var selected_military_radio = document.querySelector('input[name="military_input"]:checked').value;

    let y1 = parseInt(document.getElementById('military_input1').value);
    let m1 = parseInt(document.getElementById('military_input2').value);
    let d1 = parseInt(document.getElementById('military_input3').value);

    var p = document.getElementById('military_result_p');
    var p_error = `<span style="font-weight: 600; color: red">
    올바른 날짜를 입력하세요.</span>`;

    if (
        isNaN(y1) || isNaN(m1) || isNaN(d1) ||
        m1 < 1 || m1 > 12 ||  // 1월부터 12월까지 유효한 월
        d1 < 1 || d1 > daysInMonth(y1, m1)  // 유효한 일자 범위
    ) {
        p.innerHTML = `${p_error}`;
        return;
    }

    var CurrentDate = new Date(Date.UTC(y1, m1 - 1, d1)); // Use Date.UTC() to consider leap years
    var FutureDate = new Date(CurrentDate);

    let plus = 0;

    if (selected_military_radio == 'army') {
        plus = 18;
    } else if (selected_military_radio == 'navy') {
        plus = 20;
    } else if (selected_military_radio == 'airforce') {
        plus = 21;
    } else if (selected_military_radio == 'marinecorps') {
        plus = 18;
    } else if (selected_military_radio == 'police') {
        plus = 18;
    } else if (selected_military_radio == 'seapolice') {
        plus = 20;
    } else if (selected_military_radio == 'firefighter') {
        plus = 20;
    } else if (selected_military_radio == 'social') {
        plus = 21;
    }

    FutureDate.setMonth(CurrentDate.getUTCMonth() + plus); // Use getUTCMonth() to get the month
    let y2 = FutureDate.getUTCFullYear();
    let m2 = FutureDate.getUTCMonth() + 1;
    let d2 = FutureDate.getUTCDate() - 1;
    
    if (d2 == 0) {
        m2 -= 1;
        if (m2 == 0) {
            y2 -= 1;
            m2 = 12;
        }
        d2 = daysInMonth(y2, m2);
    }

    var TodayDate = new Date();
    let Tyear = TodayDate.getFullYear();
    let Tmonth = TodayDate.getMonth() + 1;
    let Tday = TodayDate.getDate();
    
    let dday = "";

    if (TodayDate < CurrentDate) {
        dday = "미입대";
    } else if (TodayDate >= CurrentDate && TodayDate <= new Date(Date.UTC(y2, m2, d2))) {
        dday = "복무 중";
    } else {
        dday = "전역";
    }

    var p_styled = 
    `<table id="military_table" class="display_fix">
        <tr>
            <td style="font-weight: 600";>전역일</td><td><span style="font-weight: 600; color: green">${y2}년 ${m2}월 ${d2}일</span></td><td>${dday}</td>   
        </tr>
    </table>
    <style>
        #military_table td {
            border-style: solid;
            border-width: 2px;
            border-color: green;
            width: 200px;
            height: 60px;
            font-size: 25px;
            text-align: center;
        }
    </style>`;

    p.innerHTML = `${p_styled}`;
}


function reset_military_input() {
    var y1 = document.getElementById('military_input1');
    var m1 = document.getElementById('military_input2');
    var d1 = document.getElementById('military_input3');

    var p = document.getElementById('military_result_p');

    y1.value = "";
    m1.value = "";
    d1.value = "";
    p.innerHTML = "복무 형태와 입대 일자를 입력하세요.";
}


window.onload = function() {
    window.scrollTo(0, 0);
}



/* fix
    1. 페이지 새로고침 시 스크롤 최상단으로

    ideas
    Home. 로그인, 다크모드, 페이지 최상단 이동, 페이지 최하단 이동

    1. 날짜 계산기 (디데이, 군대 전역일, 출산일, 월경일)
    2. 공학 계산기 (산수, 방정식, 도형, 그래프, 함수(삼각, 지수 등))
    >> 1, 2는 일반 사이트나 계산기와는 차별점이 돋보이도록 웹의 장점인 시각화를 중심으로
    3. 환율, 주식, 등

    4. 뽑기, 룰렛, 사다리타기
    5. 파트별 확대/축소 모드
    6. 모바일 지원
*/