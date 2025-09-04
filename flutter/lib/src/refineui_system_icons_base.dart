import 'package:flutter/widgets.dart';

/// RefineUI System Icons Base Class
/// 
/// This class provides the base functionality for all RefineUI icons.
abstract class RefineUIIconData extends IconData {
  const RefineUIIconData(int codePoint, {String? fontFamily})
      : super(codePoint, fontFamily: fontFamily);
  
  /// Get the filled version of this icon
  RefineUIIconData get filled;
  
  /// Get the regular version of this icon
  RefineUIIconData get regular;
  
  /// Check if this is a filled icon
  bool get isFilled;
  
  /// Check if this is a regular icon
  bool get isRegular;
}

/// RefineUI System Icons - Regular Variants
class RefineIcons {
  static const Access = RefineUIIconDataRegular(0xF0000);
  static const Accessibility = RefineUIIconDataRegular(0xF0001);
  static const Add = RefineUIIconDataRegular(0xF0002);
  static const Airplane = RefineUIIconDataRegular(0xF0003);
  static const Album = RefineUIIconDataRegular(0xF0004);
  static const Alert = RefineUIIconDataRegular(0xF0005);
  static const Align = RefineUIIconDataRegular(0xF0006);
  static const Android = RefineUIIconDataRegular(0xF0007);
  static const App = RefineUIIconDataRegular(0xF0008);
  static const Appstore = RefineUIIconDataRegular(0xF0009);
  static const Autosum = RefineUIIconDataRegular(0xF000A);
  static const Backpack = RefineUIIconDataRegular(0xF000B);
  static const Backspace = RefineUIIconDataRegular(0xF000C);
  static const Badge = RefineUIIconDataRegular(0xF000D);
  static const Balloon = RefineUIIconDataRegular(0xF000E);
  static const Bar = RefineUIIconDataRegular(0xF000F);
  static const Barcode = RefineUIIconDataRegular(0xF0010);
  static const Battery = RefineUIIconDataRegular(0xF0011);
  static const Block = RefineUIIconDataRegular(0xF0012);
  static const Bluetooth = RefineUIIconDataRegular(0xF0013);
  static const Blur = RefineUIIconDataRegular(0xF0014);
  static const Board = RefineUIIconDataRegular(0xF0015);
  static const Book = RefineUIIconDataRegular(0xF0016);
  static const Bookmark = RefineUIIconDataRegular(0xF0017);
  static const Bug = RefineUIIconDataRegular(0xF0018);
  static const Calculator = RefineUIIconDataRegular(0xF0019);
  static const Calendar = RefineUIIconDataRegular(0xF001A);
  static const Camera = RefineUIIconDataRegular(0xF001B);
  static const Cart = RefineUIIconDataRegular(0xF001C);
  static const Carton = RefineUIIconDataRegular(0xF001D);
  static const Chart = RefineUIIconDataRegular(0xF001E);
  static const Chat = RefineUIIconDataRegular(0xF001F);
  static const Checkmark = RefineUIIconDataRegular(0xF0020);
  static const Chess = RefineUIIconDataRegular(0xF0021);
  static const Chevron = RefineUIIconDataRegular(0xF0022);
  static const Circle = RefineUIIconDataRegular(0xF0023);
  static const Clipboard = RefineUIIconDataRegular(0xF0024);
  static const Clock = RefineUIIconDataRegular(0xF0025);
  static const Cloud = RefineUIIconDataRegular(0xF0026);
  static const Clover = RefineUIIconDataRegular(0xF0027);
  static const Code = RefineUIIconDataRegular(0xF0028);
  static const Comma = RefineUIIconDataRegular(0xF0029);
  static const Comment = RefineUIIconDataRegular(0xF002A);
  static const Cone = RefineUIIconDataRegular(0xF002B);
  static const Contrast = RefineUIIconDataRegular(0xF002C);
  static const Control = RefineUIIconDataRegular(0xF002D);
  static const Cookie = RefineUIIconDataRegular(0xF002E);
  static const Copy = RefineUIIconDataRegular(0xF002F);
  static const Couch = RefineUIIconDataRegular(0xF0030);
  static const Cpu = RefineUIIconDataRegular(0xF0031);
  static const Crop = RefineUIIconDataRegular(0xF0032);
  static const Crown = RefineUIIconDataRegular(0xF0033);
  static const Css = RefineUIIconDataRegular(0xF0034);
  static const Cube = RefineUIIconDataRegular(0xF0035);
  static const Cursor = RefineUIIconDataRegular(0xF0036);
  static const Cut = RefineUIIconDataRegular(0xF0037);
  static const Dart = RefineUIIconDataRegular(0xF0038);
  static const Database = RefineUIIconDataRegular(0xF0039);
  static const Delete = RefineUIIconDataRegular(0xF003A);
  static const Dentist = RefineUIIconDataRegular(0xF003B);
  static const Desk = RefineUIIconDataRegular(0xF003C);
  static const Desktop = RefineUIIconDataRegular(0xF003D);
  static const Dialpad = RefineUIIconDataRegular(0xF003E);
  static const Diamond = RefineUIIconDataRegular(0xF003F);
  static const Dismiss = RefineUIIconDataRegular(0xF0040);
  static const Doctor = RefineUIIconDataRegular(0xF0041);
  static const Document = RefineUIIconDataRegular(0xF0042);
  static const Door = RefineUIIconDataRegular(0xF0043);
  static const Drag = RefineUIIconDataRegular(0xF0044);
  static const Drawer = RefineUIIconDataRegular(0xF0045);
  static const Drop = RefineUIIconDataRegular(0xF0046);
  static const Dual = RefineUIIconDataRegular(0xF0047);
  static const Dumbbell = RefineUIIconDataRegular(0xF0048);
  static const Dust = RefineUIIconDataRegular(0xF0049);
  static const Earth = RefineUIIconDataRegular(0xF004A);
  static const Edit = RefineUIIconDataRegular(0xF004B);
  static const Elevator = RefineUIIconDataRegular(0xF004C);
  static const Emoji = RefineUIIconDataRegular(0xF004D);
  static const Engine = RefineUIIconDataRegular(0xF004E);
  static const Equal = RefineUIIconDataRegular(0xF004F);
  static const Error = RefineUIIconDataRegular(0xF0050);
  static const Eye = RefineUIIconDataRegular(0xF0051);
  static const Eyedropper = RefineUIIconDataRegular(0xF0052);
  static const Fast = RefineUIIconDataRegular(0xF0053);
  static const Filmstrip = RefineUIIconDataRegular(0xF0054);
  static const Filter = RefineUIIconDataRegular(0xF0055);
  static const Fire = RefineUIIconDataRegular(0xF0056);
  static const Flag = RefineUIIconDataRegular(0xF0057);
  static const Flash = RefineUIIconDataRegular(0xF0058);
  static const Flashlight = RefineUIIconDataRegular(0xF0059);
  static const Flip = RefineUIIconDataRegular(0xF005A);
  static const Folder = RefineUIIconDataRegular(0xF005B);
  static const Frame = RefineUIIconDataRegular(0xF005C);
  static const Full = RefineUIIconDataRegular(0xF005D);
  static const Games = RefineUIIconDataRegular(0xF005E);
  static const Gantt = RefineUIIconDataRegular(0xF005F);
  static const Gas = RefineUIIconDataRegular(0xF0060);
  static const Gavel = RefineUIIconDataRegular(0xF0061);
  static const Gif = RefineUIIconDataRegular(0xF0062);
  static const Gift = RefineUIIconDataRegular(0xF0063);
  static const Git = RefineUIIconDataRegular(0xF0064);
  static const Glasses = RefineUIIconDataRegular(0xF0065);
  static const Global = RefineUIIconDataRegular(0xF0066);
  static const Grid = RefineUIIconDataRegular(0xF0067);
  static const Guest = RefineUIIconDataRegular(0xF0068);
  static const Guitar = RefineUIIconDataRegular(0xF0069);
  static const Hammer = RefineUIIconDataRegular(0xF006A);
  static const Hard = RefineUIIconDataRegular(0xF006B);
  static const Hat = RefineUIIconDataRegular(0xF006C);
  static const Hd = RefineUIIconDataRegular(0xF006D);
  static const Hdr = RefineUIIconDataRegular(0xF006E);
  static const Headphones = RefineUIIconDataRegular(0xF006F);
  static const Headset = RefineUIIconDataRegular(0xF0070);
  static const Heart = RefineUIIconDataRegular(0xF0071);
  static const Hexagon = RefineUIIconDataRegular(0xF0072);
  static const Highlight = RefineUIIconDataRegular(0xF0073);
  static const Highway = RefineUIIconDataRegular(0xF0074);
  static const Home = RefineUIIconDataRegular(0xF0075);
  static const Hourglass = RefineUIIconDataRegular(0xF0076);
  static const Html = RefineUIIconDataRegular(0xF0077);
  static const Image = RefineUIIconDataRegular(0xF0078);
  static const Important = RefineUIIconDataRegular(0xF0079);
  static const Incognito = RefineUIIconDataRegular(0xF007A);
  static const Info = RefineUIIconDataRegular(0xF007B);
  static const Ios = RefineUIIconDataRegular(0xF007C);
  static const Iot = RefineUIIconDataRegular(0xF007D);
  static const Javascript = RefineUIIconDataRegular(0xF007E);
  static const Joystick = RefineUIIconDataRegular(0xF007F);
  static const Json = RefineUIIconDataRegular(0xF0080);
  static const Key = RefineUIIconDataRegular(0xF0081);
  static const Keyboard = RefineUIIconDataRegular(0xF0082);
  static const Kiosk = RefineUIIconDataRegular(0xF0083);
  static const Kotlin = RefineUIIconDataRegular(0xF0084);
  static const Laptop = RefineUIIconDataRegular(0xF0085);
  static const Layer = RefineUIIconDataRegular(0xF0086);
  static const Lightbulb = RefineUIIconDataRegular(0xF0087);
  static const Line = RefineUIIconDataRegular(0xF0088);
  static const Link = RefineUIIconDataRegular(0xF0089);
  static const Local = RefineUIIconDataRegular(0xF008A);
  static const Location = RefineUIIconDataRegular(0xF008B);
  static const Lock = RefineUIIconDataRegular(0xF008C);
  static const Luggage = RefineUIIconDataRegular(0xF008D);
  static const Macos = RefineUIIconDataRegular(0xF008E);
  static const Mail = RefineUIIconDataRegular(0xF008F);
  static const Mailbox = RefineUIIconDataRegular(0xF0090);
  static const Map = RefineUIIconDataRegular(0xF0091);
  static const Markdown = RefineUIIconDataRegular(0xF0092);
  static const Math = RefineUIIconDataRegular(0xF0093);
  static const Megaphone = RefineUIIconDataRegular(0xF0094);
  static const Mic = RefineUIIconDataRegular(0xF0095);
  static const Moon = RefineUIIconDataRegular(0xF0096);
  static const More = RefineUIIconDataRegular(0xF0097);
  static const Mouse = RefineUIIconDataRegular(0xF0098);
  static const Movie = RefineUIIconDataRegular(0xF0099);
  static const Network = RefineUIIconDataRegular(0xF009A);
  static const News = RefineUIIconDataRegular(0xF009B);
  static const Next = RefineUIIconDataRegular(0xF009C);
  static const Note = RefineUIIconDataRegular(0xF009D);
  static const Notebook = RefineUIIconDataRegular(0xF009E);
  static const Notepad = RefineUIIconDataRegular(0xF009F);
  static const Number = RefineUIIconDataRegular(0xF00A0);
  static const Opacity = RefineUIIconDataRegular(0xF00A1);
  static const Open = RefineUIIconDataRegular(0xF00A2);
  static const Options = RefineUIIconDataRegular(0xF00A3);
  static const Organization = RefineUIIconDataRegular(0xF00A4);
  static const Orientation = RefineUIIconDataRegular(0xF00A5);
  static const Oval = RefineUIIconDataRegular(0xF00A6);
  static const Oven = RefineUIIconDataRegular(0xF00A7);
  static const Padding = RefineUIIconDataRegular(0xF00A8);
  static const Page = RefineUIIconDataRegular(0xF00A9);
  static const Paint = RefineUIIconDataRegular(0xF00AA);
  static const Parallelogram = RefineUIIconDataRegular(0xF00AB);
  static const Password = RefineUIIconDataRegular(0xF00AC);
  static const Pause = RefineUIIconDataRegular(0xF00AD);
  static const Payment = RefineUIIconDataRegular(0xF00AE);
  static const Pen = RefineUIIconDataRegular(0xF00AF);
  static const Pentagon = RefineUIIconDataRegular(0xF00B0);
  static const Person = RefineUIIconDataRegular(0xF00B1);
  static const Phone = RefineUIIconDataRegular(0xF00B2);
  static const Piano = RefineUIIconDataRegular(0xF00B3);
  static const Pin = RefineUIIconDataRegular(0xF00B4);
  static const Pipeline = RefineUIIconDataRegular(0xF00B5);
  static const Play = RefineUIIconDataRegular(0xF00B6);
  static const Playstore = RefineUIIconDataRegular(0xF00B7);
  static const Port = RefineUIIconDataRegular(0xF00B8);
  static const Power = RefineUIIconDataRegular(0xF00B9);
  static const Preview = RefineUIIconDataRegular(0xF00BA);
  static const Previous = RefineUIIconDataRegular(0xF00BB);
  static const Print = RefineUIIconDataRegular(0xF00BC);
  static const Pulse = RefineUIIconDataRegular(0xF00BD);
  static const Python = RefineUIIconDataRegular(0xF00BE);
  static const Qr = RefineUIIconDataRegular(0xF00BF);
  static const Question = RefineUIIconDataRegular(0xF00C0);
  static const Radio = RefineUIIconDataRegular(0xF00C1);
  static const Ram = RefineUIIconDataRegular(0xF00C2);
  static const Record = RefineUIIconDataRegular(0xF00C3);
  static const Rectangle = RefineUIIconDataRegular(0xF00C4);
  static const Refineui = RefineUIIconDataRegular(0xF00C5);
  static const Rewind = RefineUIIconDataRegular(0xF00C6);
  static const Rhombus = RefineUIIconDataRegular(0xF00C7);
  static const Ribbon = RefineUIIconDataRegular(0xF00C8);
  static const Road = RefineUIIconDataRegular(0xF00C9);
  static const Rocket = RefineUIIconDataRegular(0xF00CA);
  static const Rotation = RefineUIIconDataRegular(0xF00CB);
  static const Router = RefineUIIconDataRegular(0xF00CC);
  static const Rss = RefineUIIconDataRegular(0xF00CD);
  static const Ruler = RefineUIIconDataRegular(0xF00CE);
  static const Run = RefineUIIconDataRegular(0xF00CF);
  static const Save = RefineUIIconDataRegular(0xF00D0);
  static const Scales = RefineUIIconDataRegular(0xF00D1);
  static const Script = RefineUIIconDataRegular(0xF00D2);
  static const Search = RefineUIIconDataRegular(0xF00D3);
  static const Send = RefineUIIconDataRegular(0xF00D4);
  static const Serial = RefineUIIconDataRegular(0xF00D5);
  static const Server = RefineUIIconDataRegular(0xF00D6);
  static const Service = RefineUIIconDataRegular(0xF00D7);
  static const Settings = RefineUIIconDataRegular(0xF00D8);
  static const Shape = RefineUIIconDataRegular(0xF00D9);
  static const Shapes = RefineUIIconDataRegular(0xF00DA);
  static const Share = RefineUIIconDataRegular(0xF00DB);
  static const Shell = RefineUIIconDataRegular(0xF00DC);
  static const Shield = RefineUIIconDataRegular(0xF00DD);
  static const Shopping = RefineUIIconDataRegular(0xF00DE);
  static const Sim = RefineUIIconDataRegular(0xF00DF);
  static const Slide = RefineUIIconDataRegular(0xF00E0);
  static const Smartwatch = RefineUIIconDataRegular(0xF00E1);
  static const Sound = RefineUIIconDataRegular(0xF00E2);
  static const Spacebar = RefineUIIconDataRegular(0xF00E3);
  static const Sport = RefineUIIconDataRegular(0xF00E4);
  static const Spray = RefineUIIconDataRegular(0xF00E5);
  static const Square = RefineUIIconDataRegular(0xF00E6);
  static const Star = RefineUIIconDataRegular(0xF00E7);
  static const Stop = RefineUIIconDataRegular(0xF00E8);
  static const Subtract = RefineUIIconDataRegular(0xF00E9);
  static const Swift = RefineUIIconDataRegular(0xF00EA);
  static const Tab = RefineUIIconDataRegular(0xF00EB);
  static const Tablet = RefineUIIconDataRegular(0xF00EC);
  static const Tag = RefineUIIconDataRegular(0xF00ED);
  static const Target = RefineUIIconDataRegular(0xF00EE);
  static const Temperature = RefineUIIconDataRegular(0xF00EF);
  static const Tent = RefineUIIconDataRegular(0xF00F0);
  static const Text = RefineUIIconDataRegular(0xF00F1);
  static const Textbox = RefineUIIconDataRegular(0xF00F2);
  static const Thinking = RefineUIIconDataRegular(0xF00F3);
  static const Ticket = RefineUIIconDataRegular(0xF00F4);
  static const Timer = RefineUIIconDataRegular(0xF00F5);
  static const Toggle = RefineUIIconDataRegular(0xF00F6);
  static const Toolbox = RefineUIIconDataRegular(0xF00F7);
  static const Trophy = RefineUIIconDataRegular(0xF00F8);
  static const Tv = RefineUIIconDataRegular(0xF00F9);
  static const Typescript = RefineUIIconDataRegular(0xF00FA);
  static const Umbrella = RefineUIIconDataRegular(0xF00FB);
  static const Usb = RefineUIIconDataRegular(0xF00FC);
  static const Verified = RefineUIIconDataRegular(0xF00FD);
  static const Video = RefineUIIconDataRegular(0xF00FE);
  static const Voicemail = RefineUIIconDataRegular(0xF00FF);
  static const Vote = RefineUIIconDataRegular(0xF0100);
  static const Walkie = RefineUIIconDataRegular(0xF0101);
  static const Wallet = RefineUIIconDataRegular(0xF0102);
  static const Wand = RefineUIIconDataRegular(0xF0103);
  static const Warning = RefineUIIconDataRegular(0xF0104);
  static const Washer = RefineUIIconDataRegular(0xF0105);
  static const Water = RefineUIIconDataRegular(0xF0106);
  static const Weather = RefineUIIconDataRegular(0xF0107);
  static const Web = RefineUIIconDataRegular(0xF0108);
  static const Wifi = RefineUIIconDataRegular(0xF0109);
  static const Windows = RefineUIIconDataRegular(0xF010A);
  static const Wrench = RefineUIIconDataRegular(0xF010B);
  static const Xray = RefineUIIconDataRegular(0xF010C);
  static const Zoom = RefineUIIconDataRegular(0xF010D);
}

