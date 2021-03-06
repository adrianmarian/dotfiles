set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

" personal wiki/diary/tasks
Plugin 'vimwiki/vimwiki'

" status and tabline
Plugin 'vim-airline/vim-airline'

" airline themes
Plugin 'vim-airline/vim-airline-themes'

" tmux and vim integration
Plugin 'christoomey/vim-tmux-navigator'

" directory tree for vim
Plugin 'scrooloose/nerdtree'

" validation scripts
Plugin 'scrooloose/syntastic'

" edit surrounding tags
Plugin 'tpope/vim-surround'

" git wrapper
Plugin 'tpope/vim-fugitive'

" vim commentary 
Plugin 'tpope/vim-commentary'

" file finder
Plugin 'ctrlpvim/ctrlp.vim'

" colorschemes
Plugin 'flazz/vim-colorschemes'

" vim snippets
Plugin 'honza/vim-snippets'
Plugin 'MarcWeber/vim-addon-mw-utils'
Plugin 'tomtom/tlib_vim'
Plugin 'garbas/vim-snipmate'

" vim autocompletion
Plugin 'valloric/youcompleteme'

" vim easymotion
Plugin 'easymotion/vim-easymotion'

" plugin for jsx syntax
Plugin 'prettier/vim-prettier'

" sublime multiple cursors
Plugin 'terryma/vim-multiple-cursors'

" edit tabs
Plugin 'gcmt/taboo.vim'

" ack for vim
Plugin 'mileszs/ack.vim'

" nerdtree tabs
Plugin 'jistr/vim-nerdtree-tabs'

" vim autotags
Plugin 'craigemery/vim-autotag'

"easy tags
" Plugin 'xolox/vim-easytags'

"vim misc
" Plugin 'xolox/vim-misc'

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line


""""""  PLUGIN CONFIGURATION """""""
" autotags
let g:autotagTagsFile="tags"

" nerdtree tabs
map <Leader>n <plug>NERDTreeTabsToggle<CR>
let g:nerdtree_tabs_open_on_console_startup=1 

" multiple-cursors
let g:multi_cursor_quit_key='<Space>'

" vim-prettier
let g:prettier#autoformat = 0
autocmd BufWritePre *.js,*.jsx,*.mjs,*.ts,*.tsx,*.css,*.less,*.scss,*.json,*.graphql,*.md,*.vue PrettierAsync
let g:prettier#config#semi = 'false'
let g:prettier#config#trailing_comma = 'none'

