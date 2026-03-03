function createContent() {
  var tocList = document.getElementById('toc-container').getElementsByTagName('ul')[0];
  var articleContainer = document.getElementById('article');

  publish_info.forEach(element => {
    if(element['clubs'].length != 0) {

      /** カテゴリーのTOCの処理 */
      // カテゴリーの目次のリストアイテム
      var newTocCategoryListItem = document.createElement('li');

      // カテゴリーの目次のリンク
      var newTocCategoryListLink = document.createElement('a');
      newTocCategoryListLink.href = '#' + element['category'];
      newTocCategoryListLink.textContent = element['category'];
      newTocCategoryListLink.className = 'text-decoration-none';

      newTocCategoryListItem.appendChild(newTocCategoryListLink);
      tocList.appendChild(newTocCategoryListItem);

      // カテゴリーの記事の表題
      var newArticleCategoryHeader = document.createElement('h2');
      newArticleCategoryHeader.className = 'mt-5';
      newArticleCategoryHeader.id = element['category'];
      newArticleCategoryHeader.textContent = element['category'];

      articleContainer.appendChild(newArticleCategoryHeader);

      /** 各団体の処理 */
      // 各団体の目次のリスト
      var newTocClubList = document.createElement('ul');
      newTocClubList.className = 'list-unstyled';

      element['clubs'].forEach(element => {
        // 各団体の目次のリストアイテム
        var newTocClubListItem = document.createElement('li');
        newTocClubListItem.className = 'indent';

        // 各団体の目次のリンク
        var newTocClubListLink = document.createElement('a');
        newTocClubListLink.href = '#' + element['id'];
        newTocClubListLink.textContent = element['clubName'];
        newTocClubListLink.className = 'text-decoration-none';

        newTocClubListItem.appendChild(newTocClubListLink);
        newTocClubList.appendChild(newTocClubListItem);

        // 各団体の記事の表題
        var newArticleClubHeader = document.createElement('h3');
        newArticleClubHeader.className = 'mt-3';
        newArticleClubHeader.id = element['id'];
        newArticleClubHeader.textContent = element['clubName'];
  
        articleContainer.appendChild(newArticleClubHeader);

        if(element['isMovie']) {
          // 各団体の記事の動画
          var newArticleClubMovieContainer = document.createElement('div');
          newArticleClubMovieContainer.className = 'ratio ratio-16x9';

          var newArticleClubMoviePlayer = document.createElement('iframe');
          newArticleClubMoviePlayer.src = element['movieUrl'];
          newArticleClubMoviePlayer.title = 'YouTube video player';
          newArticleClubMoviePlayer.frameborder = '0';
          newArticleClubMoviePlayer.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
          newArticleClubMoviePlayer.allowFullscreen;

          newArticleClubMovieContainer.appendChild(newArticleClubMoviePlayer)

          articleContainer.appendChild(newArticleClubMovieContainer);
        } else {
          // 各団体の記事の写真
          var newArticleClubImage = document.createElement('img');
          newArticleClubImage.src = './assets/intro_img/' + element['id'] + '.png';
          newArticleClubImage.alt = element['clubName'];
          newArticleClubImage.className = 'img-fluid';

          articleContainer.appendChild(newArticleClubImage);
        }

        // 各団体の記事のリンク
        if(element['links'].length != 0) {
          // 記事のリンクのテーブル要素
          var newArticleLinkTableContainer = document.createElement('div');
          newArticleLinkTableContainer.className = 'table-responsive';

          var newArticleLinkTable = document.createElement('table');
          newArticleLinkTable.className = 'table table-striped mt-2 table-bordered';

          var newArticleLinkTableBody = document.createElement('tbody');

          // 各リンクのfor文
          element['links'].forEach(element => {
            var newArticleLinkTableRow = document.createElement('tr');

            var newArticleLinkTableHeader = document.createElement('th');
            newArticleLinkTableHeader.textContent = element['label'];
            newArticleLinkTableRow.appendChild(newArticleLinkTableHeader);

            var newArticleLinkTableData = document.createElement('th');
            var newArticleLinkTableDataLink = document.createElement('a');
            newArticleLinkTableDataLink.href = element['url'];
            newArticleLinkTableDataLink.textContent = element['url'];

            newArticleLinkTableData.appendChild(newArticleLinkTableDataLink);
            newArticleLinkTableRow.appendChild(newArticleLinkTableData);
            newArticleLinkTableBody.appendChild(newArticleLinkTableRow);
          });

          newArticleLinkTable.appendChild(newArticleLinkTableBody);
          newArticleLinkTableContainer.appendChild(newArticleLinkTable);
          articleContainer.appendChild(newArticleLinkTableContainer);
          
        }
      });
      
      tocList.appendChild(newTocClubList);

    }
  });
}

window.onload = (event) => {
  createContent();
}