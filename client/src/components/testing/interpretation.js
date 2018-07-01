function interpretation(res) {
  const total_res = [0, 0, 0, 0, 0, 0];
  /*
  Реалистический тип
  1а, 2а, 3а, 4а, 5а, 16а, 17а, 18а, 19а, 21а, 31а, 32а, 33а, 34а.
  Интеллектуальный тип:
  1б, 6а, 7а, 8а, 9а, 16б, 20а, 22а, 23а, 24а, 31б, 35а, 36а, 37а.
  Социальный тип:
  2б, 6б, 10а, 11а, 12а, 17б, 29б, 25а, 26а, 27а, 36б, 38а, 39а, 41б.
  Конвенциальный тип:
  3б, 7б, 10б, 13а, 14а, 18б, 22б, 25б, 28а, 29а, 32б, 38б, 40а, 42а.
  Предприимчивый тип:
  4б, 8б, 11б, 13б, 15а, 23б, 28б, 30а, 33б, 35б, 37б, 39б, 40б.
  Артистический тип:
  5б, 9б, 12б, 14б, 15б, 19б, 21б, 24а, 27б, 29б, 30б, 34б, 41а, 42б.
  */

  if (res[4] === 2) { total_res[5]++ };
  if (res[8] === 2) { total_res[5]++ };
  if (res[11] === 2) { total_res[5]++ };
  if (res[13] === 2) { total_res[5]++ };
  if (res[14] === 2) { total_res[5]++ };
  if (res[18] === 2) { total_res[5]++ };
  if (res[20] === 2) { total_res[5]++ };
  if (res[23] === 1) { total_res[5]++ };
  if (res[26] === 2) { total_res[5]++ };
  if (res[28] === 2) { total_res[5]++ };
  if (res[29] === 2) { total_res[5]++ };
  if (res[33] === 2) { total_res[5]++ };
  if (res[40] === 1) { total_res[5]++ };
  if (res[41] === 2) { total_res[5]++ };


  if (res[3] === 2) { total_res[4]++ };
  if (res[7] === 2) { total_res[4]++ };
  if (res[10] === 2) { total_res[4]++ };
  if (res[12] === 2) { total_res[4]++ };
  if (res[14] === 1) { total_res[4]++ };
  if (res[22] === 2) { total_res[4]++ };
  if (res[27] === 2) { total_res[4]++ };
  if (res[29] === 1) { total_res[4]++ };
  if (res[32] === 2) { total_res[4]++ };
  if (res[34] === 2) { total_res[4]++ };
  if (res[36] === 2) { total_res[4]++ };
  if (res[38] === 2) { total_res[4]++ };
  if (res[39] === 2) { total_res[4]++ };


  if (res[2] === 2) { total_res[3]++ };
  if (res[6] === 2) { total_res[3]++ };
  if (res[9] === 2) { total_res[3]++ };
  if (res[12] === 1) { total_res[3]++ };
  if (res[13] === 1) { total_res[3]++ };
  if (res[17] === 2) { total_res[3]++ };
  if (res[21] === 2) { total_res[3]++ };
  if (res[24] === 2) { total_res[3]++ };
  if (res[27] === 1) { total_res[3]++ };
  if (res[28] === 1) { total_res[3]++ };
  if (res[31] === 2) { total_res[3]++ };
  if (res[37] === 2) { total_res[3]++ };
  if (res[40] === 1) { total_res[3]++ };
  if (res[41] === 1) { total_res[3]++ };


  if (res[1] === 2) { total_res[2]++ };
  if (res[5] === 2) { total_res[2]++ };
  if (res[9] === 1) { total_res[2]++ };
  if (res[10] === 1) { total_res[2]++ };
  if (res[11] === 1) { total_res[2]++ };
  if (res[16] === 2) { total_res[2]++ };
  if (res[28] === 2) { total_res[2]++ };
  if (res[24] === 1) { total_res[2]++ };
  if (res[25] === 1) { total_res[2]++ };
  if (res[26] === 1) { total_res[2]++ };
  if (res[35] === 2) { total_res[2]++ };
  if (res[37] === 1) { total_res[2]++ };
  if (res[38] === 1) { total_res[2]++ };
  if (res[40] === 2) { total_res[2]++ };

  if (res[0] === 2) { total_res[1]++ };
  if (res[5] === 1) { total_res[1]++ };
  if (res[6] === 1) { total_res[1]++ };
  if (res[7] === 1) { total_res[1]++ };
  if (res[8] === 1) { total_res[1]++ };
  if (res[15] === 2) { total_res[1]++ };
  if (res[19] === 1) { total_res[1]++ };
  if (res[21] === 1) { total_res[1]++ };
  if (res[22] === 1) { total_res[1]++ };
  if (res[23] === 1) { total_res[1]++ };
  if (res[24] === 1) { total_res[1]++ };
  if (res[30] === 2) { total_res[1]++ };
  if (res[34] === 1) { total_res[1]++ };
  if (res[35] === 1) { total_res[1]++ };
  if (res[36] === 1) { total_res[1]++ };

  if (res[0] === 1) { total_res[0]++ };
  if (res[1] === 1) { total_res[0]++ };
  if (res[2] === 1) { total_res[0]++ };
  if (res[3] === 1) { total_res[0]++ };
  if (res[4] === 1) { total_res[0]++ };
  if (res[15] === 1) { total_res[0]++ };
  if (res[16] === 1) { total_res[0]++ };
  if (res[17] === 1) { total_res[0]++ };
  if (res[18] === 1) { total_res[0]++ };
  if (res[20] === 1) { total_res[0]++ };
  if (res[30] === 1) { total_res[0]++ };
  if (res[31] === 1) { total_res[0]++ };
  if (res[32] === 1) { total_res[0]++ };
  if (res[33] === 1) { total_res[0]++ };
return total_res;
}

export default interpretation;