" ctrl-p ignore config
set wildignore+=*/tmp/*,*.so,*.swp,*.zip     " MacOSX/Linux
let g:ctrlp_custom_ignore = '\v[\/](node_modules|target|dist)|(\.(swp|ico|git|svn|so|exe|dll))$'
map <leader>r :NERDTreeFind<cr>

"taboo.vim
set guioptions-=e
set sessionoptions+=tabpages,globals


"""""" CORE COMMANDS """""""
set tags=./tags,tags;$HOME
imap jj <ESC>
let mapleader = 'f'
set number
" set relativenumber (no longer need since i use easymotion)
colorscheme desert 
" colo japanesque
" colo 3dglasses
" colo PapayaWhip 
" colo donbass 
" colorscheme holokai 
"colo ChocolateLiquor
"colorscheme cyberpunk 
"colorscheme molokai 
syntax on
set clipboard=unnamed
" set clipboard=unnamedplus
" show existing tab with 2 spaces width
set tabstop=2
" when indenting with '>', use 2 spaces width
set shiftwidth=2
" On pressing tab, insert 4 spaces
set expandtab
" automatically set indent of new line
set autoindent
" works mostly
set smartindent

" vim navigation with file tabs
nnoremap th  :tabfirst<CR>
nnoremap tj  :tabnext<CR>
nnoremap tk  :tabprev<CR>
nnoremap tl  :tablast<CR>
nnoremap tt  :tabedit<Space>
nnoremap tn  :tabnext<Space>
nnoremap tm  :tabm<Space>
nnoremap td  :tabclose<CR>
" folding for js
" set foldmethod=syntax
" let javaScript_fold=1
" end folding for js


" highlights the current line (causes bugs with nerdtree)
" set cursorline

" word wrap without line breaks
set wrap
set linebreak
set nolist " list disables linebreak
set textwidth=0
set wrapmargin=0 " wrap lines when coming within n characters from side

set pastetoggle=<f2>
set history=1000

" set filetype tabs
"
" Section AutoGroups {{{
" file type specific settings
augroup configgroup
    autocmd!
    autocmd Filetype sass setlocal ts=2 sw=2 expandtab
    autocmd Filetype scss setlocal ts=2 sw=2 expandtab
    autocmd FileType yaml setlocal ts=2 sts=2 sw=2 expandtab
    autocmd FileType make setlocal ts=8 sts=8 sw=8 noexpandtab
    autocmd FileType ruby setlocal ts=2 sts=2 sw=2 expandtab
    autocmd FileType html setlocal ts=4 sts=4 sw=4 noexpandtab indentkeys-=*<return>
    autocmd FileType jade setlocal ts=2 sts=2 sw=2 noexpandtab
    autocmd FileType markdown,textile setlocal textwidth=0 wrapmargin=0 wrap spell
    autocmd FileType .xml exe ":silent %!xmllint --format --recover - 2>/dev/null"

    " close help files on 'q'
    autocmd FileType help nnoremap q :bd<cr>
augroup END

augroup AutoSaveFolds
  autocmd!
  autocmd BufWinLeave *.* mkview
  autocmd BufWinEnter *.* silent loadview 
augroup END

"TODO: this does not work yet, possibly remove
augroup CtrlpNerdTree 
  autocmd!
  autocmd BufWinEnter :NERDTreeFind<CR>
augroup END

set omnifunc=phpcomplete#CompletePHP


""""""" PLUGIN SETTINGS """"""""
set rtp+=~/.vim
 
" Load up all of our plugins
if filereadable(expand("~/.vimrc.bundles"))
  source ~/.vimrc.bundles
endif


" shrinks NERDTree width
let g:NERDTreeWinSize=15

" fixes NERDTree arrows
set encoding=utf-8 " displays the file in utf8
set fileencoding=utf-8 " writes the file in utf8

" SYNTASTIC 
" use :Helptags to learn more
" https://github.com/vim-syntastic/syntastic/wiki/%28v3.7.0%29---Syntax-Checkers
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
let g:syntastic_loc_list_height=2

" Better :sign interface symbols
let g:syntastic_error_symbol = '✗'
let g:syntastic_warning_symbol = '!'

" On by default, turn it off for html
let g:syntastic_mode_map = { 'mode': 'active',
      \ 'passive_filetypes': ['html'] }
" \ 'active_filetypes': [''] }

" Use jshint (uses ~/.jshintrc)
" let g:syntastic_javascript_checkers = ['jsxhint']
" let g:syntastic_javascript_checkers = ['jshint']
" let g:syntastic_javascript_eslint_exec = 'eslint_d'
let g:syntastic_javascript_checkers = ['eslint']

" PHP syntastic settings
let g:syntastic_php_checkers = ['php', 'phpcs', 'phpmd']

" SASS syntastic settings
" let g:syntastic_sass_checkers = ['sass_lint']
let g:syntastic_scss_checkers = ['scss_lint']

" HTML5 syntastic settings
" let g:syntastic_html_tidy_exec = 'tidy'
" let g:syntastic_html_checkers = ['validator']
let g:syntastic_html_checkers = ['htmlhint']
" let g:syntastic_scss_checkers = ["tidy"]

" CSS syntastic settings
let g:syntastic_css_checkers = ['csslint','prettycss']

" XML syntastic settings
let g:syntastic_xml_checkers=["xmllint"]


" ARILINE settings
let g:airline_theme='base16color'
" let g:airline_theme='tomorrow'
" let g:airline_theme='cool'
" let g:airline_theme='base16_isotope'
" let g:airline_theme='monokai'
" let g:airline_theme='badwolf'
" let g:airline_theme='base16_atelierdune'
" let g:airline_theme='base16_pop'
" let g:airline_theme='base16_shapeshifter'
" let g:airline_theme='badwolf'
" let g:airline_theme='hybridline'
" let g:airline_theme='molokai'
" let g:airline_theme='simple'
" let g:airline_theme='understated'
" let g:airline_theme='wombat'
" let g:airline_theme='xtermlight'

set t_Co=256

" remap kep to use YCM with snipmate
imap <C-J> <esc>a<Plug>snipMateNextOrTrigger
smap <C-J> <Plug>snipMateNextOrTrigger


"""""""""""""""""
" Tern settings (for YCM plugin)
""""""""""""""""""
Bundle 'marijnh/tern_for_vim'
let g:tern_show_argument_hints='on_hold'
" and 
let g:tern_map_keys=1


" settings for easymotion
let g:EasyMotion_do_mapping = 0 " Disable default mappings

" Jump to anywhere you want with minimal keystrokes, with just one key binding.
" `s{char}{label}`
nmap s <Plug>(easymotion-overwin-f)
" or
" `s{char}{char}{label}`
" Need one more keystroke, but on average, it may be more comfortable.
nmap s <Plug>(easymotion-overwin-f2)

" Turn on case insensitive feature
let g:EasyMotion_smartcase = 1

" JK motions: Line motions
map <Leader>j <Plug>(easymotion-j)
map <Leader>k <Plug>(easymotion-k)

" nerdtree settings (supposedly prettifies nerdtree, uncomment these 2 lines to see if this may fix graphic bugs

" let NERDTreeMinimalUI = 1
" let NERDTreeDirArrows = 1









""""""" MISC """"""""

set scrolloff=30 " Keep 3 lines below and above the cursor

if has('mouse')
  set mouse=a
  " set ttymouse=xterm2
endif

" faster redrawing
" set ttyfast
" set diffopt+=vertical

set laststatus=2 " show the satus line all the time

" disable Ex mode
noremap Q <NOP>

" activate spell-checking alternatives
nmap ;s :set invspell spelllang=en<cr>

" fix for webpack
:set backupcopy=yes

" fix for NERDTree arrows
let g:NERDTreeDirArrowExpandable="+"
let g:NERDTreeDirArrowCollapsible="~"

" uncomment this when debugging syntastic 
" let g:syntastic_debug=3

" syntax highlighting for .ejs files
au BufNewFile,BufRead *.ejs set filetype=html

" persistant undo
if has('persistent_undo')      "check if your vim version supports it
set undofile                 "turn on the feature  
set undolevels=5000          "save lots of history
set undodir=$HOME/.vim/undo  "directory where the undo files will be stored
endif
