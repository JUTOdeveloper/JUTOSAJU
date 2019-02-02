
function yangummchk(y,m,d,yk,ya,um){
                var year=y;
                var month =m;
                var day=d;
				var yoon=yk;
				var yang=ya;
				var umm=um;

        // 음력 데이터 (평달 - 작은달 :1,  큰달:2 )
        // (윤달이 있는 달 - 평달이 작고 윤달도 작으면 :3 , 평달이 작고 윤달이 크면 : 4)
        // (윤달이 있는 달 - 평달이 크고 윤달이 작으면 :5,  평달과 윤달이 모두 크면 : 6)
var kk = [[1, 2, 4, 1, 1, 2, 1, 2, 1, 2, 2, 1],   /* 1841 */
         [2, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 1],
         [2, 2, 2, 1, 2, 1, 4, 1, 2, 1, 2, 1],
         [2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2],
         [1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1],
         [2, 1, 2, 1, 5, 2, 1, 2, 2, 1, 2, 1],
         [2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2],
         [1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1],
         [2, 1, 2, 3, 2, 1, 2, 1, 2, 1, 2, 2],
         [2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2],
         [2, 2, 1, 2, 1, 1, 2, 1, 2, 1, 5, 2],   /* 1851 */
         [2, 1, 2, 2, 1, 1, 2, 1, 2, 1, 1, 2],
         [2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2],
         [1, 2, 1, 2, 1, 2, 5, 2, 1, 2, 1, 2],
         [1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1],
         [2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2],
         [1, 2, 1, 1, 5, 2, 1, 2, 1, 2, 2, 2],
         [1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2],
         [2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2],
         [2, 1, 6, 1, 1, 2, 1, 1, 2, 1, 2, 2],
         [1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2],   /* 1861 */
         [2, 1, 2, 1, 2, 2, 1, 2, 2, 3, 1, 2],
         [1, 2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2],
         [1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1],
         [2, 1, 1, 2, 4, 1, 2, 2, 1, 2, 2, 1],
         [2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2, 2],
         [1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2],
         [1, 2, 2, 3, 2, 1, 1, 2, 1, 2, 2, 1],
         [2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1],
         [2, 2, 2, 1, 2, 1, 2, 1, 1, 5, 2, 1],
         [2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1, 2],   /* 1871 */
         [1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2],
         [1, 1, 2, 1, 2, 4, 2, 1, 2, 2, 1, 2],
         [1, 1, 2, 1, 2, 1, 2, 1, 2, 2, 2, 1],
         [2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1],
         [2, 2, 1, 1, 5, 1, 2, 1, 2, 2, 1, 2],
         [2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2],
         [2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1],
         [2, 2, 4, 2, 1, 2, 1, 1, 2, 1, 2, 1],
         [2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 1, 2],
         [1, 2, 1, 2, 1, 2, 5, 2, 2, 1, 2, 1],   /* 1881 */
         [1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2],
         [1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1, 2],
         [2, 1, 1, 2, 3, 2, 1, 2, 2, 1, 2, 2],
         [2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2],
         [2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
         [2, 2, 1, 5, 2, 1, 1, 2, 1, 2, 1, 2],
         [2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1],
         [2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2],
         [1, 5, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2],
         [1, 2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2],   /* 1891 */
         [1, 1, 2, 1, 1, 5, 2, 2, 1, 2, 2, 2],
         [1, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2],
         [1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2],
         [2, 1, 2, 1, 5, 1, 2, 1, 2, 1, 2, 1],
         [2, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
         [1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
         [2, 1, 5, 2, 2, 1, 2, 1, 2, 1, 2, 1],
         [2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2],
         [1, 2, 1, 1, 2, 1, 2, 5, 2, 2, 1, 2],
         [1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1],   /* 1901 */
         [2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2],
         [1, 2, 1, 2, 3, 2, 1, 1, 2, 2, 1, 2],
         [2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1],
         [2, 2, 1, 2, 2, 1, 1, 2, 1, 2, 1, 2],
         [1, 2, 2, 4, 1, 2, 1, 2, 1, 2, 1, 2],
         [1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1],
         [2, 1, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2],
         [1, 5, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2],
         [1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1],
         [2, 1, 2, 1, 1, 5, 1, 2, 2, 1, 2, 2],   /* 1911 */
         [2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2],
         [2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2],
         [2, 2, 1, 2, 5, 1, 2, 1, 2, 1, 1, 2],
         [2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2],
         [1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1],
         [2, 3, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1],
         [2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2],
         [1, 2, 1, 1, 2, 1, 5, 2, 2, 1, 2, 2],
         [1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2],
         [2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2],   /* 1921 */
         [2, 1, 2, 2, 3, 2, 1, 1, 2, 1, 2, 2],
         [1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2],
         [2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1],
         [2, 1, 2, 5, 2, 1, 2, 2, 1, 2, 1, 2],
         [1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1],
         [2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2],
         [1, 5, 1, 2, 1, 1, 2, 2, 1, 2, 2, 2],
         [1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2],
         [1, 2, 2, 1, 1, 5, 1, 2, 1, 2, 2, 1],
         [2, 2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1],   /* 1931 */
         [2, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2],
         [1, 2, 2, 1, 6, 1, 2, 1, 2, 1, 1, 2],
         [1, 2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2],
         [1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1],
         [2, 1, 4, 1, 2, 1, 2, 1, 2, 2, 2, 1],
         [2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1],
         [2, 2, 1, 1, 2, 1, 4, 1, 2, 2, 1, 2],
         [2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 1, 2],
         [2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1],
         [2, 2, 1, 2, 2, 4, 1, 1, 2, 1, 2, 1],   /* 1941 */
         [2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 1, 2],
         [1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2],
         [1, 1, 2, 4, 1, 2, 1, 2, 2, 1, 2, 2],
         [1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1, 2],
         [2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2],
         [2, 5, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2],
         [2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
         [2, 2, 1, 2, 1, 2, 3, 2, 1, 2, 1, 2],
         [2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1],
         [2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2],   /* 1951 */
         [1, 2, 1, 2, 4, 2, 1, 2, 1, 2, 1, 2],
         [1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2, 2],
         [1, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2],
         [2, 1, 4, 1, 1, 2, 1, 2, 1, 2, 2, 2],
         [1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2],
         [2, 1, 2, 1, 2, 1, 1, 5, 2, 1, 2, 2],
         [1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
         [1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],
         [2, 1, 2, 1, 2, 5, 2, 1, 2, 1, 2, 1],
         [2, 1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2],   /* 1961 */
         [1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1],
         [2, 1, 2, 3, 2, 1, 2, 1, 2, 2, 2, 1],
         [2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2],
         [1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1],
         [2, 2, 5, 2, 1, 1, 2, 1, 1, 2, 2, 1],
         [2, 2, 1, 2, 2, 1, 1, 2, 1, 2, 1, 2],
         [1, 2, 2, 1, 2, 1, 5, 2, 1, 2, 1, 2],
         [1, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1],
         [2, 1, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2],
         [1, 2, 1, 1, 5, 2, 1, 2, 2, 2, 1, 2],   /* 1971 */
         [1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1],
         [2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2, 1],
         [2, 2, 1, 5, 1, 2, 1, 1, 2, 2, 1, 2],
         [2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2],
         [2, 2, 1, 2, 1, 2, 1, 5, 2, 1, 1, 2],
         [2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 1],
         [2, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1],
         [2, 1, 1, 2, 1, 6, 1, 2, 2, 1, 2, 1],
         [2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2],
         [1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2],   /* 1981 */
         [2, 1, 2, 3, 2, 1, 1, 2, 2, 1, 2, 2],
         [2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2],
         [2, 1, 2, 2, 1, 1, 2, 1, 1, 5, 2, 2],
         [1, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2],
         [1, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1, 1],
         [2, 1, 2, 2, 1, 5, 2, 2, 1, 2, 1, 2],
         [1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1],
         [2, 1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2],
         [1, 2, 1, 1, 5, 1, 2, 1, 2, 2, 2, 2],
         [1, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2],   /* 1991 */
         [1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2],
         [1, 2, 5, 2, 1, 2, 1, 1, 2, 1, 2, 1],
         [2, 2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2],
         [1, 2, 2, 1, 2, 2, 1, 5, 2, 1, 1, 2],
         [1, 2, 1, 2, 2, 1, 2, 1, 2, 2, 1, 2],
         [1, 1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1],
         [2, 1, 1, 2, 3, 2, 2, 1, 2, 2, 2, 1],
         [2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1],
         [2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1],
         [2, 2, 2, 3, 2, 1, 1, 2, 1, 2, 1, 2],   /* 2001 */
         [2, 2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1],
         [2, 2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2],
         [1, 5, 2, 2, 1, 2, 1, 2, 2, 1, 1, 2],
         [1, 2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2],
         [1, 1, 2, 1, 2, 1, 5, 2, 2, 1, 2, 2],
         [1, 1, 2, 1, 1, 2, 1, 2, 2, 2, 1, 2],
         [2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2],
         [2, 2, 1, 1, 5, 1, 2, 1, 2, 1, 2, 2],
         [2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
         [2, 1, 2, 2, 1, 2, 1, 1, 2, 1, 2, 1],   /* 2011 */
         [2, 1, 6, 2, 1, 2, 1, 1, 2, 1, 2, 1],
         [2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2],
         [1, 2, 1, 2, 1, 2, 1, 2, 5, 2, 1, 2],
         [1, 2, 1, 1, 2, 1, 2, 2, 2, 1, 2, 2],
         [1, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2],
         [2, 1, 1, 2, 3, 2, 1, 2, 1, 2, 2, 2],
         [1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2],
         [2, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 2],
         [2, 1, 2, 5, 2, 1, 1, 2, 1, 2, 1, 2],
         [1, 2, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1],   /* 2021 */
         [2, 1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2],
         [1, 5, 2, 1, 2, 1, 2, 2, 1, 2, 1, 2],
         [1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1],
         [2, 1, 2, 1, 1, 5, 2, 1, 2, 2, 2, 1],
         [2, 1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2],
         [1, 2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 2],
         [1, 2, 2, 1, 5, 1, 2, 1, 1, 2, 2, 1],
         [2, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 2],
         [1, 2, 1, 2, 2, 1, 2, 1, 2, 1, 2, 1],
         [2, 1, 5, 2, 1, 2, 2, 1, 2, 1, 2, 1],   /* 2031 */
         [2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2],
         [1, 2, 1, 1, 2, 1, 5, 2, 2, 2, 1, 2],
         [1, 2, 1, 1, 2, 1, 2, 1, 2, 2, 2, 1],
         [2, 1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2],
         [2, 2, 1, 2, 1, 4, 1, 1, 2, 1, 2, 2],
         [2, 2, 1, 2, 1, 1, 2, 1, 1, 2, 1, 2],
         [2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 2, 1],
         [2, 2, 1, 2, 5, 2, 1, 2, 1, 2, 1, 1],
         [2, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2, 1],
         [2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 2],   /* 2041 */
         [1, 5, 1, 2, 1, 2, 1, 2, 2, 2, 1, 2],
         [1, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 2]];

        
          var gan = new Array("甲","乙","丙","丁","戊","己","庚","辛","壬","癸");
                var jee = new Array("子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥");
                var ddi = new Array("쥐","소","범","토끼","용","뱀","말","양","원숭이","닭","개","돼지");
                var week = new Array("일","월","화","수","목","금","토");

                var md = new Array(31,0,31,30,31,30,31,31,30,31,30,31);


      if (yang) {

                // 양력을 음력으로 변환
                var ly, lm, ld;
                var sy, sm, sd;
                var m1, m2, mm, i, j, w;
                dt = new Array(203);
                var k1, k2, td, td1, td2, yoon;

                // 기준일자 양력 1841 년 1 월 23 일 (음력 1840 년 1 월 1 일) 계산
                td1=(1840*365)+(1840/4)-(1840/100)+(1840/400)+23;
                sy = get_year(year);           // 년도 check
                sm = get_month(month);         // 월 check
                md[1] = febdays(sy);           // 윤년 check
                sd = get_day(day,md[sm-1]);    // 일수 check
                var sy1 = sy-1;
                td2 = sy1*365+sy1/4-sy1/100+sy1/400+parseInt(sd);

                 for (i=0; i<sm-1; i++) {
                       td2 = td2 + md[i];
                 }
                td =  td2 - td1 + 1;

                for (i=0; i<=sy-1841; i++) {
                       dt[i] =0;
                       for(j=0; j<12; j++) {
                               switch(kk[i][j]) {
                                       case 1 :
                                                   mm=29;
                                                   break;
                                       case 2 :
                                                   mm=30;
                                                   break;
                                       case 3 :
                                                   mm=58;     // 29+29
                                                   break;
                                       case 4 :
                                                   mm=59;     // 29+30
                                                   break;
                                       case 5 :
                                                   mm=59;     // 30+29
                                                   break;
                                       case 6 :
                                                   mm=60;     // 30+30
                                                   break;
                                       }
                                dt[i] = dt[i] + mm;
                       }
                }
                ly =0 ;
                while(1) {
                       if (td > dt[ly] ) {
                               td = td - dt[ly];
                               ly=ly+1;
                       }
                       else {
                               break;
                       }
                 }
                 lm=0;
                 yoon = "";
                 while(1) {
                       if (kk[ly][lm] <=2) {
                               mm = kk[ly][lm] +28;
                               if (td>mm) {
                                          td = td - mm;
                                          lm = lm +1;
                                }
                                else {
                                       break;
                                }
                       }
                       else {
                               switch (kk[ly][lm]) {
                                       case 3:
                                                   m1 = 29;
                                                   m2 = 29;
                                                   break;
                                       case 4:
                                                   m1 = 29;
                                                   m2 = 30;
                                                   break;
                                       case 5:
                                                   m1 = 30;
                                                   m2 = 29;
                                                   break;
                                       case 6:
                                                   m1 = 30;
                                                   m2 = 30;
                                                   break;
                                 }
                                 if (td>m1) {
                                       td = td - m1;
                                           if (td>m2) {
                                                   td = td - m2;
                                                   lm=lm+1;
                                           }
                                           else {
                                                   yoon ="윤";
                                                   break;
                                           }
                                  }
                                  else {
                                       break;
                                  }
                          }
                    }
                    ly = ly + 1841;
                    lm = lm + 1;
                    ld =Math.round(td) ;
                    w = (parseInt(td2)) % 7;
                    i = (parseInt(td2)+4) % 10;
                    j = (parseInt(td2)+2) % 12;
                    k1 = (parseInt(ly)+6) %10;
                    k2 = (parseInt(ly)+8) % 12;
                     if(ld==0){
					 lm=lm-1;
					 }                             
              // result(k1,k2,yoon,ly,lm,ld,gan,jee);
			   //document.write(gan[k1]+jee[k2]+yoon+ly+lm+ld+gan[i]+jee[j]);
			   var res= k1+","+k2+","+ly+","+lm+","+ld+","+i+","+j;

                  }

                  else if (umm) {
				  
                   // 음력에서 양력으로 변환
                   var lyear, lmonth, lday, leapyes;
                   var syear, smonth, sday;
                   var mm, y1, y2, m1;
                   var i, j, k1, k2, leap, w;
                   var td, y;
                   lyear = get_year(year);        // 년도 check
                   lmonth = get_month(month);     // 월 check

                   y1 = lyear - 1841;
                   m1 = lmonth - 1;
                   leapyes = 0;
                   if (kk[y1][m1] > 2)  {
                          if (yoon) {
                                   leapyes = 1;
                                   switch (kk[y1][m1]) {
                                               case 3:
                                               case 5:
                                                       mm = 29;
                                                       break;
                                               case 4:
                                               case 6:
                                                       mm = 30;
                                                       break;
                                    }
                          }
                          else {
                                   switch (kk[y1][m1]) {
                                           case 1:
                                           case 3:
                                           case 4:
                                                   mm = 29;
                                                   break;
                                           case 2:
                                           case 5:
                                           case 6:
                                                   mm = 30;
                                                   break;
                                    }
                         }
                   }

                  lday = get_day(day, mm);

                  td = 0;
                  for (i=0; i<y1; i++) {
                           for (j=0; j<12; j++) {
                                       switch (kk[i][j]) {
                                               case 1:
                                                       td = td + 29;
                                                       break;
                                               case 2:
                                                       td = td + 30;
                                                       break;
                                               case 3:
                                                       td = td + 58;    // 29+29
                                                       break;
                                               case 4:
                                                       td = td + 59;    // 29+30
                                                       break;
                                               case 5:
                                                       td = td + 59;    // 30+29
                                                       break;
                                               case 6:
                                                       td = td + 60;    // 30+30
                                                       break;
                                       }
                           }
                }
                for (j=0; j<m1; j++) {
                       switch (kk[y1][j]) {
                               case 1:
                                       td = td + 29;
                                       break;
                               case 2:
                                       td = td + 30;
                                       break;
                               case 3:
                                       td = td + 58;    // 29+29
                                       break;
                               case 4:
                                       td = td + 59;    // 29+30
                                       break;
                               case 5:
                                       td = td + 59;    // 30+29
                                       break;
                               case 6:
                                       td = td + 60;    // 30+30
                                       break;
                       }
                 }
                 if (leapyes == 1) {
                       switch(kk[y1][m1]) {
                               case 3:
                               case 4:
                                       td = td + 29;
                                       break;
                               case 5:
                               case 6:
                                       td = td + 30;
                                       break;
                        }
                 }
                 td =  td + parseFloat(lday) + 22;
                 // td : 1841 년 1 월 1 일 부터 원하는 날짜까지의 전체 날수의 합
                 y1 = 1840;
                 do {
                       y1 = y1 +1;
                       if  ((y1 % 400 == 0) || ((y1 % 100 != 0) && (y1 % 4 == 0))) {
                               y2 = 366;
                       }
                       else {
                               y2 = 365;
                       }
                       if (td <= y2) {
                               break;
                       }
                       else {
                               td = td- y2;
                       }
                } while(1);
                   syear = y1;
                   md[1] = parseInt(y2) -337;
                   m1 = 0;
                   do {
                       m1= m1 + 1;
                       if (td <= md[m1-1]) {
                           break;
                       }
                       else {
                           td = td - md[m1-1];
                       }
                  } while(1);
                  smonth = parseInt(m1);
                  sday = parseInt(td);
                  y = parseInt(syear -1);
                  td = y * 365 + y/4 - y/100 +  y/400;
                  for ( i=0; i<smonth-1; i++) {
                       td = td + md[i];
                  }
                 td = Math.round(td) + sday;
                  w = td % 7;
                  i = (td + 4) % 10;
                  j = (td + 2) % 12;
                  k1 = (parseInt(lyear) + 6) % 10;
                  k2 =(parseInt(lyear) + 8) % 12;
                 var res= k1+","+k2+","+lyear+","+lmonth+","+lday+","+i+","+j;
                  
                }
		return res;
}
function get_year(src) {
        if ((src < 1841) || (src > 2043 )) {
           alert('연도 범위는 1841 ~ 2043 까지입니다.');
           document.frmTest.input_day.focus();
        }
        else
           return src;
}
function get_month(src) {
        if ((src < 1) || (src > 12 )) {
            alert('월 범위는 1 ~ 12 까지입니다.');
            document.frmTest.input_day.focus();
        }
        else
            return src;
}
function get_day(src,day) {
        if ((src < 1) || (src > day )) {
            alert('일 범위가 틀립니다.');
            document.frmTest.input_day.focus();
        }
        else
            return src;
}
function febdays(src) {
        if ((src%4 !=0) || ((src%100 == 0) && (src%400 !=0))) {
                    return 28;          // 윤년이 아님
        }
        else {                          // 윤년임

                    return  29;
        }
}

