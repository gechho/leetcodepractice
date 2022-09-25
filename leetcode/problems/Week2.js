//****************************************   Day 8    **********************************************************
// *******************************  1768. Merge Strings Alternately   ******************************************
// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with
// word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

// Return the merged string.
/*
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let n1 = word1.length;
    let n2 = word2.length;
    let n = 0;
    let nword = [];
    n1 > n2 ? n = n1 : n = n2;

    for (i = 0; i < n; i++) {

      word1.split("").splice(i, 1);
      nword.push(word1[i]);
      word2.split("").splice(i, 1);
      nword.push(word2[i]);
    }
    return nword;
  };
  console.log(mergeAlternately( "pqdffasdr","abcd"));


// **************************************   1678. Goal Parser Interpretation   **************************************
// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", 
// "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o",
//  and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.

var interpret = function (command) {
    a=command.replace(/\(\)/gi, "o").replace(/\(al\)/gi,"al");
    return a;
  };




// **************************************   389. Find the Difference   **************************************
//   You are given two strings s and t.
// String t is generated by random shuffling string s and then add one more letter at a random position.
// Return the letter that was added to t.

var findTheDifference = function (s, t) {
    let s1=s.split("").sort();
    let t1=t.split("").sort();
  
    for (i = 0; i < t1.length; i++) {
      if (t1[i] !== s1[i]) {
        return t1[i];
      }
    }
  };
  console.log(
    findTheDifference(
      "ymbgaraibkfmvocpizdydugvalagaivdbfsfbepeyccqfepzvtpyxtbadkhmwmoswrcxnargtlswqemafandgkmydtimuzvjwxvlfwlhvkrgcsithaqlcvrihrwqkpjdhgfgreqoxzfvhjzojhghfwbvpfzectwwhexthbsndovxejsntmjihchaotbgcysfdaojkjldprwyrnischrgmtvjcorypvopfmegizfkvudubnejzfqffvgdoxohuinkyygbdzmshvyqyhsozwvlhevfepdvafgkqpkmcsikfyxczcovrmwqxxbnhfzcjjcpgzjjfateajnnvlbwhyppdleahgaypxidkpwmfqwqyofwdqgxhjaxvyrzupfwesmxbjszolgwqvfiozofncbohduqgiswuiyddmwlwubetyaummenkdfptjczxemryuotrrymrfdxtrebpbjtpnuhsbnovhectpjhfhahbqrfbyxggobsweefcwxpqsspyssrmdhuelkkvyjxswjwofngpwfxvknkjviiavorwyfzlnktmfwxkvwkrwdcxjfzikdyswsuxegmhtnxjraqrdchaauazfhtklxsksbhwgjphgbasfnlwqwukprgvihntsyymdrfovaszjywuqygpvjtvlsvvqbvzsmgweiayhlubnbsitvfxawhfmfiatxvqrcwjshvovxknnxnyyfexqycrlyksderlqarqhkxyaqwlwoqcribumrqjtelhwdvaiysgjlvksrfvjlcaiwrirtkkxbwgicyhvakxgdjwnwmubkiazdjkfmotglclqndqjxethoutvjchjbkoasnnfbgrnycucfpeovruguzumgmgddqwjgdvaujhyqsqtoexmnfuluaqbxoofvotvfoiexbnprrxptchmlctzgqtkivsilwgwgvpidpvasurraqfkcmxhdapjrlrnkbklwkrvoaziznlpor",
      "qhxepbshlrhoecdaodgpousbzfcqjxulatciapuftffahhlmxbufgjuxstfjvljybfxnenlacmjqoymvamphpxnolwijwcecgwbcjhgdybfffwoygikvoecdggplfohemfypxfsvdrseyhmvkoovxhdvoavsqqbrsqrkqhbtmgwaurgisloqjixfwfvwtszcxwktkwesaxsmhsvlitegrlzkvfqoiiwxbzskzoewbkxtphapavbyvhzvgrrfriddnsrftfowhdanvhjvurhljmpxvpddxmzfgwwpkjrfgqptrmumoemhfpojnxzwlrxkcafvbhlwrapubhveattfifsmiounhqusvhywnxhwrgamgnesxmzliyzisqrwvkiyderyotxhwspqrrkeczjysfujvovsfcfouykcqyjoobfdgnlswfzjmyucaxuaslzwfnetekymrwbvponiaojdqnbmboldvvitamntwnyaeppjaohwkrisrlrgwcjqqgxeqerjrbapfzurcwxhcwzugcgnirkkrxdthtbmdqgvqxilllrsbwjhwqszrjtzyetwubdrlyakzxcveufvhqugyawvkivwonvmrgnchkzdysngqdibhkyboyftxcvvjoggecjsajbuqkjjxfvynrjsnvtfvgpgveycxidhhfauvjovmnbqgoxsafknluyimkczykwdgvqwlvvgdmufxdypwnajkncoynqticfetcdafvtqszuwfmrdggifokwmkgzuxnhncmnsstffqpqbplypapctctfhqpihavligbrutxmmygiyaklqtakdidvnvrjfteazeqmbgklrgrorudayokxptswwkcircwuhcavhdparjfkjypkyxhbgwxbkvpvrtzjaetahmxevmkhdfyidhrdeejapfbafwmdqjqszwnwzgclitdhlnkaiyldwkwwzvhyorgbysyjbxsspnjdewjxbhpsvj"
    )
  );



//****************************************   Day 9    **********************************************************
// *************************************  709. To Lower Case  **************************************************
// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.
// You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
// Return the string formed after mapping.

// The test cases are generated so that a unique mapping will always exist.

var freqAlphabets = function (s) {
    let news = "";
    let re = "";
    for (i=0;i<s.length;i++){
        if ((s[i]>=3) || (s[i+2] !== "#")){
             re = String.fromCharCode(96+Number(s[i]));
  
        }
        else {          
                re =String.fromCharCode(96+Number(s.slice(i,i+2)));
                i +=2;
            
  
        }
        news += re;
    }
    return news;
  
  };
  console.log(freqAlphabets("10#11#12"));
  
  
  
  
  var freqAlphabets = function(s) {
      const base = 'a'.charCodeAt(0) - 1;
      return s.replace(/(\d\d#|\d)/g, c =>
        c[2] === '#'
          ? String.fromCharCode(base + parseInt(c.slice(0, -1)))
          : String.fromCharCode(base + parseInt(c))
      );
    };
