const scripts = {
  script1: `
local player = game.Players.LocalPlayer
local char = player.Character or player.CharacterAdded:Wait()
local part = Instance.new("Part")
part.Size = Vector3.new(4, 1, 4)
part.Position = char.HumanoidRootPart.Position + Vector3.new(0, 5, 0)
part.Anchored = true
part.Parent = game.Workspace
  `,
  script2: `
for i = 1, 5 do
  local part = Instance.new("Part")
  part.Size = Vector3.new(1, 1, 1)
  part.Position = Vector3.new(i * 5, 5, 0)
  part.Anchored = true
  part.Parent = game.Workspace
end
  `
};

document.getElementById('script1').querySelector('code').textContent = scripts.script1;
document.getElementById('script2').querySelector('code').textContent = scripts.script2;

Prism.highlightAll();

function toggleCode(scriptId) {
  const codeContainer = document.getElementById(scriptId);
  codeContainer.style.display = codeContainer.style.display === 'none' ? 'block' : 'none';
  playClickSound();
}

function copyCode(scriptId) {
  const code = document.getElementById(scriptId).querySelector('code').textContent;
  const textArea = document.createElement('textarea');
  textArea.value = code;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  document.body.removeChild(textArea);
  alert('Code copied to clipboard!');
  playClickSound();
}

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach((section) => section.classList.remove('active'));
  document.getElementById(sectionId).classList.add('active');
  playClickSound();
}

function playClickSound() {
  const clickSound = document.getElementById('click-sound');
  clickSound.currentTime = 0; 
  clickSound.play();
}
