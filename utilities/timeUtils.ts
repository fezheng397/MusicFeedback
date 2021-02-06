export function formatSongLength(seconds: number): string {
    // Minutes and seconds
    let mins = ~~(seconds / 60);
    let secs = seconds % 60;

    // Output like "1:01" or "3:59"
    let ret = "";

    ret += mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
  }