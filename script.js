const EVENTS_PER_PAGE = 4;
const REFRESH_INTERVAL_MS = 10 * 60 * 1000;
const msPerDay = 24 * 60 * 60 * 1000;

const categories = [
  {
    id: 'luxury',
    label: 'Luxo & Concertos',
    query: 'eventos de luxo concertos festivais portugal',
    fallback: [
      {
        title: 'Rock in Rio Lisboa - Área VIP',
        city: 'Lisboa',
        place: 'Parque Tejo',
        details: 'Concerto/Festival',
        month: 6,
        day: 22,
        annual: true,
        url: 'https://rockinriolisboa.sapo.pt/'
      },
      {
        title: 'NOS Alive - Passe Premium',
        city: 'Oeiras',
        place: 'Passeio Marítimo de Algés',
        details: 'Concerto',
        month: 7,
        day: 11,
        annual: true,
        url: 'https://nosalive.com/'
      },
      {
        title: 'Noite de Gala Casino Estoril',
        city: 'Cascais',
        place: 'Casino Estoril',
        details: 'Gala Exclusiva',
        month: 9,
        day: 15,
        annual: true,
        url: 'https://casino-estoril.pt/'
      },
      {
        title: 'Festival Internacional de Música de Marvão',
        city: 'Marvão',
        place: 'Palcos históricos',
        details: 'Música Clássica',
        month: 7,
        day: 26,
        annual: true,
        url: 'https://marvaomusic.com/'
      },
      {
        title: 'MEO Kalorama - Zona Premium',
        city: 'Lisboa',
        place: 'Parque da Bela Vista',
        details: 'Festival',
        month: 8,
        day: 30,
        annual: true,
        url: 'https://meokalorama.pt/'
      }
    ]
  },
  {
    id: 'football',
    label: 'Futebol',
    query: 'jogos futebol liga portugal benfica porto sporting braga',
    fallback: [
      {
        title: 'Benfica vs FC Porto',
        city: 'Lisboa',
        place: 'Estádio da Luz',
        details: 'Liga Portugal',
        month: 11,
        day: 3,
        annual: true,
        url: 'https://www.ligaportugal.pt/'
      },
      {
        title: 'Sporting CP vs Braga',
        city: 'Lisboa',
        place: 'Estádio José Alvalade',
        details: 'Liga Portugal',
        month: 10,
        day: 18,
        annual: true,
        url: 'https://www.ligaportugal.pt/'
      },
      {
        title: 'Final da Taça de Portugal',
        city: 'Oeiras',
        place: 'Estádio Nacional',
        details: 'Taça de Portugal',
        month: 5,
        day: 24,
        annual: true,
        url: 'https://www.fpf.pt/'
      },
      {
        title: 'Supertaça Cândido de Oliveira',
        city: 'Aveiro',
        place: 'Estádio Municipal de Aveiro',
        details: 'Supertaça',
        month: 8,
        day: 1,
        annual: true,
        url: 'https://www.fpf.pt/'
      },
      {
        title: 'Sporting CP vs Benfica',
        city: 'Lisboa',
        place: 'Estádio José Alvalade',
        details: 'Dérbi de Lisboa',
        month: 12,
        day: 15,
        annual: true,
        url: 'https://www.ligaportugal.pt/'
      }
    ]
  },
  {
    id: 'racing',
    label: 'Corridas',
    query: 'formula 1 motogp rally corridas portugal',
    fallback: [
      {
        title: 'MotoGP Portugal',
        city: 'Portimão',
        place: 'Autódromo Internacional do Algarve',
        details: 'MotoGP',
        month: 3,
        day: 28,
        annual: true,
        url: 'https://autodromodoalgarve.com/'
      },
      {
        title: 'WRC Rally de Portugal',
        city: 'Matosinhos',
        place: 'Exponor / troços no Norte e Centro',
        details: 'Campeonato do Mundo de Ralis',
        month: 5,
        day: 16,
        annual: true,
        url: 'https://www.rallydeportugal.pt/'
      },
      {
        title: 'ELMS 4 Horas de Portimão',
        city: 'Portimão',
        place: 'Autódromo Internacional do Algarve',
        details: 'Resistência',
        month: 10,
        day: 20,
        annual: true,
        url: 'https://europeanlemansseries.com/'
      },
      {
        title: 'Campeonato de Portugal de Velocidade',
        city: 'Braga',
        place: 'Circuito Vasco Sameiro',
        details: 'Velocidade nacional',
        month: 9,
        day: 8,
        annual: true,
        url: 'https://fpak.pt/'
      },
      {
        title: 'Rampa da Falperra',
        city: 'Braga',
        place: 'Falperra',
        details: 'Montanha',
        month: 5,
        day: 12,
        annual: true,
        url: 'https://www.rampadafalperra.pt/'
      }
    ]
  },
  {
    id: 'tech',
    label: 'WebSummit & Tech',
    query: 'web summit portugal conferencias tecnologia startups lisboa porto',
    fallback: [
      {
        title: 'Web Summit Lisboa',
        city: 'Lisboa',
        place: 'FIL + Altice Arena',
        details: 'Conferência de tecnologia',
        month: 11,
        day: 12,
        annual: true,
        url: 'https://websummit.com/'
      },
      {
        title: 'Building The Future',
        city: 'Lisboa',
        place: 'Centro de Congressos',
        details: 'Inovação e IA',
        month: 2,
        day: 20,
        annual: true,
        url: 'https://buildingthefuture.pt/'
      },
      {
        title: 'SINFO',
        city: 'Lisboa',
        place: 'Instituto Superior Técnico',
        details: 'Conferência tecnológica académica',
        month: 2,
        day: 28,
        annual: true,
        url: 'https://sinfo.org/'
      },
      {
        title: 'Porto Tech Hub Conference',
        city: 'Porto',
        place: 'Alfândega do Porto',
        details: 'Ecossistema tech',
        month: 10,
        day: 11,
        annual: true,
        url: 'https://portotechhub.com/'
      },
      {
        title: 'Pixels Camp',
        city: 'Lisboa',
        place: 'Evento itinerante',
        details: 'Programação e produto',
        month: 10,
        day: 5,
        annual: true,
        url: 'https://pixels.camp/'
      }
    ]
  }
];