/// RefineUI System Icons - Filled Variants
class RefineIconsFilled {
  static const Access = RefineUIIconDataFilled(0xF0000);
  static const Accessibility = RefineUIIconDataFilled(0xF0001);
  static const Add = RefineUIIconDataFilled(0xF0002);
  static const Airplane = RefineUIIconDataFilled(0xF0003);
  static const Album = RefineUIIconDataFilled(0xF0004);
  static const Alert = RefineUIIconDataFilled(0xF0005);
  static const Align = RefineUIIconDataFilled(0xF0006);
  static const Android = RefineUIIconDataFilled(0xF0007);
  static const App = RefineUIIconDataFilled(0xF0008);
  static const Appstore = RefineUIIconDataFilled(0xF0009);
  static const Autosum = RefineUIIconDataFilled(0xF000A);
  static const Backpack = RefineUIIconDataFilled(0xF000B);
  static const Backspace = RefineUIIconDataFilled(0xF000C);
  static const Badge = RefineUIIconDataFilled(0xF000D);
  static const Balloon = RefineUIIconDataFilled(0xF000E);
  static const Bar = RefineUIIconDataFilled(0xF000F);
  static const Barcode = RefineUIIconDataFilled(0xF0010);
  static const Battery = RefineUIIconDataFilled(0xF0011);
  static const Block = RefineUIIconDataFilled(0xF0012);
  static const Bluetooth = RefineUIIconDataFilled(0xF0013);
  static const Blur = RefineUIIconDataFilled(0xF0014);
  static const Board = RefineUIIconDataFilled(0xF0015);
  static const Book = RefineUIIconDataFilled(0xF0016);
  static const Bookmark = RefineUIIconDataFilled(0xF0017);
  static const Bug = RefineUIIconDataFilled(0xF0018);
  static const Calculator = RefineUIIconDataFilled(0xF0019);
  static const Calendar = RefineUIIconDataFilled(0xF001A);
  static const Camera = RefineUIIconDataFilled(0xF001B);
  static const Cart = RefineUIIconDataFilled(0xF001C);
  static const Carton = RefineUIIconDataFilled(0xF001D);
  static const Chart = RefineUIIconDataFilled(0xF001E);
  static const Chat = RefineUIIconDataFilled(0xF001F);
  static const Checkmark = RefineUIIconDataFilled(0xF0020);
  static const Chess = RefineUIIconDataFilled(0xF0021);
  static const Chevron = RefineUIIconDataFilled(0xF0022);
  static const Circle = RefineUIIconDataFilled(0xF0023);
  static const Clipboard = RefineUIIconDataFilled(0xF0024);
  static const Clock = RefineUIIconDataFilled(0xF0025);
  static const Cloud = RefineUIIconDataFilled(0xF0026);
  static const Clover = RefineUIIconDataFilled(0xF0027);
  static const Code = RefineUIIconDataFilled(0xF0028);
  static const Comma = RefineUIIconDataFilled(0xF0029);
  static const Comment = RefineUIIconDataFilled(0xF002A);
  static const Cone = RefineUIIconDataFilled(0xF002B);
  static const Contrast = RefineUIIconDataFilled(0xF002C);
  static const Control = RefineUIIconDataFilled(0xF002D);
  static const Cookie = RefineUIIconDataFilled(0xF002E);
  static const Copy = RefineUIIconDataFilled(0xF002F);
  static const Couch = RefineUIIconDataFilled(0xF0030);
  static const Cpu = RefineUIIconDataFilled(0xF0031);
  static const Crop = RefineUIIconDataFilled(0xF0032);
  static const Crown = RefineUIIconDataFilled(0xF0033);
  static const Css = RefineUIIconDataFilled(0xF0034);
  static const Cube = RefineUIIconDataFilled(0xF0035);
  static const Cursor = RefineUIIconDataFilled(0xF0036);
  static const Cut = RefineUIIconDataFilled(0xF0037);
  static const Dart = RefineUIIconDataFilled(0xF0038);
  static const Database = RefineUIIconDataFilled(0xF0039);
  static const Delete = RefineUIIconDataFilled(0xF003A);
  static const Dentist = RefineUIIconDataFilled(0xF003B);
  static const Desk = RefineUIIconDataFilled(0xF003C);
  static const Desktop = RefineUIIconDataFilled(0xF003D);
  static const Dialpad = RefineUIIconDataFilled(0xF003E);
  static const Diamond = RefineUIIconDataFilled(0xF003F);
  static const Dismiss = RefineUIIconDataFilled(0xF0040);
  static const Doctor = RefineUIIconDataFilled(0xF0041);
  static const Document = RefineUIIconDataFilled(0xF0042);
  static const Door = RefineUIIconDataFilled(0xF0043);
  static const Drag = RefineUIIconDataFilled(0xF0044);
  static const Drawer = RefineUIIconDataFilled(0xF0045);
  static const Drop = RefineUIIconDataFilled(0xF0046);
  static const Dual = RefineUIIconDataFilled(0xF0047);
  static const Dumbbell = RefineUIIconDataFilled(0xF0048);
  static const Dust = RefineUIIconDataFilled(0xF0049);
  static const Earth = RefineUIIconDataFilled(0xF004A);
  static const Edit = RefineUIIconDataFilled(0xF004B);
  static const Elevator = RefineUIIconDataFilled(0xF004C);
  static const Emoji = RefineUIIconDataFilled(0xF004D);
  static const Engine = RefineUIIconDataFilled(0xF004E);
  static const Equal = RefineUIIconDataFilled(0xF004F);
  static const Error = RefineUIIconDataFilled(0xF0050);
  static const Eye = RefineUIIconDataFilled(0xF0051);
  static const Eyedropper = RefineUIIconDataFilled(0xF0052);
  static const Fast = RefineUIIconDataFilled(0xF0053);
  static const Filmstrip = RefineUIIconDataFilled(0xF0054);
  static const Filter = RefineUIIconDataFilled(0xF0055);
  static const Fire = RefineUIIconDataFilled(0xF0056);
  static const Flag = RefineUIIconDataFilled(0xF0057);
  static const Flash = RefineUIIconDataFilled(0xF0058);
  static const Flashlight = RefineUIIconDataFilled(0xF0059);
  static const Flip = RefineUIIconDataFilled(0xF005A);
  static const Folder = RefineUIIconDataFilled(0xF005B);
  static const Frame = RefineUIIconDataFilled(0xF005C);
  static const Full = RefineUIIconDataFilled(0xF005D);
  static const Games = RefineUIIconDataFilled(0xF005E);
  static const Gantt = RefineUIIconDataFilled(0xF005F);
  static const Gas = RefineUIIconDataFilled(0xF0060);
  static const Gavel = RefineUIIconDataFilled(0xF0061);
  static const Gif = RefineUIIconDataFilled(0xF0062);
  static const Gift = RefineUIIconDataFilled(0xF0063);
  static const Git = RefineUIIconDataFilled(0xF0064);
  static const Glasses = RefineUIIconDataFilled(0xF0065);
  static const Global = RefineUIIconDataFilled(0xF0066);
  static const Grid = RefineUIIconDataFilled(0xF0067);
  static const Guest = RefineUIIconDataFilled(0xF0068);
  static const Guitar = RefineUIIconDataFilled(0xF0069);
  static const Hammer = RefineUIIconDataFilled(0xF006A);
  static const Hard = RefineUIIconDataFilled(0xF006B);
  static const Hat = RefineUIIconDataFilled(0xF006C);
  static const Hd = RefineUIIconDataFilled(0xF006D);
  static const Hdr = RefineUIIconDataFilled(0xF006E);
  static const Headphones = RefineUIIconDataFilled(0xF006F);
  static const Headset = RefineUIIconDataFilled(0xF0070);
  static const Heart = RefineUIIconDataFilled(0xF0071);
  static const Hexagon = RefineUIIconDataFilled(0xF0072);
  static const Highlight = RefineUIIconDataFilled(0xF0073);
  static const Highway = RefineUIIconDataFilled(0xF0074);
  static const Home = RefineUIIconDataFilled(0xF0075);
  static const Hourglass = RefineUIIconDataFilled(0xF0076);
  static const Html = RefineUIIconDataFilled(0xF0077);
  static const Image = RefineUIIconDataFilled(0xF0078);
  static const Important = RefineUIIconDataFilled(0xF0079);
  static const Incognito = RefineUIIconDataFilled(0xF007A);
  static const Info = RefineUIIconDataFilled(0xF007B);
  static const Ios = RefineUIIconDataFilled(0xF007C);
  static const Iot = RefineUIIconDataFilled(0xF007D);
  static const Javascript = RefineUIIconDataFilled(0xF007E);
  static const Joystick = RefineUIIconDataFilled(0xF007F);
  static const Json = RefineUIIconDataFilled(0xF0080);
  static const Key = RefineUIIconDataFilled(0xF0081);
  static const Keyboard = RefineUIIconDataFilled(0xF0082);
  static const Kiosk = RefineUIIconDataFilled(0xF0083);
  static const Kotlin = RefineUIIconDataFilled(0xF0084);
  static const Laptop = RefineUIIconDataFilled(0xF0085);
  static const Layer = RefineUIIconDataFilled(0xF0086);
  static const Lightbulb = RefineUIIconDataFilled(0xF0087);
  static const Line = RefineUIIconDataFilled(0xF0088);
  static const Link = RefineUIIconDataFilled(0xF0089);
  static const Local = RefineUIIconDataFilled(0xF008A);
  static const Location = RefineUIIconDataFilled(0xF008B);
  static const Lock = RefineUIIconDataFilled(0xF008C);
  static const Luggage = RefineUIIconDataFilled(0xF008D);
  static const Macos = RefineUIIconDataFilled(0xF008E);
  static const Mail = RefineUIIconDataFilled(0xF008F);
  static const Mailbox = RefineUIIconDataFilled(0xF0090);
  static const Map = RefineUIIconDataFilled(0xF0091);
  static const Markdown = RefineUIIconDataFilled(0xF0092);
  static const Math = RefineUIIconDataFilled(0xF0093);
  static const Megaphone = RefineUIIconDataFilled(0xF0094);
  static const Mic = RefineUIIconDataFilled(0xF0095);
  static const Moon = RefineUIIconDataFilled(0xF0096);
  static const More = RefineUIIconDataFilled(0xF0097);
  static const Mouse = RefineUIIconDataFilled(0xF0098);
  static const Movie = RefineUIIconDataFilled(0xF0099);
  static const Network = RefineUIIconDataFilled(0xF009A);
  static const News = RefineUIIconDataFilled(0xF009B);
  static const Next = RefineUIIconDataFilled(0xF009C);
  static const Note = RefineUIIconDataFilled(0xF009D);
  static const Notebook = RefineUIIconDataFilled(0xF009E);
  static const Notepad = RefineUIIconDataFilled(0xF009F);
  static const Number = RefineUIIconDataFilled(0xF00A0);
  static const Opacity = RefineUIIconDataFilled(0xF00A1);
  static const Open = RefineUIIconDataFilled(0xF00A2);
  static const Options = RefineUIIconDataFilled(0xF00A3);
  static const Organization = RefineUIIconDataFilled(0xF00A4);
  static const Orientation = RefineUIIconDataFilled(0xF00A5);
  static const Oval = RefineUIIconDataFilled(0xF00A6);
  static const Oven = RefineUIIconDataFilled(0xF00A7);
  static const Padding = RefineUIIconDataFilled(0xF00A8);
  static const Page = RefineUIIconDataFilled(0xF00A9);
  static const Paint = RefineUIIconDataFilled(0xF00AA);
  static const Parallelogram = RefineUIIconDataFilled(0xF00AB);
  static const Password = RefineUIIconDataFilled(0xF00AC);
  static const Pause = RefineUIIconDataFilled(0xF00AD);
  static const Payment = RefineUIIconDataFilled(0xF00AE);
  static const Pen = RefineUIIconDataFilled(0xF00AF);
  static const Pentagon = RefineUIIconDataFilled(0xF00B0);
  static const Person = RefineUIIconDataFilled(0xF00B1);
  static const Phone = RefineUIIconDataFilled(0xF00B2);
  static const Piano = RefineUIIconDataFilled(0xF00B3);
  static const Pin = RefineUIIconDataFilled(0xF00B4);
  static const Pipeline = RefineUIIconDataFilled(0xF00B5);
  static const Play = RefineUIIconDataFilled(0xF00B6);
  static const Playstore = RefineUIIconDataFilled(0xF00B7);
  static const Port = RefineUIIconDataFilled(0xF00B8);
  static const Power = RefineUIIconDataFilled(0xF00B9);
  static const Preview = RefineUIIconDataFilled(0xF00BA);
  static const Previous = RefineUIIconDataFilled(0xF00BB);
  static const Print = RefineUIIconDataFilled(0xF00BC);
  static const Pulse = RefineUIIconDataFilled(0xF00BD);
  static const Python = RefineUIIconDataFilled(0xF00BE);
  static const Qr = RefineUIIconDataFilled(0xF00BF);
  static const Question = RefineUIIconDataFilled(0xF00C0);
  static const Radio = RefineUIIconDataFilled(0xF00C1);
  static const Ram = RefineUIIconDataFilled(0xF00C2);
  static const Record = RefineUIIconDataFilled(0xF00C3);
  static const Rectangle = RefineUIIconDataFilled(0xF00C4);
  static const Refineui = RefineUIIconDataFilled(0xF00C5);
  static const Rewind = RefineUIIconDataFilled(0xF00C6);
  static const Rhombus = RefineUIIconDataFilled(0xF00C7);
  static const Ribbon = RefineUIIconDataFilled(0xF00C8);
  static const Road = RefineUIIconDataFilled(0xF00C9);
  static const Rocket = RefineUIIconDataFilled(0xF00CA);
  static const Rotation = RefineUIIconDataFilled(0xF00CB);
  static const Router = RefineUIIconDataFilled(0xF00CC);
  static const Rss = RefineUIIconDataFilled(0xF00CD);
  static const Ruler = RefineUIIconDataFilled(0xF00CE);
  static const Run = RefineUIIconDataFilled(0xF00CF);
  static const Save = RefineUIIconDataFilled(0xF00D0);
  static const Scales = RefineUIIconDataFilled(0xF00D1);
  static const Script = RefineUIIconDataFilled(0xF00D2);
  static const Search = RefineUIIconDataFilled(0xF00D3);
  static const Send = RefineUIIconDataFilled(0xF00D4);
  static const Serial = RefineUIIconDataFilled(0xF00D5);
  static const Server = RefineUIIconDataFilled(0xF00D6);
  static const Service = RefineUIIconDataFilled(0xF00D7);
  static const Settings = RefineUIIconDataFilled(0xF00D8);
  static const Shape = RefineUIIconDataFilled(0xF00D9);
  static const Shapes = RefineUIIconDataFilled(0xF00DA);
  static const Share = RefineUIIconDataFilled(0xF00DB);
  static const Shell = RefineUIIconDataFilled(0xF00DC);
  static const Shield = RefineUIIconDataFilled(0xF00DD);
  static const Shopping = RefineUIIconDataFilled(0xF00DE);
  static const Sim = RefineUIIconDataFilled(0xF00DF);
  static const Slide = RefineUIIconDataFilled(0xF00E0);
  static const Smartwatch = RefineUIIconDataFilled(0xF00E1);
  static const Sound = RefineUIIconDataFilled(0xF00E2);
  static const Spacebar = RefineUIIconDataFilled(0xF00E3);
  static const Sport = RefineUIIconDataFilled(0xF00E4);
  static const Spray = RefineUIIconDataFilled(0xF00E5);
  static const Square = RefineUIIconDataFilled(0xF00E6);
  static const Star = RefineUIIconDataFilled(0xF00E7);
  static const Stop = RefineUIIconDataFilled(0xF00E8);
  static const Subtract = RefineUIIconDataFilled(0xF00E9);
  static const Swift = RefineUIIconDataFilled(0xF00EA);
  static const Tab = RefineUIIconDataFilled(0xF00EB);
  static const Tablet = RefineUIIconDataFilled(0xF00EC);
  static const Tag = RefineUIIconDataFilled(0xF00ED);
  static const Target = RefineUIIconDataFilled(0xF00EE);
  static const Temperature = RefineUIIconDataFilled(0xF00EF);
  static const Tent = RefineUIIconDataFilled(0xF00F0);
  static const Text = RefineUIIconDataFilled(0xF00F1);
  static const Textbox = RefineUIIconDataFilled(0xF00F2);
  static const Thinking = RefineUIIconDataFilled(0xF00F3);
  static const Ticket = RefineUIIconDataFilled(0xF00F4);
  static const Timer = RefineUIIconDataFilled(0xF00F5);
  static const Toggle = RefineUIIconDataFilled(0xF00F6);
  static const Toolbox = RefineUIIconDataFilled(0xF00F7);
  static const Trophy = RefineUIIconDataFilled(0xF00F8);
  static const Tv = RefineUIIconDataFilled(0xF00F9);
  static const Typescript = RefineUIIconDataFilled(0xF00FA);
  static const Umbrella = RefineUIIconDataFilled(0xF00FB);
  static const Usb = RefineUIIconDataFilled(0xF00FC);
  static const Verified = RefineUIIconDataFilled(0xF00FD);
  static const Video = RefineUIIconDataFilled(0xF00FE);
  static const Voicemail = RefineUIIconDataFilled(0xF00FF);
  static const Vote = RefineUIIconDataFilled(0xF0100);
  static const Walkie = RefineUIIconDataFilled(0xF0101);
  static const Wallet = RefineUIIconDataFilled(0xF0102);
  static const Wand = RefineUIIconDataFilled(0xF0103);
  static const Warning = RefineUIIconDataFilled(0xF0104);
  static const Washer = RefineUIIconDataFilled(0xF0105);
  static const Water = RefineUIIconDataFilled(0xF0106);
  static const Weather = RefineUIIconDataFilled(0xF0107);
  static const Web = RefineUIIconDataFilled(0xF0108);
  static const Wifi = RefineUIIconDataFilled(0xF0109);
  static const Windows = RefineUIIconDataFilled(0xF010A);
  static const Wrench = RefineUIIconDataFilled(0xF010B);
  static const Xray = RefineUIIconDataFilled(0xF010C);
  static const Zoom = RefineUIIconDataFilled(0xF010D);
}

