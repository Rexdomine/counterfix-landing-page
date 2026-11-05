fetch('../chapters.json').then(response => { if (!response.ok) throw new Error('Guide unavailable'); return response.json(); }).then(chapters => {
  const list = document.querySelector('#chapter-list');
  const transcript = document.querySelector('#transcript-body');
  const video = document.querySelector('#video');
  chapters.forEach(chapter => {
    const time = `${String(Math.floor(chapter.seconds / 60)).padStart(2, '0')}:${String(chapter.seconds % 60).padStart(2, '0')}`;
    const link = document.createElement('a');
    link.className = 'chapter-link'; link.href = `https://youtu.be/TKxkaIZH0ac?t=${chapter.seconds}`;
    const label = document.createElement('span'); label.textContent = time;
    link.append(label, document.createTextNode(chapter.title));
    link.addEventListener('click', event => { event.preventDefault(); video.src = `https://www.youtube-nocookie.com/embed/TKxkaIZH0ac?rel=0&start=${chapter.seconds}&autoplay=1`; video.scrollIntoView({behavior:'smooth',block:'center'}); });
    list.append(link);
    const paragraph = document.createElement('p'); paragraph.textContent = chapter.text; transcript.append(paragraph);
  });
}).catch(() => { document.querySelector('#chapter-list').textContent = 'Chapters are unavailable. You can still watch the video above.'; });
