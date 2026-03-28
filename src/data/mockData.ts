/**
 * Thanh Hoa - Landing Page Mock Data
 * Tiếng Việt
 */

export const NAV_LINKS = [
  { label: 'Trang chủ', href: '#' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Quy trình', href: '#process' },
  { label: 'Liên hệ', href: '#contact' },
] as const;

export const STATS = [
  { value: '10+', label: 'Năm kinh nghiệm' },
  { value: '5000+', label: 'Sản phẩm/ngày' },
  { value: '50+', label: 'Khách hàng B2B' },
  { value: '99%', label: 'Tỷ lệ hài lòng' },
] as const;

export const SERVICES = [
  {
    id: '01',
    title: 'Ủi hơi công nghiệp',
    description: 'Hệ thống bàn ủi hơi nước công suất lớn, xử lý mọi chất liệu vải cao cấp.',
    imageUrl: '/assets/images/steam_pressing.png',
    alt: 'Máy ủi hơi công nghiệp trong nhà máy may mặc hiện đại',
  },
  {
    id: '02',
    title: 'Đóng nút',
    description: 'Máy đóng nút tự động độ chính xác cao, đảm bảo độ bền và tính thẩm mỹ.',
    imageUrl: '/assets/images/button_attaching.png',
    alt: 'Máy đóng nút tự động đặt nút chính xác trên áo sơ mi trắng cao cấp',
  },
  {
    id: '03',
    title: 'Thêu mắt khuy',
    description: 'Đường chỉ thêu sắc sảo, đồng nhất cho các dòng sản phẩm thời trang.',
    imageUrl: '/assets/images/eyelet_stitching.png',
    alt: 'Đầu máy thêu kỹ thuật số tạo hoa văn phức tạp trên vải navy',
  },
  {
    id: '04',
    title: 'Cắt chỉ',
    description: 'Quy trình vệ sinh công nghiệp, loại bỏ hoàn toàn chỉ thừa và xơ vải.',
    imageUrl: '/assets/images/thread_trimming.png',
    alt: 'Thợ may chuyên nghiệp dùng kéo cắt chỉ thừa trên sản phẩm xa xỉ',
  },
  {
    id: '05',
    title: 'Vô bao bì',
    description: 'Đóng gói chuyên nghiệp theo yêu cầu, bảo vệ sản phẩm tốt nhất.',
    imageUrl: '/assets/images/poly_bagging.png',
    alt: 'Máy đóng gói tự động niêm phong sản phẩm hoàn thiện trong túi nhựa',
  },
] as const;

export const PROCESS_STEPS = [
  { step: 1, title: 'Nhận hàng', description: 'Tiếp nhận đơn hàng' },
  { step: 2, title: 'Kiểm tra & Xử lý', description: 'Đánh giá chất lượng' },
  { step: 3, title: 'Gia công hoàn thiện', description: 'Thực hiện ủi & hoàn thiện' },
  { step: 4, title: 'Đóng gói', description: 'Đóng gói cẩn thận' },
  { step: 5, title: 'Giao hàng', description: 'Bàn giao đúng tiến độ' },
] as const;

export const WHY_US_ITEMS = [
  {
    title: 'Công nghệ tiên tiến',
    description: 'Máy móc nhập khẩu hoàn toàn từ Nhật Bản và Châu Âu.',
  },
  {
    title: 'Đội ngũ tay nghề cao',
    description: 'Kỹ thuật viên hơn 10 năm kinh nghiệm trong ngành may mặc.',
  },
] as const;

export const FEATURE_CARDS = [
  {
    icon: 'speed',
    iconColor: 'primary',
    borderColor: 'border-primary',
    bgColor: 'bg-primary/10',
    title: 'Đúng tiến độ',
    description: 'Cam kết bàn giao hàng đúng hạn 100%.',
  },
  {
    icon: 'verified_user',
    iconColor: 'secondary',
    borderColor: 'border-secondary',
    bgColor: 'bg-secondary/10',
    title: 'Chất lượng',
    description: 'Quy trình kiểm tra QA/QC nghiêm ngặt.',
  },
  {
    icon: 'monetization_on',
    iconColor: 'tertiary',
    borderColor: 'border-tertiary',
    bgColor: 'bg-tertiary/10',
    title: 'Giá cạnh tranh',
    description: 'Tối ưu chi phí cho các đơn hàng lớn.',
  },
  {
    icon: 'support_agent',
    iconColor: 'on-secondary-container',
    borderColor: 'border-on-secondary-container',
    bgColor: 'bg-primary-fixed-dim/10',
    title: 'Hỗ trợ 24/7',
    description: 'Giải quyết mọi khiếu nại trong 24h.',
  },
] as const;

export const CONTACT_CARDS = [
  {
    icon: 'location_on',
    iconColor: 'primary',
    bgColor: 'bg-primary/10',
    title: 'Địa chỉ',
    content: '53/20 Tân Thành, Quận Tân Phú, TP.HCM',
  },
  {
    icon: 'call',
    iconColor: 'secondary',
    bgColor: 'bg-secondary/10',
    title: 'Điện thoại',
    content: '090 999 0132',
  },
  {
    icon: 'mail',
    iconColor: 'tertiary',
    bgColor: 'bg-tertiary/10',
    title: 'Email',
    content: 'thanhhoa.2311@gmail.com.vn',
  },
  {
    icon: 'schedule',
    iconColor: 'primary-fixed-dim',
    bgColor: 'bg-primary-fixed-dim/10',
    title: 'Giờ làm việc',
    content: 'Thứ 2 - Thứ 7, 8:00 - 20:00',
  },
] as const;


export const FOOTER_LINKS = [
  { label: 'Trang chủ', href: '#' },
  { label: 'Dịch vụ', href: '#services' },
  { label: 'Quy trình', href: '#process' },
  { label: 'Liên hệ', href: '#contact' },
] as const;