/// Regular Icon Data Implementation
class RefineUIIconDataRegular extends RefineUIIconData {
  const RefineUIIconDataRegular(int codePoint) : super(codePoint, fontFamily: 'RefineUI-System-Icons-Regular');
  
  @override
  RefineUIIconData get filled => RefineUIIconDataFilled(codePoint);
  
  @override
  RefineUIIconData get regular => this;
  
  @override
  bool get isFilled => false;
  
  @override
  bool get isRegular => true;
}

/// Filled Icon Data Implementation
class RefineUIIconDataFilled extends RefineUIIconData {
  const RefineUIIconDataFilled(int codePoint) : super(codePoint, fontFamily: 'RefineUI-System-Icons-Filled');
  
  @override
  RefineUIIconData get filled => this;
  
  @override
  RefineUIIconData get regular => RefineUIIconDataRegular(codePoint);
  
  @override
  bool get isFilled => true;
  
  @override
  bool get isRegular => false;
}

/// Extensions for easier usage
extension RefineUIIconExtension on RefineUIIconData {
  /// Create an Icon widget with this icon data
  Icon toIcon({double? size, Color? color, String? semanticLabel}) {
    return Icon(this, size: size, color: color, semanticLabel: semanticLabel);
  }
  
  /// Create a Text widget with this icon
  Text toText({double? size, Color? color, TextStyle? style}) {
    return Text(
      String.fromCharCode(codePoint),
      style: style?.copyWith(
        fontFamily: fontFamily,
        fontSize: size,
        color: color,
      ) ?? TextStyle(
        fontFamily: fontFamily,
        fontSize: size,
        color: color,
      ),
    );
  }
}

/// Extensions for Icon widget
extension IconRefineUIExtension on Icon {
  /// Create an icon with RefineUI icon data
  static Icon refine(RefineUIIconData icon, {double? size, Color? color, String? semanticLabel}) {
    return Icon(icon, size: size, color: color, semanticLabel: semanticLabel);
  }
}

/// Extensions for Text widget
extension TextRefineUIExtension on Text {
  /// Create text with RefineUI icon
  static Text refineIcon(RefineUIIconData icon, {double? size, Color? color, TextStyle? style}) {
    return Text(
      String.fromCharCode(icon.codePoint),
      style: style?.copyWith(
        fontFamily: icon.fontFamily,
        fontSize: size,
        color: color,
      ) ?? TextStyle(
        fontFamily: icon.fontFamily,
        fontSize: size,
        color: color,
      ),
    );
  }
}
