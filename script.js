let task = document.getElementById("test1");
let content = document.getElementById('test2');
task.addEventListener('click',() => {
    content.innerHTML = `<div class="question">
    <h4>Question 1</h4>
    <div class="card">
      <p>
        <a class="btn" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false"
          aria-controls="collapseExample">
          <i class="icon-action-l fa fa-chevron-down mx-2"></i>
        </a>
        <button class="btn btn-primary ">Accept</button>
        <button class="btn btn-primary">Delete</button>
      </p>
    </div>

    <div class="collapse" id="collapseExample">
      <div class="card card-body">
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when
        the
        user activates the relevant trigger.
      </div>
    </div>
  </div>
  <div class="question">
    <h4>Question 2</h4>
    <div class="card">
      <p>
        <a class="btn" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false"
          aria-controls="collapseExample">
          <i class="icon-action-l fa fa-chevron-down mx-2"></i>
        </a>
        <button class="btn btn-primary ">Accept</button>
        <button class="btn btn-primary">Delete</button>
      </p>
    </div>

    <div class="collapse" id="collapseExample2">
      <div class="card card-body">
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when
        the
        user activates the relevant trigger.
      </div>
    </div>
  </div>
  <div class="question">
    <h4>Question 3</h4>
    <div class="card">
      <p>
        <a class="btn" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false"
          aria-controls="collapseExample">
          <i class="icon-action-l fa fa-chevron-down mx-2"></i>
        </a>
        <button class="btn btn-primary ">Accept</button>
        <button class="btn btn-primary">Delete</button>
      </p>
    </div>

    <div class="collapse" id="collapseExample3">
      <div class="card card-body">
        Some placeholder content for the collapse component. This panel is hidden by default but revealed when
        the
        user activates the relevant trigger.
      </div>
    </div>
  </div>`;
});

