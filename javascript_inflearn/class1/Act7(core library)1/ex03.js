  // setInterval�� �ð��� ���� �ݺ������� ���ư����� �ϴ� �Լ�
  // setTimeout�� duration �и��� �� ���ѹ��� ������ �Ǵ� �Լ�
  $(document).ready(function(){
      var $contents = $("#contents");
      var cnt = 0;
      var timerID = 0;

      // �͸��Լ� Ǯ��
      timerID = setInterval(function(){
          cnt++;
          $contents.text(cnt)
          // �ؽ�Ʈ�� ǥ���ϴ� �Լ�
          // text()�� �̿��Ͽ� div ������ ����ϰ� �ִ�.
      }, 500)    // ������ �и����̹Ƿ� ����� 1�ʴ�.

      $("#stop").click(function(){
          alert("����ϴ�.")
          clearInterval(timerID);
      })
  })
