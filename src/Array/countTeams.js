/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let teams = 0;

    for(let i=0; i<rating.length; i++) {
        let j=i+1;
        let z=rating.length-1;

        while(j < rating.length && rating[j] <= rating[i]) j++;
        // while(z < rating.length && rating[z] <= rating[j]) z++;
        while(j < z) {
            teams += 1;
            if(rating[j] > rating[z]) j--;
            else if(rating[j] < rating[z]) teams++;
        }

        if(rating[i] < rating[j]) {
            if(rating[j] < rating[z]) teams++;
        }
    }

    for(let i=rating.length-1; i>=0; i--) {
        let j=i-1;
        let z=i-2;

        while(j >= 0 && rating[j] >= rating[i]) j--;
        while(z >=0 && rating[z] >= rating[j]) z--;

        if(rating[i] > rating[j]) {
            if(rating[j] > rating[z]) teams++;
        }
    }

    return teams;
};

numTeams([2,5,3,4,1])