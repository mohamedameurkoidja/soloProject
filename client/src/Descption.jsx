import React from "react";

const Descption = ({ Handelchange }) => {
  return (
    <div>
      <h1>Shortly post:</h1>

      <h2>Lecture de "La terre d'ALINE"</h2>

      <h3>Marc Vallet</h3>

      <h3>12 juil. 2035, 19:00</h3>

      <h3>15, rue du Château, 75001 Paris, France</h3>
      <img
        class="Shortly"
        src="https://apps.npr.org/best-books-2015/assets/cover/unfinished-business-women-men-work-family.jpg"
      />
      <img
        class="Shortly"
        src="https://apps.npr.org/best-books-2015/assets/cover/golden-age-a-novel.jpg"
      />
      <img
        class="Shortly"
        src="https://static.wixstatic.com/media/ea71bb_d13f876cc66b40daae4567147d7a2cf6~mv2_d_2437_3106_s_4_2.jpg/v1/fill/w_628,h_813,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_d13f876cc66b40daae4567147d7a2cf6~mv2_d_2437_3106_s_4_2.jpg"
      />
      <img
        class="Shortly"
        src="https://apps.npr.org/best-books-2015/assets/cover/the-meursault-investigation.jpg"
      />
      <button className="close" onClick={() => Handelchange()}>
        Close
      </button>
    </div>
  );
};
export default Descption;
