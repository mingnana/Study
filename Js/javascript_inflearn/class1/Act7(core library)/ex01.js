
  // setInterval�� �ð��� ���� �ݺ������� ���ư����� �ϴ� �Լ�
  // setTimeout�� duration �и��� �� ���ѹ��� ������ �Ǵ� �Լ�
  $(document).ready(function(){
     var $contents = $("#contents");
     var cnt = 0;

      // �͸��Լ� Ǯ��
      // setInterval(function(){
      //     cnt++;  // ���� ����
      //     $contents.text(cnt)
      //     // �ؽ�Ʈ�� ǥ���ϴ� �Լ�
      //     // text()�� �̿��Ͽ� div ������ ����ϰ� �ִ�.
      // }, 1000)    // ������ �и����̹Ƿ� ����� 1�ʴ�.

      // �Ϲ��Լ�Ǯ��
      function addCnt(){
          cnt++;
          $contents.text(cnt);
      }
      setInterval(addCnt, 1000);
  });