const appState = {
  mode: 'auto',
  activeCategory: categories[0].id,
  visibleCountByCategory: Object.fromEntries(categories.map((category) => [category.id, EVENTS_PER_PAGE])),
  eventsByCategory: Object.fromEntries(categories.map((category) => [category.id, []]))
};

const subtitle = document.querySelector('.subtitle');
const heroStats = document.getElementById('heroStats');
const tabsContainer = document.getElementById('categoryTabs');
const eventsGrid = document.getElementById('eventsGrid');
const highlightsList = document.getElementById('highlightsList');
const activeCategoryCount = document.getElementById('activeCategoryCount');
const loadMoreBtn = document.getElementById('loadMoreBtn');

const rss2json = (query) => {
  const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=pt-PT&gl=PT&ceid=PT:pt-150`;
  return `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}&count=12`;
};

const formatDate = (date) =>
  date.toLocaleDateString('pt-PT', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });

const getNextDate = (event, now = new Date()) => {
  if (event.date) {
    return new Date(event.date);
  }

  const year = now.getFullYear();
  let next = new Date(year, event.month - 1, event.day, 20, 0, 0);

  if (event.annual && next < now) {
    next = new Date(year + 1, event.month - 1, event.day, 20, 0, 0);
  }

  return next;
};

const getCountdownLabel = (eventDate, now = new Date()) => {
  const diff = eventDate - now;
  const daysLeft = Math.ceil(diff / msPerDay);

  if (daysLeft <= 0) return 'Hoje';
  if (daysLeft === 1) return 'Amanhã';
  return `Faltam ${daysLeft} dias`;
};

const enrichEvents = (events) => {
  const now = new Date();

  return events
    .map((event) => {
      const nextDate = getNextDate(event, now);
      return {
        ...event,
        nextDate,
        countdown: getCountdownLabel(nextDate, now)
      };
    })
    .sort((a, b) => a.nextDate - b.nextDate);
};

const mapNewsItemsToEvents = (items) =>
  items.map((item) => ({
    title: item.title,
    city: 'Portugal',
    place: item.author || 'Fonte noticiosa',
    details: 'Pesquisa automática',
    date: item.pubDate,
    url: item.link,
    source: item.source_id || 'Google News'
  }));

const renderTabs = () => {
  tabsContainer.innerHTML = categories
    .map(
      (category) => `
      <button
        class="tab ${appState.activeCategory === category.id ? 'active' : ''}"
        type="button"
        data-category="${category.id}"
        role="tab"
        aria-selected="${appState.activeCategory === category.id}"
      >
        ${category.label}
      </button>`
    )
    .join('');
};

const renderEventsForActiveCategory = () => {
  const activeCategory = categories.find((category) => category.id === appState.activeCategory);
  const allEvents = appState.eventsByCategory[activeCategory.id] || [];
  const visibleCount = appState.visibleCountByCategory[activeCategory.id] || EVENTS_PER_PAGE;
  const visibleEvents = allEvents.slice(0, visibleCount);

  eventsGrid.innerHTML = visibleEvents
    .map(
      (event) => `
      <article class="item">
        <h3><a href="${event.url || '#'}" target="_blank" rel="noopener noreferrer">${event.title}</a></h3>
        <p class="meta">${formatDate(event.nextDate)} • ${event.city}<br>${event.place}<br>${event.details}</p>
        <div class="row">
          <span class="badge">${appState.mode === 'auto' ? 'Pesquisa Automática' : 'Fallback Curado'}</span>
          <span class="countdown">${event.countdown}</span>
        </div>
        <p class="source">Fonte: ${event.source || 'Curadoria local'}</p>
      </article>
    `
    )
    .join('');

  activeCategoryCount.textContent = `${Math.min(visibleCount, allEvents.length)} de ${allEvents.length} eventos`;
  loadMoreBtn.hidden = visibleCount >= allEvents.length;
  loadMoreBtn.textContent = `Ver mais ${activeCategory.label.toLowerCase()}`;
};

const renderHighlightsAndStats = () => {
  const allCategoriesEvents = categories.flatMap((category) => appState.eventsByCategory[category.id] || []);
  const totalEvents = allCategoriesEvents.length;
  const nextEvent = [...allCategoriesEvents].sort((a, b) => a.nextDate - b.nextDate)[0];
  const activeCategory = categories.find((category) => category.id === appState.activeCategory);
  const activeCategoryEvents = appState.eventsByCategory[activeCategory.id] || [];

  heroStats.innerHTML = `
    <div class="stat"><p>Total Eventos</p><strong>${totalEvents}</strong></div>
    <div class="stat"><p>Categoria ativa</p><strong>${activeCategory.label}</strong></div>
    <div class="stat"><p>Próximo evento global</p><strong>${nextEvent ? formatDate(nextEvent.nextDate) : '--'}</strong></div>
    <div class="stat"><p>Atualizado em</p><strong>${new Date().toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' })}</strong></div>
  `;

  highlightsList.innerHTML = [
    nextEvent ? `Próximo evento: ${nextEvent.title}.` : 'Sem eventos para mostrar.',
    `Categoria atual: ${activeCategory.label} (${activeCategoryEvents.length} eventos).`,
    appState.mode === 'auto'
      ? 'Pesquisa automática ativa: novas notícias são carregadas periodicamente.'
      : 'Modo fallback ativo: sem resposta externa, a usar agenda local curada.',
    'Clica nas categorias e usa “Ver mais eventos” para expandir para além dos primeiros 4.'
  ]
    .map((item) => `<li>${item}</li>`)
    .join('');
};

const renderApp = () => {
  renderTabs();
  renderEventsForActiveCategory();
  renderHighlightsAndStats();
};

const loadAutomaticData = async () => {
  subtitle.textContent = 'A pesquisar automaticamente eventos em todas as categorias...';

  const fetches = categories.map(async (category) => {
    const response = await fetch(rss2json(category.query));

    if (!response.ok) {
      throw new Error(`Falha na categoria ${category.id}`);
    }

    const data = await response.json();
    const mapped = mapNewsItemsToEvents((data.items || []).slice(0, 10));

    if (!mapped.length) {
      throw new Error(`Sem eventos na categoria ${category.id}`);
    }

    return [category.id, enrichEvents(mapped)];
  });

  try {
    const results = await Promise.all(fetches);
    appState.mode = 'auto';
    results.forEach(([categoryId, events]) => {
      appState.eventsByCategory[categoryId] = events;
    });
    subtitle.textContent = 'Atualização automática ativa. Categorias atualizadas em tempo real.';
  } catch (error) {
    appState.mode = 'fallback';
    categories.forEach((category) => {
      appState.eventsByCategory[category.id] = enrichEvents(category.fallback);
    });
    subtitle.textContent = 'Modo fallback ativo. Sem rede/API no momento; o site volta a tentar automaticamente.';
  }

  renderApp();
};

tabsContainer.addEventListener('click', (event) => {
  const button = event.target.closest('[data-category]');

  if (!button) {
    return;
  }

  appState.activeCategory = button.dataset.category;
  renderApp();
});

loadMoreBtn.addEventListener('click', () => {
  const categoryId = appState.activeCategory;
  appState.visibleCountByCategory[categoryId] += EVENTS_PER_PAGE;
  renderEventsForActiveCategory();
});

loadAutomaticData();
setInterval(loadAutomaticData, REFRESH_INTERVAL_MS);
